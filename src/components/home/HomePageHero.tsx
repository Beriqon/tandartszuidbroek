import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  ChevronRight,
  Phone,
  Stethoscope,
  UserPlus,
  Users,
} from "lucide-react";

import { ToothMark } from "@/components/icons/ToothMark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const HERO_BG = "/homepagina/heroachtergrond.png";

const heroQuickCards = [
  {
    key: "spoed",
    href: "/spoed",
    title: "Spoeddienst",
    subtitle: "Meer informatie",
    icon: Stethoscope,
  },
  {
    key: "contact",
    href: "/contact",
    title: "Contact",
    subtitle: siteConfig.phoneDisplay,
    icon: Phone,
  },
  {
    key: "team",
    href: "/onze-praktijk/team",
    title: "Team",
    subtitle: "Leer ons kennen",
    icon: Users,
  },
  {
    key: "inschrijven",
    href: "/inschrijven",
    title: "Inschrijven",
    subtitle: "Schrijf u in",
    icon: UserPlus,
  },
] as const;

export function HomePageHero() {
  const { name, address } = siteConfig;

  return (
    <section
      className="relative isolate min-h-[min(100svh,52rem)] w-full overflow-x-hidden border-b border-border/60 max-lg:min-h-[min(100dvh,48rem)]"
      aria-labelledby="home-hero-heading"
    >
      <Image
        src={HERO_BG}
        alt={`Behandeling in de tandartsstoel bij ${name} in Apeldoorn`}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-[50%_32%] sm:object-[55%_28%] lg:object-[58%_22%]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-white from-[0%] via-white/88 via-[42%] to-white/15 lg:via-[48%] lg:to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent sm:max-lg:from-white/36 lg:from-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,52rem)] w-full max-w-screen-2xl flex-col px-gutter pb-8 pt-[clamp(1rem,2.25vw,2.5rem)] max-lg:min-h-[min(100dvh,46rem)] sm:pb-10 lg:min-h-[min(100svh,52rem)] lg:pt-[calc(var(--site-header-desktop-stack)+clamp(4.25rem,5.5vw,4.85rem))]">
        <div className="ml-0 flex max-w-xl flex-col py-1.5 sm:ml-[min(3vw,2rem)] sm:max-w-2xl sm:py-2 md:ml-[min(5vw,3.5rem)] lg:ml-[min(7vw,6rem)] lg:max-w-[34rem] lg:py-2.5 xl:ml-[min(9vw,8rem)]">
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-foreground/80 sm:text-[0.75rem]">
            Tandarts Apeldoorn • Gezinsmondzorg • Preventie
          </p>
          <h1
            id="home-hero-heading"
            className="mt-2 font-serif font-semibold leading-[1.04] tracking-tight text-foreground sm:leading-[1.03] lg:leading-[1.02]"
          >
            <span className="block text-[clamp(1.85rem,6.5vw,2.35rem)] sm:text-[2.65rem] md:text-[2.95rem] lg:text-[3.2rem]">
              Uw glimlach
            </span>
            <span className="block text-[clamp(1.85rem,6.5vw,2.35rem)] sm:text-[2.65rem] md:text-[2.95rem] lg:text-[3.2rem]">
              is onze zorg.
            </span>
            <span className="mt-1.5 block text-[clamp(1.85rem,6.5vw,2.35rem)] italic text-primary sm:text-[2.65rem] md:text-[2.95rem] lg:text-[3.2rem]">
              Elke dag weer.
            </span>
            <span className="mt-6 block border-t border-border/50 pt-5 text-[1.05rem] font-medium tracking-tight text-foreground/80 sm:mt-7 sm:pt-6 sm:text-lg md:text-[1.15rem]">
              {name}
            </span>
          </h1>

          <div className="relative my-5 flex items-center gap-3 sm:my-6">
            <div className="h-px flex-1 bg-primary/25" aria-hidden />
            <ToothMark className="text-primary" />
            <div className="h-px flex-1 bg-primary/25" aria-hidden />
          </div>

          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-xl sm:leading-relaxed">
            Op de {address.street} in Apeldoorn (wijk Zuidbroek). Moderne mondzorg voor
            het hele gezin — persoonlijk en rustig.
          </p>

          <div className="mt-6 sm:mt-7">
            <Button
              asChild
              size="lg"
              className="h-[3.25rem] w-full gap-2.5 rounded-xl px-7 text-lg font-semibold shadow-sm sm:w-auto sm:min-w-[13.5rem]"
            >
              <Link href="/inschrijven">
                <CalendarDays className="size-[1.35rem] shrink-0" aria-hidden />
                Inschrijven
                <ChevronRight className="size-[1.1rem] opacity-80" aria-hidden />
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-auto grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2 sm:gap-5 sm:pt-4 lg:grid-cols-4 lg:gap-5 lg:pt-8">
          {heroQuickCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.key}
                href={card.href}
                className={cn(
                  "group relative flex h-full min-h-[8.5rem] flex-col overflow-hidden rounded-3xl border border-border/55 bg-card/85 p-4 shadow-sm shadow-black/[0.04] outline-none ring-1 ring-black/[0.02] backdrop-blur-md transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out sm:min-h-[9.25rem] sm:p-5",
                  "hover:-translate-y-1 hover:border-primary/25 hover:bg-card hover:shadow-lg hover:shadow-primary/10 hover:ring-primary/10",
                  "focus-visible:ring-2 focus-visible:ring-primary/45 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:ring-white/5 dark:hover:shadow-primary/20",
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
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/14 to-primary/6 text-primary shadow-inner shadow-primary/5 ring-1 ring-primary/10 transition duration-300 group-hover:scale-[1.04] group-hover:from-primary/20 group-hover:to-primary/10 group-hover:shadow-md dark:from-primary/25 dark:to-primary/10 dark:ring-primary/20">
                    <Icon className="size-[1.35rem]" strokeWidth={2} aria-hidden />
                  </span>

                  <p className="mt-4 font-serif text-lg font-semibold leading-snug tracking-tight text-foreground transition-colors duration-200 group-hover:text-primary">
                    {card.title}
                  </p>
                  <p
                    className={cn(
                      "mt-1.5 text-sm leading-snug text-muted-foreground transition-colors duration-200 group-hover:text-foreground/75",
                      card.key === "contact" && "font-medium tabular-nums tracking-wide text-foreground/85",
                    )}
                  >
                    {card.subtitle}
                  </p>

                  <span
                    className="mt-auto flex items-center gap-1 pt-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary/75 transition group-hover:text-primary"
                    aria-hidden
                  >
                    <span>Verder</span>
                    <ChevronRight
                      className="size-3.5 translate-x-0 opacity-80 transition duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      aria-hidden
                    />
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
