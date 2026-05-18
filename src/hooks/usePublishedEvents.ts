import { useEffect, useState } from "react";
import { isSupabaseConfigured } from "../lib/supabase";
import { getPublishedEvents } from "../services/events";
import type { FireDanceEvent } from "../types";

type LoadState = "idle" | "loading" | "success" | "error";

export function usePublishedEvents() {
  const [events, setEvents] = useState<FireDanceEvent[]>([]);
  const [eventsLoadState, setEventsLoadState] = useState<LoadState>("idle");
  const [eventsErrorMessage, setEventsErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadEvents() {
      if (!isSupabaseConfigured) {
        setEventsLoadState("error");
        setEventsErrorMessage("尚未設定 Supabase 環境變數。");
        return;
      }

      setEventsLoadState("loading");

      try {
        const nextEvents = await getPublishedEvents();
        if (isMounted) {
          setEvents(nextEvents);
          setEventsLoadState("success");
        }
      } catch (error) {
        if (isMounted) {
          console.error(error);
          setEventsLoadState("error");
          setEventsErrorMessage("活動資料讀取失敗，請稍後再試。");
        }
      }
    }

    loadEvents();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    events,
    eventsLoadState,
    eventsErrorMessage,
  };
}
