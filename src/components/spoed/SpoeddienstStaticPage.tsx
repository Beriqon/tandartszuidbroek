import Link from "next/link";
import {
  AlarmClock,
  ChevronRight,
  Clock,
  ExternalLink,
  Info,
  Phone,
  Siren,
  Stethoscope,
} from "lucide-react";

import { Reveal } from "@/components/sections/Reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const DENTAL365_URL_DEVENTER = "https://dental365.nl/spoed-tandarts/deventer/";

const waarneemNummers = [
  {
    region: "Deventer",
    when: "Buiten kantooruren",
    phoneDisplay: "085 018 9466",
    phoneTel: "+31850189466",
    href: DENTAL365_URL_DEVENTER,
    linkLabel: "Dental365 Deventer",
  },
] as const;

export function SpoeddienstStaticPage() {
  return (
    <>
      <section
        className="border-b border-destructive/25 bg-destructive/[0.07] py-6 dark:bg-destructive/[0.12]"
        aria-labelledby="spoed-112-heading"
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-gutter sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <h2
              id="spoed-112-heading"
              className="font-heading text-lg font-bold tracking-tight text-foreground sm:text-xl"
            >
              Levensgevaar of ernstig letsel?
            </h2>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-foreground/85 sm:text-base">
              Bij direct levensgevaar, ernstige bloeding of acute situaties na een ongeval belt u{" "}
              <strong className="font-semibold text-foreground">112</strong> — niet de
              tandartspraktijk.
            </p>
          </div>
          <Button
            asChild
            variant="destructive"
            size="lg"
            className="h-12 shrink-0 gap-2 rounded-xl px-6 font-semibold shadow-sm sm:h-12 sm:px-7"
          >
            <a href="tel:112">
              <Siren className="size-5" aria-hidden />
              Bel 112
            </a>
          </Button>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden border-b border-border/60 bg-section"
        aria-labelledby="spoed-intro-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_15%_-15%,color-mix(in_oklab,var(--color-primary)_14%,transparent),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-section-muted/55"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-[min(40%,18rem)] top-1/3 size-[min(100vw,46rem)] rounded-full bg-primary/[0.05] blur-3xl"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-gutter pt-12 pb-10 sm:pt-14 sm:pb-12 lg:pt-16 lg:pb-14">
          <Reveal>
            <nav
              aria-label="Kruimelpad"
              className="text-[0.75rem] font-medium text-muted-foreground"
            >
              <ol className="flex flex-wrap items-center gap-1.5">
                <li>
                  <Link
                    href="/"
                    className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden className="text-muted-foreground/50">
                  /
                </li>
                <li className="font-semibold text-foreground">Spoeddienst</li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:items-start lg:gap-12">
            <div className="min-w-0 max-w-3xl">
              <Reveal>
                <p className="inline-flex items-center gap-2 text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
                  <Siren className="size-4" aria-hidden />
                  Spoeddienst
                </p>
                <h1
                  id="spoed-intro-heading"
                  className="mt-2 font-serif text-[2.35rem] font-semibold leading-[1.04] tracking-tight text-foreground sm:mt-2.5 sm:text-[2.75rem] sm:leading-[1.03] lg:text-[3.05rem] lg:leading-[1.02]"
                >
                  Spoeddienst
                </h1>
                <p className="mt-3 text-lg font-medium leading-snug text-foreground/85 sm:mt-3.5 sm:text-xl sm:leading-snug">
                  Heeft u een ernstige pijnklacht en belt u tijdens openingstijden vóór 10.00 uur?
                  Wij doen ons best om u nog dezelfde dag te helpen.
                </p>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground sm:mt-4 sm:text-xl sm:leading-relaxed">
                  Buiten onze reguliere openingstijden kunt u terecht bij Dental365 Spoed Tandartsen
                  Deventer ({waarneemNummers[0].phoneDisplay}). Tijdens kantooruren? Bel de praktijk op{" "}
                  {siteConfig.phoneDisplay}. Voor reparatie van een prothese gelden aparte tijden;
                  die vindt u verderop op deze pagina.
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 gap-2 rounded-xl px-7 text-base font-semibold shadow-sm sm:h-[3.25rem] sm:px-8"
                  >
                    <a href={`tel:${siteConfig.phoneTel}`}>
                      <Phone className="size-5" aria-hidden />
                      Bel {siteConfig.phoneDisplay}
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 gap-2 rounded-xl border-primary/25 px-7 text-base font-semibold shadow-sm sm:h-[3.25rem] sm:px-8"
                  >
                    <Link href="/onze-praktijk#openingstijden">
                      Openingstijden
                      <ChevronRight className="size-4 opacity-80" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08} className="min-w-0">
              <div
                className={cn(
                  "relative overflow-hidden rounded-3xl border border-border/55 bg-card/95 p-6 shadow-[0_22px_56px_-28px_rgba(15,23,42,0.2)] ring-1 ring-black/[0.04] backdrop-blur-sm sm:p-7",
                  "dark:bg-card/85 dark:ring-white/5",
                )}
              >
                <span
                  className="pointer-events-none absolute -right-10 -top-12 size-40 rounded-full bg-primary/[0.07] blur-2xl"
                  aria-hidden
                />
                <div className="relative flex items-start gap-3">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Info className="size-[1.15rem]" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-heading text-base font-bold text-foreground sm:text-lg">
                      Tijdens onze openingstijden
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                      Belt u later op de dag met spoed? We doen ons best u dezelfde dag te helpen,
                      maar dat kunnen we niet altijd garanderen. Bij twijfel: bel ons.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="border-b border-border/60 bg-section-muted py-section"
        aria-labelledby="spoed-buiten-heading"
      >
        <div className="mx-auto w-full max-w-7xl px-gutter">
          <Reveal className="max-w-3xl">
            <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
              Spoedklachten buiten reguliere openingstijden
            </p>
            <h2
              id="spoed-buiten-heading"
              className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              Samenwerking met Dental365 Spoed Tandartsen
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
              Wij werken samen met Dental365 Spoed Tandartsen. Buiten kantooruren belt u met
              Deventer.
            </p>
          </Reveal>

          <div className="mt-10 grid max-w-xl gap-5">
            {waarneemNummers.map((item, i) => (
              <Reveal key={item.region} delay={i * 0.06}>
                <article
                  className={cn(
                    "group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border/55 bg-card/95 p-6 shadow-[0_22px_52px_-28px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.04] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 ease-out sm:p-7",
                    "hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-primary/10",
                    "dark:bg-card/85 dark:ring-white/5",
                  )}
                >
                  <span
                    className="pointer-events-none absolute -right-10 -top-12 size-40 rounded-full bg-primary/[0.07] blur-2xl transition-opacity duration-300 group-hover:bg-primary/[0.11] dark:bg-primary/10"
                    aria-hidden
                  />
                  <header className="relative flex items-start gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner shadow-primary/5 ring-1 ring-primary/10 dark:from-primary/25 dark:to-primary/10 dark:ring-primary/20">
                      <Stethoscope className="size-6" strokeWidth={2} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary/90">
                        Regio {item.region}
                      </p>
                      <h3 className="mt-1.5 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                        {item.when}
                      </h3>
                    </div>
                  </header>

                  <a
                    href={`tel:${item.phoneTel}`}
                    className={cn(
                      "relative flex items-center justify-between gap-3 rounded-2xl border border-primary/25 bg-primary/[0.06] px-4 py-4 transition",
                      "hover:border-primary/40 hover:bg-primary/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-card",
                    )}
                    aria-label={`Bel spoednummer ${item.region}: ${item.phoneDisplay}`}
                  >
                    <span className="min-w-0">
                      <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary/90">
                        Bel
                      </span>
                      <span className="mt-1 block font-heading text-xl font-bold tracking-wide text-foreground sm:text-2xl">
                        {item.phoneDisplay}
                      </span>
                    </span>
                    <AlarmClock className="size-5 shrink-0 text-primary" aria-hidden />
                  </a>

                  <p className="relative text-sm leading-relaxed text-muted-foreground">
                    Meer informatie en openingstijden:{" "}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      {item.linkLabel}
                      <ExternalLink className="size-3.5 shrink-0 opacity-70" aria-hidden />
                    </a>
                    .
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="border-b border-border/60 bg-section py-section"
        aria-labelledby="spoed-prothese-heading"
      >
        <div className="mx-auto w-full max-w-7xl px-gutter">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-12 lg:items-center">
            <Reveal className="min-w-0">
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
                Reparatie prothese
              </p>
              <h2
                id="spoed-prothese-heading"
                className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                Gebroken prothese of andere reparatie?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
                Heeft u een gebroken prothese of een andere reparatie nodig? Lever uw prothese op
                vóór de aangegeven tijd in; wij zorgen dat u hem dezelfde dag weer kunt ophalen.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div
                className={cn(
                  "relative overflow-hidden rounded-3xl border border-border/55 bg-card/95 p-6 shadow-[0_22px_56px_-28px_rgba(15,23,42,0.2)] ring-1 ring-black/[0.04] backdrop-blur-sm sm:p-7",
                  "dark:bg-card/85 dark:ring-white/5",
                )}
              >
                <span
                  className="pointer-events-none absolute -right-8 -bottom-10 size-36 rounded-full bg-primary/[0.06] blur-2xl"
                  aria-hidden
                />
                <ul className="relative space-y-5">
                  <li className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Clock className="size-[1.15rem]" strokeWidth={2} aria-hidden />
                    </span>
                    <div>
                      <p className="font-heading text-base font-bold text-foreground sm:text-lg">
                        Inleveren
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                        Maandag t/m vrijdag vóór 09.30 uur aan de balie.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 border-t border-border/50 pt-5">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <AlarmClock className="size-[1.15rem]" strokeWidth={2} aria-hidden />
                    </span>
                    <div>
                      <p className="font-heading text-base font-bold text-foreground sm:text-lg">
                        Ophalen
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                        Gerepareerd en klaar rond 16.30 uur dezelfde dag.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-b border-border/60 bg-section-muted py-section">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_-15%,color-mix(in_oklab,var(--color-primary)_10%,transparent),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-section/30 via-transparent to-primary/[0.04]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-gutter">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-2 md:items-stretch md:gap-8">
              <div
                className={cn(
                  "relative flex min-h-0 flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-cta px-6 py-9 text-cta-foreground shadow-[0_28px_64px_-28px_color-mix(in_oklab,var(--color-primary)_20%,rgb(15_23_42))] ring-1 ring-primary/15 sm:px-9 sm:py-11",
                  "dark:ring-white/10",
                )}
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-16 size-[18rem] rounded-full bg-white/50 blur-3xl"
                  aria-hidden
                />
                <div className="relative flex flex-1 flex-col gap-5 sm:flex-row sm:gap-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15 text-primary-foreground shadow-inner ring-1 ring-primary-foreground/20 sm:size-14">
                    <Phone className="size-6 sm:size-7" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0 space-y-3">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary/85">
                      {siteConfig.name}
                    </p>
                    <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl sm:leading-tight">
                      Spoed tijdens openingstijden
                    </h2>
                    <p className="max-w-prose text-base leading-relaxed text-cta-foreground/88 sm:text-[1.0625rem] sm:leading-relaxed">
                      Bel ons op{" "}
                      <a
                        href={`tel:${siteConfig.phoneTel}`}
                        className="font-semibold underline decoration-primary-foreground/40 underline-offset-4 hover:decoration-primary-foreground"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                      . Wij helpen u graag verder.
                    </p>
                  </div>
                </div>
                <div className="relative shrink-0">
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="h-12 w-full gap-2 rounded-xl bg-section px-7 text-base font-semibold text-foreground shadow-md shadow-black/10 ring-1 ring-black/[0.06] hover:bg-section/92 sm:h-[3.25rem] sm:w-auto sm:px-8 sm:text-[1.0625rem]"
                  >
                    <a href={`tel:${siteConfig.phoneTel}`}>
                      Direct bellen
                      <ChevronRight className="size-4 opacity-80 sm:size-[1.125rem]" aria-hidden />
                    </a>
                  </Button>
                </div>
              </div>

              <div
                className={cn(
                  "group relative flex min-h-0 flex-col justify-between gap-8 overflow-hidden rounded-3xl border border-border/55 bg-card/95 p-8 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.2)] ring-1 ring-black/[0.04] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 ease-out sm:p-10",
                  "hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_28px_56px_-26px_rgba(15,23,42,0.24)] hover:shadow-primary/[0.07] dark:bg-card/85 dark:ring-white/5 dark:hover:shadow-primary/15",
                )}
              >
                <span
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/85 via-white/30 to-transparent opacity-95 dark:from-white/[0.06] dark:via-transparent dark:to-transparent"
                  aria-hidden
                />
                <div className="relative flex flex-1 flex-col gap-5 sm:flex-row sm:gap-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/14 to-primary/6 text-primary shadow-inner shadow-primary/5 ring-1 ring-primary/10 sm:size-14">
                    <Info className="size-6 sm:size-7" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
                      Meer weten
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl sm:leading-tight">
                      Praktijk &amp; huisregels
                    </h2>
                    <p className="mt-3 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
                      Openingstijden, spoed buiten kantooruren en afspraken staan overzichtelijk op{" "}
                      <Link
                        href="/onze-praktijk"
                        className="font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        Onze praktijk
                      </Link>{" "}
                      en bij{" "}
                      <Link
                        href="/onze-praktijk/huisregels"
                        className="font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        Huisregels
                      </Link>
                      .
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 w-full gap-2 rounded-xl border-primary/25 bg-background/60 px-7 text-base font-semibold shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-background/90 sm:h-[3.25rem] sm:w-auto sm:px-8 sm:text-[1.0625rem]"
                  >
                    <Link href="/contact">
                      Contactformulier
                      <ChevronRight className="size-4 opacity-80" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
