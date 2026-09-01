import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { SiteCopy } from "@/content";
import { jobT, formatSalary, type Job } from "@/lib/data";
import { Icon } from "./Brand";

export default function JobCard({
  job,
  locale,
  copy,
}: {
  job: Job;
  locale: Locale;
  copy: SiteCopy;
}) {
  const t = jobT(job, locale);

  return (
    <article className="group card relative flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-200 hover:shadow-lift">
      {job.featured && (
        <span className="absolute right-5 top-5 rounded-full bg-amber-500/15 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-wider text-amber-600">
          Top
        </span>
      )}
      <p className="flex items-center gap-1.5 text-[0.78rem] font-medium text-teal-600">
        <Icon name="pin" className="h-3.5 w-3.5" />
        {[job.city, job.region].filter(Boolean).join(", ")}
      </p>
      <h3 className="mt-2.5 pr-12 font-sans text-[1.12rem] font-semibold leading-snug tracking-[-0.015em] text-ink">
        <Link href={{ pathname: "/stellenangebote/[slug]", params: { slug: job.slug } }} className="before:absolute before:inset-0">
          {t.title}
        </Link>
      </h3>
      <p className="mt-1 text-[0.85rem] text-ink-muted">{t.facility}</p>
      <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-ink-soft pretty">{t.summary}</p>

      <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-line pt-4 text-[0.8rem]">
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">{copy.jobs.facts.salary}</dt>
          <Icon name="euro" className="h-3.5 w-3.5 text-teal-500" />
          <dd className="font-medium text-ink">{formatSalary(job, locale, copy.jobs.noSalary)}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">{copy.jobs.facts.german}</dt>
          <Icon name="chat" className="h-3.5 w-3.5 text-teal-500" />
          <dd className="text-ink-soft">{job.german_level}</dd>
        </div>
        <div className="flex items-center gap-1.5">
          <dt className="sr-only">{copy.jobs.facts.start}</dt>
          <Icon name="clock" className="h-3.5 w-3.5 text-teal-500" />
          <dd className="text-ink-soft">{job.starts_at}</dd>
        </div>
      </dl>

      <span className="mt-5 inline-flex items-center gap-1.5 text-[0.86rem] font-semibold text-teal-700">
        {copy.jobs.cardCta}
        <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </article>
  );
}
