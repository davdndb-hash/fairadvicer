import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { inter, display } from "@/lib/fonts";
import { routing, type Locale } from "@/i18n/routing";
import { getCopy } from "@/content";
import { site } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const active = (hasLocale(routing.locales, locale) ? locale : routing.defaultLocale) as Locale;
  const copy = getCopy(active);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: copy.meta.homeTitle,
      template: `%s · ${site.name}`,
    },
    description: copy.meta.homeDescription,
    applicationName: site.name,
    openGraph: {
      type: "website",
      siteName: site.legalName,
      locale: copy.langTag,
      title: copy.meta.homeTitle,
      description: copy.meta.homeDescription,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.legalName }],
    },
    twitter: { card: "summary_large_image", images: ["/og-image.png"] },
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const active = locale as Locale;
  const copy = getCopy(active);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.legalName,
    alternateName: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    description: copy.meta.homeDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      postalCode: site.postalCode,
      addressLocality: site.city,
      addressCountry: site.country,
    },
    sameAs: [site.social.linkedin, site.social.instagram, site.social.facebook],
    areaServed: "DE",
    knowsLanguage: ["de", "en", "pt"],
  };

  return (
    <html lang={active} className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-dvh antialiased">
        <NextIntlClientProvider>
          <Header copy={copy} locale={active} />
          <main id="main">{children}</main>
          <Footer copy={copy} />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
        />
      </body>
    </html>
  );
}
