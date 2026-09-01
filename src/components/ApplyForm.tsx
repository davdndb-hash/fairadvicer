"use client";

import { useActionState } from "react";
import { Link } from "@/i18n/navigation";
import type { SiteCopy } from "@/content";
import type { Locale } from "@/i18n/routing";
import { submitApplication, type FormState } from "@/lib/actions";
import { Icon } from "./Brand";

const initial: FormState = { status: "idle" };

export default function ApplyForm({
  copy,
  locale,
  jobId,
  jobSlug,
}: {
  copy: SiteCopy;
  locale: Locale;
  jobId?: string;
  jobSlug?: string;
}) {
  const [state, action, pending] = useActionState(submitApplication, initial);
  const f = copy.form;

  if (state.status === "success") {
    return (
      <div className="rounded-xl2 border border-teal-200 bg-teal-50 p-8" role="status">
        <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-teal-700 text-white">
          <Icon name="check" className="h-5 w-5" />
        </span>
        <h3 className="font-display text-2xl">{f.successTitle}</h3>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{f.successBody}</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-4" noValidate>
      <input type="hidden" name="locale" value={locale} />
      {jobId && <input type="hidden" name="job_id" value={jobId} />}
      {jobSlug && <input type="hidden" name="job_slug" value={jobSlug} />}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="af-name">
            {f.name} *
          </label>
          <input id="af-name" name="name" required autoComplete="name" className="field" />
        </div>
        <div>
          <label className="label" htmlFor="af-email">
            {f.email} *
          </label>
          <input id="af-email" name="email" type="email" required autoComplete="email" className="field" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="af-phone">
            {f.phone}
          </label>
          <input id="af-phone" name="phone" type="tel" autoComplete="tel" className="field" />
        </div>
        <div>
          <label className="label" htmlFor="af-country">
            {f.country}
          </label>
          <input id="af-country" name="country" autoComplete="country-name" className="field" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <label className="label" htmlFor="af-profession">
            {f.profession}
          </label>
          <input id="af-profession" name="profession" className="field" />
        </div>
        <div>
          <label className="label" htmlFor="af-german">
            {f.germanLevel}
          </label>
          <select id="af-german" name="german_level" className="field" defaultValue="">
            <option value="">—</option>
            {f.germanLevelOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="af-exp">
            {f.experience}
          </label>
          <select id="af-exp" name="years_experience" className="field" defaultValue="">
            <option value="">—</option>
            {f.experienceOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="label" htmlFor="af-message">
          {f.message}
        </label>
        <textarea id="af-message" name="message" rows={4} placeholder={f.messagePlaceholder} className="field resize-y" />
      </div>

      <label className="flex items-start gap-3 text-[0.85rem] leading-relaxed text-ink-soft">
        <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 rounded border-line accent-[#0e5d54]" />
        <span>
          {f.privacy}{" "}
          <Link href="/datenschutz" className="underline hover:text-teal-700">
            {f.privacyLink}
          </Link>
        </span>
      </label>

      {state.status === "error" && (
        <p className="text-[0.85rem] text-coral-500" role="alert">
          {f.error}
        </p>
      )}

      <div>
        <button type="submit" disabled={pending} className="btn btn-primary disabled:opacity-60">
          {pending ? f.submitting : f.submit}
          {!pending && <Icon name="arrow" className="h-4 w-4" />}
        </button>
      </div>
    </form>
  );
}
