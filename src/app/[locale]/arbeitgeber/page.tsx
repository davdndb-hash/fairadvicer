import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getCopy } from "@/content";
import { getPathname } from "@/i18n/navigation";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import { Icon, type IconName } from "@/components/Brand";
import {
  SectionHead,
  FeatureGrid,
  StepList,
  CtaBand,
  BulletList,
  PageHero,
} from "@/components/ui";

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
    title: copy.employers.h1,
    description: copy.employers.lead,
    alternates: {
      canonical: getPathname({ href: "/arbeitgeber", locale }),
      languages: {
        de: getPathname({ href: "/arbeitgeber", locale: "de" }),
        en: getPathname({ href: "/arbeitgeber", locale: "en" }),
        pt: getPathname({ href: "/arbeitgeber", locale: "pt" }),
      },
    },
  };
}

const painIcons: IconName[] = ["clock", "users", "certificate"];
const includedIcons: IconName[] = ["shield", "home", "certificate", "sparkle", "globe", "heart"];

export default async function EmployersPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);
  const c = copy.employers;

  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title={c.h1}
        lead={c.lead}
        primary={{ label: c.ctaPrimary, href: "/kontakt" }}
        secondary={{ label: c.ctaSecondary, href: "#ablauf" }}
      />

      <section className="container-x py-20 lg:py-28">
        <SectionHead eyebrow={c.painEyebrow} title={c.painTitle} lead={c.painLead} />
        <div className="mt-14">
          <FeatureGrid items={c.pains} icons={painIcons} />
        </div>
      </section>

      <section id="ablauf" className="scroll-mt-24 border-y border-line bg-white">
        <div className="container-x py-20 lg:py-28">
          <SectionHead eyebrow={c.stepsEyebrow} title={c.stepsTitle} lead={c.stepsLead} />
          <div className="mt-14">
            <StepList steps={c.steps} />
          </div>
        </div>
      </section>

      <section className="container-x py-20 lg:py-28">
        <SectionHead eyebrow={c.includedEyebrow} title={c.includedTitle} />
        <div className="mt-14">
          <FeatureGrid items={c.included} icons={includedIcons} />
        </div>
      </section>

      <section className="border-y border-line bg-paper-2/50">
        <div className="container-x grid gap-14 py-20 lg:grid-cols-2 lg:gap-20 lg:py-28">
          <Reveal>
            <SectionHead eyebrow={c.recognitionEyebrow} title={c.recognitionTitle} />
            <p className="mt-6 text-[1rem] leading-relaxed text-ink-soft pretty">{c.recognitionBody}</p>
            <div className="mt-8">
              <BulletList items={c.recognitionBullets} />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card h-full p-8 lg:p-11">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl2 bg-accent-500/15 text-accent-700">
                <Icon name="euro" className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-[2rem] leading-tight">{c.costTitle}</h3>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-soft pretty">{c.costBody}</p>
              <div className="mt-8 rounded-xl2 bg-brand-50 p-5">
                <p className="text-[0.9rem] font-medium text-brand-900">{copy.home.stats[0].label}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-x grid gap-14 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-28">
        <SectionHead eyebrow="FAQ" title={copy.common.faqTitle} />
        <Accordion items={c.faq} />
      </section>

      <CtaBand copy={copy} locale={locale} title={c.ctaTitle} body={c.ctaBody} variant="employer" />
    </>
  );
}
