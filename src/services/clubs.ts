import { supabase } from "../lib/supabase";
import type { FireDanceClub } from "../types";

export type ClubStatus = "draft" | "published" | "archived";

export type ClubInput = {
  schoolName: string;
  clubName: string;
  county: string;
  summary: string;
  instagramUrl: string;
  websiteUrl: string;
  status: ClubStatus;
};

type ClubRow = {
  id: string;
  school_name: string;
  club_name: string;
  county: string;
  summary: string;
  instagram_url: string | null;
  website_url: string | null;
  status?: ClubStatus;
};

function toFireDanceClub(row: ClubRow): FireDanceClub {
  return {
    id: row.id,
    schoolName: row.school_name,
    clubName: row.club_name,
    county: row.county,
    summary: row.summary,
    instagramUrl: row.instagram_url,
    websiteUrl: row.website_url,
    status: row.status,
  };
}

function toClubRow(input: ClubInput) {
  return {
    school_name: input.schoolName.trim(),
    club_name: input.clubName.trim(),
    county: input.county.trim(),
    summary: input.summary.trim(),
    instagram_url: input.instagramUrl.trim() || null,
    website_url: input.websiteUrl.trim() || null,
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
      "id, school_name, club_name, county, summary, instagram_url, website_url",
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
      "id, school_name, club_name, county, summary, instagram_url, website_url, status",
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
