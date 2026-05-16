import { useMemo, useState } from "react";
import { logoUrl } from "./assets";
import { ArticleLinks } from "./components/ArticleLinks";
import { CalendarView } from "./components/CalendarView";
import { ClubDirectory } from "./components/ClubDirectory";
import { CountyPopup } from "./components/CountyPopup";
import { OnlineActivities } from "./components/OnlineActivities";
import { TaiwanMap } from "./components/TaiwanMap";
import { TutorialVideos } from "./components/TutorialVideos";
import { fireDanceEvents } from "./data/events";

function App() {
  const [activeView, setActiveView] = useState<
    "map" | "calendar" | "tutorials" | "clubs" | "articles"
  >("map");
  const [activeCounty, setActiveCounty] = useState<string | null>(null);
  const [selectedCounty, setSelectedCounty] = useState<string | null>(null);

  const eventCounts = useMemo(
    () =>
      fireDanceEvents.reduce<Record<string, number>>((counts, event) => {
        counts[event.county] = (counts[event.county] ?? 0) + 1;
        return counts;
      }, {}),
    [],
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
          <h1>台灣火舞活動地圖</h1>
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
                onClose={() => setSelectedCounty(null)}
              />
            </div>
            <OnlineActivities />
          </div>
        ) : activeView === "calendar" ? (
          <div role="tabpanel" aria-label="成發日曆">
            <CalendarView />
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
