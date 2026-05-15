import { calendarEvents, type CalendarEvent } from "../data/calendarEvents";

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
  const months = [
    { year: 2026, monthIndex: 4 },
    { year: 2026, monthIndex: 5 },
  ];

  const eventsByDate = calendarEvents.reduce<Record<string, CalendarEvent[]>>(
    (groups, event) => {
      groups[event.date] = [...(groups[event.date] ?? []), event];
      return groups;
    },
    {},
  );

  return (
    <section className="calendar-section" aria-labelledby="calendar-title">
      <div className="calendar-intro">
        <p className="eyebrow">Fire & Flow Donkey</p>
        <h2 id="calendar-title">2026 成發日曆</h2>
        <p>以月曆方式整理火舞社群成發日期，方便快速掌握密集時段與活動分布。</p>
      </div>

      <div className="calendar-months">
        {months.map(({ year, monthIndex }) => {
          const days = getMonthDays(year, monthIndex);

          return (
            <article className="calendar-board" key={`${year}-${monthIndex}`}>
              <header className="calendar-board__header">
                <img
                  className="brand-mark"
                  src="/flow-donkey-logo-circle.png"
                  alt=""
                  aria-hidden="true"
                />
                <div>
                  <p>Fire & Flow</p>
                  <strong>DONKEY</strong>
                </div>
              </header>

              <div className="calendar-board__month">
                <span>{year}.{String(monthIndex + 1).padStart(2, "0")}</span>
                <small>({monthNames[monthIndex]})</small>
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
                        {getDayLabel(day.date, day.inMonth, monthIndex)}
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
          );
        })}
      </div>
    </section>
  );
}
