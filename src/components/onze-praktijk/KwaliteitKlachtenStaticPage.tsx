import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Building2,
  ChevronRight,
  ClipboardList,
  Info,
  ListChecks,
  Mail,
  MessageCircle,
  Phone,
  Scale,
  Shield,
  Stethoscope,
} from "lucide-react";

import { Reveal } from "@/components/sections/Reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type ContentSection = {
  id: string;
  icon: LucideIcon;
  title: string;
  short: string;
  paragraphs: ReadonlyArray<string>;
};

const contentSections: ReadonlyArray<ContentSection> = [
  {
    id: "kosten-begroting",
    icon: ClipboardList,
    title: "Kostenbegroting en behandelplan",
    short: "Begroting",
    paragraphs: [
      "Voorafgaand aan de behandeling mag u altijd om een kostenbegroting en een behandelplan vragen.",
      "Voor behandelingen waarvan de begrote kosten meer dan € 250,- bedragen, krijgt u automatisch van de behandelaar een begroting en behandelplan. Tijdens de behandeling kan blijken dat de kosten meer dan 15% boven de begroting uit gaan komen; in dat geval zullen wij dit met u bespreken.",
    ],
  },
  {
    id: "vakbekwaamheid",
    icon: BadgeCheck,
    title: "Vakbekwaamheid en wetgeving",
    short: "Normen & wet",
    paragraphs: [
      `${siteConfig.name} voert alle behandelingen uit volgens de standaarden in de beroepsgroep.`,
      "Op het gebied van infectiepreventie, de inrichting van onze praktijk en processen, de opleiding van onze medewerkers en de stralingsrichtlijnen van alle röntgenapparatuur wordt in de praktijk voldaan aan alle wettelijke eisen en richtlijnen.",
    ],
  },
  {
    id: "behandelrisicos",
    icon: Stethoscope,
    title: "Behandelrisico’s",
    short: "Risico’s",
    paragraphs: [
      "Tandheelkunde is een medisch beroep. Het gaat om behandelingen die bij iedere persoon weer anders kunnen uitpakken.",
      "Ondanks de uiterste zorgvuldigheid van onze behandelaars kan de uitkomst van een behandeling nooit met volledige zekerheid worden voorspeld. Voor zover mogelijk zullen wij u vooraf van de risico’s op de hoogte stellen.",
    ],
  },
  {
    id: "oplossing-praktijk",
    icon: MessageCircle,
    title: "Samen tot een oplossing",
    short: "Met uw tandarts",
    paragraphs: [
      "Mocht u onverhoopt van mening zijn dat een (deel van een) behandeling niet volgens de norm is uitgevoerd, dan zullen wij ons uiterste best doen om samen met u tot een oplossing te komen. Wij vertrouwen erop dat u in eerste instantie samen met uw eigen behandelaar tot een oplossing probeert te komen.",
      "Mocht dit niet tot het gewenste resultaat leiden, dan kunt u gebruik maken van de klachtenregeling.",
    ],
  },
  {
    id: "klachtenregeling-ant",
    icon: Scale,
    title: "Klachtenregeling (ANT)",
    short: "ANT-regeling",
    paragraphs: [
      "Als u er met uw tandarts toch niet uitkomt én uw tandarts is lid van de ANT, dan kunt u kosteloos gebruik maken van de ANT-klachtenregeling. De ANT-klachtenfunctionaris kan u hulp bieden bij het oplossen van uw klacht, door u te adviseren en zo nodig te bemiddelen tussen u en uw tandarts. De ANT-klachtenfunctionaris kan besluiten om uw klacht ter beoordeling voor te leggen aan de ANT Klachtenonderzoekscommissie.",
    ],
  },
  {
    id: "bureau-klachtbehandeling",
    icon: Building2,
    title: "Informatie en bereikbaarheid",
    short: "Bureau ANT",
    paragraphs: [
      "Het Bureau klachtbehandeling is bij voorkeur per e-mail bereikbaar op klachtbehandeling@ant-tandartsen.nl. Wilt u een brief sturen, dan kan dat naar het onderstaande adres.",
    ],
  },
];

