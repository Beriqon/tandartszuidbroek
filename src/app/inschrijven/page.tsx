import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Phone, Shield } from "lucide-react";

import { EnrollmentForm } from "@/components/forms/EnrollmentForm";
import { Reveal } from "@/components/sections/Reveal";
import { Button } from "@/components/ui/button";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { getPageBySlug, getSiteSettings, sanityReady } from "@/lib/sanity/fetch";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const ready = sanityReady();
  const [settings, page] = await Promise.all([
    ready ? getSiteSettings() : Promise.resolve(null),
    ready ? getPageBySlug("inschrijven") : Promise.resolve(null),
  ]);
  return buildPageMetadata({
    pathname: "/inschrijven",
    page,
    settings,
    fallbackTitle: "Inschrijven",
    fallbackDescription: `Nieuwe patiënt bij ${siteConfig.name}? Vul het formulier in; wij nemen contact met u op.`,
  });
}

export default async function InschrijvenPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section
        className="relative isolate overflow-hidden bg-section py-section"
        aria-labelledby="inschrijven-form-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_15%_-20%,color-mix(in_oklab,var(--color-primary)_12%,transparent),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-section-muted/40"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-gutter">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-12 xl:gap-14">
            <div className="min-w-0">
              <Reveal>
                <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
                  Nieuwe patiënt
                </p>
                <h2
                  id="inschrijven-form-heading"
                  className="mt-2 font-serif text-[2rem] font-semibold leading-[1.06] tracking-tight text-foreground sm:text-[2.35rem] sm:leading-[1.04]"
                >
                  Inschrijfformulier
                </h2>
                <p className="mt-3 max-w-prose text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
                  Vul het formulier zo volledig mogelijk in. Na ontvangst nemen wij contact met u op om uw
                  inschrijving te bevestigen. Heeft u spoed? Bel dan direct de praktijk.
                </p>
              </Reveal>

              <Reveal delay={0.06}>
                <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                  <li className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>
                      <strong className="font-medium text-foreground">Persoonsgegevens</strong> — naam,
                      initialen, adres, contact en geboortedatum.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>
                      <strong className="font-medium text-foreground">Verzekering</strong> — e-mail, BSN
                      en polisnummer (voor controle bij uw zorgverzekeraar).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>
                      <strong className="font-medium text-foreground">Vorige tandarts &amp; vragen</strong>{" "}
                      — zodat wij uw dossier goed kunnen overnemen.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                    <span>
                      <strong className="font-medium text-foreground">Gezin</strong> — optioneel
                      mee-inschrijven voor gezinsleden (BSN en naam per persoon).
                    </span>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={0.1}>
                <div
                  className={cn(
                    "mt-8 flex flex-col gap-4 rounded-2xl border border-border/55 bg-card/90 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-6",
                    "dark:bg-card/80 dark:ring-white/5",
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Shield className="size-[1.1rem]" strokeWidth={2} aria-hidden />
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      <span className="font-medium text-foreground">Privacy.</span> Gevoelige gegevens
                      zoals uw BSN gebruiken wij alleen voor inschrijving en declaratie, volgens de AVG.
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="shrink-0 gap-2 rounded-xl border-primary/25"
                  >
                    <Link href="/privacy">
                      Privacyverklaring
                      <ChevronRight className="size-3.5 opacity-70" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={0.04}>
                <div
                  className={cn(
                    "overflow-hidden rounded-3xl border border-border/55 bg-card/95 p-6 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.2)] ring-1 ring-black/[0.04] backdrop-blur-sm",
                    "dark:bg-card/85 dark:ring-white/5",
                  )}
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary/90">
                    Contact
                  </p>
                  <p className="mt-2 font-heading text-lg font-bold text-foreground">Vragen over inschrijven?</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Liever eerst iets vragen? Bel ons of stuur een bericht via het contactformulier.
                  </p>
                  <div className="mt-5 flex flex-col gap-2">
                    <Button asChild className="w-full gap-2 rounded-xl" size="lg">
                      <a href={`tel:${siteConfig.phoneTel}`}>
                        <Phone className="size-4" aria-hidden />
                        {siteConfig.phoneDisplay}
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full rounded-xl" size="lg">
                      <Link href="/contact">Contactformulier</Link>
                    </Button>
                  </div>
                  <p className="mt-5 border-t border-border/50 pt-4 text-xs leading-relaxed text-muted-foreground">
                    Spoedgevallen: zie{" "}
                    <Link href="/spoed" className="font-medium text-primary underline-offset-4 hover:underline">
                      Spoeddienst
                    </Link>
                    .
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>

          <div className="mt-12 w-full border-t border-border/40 pt-10 sm:mt-14 sm:pt-12">
            <EnrollmentForm />
          </div>
        </div>
      </section>
    </main>
  );
}
