import { createClient } from "@supabase/supabase-js";

// These are the *publishable* Supabase values. They are safe in client bundles –
// every table is protected by row level security (see supabase/migrations).
// Override them with environment variables in Vercel if the project ever moves.
const FALLBACK_URL = "https://ebqynsynctkkuymiuldh.supabase.co";
const FALLBACK_KEY = "sb_publishable_2gSbb-9fo4X7H2BzoF4RjQ_t93nvYev";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || FALLBACK_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || FALLBACK_KEY;

export const supabaseConfigured = Boolean(url && anonKey);

export function getSupabase() {
  if (!url || !anonKey) return null;
  return createClient(url, anonKey, {
    auth: { persistSession: false },
    global: { headers: { "x-application-name": "fairadvicer-web" } },
  });
}
