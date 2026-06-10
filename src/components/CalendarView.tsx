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

function toMonthKey(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  return `${year}-${month}`;
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
  const today = new Date();
  const todayKey = toDateKey(today);
  const todayMonthKey = toMonthKey(today);
  const [activeMonthKey, setActiveMonthKey] = useState(todayMonthKey);
  const months = useMemo(() => {
    // 固定保留今日前後兩個月；範圍外若有活動，也納入月份切換清單。
    const monthKeys = new Set(events.map((event) => event.date.slice(0, 7)));
    for (let offset = -2; offset <= 2; offset += 1) {
      monthKeys.add(toMonthKey(new Date(today.getFullYear(), today.getMonth() + offset, 1)));
    }

    return Array.from(monthKeys).sort().map((monthKey) => {
      const [year, month] = monthKey.split("-").map(Number);
      return { key: monthKey, year, monthIndex: month - 1 };
    });
  }, [events, today.getFullYear(), today.getMonth()]);

  const eventsByDate = useMemo(
    () =>
      events.reduce<Record<string, FireDanceEvent[]>>((groups, event) => {
        groups[event.date] = [...(groups[event.date] ?? []), event];
        return groups;
      }, {}),
    [events],
  );

  const requestedMonthIndex = months.findIndex((month) => month.key === activeMonthKey);
  const todayMonthIndex = months.findIndex((month) => month.key === todayMonthKey);
  const activeMonthIndex = requestedMonthIndex >= 0 ? requestedMonthIndex : todayMonthIndex;
  const safeActiveMonth = months[activeMonthIndex];
  const days = safeActiveMonth
    ? getMonthDays(safeActiveMonth.year, safeActiveMonth.monthIndex)
    : [];

  const goToPreviousMonth = () => {
    setActiveMonthKey(months[Math.max(0, activeMonthIndex - 1)].key);
  };

  const goToNextMonth = () => {
    setActiveMonthKey(months[Math.min(months.length - 1, activeMonthIndex + 1)].key);
  };

  return (
    <section className="calendar-section" aria-labelledby="calendar-title">
      <div className="calendar-intro">
        <p className="eyebrow">Fire & Flow Donkey</p>
        <h2 id="calendar-title">2026 活動日曆</h2>
        <p>以月曆方式整理火舞社群成發＆活動日期，方便快速掌握密集時段與活動分布。</p>
      </div>

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
              const isToday = dateKey === todayKey;
              const cellClassName = [
                "calendar-cell",
                !day.inMonth ? "is-muted" : "",
                isToday ? "is-today" : "",
              ]
                .filter(Boolean)
                .join(" ");
              return (
                <div
                  className={cellClassName}
                  key={dateKey}
                >
                  <span className="calendar-date">
                    {getDayLabel(day.date, day.inMonth, safeActiveMonth.monthIndex)}
                    {isToday ? <small>今日</small> : null}
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
    </section>
  );
}
