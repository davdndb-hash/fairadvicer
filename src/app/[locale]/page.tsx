import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { getCopy } from "@/content";
import { site } from "@/lib/site";
import { getJobs, getPosts } from "@/lib/data";
import { Icon } from "@/components/Brand";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import HeroArt from "@/components/HeroArt";
import JobCard from "@/components/JobCard";
import PostCard from "@/components/PostCard";
import { SectionHead, FeatureGrid, StepList, CtaBand, BulletList } from "@/components/ui";
import type { IconName } from "@/components/Brand";

export const revalidate = 300;

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
    title: copy.meta.homeTitle,
    description: copy.meta.homeDescription,
    alternates: {
      canonical: locale === "de" ? "/" : `/${locale}`,
      languages: { de: "/", en: "/en", pt: "/pt", "x-default": "/" },
    },
  };
}

const serviceIcons: IconName[] = ["search", "certificate", "home", "heart"];
const proofIcons: IconName[] = ["heart", "users", "euro", "sparkle", "globe", "shield"];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);
  const c = copy.home;

  const [jobs, posts] = await Promise.all([getJobs(), getPosts()]);
  const featuredJobs = jobs.slice(0, 3);
  const latestPosts = posts.slice(0, 3);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden">
        <div className="grain" />
        <div
          className="pointer-events-none absolute -left-40 -top-24 h-[32rem] w-[32rem] rounded-full opacity-60"
          style={{ background: "radial-gradient(circle, rgba(23,134,122,.18) 0%, transparent 65%)" }}
        />
        <div className="container-x relative grid items-center gap-14 py-16 lg:grid-cols-[1.08fr_1fr] lg:gap-20 lg:py-24">
          <div>
            <p className="eyebrow">{c.eyebrow}</p>
            <h1 className="mt-5 text-[3rem] leading-[0.98] sm:text-[4rem] lg:text-[4.9rem] balance">
              {c.h1}
            </h1>
            <p className="mt-6 max-w-xl text-[1.1rem] leading-relaxed text-ink-soft pretty">{c.lead}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/kontakt" className="btn btn-primary">
                {c.ctaPrimary}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <a href="#ablauf" className="btn btn-ghost">
                {c.ctaSecondary}
              </a>
            </div>

            <ul className="mt-10 grid gap-2.5 sm:grid-cols-2">
              {c.trust.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[0.87rem] text-ink-soft">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal-500" strokeWidth={2.2} />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <Reveal delay={120}>
            <HeroArt badgeOne={c.heroBadges[0]} badgeTwo={c.heroBadges[1]} />
          </Reveal>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="border-y border-line bg-white">
        <div className="container-x">
          <h2 className="sr-only">{c.statsTitle}</h2>
          <dl className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
            {c.stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 70}
                className={`py-8 lg:px-8 ${i > 0 ? "lg:border-l lg:border-line" : ""} ${
                  i % 2 === 1 ? "sm:border-l sm:border-line sm:pl-8" : ""
                }`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-[3rem] leading-none text-teal-700">{s.value}</span>
                  <span className="mt-3 block max-w-[15rem] text-[0.88rem] leading-relaxed text-ink-soft">
                    {s.label}
                  </span>
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="container-x py-20 lg:py-28">
        <SectionHead eyebrow={c.servicesEyebrow} title={c.servicesTitle} lead={c.servicesLead} />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {c.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="group card relative h-full overflow-hidden p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift lg:p-10">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(circle, rgba(232,163,61,.18) 0%, transparent 70%)" }}
                />
                <div className="relative flex items-start justify-between gap-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl2 bg-teal-50 text-teal-600 transition-colors group-hover:bg-teal-700 group-hover:text-white">
                    <Icon name={serviceIcons[i]} className="h-5 w-5" />
                  </span>
                  <span className="font-display text-[2.4rem] leading-none text-teal-100">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="relative mt-6 font-display text-[1.9rem] leading-tight text-ink">{s.title}</h3>
                <p className="relative mt-3 text-[0.96rem] leading-relaxed text-ink-soft pretty">{s.body}</p>
                <Link
                  href={s.href as "/arbeitgeber" | "/pflegefachkraefte"}
                  className="relative mt-6 inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-teal-700 before:absolute before:inset-0 before:content-['']"
                >
                  {s.linkLabel}
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- AUDIENCE SPLIT ---------- */}
      <section className="border-y border-line bg-paper-2/50">
        <div className="container-x py-20 lg:py-28">
          <SectionHead eyebrow={c.audienceEyebrow} title={c.audienceTitle} align="center" />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {c.audience.map((a, i) => (
              <Reveal key={a.title} delay={i * 90}>
                <article
                  className={`relative h-full overflow-hidden rounded-xl3 p-8 lg:p-11 ${
                    i === 0 ? "bg-teal-950 text-white" : "border border-line bg-white"
                  }`}
                >
                  {i === 0 && <div className="grain grain-light" />}
                  <div className="relative">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl2 ${
                        i === 0 ? "bg-white/10 text-amber-400" : "bg-teal-50 text-teal-600"
                      }`}
                    >
                      <Icon name={i === 0 ? "users" : "heart"} className="h-5 w-5" />
                    </span>
                    <h3 className={`mt-6 font-display text-[2.1rem] leading-tight ${i === 0 ? "text-white" : "text-ink"}`}>
                      {a.title}
                    </h3>
                    <p className={`mt-3 text-[0.98rem] leading-relaxed pretty ${i === 0 ? "text-teal-100/85" : "text-ink-soft"}`}>
                      {a.body}
                    </p>
                    <div className="mt-7">
                      <BulletList items={a.bullets} light={i === 0} />
                    </div>
                    <Link
                      href={a.href as "/arbeitgeber" | "/pflegefachkraefte"}
                      className={`btn mt-9 ${i === 0 ? "btn-accent" : "btn-primary"}`}
                    >
                      {a.cta}
                      <Icon name="arrow" className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section id="ablauf" className="container-x scroll-mt-24 py-20 lg:py-28">
        <SectionHead eyebrow={c.processEyebrow} title={c.processTitle} lead={c.processLead} />
        <div className="mt-14">
          <StepList steps={c.steps} />
        </div>
      </section>

      {/* ---------- PROOF ---------- */}
      <section className="border-y border-line bg-white">
        <div className="container-x py-20 lg:py-28">
          <SectionHead eyebrow={c.proofEyebrow} title={c.proofTitle} lead={c.proofLead} />
          <div className="mt-14">
            <FeatureGrid items={c.proof} icons={proofIcons} />
          </div>
        </div>
      </section>

      {/* ---------- MISSION ---------- */}
      <section className="container-x py-20 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <SectionHead eyebrow={c.missionEyebrow} title={c.missionTitle} />
            <p className="mt-6 text-[1rem] leading-relaxed text-ink-soft pretty">{c.missionBody}</p>
          </div>
          <Reveal delay={100}>
            <figure className="relative h-full overflow-hidden rounded-xl3 bg-teal-950 p-9 text-white lg:p-12">
              <div className="grain grain-light" />
              <div
                className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(232,163,61,.3) 0%, transparent 65%)" }}
              />
              <svg viewBox="0 0 24 24" className="relative h-9 w-9 text-amber-400" fill="currentColor" aria-hidden="true">
                <path d="M9.5 5C6.5 6.6 4.6 9.5 4.6 13.2c0 3.4 2 5.8 4.7 5.8 2.3 0 4-1.7 4-3.9 0-2.1-1.5-3.7-3.5-3.7-.4 0-.8 0-1 .1.3-1.6 1.7-3.4 3.5-4.5L9.5 5Zm9.4 0c-3 1.6-4.9 4.5-4.9 8.2 0 3.4 2 5.8 4.7 5.8 2.3 0 4-1.7 4-3.9 0-2.1-1.5-3.7-3.5-3.7-.4 0-.8 0-1 .1.3-1.6 1.7-3.4 3.5-4.5L18.9 5Z" />
              </svg>
              <blockquote className="relative mt-7 font-display text-[1.75rem] leading-[1.25] text-white lg:text-[2.05rem] balance">
                {c.missionQuote}
              </blockquote>
              <figcaption className="relative mt-7 text-[0.85rem] font-medium uppercase tracking-[0.14em] text-amber-400">
                {c.missionAuthor}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- FEATURED JOBS ---------- */}
      {featuredJobs.length > 0 && (
        <section className="border-y border-line bg-paper-2/50">
          <div className="container-x py-20 lg:py-28">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHead eyebrow={copy.jobs.eyebrow} title={copy.jobs.h1} className="!max-w-xl" />
              <Link href="/stellenangebote" className="btn btn-ghost">
                {copy.jobs.eyebrow}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredJobs.map((job, i) => (
                <Reveal key={job.id} delay={i * 80}>
                  <JobCard job={job} locale={locale} copy={copy} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- INSIGHTS ---------- */}
      {latestPosts.length > 0 && (
        <section className="container-x py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow={copy.insights.eyebrow} title={copy.insights.h1} className="!max-w-xl" />
            <Link href="/wissen" className="btn btn-ghost">
              {copy.insights.eyebrow}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {latestPosts.map((post, i) => (
              <Reveal key={post.id} delay={i * 80}>
                <PostCard post={post} locale={locale} copy={copy} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ---------- FAQ ---------- */}
      <section className="border-t border-line bg-white">
        <div className="container-x grid gap-14 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-28">
          <div>
            <SectionHead eyebrow="FAQ" title={copy.common.faqTitle} />
            <p className="mt-6 text-[0.96rem] leading-relaxed text-ink-soft">{c.ctaBody}</p>
            <div className="mt-8 flex flex-col gap-3">
              <a href={site.phoneHref} className="flex items-center gap-3 text-[0.95rem] font-medium text-teal-700">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                {site.phone}
              </a>
              <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[0.95rem] font-medium text-teal-700">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50">
                  <Icon name="chat" className="h-4 w-4" />
                </span>
                {copy.common.whatsapp}
              </a>
            </div>
          </div>
          <Accordion items={c.faq} />
        </div>
      </section>

      <CtaBand copy={copy} locale={locale} title={c.ctaTitle} body={c.ctaBody} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
