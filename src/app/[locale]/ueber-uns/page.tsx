import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getCopy } from "@/content";
import { getPathname } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import { Icon, type IconName } from "@/components/Brand";
import { SectionHead, FeatureGrid, CtaBand, PageHero } from "@/components/ui";

export const revalidate = 3600;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const copy = getCopy(locale);
  return {
    title: copy.about.h1,
    description: copy.about.lead,
    alternates: {
      canonical: getPathname({ href: "/ueber-uns", locale }),
      languages: {
        de: getPathname({ href: "/ueber-uns", locale: "de" }),
        en: getPathname({ href: "/ueber-uns", locale: "en" }),
        pt: getPathname({ href: "/ueber-uns", locale: "pt" }),
      },
    },
  };
}

const valueIcons: IconName[] = ["shield", "globe", "users", "certificate"];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);
  const c = copy.about;

  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.h1} lead={c.lead} primary={{ label: copy.nav.cta, href: "/kontakt" }} />

      <section className="container-x grid gap-14 py-20 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:py-28">
        <Reveal>
          <h2 className="font-display text-[2.1rem] leading-tight lg:text-[2.6rem] balance">{c.storyTitle}</h2>
          <div className="mt-6 space-y-4">
            {c.story.map((p) => (
              <p key={p.slice(0, 24)} className="text-[1rem] leading-relaxed text-ink-soft pretty">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="relative h-full overflow-hidden rounded-xl3 bg-teal-950 p-9 text-white lg:p-12">
            <div className="grain grain-light" />
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(232,163,61,.32) 0%, transparent 65%)" }}
            />
            <p className="eyebrow eyebrow-light relative">{copy.meta.siteName}</p>
            <p className="relative mt-6 font-display text-[2.2rem] leading-[1.15] lg:text-[2.6rem] balance">
              {copy.meta.tagline}
            </p>
            <dl className="relative mt-10 grid gap-6 sm:grid-cols-2">
              {copy.home.stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-[2.2rem] leading-none text-amber-400">{s.value}</dt>
                  <dd className="mt-2 text-[0.85rem] leading-relaxed text-teal-100/80">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x py-20 lg:py-28">
          <SectionHead eyebrow={c.valuesEyebrow} title={c.valuesTitle} />
          <div className="mt-14">
            <FeatureGrid items={c.values} icons={valueIcons} columns={2} />
          </div>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <SectionHead eyebrow={c.teamEyebrow} title={c.teamTitle} lead={c.teamLead} />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {c.team.map((person, i) => (
            <Reveal as="li" key={person.name} delay={i * 70}>
              <article className="card h-full overflow-hidden">
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-teal-950">
                  <div className="grain grain-light" />
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        i % 2 === 0
                          ? "radial-gradient(circle at 30% 20%, rgba(23,134,122,.55) 0%, transparent 62%)"
                          : "radial-gradient(circle at 70% 30%, rgba(232,163,61,.35) 0%, transparent 62%)",
                    }}
                  />
                  <span className="relative font-display text-[3rem] leading-none text-white/90">
                    {person.initials}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-sans text-[1.02rem] font-semibold tracking-[-0.01em]">{person.name}</h3>
                  <p className="mt-1 text-[0.8rem] font-medium uppercase tracking-[0.1em] text-teal-600">
                    {person.role}
                  </p>
                  <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-soft pretty">{person.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-paper-2/50">
        <div className="container-x py-20 lg:py-24">
          <SectionHead title={c.partnersTitle} lead={c.partnersLead} />
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {c.partners.map((p, i) => (
              <Reveal as="li" key={p.name} delay={i * 80}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="card group flex h-full flex-col p-7 transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl2 bg-teal-50 text-teal-600">
                    <Icon name="globe" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-sans text-[1.02rem] font-semibold tracking-[-0.01em]">{p.name}</h3>
                  <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-ink-soft pretty">{p.body}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-teal-700">
                    {copy.common.more}
                    <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand copy={copy} locale={locale} title={c.ctaTitle} body={c.ctaBody} />
    </>
  );
}
