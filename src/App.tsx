import { useEffect, useMemo, useState } from "react";
import { logoUrl } from "./assets";
import { ArticlesPage } from "./pages/ArticlesPage";
import { CalendarPage } from "./pages/CalendarPage";
import { ClubsPage } from "./pages/ClubsPage";
import { MapPage } from "./pages/MapPage";
import { TutorialsPage } from "./pages/TutorialsPage";

type PublicRoute = "map" | "calendar" | "tutorials" | "clubs" | "articles";

type NavItem = {
  route: PublicRoute;
  path: string;
  label: string;
};

const navItems: NavItem[] = [
  { route: "map", path: "/", label: "互動地圖" },
  { route: "calendar", path: "/calendar", label: "成發日曆" },
  { route: "tutorials", path: "/tutorials", label: "教學影片" },
  { route: "clubs", path: "/clubs", label: "火舞社團" },
  { route: "articles", path: "/articles", label: "文章連結" },
];

const routeByPath = new Map(navItems.map((item) => [item.path, item.route]));

function normalizeRoutePath(routePath: string) {
  const pathWithSlash = routePath.startsWith("/") ? routePath : `/${routePath}`;
  return pathWithSlash.length > 1 ? pathWithSlash.replace(/\/$/, "") : pathWithSlash;
}

function getFallbackRoutePath() {
  const fallbackRoutePath = new URLSearchParams(window.location.search).get("p");
  return fallbackRoutePath ? normalizeRoutePath(fallbackRoutePath) : null;
}

function getRoutePathFromLocation() {
  const fallbackRoutePath = getFallbackRoutePath();
  if (fallbackRoutePath) {
    return fallbackRoutePath;
  }

  if (window.location.hash.startsWith("#/")) {
    return normalizeRoutePath(window.location.hash.slice(1));
  }

  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  let routePath = window.location.pathname;

  if (basePath && routePath.startsWith(basePath)) {
    routePath = routePath.slice(basePath.length) || "/";
  }

  return normalizeRoutePath(routePath);
}

function getPublicRouteFromLocation(): PublicRoute {
  return routeByPath.get(getRoutePathFromLocation()) ?? "map";
}

function getRouteHref(path: string) {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");
  return path === "/" ? import.meta.env.BASE_URL : `${basePath}${path}`;
}

function replaceFallbackRouteUrl() {
  const fallbackRoutePath = getFallbackRoutePath();

  if (fallbackRoutePath && routeByPath.has(fallbackRoutePath)) {
    window.history.replaceState(null, "", getRouteHref(fallbackRoutePath));
  }
}

function PublicPage({ route }: { route: PublicRoute }) {
  if (route === "calendar") {
    return <CalendarPage />;
  }

  if (route === "tutorials") {
    return <TutorialsPage />;
  }

  if (route === "clubs") {
    return <ClubsPage />;
  }

  if (route === "articles") {
    return <ArticlesPage />;
  }

  return <MapPage />;
}

function App() {
  const copyrightYear = new Date().getFullYear();
  const [activeRoute, setActiveRoute] = useState(getPublicRouteFromLocation);
  const activeNavItem = useMemo(
    () => navItems.find((item) => item.route === activeRoute) ?? navItems[0],
    [activeRoute],
  );

  useEffect(() => {
    replaceFallbackRouteUrl();

    function handlePopState() {
      setActiveRoute(getPublicRouteFromLocation());
    }

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

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

        <nav className="view-tabs" aria-label="火舞活動資訊檢視">
          {navItems.map((item) => (
            <a
              className={activeRoute === item.route ? "view-tab is-active" : "view-tab"}
              href={getRouteHref(item.path)}
              key={item.route}
              aria-current={activeRoute === item.route ? "page" : undefined}
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
                  return;
                }

                event.preventDefault();
                window.history.pushState(null, "", getRouteHref(item.path));
                setActiveRoute(item.route);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <section aria-label={activeNavItem.label}>
          <PublicPage route={activeRoute} />
        </section>
      </section>
      <footer className="site-footer">
        <div className="site-footer__links" aria-label="Fire & Flow Donkey 社群連結">
          <a href="https://discord.gg/sDPXt8kupS" target="_blank" rel="noreferrer">
            Discord
          </a>
          <a
            href="https://www.youtube.com/@TaiwanFlowDonkey"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://x.com/flow_donkey0622?t=TWKDYw_NCEKRR_-m6AProw&amp;s=09"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a href="https://www.instagram.com/flowdonkey0622/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <p>此網頁透過 Codex 協助製作。</p>
        <p>Copyright © {copyrightYear} Fire &amp; Flow Donkey. All rights reserved.</p>
      </footer>
    </main>
  );
}

export default App;
