import de from "./de";
import en from "./en";
import pt from "./pt";
import type { SiteCopy } from "./types";
import type { Locale } from "@/i18n/routing";

const copy: Record<Locale, SiteCopy> = { de, en, pt };

export function getCopy(locale: Locale): SiteCopy {
  return copy[locale] ?? de;
}

export type { SiteCopy };
