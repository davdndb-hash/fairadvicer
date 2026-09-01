-- FairAdvicer core schema (applied to Supabase project ebqynsynctkkuymiuldh)
create extension if not exists "pgcrypto";

create table public.jobs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  status text not null default 'published' check (status in ('draft','published','archived')),
  featured boolean not null default false,
  category text not null,
  employment_type text not null default 'vollzeit',
  facility_type text,
  city text,
  region text,
  country text not null default 'DE',
  german_level text default 'B1',
  salary_min integer,
  salary_max integer,
  currency text not null default 'EUR',
  starts_at text,
  translations jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index jobs_status_idx on public.jobs (status);
create index jobs_category_idx on public.jobs (category);
create index jobs_city_idx on public.jobs (city);

create table public.posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  status text not null default 'published' check (status in ('draft','published','archived')),
  category text not null default 'wissen',
  audience text not null default 'both' check (audience in ('employer','candidate','both')),
  reading_minutes integer not null default 5,
  published_at timestamptz not null default now(),
  translations jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index posts_status_idx on public.posts (status, published_at desc);

create table public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  lead_type text not null default 'general' check (lead_type in ('employer','candidate','general')),
  name text not null,
  email text not null,
  phone text,
  company text,
  facility_type text,
  headcount text,
  timeframe text,
  message text,
  locale text not null default 'de',
  source_path text,
  meta jsonb not null default '{}'::jsonb,
  handled boolean not null default false,
  created_at timestamptz not null default now()
);
create index contact_leads_created_idx on public.contact_leads (created_at desc);

create table public.job_applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references public.jobs (id) on delete set null,
  job_slug text,
  name text not null,
  email text not null,
  phone text,
  country text,
  profession text,
  german_level text,
  years_experience text,
  message text,
  cv_url text,
  locale text not null default 'de',
  status text not null default 'new',
  created_at timestamptz not null default now()
);
create index job_applications_created_idx on public.job_applications (created_at desc);

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

create trigger jobs_updated_at before update on public.jobs
  for each row execute function public.set_updated_at();
create trigger posts_updated_at before update on public.posts
  for each row execute function public.set_updated_at();

alter table public.jobs enable row level security;
alter table public.posts enable row level security;
alter table public.contact_leads enable row level security;
alter table public.job_applications enable row level security;

create policy "public read published jobs" on public.jobs
  for select to anon, authenticated using (status = 'published');
create policy "public read published posts" on public.posts
  for select to anon, authenticated using (status = 'published' and published_at <= now());

create policy "public insert leads" on public.contact_leads
  for insert to anon, authenticated with check (
    char_length(name) between 1 and 200
    and char_length(email) between 5 and 320
    and email like '%@%'
    and coalesce(char_length(message), 0) <= 5000
  );
create policy "public insert applications" on public.job_applications
  for insert to anon, authenticated with check (
    char_length(name) between 1 and 200
    and char_length(email) between 5 and 320
    and email like '%@%'
    and coalesce(char_length(message), 0) <= 5000
  );
