import { supabase } from "../lib/supabase";
import type { FireDanceEvent } from "../types";

export type EventStatus = "draft" | "published" | "archived";
export type EventType = FireDanceEvent["type"];

export type ManagedEvent = FireDanceEvent & {
  status: EventStatus;
  slug: string | null;
  calendarTitle: string | null;
  calendarTone: string | null;
};

export type EventInput = {
  title: string;
  eventDate: string;
  county: string;
  venue: string;
  type: EventType;
  summary: string;
  link: string;
  status: EventStatus;
  clubId: string;
  slug: string;
  calendarTitle: string;
  calendarTone: string;
};

type EventRow = {
  id: string;
  title: string;
  event_date: string;
  county: string;
  venue: string;
  type: string;
  summary: string;
  link: string;
  status: string;
  club_id: string | null;
  clubs: { club_name: string } | { club_name: string }[] | null;
  slug: string | null;
  calendar_title: string | null;
  calendar_tone: string | null;
};

const eventStatuses: EventStatus[] = ["draft", "published", "archived"];
const eventTypes: EventType[] = ["workshop", "jam", "performance", "festival"];

function getTrimmedText(value: string, label: string, maxLength: number): string {
  const trimmedValue = value.trim();

  if (trimmedValue.length > maxLength) {
    throw new Error(`${label} 最多 ${maxLength} 個字。`);
  }

  return trimmedValue;
}

function isEventStatus(status: unknown): status is EventStatus {
  return eventStatuses.includes(status as EventStatus);
}

function isEventType(type: unknown): type is EventType {
  return eventTypes.includes(type as EventType);
}

function getSafeExternalUrl(url: string | null): string | null {
  if (!url) {
    return null;
  }

  const trimmedUrl = url.trim();

  if (!trimmedUrl) {
    return null;
  }

  try {
    const parsedUrl = new URL(trimmedUrl);
    return parsedUrl.protocol === "https:" || parsedUrl.protocol === "http:"
      ? parsedUrl.toString()
      : null;
  } catch {
    return null;
  }
}

function getInputExternalUrl(url: string, label: string): string {
  const safeUrl = getSafeExternalUrl(url);

  if (!safeUrl) {
    throw new Error(`${label} 只允許 http 或 https URL。`);
  }

  return safeUrl;
}

function getJoinedClubName(clubs: EventRow["clubs"]): string | null {
  if (Array.isArray(clubs)) {
    return clubs[0]?.club_name ?? null;
  }

  return clubs?.club_name ?? null;
}

// Keep database column mapping isolated here so admin components stay camelCase.
function toManagedEvent(row: EventRow): ManagedEvent {
  return {
    id: row.id,
    title: row.title,
    date: row.event_date,
    county: row.county,
    venue: row.venue,
    type: isEventType(row.type) ? row.type : "performance",
    summary: row.summary,
    link: getSafeExternalUrl(row.link) ?? "",
    clubId: row.club_id,
    clubName: getJoinedClubName(row.clubs),
    status: isEventStatus(row.status) ? row.status : "draft",
    slug: row.slug,
    calendarTitle: row.calendar_title,
    calendarTone: row.calendar_tone,
  };
}

function toEventRow(input: EventInput) {
  if (!isEventType(input.type)) {
    throw new Error("活動類型不正確。");
  }

  if (!isEventStatus(input.status)) {
    throw new Error("活動狀態不正確。");
  }

  return {
    title: getTrimmedText(input.title, "活動名稱", 160),
    event_date: input.eventDate,
    county: getTrimmedText(input.county, "縣市", 32),
    venue: getTrimmedText(input.venue, "地點", 160),
    type: input.type,
    summary: getTrimmedText(input.summary, "簡介", 2000),
    link: getInputExternalUrl(input.link, "活動連結"),
    status: input.status,
    club_id: input.clubId || null,
    slug: getTrimmedText(input.slug, "Slug", 120) || null,
    calendar_title: getTrimmedText(input.calendarTitle, "日曆短標題", 80) || null,
    calendar_tone: getTrimmedText(input.calendarTone, "日曆色調", 32) || null,
  };
}

export async function getManagedEvents(): Promise<ManagedEvent[]> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { data, error } = await supabase
    .from("events")
    .select(
      "id, title, event_date, county, venue, type, summary, link, status, club_id, slug, calendar_title, calendar_tone, clubs(club_name)",
    )
    .order("event_date", { ascending: true })
    .order("title", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map(toManagedEvent);
}

export async function getPublishedEvents(): Promise<FireDanceEvent[]> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { data, error } = await supabase
    .from("events")
    .select(
      "id, title, event_date, county, venue, type, summary, link, status, club_id, slug, calendar_title, calendar_tone, clubs(club_name)",
    )
    .eq("status", "published")
    .order("event_date", { ascending: true })
    .order("title", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map(toManagedEvent);
}

export async function createEvent(input: EventInput): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { error } = await supabase.from("events").insert(toEventRow(input));

  if (error) {
    throw error;
  }
}

export async function updateEvent(id: string, input: EventInput): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { error } = await supabase.from("events").update(toEventRow(input)).eq("id", id);

  if (error) {
    throw error;
  }
}

export async function archiveEvent(id: string): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { error } = await supabase
    .from("events")
    .update({ status: "archived" })
    .eq("id", id);

  if (error) {
    throw error;
  }
}
