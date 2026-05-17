import { FormEvent, useEffect, useMemo, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { logoUrl } from "../assets";
import { eventTypeLabels } from "../data/events";
import { counties, taiwanRegions } from "../data/taiwanRegions";
import { isSupabaseConfigured, supabase } from "../lib/supabase";
import {
  archiveClub,
  createClub,
  getManagedClubs,
  updateClub,
  type ClubInput,
  type ClubStatus,
} from "../services/clubs";
import {
  archiveEvent,
  createEvent,
  getManagedEvents,
  updateEvent,
  type EventInput,
  type EventStatus,
  type EventType,
  type ManagedEvent,
} from "../services/events";
import type { FireDanceClub } from "../types";

type AdminSection = "clubs" | "events";

const emptyClubForm: ClubInput = {
  schoolName: "",
  clubName: "",
  county: "臺北市",
  summary: "",
  instagramUrl: "",
  youtubeUrl: "",
  status: "draft",
};

const emptyEventForm: EventInput = {
  title: "",
  eventDate: "",
  county: "臺北市",
  venue: "",
  type: "performance",
  summary: "",
  link: "",
  status: "draft",
  clubId: "",
  slug: "",
  calendarTitle: "",
  calendarTone: "",
};

function toClubFormState(club: FireDanceClub): ClubInput {
  return {
    schoolName: club.schoolName,
    clubName: club.clubName,
    county: club.county,
    summary: club.summary,
    instagramUrl: club.instagramUrl ?? "",
    youtubeUrl: club.youtubeUrl ?? "",
    status: club.status ?? "draft",
  };
}

function toEventFormState(event: ManagedEvent): EventInput {
  return {
    title: event.title,
    eventDate: event.date,
    county: event.county,
    venue: event.venue,
    type: event.type,
    summary: event.summary,
    link: event.link,
    status: event.status,
    clubId: event.clubId ?? "",
    slug: event.slug ?? "",
    calendarTitle: event.calendarTitle ?? "",
    calendarTone: event.calendarTone ?? "",
  };
}

function statusLabel(status: ClubStatus | EventStatus | undefined): string {
  if (status === "published") {
    return "已發布";
  }

  if (status === "archived") {
    return "已封存";
  }

  return "草稿";
}

export function AdminApp() {
  const [activeSection, setActiveSection] = useState<AdminSection>("clubs");
  const [session, setSession] = useState<Session | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clubs, setClubs] = useState<FireDanceClub[]>([]);
  const [events, setEvents] = useState<ManagedEvent[]>([]);
  const [selectedClubId, setSelectedClubId] = useState<string | null>(null);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [formState, setFormState] = useState<ClubInput>(emptyClubForm);
  const [eventFormState, setEventFormState] = useState<EventInput>(emptyEventForm);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const selectedClub = useMemo(
    () => clubs.find((club) => club.id === selectedClubId) ?? null,
    [clubs, selectedClubId],
  );
  const selectedEvent = useMemo(
    () => events.find((event) => event.id === selectedEventId) ?? null,
    [events, selectedEventId],
  );
  // While creating, existing club buttons stay disabled so unsaved form input is not lost.
  const isCreatingClub = selectedClubId === null;
  const isCreatingEvent = selectedEventId === null;
  const clubsByRegion = useMemo(
    () =>
      taiwanRegions
        .map((region) => ({
          ...region,
          clubs: clubs.filter((club) => region.counties.includes(club.county)),
        }))
        .filter((region) => region.clubs.length > 0),
    [clubs],
  );
  const adminTitle = activeSection === "clubs" ? "社團資料後台" : "活動資料後台";

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
      setEvents([]);
      return;
    }

    if (activeSection === "clubs") {
      loadClubs();
    } else {
      loadEvents();
      loadClubs();
    }
  }, [session, activeSection]);

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

  async function loadEvents() {
    setErrorMessage("");

    try {
      const nextEvents = await getManagedEvents();
      setEvents(nextEvents);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "活動資料讀取失敗。",
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
    setSelectedEventId(null);
    setFormState(emptyClubForm);
    setEventFormState(emptyEventForm);
    setMessage("");
  }

  function handleSelectSection(section: AdminSection) {
    setActiveSection(section);
    setMessage("");
    setErrorMessage("");
  }

  function handleSelectClub(club: FireDanceClub) {
    if (isCreatingClub) {
      return;
    }

    setSelectedClubId(club.id);
    setFormState(toClubFormState(club));
    setMessage("");
    setErrorMessage("");
  }

  function handleNewClub() {
    setSelectedClubId(null);
    setFormState(emptyClubForm);
    setMessage("");
    setErrorMessage("");
  }

  function handleCancelNewClub() {
    const firstClub = clubs[0] ?? null;
    setSelectedClubId(firstClub?.id ?? null);
    setFormState(firstClub ? toClubFormState(firstClub) : emptyClubForm);
    setMessage("");
    setErrorMessage("");
  }

  function handleSelectEvent(event: ManagedEvent) {
    if (isCreatingEvent) {
      return;
    }

    setSelectedEventId(event.id);
    setEventFormState(toEventFormState(event));
    setMessage("");
    setErrorMessage("");
  }

  function handleNewEvent() {
    setSelectedEventId(null);
    setEventFormState(emptyEventForm);
    setMessage("");
    setErrorMessage("");
  }

  function handleCancelNewEvent() {
    const firstEvent = events[0] ?? null;
    setSelectedEventId(firstEvent?.id ?? null);
    setEventFormState(firstEvent ? toEventFormState(firstEvent) : emptyEventForm);
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

  async function handleSaveEvent(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSaving(true);
    setMessage("");
    setErrorMessage("");

    try {
      if (selectedEventId) {
        await updateEvent(selectedEventId, eventFormState);
        setMessage("活動資料已更新。");
      } else {
        await createEvent(eventFormState);
        setMessage("活動資料已新增。");
      }

      await loadEvents();
      handleNewEvent();
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "活動資料儲存失敗。");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleArchiveEvent() {
    if (!selectedEventId) {
      return;
    }

    setIsSaving(true);
    setMessage("");
    setErrorMessage("");

    try {
      await archiveEvent(selectedEventId);
      await loadEvents();
      handleNewEvent();
      setMessage("活動資料已封存。");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "活動資料封存失敗。");
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
          <h1>{adminTitle}</h1>
        </div>
        <button className="admin-secondary-button" type="button" onClick={handleLogout}>
          登出
        </button>
      </header>

      <nav className="admin-section-tabs" aria-label="後台管理分類">
        <button
          className={activeSection === "clubs" ? "is-active" : ""}
          type="button"
          onClick={() => handleSelectSection("clubs")}
        >
          社團
        </button>
        <button
          className={activeSection === "events" ? "is-active" : ""}
          type="button"
          onClick={() => handleSelectSection("events")}
        >
          活動
        </button>
      </nav>

      <div className="admin-layout">
        {activeSection === "clubs" ? (
          <>
            <section className="admin-card">
              <div className="admin-card__title">
                <h2>社團列表</h2>
                <button type="button" onClick={handleNewClub} disabled={isCreatingClub}>
                  新增社團
                </button>
              </div>
              <div className="admin-list">
                {clubsByRegion.map((region) => (
                  <div className="admin-list-region" key={region.label}>
                    <h3>{region.label}</h3>
                    {region.clubs.map((club) => (
                      <button
                        className={
                          selectedClub?.id === club.id
                            ? "admin-list-item is-active"
                            : "admin-list-item"
                        }
                        type="button"
                        key={club.id}
                        onClick={() => handleSelectClub(club)}
                        disabled={isCreatingClub}
                      >
                        <span>{club.clubName}</span>
                        <small>
                          {club.county} / {statusLabel(club.status)}
                        </small>
                      </button>
                    ))}
                  </div>
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
                  連結社團
                  <select
                    value={eventFormState.clubId}
                    onChange={(event) =>
                      setEventFormState({ ...eventFormState, clubId: event.target.value })
                    }
                  >
                    <option value="">非社團活動</option>
                    {clubs.map((club) => (
                      <option value={club.id} key={club.id}>
                        {club.clubName}
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
                  YouTube 頻道 URL
                  <input
                    type="url"
                    value={formState.youtubeUrl}
                    onChange={(event) =>
                      setFormState({ ...formState, youtubeUrl: event.target.value })
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
                  ) : (
                    <button
                      className="admin-secondary-button"
                      type="button"
                      onClick={handleCancelNewClub}
                      disabled={isSaving}
                    >
                      取消新增
                    </button>
                  )}
                </div>
              </form>
            </section>
          </>
        ) : (
          <>
            <section className="admin-card">
              <div className="admin-card__title">
                <h2>活動列表</h2>
                <button type="button" onClick={handleNewEvent} disabled={isCreatingEvent}>
                  新增活動
                </button>
              </div>
              <div className="admin-list">
                {events.map((event) => (
                  <button
                    className={
                      selectedEvent?.id === event.id
                        ? "admin-list-item is-active"
                        : "admin-list-item"
                    }
                    type="button"
                    key={event.id}
                    onClick={() => handleSelectEvent(event)}
                    disabled={isCreatingEvent}
                  >
                    <span>{event.title}</span>
                    <small>
                      {event.date} / {event.county} / {statusLabel(event.status)}
                    </small>
                  </button>
                ))}
              </div>
            </section>

            <section className="admin-card">
              <h2>{selectedEvent ? "編輯活動" : "新增活動"}</h2>
              <form className="admin-form" onSubmit={handleSaveEvent}>
                <label>
                  活動名稱
                  <input
                    value={eventFormState.title}
                    onChange={(event) =>
                      setEventFormState({ ...eventFormState, title: event.target.value })
                    }
                    required
                  />
                </label>
                <label>
                  活動日期
                  <input
                    type="date"
                    value={eventFormState.eventDate}
                    onChange={(event) =>
                      setEventFormState({ ...eventFormState, eventDate: event.target.value })
                    }
                    required
                  />
                </label>
                <label>
                  縣市
                  <select
                    value={eventFormState.county}
                    onChange={(event) =>
                      setEventFormState({ ...eventFormState, county: event.target.value })
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
                  地點
                  <input
                    value={eventFormState.venue}
                    onChange={(event) =>
                      setEventFormState({ ...eventFormState, venue: event.target.value })
                    }
                    required
                  />
                </label>
                <label>
                  類型
                  <select
                    value={eventFormState.type}
                    onChange={(event) =>
                      setEventFormState({
                        ...eventFormState,
                        type: event.target.value as EventType,
                      })
                    }
                  >
                    {Object.entries(eventTypeLabels).map(([value, label]) => (
                      <option value={value} key={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  簡介
                  <textarea
                    rows={4}
                    value={eventFormState.summary}
                    onChange={(event) =>
                      setEventFormState({ ...eventFormState, summary: event.target.value })
                    }
                    required
                  />
                </label>
                <label>
                  活動連結
                  <input
                    type="url"
                    value={eventFormState.link}
                    onChange={(event) =>
                      setEventFormState({ ...eventFormState, link: event.target.value })
                    }
                    required
                  />
                </label>
                <label>
                  Slug
                  <input
                    value={eventFormState.slug}
                    onChange={(event) =>
                      setEventFormState({ ...eventFormState, slug: event.target.value })
                    }
                  />
                </label>
                <label>
                  日曆短標題
                  <input
                    value={eventFormState.calendarTitle}
                    onChange={(event) =>
                      setEventFormState({
                        ...eventFormState,
                        calendarTitle: event.target.value,
                      })
                    }
                  />
                </label>
                <label>
                  日曆色調
                  <input
                    value={eventFormState.calendarTone}
                    onChange={(event) =>
                      setEventFormState({
                        ...eventFormState,
                        calendarTone: event.target.value,
                      })
                    }
                  />
                </label>
                <label>
                  狀態
                  <select
                    value={eventFormState.status}
                    onChange={(event) =>
                      setEventFormState({
                        ...eventFormState,
                        status: event.target.value as EventStatus,
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
                  {selectedEventId ? (
                    <button
                      className="admin-secondary-button"
                      type="button"
                      onClick={handleArchiveEvent}
                      disabled={isSaving}
                    >
                      封存
                    </button>
                  ) : (
                    <button
                      className="admin-secondary-button"
                      type="button"
                      onClick={handleCancelNewEvent}
                      disabled={isSaving}
                    >
                      取消新增
                    </button>
                  )}
                </div>
              </form>
            </section>
          </>
        )}
      </div>
    </main>
  );
}
