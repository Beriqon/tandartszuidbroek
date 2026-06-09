import Image from "next/image";
import Link from "next/link";
import {
  AlarmClock,
  Baby,
  CalendarClock,
  ChevronRight,
  ClipboardList,
  Clock,
  HeartHandshake,
  Info,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  ShieldCheck,
  Siren,
  Sparkles,
  Stethoscope,
  UserPlus,
} from "lucide-react";

import { Reveal } from "@/components/sections/Reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const PRACTICE_EXTERIOR_IMAGE = "/homepagina/buitenkantsanadens.png";

const visiePijlers = [
  {
    icon: ShieldCheck,
    title: "Preventie eerst",
    body:
      "Voorlichting en goede gebitsverzorging staan centraal — zo voorkomen we problemen voordat ze ontstaan.",
  },
  {
    icon: Baby,
    title: "Kinderen & jongeren",
    body:
      "Extra zorg en begeleiding voor de jongste patiënten, zodat angst voor de tandarts geen kans krijgt.",
  },
  {
    icon: Sparkles,
    title: "Modernste technieken",
    body:
      "Vakmanschap gecombineerd met up-to-date apparatuur — voor zorg die comfortabel én betrouwbaar voelt.",
  },
  {
    icon: HeartHandshake,
    title: "Persoonlijke aandacht",
    body:
      "We luisteren, leggen rustig uit en kiezen sámen met u de beste behandeloptie voor uw situatie.",
  },
] as const;

const patientWaarden = [
  "Duidelijke informatie — u weet vooraf wat we gaan doen en waarom.",
  "Tijd om uw verhaal te doen en vragen te stellen, zonder gehaast gevoel.",
  "Een veilige, prettige omgeving voor kinderen — een bezoek mag leuk zijn.",
  "Samen beslissen: de behandeling die het beste past bij úw situatie.",
] as const;

const praktijkUren = [
  { label: "Maandag", value: "07:30 – 17:00 · 18:00 – 21:00" },
  { label: "Dinsdag", value: "07:30 – 17:00 · 18:00 – 21:00" },
  { label: "Woensdag", value: "07:30 – 17:00 · 18:00 – 21:00" },
  { label: "Donderdag", value: "07:30 – 17:00" },
  { label: "Vrijdag", value: "07:30 – 16:10" },
] as const;

const spoedNummers = [
  {
    region: "Deventer",
    when: "Buiten kantooruren",
    phoneDisplay: "085 018 9466",
    phoneTel: "+31850189466",
  },
] as const;

