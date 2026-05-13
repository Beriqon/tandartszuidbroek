import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Info, Phone, UserPlus, Users } from "lucide-react";

import { TeamSpotlightCarousel } from "@/components/home/TeamSpotlightCarousel";
import { Reveal } from "@/components/sections/Reveal";
import { Button } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import type { HomeTeamMember } from "@/content/home-team";
import { homeTeamMembers } from "@/content/home-team";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type TeamGroup = {
  id: string;
  title: string;
  short: string;
  members: readonly HomeTeamMember[];
};

function buildTeamGroups(members: readonly HomeTeamMember[]): TeamGroup[] {
  const tandartsen = members.filter((m) => m.role === "Tandarts");
  const mondhygienisten = members.filter(
    (m) => m.role === "Mondhygiëniste" || m.role === "Mondhygiënist",
  );
  const tandartsAssistenten = members.filter((m) => m.role.includes("Tandarts-assistent"));
  const preventieAssistenten = members.filter((m) => m.role.startsWith("Preventie"));

  return [
    { id: "team-tandartsen", title: "Tandartsen", short: "Tandartsen", members: tandartsen },
    {
      id: "team-mondhygienisten",
      title: "Mondhygiënisten",
      short: "Mondhygiënisten",
      members: mondhygienisten,
    },
    {
      id: "team-tandartsassistenten",
      title: "Tandarts-assistenten",
      short: "Assistenten",
      members: tandartsAssistenten,
    },
    {
      id: "team-preventie",
      title: "Preventie-assistenten",
      short: "Preventie",
      members: preventieAssistenten,
    },
  ].filter((g) => g.members.length > 0);
}

