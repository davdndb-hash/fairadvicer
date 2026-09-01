import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getCopy } from "@/content";
import { getPathname } from "@/i18n/navigation";
import { getJobs } from "@/lib/data";
import JobBoard from "@/components/JobBoard";
import { CtaBand, PageHero } from "@/components/ui";

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
    title: copy.jobs.h1,
    description: copy.jobs.lead,
    alternates: {
      canonical: getPathname({ href: "/stellenangebote", locale }),
      languages: {
        de: getPathname({ href: "/stellenangebote", locale: "de" }),
        en: getPathname({ href: "/stellenangebote", locale: "en" }),
        pt: getPathname({ href: "/stellenangebote", locale: "pt" }),
      },
    },
  };
}

export default async function JobsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);
  const jobs = await getJobs();

  return (
    <>
      <PageHero
        eyebrow={copy.jobs.eyebrow}
        title={copy.jobs.h1}
        lead={copy.jobs.lead}
        primary={{ label: copy.nurses.ctaPrimary, href: "/kontakt" }}
      />

      <section className="container-x py-16 lg:py-20">
        <JobBoard jobs={jobs} locale={locale} copy={copy} />
      </section>

      <CtaBand
        copy={copy}
        locale={locale}
        title={copy.nurses.ctaTitle}
        body={copy.nurses.ctaBody}
        variant="candidate"
      />
    </>
  );
}
