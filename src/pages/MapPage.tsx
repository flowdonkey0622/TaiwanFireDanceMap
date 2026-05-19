import { useMemo, useState } from "react";
import { CountyPopup } from "../components/CountyPopup";
import { OnlineActivities } from "../components/OnlineActivities";
import { TaiwanMap } from "../components/TaiwanMap";
import { usePublishedEvents } from "../hooks/usePublishedEvents";

export function MapPage() {
  const [activeCounty, setActiveCounty] = useState<string | null>(null);
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  const { events, eventsLoadState, eventsErrorMessage } = usePublishedEvents();

  // 地圖元件只需要各縣市活動數；縣市彈窗則使用完整活動清單。
  const eventCounts = useMemo(
    () =>
      events.reduce<Record<string, number>>((counts, event) => {
        counts[event.county] = (counts[event.county] ?? 0) + 1;
        return counts;
      }, {}),
    [events],
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
          events={events}
          onClose={() => setSelectedCounty(null)}
        />
      </div>
      <OnlineActivities />
    </>
  );
}
