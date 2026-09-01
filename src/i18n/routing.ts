import { defineRouting } from "next-intl/routing";

export const locales = ["de", "en", "pt"] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "de",
  localePrefix: "as-needed",
  localeDetection: true,
  pathnames: {
    "/": "/",
    "/arbeitgeber": {
      de: "/arbeitgeber",
      en: "/employers",
      pt: "/empregadores",
    },
    "/pflegefachkraefte": {
      de: "/pflegefachkraefte",
      en: "/nurses",
      pt: "/profissionais",
    },
    "/ueber-uns": {
      de: "/ueber-uns",
      en: "/about-us",
      pt: "/sobre-nos",
    },
    "/kontakt": {
      de: "/kontakt",
      en: "/contact",
      pt: "/contato",
    },
    "/stellenangebote": {
      de: "/stellenangebote",
      en: "/jobs",
      pt: "/vagas",
    },
    "/stellenangebote/[slug]": {
      de: "/stellenangebote/[slug]",
      en: "/jobs/[slug]",
      pt: "/vagas/[slug]",
    },
    "/wissen": {
      de: "/wissen",
      en: "/insights",
      pt: "/conhecimento",
    },
    "/wissen/[slug]": {
      de: "/wissen/[slug]",
      en: "/insights/[slug]",
      pt: "/conhecimento/[slug]",
    },
    "/impressum": {
      de: "/impressum",
      en: "/imprint",
      pt: "/impressum",
    },
    "/datenschutz": {
      de: "/datenschutz",
      en: "/privacy",
      pt: "/privacidade",
    },
    "/agb": {
      de: "/agb",
      en: "/terms",
      pt: "/termos",
    },
  },
});
