import { useMemo, useState } from "react";
import { calendarEvents, type CalendarEvent } from "../data/calendarEvents";
import { logoUrl } from "../assets";

type CalendarDay = {
  date: Date;
  inMonth: boolean;
};

const weekdays = ["Mon. 一", "Tur. 二", "Wed. 三", "Thu. 四", "Fri. 五", "Sat. 六", "Sun. 日"];

const monthNames: Record<number, string> = {
  4: "May",
  5: "June",
};

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

function eventClassName(event: CalendarEvent): string {
  return `calendar-event calendar-event--${event.tone}`;
}

export function CalendarView() {
  const [activeMonthIndex, setActiveMonthIndex] = useState(0);
  const months = [
    { year: 2026, monthIndex: 4 },
    { year: 2026, monthIndex: 5 },
  ];

  const eventsByDate = useMemo(
    () =>
      calendarEvents.reduce<Record<string, CalendarEvent[]>>((groups, event) => {
        groups[event.date] = [...(groups[event.date] ?? []), event];
        return groups;
      }, {}),
    [],
  );

  const activeMonth = months[activeMonthIndex];
  const days = getMonthDays(activeMonth.year, activeMonth.monthIndex);

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
            <strong>{activeMonth.year}.{String(activeMonth.monthIndex + 1).padStart(2, "0")}</strong>
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
          key={`${activeMonth.year}-${activeMonth.monthIndex}`}
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
            <span>{activeMonth.year}.{String(activeMonth.monthIndex + 1).padStart(2, "0")}</span>
            <small>({monthNames[activeMonth.monthIndex]})</small>
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
                    {getDayLabel(day.date, day.inMonth, activeMonth.monthIndex)}
                  </span>
                  <div className="calendar-cell__events">
                    {dayEvents.map((event) => (
                      <span className={eventClassName(event)} key={event.id}>
                        {event.title}
                      </span>
                    ))}
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
