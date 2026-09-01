import { toHtml } from "@/lib/markdown";
import type { SiteCopy } from "@/content";

export default function LegalPage({
  title,
  markdown,
  notice,
}: {
  title: string;
  markdown: string;
  notice?: string;
}) {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line bg-paper-2/60">
        <div className="grain" />
        <div className="container-x relative py-14 lg:py-20">
          <h1 className="text-[2.4rem] leading-[1.05] sm:text-[3rem] lg:text-[3.4rem]">{title}</h1>
        </div>
      </section>
      <div className="container-x py-14 lg:py-20">
        {notice && (
          <p className="prose-legal mb-10 rounded-xl2 border border-line bg-white px-5 py-4 text-[0.88rem] text-ink-soft">
            {notice}
          </p>
        )}
        <div className="prose-legal" dangerouslySetInnerHTML={{ __html: toHtml(markdown) }} />
      </div>
    </>
  );
}

export function legalNotice(copy: SiteCopy) {
  return copy.legal.germanNotice || undefined;
}
