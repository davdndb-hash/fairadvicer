import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import type { SiteCopy } from "@/content";
import { Icon, type IconName } from "./Brand";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
import type { Locale } from "@/i18n/routing";
import type { Feature, Step } from "@/content/types";

export function SectionHead({
  eyebrow,
  title,
  lead,
  light = false,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  light?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}
    >
      {eyebrow && <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{eyebrow}</p>}
      <h2
        className={`mt-4 text-[2.1rem] leading-[1.05] sm:text-[2.7rem] lg:text-[3.1rem] balance ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={`mt-5 text-[1.05rem] leading-relaxed pretty ${
            light ? "text-teal-100/85" : "text-ink-soft"
          }`}
        >
          {lead}
        </p>
      )}
    </div>
  );
}

export function FeatureGrid({
  items,
  icons,
  light = false,
  columns = 3,
}: {
  items: Feature[];
  icons?: IconName[];
  light?: boolean;
  columns?: 2 | 3;
}) {
  return (
    <ul className={`grid gap-x-8 gap-y-9 sm:grid-cols-2 ${columns === 3 ? "lg:grid-cols-3" : ""}`}>
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={i * 60}>
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-xl2 ${
              light ? "bg-white/10 text-amber-400" : "bg-teal-50 text-teal-600"
            }`}
          >
            <Icon name={icons?.[i] ?? "check"} className="h-5 w-5" />
          </span>
          <h3
            className={`mt-4 font-sans text-[1.05rem] font-semibold tracking-[-0.01em] ${
              light ? "text-white" : "text-ink"
            }`}
          >
            {item.title}
          </h3>
          <p
            className={`mt-2 text-[0.94rem] leading-relaxed pretty ${
              light ? "text-teal-100/80" : "text-ink-soft"
            }`}
          >
            {item.body}
          </p>
        </Reveal>
      ))}
    </ul>
  );
}

export function StepList({ steps, light = false }: { steps: Step[]; light?: boolean }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-xl3 border sm:grid-cols-2 lg:grid-cols-4"
      style={{ borderColor: light ? "rgba(255,255,255,.12)" : "var(--color-line)", backgroundColor: light ? "rgba(255,255,255,.12)" : "var(--color-line)" }}
    >
      {steps.map((s, i) => (
        <Reveal
          as="li"
          key={s.step}
          delay={i * 70}
          className={`group relative p-7 transition-colors lg:p-8 ${
            light ? "bg-teal-950 hover:bg-teal-900" : "bg-white hover:bg-teal-50/60"
          }`}
        >
          <span
            className={`font-display text-[2.6rem] leading-none ${
              light ? "text-white/20" : "text-teal-100"
            } transition-colors group-hover:text-amber-500`}
          >
            {s.step}
          </span>
          <h3
            className={`mt-4 font-sans text-[1.02rem] font-semibold tracking-[-0.01em] ${
              light ? "text-white" : "text-ink"
            }`}
          >
            {s.title}
          </h3>
          <p className={`mt-2 text-[0.92rem] leading-relaxed pretty ${light ? "text-teal-100/80" : "text-ink-soft"}`}>
            {s.body}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}

export function BulletList({ items, light = false }: { items: string[]; light?: boolean }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              light ? "bg-amber-500/20 text-amber-400" : "bg-teal-100 text-teal-700"
            }`}
          >
            <Icon name="check" className="h-3 w-3" strokeWidth={2.4} />
          </span>
          <span className={`text-[0.95rem] leading-relaxed ${light ? "text-teal-100/85" : "text-ink-soft"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function CtaBand({
  copy,
  locale,
  title,
  body,
  variant = "general",
}: {
  copy: SiteCopy;
  locale: Locale;
  title: string;
  body: string;
  variant?: "general" | "employer" | "candidate";
}) {
  return (
    <section className="relative overflow-hidden bg-teal-900 text-white">
      <div className="grain grain-light" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(232,163,61,.35) 0%, transparent 62%)" }}
      />
      <div className="container-x relative grid gap-12 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <div>
          <SectionHead eyebrow={copy.nav.contact} title={title} lead={body} light />
          <div className="mt-9 grid gap-3 text-[0.95rem]">
            <a href="tel:+4989242076100" className="flex items-center gap-3 text-teal-100 transition-colors hover:text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-amber-400">
                <Icon name="phone" className="h-4 w-4" />
              </span>
              +49 89 24 20 76 100
            </a>
            <a href="mailto:info@fairadvicer.de" className="flex items-center gap-3 text-teal-100 transition-colors hover:text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-amber-400">
                <Icon name="mail" className="h-4 w-4" />
              </span>
              info@fairadvicer.de
            </a>
            <p className="flex items-center gap-3 text-teal-100/80">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-amber-400">
                <Icon name="clock" className="h-4 w-4" />
              </span>
              {copy.common.officeHoursValue}
            </p>
          </div>
        </div>
        <div className="rounded-xl3 border border-white/12 bg-white/[0.04] p-6 backdrop-blur-sm sm:p-9">
          <ContactForm copy={copy} locale={locale} variant={variant} light />
        </div>
      </div>
    </section>
  );
}

export function Pill({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.75rem] font-medium ${
        light ? "border-white/20 text-teal-100" : "border-line bg-white text-ink-soft"
      }`}
    >
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  primary?: { label: string; href: "/kontakt" | "/stellenangebote" | "/arbeitgeber" | "/pflegefachkraefte" };
  secondary?: { label: string; href: string; external?: boolean };
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper-2/60">
      <div className="grain" />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, rgba(23,134,122,.16) 0%, transparent 65%)" }}
      />
      <div className="container-x relative py-16 lg:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-[2.6rem] leading-[1.02] sm:text-[3.4rem] lg:text-[4.2rem] balance">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-[1.08rem] leading-relaxed text-ink-soft pretty">{lead}</p>
        {(primary || secondary) && (
          <div className="mt-9 flex flex-wrap gap-3">
            {primary && (
              <Link href={primary.href} className="btn btn-primary">
                {primary.label}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            )}
            {secondary &&
              (secondary.external ? (
                <a href={secondary.href} target="_blank" rel="noreferrer" className="btn btn-ghost">
                  {secondary.label}
                </a>
              ) : (
                <a href={secondary.href} className="btn btn-ghost">
                  {secondary.label}
                </a>
              ))}
          </div>
        )}
      </div>
    </section>
  );
}
