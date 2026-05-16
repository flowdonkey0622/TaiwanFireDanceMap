import { useEffect, useMemo, useState } from "react";
import { isSupabaseConfigured } from "../lib/supabase";
import { getPublishedClubs } from "../services/clubs";
import type { FireDanceClub } from "../types";

type LoadState = "idle" | "loading" | "success" | "error";

export function ClubDirectory() {
  const [clubs, setClubs] = useState<FireDanceClub[]>([]);
  const [loadState, setLoadState] = useState<LoadState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
          setLoadState("error");
          setErrorMessage(error instanceof Error ? error.message : "社團資料讀取失敗。");
        }
      }
    }

    loadClubs();

    return () => {
      isMounted = false;
    };
  }, []);

  const clubsByCounty = useMemo(
    () =>
      clubs.reduce<Record<string, FireDanceClub[]>>((groups, club) => {
        groups[club.county] = [...(groups[club.county] ?? []), club];
        return groups;
      }, {}),
    [clubs],
  );

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
        <div className="club-groups">
          {Object.entries(clubsByCounty).map(([county, countyClubs]) => (
            <section className="club-group" key={county} aria-labelledby={`club-${county}`}>
              <h3 id={`club-${county}`}>{county}</h3>
              <div className="club-grid">
                {countyClubs.map((club) => (
                  <article className="club-card" key={club.id}>
                    <div>
                      <p className="eyebrow">{club.schoolName}</p>
                      <h4>{club.clubName}</h4>
                      {club.summary ? <p>{club.summary}</p> : null}
                    </div>
                    <div className="club-card__links">
                      {club.instagramUrl ? (
                        <a href={club.instagramUrl} target="_blank" rel="noreferrer">
                          Instagram
                        </a>
                      ) : null}
                      {club.websiteUrl ? (
                        <a href={club.websiteUrl} target="_blank" rel="noreferrer">
                          粉絲專頁
                        </a>
                      ) : null}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </section>
  );
}
