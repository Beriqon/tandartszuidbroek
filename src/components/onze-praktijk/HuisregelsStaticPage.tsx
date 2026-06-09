import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  AlarmClock,
  AlertOctagon,
  BellRing,
  Briefcase,
  CalendarCheck,
  Camera,
  ChevronRight,
  CreditCard,
  HeartPulse,
  Hourglass,
  Info,
  ListChecks,
  Lock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Stethoscope,
  Trash2,
  UserCog,
} from "lucide-react";

import { Reveal } from "@/components/sections/Reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Highlight = {
  kind: "info" | "warning";
  text: string;
};

type HuisregelSection = {
  id: string;
  icon: LucideIcon;
  title: string;
  /** Korte label voor de inhoudsopgave aan de zijkant. */
  short: string;
  /** Inleidende paragrafen. */
  paragraphs?: ReadonlyArray<string>;
  /** Lijst met regels (alternatief op paragrafen). */
  bullets?: ReadonlyArray<string>;
  /** Opvallend kader onderaan een sectie. */
  highlight?: Highlight;
};

const huisregelSections: ReadonlyArray<HuisregelSection> = [
  {
    id: "uw-bezoek",
    icon: CalendarCheck,
    title: "Uw bezoek",
    short: "Uw bezoek",
    bullets: [
      "Wij werken in onze praktijk uitsluitend met behandelingen op afspraak. Afspraken kunnen alleen telefonisch of aan de balie worden gemaakt of geannuleerd.",
      "Het is in uw eigen belang om reguliere controles na te komen — zo kunnen veranderingen en mogelijke problemen in uw mond(hygiëne) tijdig ontdekt worden. Wijkt u af van deze regelmaat, dan kunt u zich bij problemen niet beroepen op het falen in opmerkzaamheid van de tandarts.",
      "Wanneer wij u langer dan 2 jaar niet voor controle zien, sturen wij u een brief met het verzoek contact met ons op te nemen. Vernemen wij daarop niets, dan zullen wij u als patiënt uitschrijven.",
    ],
  },
  {
    id: "privacy",
    icon: Lock,
    title: "Privacy",
    short: "Privacy",
    bullets: [
      "Respecteer de privacy van patiënten en teamleden — ook op social media.",
      "Wilt u een foto-, film- of geluidsopname maken? Vraag dan vooraf toestemming aan degenen die in beeld komen of te horen zijn.",
    ],
  },
  {
    id: "veiligheid",
    icon: ShieldCheck,
    title: "Veiligheid",
    short: "Veiligheid",
    bullets: [
      "Wij gaan respectvol met elkaar om. Uit daarom geen fysiek of verbaal geweld, discriminatie, (seksuele) intimidatie of ander ongewenst gedrag. Bij diefstal, vernieling en agressie doen wij aangifte bij de politie.",
      "Ziet u een onveilige situatie? Meld dit dan bij de receptie.",
    ],
  },
  {
    id: "pijnklachten",
    icon: Stethoscope,
    title: "Pijnklachten & spoedgevallen",
    short: "Pijn & spoed",
    paragraphs: [
      "Belt u in de ochtend vóór 10:00 uur met een pijnklacht of spoedgeval, dan proberen wij u — waar mogelijk — dezelfde dag nog te helpen. Belt u later op de dag, dan doen wij ons best u dezelfde dag te helpen, maar dat kunnen wij helaas niet garanderen.",
    ],
  },
  {
    id: "te-laat",
    icon: AlarmClock,
    title: "Te laat komen voor een afspraak",
    short: "Te laat komen",
    paragraphs: [
      "Bij te laat verschijnen op een afspraak loopt u het risico dat de behandeling niet volgens planning kan worden voltooid, of dat de afspraak wordt geannuleerd wegens het hierdoor ontstane tijdgebrek.",
      "Kunt u een afspraak niet nakomen? Zeg deze dan uiterlijk 48 uur van tevoren telefonisch af. Zegt u een afspraak niet of niet tijdig af, dan zal de voor u gereserveerde tijd in rekening worden gebracht.",
    ],
    highlight: {
      kind: "warning",
      text: "Bij herhaaldelijk niet nakomen of te laat afzeggen van een afspraak, behouden wij ons het recht voor u uit te schrijven als patiënt van onze praktijk.",
    },
  },
  {
    id: "uitlopen",
    icon: Hourglass,
    title: "De behandelaar kan uitlopen",
    short: "Uitlopen",
    paragraphs: [
      "Wanneer een patiënt belt met een pijnklacht, is aan de telefoon niet altijd goed in te schatten wat de juiste oplossing is. Hierdoor gebeurt het wel eens dat een behandeling langer duurt dan voorzien en uitloopt — waardoor een volgende afspraak later kan beginnen. Wij vragen hiervoor uw begrip.",
    ],
  },
  {
    id: "afspraakherinnering",
    icon: BellRing,
    title: "Afspraakherinnering",
    short: "Afspraakherinnering",
    paragraphs: [
      "Wij sturen elke dag een afspraakherinnering per sms naar onze patiënten voor de op de volgende dag geplande afspraak. Dit is een gratis extra service waar geen rechten aan kunnen worden ontleend. Het betreft een no-reply service — antwoorden hierop ontvangen wij dus niet.",
      "Mocht u een keer geen herinnering ontvangen, dan betekent dit niet dat uw afspraak niet doorgaat. U bent zelf verantwoordelijk voor de gemaakte afspraken.",
    ],
  },
  {
    id: "betalingen",
    icon: CreditCard,
    title: "Betalingen en betalingsverzuim",
    short: "Betalingen",
    paragraphs: [
      "De betaling van de behandelingen verloopt via factoringmaatschappij Payt.",
      "U dient uw rekening binnen 14 dagen te voldoen. Bij onvolledige betaling of wanbetaling geven wij de vordering uit handen — dit kan ertoe leiden dat u wordt uitgeschreven als patiënt.",
      "Na het verstrijken van de betalingstermijn behouden wij ons het recht voor uw volgende afspraak of afspraken te annuleren. Na volledige betaling kunt u weer een nieuwe afspraak maken.",
    ],
  },
  {
    id: "wijziging-gegevens",
    icon: UserCog,
    title: "Wijziging van gegevens",
    short: "Gegevens wijzigen",
    paragraphs: [
      "U bent altijd zelf verantwoordelijk dat uw gegevens bij wijziging aan ons worden doorgegeven — denk aan een verandering van zorgverzekeraar, adres of telefoonnummer. Ook verzoeken wij u veranderingen in uw gezondheid en medicatie aan ons door te geven.",
      "Deze wijzigingen kunt u per brief, e-mail of bij ons aan de praktijk doorgeven.",
    ],
  },
  {
    id: "wlz",
    icon: HeartPulse,
    title: "Wlz-indicatie",
    short: "Wlz-indicatie",
    paragraphs: [
      "Onze praktijk verleent reguliere tandheelkundige zorg aan zelfstandig wonende patiënten. Wij nemen geen cliënten met een Wlz-indicatie aan, zoals bewoners van zorginstellingen.",
    ],
    highlight: {
      kind: "info",
      text: "Uitzondering: patiënten met een Wlz-indicatie die zelf naar de praktijk komen én alle facturen direct zelf betalen, kunnen wel worden geholpen.",
    },
  },
  {
    id: "eigendommen",
    icon: Briefcase,
    title: "Eigendommen",
    short: "Eigendommen",
    paragraphs: [
      "U dient zelf over uw eigendommen te waken. Wij zijn niet aansprakelijk voor schade, diefstal of verlies van uw eigendommen — laat ze daarom niet onbeheerd achter.",
    ],
  },
  {
    id: "consumptie",
    icon: Trash2,
    title: "Consumptie en afval",
    short: "Consumptie & afval",
    bullets: [
      "Roken mag — maar alleen buiten de praktijk.",
      "Het gebruik van alcohol en drugs in de praktijk is niet toegestaan.",
      "Help ons de praktijk schoon te houden en gooi uw afval in de afvalbak.",
    ],
  },
  {
    id: "agressie",
    icon: Camera,
    title: "Diefstal, vernieling en agressie",
    short: "Camera & agressie",
    paragraphs: [
      "In onze praktijk zijn beveiligingscamera’s aanwezig in de openbare ruimtes — voor de veiligheid van zowel u als onze medewerkers.",
      "Bij diefstal, vernieling, en verbale of non-verbale agressie behouden wij ons het recht voor u uit te schrijven als patiënt. Bij diefstal, vernieling en ander ernstig ongewenst gedrag doen wij te allen tijde aangifte bij de politie.",
    ],
  },
  {
    id: "suggesties",
    icon: MessageCircle,
    title: "Suggesties en opmerkingen",
    short: "Suggesties",
    paragraphs: [
      "Heeft u een suggestie, opmerking, compliment of klacht? Dan horen wij dat graag. U kunt het altijd aan ons doorgeven — in de praktijk zelf, of via het contactformulier. Wij staan u graag te woord.",
    ],
  },
];

