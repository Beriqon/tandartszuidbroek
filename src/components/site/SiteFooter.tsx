import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { siteConfig, mainNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function SiteFooter() {
  const { address, designStudio } = siteConfig;
  const designCredit = (
    <span className="font-medium tracking-tight text-foreground/40 dark:text-foreground/48">
      {designStudio.name}
    </span>
  );

  return (
    <footer
      role="contentinfo"
      aria-labelledby="site-footer-heading"
      className={cn(
        "relative isolate mt-auto overflow-hidden",
        "border-t border-border/50 bg-white text-muted-foreground",
        "shadow-[0_-18px_48px_-28px_rgba(15,40,25,0.08)]",
        "dark:border-border/60 dark:bg-card dark:shadow-[0_-12px_40px_-24px_rgba(0,0,0,0.35)]",
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_6%,transparent),transparent_55%)]"
        aria-hidden
      />

      <h2 id="site-footer-heading" className="sr-only">
        Colofon en contact
      </h2>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-gutter py-11 sm:py-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className={cn(
                "inline-flex rounded-xl border border-border/40 bg-white p-2.5 shadow-sm ring-1 ring-black/[0.04] transition-[border-color,box-shadow] hover:border-primary/25 hover:shadow-md dark:bg-card/80 dark:ring-white/[0.06]",
              )}
              aria-label={`${siteConfig.name} — naar homepage`}
            >
              <Image
                src={siteConfig.logoFooterSrc}
                alt=""
                width={200}
                height={72}
                className="h-9 w-auto max-w-[10rem] object-contain object-left sm:h-10 sm:max-w-[11rem]"
                sizes="(max-width: 640px) 160px, 200px"
              />
            </Link>
            <p className="mt-5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Praktijk
            </p>
            <p className="mt-2 font-serif text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-2xl">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem] sm:leading-relaxed">
              {siteConfig.tagline} Zorgvuldige mondzorg en een rustige sfeer — voor jong en oud.
            </p>
          </div>

          <div className="grid gap-5 sm:gap-6 lg:col-span-8 lg:grid-cols-2">
            <div
              className={cn(
                "rounded-2xl border border-border/45 bg-[color-mix(in_oklab,var(--color-muted)_22%,white)] p-5 shadow-sm ring-1 ring-black/[0.03] dark:bg-muted/35 dark:ring-white/[0.05]",
              )}
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">Contact</p>
              <ul className="mt-4 flex flex-col gap-4 text-sm">
                <li className="flex gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="size-4" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-foreground/85">Bezoekadres</p>
                    <address className="not-italic leading-relaxed text-foreground/80">
                      {address.street}
                      <br />
                      {address.postal} {address.city}
                    </address>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone className="size-4" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-foreground/85">Telefoon</p>
                    <a
                      className="font-medium text-primary underline-offset-4 transition-colors hover:underline"
                      href={`tel:${siteConfig.phoneTel}`}
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{siteConfig.phoneHours}</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail className="size-4" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-foreground/85">E-mail</p>
                    <a
                      className="break-all font-medium text-primary underline-offset-4 transition-colors hover:underline"
                      href={`mailto:${siteConfig.email}`}
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="size-4" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-foreground/85">Openingstijden</p>
                    <p className="leading-relaxed text-foreground/80">{siteConfig.openingHours}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div
              className={cn(
                "rounded-2xl border border-border/45 bg-[color-mix(in_oklab,var(--color-muted)_22%,white)] p-5 shadow-sm ring-1 ring-black/[0.03] dark:bg-muted/35 dark:ring-white/[0.05]",
              )}
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">Menu</p>
                  <ul className="mt-3 flex flex-col gap-2 text-sm">
                    {mainNav.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-primary hover:underline"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">Juridisch</p>
                  <ul className="mt-3 flex flex-col gap-2 text-sm">
                    <li>
                      <Link
                        href="/algemene-voorwaarden"
                        className="font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        Algemene voorwaarden
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/betalingsvoorwaarden"
                        className="font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        Betalingsvoorwaarden
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/disclaimer"
                        className="font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        Disclaimer
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/onze-praktijk/huisregels"
                        className="font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        Huisregels
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "relative z-10 border-t border-border/40",
          "bg-[color-mix(in_oklab,var(--color-muted)_12%,white)] py-5",
          "dark:border-border/50 dark:bg-muted/25",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-4 px-gutter sm:gap-3">
          <div className="flex w-full flex-col items-center gap-3 text-xs leading-relaxed text-muted-foreground sm:flex-row sm:items-start sm:justify-between sm:text-[0.8125rem]">
            <p className="text-center sm:max-w-[42%] sm:text-left">
              © {new Date().getFullYear()} {siteConfig.name}. Alle rechten voorbehouden.
            </p>
            <p className="text-center sm:max-w-[42%] sm:text-right">
              Lijnen 2 en 8 stoppen nabij de praktijk.
            </p>
          </div>
          <p className="text-center text-xs font-normal tracking-[0.1em] text-muted-foreground/55 sm:text-[0.8125rem] sm:tracking-[0.09em]">
            <span className="select-none">Ontwerp en realisatie — </span>
            {designStudio.url ? (
              <a
                href={designStudio.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground/55 underline-offset-2 transition-colors hover:text-primary/80 hover:underline"
              >
                {designCredit}
              </a>
            ) : (
              designCredit
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
