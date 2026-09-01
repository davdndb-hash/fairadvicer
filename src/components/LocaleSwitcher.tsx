"use client";

import { useParams } from "next/navigation";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";

const labels: Record<Locale, string> = { de: "DE", en: "EN", pt: "PT" };
const full: Record<Locale, string> = { de: "Deutsch", en: "English", pt: "Português" };

export default function LocaleSwitcher({
  current,
  light = false,
  label,
}: {
  current: Locale;
  light?: boolean;
  label: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [pending, startTransition] = useTransition();

  function change(next: Locale) {
    if (next === current) return;
    startTransition(() => {
      router.replace(
        // @ts-expect-error params shape is validated by next-intl at runtime
        { pathname, params },
        { locale: next },
      );
    });
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border p-0.5 ${
        light ? "border-white/20" : "border-line bg-white/70"
      } ${pending ? "opacity-60" : ""}`}
      role="group"
      aria-label={label}
    >
      {locales.map((loc) => {
        const active = loc === current;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => change(loc)}
            aria-label={full[loc]}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-2.5 py-1 text-[0.72rem] font-semibold tracking-wide transition-colors ${
              active
                ? light
                  ? "bg-white text-brand-950"
                  : "bg-brand-700 text-white"
                : light
                  ? "text-white/70 hover:text-white"
                  : "text-ink-muted hover:text-brand-700"
            }`}
          >
            {labels[loc]}
          </button>
        );
      })}
    </div>
  );
}
