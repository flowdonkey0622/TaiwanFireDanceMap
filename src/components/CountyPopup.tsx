import {
  eventTypeLabels,
  formatEventDate,
  getEventsByCounty,
} from "../data/events";

type CountyPopupProps = {
  countyName: string | null;
  onClose: () => void;
};

export function CountyPopup({ countyName, onClose }: CountyPopupProps) {
  if (!countyName) {
    return (
      <aside className="county-panel is-empty" aria-live="polite">
        <p className="eyebrow">選擇縣市</p>
        <h2>查看火舞活動資訊</h2>
        <p>點擊地圖上的縣市，這裡會顯示活動數量、近期活動與地點。</p>
      </aside>
    );
  }

  const events = getEventsByCounty(countyName);

  return (
    <aside className="county-panel" aria-live="polite">
      <button className="icon-button close-button" type="button" onClick={onClose}>
        <span aria-hidden="true">×</span>
        <span className="sr-only">關閉縣市資訊</span>
      </button>
      <p className="eyebrow">縣市活動</p>
      <h2>{countyName}</h2>
      {events.length > 0 && (
        <p className="event-count">
          目前收錄 {events.length} 筆火舞相關活動
        </p>
      )}

      {events.length > 0 ? (
        <ul className="event-list">
          {events.map((event) => (
            <li key={event.id} className="event-card">
              <div className="event-card__meta">
                <span>{formatEventDate(event.date)}</span>
                <span>{eventTypeLabels[event.type]}</span>
              </div>
              <h3>{event.title}</h3>
              <p className="event-card__venue">{event.venue}</p>
              <p className="event-card__summary">{event.summary}</p>
              <a href={event.link} target="_blank" rel="noreferrer">
                查看活動
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </aside>
  );
}
