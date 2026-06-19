import {
  eventTypeLabels,
  formatEventDate,
} from "../services/events";
import type { EventDateFilter, FireDanceEvent } from "../types";

type CountyPopupProps = {
  countyName: string | null;
  eventDateFilter: EventDateFilter;
  events: FireDanceEvent[];
  onClose: () => void;
  onEventDateFilterChange: (eventDateFilter: EventDateFilter) => void;
};

function eventDateFilterLabel(eventDateFilter: EventDateFilter): string {
  if (eventDateFilter === "active") {
    return "尚未結束";
  }

  if (eventDateFilter === "past") {
    return "已結束";
  }

  return "全部";
}

export function CountyPopup({
  countyName,
  eventDateFilter,
  events,
  onClose,
  onEventDateFilterChange,
}: CountyPopupProps) {
  if (!countyName) {
    return (
      <aside className="county-panel is-empty" aria-live="polite">
        <p className="eyebrow">選擇縣市</p>
        <h2>查看火舞活動資訊</h2>
        <p>點擊地圖上的縣市，這裡會顯示活動數量、近期活動與地點。</p>
      </aside>
    );
  }

  const countyEvents = events
    .filter((event) => event.county === countyName)
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <aside className="county-panel" aria-live="polite">
      <button className="icon-button close-button" type="button" onClick={onClose}>
        <span aria-hidden="true">×</span>
        <span className="sr-only">關閉縣市資訊</span>
      </button>
      <p className="eyebrow">縣市活動</p>
      <h2>{countyName}</h2>
      <label className="county-panel__filter">
        時間範圍
        <select
          value={eventDateFilter}
          onChange={(event) =>
            onEventDateFilterChange(event.target.value as EventDateFilter)
          }
        >
          <option value="all">全部活動</option>
          <option value="active">尚未結束</option>
          <option value="past">已結束</option>
        </select>
      </label>
      {countyEvents.length > 0 && (
        <p className="event-count">
          目前收錄 {countyEvents.length} 筆火舞相關活動
        </p>
      )}

      {countyEvents.length > 0 ? (
        <ul className="event-list">
          {countyEvents.map((event) => (
            <li key={event.id} className="event-card">
              <div className="event-card__meta">
                <span>{formatEventDate(event.date)}</span>
                <span>{eventTypeLabels[event.type]}</span>
              </div>
              <h3>{event.title}</h3>
              <p className="event-card__venue">{event.venue}</p>
              <p className="event-card__summary">{event.summary}</p>
              {event.link ? (
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  查看活動
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-state">
          目前沒有{eventDateFilterLabel(eventDateFilter)}的火舞相關活動。
        </p>
      )}
    </aside>
  );
}
