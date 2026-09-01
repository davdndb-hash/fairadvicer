"use client";

import { useActionState } from "react";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import type { SiteCopy } from "@/content";
import type { Locale } from "@/i18n/routing";
import { submitLead, type FormState } from "@/lib/actions";
import { Icon } from "./Brand";

const initial: FormState = { status: "idle" };

export default function ContactForm({
  copy,
  locale,
  variant = "general",
  light = false,
}: {
  copy: SiteCopy;
  locale: Locale;
  variant?: "general" | "employer" | "candidate";
  light?: boolean;
}) {
  const [state, action, pending] = useActionState(submitLead, initial);
  const pathname = usePathname();
  const f = copy.form;

  if (state.status === "success") {
    return (
      <div
        className={`flex flex-col items-start gap-3 rounded-xl2 border p-8 ${
          light ? "border-white/15 bg-white/5 text-white" : "border-teal-200 bg-teal-50 text-ink"
        }`}
        role="status"
      >
        <span className={`flex h-11 w-11 items-center justify-center rounded-full ${light ? "bg-amber-500 text-teal-950" : "bg-teal-700 text-white"}`}>
          <Icon name="check" className="h-5 w-5" />
        </span>
        <h3 className="font-display text-2xl">{f.successTitle}</h3>
        <p className={`text-[0.95rem] leading-relaxed ${light ? "text-teal-100/85" : "text-ink-soft"}`}>
          {f.successBody}
        </p>
      </div>
    );
  }

  const labelCls = light ? "label text-teal-100/80" : "label";
  const fieldCls = light
    ? "field border-white/15 bg-white/8 text-white placeholder:text-white/40 focus:border-amber-400 focus:shadow-none"
    : "field";

  return (
    <form action={action} className="grid gap-4" noValidate>
      <input type="hidden" name="lead_type" value={variant} />
      <input type="hidden" name="locale" value={locale} />
      <input type="hidden" name="source_path" value={pathname} />
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
          <label className={labelCls} htmlFor="cf-name">
            {f.name} *
          </label>
          <input id="cf-name" name="name" required autoComplete="name" className={fieldCls} />
        </div>
        <div>
          <label className={labelCls} htmlFor="cf-email">
            {f.email} *
          </label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className={fieldCls} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="cf-phone">
            {f.phone} <span className="font-normal opacity-60">({f.optional})</span>
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={fieldCls} />
        </div>
        {variant === "employer" ? (
          <div>
            <label className={labelCls} htmlFor="cf-company">
              {f.company}
            </label>
            <input id="cf-company" name="company" autoComplete="organization" className={fieldCls} />
          </div>
        ) : (
          <div>
            <label className={labelCls} htmlFor="cf-country">
              {f.country} <span className="font-normal opacity-60">({f.optional})</span>
            </label>
            <input id="cf-country" name="country" autoComplete="country-name" className={fieldCls} />
          </div>
        )}
      </div>

      {variant === "employer" && (
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className={labelCls} htmlFor="cf-facility">
              {f.facilityType}
            </label>
            <select id="cf-facility" name="facility_type" className={fieldCls} defaultValue="">
              <option value="">—</option>
              {f.facilityOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="cf-headcount">
              {f.headcount}
            </label>
            <select id="cf-headcount" name="headcount" className={fieldCls} defaultValue="">
              <option value="">—</option>
              {f.headcountOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelCls} htmlFor="cf-timeframe">
              {f.timeframe}
            </label>
            <select id="cf-timeframe" name="timeframe" className={fieldCls} defaultValue="">
              <option value="">—</option>
              {f.timeframeOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div>
        <label className={labelCls} htmlFor="cf-message">
          {f.message}
        </label>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          placeholder={f.messagePlaceholder}
          className={`${fieldCls} resize-y`}
        />
      </div>

      <label className={`flex items-start gap-3 text-[0.85rem] leading-relaxed ${light ? "text-teal-100/80" : "text-ink-soft"}`}>
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-line accent-[#0e5d54]"
        />
        <span>
          {f.privacy}{" "}
          <Link href="/datenschutz" className={light ? "underline hover:text-white" : "underline hover:text-teal-700"}>
            {f.privacyLink}
          </Link>
        </span>
      </label>

      {state.status === "error" && (
        <p className={`text-[0.85rem] ${light ? "text-amber-400" : "text-coral-500"}`} role="alert">
          {f.error}
        </p>
      )}

      <div>
        <button type="submit" disabled={pending} className={`btn ${light ? "btn-accent" : "btn-primary"} disabled:opacity-60`}>
          {pending ? f.submitting : f.submit}
          {!pending && <Icon name="arrow" className="h-4 w-4" />}
        </button>
      </div>
    </form>
  );
}
