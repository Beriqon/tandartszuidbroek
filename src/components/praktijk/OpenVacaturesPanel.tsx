import Link from "next/link";
import { Briefcase, ChevronRight } from "lucide-react";

import { Reveal } from "@/components/sections/Reveal";
import { Button } from "@/components/ui/button";
import type { VacatureListing } from "@/content/vacatures";
import { getOpenVacatures } from "@/content/vacatures";
import { cn } from "@/lib/utils";

type OpenVacaturesPanelProps = {
  vacancies?: readonly VacatureListing[];
  /** Link naar vacaturepagina of sollicitatieformulier */
  ctaHref?: string;
  ctaLabel?: string;
  /** Compacte weergave voor homepage-nieuwskaart */
  variant?: "card" | "list" | "grid";
  className?: string;
  showHeading?: boolean;
  compact?: boolean;
};

export function OpenVacaturesPanel({
  vacancies = getOpenVacatures(),
  ctaHref = "/onze-praktijk/vacatures",
  ctaLabel = "Bekijk vacatures",
  variant = "list",
  className,
  showHeading = true,
  compact = false,
}: OpenVacaturesPanelProps) {
  if (vacancies.length === 0) {
    return (
      <p className="text-sm leading-relaxed text-muted-foreground">
        Er staan momenteel geen vacatures open. Houd onze vacaturepagina in de gaten of stuur een open
        sollicitatie.
      </p>
    );
  }

  if (variant === "grid") {
    return (
      <ul className={cn("grid gap-6 md:grid-cols-2", className)}>
        {vacancies.map((job, i) => (
          <li key={job.id}>
            <Reveal delay={i * 0.05}>
              <article
                className={cn(
                  "flex h-full flex-col items-center rounded-2xl border border-border/50 px-6 py-8 text-center shadow-sm ring-1 ring-black/[0.03]",
                  "bg-gradient-to-b from-secondary/55 to-secondary/25 dark:from-secondary/20 dark:to-secondary/10",
                )}
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Briefcase className="size-5" strokeWidth={2} aria-hidden />
                </span>
                <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary/90">
                  Functie
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-foreground">{job.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-[0.9375rem]">
                  {job.description}
                </p>
                <Button asChild size="lg" className="mt-6 w-full max-w-[16rem] rounded-xl shadow-sm">
                  <a href={ctaHref} className="gap-1">
                    Solliciteer
                    <ChevronRight className="size-4 opacity-80" aria-hidden />
                  </a>
                </Button>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    );
  }

  const content = (
    <>
      {showHeading ? (
        <div className={cn("flex gap-3", compact ? "gap-2.5" : "gap-4")}>
          <span
            className={cn(
              "flex shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary",
              compact ? "size-9" : "size-11 rounded-xl",
            )}
          >
            <Briefcase className={cn(compact ? "size-4" : "size-5")} strokeWidth={2} aria-hidden />
          </span>
          <div className="min-w-0 flex-1">
            <h3
              className={cn(
                "font-heading font-bold text-foreground",
                compact ? "text-base" : "text-lg",
              )}
            >
              Vacatures
            </h3>
            {!compact ? (
              <p className="mt-1 text-sm text-muted-foreground">
                {vacancies.length === 1 ? "1 actuele vacature" : `${vacancies.length} actuele vacatures`}:
              </p>
            ) : null}
          </div>
        </div>
      ) : (
        <p className="text-sm text-muted-foreground">
          {vacancies.length === 1 ? "1 actuele vacature" : `${vacancies.length} actuele vacatures`}:
        </p>
      )}

      <ul className={cn(showHeading ? (compact ? "mt-3" : "mt-4") : "mt-3", compact ? "space-y-1.5" : "space-y-2.5")}>
        {vacancies.map((job) => (
          <li key={job.id}>
            <Link
              href={ctaHref}
              className={cn(
                "group flex items-center justify-between gap-3 rounded-lg border border-border/55 bg-muted/20 transition",
                compact ? "px-3 py-2 text-sm" : "rounded-xl bg-card/60 px-4 py-3",
                "hover:border-primary/30 hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
              )}
            >
              <span className="font-medium text-foreground transition-colors group-hover:text-primary">
                {job.title}
              </span>
              <ChevronRight
                className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary sm:size-4"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>

      {variant === "card" ? (
        <Button
          asChild
          variant="link"
          size="sm"
          className={cn(
            "h-auto justify-start px-0 text-primary",
            compact ? "mt-3 text-sm" : "mt-5",
          )}
        >
          <Link href={ctaHref} className="gap-1">
            {ctaLabel}
            <ChevronRight className="size-3.5 opacity-80" aria-hidden />
          </Link>
        </Button>
      ) : null}
    </>
  );

  return <div className={cn("min-w-0", className)}>{content}</div>;
}
