import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, ChevronRight, Mail, Phone } from "lucide-react";
import type { PortableTextBlock } from "@portabletext/types";

import { PortableBody } from "@/components/sections/PortableBody";
import { Reveal } from "@/components/sections/Reveal";
import { Button } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { siteConfig } from "@/lib/site-config";
import { treatmentLocalImageSrc } from "@/lib/treatment-local-images";
import { cn } from "@/lib/utils";

type TreatmentDetailPageViewProps = {
  slug: string;
  title: string;
  excerpt: string;
  body: PortableTextBlock[];
};

export function TreatmentDetailPageView({ slug, title, excerpt, body }: TreatmentDetailPageViewProps) {
  const imageSrc = treatmentLocalImageSrc(slug);

  return (
    <main className="flex flex-1 flex-col">
      <section
        className="relative isolate overflow-hidden border-b border-border/60 bg-section-muted"
        aria-labelledby="behandeling-detail-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_15%_-20%,color-mix(in_oklab,var(--color-primary)_12%,transparent),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-section-muted/60"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-gutter pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-12">
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
                <li>
                  <Link
                    href="/behandelingen"
                    className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    Behandelingen
                  </Link>
                </li>
                <li aria-hidden className="text-muted-foreground/50">
                  /
                </li>
                <li className="max-w-[min(52vw,14rem)] truncate font-semibold text-foreground sm:max-w-[min(40vw,24rem)]">
                  {title}
                </li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-10">
            <div className="min-w-0">
              <Reveal>
                <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary/90 sm:text-sm">
                  Behandeling
                </p>
                <h1
                  id="behandeling-detail-heading"
                  className="mt-2 font-serif text-[2rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-[2.35rem] lg:text-[2.6rem]"
                >
                  {title}
                </h1>
              </Reveal>
              {excerpt ? (
                <Reveal delay={0.06}>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
                    {excerpt}
                  </p>
                </Reveal>
              ) : null}
            </div>

            <Reveal delay={0.08} className="min-w-0 lg:pt-1">
              <div
                className={cn(
                  "relative overflow-hidden rounded-3xl border border-border/55 bg-card/90 shadow-[0_22px_50px_-28px_rgba(15,23,42,0.22)] ring-1 ring-black/[0.03] backdrop-blur-sm",
                  "dark:bg-card/80 dark:ring-white/5",
                )}
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-muted sm:aspect-[16/10]">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={title ? `Beeld bij: ${title}` : "Behandeling"}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 26rem"
                      priority
                    />
                  ) : (
                    <PhotoPlaceholder
                      label="Foto"
                      className="absolute inset-0 size-full rounded-none ring-0 ring-inset"
                    />
                  )}
                  <span
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent"
                    aria-hidden
                  />
                  <span
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent"
                    aria-hidden
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-section py-section">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_90%_0%,color-mix(in_oklab,var(--color-primary)_8%,transparent),transparent_50%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-gutter">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_18.5rem] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_20rem]">
            <div className="min-w-0 max-w-3xl">
              {body.length ? (
                <PortableBody value={body} />
              ) : (
                <Reveal>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    Voor deze behandeling staat hier nog geen uitgebreide tekst online. Neem gerust
                    contact met ons op — we beantwoorden uw vragen en denken met u mee over wat bij
                    uw situatie past.
                  </p>
                </Reveal>
              )}

              <Reveal className="mt-10" delay={0.06}>
                <div
                  className={cn(
                    "rounded-2xl border border-border/60 bg-card/80 p-5 text-sm leading-relaxed text-muted-foreground shadow-sm ring-1 ring-black/[0.02] backdrop-blur-sm sm:p-6",
                    "dark:bg-card/70 dark:ring-white/5",
                  )}
                >
                  <p>
                    <strong className="font-semibold text-foreground">Let op:</strong> elke mond is
                    anders. Wat op deze pagina staat, is algemene informatie en geen persoonlijk
                    medisch advies. Tijdens een consult in de praktijk bespreken we wat voor úw
                    gebit geldt, welke stappen zinvol zijn en wat u kunt verwachten.
                  </p>
                </div>
              </Reveal>

              <Reveal className="mt-8">
                <Button asChild variant="outline" className="rounded-xl">
                  <Link href="/behandelingen">← Alle behandelingen</Link>
                </Button>
              </Reveal>
            </div>

            <aside className="min-w-0 lg:sticky lg:top-28 lg:self-start">
              <Reveal delay={0.1}>
                <div
                  className={cn(
                    "space-y-5 rounded-3xl border border-border/55 bg-card/95 p-6 shadow-[0_18px_44px_-26px_rgba(15,23,42,0.18)] ring-1 ring-black/[0.03] backdrop-blur-sm sm:p-7",
                    "dark:bg-card/85 dark:ring-white/5",
                  )}
                >
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
                    Vragen of afspraak
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Wilt u weten of deze behandeling bij u past, of een afspraak maken? Bel of mail
                    de praktijk.
                  </p>
                  <div className="flex flex-col gap-2.5 text-sm">
                    <a
                      href={`tel:${siteConfig.phoneTel}`}
                      className="inline-flex items-center gap-2 font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      <Phone className="size-4 shrink-0 text-primary" strokeWidth={2.2} aria-hidden />
                      {siteConfig.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-flex items-center gap-2 font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      <Mail className="size-4 shrink-0 text-primary" strokeWidth={2.2} aria-hidden />
                      {siteConfig.email}
                    </a>
                  </div>
                  <div className="flex flex-col gap-2 pt-1">
                    <Button asChild className="h-11 w-full rounded-xl font-semibold" size="default">
                      <Link href="/contact" className="gap-2">
                        <CalendarCheck className="size-4" aria-hidden />
                        Contact
                        <ChevronRight className="size-4 opacity-80" aria-hidden />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="h-11 w-full rounded-xl border-primary/25 font-semibold"
                    >
                      <Link href="/inschrijven" className="gap-2">
                        Inschrijven
                        <ChevronRight className="size-4 opacity-80" aria-hidden />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
