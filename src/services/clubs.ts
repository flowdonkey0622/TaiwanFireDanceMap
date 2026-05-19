import { supabase } from "../lib/supabase";
import type { FireDanceClub } from "../types";

export type ClubStatus = "draft" | "published" | "archived";

export type ClubInput = {
  schoolName: string;
  clubName: string;
  county: string;
  summary: string;
  instagramUrl: string;
  youtubeUrl: string;
  status: ClubStatus;
};

type ClubRow = {
  id: string;
  school_name: string;
  club_name: string;
  county: string;
  summary: string;
  instagram_url: string | null;
  youtube_url: string | null;
  status?: ClubStatus;
};

const clubStatuses: ClubStatus[] = ["draft", "published", "archived"];

// 在 service 層驗證欄位，讓後台表單規則與資料庫寫入保持一致。
function getTrimmedText(value: string, label: string, maxLength: number): string {
  const trimmedValue = value.trim();

  if (trimmedValue.length > maxLength) {
    throw new Error(`${label} 最多 ${maxLength} 個字。`);
  }

  return trimmedValue;
}

function isClubStatus(status: unknown): status is ClubStatus {
  return clubStatuses.includes(status as ClubStatus);
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

function getInputExternalUrl(url: string, label: string): string | null {
  const safeUrl = getSafeExternalUrl(url);

  if (url.trim() && !safeUrl) {
    throw new Error(`${label} 只允許 http 或 https URL。`);
  }

  return safeUrl;
}

// 資料庫欄位轉換集中在這裡，UI 元件可維持 camelCase 命名。
function toFireDanceClub(row: ClubRow): FireDanceClub {
  return {
    id: row.id,
    schoolName: row.school_name,
    clubName: row.club_name,
    county: row.county,
    summary: row.summary,
    instagramUrl: getSafeExternalUrl(row.instagram_url),
    youtubeUrl: getSafeExternalUrl(row.youtube_url),
    status: isClubStatus(row.status) ? row.status : undefined,
  };
}

function toClubRow(input: ClubInput) {
  // 介面層命名只在這裡轉回資料庫使用的 snake_case。
  if (!isClubStatus(input.status)) {
    throw new Error("社團狀態不正確。");
  }

  return {
    school_name: getTrimmedText(input.schoolName, "學校名稱", 120),
    club_name: getTrimmedText(input.clubName, "社團名稱", 120),
    county: getTrimmedText(input.county, "縣市", 32),
    summary: getTrimmedText(input.summary, "簡介", 2000),
    instagram_url: getInputExternalUrl(input.instagramUrl, "Instagram URL"),
    youtube_url: getInputExternalUrl(input.youtubeUrl, "YouTube URL"),
    status: input.status,
  };
}

export async function getPublishedClubs(): Promise<FireDanceClub[]> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { data, error } = await supabase
    .from("clubs")
    .select(
      "id, school_name, club_name, county, summary, instagram_url, youtube_url",
    )
    .eq("status", "published")
    .order("county", { ascending: true })
    .order("school_name", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map(toFireDanceClub);
}

export async function getManagedClubs(): Promise<FireDanceClub[]> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { data, error } = await supabase
    .from("clubs")
    .select(
      "id, school_name, club_name, county, summary, instagram_url, youtube_url, status",
    )
    .order("county", { ascending: true })
    .order("school_name", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map(toFireDanceClub);
}

export async function createClub(input: ClubInput): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { error } = await supabase.from("clubs").insert(toClubRow(input));

  if (error) {
    throw error;
  }
}

export async function updateClub(id: string, input: ClubInput): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { error } = await supabase.from("clubs").update(toClubRow(input)).eq("id", id);

  if (error) {
    throw error;
  }
}

export async function archiveClub(id: string): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { error } = await supabase
    .from("clubs")
    .update({ status: "archived" })
    .eq("id", id);

  if (error) {
    throw error;
  }
}
