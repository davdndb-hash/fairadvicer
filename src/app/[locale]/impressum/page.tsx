import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getCopy } from "@/content";
import { getPathname } from "@/i18n/navigation";
import { impressum } from "@/content/legal";
import LegalPage, { legalNotice } from "@/components/LegalPage";

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
    title: copy.legal.impressumTitle,
    robots: { index: false, follow: true },
    alternates: {
      canonical: getPathname({ href: "/impressum", locale }),
      languages: {
        de: getPathname({ href: "/impressum", locale: "de" }),
        en: getPathname({ href: "/impressum", locale: "en" }),
        pt: getPathname({ href: "/impressum", locale: "pt" }),
      },
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);
  return <LegalPage title={copy.legal.impressumTitle} markdown={impressum} notice={legalNotice(copy)} />;
}
