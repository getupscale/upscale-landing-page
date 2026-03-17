import "server-only";

import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Database } from "./database.types";

let cached: SupabaseClient<Database> | null = null;

function requireEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

export function getSupabaseAdmin() {
  if (cached) return cached;

  cached = createClient<Database>(requireEnv("SUPABASE_URL"), requireEnv("SUPABASE_SERVICE_ROLE_KEY"), {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
      detectSessionInUrl: false
    }
  });

  return cached;
}
