import { useEffect, useMemo, useState } from "react";
import { getCountyOrder, taiwanRegions } from "../data/taiwanRegions";
import { isSupabaseConfigured } from "../lib/supabase";
import { getPublishedClubs } from "../services/clubs";
import type { FireDanceClub } from "../types";
import { ClubLocationMap } from "./ClubLocationMap";

type LoadState = "idle" | "loading" | "success" | "error";

export function ClubDirectory() {
  const [clubs, setClubs] = useState<FireDanceClub[]>([]);
  const [loadState, setLoadState] = useState<LoadState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [openRegions, setOpenRegions] = useState<Record<string, boolean>>({
    北區: true,
    中區: true,
    南區: true,
    東區: true,
    離島: true,
  });

  useEffect(() => {
    let isMounted = true;

    async function loadClubs() {
      if (!isSupabaseConfigured) {
        setLoadState("error");
        setErrorMessage("尚未設定 Supabase 環境變數。");
        return;
      }

      setLoadState("loading");

      try {
        const nextClubs = await getPublishedClubs();
        if (isMounted) {
          setClubs(nextClubs);
          setLoadState("success");
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
          setLoadState("error");
          setErrorMessage("社團資料讀取失敗，請稍後再試。");
        }
      }
    }

    loadClubs();

    return () => {
      isMounted = false;
    };
  }, []);

  const clubsByRegion = useMemo(
    () =>
      taiwanRegions
        .map((region) => ({
          ...region,
          clubs: clubs
            .filter((club) => region.counties.includes(club.county))
            .sort(
              (a, b) =>
                getCountyOrder(a.county) - getCountyOrder(b.county) ||
                a.schoolName.localeCompare(b.schoolName, "zh-Hant"),
            ),
        }))
        .filter((region) => region.clubs.length > 0),
    [clubs],
  );
  // Region toggles keep the list scannable after clubs grow across multiple areas.
  function toggleRegion(regionLabel: string) {
    setOpenRegions({
      ...openRegions,
      [regionLabel]: !openRegions[regionLabel],
    });
  }

  return (
    <section className="club-section" aria-labelledby="club-title">
      <div className="club-intro">
        <p className="eyebrow">Campus Clubs</p>
        <h2 id="club-title">台灣火舞社團</h2>
        <p>
          收錄各地校園火舞與光舞社團資訊，資料由後台發布後同步顯示在這裡。
        </p>
      </div>

      {loadState === "loading" ? (
        <div className="empty-state" role="status">
          <p>社團資料載入中。</p>
        </div>
      ) : loadState === "error" ? (
        <div className="empty-state" role="alert">
          <p>{errorMessage}</p>
        </div>
      ) : clubs.length === 0 ? (
        <div className="empty-state">
          <p>目前沒有已發布的社團資料。</p>
        </div>
      ) : (
        <>
          <ClubLocationMap clubs={clubs} />
          <div className="club-groups">
            {clubsByRegion.map((region) => (
              <section
                className="club-group"
                key={region.label}
                aria-labelledby={`club-${region.label}`}
              >
                <button
                  className="club-group__toggle"
                  type="button"
                  onClick={() => toggleRegion(region.label)}
                  aria-expanded={openRegions[region.label]}
                >
                  <span id={`club-${region.label}`}>{region.label}</span>
                  <span>{openRegions[region.label] ? "收合" : "展開"}</span>
                </button>
                {openRegions[region.label] ? (
                  <div className="club-grid">
                    {region.clubs.map((club) => (
                      <article className="club-card" key={club.id}>
                        <div>
                          <p className="eyebrow">{club.schoolName}</p>
                          <h4>{club.clubName}</h4>
                          {club.summary ? <p>{club.summary}</p> : null}
                        </div>
                        <div className="club-card__links">
                          {club.instagramUrl ? (
                            <a href={club.instagramUrl} target="_blank" rel="noopener noreferrer">
                              Instagram
                            </a>
                          ) : null}
                          {club.youtubeUrl ? (
                            <a href={club.youtubeUrl} target="_blank" rel="noopener noreferrer">
                              YouTube
                            </a>
                          ) : null}
                        </div>
                      </article>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
