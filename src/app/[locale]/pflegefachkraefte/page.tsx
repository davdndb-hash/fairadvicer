import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getCopy } from "@/content";
import { getPathname } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { getJobs } from "@/lib/data";
import { Link } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import JobCard from "@/components/JobCard";
import { Icon, type IconName } from "@/components/Brand";
import {
  SectionHead,
  FeatureGrid,
  StepList,
  CtaBand,
  BulletList,
  PageHero,
} from "@/components/ui";

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
    title: copy.nurses.h1,
    description: copy.nurses.lead,
    alternates: {
      canonical: getPathname({ href: "/pflegefachkraefte", locale }),
      languages: {
        de: getPathname({ href: "/pflegefachkraefte", locale: "de" }),
        en: getPathname({ href: "/pflegefachkraefte", locale: "en" }),
        pt: getPathname({ href: "/pflegefachkraefte", locale: "pt" }),
      },
    },
  };
}

const promiseIcons: IconName[] = ["globe", "users", "certificate", "shield", "home", "sparkle"];
const guaranteeIcons: IconName[] = ["heart", "users", "chat", "euro"];

export default async function NursesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);
  const c = copy.nurses;
  const jobs = (await getJobs()).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h1}
        lead={c.lead}
        primary={{ label: c.ctaSecondary, href: "/stellenangebote" }}
        secondary={{ label: c.ctaPrimary, href: site.applicantPortal, external: true }}
      />

      <section className="container-x py-20 lg:py-28">
        <SectionHead eyebrow={c.promiseEyebrow} title={c.promiseTitle} lead={c.promiseLead} />
        <div className="mt-14">
          <FeatureGrid items={c.promises} icons={promiseIcons} />
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="container-x py-20 lg:py-28">
          <SectionHead eyebrow={c.stepsEyebrow} title={c.stepsTitle} />
          <div className="mt-14">
            <StepList steps={c.steps.slice(0, 4)} />
          </div>
          <Reveal className="mt-6">
            <div className="card flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between lg:p-9">
              <div className="flex items-start gap-5">
                <span className="font-display text-[2.6rem] leading-none text-brand-100">
                  {c.steps[4].step}
                </span>
                <div>
                  <h3 className="font-sans text-[1.02rem] font-semibold tracking-[-0.01em]">
                    {c.steps[4].title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-[0.92rem] leading-relaxed text-ink-soft pretty">
                    {c.steps[4].body}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x grid gap-14 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
        <Reveal>
          <h2 className="font-display text-[2.1rem] leading-tight lg:text-[2.5rem]">
            {c.requirementsTitle}
          </h2>
          <p className="mt-5 text-[0.98rem] leading-relaxed text-ink-soft pretty">{c.requirementsLead}</p>
          <div className="mt-8">
            <BulletList items={c.requirements} />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="card h-full p-8 lg:p-11">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl2 bg-brand-50 text-brand-600">
              <Icon name="certificate" className="h-5 w-5" />
            </span>
            <h2 className="mt-6 font-display text-[2rem] leading-tight">{c.documentsTitle}</h2>
            <ol className="mt-6 divide-y divide-line">
              {c.documents.map((d, i) => (
                <li key={d} className="flex items-center gap-4 py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-[0.8rem] font-semibold text-brand-700">
                    {i + 1}
                  </span>
                  <span className="text-[0.95rem] text-ink">{d}</span>
                </li>
              ))}
            </ol>
            <a
              href={site.applicantPortal}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary mt-8"
            >
              {c.ctaPrimary}
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-brand-950 text-white">
        <div className="grain grain-light" />
        <div className="container-x relative py-20 lg:py-28">
          <SectionHead title={c.guaranteeTitle} light align="center" />
          <div className="mt-14">
            <FeatureGrid items={c.guarantees} icons={guaranteeIcons} light columns={2} />
          </div>
        </div>
      </section>

      {jobs.length > 0 && (
        <section className="container-x py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead eyebrow={copy.jobs.eyebrow} title={copy.jobs.h1} className="!max-w-xl" />
            <Link href="/stellenangebote" className="btn btn-ghost">
              {copy.jobs.eyebrow}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, i) => (
              <Reveal key={job.id} delay={i * 80}>
                <JobCard job={job} locale={locale} copy={copy} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-line bg-white">
        <div className="container-x grid gap-14 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
          <SectionHead eyebrow="FAQ" title={copy.common.faqTitle} />
          <Accordion items={c.faq} />
        </div>
      </section>

      <CtaBand copy={copy} locale={locale} title={c.ctaTitle} body={c.ctaBody} variant="candidate" />
    </>
  );
}
