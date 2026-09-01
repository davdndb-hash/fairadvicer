# FairAdvicer – Website

Rebuild of fairadvicer.de: Next.js 16 (App Router) + Tailwind CSS v4 + Supabase, deployed on Vercel.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16, App Router, React 19, TypeScript |
| Styling | Tailwind CSS v4 (design tokens in `src/app/globals.css`) |
| i18n | `next-intl` with localised pathnames – German (default, no prefix), English (`/en`), Portuguese (`/pt`) |
| Data | Supabase (jobs, knowledge-hub posts, contact leads, job applications) |
| Fonts | Self-hosted Inter + Instrument Serif via `@fontsource*` – no Google Fonts requests |

## Project layout

```
src/
  app/[locale]/        route tree (home, arbeitgeber, pflegefachkraefte, ueber-uns,
                       kontakt, stellenangebote, wissen, legal pages)
  components/          UI building blocks
  content/de|en|pt.ts  ALL marketing copy, one typed object per language
  content/legal/       Impressum, Datenschutz, AGB – reproduced verbatim
  i18n/                routing + navigation helpers
  lib/                 supabase client, data access, server actions, site constants
supabase/migrations/   database schema
```

## Editing copy

All page text lives in `src/content/de.ts`, `en.ts` and `pt.ts`. They share the
`SiteCopy` type in `src/content/types.ts`, so if a key is missing in one language
the build fails – translations cannot silently drift.

## Jobs & articles

Job listings and knowledge-hub articles are rows in Supabase (`public.jobs`,
`public.posts`). Each row carries a `translations` JSON column keyed by locale:

```json
{ "de": { "title": "…" }, "en": { … }, "pt": { … } }
```

Set `status` to `draft` to hide a row. Pages revalidate every 5–10 minutes.

## Forms

`src/lib/actions.ts` holds two server actions that write to Supabase:

* `submitLead` → `public.contact_leads` (contact + employer enquiry forms)
* `submitApplication` → `public.job_applications` (apply-to-job form)

Both use a honeypot field, server-side validation and row-level-security policies
that allow inserts but never reads from the browser.

## Environment

Publishable Supabase values are baked in as fallbacks in `src/lib/supabase.ts`.
To point the site at a different project, set in Vercel:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
NEXT_PUBLIC_SITE_URL
```

## Local development

```bash
npm install
npm run dev
```

## Before going live

1. Replace the placeholder brand mark in `src/components/Brand.tsx` with the real logo.
2. Add real photography (team, facilities) – the design has slots for it.
3. Add a cookie/consent banner if any analytics or embedded media is introduced.
   The site currently sets no cookies and loads no third-party trackers.
4. Have the Datenschutzerklärung reviewed – it was carried over verbatim from the
   old site and still describes the old WordPress stack.
