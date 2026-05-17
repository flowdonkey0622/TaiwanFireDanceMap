import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ??
  import.meta.env.VITE_SUPABASE_ANON_KEY;

function normalizeSupabaseUrl(url: string | undefined): string | undefined {
  if (!url) {
    return undefined;
  }

  try {
    const parsedUrl = new URL(url);
    parsedUrl.pathname = parsedUrl.pathname.replace(/\/rest\/v1\/?$/, "");
    parsedUrl.search = "";
    parsedUrl.hash = "";
    return parsedUrl.toString().replace(/\/$/, "");
  } catch {
    return url;
  }
}

const normalizedSupabaseUrl = normalizeSupabaseUrl(supabaseUrl);

function isValidSupabaseUrl(url: string | undefined): url is string {
  if (!url) {
    return false;
  }

  try {
    const parsedUrl = new URL(url);
    const isLocalHost = ["localhost", "127.0.0.1", "::1"].includes(
      parsedUrl.hostname,
    );
    return (
      parsedUrl.protocol === "https:" ||
      (parsedUrl.protocol === "http:" && isLocalHost)
    );
  } catch {
    return false;
  }
}

export const isSupabaseConfigured =
  isValidSupabaseUrl(normalizedSupabaseUrl) && Boolean(supabaseKey);

export const supabase =
  isValidSupabaseUrl(normalizedSupabaseUrl) && supabaseKey
    ? createClient(normalizedSupabaseUrl, supabaseKey)
    : null;
