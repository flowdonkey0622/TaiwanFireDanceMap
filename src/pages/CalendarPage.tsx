import { CalendarView } from "../components/CalendarView";
import { usePublishedEvents } from "../hooks/usePublishedEvents";

export function CalendarPage() {
  // 月曆月份由 published events 推導，資料來源與地圖相同。
  const { events, eventsLoadState, eventsErrorMessage } = usePublishedEvents();

  if (eventsLoadState === "loading") {
    return (
      <div className="empty-state" role="status">
        <p>活動資料載入中。</p>
      </div>
    );
  }

  if (eventsLoadState === "error") {
    return (
      <div className="empty-state" role="alert">
        <p>{eventsErrorMessage}</p>
      </div>
    );
  }

  return <CalendarView events={events} />;
}
