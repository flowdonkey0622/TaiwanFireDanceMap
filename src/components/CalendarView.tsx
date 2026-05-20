import { useMemo, useState } from "react";
import { logoUrl } from "../assets";
import type { CalendarEventTone, FireDanceEvent } from "../types";

type CalendarDay = {
  date: Date;
  inMonth: boolean;
};

const weekdays = ["Mon. 一", "Tur. 二", "Wed. 三", "Thu. 四", "Fri. 五", "Sat. 六", "Sun. 日"];

const monthNames: Record<number, string> = {
  4: "May",
  5: "June",
};

// 固定產生 6 週格線，避免切換月份時月曆版面高度跳動。
function getMonthDays(year: number, monthIndex: number): CalendarDay[] {
  const firstDay = new Date(year, monthIndex, 1);
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const startDate = new Date(year, monthIndex, 1 - mondayOffset);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + index);
    return {
      date,
      inMonth: date.getMonth() === monthIndex,
    };
  });
}

function toDateKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDayLabel(date: Date, inMonth: boolean, monthIndex: number): string {
  if (date.getDate() === 1 || !inMonth) {
    const label = monthNames[date.getMonth()] ?? date.toLocaleString("en", { month: "short" });
    return `${label} ${date.getDate()}`;
  }

  if (date.getMonth() !== monthIndex) {
    return `${date.getMonth() + 1}/${date.getDate()}`;
  }

  return String(date.getDate());
}

function isCalendarEventTone(tone: string | null | undefined): tone is CalendarEventTone {
  // 資料庫中的色調是自由文字；未知值一律回到預設樣式。
  return tone === "blue" || tone === "red" || tone === "orange" || tone === "purple";
}

function eventClassName(event: FireDanceEvent): string {
  const tone = isCalendarEventTone(event.calendarTone) ? event.calendarTone : "blue";
  return `calendar-event calendar-event--${tone}`;
}

type CalendarViewProps = {
  events: FireDanceEvent[];
};

export function CalendarView({ events }: CalendarViewProps) {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const months = useMemo(() => {
    // 月份由活動日期推導，不再額外維護月份清單。
    const monthKeys = Array.from(
      new Set(events.map((event) => event.date.slice(0, 7))),
    ).sort();

    return monthKeys.map((monthKey) => {
      const [year, month] = monthKey.split("-").map(Number);
      return { year, monthIndex: month - 1 };
    });
  }, [events]);

  const eventsByDate = useMemo(
    () =>
      events.reduce<Record<string, FireDanceEvent[]>>((groups, event) => {
        groups[event.date] = [...(groups[event.date] ?? []), event];
        return groups;
      }, {}),
    [events],
  );

  const activeMonth = months[activeMonthIndex];
  const safeActiveMonth = activeMonth ?? months[0];
  const days = safeActiveMonth
    ? getMonthDays(safeActiveMonth.year, safeActiveMonth.monthIndex)
    : [];

  const goToPreviousMonth = () => {
    setActiveMonthIndex((current) => Math.max(0, current - 1));
  };

  const goToNextMonth = () => {
    setActiveMonthIndex((current) => Math.min(months.length - 1, current + 1));
  };

  return (
    <section className="calendar-section" aria-labelledby="calendar-title">
      <div className="calendar-intro">
        <p className="eyebrow">Fire & Flow Donkey</p>
        <h2 id="calendar-title">2026 成發日曆</h2>
        <p>以月曆方式整理火舞社群成發日期，方便快速掌握密集時段與活動分布。</p>
      </div>

      {months.length === 0 ? (
        <div className="empty-state">
          <p>目前沒有已發布的活動資料。</p>
        </div>
      ) : (
      <div className="calendar-carousel">
        <div className="calendar-controls" aria-label="切換月份">
          <button
            className="calendar-nav"
            type="button"
            aria-label="上一個月"
            onClick={goToPreviousMonth}
            disabled={activeMonthIndex === 0}
          >
            ‹
          </button>
          <div className="calendar-position" aria-live="polite">
            <strong>{safeActiveMonth.year}.{String(safeActiveMonth.monthIndex + 1).padStart(2, "0")}</strong>
            <span>{activeMonthIndex + 1} / {months.length}</span>
          </div>
          <button
            className="calendar-nav"
            type="button"
            aria-label="下一個月"
            onClick={goToNextMonth}
            disabled={activeMonthIndex === months.length - 1}
          >
            ›
          </button>
        </div>

        <article
          className="calendar-board"
          key={`${safeActiveMonth.year}-${safeActiveMonth.monthIndex}`}
        >
          <header className="calendar-board__header">
            <img
              className="brand-mark"
              src={logoUrl}
              alt=""
              aria-hidden="true"
            />
            <div>
              <p>Fire & Flow</p>
              <strong>DONKEY</strong>
            </div>
          </header>

          <div className="calendar-board__month">
            <span>{safeActiveMonth.year}.{String(safeActiveMonth.monthIndex + 1).padStart(2, "0")}</span>
            <small>({monthNames[safeActiveMonth.monthIndex] ?? safeActiveMonth.monthIndex + 1})</small>
          </div>

          <div className="calendar-weekdays" aria-hidden="true">
            {weekdays.map((weekday) => (
              <span key={weekday}>{weekday}</span>
            ))}
          </div>

          <div className="calendar-grid">
            {days.map((day) => {
              const dateKey = toDateKey(day.date);
              const dayEvents = eventsByDate[dateKey] ?? [];
              return (
                <div
                  className={day.inMonth ? "calendar-cell" : "calendar-cell is-muted"}
                  key={dateKey}
                >
                  <span className="calendar-date">
                    {getDayLabel(day.date, day.inMonth, safeActiveMonth.monthIndex)}
                  </span>
                  <div className="calendar-cell__events">
                    {dayEvents.map((event) => {
                      const eventLabel = event.clubName ?? event.title;

                      return event.link ? (
                        <a
                          className={eventClassName(event)}
                          href={event.link}
                          key={event.id}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`前往${eventLabel}活動連結`}
                        >
                          {eventLabel}
                        </a>
                      ) : (
                        <span className={eventClassName(event)} key={event.id}>
                          {eventLabel}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </div>
      )}
    </section>
  );
}
