import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { routing, type Locale } from "@/i18n/routing";
import { getCopy } from "@/content";
import { Link, getPathname } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { getPost, getPosts, postT } from "@/lib/data";
import { toHtml } from "@/lib/markdown";
import PostCard from "@/components/PostCard";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/Brand";
import { CtaBand } from "@/components/ui";

export const revalidate = 600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getPosts();
  return routing.locales.flatMap((locale) => posts.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  const t = postT(post, locale);
  const path = (l: Locale) => getPathname({ href: { pathname: "/wissen/[slug]", params: { slug } }, locale: l });
  return {
    title: t.title,
    description: t.excerpt,
    alternates: { canonical: path(locale), languages: { de: path("de"), en: path("en"), pt: path("pt") } },
    openGraph: { type: "article", title: t.title, description: t.excerpt, publishedTime: post.published_at },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const copy = getCopy(locale);

  const post = await getPost(slug);
  if (!post) notFound();

  const t = postT(post, locale);
  const html = toHtml(t.body);
  const all = await getPosts();
  const related = all.filter((p) => p.slug !== post.slug).slice(0, 3);

  const dateLabel = new Intl.DateTimeFormat(copy.langTag, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.published_at));

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.excerpt,
    datePublished: post.published_at,
    inLanguage: locale,
    author: { "@type": "Organization", name: site.legalName },
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
  };

  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-paper-2/60">
        <div className="grain" />
        <div className="container-x relative py-12 lg:py-16">
          <Link href="/wissen" className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-teal-700">
            <Icon name="arrow" className="h-4 w-4 rotate-180" />
            {copy.insights.eyebrow}
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-teal-600">
            <span>{copy.insights.audience[post.audience]}</span>
            <span className="h-1 w-1 rounded-full bg-line" />
            <span className="text-ink-muted">
              {post.reading_minutes} {copy.insights.readingTime}
            </span>
            <span className="h-1 w-1 rounded-full bg-line" />
            <time dateTime={post.published_at} className="font-normal normal-case tracking-normal text-ink-muted">
              {dateLabel}
            </time>
          </div>
          <h1 className="mt-5 max-w-4xl text-[2.3rem] leading-[1.05] sm:text-[3rem] lg:text-[3.6rem] balance">
            {t.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft pretty">{t.excerpt}</p>
        </div>
      </section>

      <article className="container-x py-14 lg:py-20">
        <div className="article-body" dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      {related.length > 0 && (
        <section className="border-t border-line bg-paper-2/50">
          <div className="container-x py-16 lg:py-20">
            <h2 className="font-display text-[2rem] leading-tight">{copy.insights.related}</h2>
            <ul className="mt-10 grid gap-10 md:grid-cols-3">
              {related.map((p, i) => (
                <Reveal as="li" key={p.id} delay={i * 70}>
                  <PostCard post={p} locale={locale} copy={copy} />
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand copy={copy} locale={locale} title={copy.home.ctaTitle} body={copy.home.ctaBody} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    </>
  );
}