export function OnzePraktijkStaticPage() {
  return (
    <>
      <section
        className="relative isolate overflow-hidden border-b border-border/60 bg-section"
        aria-labelledby="praktijk-intro-heading"
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

        <div className="relative z-10 mx-auto w-full max-w-7xl px-gutter pt-12 pb-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16">
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
                <li className="font-semibold text-foreground">Onze praktijk</li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,26rem)] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,28rem)] xl:gap-12">
            <Reveal className="min-w-0">
              <div className="max-w-2xl lg:max-w-[42rem]">
                <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary/90 sm:text-sm">
                  Over {siteConfig.name}
                </p>
                <h1
                  id="praktijk-intro-heading"
                  className="mt-2 font-serif text-[2.35rem] font-semibold leading-[1.04] tracking-tight text-foreground sm:mt-2.5 sm:text-[2.75rem] sm:leading-[1.03] lg:text-[3.1rem] lg:leading-[1.02]"
                >
                  Mondzorg met aandacht, rust en vakmanschap
                </h1>
                <p className="mt-3 text-lg font-medium leading-snug text-foreground/85 sm:mt-3.5 sm:text-xl sm:leading-snug">
                  Een fijne plek voor het hele gezin — van een eerste poetstip tot een complexe behandeling, en alles wat daar tussen zit.
                </p>
                <p className="mt-3 text-lg leading-relaxed text-muted-foreground sm:mt-4 sm:text-xl sm:leading-relaxed">
                  In onze praktijk in Apeldoorn-Zuidbroek staan preventie, persoonlijke aandacht en duidelijke uitleg centraal. Wij geloven dat mondzorg vooral draait om vertrouwen: dat u weet waarom we iets doen, wat de alternatieven zijn, en hoe u zelf bijdraagt aan een gezond gebit.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7 sm:gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="h-[3.25rem] gap-2.5 rounded-xl px-7 text-base font-semibold shadow-sm sm:h-14 sm:px-8 sm:text-lg"
                  >
                    <Link href="/inschrijven">
                      <UserPlus className="size-5" aria-hidden />
                      Inschrijven
                      <ChevronRight className="size-[1.05rem] opacity-80" aria-hidden />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-[3.25rem] gap-2.5 rounded-xl border-primary/25 px-7 text-base font-semibold shadow-sm sm:h-14 sm:px-8 sm:text-lg"
                  >
                    <a href={`tel:${siteConfig.phoneTel}`}>
                      <Phone className="size-5" aria-hidden />
                      {siteConfig.phoneDisplay}
                    </a>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="min-w-0">
              <div
                className={cn(
                  "relative overflow-hidden rounded-3xl border border-border/55 bg-card shadow-[0_24px_60px_-28px_rgba(15,23,42,0.24)] ring-1 ring-black/[0.04]",
                  "dark:ring-white/5",
                )}
              >
                <div className="relative aspect-[16/10] w-full sm:aspect-[5/3] lg:aspect-[4/3]">
                  <Image
                    src={PRACTICE_EXTERIOR_IMAGE}
                    alt={`Buitenkant van ${siteConfig.name} aan de ${siteConfig.address.street} in Apeldoorn`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 26rem, 28rem"
                    className="object-cover object-[center_38%]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent sm:from-black/40"
                    aria-hidden
                  />
                  <p className="absolute bottom-3 left-4 right-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/95 drop-shadow-[0_1px_2px_rgb(0_0_0/0.5)] sm:bottom-4 sm:left-5 sm:text-[0.7rem]">
                    Onze praktijk · Apeldoorn-Zuidbroek
                  </p>
                </div>
                <div className="relative border-t border-border/55 bg-card/98 p-5 backdrop-blur-[2px] sm:p-6">
                  <span
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/90 via-white/40 to-transparent opacity-90 dark:from-white/[0.06] dark:via-transparent dark:to-transparent"
                    aria-hidden
                  />
                  <div className="relative space-y-4">
                    <div>
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary/90">
                        Adres
                      </p>
                      <p className="mt-2 font-serif text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
                        {siteConfig.name}
                      </p>
                      <span className="mt-2 flex gap-2.5 text-muted-foreground">
                        <MapPin className="mt-0.5 size-[1.125rem] shrink-0 text-primary" aria-hidden />
                        <span className="text-sm leading-relaxed sm:text-[0.9375rem]">
                          {siteConfig.address.street}
                          <br />
                          {siteConfig.address.postal} {siteConfig.address.city}
                        </span>
                      </span>
                    </div>
                    <div className="border-t border-border/60 pt-4">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary/90">
                        Direct contact
                      </p>
                      <a
                        href={`tel:${siteConfig.phoneTel}`}
                        className="mt-2 flex items-center gap-2.5 font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        <Phone className="size-4 text-primary" aria-hidden />
                        {siteConfig.phoneDisplay}
                      </a>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        Bel ons gerust voor vragen of een afspraak — we helpen u graag verder.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden border-b border-border/60 bg-section-muted py-section"
        aria-labelledby="praktijk-visie-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_85%_-10%,color-mix(in_oklab,var(--color-primary)_10%,transparent),transparent_55%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-gutter">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start lg:gap-14">
            <Reveal className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-[0.8125rem]">
                Onze visie
              </p>
              <h2
                id="praktijk-visie-heading"
                className="mt-3 font-serif text-[2.1rem] font-semibold leading-[1.06] tracking-tight text-foreground sm:text-[2.5rem] sm:leading-[1.04] lg:text-[2.8rem] lg:leading-[1.03]"
              >
                Voorkomen is beter dan genezen
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:mt-5 sm:text-xl sm:leading-relaxed">
                Bij ons staat preventie centraal. We besteden veel aandacht aan voorlichting en gebitsverzorging om tandheelkundige problemen te voorkomen — voor jong en oud.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
                Kinderen en jongeren krijgen extra zorg en begeleiding, zodat toekomstige gebitsproblemen en angst voor de tandarts geminimaliseerd worden. Voor hen creëren we een veilige en prettige omgeving — een bezoek aan de tandarts mag een positieve ervaring zijn.
              </p>
              <figure className="mt-7 rounded-2xl border border-border/55 bg-card/85 p-5 shadow-sm ring-1 ring-black/[0.03] sm:mt-8 sm:p-6 dark:bg-card/75 dark:ring-white/5">
                <blockquote className="font-serif text-lg italic leading-snug text-foreground sm:text-xl sm:leading-snug">
                  “We doen er alles aan om uw bezoek zo prettig mogelijk te maken — met geduld, persoonlijke aandacht en de modernste technieken.”
                </blockquote>
                <figcaption className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Team {siteConfig.name}
                </figcaption>
              </figure>
            </Reveal>

            <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {visiePijlers.map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={item.title}>
                    <Reveal delay={i * 0.06} className="h-full">
                      <div
                        className={cn(
                          "group relative flex h-full min-h-[11rem] flex-col overflow-hidden rounded-2xl border border-border/55 bg-card/90 p-5 shadow-sm shadow-black/[0.04] ring-1 ring-black/[0.02] backdrop-blur-md transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out sm:min-h-[12rem] sm:p-6",
                          "hover:-translate-y-1 hover:border-primary/25 hover:bg-card hover:shadow-lg hover:shadow-primary/10 hover:ring-primary/10",
                          "dark:ring-white/5 dark:hover:shadow-primary/20",
                        )}
                      >
                        <span
                          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/75 via-white/25 to-transparent opacity-95 dark:from-white/[0.07] dark:via-transparent dark:to-transparent"
                          aria-hidden
                        />
                        <span
                          className="pointer-events-none absolute -right-8 -top-10 size-36 rounded-full bg-primary/[0.06] blur-2xl transition-opacity duration-300 group-hover:bg-primary/[0.1] dark:bg-primary/10 dark:group-hover:bg-primary/15"
                          aria-hidden
                        />
                        <span className="relative flex flex-1 flex-col">
                          <span className="inline-flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/14 to-primary/6 text-primary shadow-inner shadow-primary/5 ring-1 ring-primary/10 transition duration-300 group-hover:scale-[1.04] group-hover:from-primary/20 group-hover:to-primary/10 group-hover:shadow-md sm:size-12 dark:from-primary/25 dark:to-primary/10 dark:ring-primary/20">
                            <Icon className="size-[1.125rem] sm:size-6" strokeWidth={2} aria-hidden />
                          </span>
                          <h3 className="mt-3.5 font-serif text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary sm:mt-4 sm:text-xl">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-200 group-hover:text-foreground/75 sm:mt-2.5 sm:text-base sm:leading-relaxed">
                            {item.body}
                          </p>
                        </span>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="border-b border-border/60 bg-section py-section"
        aria-labelledby="praktijk-patient-heading"
      >
        <div className="mx-auto w-full max-w-6xl px-gutter">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
            <Reveal className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-[0.8125rem]">
                Onze aanpak
              </p>
              <h2
                id="praktijk-patient-heading"
                className="mt-3 font-heading text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl sm:leading-[1.06] lg:text-[2.6rem] lg:leading-[1.04]"
              >
                Patiëntvriendelijkheid en persoonlijke aandacht
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:mt-5 sm:text-xl sm:leading-relaxed">
                Wij hechten veel waarde aan patiëntvriendelijkheid, goede service en duidelijke informatievoorziening. Ons team neemt de tijd om naar u te luisteren en samen met u de beste behandeloptie te kiezen.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
                U wordt volledig geïnformeerd en mag altijd vragen stellen — samen zoeken we naar de optimale oplossing voor uw persoonlijke situatie.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="min-w-0">
              <ul className="space-y-3 sm:space-y-4">
                {patientWaarden.map((value) => (
                  <li
                    key={value}
                    className={cn(
                      "flex items-start gap-4 rounded-2xl border border-border/55 bg-card/90 p-4 shadow-sm ring-1 ring-black/[0.03] transition-colors hover:border-primary/25 sm:p-5",
                      "dark:bg-card/80 dark:ring-white/5",
                    )}
                  >
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MessageCircle className="size-[1.05rem]" strokeWidth={2} aria-hidden />
                    </span>
                    <p className="text-base leading-relaxed text-foreground/90 sm:text-[1.0625rem] sm:leading-relaxed">
                      {value}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="openingstijden"
        className="relative isolate overflow-hidden border-b border-border/60 bg-section-muted py-section"
        aria-labelledby="praktijk-uren-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,color-mix(in_oklab,var(--color-primary)_11%,transparent),transparent_58%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-gutter">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-[0.8125rem]">
              Wanneer u terechtkunt
            </p>
            <h2
              id="praktijk-uren-heading"
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Openingstijden & bereikbaarheid
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
              Onze openingstijden variëren per weekdag — maandag t/m woensdag is de praktijk ook &apos;s avonds open. Telefonisch bent u tijdens kantooruren welkom.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
            <Reveal delay={0.06} className="min-w-0">
              <article
                className={cn(
                  "relative h-full overflow-hidden rounded-3xl border border-border/55 bg-card/95 p-6 shadow-[0_22px_56px_-28px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.04] backdrop-blur-sm sm:p-8",
                  "dark:bg-card/85 dark:ring-white/5",
                )}
                aria-labelledby="praktijk-uren-praktijk"
              >
                <span
                  className="pointer-events-none absolute -right-12 -top-16 size-44 rounded-full bg-primary/[0.07] blur-2xl"
                  aria-hidden
                />
                <header className="relative flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner shadow-primary/5 ring-1 ring-primary/10 dark:from-primary/25 dark:to-primary/10 dark:ring-primary/20">
                    <Clock className="size-6" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary/90">
                      Praktijk
                    </p>
                    <h3
                      id="praktijk-uren-praktijk"
                      className="mt-1.5 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl"
                    >
                      Openingstijden
                    </h3>
                  </div>
                </header>

                <dl className="relative mt-6 divide-y divide-border/60">
                  {praktijkUren.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-4 py-3 first:pt-0 last:pb-0"
                    >
                      <dt className="text-base font-medium text-foreground sm:text-[1.0625rem]">
                        {row.label}
                      </dt>
                      <dd className="font-mono text-sm tabular-nums text-foreground/85 sm:text-[0.9375rem]">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p className="relative mt-6 flex items-start gap-3 rounded-2xl border border-border/55 bg-muted/30 px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                  <CalendarClock className="mt-0.5 size-[1.05rem] shrink-0 text-primary" aria-hidden />
                  <span>
                    In het weekend zijn we gesloten. Voor spoed buiten openingstijden ziet u de nummers hieronder.
                  </span>
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.1} className="min-w-0">
              <article
                className={cn(
                  "relative h-full overflow-hidden rounded-3xl border border-border/55 bg-card/95 p-6 shadow-[0_22px_56px_-28px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.04] backdrop-blur-sm sm:p-8",
                  "dark:bg-card/85 dark:ring-white/5",
                )}
                aria-labelledby="praktijk-uren-telefoon"
              >
                <span
                  className="pointer-events-none absolute -right-12 -top-16 size-44 rounded-full bg-primary/[0.07] blur-2xl"
                  aria-hidden
                />
                <header className="relative flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary shadow-inner shadow-primary/5 ring-1 ring-primary/10 dark:from-primary/25 dark:to-primary/10 dark:ring-primary/20">
                    <PhoneCall className="size-6" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary/90">
                      Telefonisch
                    </p>
                    <h3
                      id="praktijk-uren-telefoon"
                      className="mt-1.5 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl"
                    >
                      Bereikbaarheid
                    </h3>
                  </div>
                </header>

                <p className="relative mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed">
                  {siteConfig.phoneHours}
                </p>

                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className={cn(
                    "relative mt-6 flex items-center justify-between gap-3 rounded-2xl border border-primary/25 bg-primary/[0.06] px-4 py-4 transition",
                    "hover:border-primary/40 hover:bg-primary/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-card",
                  )}
                >
                  <span className="min-w-0">
                    <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-primary/90">
                      Bel ons direct
                    </span>
                    <span className="mt-1 block font-heading text-lg font-bold tracking-wide text-foreground sm:text-xl">
                      {siteConfig.phoneDisplay}
                    </span>
                  </span>
                  <Phone className="size-5 shrink-0 text-primary" aria-hidden />
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="spoed"
        className="relative isolate overflow-hidden border-b border-border/60 bg-section py-section"
        aria-labelledby="praktijk-spoed-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_-15%,color-mix(in_oklab,var(--color-primary)_10%,transparent),transparent_55%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-gutter">
          <Reveal className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary sm:text-[0.8125rem]">
              <Siren className="size-4" aria-hidden />
              Spoedgevallen
            </p>
            <h2
              id="praktijk-spoed-heading"
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Tandheelkundige spoed buiten openingstijden
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
              Voor dringende tandheelkundige spoedgevallen buiten onze reguliere openingstijden kunt u bellen met Dental365 Spoed Tandartsen Deventer.
            </p>
          </Reveal>

          <div className="mt-10 grid max-w-xl gap-5">
            {spoedNummers.map((item, i) => (
              <Reveal key={item.region} delay={i * 0.08}>
                <article
                  className={cn(
                    "group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-border/55 bg-card/95 p-6 shadow-[0_22px_52px_-28px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.04] backdrop-blur-sm transition-[transform,box-shadow,border-color] duration-300 ease-out sm:p-7",
                    "hover:-translate-y-1 hover:border-primary/30 hover:shadow-primary/10",
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
                        Spoednummer
                      </span>
                      <span className="mt-1 block font-heading text-xl font-bold tracking-wide text-foreground sm:text-2xl">
                        {item.phoneDisplay}
                      </span>
                    </span>
                    <AlarmClock className="size-5 shrink-0 text-primary" aria-hidden />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.18}>
            <p className="mt-8 flex items-start gap-3 rounded-2xl border border-border/55 bg-section-muted/70 px-4 py-3 text-sm leading-relaxed text-muted-foreground sm:mt-10 sm:text-[0.9375rem]">
              <Info className="mt-0.5 size-[1.05rem] shrink-0 text-primary" aria-hidden />
              <span>
                Belt u tijdens onze reguliere openingstijden? Neem dan eerst contact op via{" "}
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                >
                  {siteConfig.phoneDisplay}
                </a>
                . We helpen u dan zo snel mogelijk verder.
              </span>
            </p>
          </Reveal>
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
                <div
                  className="pointer-events-none absolute -bottom-20 -left-10 size-[14rem] rounded-full bg-primary/[0.06] blur-2xl"
                  aria-hidden
                />

                <div className="relative flex flex-1 flex-col gap-5 sm:flex-row sm:gap-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/14 text-primary shadow-inner ring-1 ring-primary/15 sm:size-14">
                    <UserPlus className="size-6 sm:size-7" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0 space-y-3">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary/85">
                      Nieuwe patiënten welkom
                    </p>
                    <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl sm:leading-tight">
                      Wilt u zich bij ons inschrijven?
                    </h2>
                    <p className="max-w-prose text-base leading-relaxed text-cta-foreground/88 sm:text-[1.0625rem] sm:leading-relaxed">
                      Dat kan eenvoudig via deze website, of bel ons op{" "}
                      <a
                        href={`tel:${siteConfig.phoneTel}`}
                        className="font-semibold underline underline-offset-4 hover:no-underline"
                      >
                        {siteConfig.phoneDisplay}
                      </a>
                      . We verwelkomen u graag in onze praktijk.
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
                    <Link href="/inschrijven">
                      Naar het inschrijfformulier
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
                    <ClipboardList className="size-6 sm:size-7" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
                      Bekijk ook
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl sm:leading-tight">
                      Leer onze praktijk verder kennen
                    </h2>
                    <p className="mt-3 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
                      Maak kennis met ons team, ontdek onze behandelingen of bekijk de huisregels — alles wat u nodig heeft, overzichtelijk op één plek.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 gap-2 rounded-xl border-primary/25 bg-background/60 px-6 text-base font-semibold shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-background/90 sm:h-[3.25rem] sm:px-7 sm:text-[1.0625rem]"
                  >
                    <Link href="/onze-praktijk/team">Ons team</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 gap-2 rounded-xl border-primary/25 bg-background/60 px-6 text-base font-semibold shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-background/90 sm:h-[3.25rem] sm:px-7 sm:text-[1.0625rem]"
                  >
                    <Link href="/behandelingen">Behandelingen</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 gap-2 rounded-xl border-primary/25 bg-background/60 px-6 text-base font-semibold shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-background/90 sm:h-[3.25rem] sm:px-7 sm:text-[1.0625rem]"
                  >
                    <Link href="/contact">Contact</Link>
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
