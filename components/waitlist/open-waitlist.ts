"use client";

import { WAITLIST_EVENTS } from "@/lib/waitlist-config";

export function openWaitlist() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(WAITLIST_EVENTS.open));
}
