import type { MetadataRoute } from "next";
import { routing, type Locale } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import { getJobs, getPosts } from "@/lib/data";
import { site } from "@/lib/site";

type Href = Parameters<typeof getPathname>[0]["href"];

function entry(href: Href, priority: number, changeFrequency: "daily" | "weekly" | "monthly") {
  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, `${site.url}${getPathname({ href, locale: l })}`]),
  );
  return {
    url: `${site.url}${getPathname({ href, locale: routing.defaultLocale })}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: { languages },
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [jobs, posts] = await Promise.all([getJobs(), getPosts()]);

  const statics: MetadataRoute.Sitemap = [
    entry("/", 1, "weekly"),
    entry("/arbeitgeber", 0.9, "monthly"),
    entry("/pflegefachkraefte", 0.9, "monthly"),
    entry("/stellenangebote", 0.85, "daily"),
    entry("/wissen", 0.7, "weekly"),
    entry("/ueber-uns", 0.6, "monthly"),
    entry("/kontakt", 0.6, "monthly"),
  ];

  const jobEntries = jobs.map((job) =>
    entry({ pathname: "/stellenangebote/[slug]", params: { slug: job.slug } }, 0.8, "weekly"),
  );

  const postEntries = posts.map((post) =>
    entry({ pathname: "/wissen/[slug]", params: { slug: post.slug } }, 0.65, "monthly"),
  );

  return [...statics, ...jobEntries, ...postEntries];
}

export const revalidate = 3600;
export const dynamic = "force-static";

export type { Locale };
