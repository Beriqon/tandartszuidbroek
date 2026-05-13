import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarCheck,
  ChevronRight,
  Mail,
  MessageCircle,
  Shield,
  Sparkles,
  UserPlus,
} from "lucide-react";

import { Reveal } from "@/components/sections/Reveal";
import { Button } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { demoTreatmentSummaries } from "@/content/demo-treatments";
import { treatmentListMetadata } from "@/lib/build-page-metadata";
import { getSiteSettings, getTreatmentsList, sanityReady } from "@/lib/sanity/fetch";
import { treatmentLocalImageSrc } from "@/lib/treatment-local-images";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const ready = sanityReady();
  const settings = ready ? await getSiteSettings() : null;
  return treatmentListMetadata(settings);
}

const trustChips = [
  {
    icon: Shield,
    label: "Vergoed via uw zorgverzekering",
  },
  {
    icon: Sparkles,
    label: "Persoonlijk plan & duidelijke uitleg",
  },
  {
    icon: MessageCircle,
    label: "Ruimte voor uw vragen",
  },
] as const;

export default async function BehandelingenPage() {
  const ready = sanityReady();
  const [settings, list] = await Promise.all([
    ready ? getSiteSettings() : Promise.resolve(null),
    ready ? getTreatmentsList() : Promise.resolve(demoTreatmentSummaries),
  ]);

  const description =
    settings?.tagline ??
    `Preventieve en curatieve mondzorg bij ${siteConfig.name} in ${siteConfig.address.city}. Van controle en preventie tot herstel en esthetiek — altijd met een persoonlijk plan.`;

  return (
    <main className="flex flex-1 flex-col">
      <section
        className="relative isolate overflow-hidden border-b border-border/60 bg-section pt-12 pb-10 sm:pt-14 sm:pb-12 lg:pt-16 lg:pb-14"
        aria-labelledby="behandelingen-hero-heading"
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
          className="pointer-events-none absolute -right-[min(35%,16rem)] top-1/3 size-[min(85vw,40rem)] rounded-full bg-primary/[0.04] blur-3xl"
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
                <li className="font-semibold text-foreground">Behandelingen</li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-8 max-w-3xl">
            <Reveal>
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary/90 sm:text-sm">
                Behandelingen
              </p>
              <h1
                id="behandelingen-hero-heading"
                className="mt-2 font-serif text-[2.1rem] font-semibold leading-[1.06] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[2.85rem]"
              >
                Mondzorg op maat — van preventie tot herstel
              </h1>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
                {description}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <ul className="mt-7 flex flex-wrap gap-2 sm:mt-8 sm:gap-2.5">
              {trustChips.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/85 px-3.5 py-1.5 text-[0.8125rem] font-medium text-foreground/85 shadow-sm ring-1 ring-black/[0.02] backdrop-blur-sm",
                      "dark:bg-card/75 dark:ring-white/5",
                    )}
                  >
                    <Icon className="size-3.5 text-primary" aria-hidden strokeWidth={2.2} />
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden bg-section-muted py-section"
        aria-labelledby="behandelingen-grid-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_85%_-10%,color-mix(in_oklab,var(--color-primary)_9%,transparent),transparent_55%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-gutter">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <Reveal className="max-w-2xl">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary sm:text-[0.8125rem] sm:tracking-[0.22em]">
                Wat we doen
              </p>
              <h2
                id="behandelingen-grid-heading"
                className="mt-2.5 font-serif text-[1.85rem] font-semibold leading-tight tracking-tight text-foreground sm:text-[2.15rem] sm:leading-[1.08]"
              >
                Alle behandelingen op een rij
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Hieronder vindt u een overzicht van onze behandelingen. Klik door voor uitleg,
                aandachtspunten en wat u kunt verwachten.
              </p>
            </Reveal>
            {list.length ? (
              <Reveal delay={0.06}>
                <span
                  className={cn(
                    "inline-flex items-center gap-2 self-start rounded-full border border-border/60 bg-card/90 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground shadow-sm ring-1 ring-black/[0.02] backdrop-blur-sm sm:self-auto",
                    "dark:bg-card/80 dark:ring-white/5",
                  )}
                >
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden />
                  {list.length} behandelingen
                </span>
              </Reveal>
            ) : null}
          </div>

          {ready && !list.length ? (
            <Reveal className="mt-8">
              <p
                className={cn(
                  "max-w-2xl rounded-2xl border border-dashed border-border/70 bg-card/70 p-6 text-muted-foreground shadow-sm ring-1 ring-black/[0.02] backdrop-blur-sm",
                  "dark:bg-card/60 dark:ring-white/5",
                )}
              >
                Nog geen behandelingen in Sanity. Voeg documenten van het type{" "}
                <strong className="font-semibold text-foreground">Behandeling</strong> toe; de slug wordt
                de URL onder{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs">/behandelingen/</code>.
              </p>
            </Reveal>
          ) : null}

          {list.length ? (
            <ul className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {list.map((t, index) => {
                const slug = t.slug ?? t._id;
                const imageSrc = treatmentLocalImageSrc(slug);
                const number = String(index + 1).padStart(2, "0");
                return (
                  <li key={t._id}>
                    <Reveal delay={Math.min(index * 0.04, 0.24)} className="h-full">
                      <Link
                        href={`/behandelingen/${slug}`}
                        className={cn(
                          "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/55 bg-card/90 shadow-[0_18px_44px_-26px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.03] backdrop-blur-sm outline-none",
                          "transition-[transform,box-shadow,border-color] duration-300 ease-out",
                          "hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_28px_56px_-26px_rgba(15,23,42,0.26)] hover:shadow-primary/[0.06]",
                          "focus-visible:-translate-y-1 focus-visible:border-primary/40 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-section-muted",
                          "dark:bg-card/80 dark:ring-white/5 dark:hover:shadow-primary/15",
                        )}
                      >
                        <div className="relative aspect-[5/3] w-full shrink-0 overflow-hidden bg-muted">
                          {imageSrc ? (
                            <Image
                              src={imageSrc}
                              alt={t.title ? `Beeld bij: ${t.title}` : "Behandeling"}
                              fill
                              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                          ) : (
                            <PhotoPlaceholder
                              label="Foto"
                              className="absolute inset-0 size-full rounded-none ring-0 ring-inset"
                            />
                          )}
                          <span
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95"
                            aria-hidden
                          />
                          <span
                            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            aria-hidden
                          />
                          <span
                            className={cn(
                              "absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/92 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-foreground shadow-sm ring-1 ring-black/[0.04] backdrop-blur",
                              "dark:bg-black/55 dark:text-foreground dark:ring-white/10",
                            )}
                          >
                            <span className="text-primary">{number}</span>
                            <span className="text-foreground/70">/ {String(list.length).padStart(2, "0")}</span>
                          </span>
                          <span
                            className={cn(
                              "absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/92 text-foreground shadow-sm ring-1 ring-black/[0.04] transition-[background-color,color,transform] duration-300 backdrop-blur",
                              "group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-105",
                              "dark:bg-black/55 dark:text-foreground dark:ring-white/10",
                            )}
                            aria-hidden
                          >
                            <ArrowUpRight className="size-4" strokeWidth={2.25} />
                          </span>
                          {t.title ? (
                            <h3 className="absolute inset-x-5 bottom-4 font-serif text-[1.25rem] font-semibold leading-tight tracking-tight text-white drop-shadow-[0_1px_2px_rgb(0_0_0/0.45)] sm:text-[1.35rem]">
                              {t.title}
                            </h3>
                          ) : null}
                        </div>

                        <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                          <span
                            className="pointer-events-none absolute -right-10 -top-12 size-32 rounded-full bg-primary/[0.06] blur-2xl transition-opacity duration-300 group-hover:bg-primary/[0.1] dark:bg-primary/10"
                            aria-hidden
                          />
                          {t.excerpt ? (
                            <p className="relative line-clamp-3 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                              {t.excerpt}
                            </p>
                          ) : null}
                          <span
                            className={cn(
                              "relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors",
                              "group-hover:gap-2",
                            )}
                          >
                            Lees meer
                            <ChevronRight
                              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                              strokeWidth={2.25}
                              aria-hidden
                            />
                          </span>
                        </div>
                      </Link>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </section>

      <section className="relative isolate overflow-hidden border-t border-border/60 bg-section py-section">
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
                  "relative flex min-h-0 flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-primary px-6 py-9 text-primary-foreground shadow-[0_28px_64px_-28px_color-mix(in_oklab,var(--color-primary)_70%,rgb(15_23_42))] ring-1 ring-black/10 sm:px-9 sm:py-11",
                  "dark:ring-white/10",
                )}
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-16 size-[18rem] rounded-full bg-white/[0.12] blur-3xl"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-20 -left-10 size-[14rem] rounded-full bg-black/[0.12] blur-2xl"
                  aria-hidden
                />

                <div className="relative flex flex-1 flex-col gap-5 sm:flex-row sm:gap-6">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-foreground/15 text-primary-foreground shadow-inner ring-1 ring-primary-foreground/20 sm:size-14">
                    <UserPlus className="size-6 sm:size-7" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0 space-y-3">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary-foreground/75">
                      Nieuwe patiënt
                    </p>
                    <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl sm:leading-tight">
                      Klaar om in te schrijven?
                    </h2>
                    <p className="max-w-prose text-base leading-relaxed text-primary-foreground/88 sm:text-[1.0625rem] sm:leading-relaxed">
                      Vul het inschrijfformulier in en we nemen contact met u op om uw eerste afspraak in
                      te plannen.
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
                      Inschrijven
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
                    <CalendarCheck className="size-6 sm:size-7" strokeWidth={2} aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
                      Vragen of advies
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl sm:leading-tight">
                      Niet zeker welke behandeling u nodig heeft?
                    </h2>
                    <p className="mt-3 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
                      Mail{" "}
                      <a
                        className="font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                        href={`mailto:${siteConfig.email}`}
                      >
                        {siteConfig.email}
                      </a>{" "}
                      of neem contact op — we denken graag met u mee.
                    </p>
                  </div>
                </div>

                <div className="relative flex flex-wrap gap-3 sm:shrink-0">
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-12 gap-2 rounded-xl border-primary/25 bg-background/60 px-6 text-base font-semibold shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-background/90 sm:h-[3.25rem] sm:px-7 sm:text-[1.0625rem]"
                  >
                    <Link href="/contact">
                      Naar contact
                      <ChevronRight className="size-4 opacity-80 sm:size-[1.125rem]" aria-hidden />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-12 gap-2 rounded-xl px-5 text-base font-semibold text-primary sm:h-[3.25rem] sm:text-[1.0625rem]"
                  >
                    <a href={`mailto:${siteConfig.email}`}>
                      <Mail className="size-4" aria-hidden />
                      E-mail
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
