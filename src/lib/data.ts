import { getSupabase } from "./supabase";
import type { Locale } from "@/i18n/routing";

export type JobTranslation = {
  title: string;
  facility: string;
  summary: string;
  description: string;
  tasks: string[];
  profile: string[];
  benefits: string[];
};

export type Job = {
  id: string;
  slug: string;
  category: string;
  employment_type: string;
  facility_type: string | null;
  city: string | null;
  region: string | null;
  country: string;
  german_level: string | null;
  salary_min: number | null;
  salary_max: number | null;
  currency: string;
  starts_at: string | null;
  featured: boolean;
  translations: Partial<Record<Locale, JobTranslation>>;
};

export type PostTranslation = {
  title: string;
  excerpt: string;
  body: string;
};

export type Post = {
  id: string;
  slug: string;
  category: string;
  audience: "employer" | "candidate" | "both";
  reading_minutes: number;
  published_at: string;
  translations: Partial<Record<Locale, PostTranslation>>;
};

export function jobT(job: Job, locale: Locale): JobTranslation {
  return (
    job.translations[locale] ??
    job.translations.de ??
    job.translations.en ??
    ({
      title: job.slug,
      facility: "",
      summary: "",
      description: "",
      tasks: [],
      profile: [],
      benefits: [],
    } as JobTranslation)
  );
}

export function postT(post: Post, locale: Locale): PostTranslation {
  return (
    post.translations[locale] ??
    post.translations.de ??
    post.translations.en ??
    ({ title: post.slug, excerpt: "", body: "" } as PostTranslation)
  );
}

export async function getJobs(): Promise<Job[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("status", "published")
    .order("featured", { ascending: false })
    .order("created_at", { ascending: false });
  if (error) {
    console.error("getJobs", error.message);
    return [];
  }
  return (data ?? []) as Job[];
}

export async function getJob(slug: string): Promise<Job | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("status", "published")
    .eq("slug", slug)
    .maybeSingle();
  if (error) {
    console.error("getJob", error.message);
    return null;
  }
  return (data as Job) ?? null;
}

export async function getPosts(): Promise<Post[]> {
  const supabase = getSupabase();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .order("published_at", { ascending: false });
  if (error) {
    console.error("getPosts", error.message);
    return [];
  }
  return (data ?? []) as Post[];
}

export async function getPost(slug: string): Promise<Post | null> {
  const supabase = getSupabase();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("status", "published")
    .eq("slug", slug)
    .maybeSingle();
  if (error) {
    console.error("getPost", error.message);
    return null;
  }
  return (data as Post) ?? null;
}

export function formatSalary(job: Job, locale: Locale, fallback: string): string {
  if (!job.salary_min && !job.salary_max) return fallback;
  const nf = new Intl.NumberFormat(locale === "de" ? "de-DE" : locale === "pt" ? "pt-BR" : "en-GB", {
    style: "currency",
    currency: job.currency || "EUR",
    maximumFractionDigits: 0,
  });
  if (job.salary_min && job.salary_max) return `${nf.format(job.salary_min)} – ${nf.format(job.salary_max)}`;
  return nf.format((job.salary_min ?? job.salary_max) as number);
}
