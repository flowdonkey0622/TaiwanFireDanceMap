import { useMemo, useState } from "react";
import { CountyPopup } from "../components/CountyPopup";
import { OnlineActivities } from "../components/OnlineActivities";
import { TaiwanMap } from "../components/TaiwanMap";
import { usePublishedEvents } from "../hooks/usePublishedEvents";
import type { EventDateFilter, FireDanceEvent } from "../types";

function getTodayDateKey(): string {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function filterEventsByDate(
  events: FireDanceEvent[],
  eventDateFilter: EventDateFilter,
): FireDanceEvent[] {
  const todayDateKey = getTodayDateKey();

  return events.filter((event) => {
    if (eventDateFilter === "active") {
      return event.date >= todayDateKey;
    }

    if (eventDateFilter === "past") {
      return event.date < todayDateKey;
    }

    return true;
  });
}

export function MapPage() {
  const [activeCounty, setActiveCounty] = useState<string | null>(null);
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  const [eventDateFilter, setEventDateFilter] =
    useState<EventDateFilter>("active");
  const { events, eventsLoadState, eventsErrorMessage } = usePublishedEvents();
  const filteredEvents = useMemo(
    () => filterEventsByDate(events, eventDateFilter),
    [eventDateFilter, events],
  );

  // 地圖元件只需要各縣市活動數；縣市彈窗則使用完整篩選後活動清單。
  const eventCounts = useMemo(
    () =>
      filteredEvents.reduce<Record<string, number>>((counts, event) => {
        counts[event.county] = (counts[event.county] ?? 0) + 1;
        return counts;
      }, {}),
    [filteredEvents],
  );

  const highlightedCounty = activeCounty ?? selectedCounty;

  return (
    <>
      {eventsLoadState === "loading" ? (
        <div className="empty-state" role="status">
          <p>活動資料載入中。</p>
        </div>
      ) : eventsLoadState === "error" ? (
        <div className="empty-state" role="alert">
          <p>{eventsErrorMessage}</p>
        </div>
      ) : null}
      <div className="workspace">
        <div className="map-card">
          <TaiwanMap
            activeCounty={activeCounty}
            selectedCounty={selectedCounty}
            eventCounts={eventCounts}
            onHoverCounty={setActiveCounty}
            onSelectCounty={setSelectedCounty}
          />
          <div className="map-status" aria-live="polite">
            {highlightedCounty ? (
              <>
                <span>{highlightedCounty}</span>
                <strong>{eventCounts[highlightedCounty] ?? 0}</strong>
                <span>筆活動</span>
              </>
            ) : (
              <span>滑過或點擊縣市查看活動</span>
            )}
          </div>
        </div>

        <CountyPopup
          countyName={selectedCounty}
          eventDateFilter={eventDateFilter}
          events={filteredEvents}
          onClose={() => setSelectedCounty(null)}
          onEventDateFilterChange={setEventDateFilter}
        />
      </div>
      <OnlineActivities />
    </>
  );
}
