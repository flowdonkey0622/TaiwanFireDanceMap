import { useEffect, useMemo, useState } from "react";
import { logoUrl } from "./assets";
import { ArticleLinks } from "./components/ArticleLinks";
import { CalendarView } from "./components/CalendarView";
import { ClubDirectory } from "./components/ClubDirectory";
import { CountyPopup } from "./components/CountyPopup";
import { OnlineActivities } from "./components/OnlineActivities";
import { TaiwanMap } from "./components/TaiwanMap";
import { TutorialVideos } from "./components/TutorialVideos";
import { isSupabaseConfigured } from "./lib/supabase";
import { getPublishedEvents } from "./services/events";
import type { FireDanceEvent } from "./types";

type LoadState = "idle" | "loading" | "success" | "error";

function App() {
  const [activeView, setActiveView] = useState<
    "map" | "calendar" | "tutorials" | "clubs" | "articles"
  >("map");
  const [activeCounty, setActiveCounty] = useState<string | null>(null);
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);
  const [events, setEvents] = useState<FireDanceEvent[]>([]);
  const [eventsLoadState, setEventsLoadState] = useState<LoadState>("idle");
  const [eventsErrorMessage, setEventsErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadEvents() {
      if (!isSupabaseConfigured) {
        setEventsLoadState("error");
        setEventsErrorMessage("尚未設定 Supabase 環境變數。");
        return;
      }

      setEventsLoadState("loading");

      try {
        const nextEvents = await getPublishedEvents();
        if (isMounted) {
          setEvents(nextEvents);
          setEventsLoadState("success");
        }
      } catch (error) {
        if (isMounted) {
          setEventsLoadState("error");
          setEventsErrorMessage(error instanceof Error ? error.message : "活動資料讀取失敗。");
        }
      }
    }

    loadEvents();

    return () => {
      isMounted = false;
    };
  }, []);

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
    <main className="app-shell">
      <section className="map-section">
        <div className="intro">
          <div className="site-brand">
            <img
              src={logoUrl}
              alt="Fire & Flow Donkey"
            />
            <div>
              <p>Fire & Flow</p>
              <strong>DONKEY</strong>
            </div>
          </div>
          <p className="eyebrow">Fire Dance Taiwan</p>
          <h1>台灣火舞地圖＆資料庫</h1>
          <p>
            透過互動式台灣縣市地圖快速查看各地火舞工作坊、交流 Jam、演出與節慶資訊。
          </p>
        </div>

        <div className="view-tabs" role="tablist" aria-label="火舞活動資訊檢視">
          <button
            className={activeView === "map" ? "view-tab is-active" : "view-tab"}
            type="button"
            role="tab"
            aria-selected={activeView === "map"}
            onClick={() => setActiveView("map")}
          >
            互動地圖
          </button>
          <button
            className={activeView === "calendar" ? "view-tab is-active" : "view-tab"}
            type="button"
            role="tab"
            aria-selected={activeView === "calendar"}
            onClick={() => setActiveView("calendar")}
          >
            成發日曆
          </button>
          <button
            className={activeView === "tutorials" ? "view-tab is-active" : "view-tab"}
            type="button"
            role="tab"
            aria-selected={activeView === "tutorials"}
            onClick={() => setActiveView("tutorials")}
          >
            教學影片
          </button>
          <button
            className={activeView === "clubs" ? "view-tab is-active" : "view-tab"}
            type="button"
            role="tab"
            aria-selected={activeView === "clubs"}
            onClick={() => setActiveView("clubs")}
          >
            火舞社團
          </button>
          <button
            className={activeView === "articles" ? "view-tab is-active" : "view-tab"}
            type="button"
            role="tab"
            aria-selected={activeView === "articles"}
            onClick={() => setActiveView("articles")}
          >
            文章連結
          </button>
        </div>

        {activeView === "map" ? (
          <div role="tabpanel" aria-label="互動地圖">
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
          </div>
        ) : activeView === "calendar" ? (
          <div role="tabpanel" aria-label="成發日曆">
            {eventsLoadState === "loading" ? (
              <div className="empty-state" role="status">
                <p>活動資料載入中。</p>
              </div>
            ) : eventsLoadState === "error" ? (
              <div className="empty-state" role="alert">
                <p>{eventsErrorMessage}</p>
              </div>
            ) : (
              <CalendarView events={events} />
            )}
          </div>
        ) : activeView === "tutorials" ? (
          <div role="tabpanel" aria-label="教學影片">
            <TutorialVideos />
          </div>
        ) : activeView === "clubs" ? (
          <div role="tabpanel" aria-label="火舞社團">
            <ClubDirectory />
          </div>
        ) : (
          <div role="tabpanel" aria-label="文章連結">
            <ArticleLinks />
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
