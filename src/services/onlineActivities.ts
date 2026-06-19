import { supabase } from "../lib/supabase";
import type { OnlineActivity } from "../data/onlineActivities";

export type OnlineActivityStatus = "draft" | "published" | "archived";

export type ManagedOnlineActivity = {
  id: string;
  slug: string;
  title: string;
  description: string;
  period: string;
  primaryLinkLabel: string;
  primaryLinkUrl: string;
  secondaryLinkLabel: string;
  secondaryLinkUrl: string;
  accent: string;
  sortOrder: number;
  status: OnlineActivityStatus;
};

export type OnlineActivityInput = Omit<ManagedOnlineActivity, "id">;

type OnlineActivityRow = {
  id: string;
  slug: string | null;
  title: string;
  description: string;
  period: string | null;
  primary_link_label: string;
  primary_link_url: string;
  secondary_link_label: string | null;
  secondary_link_url: string | null;
  accent: string;
  sort_order: number;
  status: string;
};

const onlineActivityStatuses: OnlineActivityStatus[] = [
  "draft",
  "published",
  "archived",
];
const onlineActivityAccents: OnlineActivity["accent"][] = ["ember", "sky", "sun"];

function getTrimmedText(value: string, label: string, maxLength: number): string {
  const trimmedValue = value.trim();

  if (trimmedValue.length > maxLength) {
    throw new Error(`${label} 最多 ${maxLength} 個字。`);
  }

  return trimmedValue;
}

function isOnlineActivityStatus(status: unknown): status is OnlineActivityStatus {
  return onlineActivityStatuses.includes(status as OnlineActivityStatus);
}

function isOnlineActivityAccent(accent: unknown): accent is OnlineActivity["accent"] {
  return onlineActivityAccents.includes(accent as OnlineActivity["accent"]);
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

function getOptionalInputExternalUrl(url: string, label: string): string | null {
  const safeUrl = getSafeExternalUrl(url);

  if (url.trim() && !safeUrl) {
    throw new Error(`${label} 只允許 http 或 https URL。`);
  }

  return safeUrl;
}

function toManagedOnlineActivity(row: OnlineActivityRow): ManagedOnlineActivity {
  return {
    id: row.id,
    slug: row.slug ?? "",
    title: row.title,
    description: row.description,
    period: row.period ?? "",
    primaryLinkLabel: row.primary_link_label,
    primaryLinkUrl: getSafeExternalUrl(row.primary_link_url) ?? "",
    secondaryLinkLabel: row.secondary_link_label ?? "",
    secondaryLinkUrl: getSafeExternalUrl(row.secondary_link_url) ?? "",
    accent: row.accent,
    sortOrder: row.sort_order,
    status: isOnlineActivityStatus(row.status) ? row.status : "draft",
  };
}

function toPublishedOnlineActivity(row: OnlineActivityRow): OnlineActivity | null {
  const primaryLinkUrl = getSafeExternalUrl(row.primary_link_url);
  const secondaryLinkUrl = getSafeExternalUrl(row.secondary_link_url);

  if (!primaryLinkUrl) {
    return null;
  }

  return {
    id: row.slug ?? row.id,
    title: row.title,
    description: row.description,
    period: row.period ?? undefined,
    primaryLink: {
      label: row.primary_link_label,
      url: primaryLinkUrl,
    },
    secondaryLink:
      row.secondary_link_label && secondaryLinkUrl
        ? {
            label: row.secondary_link_label,
            url: secondaryLinkUrl,
          }
        : undefined,
    accent: isOnlineActivityAccent(row.accent) ? row.accent : "ember",
  };
}

function toOnlineActivityRow(input: OnlineActivityInput) {
  if (!isOnlineActivityStatus(input.status)) {
    throw new Error("網路活動狀態不正確。");
  }

  return {
    slug: getTrimmedText(input.slug, "Slug", 120) || null,
    title: getTrimmedText(input.title, "標題", 160),
    description: getTrimmedText(input.description, "描述", 2000),
    period: getTrimmedText(input.period, "期間", 120) || null,
    primary_link_label: getTrimmedText(input.primaryLinkLabel, "主要連結文字", 80),
    primary_link_url: getInputExternalUrl(input.primaryLinkUrl, "主要連結"),
    secondary_link_label:
      getTrimmedText(input.secondaryLinkLabel, "次要連結文字", 80) || null,
    secondary_link_url: getOptionalInputExternalUrl(
      input.secondaryLinkUrl,
      "次要連結",
    ),
    accent: getTrimmedText(input.accent, "色調", 32),
    sort_order: input.sortOrder,
    status: input.status,
  };
}

export async function getManagedOnlineActivities(): Promise<ManagedOnlineActivity[]> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { data, error } = await supabase
    .from("online_activities")
    .select(
      "id, slug, title, description, period, primary_link_label, primary_link_url, secondary_link_label, secondary_link_url, accent, sort_order, status",
    )
    .order("sort_order", { ascending: true })
    .order("title", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? []).map(toManagedOnlineActivity);
}

export async function getPublishedOnlineActivities(): Promise<OnlineActivity[]> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { data, error } = await supabase
    .from("online_activities")
    .select(
      "id, slug, title, description, period, primary_link_label, primary_link_url, secondary_link_label, secondary_link_url, accent, sort_order, status",
    )
    .eq("status", "published")
    .order("sort_order", { ascending: true })
    .order("title", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? [])
    .map(toPublishedOnlineActivity)
    .filter((activity) => activity !== null);
}

export async function createOnlineActivity(input: OnlineActivityInput): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { error } = await supabase
    .from("online_activities")
    .insert(toOnlineActivityRow(input));

  if (error) {
    throw error;
  }
}

export async function updateOnlineActivity(
  id: string,
  input: OnlineActivityInput,
): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { error } = await supabase
    .from("online_activities")
    .update(toOnlineActivityRow(input))
    .eq("id", id);

  if (error) {
    throw error;
  }
}

export async function archiveOnlineActivity(id: string): Promise<void> {
  if (!supabase) {
    throw new Error("Supabase environment variables are not configured.");
  }

  const { error } = await supabase
    .from("online_activities")
    .update({ status: "archived" })
    .eq("id", id);

  if (error) {
    throw error;
  }
}
