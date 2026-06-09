import Image from "next/image";
import Link from "next/link";
import {
  Baby,
  Bus,
  ChevronRight,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Shield,
  Sparkles,
  Star,
  UserPlus,
} from "lucide-react";

import { HomePageHero } from "@/components/home/HomePageHero";
import {
  HomeAangepasteOpeningstijdenInline,
  HomeVacaturesSidebarCard,
} from "@/components/home/HomeVisitActueelInfo";
import { HomeVisitMapSticky } from "@/components/home/HomeVisitMapSticky";
import { TeamSpotlightCarousel } from "@/components/home/TeamSpotlightCarousel";
import { TreatmentsSpotlightCarousel } from "@/components/home/TreatmentsSpotlightCarousel";
import { Reveal } from "@/components/sections/Reveal";
import { Button } from "@/components/ui/button";
import { demoTreatmentSummaries } from "@/content/demo-treatments";
import { homeTeamMembers } from "@/content/home-team";
import { homePrimaryCta, trustPillars } from "@/content/home-static-data";
import { googleMapsDirectionsUrl, googleMapsEmbedIframeSrc } from "@/lib/google-maps";
import { OpeningHoursList } from "@/components/site/OpeningHoursList";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const trustIcons = [Shield, Sparkles, Baby, MessageCircle] as const;

const PRACTICE_EXTERIOR_IMAGE = "/homepagina/buitenkantsanadens.png";

