import Link from "next/link";
import {
  Bus,
  Clock,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";

import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/sections/Reveal";
import { Button } from "@/components/ui/button";
import {
  googleMapsDirectionsUrl,
  googleMapsEmbedIframeSrc,
  googleMapsOpenPlaceUrl,
} from "@/lib/google-maps";
import { OpeningHoursList } from "@/components/site/OpeningHoursList";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function ContactPageLayout() {
  return (
    <>
      <section
        className="relative isolate overflow-hidden border-b border-border/60 bg-section pt-12 pb-10 sm:pt-14 sm:pb-12 lg:pt-16 lg:pb-14"
        aria-labelledby="contact-hero-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_15%_-15%,color-mix(in_oklab,var(--color-primary)_14%,transparent),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.04] via-transparent to-section-muted/55"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-gutter">
          <Reveal>
            <nav aria-label="Kruimelpad" className="text-[0.75rem] font-medium text-muted-foreground">
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
                <li className="font-semibold text-foreground">Contact</li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-8 max-w-3xl">
            <Reveal>
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary/90 sm:text-sm">
                Contact
              </p>
              <h1
                id="contact-hero-heading"
                className="mt-2 font-serif text-[2.1rem] font-semibold leading-[1.06] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[2.85rem]"
              >
                Neem contact op
              </h1>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
                Heeft u een vraag over een behandeling, afspraak of inschrijving? Stuur gerust een
                bericht via het formulier hieronder, of bel of mail ons. Adres en route vindt u verder
                op deze pagina bij de kaart.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="contact-formulier"
        className="relative isolate scroll-mt-28 overflow-hidden border-b border-border/60 bg-section py-section"
        aria-labelledby="contact-form-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_80%_-10%,color-mix(in_oklab,var(--color-primary)_12%,transparent),transparent_52%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.035] via-transparent to-transparent"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-gutter">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,26.5rem)] lg:items-start lg:gap-12">
            <Reveal>
              <div className="max-w-xl lg:pt-1">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
                  Bericht
                </p>
                <h2
                  id="contact-form-heading"
                  className="mt-3 font-serif text-[1.85rem] font-semibold leading-tight tracking-tight text-foreground sm:text-[2.15rem] sm:leading-[1.08]"
                >
                  Stuur een bericht
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Vul het formulier in — we lezen alles zorgvuldig en nemen zo snel mogelijk contact met u
                  op. Wilt u liever direct contact? Gebruik dan de knoppen onder deze tekst.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-11 gap-2 rounded-xl border-primary/30 bg-card/80 px-5 shadow-sm backdrop-blur-sm hover:border-primary/45 hover:bg-card"
                  >
                    <a href={`tel:${siteConfig.phoneTel}`}>
                      <Phone className="size-4 text-primary" aria-hidden />
                      {siteConfig.phoneDisplay}
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-11 gap-2 rounded-xl border-primary/30 bg-card/80 px-5 shadow-sm backdrop-blur-sm hover:border-primary/45 hover:bg-card"
                  >
                    <a href={`mailto:${siteConfig.email}`}>
                      <Mail className="size-4 text-primary" aria-hidden />
                      E-mail
                    </a>
                  </Button>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  Voor spoed of pijnklachten: bel de praktijk of bekijk de{" "}
                  <Link
                    href="/spoed"
                    className="font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline"
                  >
                    Spoeddienst
                  </Link>
                  .
                </p>
                <p className="mt-5 text-sm text-muted-foreground">
                  <a
                    href="#contact-adres-route"
                    className="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 transition-colors hover:underline"
                  >
                    <MapPin className="size-4 shrink-0 opacity-90" aria-hidden />
                    Kaart & route
                    <span aria-hidden>→</span>
                  </a>
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08} className="min-w-0">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="contact-adres-route"
        className="relative isolate scroll-mt-28 overflow-hidden border-b border-border/60 bg-section-muted py-section"
        aria-labelledby="contact-visit-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,color-mix(in_oklab,var(--color-primary)_10%,transparent),transparent_55%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-gutter">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-2xl lg:text-left">
            <Reveal>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
                Adres & route
              </p>
              <h2
                id="contact-visit-heading"
                className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
              >
                Bezoek {siteConfig.name}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {siteConfig.address.street}, {siteConfig.address.postal} {siteConfig.address.city}.{" "}
                Goed bereikbaar met auto en openbaar vervoer.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,22rem)] lg:items-start lg:gap-10 xl:gap-12">
            <Reveal delay={0.06} className="min-w-0">
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
                <div className="flex flex-col gap-3 border-t border-border/60 bg-section-muted/90 px-4 py-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4 sm:px-5">
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
                  <div className="flex flex-wrap gap-2">
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
                    <Button asChild variant="ghost" size="sm" className="shrink-0 gap-1.5 text-primary">
                      <a href={googleMapsOpenPlaceUrl()} target="_blank" rel="noopener noreferrer">
                        Open in Google Maps
                        <ExternalLink className="size-3.5 opacity-80" aria-hidden />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Reveal>

            <ul className="flex min-w-0 flex-col gap-4">
              <Reveal delay={0.08}>
                <li
                  className={cn(
                    "rounded-2xl border border-border/55 bg-card/90 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm dark:bg-card/80 dark:ring-white/5",
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
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {siteConfig.phoneHours}
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>

              <Reveal delay={0.1}>
                <li
                  className={cn(
                    "rounded-2xl border border-border/55 bg-card/90 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm dark:bg-card/80 dark:ring-white/5",
                  )}
                >
                  <div className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="size-5" strokeWidth={2} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-heading text-lg font-bold text-foreground">Telefoon & e-mail</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        <a
                          className="font-medium text-foreground underline-offset-4 hover:underline"
                          href={`tel:${siteConfig.phoneTel}`}
                        >
                          {siteConfig.phoneDisplay}
                        </a>
                      </p>
                      <p className="mt-1.5 flex items-center gap-2 text-sm text-muted-foreground">
                        <Mail className="size-4 shrink-0 text-primary/80" aria-hidden />
                        <a
                          className="font-medium text-foreground underline-offset-4 hover:underline"
                          href={`mailto:${siteConfig.email}`}
                        >
                          {siteConfig.email}
                        </a>
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        KvK{" "}
                        <span className="font-medium text-foreground">{siteConfig.kvk}</span>
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>

              <Reveal delay={0.11}>
                <li
                  className={cn(
                    "rounded-2xl border border-border/55 bg-card/90 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm dark:bg-card/80 dark:ring-white/5",
                  )}
                >
                  <div className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MessageCircle className="size-5" strokeWidth={2} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-heading text-lg font-bold text-foreground">Reviews</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        Bekijk ervaringen van patiënten op Google.
                      </p>
                      <Button asChild variant="link" className="mt-1 h-auto justify-start gap-1.5 px-0 text-primary">
                        <a
                          href={siteConfig.googleReviewsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Google-reviews van ${siteConfig.name} (opent in nieuw tabblad)`}
                          className="inline-flex items-center gap-1.5"
                        >
                          Google-reviews
                          <ExternalLink className="size-3.5 opacity-80" aria-hidden />
                        </a>
                      </Button>
                    </div>
                  </div>
                </li>
              </Reveal>

              <Reveal delay={0.12}>
                <li
                  className={cn(
                    "rounded-2xl border border-border/55 bg-card/90 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm dark:bg-card/80 dark:ring-white/5",
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
    </>
  );
}
