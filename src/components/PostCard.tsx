import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { SiteCopy } from "@/content";
import { postT, type Post } from "@/lib/data";
import { Icon } from "./Brand";

export default function PostCard({
  post,
  locale,
  copy,
}: {
  post: Post;
  locale: Locale;
  copy: SiteCopy;
}) {
  const t = postT(post, locale);
  const audience = copy.insights.audience[post.audience];

  return (
    <article className="group relative flex h-full flex-col border-t border-line pt-6 transition-colors hover:border-teal-400">
      <div className="flex items-center gap-3 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-teal-600">
        <span>{audience}</span>
        <span className="h-1 w-1 rounded-full bg-line" />
        <span className="text-ink-muted">
          {post.reading_minutes} {copy.insights.readingTime}
        </span>
      </div>
      <h3 className="mt-3 font-display text-[1.55rem] leading-tight text-ink transition-colors group-hover:text-teal-700 balance">
        <Link href={{ pathname: "/wissen/[slug]", params: { slug: post.slug } }} className="before:absolute before:inset-0">
          {t.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-[0.94rem] leading-relaxed text-ink-soft pretty">{t.excerpt}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[0.86rem] font-semibold text-teal-700">
        {copy.common.more}
        <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </article>
  );
}
