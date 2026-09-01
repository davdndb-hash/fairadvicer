import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getCopy } from "@/content";
import { getPathname } from "@/i18n/navigation";
import { site } from "@/lib/site";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Brand";

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
    title: copy.contact.h1,
    description: copy.contact.lead,
    alternates: {
      canonical: getPathname({ href: "/kontakt", locale }),
      languages: {
        de: getPathname({ href: "/kontakt", locale: "de" }),
        en: getPathname({ href: "/kontakt", locale: "en" }),
        pt: getPathname({ href: "/kontakt", locale: "pt" }),
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);
  const c = copy.contact;

  const mapQuery = encodeURIComponent(`${site.street}, ${site.postalCode} ${site.city}`);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-paper-2/60">
        <div className="grain" />
        <div className="container-x relative py-16 lg:py-20">
          <p className="eyebrow">{c.eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-[2.8rem] leading-[1.01] sm:text-[3.6rem] lg:text-[4.4rem] balance">
            {c.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-[1.08rem] leading-relaxed text-ink-soft pretty">{c.lead}</p>
        </div>
      </section>

      <section className="container-x grid gap-14 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-24">
        <div>
          <Reveal>
            <h2 className="font-sans text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-brand-600">
              {c.directTitle}
            </h2>
            <ul className="mt-5 space-y-4">
              <li>
                <a href={site.phoneHref} className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl2 bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                    <Icon name="phone" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.78rem] text-ink-muted">{copy.common.callUs}</span>
                    <span className="block text-[1rem] font-medium text-ink">{site.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={site.whatsappHref} target="_blank" rel="noreferrer" className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl2 bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                    <Icon name="chat" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.78rem] text-ink-muted">{copy.common.whatsapp}</span>
                    <span className="block text-[1rem] font-medium text-ink">{site.whatsapp}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl2 bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                    <Icon name="mail" className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-[0.78rem] text-ink-muted">{copy.common.writeUs}</span>
                    <span className="block text-[1rem] font-medium text-ink">{site.email}</span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <h2 className="font-sans text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-brand-600">
              {c.addressTitle}
            </h2>
            <address className="mt-4 not-italic text-[0.98rem] leading-relaxed text-ink-soft">
              {c.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <p className="mt-5 flex items-center gap-2 text-[0.9rem] text-ink-soft">
              <Icon name="clock" className="h-4 w-4 text-brand-500" />
              {copy.common.officeHoursValue}
            </p>
            <div className="mt-6 overflow-hidden rounded-xl2 border border-line">
              <iframe
                title={c.addressTitle}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=11.72%2C48.09%2C11.76%2C48.115&layer=mapnik&marker=48.1025%2C11.7395`}
                className="h-56 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={`https://www.openstreetmap.org/search?query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-brand-700"
            >
              <Icon name="pin" className="h-4 w-4" />
              {c.addressTitle}
            </a>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="card p-7 lg:p-10">
            <h2 className="font-display text-[2.1rem] leading-tight">{c.formTitle}</h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-soft">{c.formLead}</p>
            <div className="mt-8">
              <ContactForm copy={copy} locale={locale} variant="general" />
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