export function HomeStaticPage() {
  return (
    <>
      <HomePageHero />

      <section
        className="relative isolate overflow-hidden border-b border-border/60 bg-section"
        aria-labelledby="home-about-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_15%_-10%,color-mix(in_oklab,var(--color-primary)_4%,transparent),transparent_55%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-gutter py-10 sm:py-12 lg:py-14">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,26rem)] lg:items-center lg:gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(0,28rem)] xl:gap-12">
            <Reveal className="min-w-0">
              <div className="mx-auto max-w-2xl text-left lg:max-w-[42rem]">
                <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary/90 sm:text-sm">
                  Praktijk in Apeldoorn
                </p>
                <h2
                  id="home-about-heading"
                  className="mt-1.5 font-serif text-[2.35rem] font-semibold leading-[1.04] tracking-tight text-foreground sm:mt-2 sm:text-[2.75rem] sm:leading-[1.03] lg:text-[3.05rem] lg:leading-[1.02]"
                >
                  Mondzorg die past bij uw dagelijks leven
                </h2>
                <p className="mt-2 text-lg font-medium leading-snug text-foreground/85 sm:mt-2.5 sm:text-xl sm:leading-snug">
                  We combineren vakmanschap met persoonlijke aandacht: wat heeft u nodig, wat is verstandig, en wat kunt u zelf doen?
                </p>
                <p className="mt-2.5 text-lg leading-snug text-muted-foreground sm:mt-3 sm:text-xl sm:leading-snug">
                  Sanadens is geregistreerd in het Kwaliteitsregister Tandartsen (KRT). Ons team van ervaren professionals biedt kwalitatieve mondzorg met specialisaties — van preventie tot complexe behandelingen.
                </p>
                <div className="mt-4 flex justify-start sm:mt-5">
                  <Button
                    asChild
                    size="lg"
                    className="h-[3.25rem] gap-2.5 rounded-xl px-8 text-lg font-semibold shadow-sm sm:h-14 sm:px-9 sm:text-xl"
                  >
                    <Link href="/onze-praktijk">
                      Meer over de praktijk
                      <ChevronRight className="size-5 opacity-80 sm:size-[1.35rem]" aria-hidden />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.06} className="min-w-0">
              <div
                className={cn(
                  "relative overflow-hidden rounded-3xl border border-border/55 bg-card shadow-[0_20px_50px_-24px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.04]",
                  "dark:ring-white/5",
                )}
              >
                <div className="relative aspect-[16/10] w-full sm:aspect-[5/3] lg:aspect-[4/3]">
                  <Image
                    src={PRACTICE_EXTERIOR_IMAGE}
                    alt={`Buitenkant van ${siteConfig.name} aan de ${siteConfig.address.street} in Apeldoorn`}
                    fill
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 26rem, 28rem"
                    className="object-cover object-[center_38%]"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent sm:from-black/35"
                    aria-hidden
                  />
                  <p className="absolute bottom-3 left-4 right-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/95 drop-shadow-[0_1px_2px_rgb(0_0_0/0.45)] sm:bottom-4 sm:left-5 sm:text-[0.7rem]">
                    Onze praktijk aan de buitenkant
                  </p>
                </div>
                <div className="relative border-t border-border/55 bg-card/98 p-5 backdrop-blur-[2px] sm:p-6">
                  <span
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/90 via-white/40 to-transparent opacity-90 dark:from-white/[0.06] dark:via-transparent dark:to-transparent"
                    aria-hidden
                  />
                  <div className="relative">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary/90">
                      Vestiging
                    </p>
                    <p className="mt-2 font-serif text-lg font-semibold leading-snug tracking-tight text-foreground sm:text-xl">
                      {siteConfig.name}
                    </p>
                    <span className="mt-4 flex gap-2.5 text-muted-foreground">
                      <MapPin className="mt-0.5 size-[1.125rem] shrink-0 text-primary" aria-hidden />
                      <span className="text-sm leading-relaxed sm:text-[0.9375rem]">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.postal} {siteConfig.address.city}
                      </span>
                    </span>
                    <a
                      href={siteConfig.googleReviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Google-reviews van ${siteConfig.name} (opent in nieuw tabblad)`}
                      className={cn(
                        "mt-4 flex w-full items-center justify-between gap-3 rounded-xl border border-border/70 bg-muted/20 px-3 py-3 transition",
                        "hover:border-primary/35 hover:bg-muted/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-card",
                      )}
                    >
                      <span className="min-w-0 text-left">
                        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:text-[0.7rem]">
                          Google
                        </span>
                        <span className="mt-1 flex gap-0.5 text-primary" aria-hidden>
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className="size-3.5 shrink-0 fill-primary/15 stroke-primary sm:size-4"
                              strokeWidth={1.5}
                            />
                          ))}
                        </span>
                        <span className="mt-1 block text-sm font-semibold text-foreground sm:text-[0.9375rem]">
                          Bekijk reviews
                        </span>
                      </span>
                      <ExternalLink
                        className="size-4 shrink-0 text-muted-foreground sm:size-[1.125rem]"
                        aria-hidden
                      />
                    </a>
                    <p className="mt-4 border-t border-border/60 pt-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                      Kwaliteit en specialisaties — met dezelfde aandacht als bij uw eerste bezoek.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 border-t border-border/50 pt-10 sm:mt-12 sm:pt-11">
            <Reveal className="max-w-2xl">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-foreground/85 sm:text-[0.8125rem] sm:tracking-[0.22em]">
                Waar u op kunt rekenen
              </p>
              <p className="mt-2 font-serif text-2xl font-semibold leading-snug tracking-tight text-foreground sm:mt-2.5 sm:text-[1.75rem] sm:leading-snug lg:text-[1.9rem]">
                Vier pijlers van onze aanpak
              </p>
            </Reveal>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
              {trustPillars.map((item, i) => {
                const Icon = trustIcons[i] ?? Sparkles;
                return (
                  <li key={item.title}>
                    <Reveal delay={i * 0.05} className="h-full">
                      <div
                        className={cn(
                          "group relative flex h-full min-h-[10.5rem] flex-col overflow-hidden rounded-2xl border border-border/55 bg-card/85 p-5 shadow-sm shadow-black/[0.04] outline-none ring-1 ring-black/[0.02] backdrop-blur-md transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out sm:min-h-[11rem] sm:p-6",
                          "hover:-translate-y-1 hover:border-primary/25 hover:bg-card hover:shadow-lg hover:shadow-primary/10 hover:ring-primary/10",
                          "dark:ring-white/5 dark:hover:shadow-primary/20",
                        )}
                      >
                        <span
                          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-white/25 to-transparent opacity-95 dark:from-white/[0.07] dark:via-transparent dark:to-transparent"
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
                          <h3 className="mt-3.5 font-serif text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary sm:mt-4 sm:text-xl sm:leading-snug">
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

      <section className="border-b border-border/60 bg-section-muted py-section">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-8 px-gutter sm:gap-10 lg:items-center lg:grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)] lg:gap-14">
          <Reveal className="order-2 min-w-0 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-[0.8125rem] sm:tracking-[0.22em]">
              Behandelingen
            </p>
            <h2 className="mt-2.5 max-w-[22rem] text-balance font-heading text-[1.85rem] font-bold leading-[1.1] tracking-tight text-foreground sm:mt-3 sm:max-w-none sm:text-5xl sm:leading-[1.06] lg:text-[2.65rem] lg:leading-[1.05]">
              Samen kijken we naar het totaalplaatje
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-xl sm:leading-relaxed">
              Van controle tot ingreep: u weet vooraf wat we gaan doen, waarom dat helpt, en wat de alternatieven zijn. Zo blijft u regie houden over uw mondgezondheid.
            </p>
            <ul className="mt-5 space-y-3 text-base leading-relaxed text-foreground/90 sm:mt-6 sm:space-y-4 sm:text-xl sm:leading-snug">
              <li className="flex gap-3.5">
                <span className="mt-2.5 size-2.5 shrink-0 rounded-full bg-primary sm:mt-3" />
                Voorlichting die aansluit op uw dagelijks leven — poetsen, voeding, gewoontes.
              </li>
              <li className="flex gap-3.5">
                <span className="mt-2.5 size-2.5 shrink-0 rounded-full bg-primary sm:mt-3" />
                Implantologie door erkende implantologen Bonthond en Dijkman.
              </li>
              <li className="flex gap-3.5">
                <span className="mt-2.5 size-2.5 shrink-0 rounded-full bg-primary sm:mt-3" />
                Duidelijke afspraken over vervolg en nazorg.
              </li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-8 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="h-12 gap-2.5 rounded-xl px-7 text-base font-semibold shadow-sm sm:h-[3.25rem] sm:px-8 sm:text-lg"
              >
                <Link href="/behandelingen">Bekijk behandelingen</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 gap-2.5 rounded-xl border-primary/25 px-7 text-base font-semibold shadow-sm sm:h-[3.25rem] sm:px-8 sm:text-lg"
              >
                <Link href="/contact">Stel een vraag</Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="order-1 min-w-0 w-full lg:order-2">
            <div className="relative w-full max-lg:px-1 lg:aspect-[5/6] lg:min-h-0">
              <TreatmentsSpotlightCarousel treatments={demoTreatmentSummaries} />
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="bezoek"
        className="relative isolate border-b border-border/60 bg-section-muted py-section"
        aria-labelledby="home-visit-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,color-mix(in_oklab,var(--color-primary)_4%,transparent),transparent_58%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-gutter">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
            <Reveal>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
                Adres
              </p>
              <h2
                id="home-visit-heading"
                className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
              >
                Bezoek onze praktijk
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Centraal in Apeldoorn, goed bereikbaar met auto en openbaar vervoer.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,22rem)] lg:gap-10 xl:gap-12">
            <HomeVisitMapSticky>
              <Reveal delay={0.06}>
                <div
                  className={cn(
                    "overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_24px_60px_-28px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.04]",
                    "dark:ring-white/5",
                  )}
                >
                  <div className="relative aspect-[16/11] min-h-[260px] w-full sm:aspect-[16/10] sm:min-h-[300px]">
                    <iframe
                      title={`Kaart: ${siteConfig.name}`}
                      className="absolute inset-0 h-full w-full border-0"
                      src={googleMapsEmbedIframeSrc()}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex flex-col gap-3 border-t border-border/60 bg-section-muted/90 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
                    <span className="flex gap-3 text-sm leading-snug text-muted-foreground">
                      <MapPin className="mt-0.5 size-[1.125rem] shrink-0 text-primary" aria-hidden />
                      <span>
                        {siteConfig.address.street}
                        <br />
                        <span className="font-medium text-foreground">
                          {siteConfig.address.postal} {siteConfig.address.city}
                        </span>
                      </span>
                    </span>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="shrink-0 gap-2 rounded-xl border-primary/25"
                    >
                      <a href={googleMapsDirectionsUrl()} target="_blank" rel="noopener noreferrer">
                        <Navigation className="size-4" aria-hidden />
                        Route plannen
                      </a>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </HomeVisitMapSticky>

            <ul className="flex min-w-0 flex-col gap-4">
              <Reveal delay={0.08}>
                <li
                  className={cn(
                    "rounded-2xl border border-border/55 bg-card/90 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm transition-colors hover:border-primary/25 dark:bg-card/80 dark:ring-white/5",
                  )}
                >
                  <div className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="size-5" strokeWidth={2} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-heading text-lg font-bold text-foreground">Openingstijden</h3>
                      <OpeningHoursList
                        rows={siteConfig.openingHours}
                        className="mt-2 text-sm text-muted-foreground"
                      />
                      <HomeAangepasteOpeningstijdenInline />
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{siteConfig.phoneHours}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
              <Reveal delay={0.09}>
                <HomeVacaturesSidebarCard />
              </Reveal>
              <Reveal delay={0.1}>
                <li
                  className={cn(
                    "rounded-2xl border border-border/55 bg-card/90 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm transition-colors hover:border-primary/25 dark:bg-card/80 dark:ring-white/5",
                  )}
                >
                  <div className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MessageCircle className="size-5" strokeWidth={2} aria-hidden />
                    </span>
                    <div className="flex min-w-0 flex-col">
                      <h3 className="font-heading text-lg font-bold text-foreground">Contact</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        <a
                          className="font-medium text-foreground underline-offset-4 hover:underline"
                          href={`tel:${siteConfig.phoneTel}`}
                        >
                          {siteConfig.phoneDisplay}
                        </a>
                      </p>
                      <p className="mt-1.5 text-sm text-muted-foreground">
                        <a
                          className="font-medium text-foreground underline-offset-4 hover:underline"
                          href={`mailto:${siteConfig.email}`}
                        >
                          {siteConfig.email}
                        </a>
                      </p>
                      <Button asChild variant="link" className="mt-3 h-auto justify-start px-0 text-primary">
                        <Link href="/contact">Contactformulier →</Link>
                      </Button>
                    </div>
                  </div>
                </li>
              </Reveal>
              <Reveal delay={0.12}>
                <li
                  className={cn(
                    "rounded-2xl border border-border/55 bg-card/90 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm transition-colors hover:border-primary/25 dark:bg-card/80 dark:ring-white/5",
                  )}
                >
                  <div className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Bus className="size-5" strokeWidth={2} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-heading text-lg font-bold text-foreground">Route & OV</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Plan uw route via Google Maps. Het adres staat op de kaart hiernaast.
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            </ul>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="home-team-heading"
        className="border-b border-border/60 bg-section py-section"
      >
        <div className="mx-auto w-full max-w-6xl px-gutter">
          <Reveal className="max-w-2xl">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
              Ons team
            </p>
            <h2
              id="home-team-heading"
              className="mt-3 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            >
              Maak kennis met ons team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Swipe of gebruik de pijlen om iedereen te zien. Portretfoto’s volgen zodra ze beschikbaar zijn.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              <Link
                href="/onze-praktijk/team"
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                Meer over het team
              </Link>{" "}
              — BIG-nummers gelden voor geregistreerde tandartsen (Wet BIG).
            </p>
          </Reveal>
          <div className="mt-10 sm:mt-12">
            <TeamSpotlightCarousel members={homeTeamMembers} />
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-b border-border/60 bg-section-muted py-section">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_-15%,color-mix(in_oklab,var(--color-primary)_4%,transparent),transparent_55%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-gutter">
          <Reveal>
              <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-8">
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
                      Nieuwe patiënten
                    </p>
                    {homePrimaryCta.heading ? (
                      <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl sm:leading-tight">
                        {homePrimaryCta.heading}
                      </h2>
                    ) : null}
                    {homePrimaryCta.body ? (
                      <p className="max-w-prose text-base leading-relaxed text-cta-foreground/88 sm:text-[1.0625rem] sm:leading-relaxed">
                        {homePrimaryCta.body}
                      </p>
                    ) : null}
                  </div>
                </div>

                {homePrimaryCta.button?.href ? (
                  <div className="relative shrink-0">
                    <Button
                      asChild
                      variant="secondary"
                      size="lg"
                      className="h-12 w-full gap-2 rounded-xl bg-section px-7 text-base font-semibold text-foreground shadow-md shadow-black/10 ring-1 ring-black/[0.06] hover:bg-section/92 sm:h-[3.25rem] sm:w-auto sm:self-start sm:px-8 sm:text-[1.0625rem]"
                    >
                      <Link href={homePrimaryCta.button.href}>
                        {homePrimaryCta.button.label}
                        <ChevronRight className="size-4 opacity-80 sm:size-[1.125rem]" aria-hidden />
                      </Link>
                    </Button>
                  </div>
                ) : null}
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
                    <Mail className="size-6 sm:size-7" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
                      Contact
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl sm:leading-tight">
                      Liever eerst iets vragen?
                    </h2>
                    <p className="mt-3 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
                      Mail{" "}
                      <a
                        className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                        href={`mailto:${siteConfig.email}`}
                      >
                        {siteConfig.email}
                      </a>{" "}
                      of gebruik het contactformulier — we reageren zo snel mogelijk.
                    </p>
                  </div>
                </div>

                <div className="relative shrink-0">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 w-full gap-2 rounded-xl border-primary/25 bg-background/60 px-7 text-base font-semibold shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-background/90 sm:h-[3.25rem] sm:w-auto sm:px-8 sm:text-[1.0625rem]"
                  >
                    <Link href="/contact">
                      Naar contact
                      <ChevronRight className="size-4 opacity-80 sm:size-[1.125rem]" aria-hidden />
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
