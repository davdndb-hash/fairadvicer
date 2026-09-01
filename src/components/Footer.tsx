import { Link } from "@/i18n/navigation";
import type { SiteCopy } from "@/content";
import { site } from "@/lib/site";
import { Logo, Icon } from "./Brand";

function Social({ href, label, d }: { href: string; label: string; d: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-teal-100 transition-colors hover:border-amber-400 hover:text-amber-400"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d={d} />
      </svg>
    </a>
  );
}

export default function Footer({ copy }: { copy: SiteCopy }) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-teal-950 text-teal-100">
      <div className="grain grain-light" />
      <div className="container-x relative py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-[0.92rem] leading-relaxed text-teal-200/85 pretty">
              {copy.footer.blurb}
            </p>
            <div className="mt-6 space-y-2 text-[0.92rem]">
              <a href={site.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-white">
                <Icon name="phone" className="h-4 w-4 text-amber-400" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 transition-colors hover:text-white">
                <Icon name="mail" className="h-4 w-4 text-amber-400" />
                {site.email}
              </a>
              <p className="flex items-start gap-2.5 text-teal-200/85">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                <span>
                  {site.street}, {site.postalCode} {site.city}
                </span>
              </p>
            </div>
          </div>

          <nav aria-label={copy.footer.pages}>
            <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-amber-400">
              {copy.footer.pages}
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.92rem]">
              {[
                { href: "/arbeitgeber" as const, label: copy.nav.employers },
                { href: "/pflegefachkraefte" as const, label: copy.nav.nurses },
                { href: "/stellenangebote" as const, label: copy.nav.jobs },
                { href: "/wissen" as const, label: copy.nav.insights },
                { href: "/ueber-uns" as const, label: copy.nav.about },
                { href: "/kontakt" as const, label: copy.nav.contact },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-teal-200/85 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={copy.footer.legal}>
            <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-amber-400">
              {copy.footer.legal}
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.92rem]">
              {[
                { href: "/impressum" as const, label: copy.legal.impressumTitle },
                { href: "/datenschutz" as const, label: copy.legal.privacyTitle },
                { href: "/agb" as const, label: copy.legal.termsTitle },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-teal-200/85 transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-amber-400">
              {copy.footer.more}
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.92rem]">
              <li>
                <a
                  href={site.applicantPortal}
                  target="_blank"
                  rel="noreferrer"
                  className="text-teal-200/85 transition-colors hover:text-white"
                >
                  {copy.footer.portal}
                </a>
              </li>
              <li className="text-teal-200/85">{copy.common.officeHoursValue}</li>
            </ul>

            <h2 className="mt-8 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-amber-400">
              {copy.footer.social}
            </h2>
            <div className="mt-4 flex gap-2">
              <Social
                href={site.social.linkedin}
                label="LinkedIn"
                d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.24 8.02h4.48V24H.24Zm7.85 0h4.29v2.18h.06c.6-1.13 2.06-2.32 4.24-2.32 4.54 0 5.38 2.99 5.38 6.88V24h-4.48v-7.36c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.82 1.91-2.82 3.89V24H8.09Z"
              />
              <Social
                href={site.social.instagram}
                label="Instagram"
                d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.89 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16Zm0 5.68a4.16 4.16 0 1 0 0 8.32 4.16 4.16 0 0 0 0-8.32Zm0 6.86a2.7 2.7 0 1 1 0-5.4 2.7 2.7 0 0 1 0 5.4Zm4.33-7.03a.97.97 0 1 0 0-1.95.97.97 0 0 0 0 1.95Z"
              />
              <Social
                href={site.social.facebook}
                label="Facebook"
                d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[0.82rem] text-teal-200/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. {copy.footer.rights}
          </p>
          <p>
            {site.legalName} · HRB 272 088 · Amtsgericht München · USt-IdNr. DE349499426
          </p>
        </div>
      </div>
    </footer>
  );
}
