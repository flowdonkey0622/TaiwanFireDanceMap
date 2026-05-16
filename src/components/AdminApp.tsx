import { FormEvent, useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { logoUrl } from "../assets";
import { isSupabaseConfigured, supabase } from "../lib/supabase";
import {
  archiveClub,
  createClub,
  getManagedClubs,
  updateClub,
  type ClubInput,
  type ClubStatus,
} from "../services/clubs";
import type { FireDanceClub } from "../types";

const counties = [
  "臺北市",
  "新北市",
  "桃園市",
  "新竹市",
  "新竹縣",
  "苗栗縣",
  "臺中市",
  "彰化縣",
  "南投縣",
  "雲林縣",
  "嘉義市",
  "嘉義縣",
  "臺南市",
  "高雄市",
  "屏東縣",
  "宜蘭縣",
  "花蓮縣",
  "臺東縣",
  "澎湖縣",
  "金門縣",
  "連江縣",
];

const emptyClubForm: ClubInput = {
  schoolName: "",
  clubName: "",
  county: "臺北市",
  summary: "",
  instagramUrl: "",
  websiteUrl: "",
  status: "draft",
};

function toFormState(club: FireDanceClub): ClubInput {
  return {
    schoolName: club.schoolName,
    clubName: club.clubName,
    county: club.county,
    summary: club.summary,
    instagramUrl: club.instagramUrl ?? "",
    websiteUrl: club.websiteUrl ?? "",
    status: club.status ?? "draft",
  };
}

function statusLabel(status: ClubStatus | undefined): string {
  if (status === "published") {
    return "已發布";
  }

  if (status === "archived") {
    return "已封存";
  }

  return "草稿";
}

export function AdminApp() {
  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clubs, setClubs] = useState<FireDanceClub[]>([]);
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);
  const [formState, setFormState] = useState<ClubInput>(emptyClubForm);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedClub = useMemo(
    () => clubs.find((club) => club.id === selectedClubId) ?? null,
    [clubs, selectedClubId],
  );

  useEffect(() => {
    if (!supabase) {
      setIsLoading(false);
      setErrorMessage("尚未設定 Supabase 環境變數。");
      return;
    }

    let isMounted = true;

    supabase.auth.getSession().then(({ data }) => {
      if (isMounted) {
        setSession(data.session);
        setIsLoading(false);
      }
    });

    const { data } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => {
      isMounted = false;
      data.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!session) {
      setClubs([]);
      return;
    }

    loadClubs();
  }, [session]);

  async function loadClubs() {
    setErrorMessage("");

    try {
      const nextClubs = await getManagedClubs();
      setClubs(nextClubs);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "社團資料讀取失敗。",
      );
    }
  }

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!supabase) {
      setErrorMessage("尚未設定 Supabase 環境變數。");
      return;
    }

    setIsSaving(true);
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setIsSaving(false);

    if (error) {
      setErrorMessage(error.message);
    }
  }

  async function handleLogout() {
    if (!supabase) {
      return;
    }

    await supabase.auth.signOut();
    setSelectedClubId(null);
    setFormState(emptyClubForm);
    setMessage("");
  }

  function handleSelectClub(club: FireDanceClub) {
    setSelectedClubId(club.id);
    setFormState(toFormState(club));
    setMessage("");
    setErrorMessage("");
  }

  function handleNewClub() {
    setSelectedClubId(null);
    setFormState(emptyClubForm);
    setMessage("");
    setErrorMessage("");
  }

  async function handleSaveClub(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");
    setErrorMessage("");

    try {
      if (selectedClubId) {
        await updateClub(selectedClubId, formState);
        setMessage("社團資料已更新。");
      } else {
        await createClub(formState);
        setMessage("社團資料已新增。");
      }

      await loadClubs();
      handleNewClub();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "社團資料儲存失敗。");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleArchiveClub() {
    if (!selectedClubId) {
      return;
    }

    setIsSaving(true);
    setMessage("");
    setErrorMessage("");

    try {
      await archiveClub(selectedClubId);
      await loadClubs();
      handleNewClub();
      setMessage("社團資料已封存。");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "社團資料封存失敗。");
    } finally {
      setIsSaving(false);
    }
  }

  if (isLoading) {
    return (
      <main className="admin-shell">
        <p>後台載入中。</p>
      </main>
    );
  }

  if (!isSupabaseConfigured) {
    return (
      <main className="admin-shell">
        <section className="admin-card">
          <h1>後台無法啟動</h1>
          <p>請先設定 Supabase 環境變數。</p>
        </section>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="admin-shell">
        <section className="admin-login">
          <div className="site-brand">
            <img src={logoUrl} alt="Fire & Flow Donkey" />
            <div>
              <p>Fire & Flow</p>
              <strong>DONKEY</strong>
            </div>
          </div>
          <p className="eyebrow">Admin</p>
          <h1>管理員登入</h1>
          <form className="admin-form" onSubmit={handleLogin}>
            <label>
              Email
              <input
                autoComplete="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                autoComplete="current-password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
            {errorMessage ? <p className="admin-error">{errorMessage}</p> : null}
            <button type="submit" disabled={isSaving}>
              {isSaving ? "登入中" : "登入"}
            </button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="admin-shell">
      <header className="admin-header">
        <div>
          <p className="eyebrow">Admin</p>
          <h1>社團資料後台</h1>
        </div>
        <button className="admin-secondary-button" type="button" onClick={handleLogout}>
          登出
        </button>
      </header>

      <div className="admin-layout">
        <section className="admin-card">
          <div className="admin-card__title">
            <h2>社團列表</h2>
            <button type="button" onClick={handleNewClub}>
              新增社團
            </button>
          </div>
          <div className="admin-list">
            {clubs.map((club) => (
              <button
                className={
                  selectedClub?.id === club.id
                    ? "admin-list-item is-active"
                    : "admin-list-item"
                }
                type="button"
                key={club.id}
                onClick={() => handleSelectClub(club)}
              >
                <span>{club.clubName}</span>
                <small>
                  {club.county} / {statusLabel(club.status)}
                </small>
              </button>
            ))}
          </div>
        </section>

        <section className="admin-card">
          <h2>{selectedClub ? "編輯社團" : "新增社團"}</h2>
          <form className="admin-form" onSubmit={handleSaveClub}>
            <label>
              社團名稱
              <input
                value={formState.clubName}
                onChange={(event) =>
                  setFormState({ ...formState, clubName: event.target.value })
                }
                required
              />
            </label>
            <label>
              學校名稱
              <input
                value={formState.schoolName}
                onChange={(event) =>
                  setFormState({ ...formState, schoolName: event.target.value })
                }
                required
              />
            </label>
            <label>
              縣市
              <select
                value={formState.county}
                onChange={(event) =>
                  setFormState({ ...formState, county: event.target.value })
                }
                required
              >
                {counties.map((county) => (
                  <option value={county} key={county}>
                    {county}
                  </option>
                ))}
              </select>
            </label>
            <label>
              簡介
              <textarea
                rows={4}
                value={formState.summary}
                onChange={(event) =>
                  setFormState({ ...formState, summary: event.target.value })
                }
              />
            </label>
            <label>
              Instagram URL
              <input
                type="url"
                value={formState.instagramUrl}
                onChange={(event) =>
                  setFormState({ ...formState, instagramUrl: event.target.value })
                }
              />
            </label>
            <label>
              粉絲專頁 / 網站 URL
              <input
                type="url"
                value={formState.websiteUrl}
                onChange={(event) =>
                  setFormState({ ...formState, websiteUrl: event.target.value })
                }
              />
            </label>
            <label>
              狀態
              <select
                value={formState.status}
                onChange={(event) =>
                  setFormState({
                    ...formState,
                    status: event.target.value as ClubStatus,
                  })
                }
              >
                <option value="draft">草稿</option>
                <option value="published">發布</option>
                <option value="archived">封存</option>
              </select>
            </label>

            {message ? <p className="admin-success">{message}</p> : null}
            {errorMessage ? <p className="admin-error">{errorMessage}</p> : null}

            <div className="admin-actions">
              <button type="submit" disabled={isSaving}>
                {isSaving ? "儲存中" : "儲存"}
              </button>
              {selectedClubId ? (
                <button
                  className="admin-secondary-button"
                  type="button"
                  onClick={handleArchiveClub}
                  disabled={isSaving}
                >
                  封存
                </button>
              ) : null}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
