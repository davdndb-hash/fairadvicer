import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getCopy } from "@/content";
import { Link, getPathname } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { getJob, getJobs, jobT, formatSalary } from "@/lib/data";
import ApplyForm from "@/components/ApplyForm";
import JobCard from "@/components/JobCard";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Brand";
import { BulletList } from "@/components/ui";

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const jobs = await getJobs();
  return routing.locales.flatMap((locale) =>
    jobs.map((job) => ({ locale, slug: job.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const job = await getJob(slug);
  if (!job) return {};
  const t = jobT(job, locale);
  const path = (l: Locale) => getPathname({ href: { pathname: "/stellenangebote/[slug]", params: { slug } }, locale: l });
  return {
    title: `${t.title} · ${[job.city, job.region].filter(Boolean).join(", ")}`,
    description: t.summary,
    alternates: {
      canonical: path(locale),
      languages: { de: path("de"), en: path("en"), pt: path("pt") },
    },
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);

  const job = await getJob(slug);
  if (!job) notFound();

  const t = jobT(job, locale);
  const all = await getJobs();
  const similar = all.filter((j) => j.slug !== job.slug).slice(0, 3);

  const facts = [
    { icon: "pin" as const, label: copy.jobs.facts.location, value: [job.city, job.region].filter(Boolean).join(", ") },
    { icon: "users" as const, label: copy.jobs.facts.type, value: job.employment_type.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" / ") },
    { icon: "chat" as const, label: copy.jobs.facts.german, value: job.german_level ?? "—" },
    { icon: "euro" as const, label: copy.jobs.facts.salary, value: formatSalary(job, locale, copy.jobs.noSalary) },
    { icon: "clock" as const, label: copy.jobs.facts.start, value: job.starts_at ?? "—" },
  ];

  const jobLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: t.title,
    description: `${t.description}\n\n${t.tasks.join("\n")}`,
    employmentType: job.employment_type.includes("teilzeit") ? ["FULL_TIME", "PART_TIME"] : "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: site.legalName,
      sameAs: site.url,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.city,
        addressRegion: job.region,
        addressCountry: job.country,
      },
    },
    ...(job.salary_min
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: job.currency,
            value: {
              "@type": "QuantitativeValue",
              minValue: job.salary_min,
              maxValue: job.salary_max ?? job.salary_min,
              unitText: "MONTH",
            },
          },
        }
      : {}),
    inLanguage: locale,
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-paper-2/60">
        <div className="grain" />
        <div className="container-x relative py-12 lg:py-16">
          <Link
            href="/stellenangebote"
            className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-teal-700"
          >
            <Icon name="arrow" className="h-4 w-4 rotate-180" />
            {copy.jobs.eyebrow}
          </Link>
          <p className="mt-6 flex flex-wrap items-center gap-3 text-[0.82rem] text-ink-muted">
            <span className="rounded-full bg-teal-50 px-3 py-1 font-semibold text-teal-700">
              {job.category.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}
            </span>
            <span>{t.facility}</span>
          </p>
          <h1 className="mt-4 max-w-4xl text-[2.3rem] leading-[1.04] sm:text-[3rem] lg:text-[3.5rem] balance">
            {t.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft pretty">{t.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#bewerben" className="btn btn-primary">
              {copy.jobs.detailApply}
              <Icon name="arrow" className="h-4 w-4" />
            </a>
            <a href={site.phoneHref} className="btn btn-ghost">
              {copy.common.callUs}
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-white">
        <div className="container-x">
          <dl className="grid divide-line sm:grid-cols-2 lg:grid-cols-5 lg:divide-x">
            {facts.map((f) => (
              <div key={f.label} className="flex items-center gap-3 border-b border-line py-5 lg:border-b-0 lg:px-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                  <Icon name={f.icon} className="h-4 w-4" />
                </span>
                <span>
                  <dt className="text-[0.72rem] uppercase tracking-[0.1em] text-ink-muted">{f.label}</dt>
                  <dd className="text-[0.92rem] font-medium text-ink">{f.value}</dd>
                </span>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="container-x grid gap-14 py-16 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20 lg:py-24">
        <div>
          <Reveal>
            <h2 className="font-display text-[2rem] leading-tight">{copy.jobs.detailAbout}</h2>
            <div className="mt-5 space-y-4">
              {t.description.split("\n\n").map((p) => (
                <p key={p.slice(0, 20)} className="text-[1rem] leading-relaxed text-ink-soft pretty">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={60} className="mt-12">
            <h2 className="font-display text-[2rem] leading-tight">{copy.jobs.detailTasks}</h2>
            <div className="mt-5">
              <BulletList items={t.tasks} />
            </div>
          </Reveal>

          <Reveal delay={60} className="mt-12">
            <h2 className="font-display text-[2rem] leading-tight">{copy.jobs.detailProfile}</h2>
            <div className="mt-5">
              <BulletList items={t.profile} />
            </div>
          </Reveal>

          <Reveal delay={60} className="mt-12">
            <div className="relative overflow-hidden rounded-xl3 bg-teal-950 p-8 text-white lg:p-10">
              <div className="grain grain-light" />
              <h2 className="relative font-display text-[2rem] leading-tight">{copy.jobs.detailBenefits}</h2>
              <div className="relative mt-6">
                <BulletList items={t.benefits} light />
              </div>
            </div>
          </Reveal>
        </div>

        <aside id="bewerben" className="scroll-mt-24">
          <div className="lg:sticky lg:top-28">
            <div className="card p-7">
              <h2 className="font-display text-[1.9rem] leading-tight">{copy.jobs.detailApply}</h2>
              <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">{copy.jobs.detailApplyLead}</p>
              <div className="mt-7">
                <ApplyForm copy={copy} locale={locale} jobId={job.id} jobSlug={job.slug} />
              </div>
            </div>
          </div>
        </aside>
      </section>

      {similar.length > 0 && (
        <section className="border-t border-line bg-paper-2/50">
          <div className="container-x py-16 lg:py-20">
            <h2 className="font-display text-[2rem] leading-tight">{copy.jobs.similar}</h2>
            <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {similar.map((j, i) => (
                <Reveal as="li" key={j.id} delay={i * 70}>
                  <JobCard job={j} locale={locale} copy={copy} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobLd) }} />
    </>
  );
}
