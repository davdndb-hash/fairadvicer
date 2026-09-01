"use server";

import { getSupabase } from "./supabase";

export type FormState = { status: "idle" | "success" | "error"; message?: string };

function str(v: FormDataEntryValue | null, max = 2000): string | null {
  if (typeof v !== "string") return null;
  const t = v.trim();
  if (!t) return null;
  return t.slice(0, max);
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function submitLead(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  // Honeypot – bots fill hidden fields.
  if (str(formData.get("website"))) {
    return { status: "success" };
  }

  const name = str(formData.get("name"), 200);
  const email = str(formData.get("email"), 320);
  const consent = formData.get("consent");

  if (!name || !email || !emailRe.test(email) || !consent) {
    return { status: "error", message: "invalid" };
  }

  const supabase = getSupabase();
  if (!supabase) return { status: "error", message: "unconfigured" };

  const { error } = await supabase.from("contact_leads").insert({
    lead_type: (str(formData.get("lead_type")) as string) ?? "general",
    name,
    email,
    phone: str(formData.get("phone"), 60),
    company: str(formData.get("company"), 200),
    facility_type: str(formData.get("facility_type"), 100),
    headcount: str(formData.get("headcount"), 50),
    timeframe: str(formData.get("timeframe"), 100),
    message: str(formData.get("message"), 5000),
    locale: str(formData.get("locale"), 5) ?? "de",
    source_path: str(formData.get("source_path"), 300),
  });

  if (error) {
    console.error("submitLead", error.message);
    return { status: "error", message: error.message };
  }
  return { status: "success" };
}

export async function submitApplication(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  if (str(formData.get("website"))) {
    return { status: "success" };
  }

  const name = str(formData.get("name"), 200);
  const email = str(formData.get("email"), 320);
  const consent = formData.get("consent");

  if (!name || !email || !emailRe.test(email) || !consent) {
    return { status: "error", message: "invalid" };
  }

  const supabase = getSupabase();
  if (!supabase) return { status: "error", message: "unconfigured" };

  const { error } = await supabase.from("job_applications").insert({
    job_id: str(formData.get("job_id"), 40),
    job_slug: str(formData.get("job_slug"), 200),
    name,
    email,
    phone: str(formData.get("phone"), 60),
    country: str(formData.get("country"), 100),
    profession: str(formData.get("profession"), 150),
    german_level: str(formData.get("german_level"), 10),
    years_experience: str(formData.get("years_experience"), 50),
    message: str(formData.get("message"), 5000),
    locale: str(formData.get("locale"), 5) ?? "de",
  });

  if (error) {
    console.error("submitApplication", error.message);
    return { status: "error", message: error.message };
  }
  return { status: "success" };
}