export function KwaliteitKlachtenStaticPage() {
  return (
    <>
      <section
        className="relative isolate overflow-hidden border-b border-border/60 bg-section"
        aria-labelledby="kwaliteit-intro-heading"
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
                <li>
                  <Link
                    href="/onze-praktijk"
                    className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    Onze praktijk
                  </Link>
                </li>
                <li aria-hidden className="text-muted-foreground/50">
                  /
                </li>
                <li className="font-semibold text-foreground">Kwaliteit &amp; klachten</li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-6 max-w-3xl">
            <Reveal>
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary/90 sm:text-sm">
                Transparantie &amp; vertrouwen
              </p>
              <h1
                id="kwaliteit-intro-heading"
                className="mt-2 font-serif text-[2.35rem] font-semibold leading-[1.04] tracking-tight text-foreground sm:mt-2.5 sm:text-[2.75rem] sm:leading-[1.03] lg:text-[3.05rem] lg:leading-[1.02]"
              >
                Kwaliteit, klachten en geschillen
              </h1>
              <p className="mt-3 text-lg font-medium leading-snug text-foreground/85 sm:mt-3.5 sm:text-xl sm:leading-snug">
                Wij streven ernaar om u de hoogst mogelijke kwaliteit te leveren en bieden een heldere
                garantieregeling.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground sm:mt-4 sm:text-xl sm:leading-relaxed">
                Hieronder leest u wat u van ons kunt verwachten rond begrotingen, vaknormen, risico’s
                bij behandelingen en — mocht het nodig zijn — hoe de officiële klachtenregeling werkt.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="border-b border-border/60 bg-section-muted py-section"
        aria-labelledby="kwaliteit-overview-heading"
      >
        <div className="mx-auto w-full max-w-7xl px-gutter">
          <h2 id="kwaliteit-overview-heading" className="sr-only">
            Kwaliteit en klachtenregeling
          </h2>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] xl:gap-14">
            <aside className="min-w-0 lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <div
                  className={cn(
                    "relative overflow-hidden rounded-3xl border border-border/55 bg-card/95 p-5 shadow-[0_20px_50px_-28px_rgba(15,23,42,0.2)] ring-1 ring-black/[0.04] backdrop-blur-sm sm:p-6",
                    "dark:bg-card/85 dark:ring-white/5",
                  )}
                >
                  <span
                    className="pointer-events-none absolute -right-10 -top-12 size-40 rounded-full bg-primary/[0.07] blur-2xl"
                    aria-hidden
                  />
                  <header className="relative flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/14 to-primary/6 text-primary ring-1 ring-primary/10 dark:from-primary/25 dark:to-primary/10 dark:ring-primary/20">
                      <ListChecks className="size-[1.05rem]" strokeWidth={2} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary/90">
                        Inhoud
                      </p>
                      <p className="font-heading text-base font-bold text-foreground">Op deze pagina</p>
                    </div>
                  </header>

                  <nav
                    aria-label="Inhoudsopgave kwaliteit en klachten"
                    className="relative mt-4 border-t border-border/55 pt-3"
                  >
                    <ol className="space-y-0.5">
                      {contentSections.map((section, i) => (
                        <li key={section.id}>
                          <a
                            href={`#${section.id}`}
                            className={cn(
                              "group flex items-center gap-3 rounded-xl px-2 py-2 text-sm transition-colors sm:text-[0.9375rem]",
                              "hover:bg-primary/[0.06] hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
                            )}
                          >
                            <span
                              className="inline-flex w-5 shrink-0 justify-end font-mono text-[0.7rem] tabular-nums text-muted-foreground/80 group-hover:text-primary/85"
                              aria-hidden
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span className="min-w-0 truncate text-foreground/85 group-hover:text-foreground">
                              {section.short}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ol>
                  </nav>

                  <div
                    role="note"
                    className="relative mt-5 flex items-start gap-3 rounded-2xl border border-primary/25 bg-primary/[0.06] px-4 py-3.5 text-sm leading-relaxed text-foreground/85 sm:text-[0.9375rem]"
                  >
                    <Info
                      className="mt-0.5 size-[1.05rem] shrink-0 text-primary"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <span>
                      De ANT-klachtenregeling geldt als uw tandarts lid is van de ANT. Voor vragen over
                      lidmaatschap kunt u dat bij uw behandelaar navragen.
                    </span>
                  </div>
                </div>
              </Reveal>
            </aside>

            <div className="min-w-0 space-y-6 sm:space-y-7">
              {contentSections.map((section, i) => {
                const Icon = section.icon;
                const isBureau = section.id === "bureau-klachtbehandeling";

                return (
                  <Reveal key={section.id} delay={Math.min(i * 0.025, 0.18)}>
                    <article
                      id={section.id}
                      aria-labelledby={`${section.id}-heading`}
                      className={cn(
                        "group relative scroll-mt-32 overflow-hidden rounded-3xl border border-border/55 bg-card/95 p-6 shadow-[0_22px_56px_-28px_rgba(15,23,42,0.2)] ring-1 ring-black/[0.04] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 ease-out sm:p-8",
                        "hover:border-primary/25 hover:shadow-primary/10",
                        "dark:bg-card/85 dark:ring-white/5",
                      )}
                    >
                      <span
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/80 via-white/30 to-transparent opacity-95 dark:from-white/[0.06] dark:via-transparent dark:to-transparent"
                        aria-hidden
                      />
                      <span
                        className="pointer-events-none absolute -right-12 -top-16 size-44 rounded-full bg-primary/[0.06] blur-2xl transition-opacity duration-300 group-hover:bg-primary/[0.1] dark:bg-primary/10"
                        aria-hidden
                      />

                      <header className="relative flex items-start gap-4">
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner shadow-primary/5 ring-1 ring-primary/10 transition duration-300 group-hover:scale-[1.04] dark:from-primary/25 dark:to-primary/10 dark:ring-primary/20">
                          <Icon className="size-[1.35rem]" strokeWidth={2} aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary/90">
                            Onderdeel {String(i + 1).padStart(2, "0")}
                          </p>
                          <h3
                            id={`${section.id}-heading`}
                            className="mt-1.5 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl"
                          >
                            {section.title}
                          </h3>
                        </div>
                      </header>

                      <div className="relative mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem] sm:leading-relaxed">
                        {section.paragraphs.map((p, pi) => (
                          <p key={pi}>{p}</p>
                        ))}

                        {isBureau ? (
                          <div className="mt-6 space-y-5">
                            <div
                              className={cn(
                                "rounded-2xl border border-border/55 bg-section/80 p-5 ring-1 ring-black/[0.03] dark:bg-section/40 dark:ring-white/5",
                              )}
                            >
                              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary">
                                Adres
                              </p>
                              <address className="mt-2 not-italic text-foreground/90">
                                <span className="block font-medium">Bureau klachtbehandeling ANT</span>
                                <span className="mt-1 block text-muted-foreground">
                                  Margriettoren, 9e etage
                                  <br />
                                  Haaksbergweg 75
                                  <br />
                                  1101 BR Amsterdam
                                </span>
                              </address>
                            </div>

                            <ul className="grid gap-3 sm:grid-cols-2">
                              <li>
                                <a
                                  href="mailto:klachtbehandeling@ant-tandartsen.nl"
                                  className={cn(
                                    "flex items-start gap-3 rounded-2xl border border-border/55 bg-card px-4 py-3.5 transition-colors",
                                    "hover:border-primary/30 hover:bg-primary/[0.04]",
                                  )}
                                >
                                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Mail className="size-[1.1rem]" strokeWidth={2} aria-hidden />
                                  </span>
                                  <span className="min-w-0">
                                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                      E-mail
                                    </span>
                                    <span className="mt-0.5 block break-all font-medium text-foreground underline-offset-2 hover:underline">
                                      klachtbehandeling@ant-tandartsen.nl
                                    </span>
                                  </span>
                                </a>
                              </li>
                              <li>
                                <a
                                  href="tel:+31202374750"
                                  className={cn(
                                    "flex items-start gap-3 rounded-2xl border border-border/55 bg-card px-4 py-3.5 transition-colors",
                                    "hover:border-primary/30 hover:bg-primary/[0.04]",
                                  )}
                                >
                                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <Phone className="size-[1.1rem]" strokeWidth={2} aria-hidden />
                                  </span>
                                  <span className="min-w-0">
                                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                      Telefoon
                                    </span>
                                    <span className="mt-0.5 block font-mono text-base font-semibold tabular-nums text-foreground">
                                      020-2374750
                                    </span>
                                  </span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-b border-border/60 bg-section py-section">
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
                <div
                  className="pointer-events-none absolute -bottom-20 -left-10 size-[14rem] rounded-full bg-primary/[0.06] blur-2xl"
                  aria-hidden
                />

                <div className="relative flex flex-1 flex-col gap-5 sm:flex-row sm:gap-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/14 text-primary shadow-inner ring-1 ring-primary/15 sm:size-14">
                    <Shield className="size-6 sm:size-7" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0 space-y-3">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground/75">
                      Eerst met ons
                    </p>
                    <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl sm:leading-tight">
                      Liever direct met ons overleggen?
                    </h2>
                    <p className="max-w-prose text-base leading-relaxed text-cta-foreground/88 sm:text-[1.0625rem] sm:leading-relaxed">
                      Een open gesprek in de praktijk helpt vaak het snelst. Neem contact op of vraag
                      uw volgende afspraak om het persoonlijk te bespreken.
                    </p>
                  </div>
                </div>

                <div className="relative shrink-0">
                  <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="h-12 w-full gap-2 rounded-xl bg-section px-7 text-base font-semibold text-foreground shadow-md shadow-black/10 ring-1 ring-black/[0.06] hover:bg-section/92 sm:h-[3.25rem] sm:w-auto sm:self-start sm:px-8 sm:text-[1.0625rem]"
                  >
                    <Link href="/contact">
                      Naar contact
                      <ChevronRight className="size-4 opacity-80 sm:size-[1.125rem]" aria-hidden />
                    </Link>
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
                <span
                  className="pointer-events-none absolute -right-10 -top-12 size-40 rounded-full bg-primary/[0.07] blur-2xl transition-opacity duration-300 group-hover:bg-primary/[0.11] dark:bg-primary/10"
                  aria-hidden
                />

                <div className="relative flex flex-1 flex-col gap-5 sm:flex-row sm:gap-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/14 to-primary/6 text-primary shadow-inner shadow-primary/5 ring-1 ring-primary/10 transition duration-300 group-hover:scale-[1.04] sm:size-14">
                    <Phone className="size-6 sm:size-7" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
                      {siteConfig.name}
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl sm:leading-tight">
                      Bel de praktijk
                    </h2>
                    <p className="mt-3 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
                      <a
                        href={`tel:${siteConfig.phoneTel}`}
                        className="font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                      . Zie ook{" "}
                      <Link
                        href="/onze-praktijk/huisregels"
                        className="font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        huisregels
                      </Link>{" "}
                      en{" "}
                      <Link
                        href="/onze-praktijk#openingstijden"
                        className="font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        openingstijden
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
                    <a href={`tel:${siteConfig.phoneTel}`}>
                      <Phone className="size-5" aria-hidden />
                      Direct bellen
                    </a>
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
