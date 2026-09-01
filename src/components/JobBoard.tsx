"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/i18n/routing";
import type { SiteCopy } from "@/content";
import type { Job } from "@/lib/data";
import { jobT } from "@/lib/data";
import JobCard from "./JobCard";
import { Link } from "@/i18n/navigation";
import { Icon } from "./Brand";

function Select({
  label,
  value,
  onChange,
  options,
  allLabel,
  format,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  allLabel: string;
  format?: (v: string) => string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-ink-muted">
        {label}
      </span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="field py-2.5">
        <option value="">{allLabel}</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {format ? format(o) : o}
          </option>
        ))}
      </select>
    </label>
  );
}

const prettify = (v: string) =>
  v
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

export default function JobBoard({
  jobs,
  locale,
  copy,
}: {
  jobs: Job[];
  locale: Locale;
  copy: SiteCopy;
}) {
  const [category, setCategory] = useState("");
  const [region, setRegion] = useState("");
  const [type, setType] = useState("");

  const categories = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.category).filter(Boolean))).sort(),
    [jobs],
  );
  const regions = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.region).filter(Boolean) as string[])).sort(),
    [jobs],
  );
  const types = useMemo(
    () => Array.from(new Set(jobs.map((j) => j.employment_type).filter(Boolean))).sort(),
    [jobs],
  );

  const filtered = jobs.filter(
    (j) =>
      (!category || j.category === category) &&
      (!region || j.region === region) &&
      (!type || j.employment_type === type),
  );

  const active = category || region || type;

  return (
    <div>
      <div className="card grid gap-4 p-5 sm:grid-cols-3 lg:p-6">
        <Select
          label={copy.jobs.filterCategory}
          value={category}
          onChange={setCategory}
          options={categories}
          allLabel={copy.jobs.filterAll}
          format={prettify}
        />
        <Select
          label={copy.jobs.filterRegion}
          value={region}
          onChange={setRegion}
          options={regions}
          allLabel={copy.jobs.filterAll}
        />
        <Select
          label={copy.jobs.filterType}
          value={type}
          onChange={setType}
          options={types}
          allLabel={copy.jobs.filterAll}
          format={prettify}
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[0.88rem] text-ink-muted">
          <span className="font-semibold text-ink">{filtered.length}</span>{" "}
          {filtered.length === 1 ? copy.jobs.resultsOne : copy.jobs.resultsMany}
        </p>
        {active && (
          <button
            type="button"
            onClick={() => {
              setCategory("");
              setRegion("");
              setType("");
            }}
            className="text-[0.85rem] font-semibold text-teal-700 underline underline-offset-4"
          >
            {copy.jobs.filterAll}
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="card mt-8 flex flex-col items-start gap-4 p-10 text-center sm:items-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-600">
            <Icon name="search" className="h-5 w-5" />
          </span>
          <p className="text-[1rem] text-ink-soft">{copy.jobs.empty}</p>
          <Link href="/kontakt" className="btn btn-primary">
            {copy.jobs.emptyCta}
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
      ) : (
        <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((job) => (
            <li key={job.id} className="h-full">
              <JobCard job={job} locale={locale} copy={copy} />
            </li>
          ))}
        </ul>
      )}

      <p className="sr-only">
        {filtered.map((j) => jobT(j, locale).title).join(", ")}
      </p>
    </div>
  );
}
