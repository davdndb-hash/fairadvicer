import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getCopy } from "@/content";
import { getPathname } from "@/i18n/navigation";
import { getPosts } from "@/lib/data";
import PostCard from "@/components/PostCard";
import Reveal from "@/components/Reveal";
import { CtaBand, PageHero } from "@/components/ui";

export const revalidate = 600;

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
    title: copy.insights.h1,
    description: copy.insights.lead,
    alternates: {
      canonical: getPathname({ href: "/wissen", locale }),
      languages: {
        de: getPathname({ href: "/wissen", locale: "de" }),
        en: getPathname({ href: "/wissen", locale: "en" }),
        pt: getPathname({ href: "/wissen", locale: "pt" }),
      },
    },
  };
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);
  const posts = await getPosts();

  return (
    <>
      <PageHero eyebrow={copy.insights.eyebrow} title={copy.insights.h1} lead={copy.insights.lead} />

      <section className="container-x py-16 lg:py-24">
        {posts.length === 0 ? (
          <p className="text-[1rem] text-ink-soft">{copy.insights.empty}</p>
        ) : (
          <ul className="grid gap-x-10 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal as="li" key={post.id} delay={(i % 3) * 80}>
                <PostCard post={post} locale={locale} copy={copy} />
              </Reveal>
            ))}
          </ul>
        )}
      </section>

      <CtaBand copy={copy} locale={locale} title={copy.home.ctaTitle} body={copy.home.ctaBody} />
    </>
  );
}
