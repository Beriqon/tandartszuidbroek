import Link from "next/link";
import { Briefcase, ChevronRight } from "lucide-react";

import { VacatureApplicationForm } from "@/components/forms/VacatureApplicationForm";
import { Reveal } from "@/components/sections/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  getOpenVacatures,
  getVacatureListingsSorted,
  isVacatureOpen,
  openVacatureBadgeLabel,
  vacatureDetailHref,
} from "@/content/vacatures";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function VacaturesStaticPage() {
  const openVacatures = getOpenVacatures();
  const vacatureListings = getVacatureListingsSorted();

  return (
    <>
      <section
        className="relative isolate overflow-hidden border-b border-border/60 bg-section pt-12 pb-10 sm:pt-14 sm:pb-12 lg:pt-16 lg:pb-14"
        aria-labelledby="vacatures-hero-heading"
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
                <li className="font-semibold text-foreground">Vacatures</li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-8 max-w-3xl text-center sm:mx-auto">
            <Reveal>
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary/90 sm:text-sm">
                Vacatures
              </p>
              <h1
                id="vacatures-hero-heading"
                className="mt-2 font-serif text-[2.1rem] font-semibold leading-[1.06] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[2.85rem]"
              >
                Werken bij {siteConfig.name}
              </h1>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
                Heeft u affiniteit met mondzorg en wilt u meewerken in een team dat patiënten rust en
                aandacht biedt? Solliciteer via het formulier hieronder — met optioneel uw CV als
                bijlage.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        id="sollicitatie-form"
        className="border-b border-border/60 bg-section-muted py-section scroll-mt-28"
        aria-labelledby="sollicitatie-heading"
      >
        <div className="mx-auto w-full max-w-7xl px-gutter">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2
                id="sollicitatie-heading"
                className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                Solliciteer bij {siteConfig.name}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Vul het formulier in. Velden met * zijn verplicht. U kunt een CV uploaden (PDF of
                Word); dit wordt als bijlage bij de sollicitatie-e-mail meegestuurd naar de praktijk.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 sm:mt-12">
            <Reveal>
              <VacatureApplicationForm />
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="relative isolate overflow-hidden border-b border-border/60 bg-section py-section"
        aria-labelledby="vacatures-team-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_70%_0%,color-mix(in_oklab,var(--color-primary)_8%,transparent),transparent_50%)]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-gutter">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary/90 sm:text-sm">
                Vacatures
              </p>
              <h2
                id="vacatures-team-heading"
                className="mt-2 font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                Functies in onze praktijk
              </h2>
              <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                Hieronder leest u wat de verschillende functies inhouden.
                {openVacatures.length > 0 ? (
                  <>
                    {" "}
                    De functies{" "}
                    <span className="font-medium text-foreground">
                      {openVacatures.map((v) => v.title).join(" en ")}
                    </span>{" "}
                    hebben op dit moment een actuele vacature.
                  </>
                ) : null}{" "}
                Staat uw functie er niet bij? Kies bij het formulier &ldquo;Open sollicitatie&rdquo;.
              </p>
            </div>
          </Reveal>

          <ul className="mt-10 grid auto-rows-fr gap-6 sm:mt-12 md:grid-cols-3">
            {vacatureListings.map((job) => {
              const isOpen = isVacatureOpen(job.id);
              const detailHref = vacatureDetailHref(job.id);

              return (
                <li key={job.id} className="h-full">
                  <Reveal className="h-full">
                    <article
                      className={cn(
                        "group/vacature relative flex h-full flex-col items-center rounded-2xl border px-6 py-8 text-center shadow-sm ring-1 ring-black/[0.03] transition-shadow",
                        "hover:shadow-md focus-within:shadow-md",
                        isOpen
                          ? "border-primary/35 bg-gradient-to-b from-primary/[0.08] via-secondary/45 to-secondary/25 dark:from-primary/15 dark:via-secondary/20 dark:to-secondary/10"
                          : "border-border/50 bg-gradient-to-b from-secondary/55 to-secondary/25 dark:from-secondary/20 dark:to-secondary/10",
                      )}
                    >
                      <Link
                        href={detailHref}
                        className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        aria-label={`Meer informatie over ${job.title}`}
                      />
                      {isOpen ? (
                        <Badge className="pointer-events-none absolute right-4 top-4 z-10 rounded-lg bg-primary px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground hover:bg-primary">
                          {openVacatureBadgeLabel}
                        </Badge>
                      ) : null}
                      <span className="pointer-events-none relative z-10 flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-colors group-hover/vacature:bg-primary/20">
                        <Briefcase className="size-5" strokeWidth={2} aria-hidden />
                      </span>
                      <p className="pointer-events-none relative z-10 mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary/90">
                        Functie
                      </p>
                      <h3 className="pointer-events-none relative z-10 mt-2 font-heading text-xl font-bold text-foreground transition-colors group-hover/vacature:text-primary">
                        {job.title}
                      </h3>
                      <p className="pointer-events-none relative z-10 mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                        {job.description}
                      </p>
                      <div className="relative z-10 mt-6 flex w-full max-w-[16rem] flex-col gap-2.5">
                        <Button asChild size="lg" className="w-full rounded-xl shadow-sm" variant="outline">
                          <Link href={detailHref} className="gap-1">
                            {isOpen ? "Meer informatie" : "Over deze functie"}
                            <ChevronRight className="size-4 opacity-80" aria-hidden />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="lg"
                          className="w-full rounded-xl shadow-sm"
                          variant={isOpen ? "default" : "outline"}
                        >
                          <a href="#sollicitatie-form" className="gap-1">
                            {isOpen ? "Solliciteer hierboven" : "Open sollicitatie"}
                            <ChevronRight className="size-4 opacity-80" aria-hidden />
                          </a>
                        </Button>
                      </div>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