function HighlightCallout({ highlight }: { highlight: Highlight }) {
  const isWarning = highlight.kind === "warning";
  const Icon = isWarning ? AlertOctagon : Info;
  return (
    <div
      role="note"
      className={cn(
        "mt-5 flex items-start gap-3 rounded-2xl border px-4 py-3.5 text-sm leading-relaxed sm:text-[0.9375rem]",
        isWarning
          ? "border-destructive/35 bg-destructive/[0.06] text-destructive-foreground/90 dark:bg-destructive/[0.12]"
          : "border-primary/25 bg-primary/[0.06] text-foreground/85",
      )}
    >
      <Icon
        className={cn(
          "mt-0.5 size-[1.05rem] shrink-0",
          isWarning ? "text-destructive" : "text-primary",
        )}
        aria-hidden
      />
      <span className={cn(isWarning ? "text-foreground/85" : undefined)}>
        {highlight.text}
      </span>
    </div>
  );
}

export function HuisregelsStaticPage() {
  return (
    <>
      <section
        className="relative isolate overflow-hidden border-b border-border/60 bg-section"
        aria-labelledby="huisregels-intro-heading"
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
                <li className="font-semibold text-foreground">Huisregels</li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-6 max-w-3xl">
            <Reveal>
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary/90 sm:text-sm">
                Welkom bij {siteConfig.name}
              </p>
              <h1
                id="huisregels-intro-heading"
                className="mt-2 font-serif text-[2.35rem] font-semibold leading-[1.04] tracking-tight text-foreground sm:mt-2.5 sm:text-[2.75rem] sm:leading-[1.03] lg:text-[3.05rem] lg:leading-[1.02]"
              >
                Onze huisregels
              </h1>
              <p className="mt-3 text-lg font-medium leading-snug text-foreground/85 sm:mt-3.5 sm:text-xl sm:leading-snug">
                Samen zorgen we voor een plezierige, open en veilige praktijkomgeving.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground sm:mt-4 sm:text-xl sm:leading-relaxed">
                Wij vinden het zeer belangrijk om de beste kwaliteit van mondzorg aan u te geven en hebben veel aandacht voor de veiligheid en privacy van onze patiënten. Daarom hanteren we binnen onze praktijk de huisregels hieronder. De meeste spreken voor zich — kom er op een rustig moment doorheen, of gebruik de inhoudsopgave om snel naar een onderwerp te springen.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="border-b border-border/60 bg-section-muted py-section"
        aria-labelledby="huisregels-overview-heading"
      >
        <div className="mx-auto w-full max-w-7xl px-gutter">
          <h2 id="huisregels-overview-heading" className="sr-only">
            Overzicht huisregels
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
                      <p className="font-heading text-base font-bold text-foreground">
                        Snel naar
                      </p>
                    </div>
                  </header>

                  <nav
                    aria-label="Inhoudsopgave huisregels"
                    className="relative mt-4 border-t border-border/55 pt-3"
                  >
                    <ol className="space-y-0.5">
                      {huisregelSections.map((section, i) => (
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
                </div>
              </Reveal>
            </aside>

            <div className="min-w-0 space-y-6 sm:space-y-7">
              {huisregelSections.map((section, i) => {
                const Icon = section.icon;
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
                            Regel {String(i + 1).padStart(2, "0")}
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
                        {section.paragraphs?.map((p, pi) => (
                          <p key={pi}>{p}</p>
                        ))}
                        {section.bullets ? (
                          <ul className="space-y-3 sm:space-y-3.5">
                            {section.bullets.map((b, bi) => (
                              <li key={bi} className="flex items-start gap-3.5">
                                <span
                                  className="mt-2.5 size-2 shrink-0 rounded-full bg-primary sm:mt-3"
                                  aria-hidden
                                />
                                <span className="text-foreground/85">{b}</span>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                        {section.highlight ? (
                          <HighlightCallout highlight={section.highlight} />
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
                    <MessageCircle className="size-6 sm:size-7" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0 space-y-3">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary/85">
                      Suggesties of opmerkingen
                    </p>
                    <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl sm:leading-tight">
                      Iets dat beter kan? Laat het ons weten.
                    </h2>
                    <p className="max-w-prose text-base leading-relaxed text-cta-foreground/88 sm:text-[1.0625rem] sm:leading-relaxed">
                      Een suggestie, opmerking, compliment of klacht — wij horen het graag. U kunt het in de praktijk doorgeven of via het contactformulier.
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
                      Vraag stellen
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl sm:leading-tight">
                      Liever even bellen?
                    </h2>
                    <p className="mt-3 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
                      We zijn telefonisch bereikbaar op{" "}
                      <a
                        href={`tel:${siteConfig.phoneTel}`}
                        className="font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                      . Bekijk{" "}
                      <Link
                        href="/onze-praktijk#openingstijden"
                        className="font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        onze openingstijden
                      </Link>{" "}
                      voor het beste belmoment.
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