function TeamPortraitCard({ member }: { member: HomeTeamMember }) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-border/55 bg-card/95 shadow-[0_18px_44px_-24px_rgba(15,23,42,0.2)] ring-1 ring-black/[0.04] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 ease-out",
        "hover:border-primary/25 hover:shadow-primary/[0.06] dark:bg-card/85 dark:ring-white/5",
      )}
    >
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-muted">
        {member.imageSrc ? (
          <Image
            src={member.imageSrc}
            alt={`Portret van ${member.name}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top"
          />
        ) : (
          <PhotoPlaceholder
            label="Portret"
            className="absolute inset-0 size-full rounded-none ring-0"
          />
        )}
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-0.5 border-t border-border/50 px-3 py-2.5 sm:px-3.5 sm:py-3">
        <h3 className="font-heading text-base font-bold leading-snug tracking-tight text-foreground sm:text-[1.05rem]">
          {member.name}
        </h3>
        <p className="text-sm leading-snug text-muted-foreground">{member.role}</p>
        {/* Vaste ruimte voor BIG-regel zodat alle kaarten (tandarts vs. overige rollen) gelijk hoog zijn. */}
        <div className="mt-0.5 min-h-[2rem] text-xs leading-snug text-muted-foreground/90 sm:min-h-[2.125rem]">
          {member.bigNumber ? <p className="m-0">BIG-nr. {member.bigNumber}</p> : null}
        </div>
      </div>
    </article>
  );
}

const teamGroups = buildTeamGroups(homeTeamMembers);

export function TeamStaticPage() {
  return (
    <>
      <section
        className="relative isolate overflow-hidden border-b border-border/60 bg-section"
        aria-labelledby="team-intro-heading"
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
                <li className="font-semibold text-foreground">Team</li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-6 max-w-3xl">
            <Reveal>
              <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary/90 sm:text-sm">
                Ons team
              </p>
              <h1
                id="team-intro-heading"
                className="mt-2 font-serif text-[2.35rem] font-semibold leading-[1.04] tracking-tight text-foreground sm:mt-2.5 sm:text-[2.75rem] sm:leading-[1.03] lg:text-[3.05rem] lg:leading-[1.02]"
              >
                Maak kennis met ons team
              </h1>
              <p className="mt-3 text-lg font-medium leading-snug text-foreground/85 sm:mt-3.5 sm:text-xl sm:leading-snug">
                Tandartsen, mondhygiënisten en assistenten — samen zorgen we voor uw mondgezondheid.
              </p>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground sm:mt-4 sm:text-xl sm:leading-relaxed">
                Achter elke behandeling staat een team dat luistert, uitlegt en met u meedenkt. Hieronder vindt u iedereen op een rij. Sommige collega&apos;s hebben nog een algemene portretplek; hun foto volgt zodra die beschikbaar is — net als op de homepage.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        className="border-b border-border/60 bg-section-muted py-section"
        aria-labelledby="team-overview-heading"
      >
        <div className="mx-auto w-full max-w-7xl px-gutter">
          <h2 id="team-overview-heading" className="sr-only">
            Teamleden en rollen
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
                      <Users className="size-[1.05rem]" strokeWidth={2} aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary/90">
                        Overzicht
                      </p>
                      <p className="font-heading text-base font-bold text-foreground">Naar rol</p>
                    </div>
                  </header>

                  <nav
                    aria-label="Inhoudsopgave team"
                    className="relative mt-4 border-t border-border/55 pt-3"
                  >
                    <ol className="space-y-0.5">
                      {teamGroups.map((group, i) => (
                        <li key={group.id}>
                          <a
                            href={`#${group.id}`}
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
                              {group.short}
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
                      <span className="font-medium text-foreground">BIG-nummers</span> vermelden we
                      alleen bij geregistreerde tandartsen, conform de Wet BIG.
                    </span>
                  </div>
                </div>
              </Reveal>
            </aside>

            <div className="min-w-0 space-y-10 sm:space-y-12">
              <Reveal>
                <div className="rounded-3xl border border-border/55 bg-card/90 p-6 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm dark:bg-card/80 dark:ring-white/5 sm:p-8">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
                    Swipen
                  </p>
                  <p className="mt-2 font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                    Snel langs iedereen
                  </p>
                  <p className="mt-3 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
                    Hetzelfde overzicht als op de homepage: gebruik de pijlen of swipe om het team te
                    bekijken.
                  </p>
                  <div className="mt-8">
                    <TeamSpotlightCarousel members={homeTeamMembers} />
                  </div>
                </div>
              </Reveal>

              {teamGroups.map((group, gi) => (
                <Reveal key={group.id} delay={Math.min(gi * 0.04, 0.16)}>
                  <article
                    id={group.id}
                    aria-labelledby={`${group.id}-heading`}
                    className={cn(
                      "scroll-mt-32 overflow-hidden rounded-3xl border border-border/55 bg-card/95 p-6 shadow-[0_22px_56px_-28px_rgba(15,23,42,0.2)] ring-1 ring-black/[0.04] backdrop-blur-sm sm:p-8",
                      "dark:bg-card/85 dark:ring-white/5",
                    )}
                  >
                    <header className="border-b border-border/50 pb-5">
                      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary/90">
                        {String(gi + 1).padStart(2, "0")}
                      </p>
                      <h3
                        id={`${group.id}-heading`}
                        className="mt-1.5 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
                      >
                        {group.title}
                      </h3>
                      <p className="mt-2 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
                        {group.id === "team-tandartsen"
                          ? "Onze tandartsen zijn BIG-geregistreerd en staan voor u klaar voor controles, behandelingen en het beantwoorden van uw vragen."
                          : group.id === "team-mondhygienisten"
                            ? "Mondhygiënisten richten zich op gezond tandvlees, preventie en professionele reiniging."
                            : group.id === "team-tandartsassistenten"
                              ? "Assistenten ondersteunen de tandartsen en zorgen dat uw bezoek soepel verloopt."
                              : "Preventie-assistenten helpen vooral jonge patiënten op weg met poetsinstructie en begeleiding."}
                      </p>
                    </header>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {group.members.map((member) => (
                        <TeamPortraitCard key={member.id} member={member} />
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
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
                      Wilt u zich inschrijven?
                    </h2>
                    <p className="max-w-prose text-base leading-relaxed text-primary-foreground/88 sm:text-[1.0625rem] sm:leading-relaxed">
                      We verwelkomen u graag in de praktijk. Vul het inschrijfformulier in of bel ons
                      voor een afspraak.
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
                      Naar inschrijven
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
                      Contact
                    </p>
                    <h2 className="mt-2 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl sm:leading-tight">
                      Vragen over de praktijk?
                    </h2>
                    <p className="mt-3 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
                      Bel{" "}
                      <a
                        href={`tel:${siteConfig.phoneTel}`}
                        className="font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        {siteConfig.phoneDisplay}
                      </a>{" "}
                      of gebruik het{" "}
                      <Link
                        href="/contact"
                        className="font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        contactformulier
                      </Link>
                      . Openingstijden vindt u op{" "}
                      <Link
                        href="/onze-praktijk#openingstijden"
                        className="font-semibold text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                      >
                        Onze praktijk
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
