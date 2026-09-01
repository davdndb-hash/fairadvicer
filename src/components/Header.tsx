"use client";

import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { SiteCopy } from "@/content";
import { site } from "@/lib/site";
import { Logo, Icon } from "./Brand";
import LocaleSwitcher from "./LocaleSwitcher";

export default function Header({ copy, locale }: { copy: SiteCopy; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/arbeitgeber" as const, label: copy.nav.employers },
    { href: "/pflegefachkraefte" as const, label: copy.nav.nurses },
    { href: "/stellenangebote" as const, label: copy.nav.jobs },
    { href: "/wissen" as const, label: copy.nav.insights },
    { href: "/ueber-uns" as const, label: copy.nav.about },
  ];

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-900 focus:px-4 focus:py-2 focus:text-sm focus:text-white">
        {copy.common.skip}
      </a>

      <div className="hidden bg-brand-950 text-brand-100 lg:block">
        <div className="container-x flex h-9 items-center justify-between text-[0.78rem]">
          <p className="flex items-center gap-2">
            <Icon name="sparkle" className="h-3.5 w-3.5 text-accent-400" />
            {copy.meta.tagline}
          </p>
          <div className="flex items-center gap-5">
            <a href={site.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Icon name="phone" className="h-3.5 w-3.5" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 transition-colors hover:text-white">
              <Icon name="mail" className="h-3.5 w-3.5" />
              {site.email}
            </a>
            <span className="flex items-center gap-1.5 text-brand-200/80">
              <Icon name="clock" className="h-3.5 w-3.5" />
              {copy.common.officeHoursValue}
            </span>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-paper"
        }`}
      >
        <div className="container-x flex h-[4.4rem] items-center justify-between gap-6">
          <Link href="/" aria-label={site.legalName}>
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label={copy.nav.menu}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-3.5 py-2 text-[0.9rem] font-medium transition-colors ${
                  pathname === l.href
                    ? "text-brand-700"
                    : "text-ink-soft hover:bg-brand-50 hover:text-brand-700"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <LocaleSwitcher current={locale} label={copy.nav.langLabel} />
            <Link href="/kontakt" className="btn btn-primary">
              {copy.nav.cta}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-label={open ? copy.nav.close : copy.nav.menu}
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 h-[1.6px] w-5 bg-ink transition-all ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.6px] w-5 bg-ink transition-all ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>

        {open && (
          <div className="fixed inset-x-0 top-[4.4rem] z-40 h-[calc(100dvh-4.4rem)] overflow-y-auto border-t border-line bg-paper px-5 pb-10 pt-6 lg:hidden">
            <nav className="flex flex-col gap-1" aria-label={copy.nav.menu}>
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="border-b border-line/70 py-4 font-display text-2xl"
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/kontakt" className="border-b border-line/70 py-4 font-display text-2xl text-brand-700">
                {copy.nav.contact}
              </Link>
            </nav>

            <div className="mt-7 flex flex-col gap-3">
              <Link href="/kontakt" className="btn btn-primary w-full">
                {copy.nav.cta}
              </Link>
              <a href={site.applicantPortal} className="btn btn-ghost w-full" target="_blank" rel="noreferrer">
                {copy.nav.portal}
              </a>
            </div>

            <div className="mt-7 flex items-center justify-between">
              <LocaleSwitcher current={locale} label={copy.nav.langLabel} />
              <a href={site.phoneHref} className="text-sm font-medium text-brand-700">
                {site.phone}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
