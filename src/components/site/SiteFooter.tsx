import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { BrandLogo } from "@/components/site/BrandLogo";
import { OpeningHoursList } from "@/components/site/OpeningHoursList";
import { googleMapsDirectionsUrl } from "@/lib/google-maps";
import { siteConfig, mainNav } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const legalLinks = [
  { label: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
  { label: "Betalingsvoorwaarden", href: "/betalingsvoorwaarden" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Huisregels", href: "/onze-praktijk/huisregels" },
] as const;

const sectionLabelClass =
  "text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary";

const footerLinkClass =
  "font-medium text-foreground/90 underline-offset-4 transition-colors hover:text-primary hover:underline";

const footerPanelClass = cn(
  "rounded-2xl border border-border/45 bg-[color-mix(in_oklab,var(--color-muted)_22%,white)] p-5 shadow-sm ring-1 ring-black/[0.03] dark:bg-muted/35 dark:ring-white/[0.05] sm:p-6",
);

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
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_3%,transparent),transparent_55%)]"
        aria-hidden
      />

      <h2 id="site-footer-heading" className="sr-only">
        Colofon en contact
      </h2>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-gutter py-10 sm:py-11 lg:py-12">
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-3">
            <BrandLogo
              variant="footer"
              linkClassName={cn(
                "inline-flex rounded-xl border border-border/40 bg-white p-3 shadow-sm ring-1 ring-black/[0.04] transition-[border-color,box-shadow] hover:border-primary/25 hover:shadow-md dark:bg-card/80 dark:ring-white/[0.06] sm:p-3.5",
              )}
            />
            <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Praktijk
            </p>
            <p className="mt-1.5 font-serif text-xl font-semibold leading-snug tracking-tight text-foreground sm:text-[1.35rem]">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.tagline} Zorgvuldige mondzorg in een rustige sfeer.
            </p>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-muted-foreground sm:text-[0.8125rem]">
              {siteConfig.krtNote}
            </p>
          </div>

          <div className={cn(footerPanelClass, "min-w-0 lg:col-span-9")}>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 xl:gap-8">
              <div className="min-w-0">
                <p className={sectionLabelClass}>Contact</p>
                <ul className="mt-3 flex flex-col gap-2.5 text-sm">
                  <li className="flex gap-2.5">
                    <MapPin className="mt-0.5 size-3.5 shrink-0 text-primary" strokeWidth={2} aria-hidden />
                    <address className="min-w-0 not-italic leading-snug text-foreground/85">
                      {address.street}
                      <br />
                      {address.postal} {address.city}
                    </address>
                  </li>
                  <li className="flex gap-2.5">
                    <Phone className="mt-0.5 size-3.5 shrink-0 text-primary" strokeWidth={2} aria-hidden />
                    <div className="min-w-0">
                      <a
                        className="font-medium text-primary underline-offset-4 transition-colors hover:underline"
                        href={`tel:${siteConfig.phoneTel}`}
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                      <p className="mt-0.5 text-xs leading-snug text-muted-foreground">{siteConfig.phoneHours}</p>
                    </div>
                  </li>
                  <li className="flex gap-2.5">
                    <Mail className="mt-0.5 size-3.5 shrink-0 text-primary" strokeWidth={2} aria-hidden />
                    <a
                      className="min-w-0 break-all font-medium text-primary underline-offset-4 transition-colors hover:underline"
                      href={`mailto:${siteConfig.email}`}
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <Clock className="size-3.5 text-primary" strokeWidth={2} aria-hidden />
                  <p className={sectionLabelClass}>Openingstijden</p>
                </div>
                <OpeningHoursList rows={siteConfig.openingHours} className="mt-3 text-sm" />
              </div>

              <div className="min-w-0">
                <p className={sectionLabelClass}>Menu</p>
                <ul className="mt-3 flex flex-col gap-1.5 text-sm">
                  {mainNav.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={footerLinkClass}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-w-0">
                <p className={sectionLabelClass}>Juridisch</p>
                <ul className="mt-3 flex flex-col gap-1.5 text-sm">
                  {legalLinks.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className={footerLinkClass}>
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "relative z-10 border-t border-border/40",
          "bg-[color-mix(in_oklab,var(--color-muted)_12%,white)] py-4",
          "dark:border-border/50 dark:bg-muted/25",
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-gutter sm:gap-2.5">
          <div className="flex w-full flex-col items-center gap-2.5 text-xs leading-relaxed text-muted-foreground sm:flex-row sm:items-start sm:justify-between sm:text-[0.8125rem]">
            <p className="text-center sm:max-w-[42%] sm:text-left">
              © {new Date().getFullYear()} {siteConfig.name}. Alle rechten voorbehouden.
            </p>
            <p className="text-center sm:max-w-[42%] sm:text-right">
              <a
                href={googleMapsDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-4 transition-colors hover:underline"
              >
                Plan uw route via Google Maps.
              </a>
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
