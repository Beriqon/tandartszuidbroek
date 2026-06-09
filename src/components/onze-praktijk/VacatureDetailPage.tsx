import Link from "next/link";
import { Briefcase, ChevronRight, Mail, Phone, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

import { Reveal } from "@/components/sections/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  isVacatureOpen,
  openSollicitatieBadgeLabel,
  openVacatureBadgeLabel,
  type VacatureDetail,
} from "@/content/vacatures";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type VacatureDetailPageProps = {
  vacature: VacatureDetail;
};

function DetailSection({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("min-w-0", className)}>
      <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function OpenSollicitatieCallout({ title }: { title: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.07] via-secondary/40 to-secondary/20 p-6 shadow-sm ring-1 ring-black/[0.03] sm:p-7",
        "dark:from-primary/12 dark:via-secondary/15 dark:to-secondary/10",
      )}
    >
      <div className="flex gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <Sparkles className="size-5" strokeWidth={2} aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="font-heading text-lg font-bold text-foreground">Geen actuele vacature</p>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground">
            Op dit moment zoeken we niet specifiek een {title.toLowerCase()}. Heeft u affiniteit met
            deze functie en wilt u bij Sanadens werken? Stuur gerust een{" "}
            <span className="font-medium text-foreground">open sollicitatie</span> — we nemen uw
            gegevens graag in ons bestand op en contact op zodra er ruimte ontstaat.
          </p>
        </div>
      </div>
    </div>
  );
}

export function VacatureDetailPage({ vacature }: VacatureDetailPageProps) {
  const isOpen = isVacatureOpen(vacature.id);
  const showRecruitmentDetail = isOpen || Boolean(vacature.applyContact);
  const solliciteerHref = `/onze-praktijk/vacatures#sollicitatie-form`;
  const duties = vacature.duties ?? [];

  return (
    <>
      <section
        className="relative isolate overflow-hidden border-b border-border/60 bg-section pt-12 pb-10 sm:pt-14 sm:pb-12 lg:pt-16 lg:pb-14"
        aria-labelledby="vacature-detail-heading"
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
                <li>
                  <Link
                    href="/onze-praktijk/vacatures"
                    className="underline-offset-4 transition-colors hover:text-primary hover:underline"
                  >
                    Vacatures
                  </Link>
                </li>
                <li aria-hidden className="text-muted-foreground/50">
                  /
                </li>
                <li className="max-w-[min(52vw,14rem)] truncate font-semibold text-foreground sm:max-w-[min(40vw,24rem)]">
                  {vacature.title}
                </li>
              </ol>
            </nav>
          </Reveal>

          <div className="mt-8 max-w-3xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Briefcase className="size-5" strokeWidth={2} aria-hidden />
                </span>
                {isOpen ? (
                  <Badge className="rounded-lg bg-primary px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary-foreground hover:bg-primary">
                    {openVacatureBadgeLabel}
                  </Badge>
                ) : !showRecruitmentDetail ? (
                  <Badge
                    variant="outline"
                    className="rounded-lg border-primary/35 bg-primary/[0.06] px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-primary"
                  >
                    {openSollicitatieBadgeLabel}
                  </Badge>
                ) : null}
              </div>
              <p className="mt-4 text-[0.8125rem] font-semibold uppercase tracking-[0.18em] text-primary/90 sm:text-sm">
                Functie
              </p>
              <h1
                id="vacature-detail-heading"
                className="mt-2 font-serif text-[2.1rem] font-semibold leading-[1.06] tracking-tight text-foreground sm:text-[2.5rem] lg:text-[2.85rem]"
              >
                {vacature.title}
              </h1>
              {vacature.tagline ? (
                <p className="mt-3 text-base font-medium leading-relaxed text-foreground sm:text-lg">
                  {vacature.tagline}
                </p>
              ) : null}
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {vacature.summary}
              </p>
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
            <div className="min-w-0 max-w-3xl space-y-10">
              {!showRecruitmentDetail ? (
                <Reveal>
                  <OpenSollicitatieCallout title={vacature.title} />
                </Reveal>
              ) : null}

              {duties.length > 0 || vacature.dutyGroups?.length ? (
                <Reveal delay={showRecruitmentDetail ? 0 : 0.04}>
                  <DetailSection title={vacature.dutiesTitle ?? "Werkzaamheden"}>
                    {vacature.dutiesIntro ? (
                      <p className="text-base leading-relaxed text-muted-foreground">
                        {vacature.dutiesIntro}
                      </p>
                    ) : null}
                    {vacature.dutyGroups?.length ? (
                      <div className={cn("space-y-6", vacature.dutiesIntro && "mt-6")}>
                        {vacature.dutyGroups.map((group, index) => (
                          <div key={group.title ?? group.intro ?? `group-${index}`}>
                            {group.title ? (
                              <h3 className="font-heading text-lg font-semibold text-foreground">
                                {group.title}
                              </h3>
                            ) : null}
                            {group.intro ? (
                              <p
                                className={cn(
                                  "text-base leading-relaxed text-muted-foreground",
                                  group.title ? "mt-3" : undefined,
                                )}
                              >
                                {group.intro}
                              </p>
                            ) : null}
                            <ul
                              className={cn(
                                "space-y-2.5 text-base leading-relaxed text-muted-foreground",
                                group.title || group.intro ? "mt-3" : undefined,
                              )}
                            >
                              {group.items.map((item) => (
                                <li key={item} className="flex gap-3">
                                  <span
                                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                                    aria-hidden
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul
                        className={cn(
                          "space-y-2.5 text-base leading-relaxed text-muted-foreground",
                          vacature.dutiesIntro && "mt-6",
                        )}
                      >
                        {duties.map((item) => (
                          <li key={item} className="flex gap-3">
                            <span
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                              aria-hidden
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </DetailSection>
                </Reveal>
              ) : null}

              {showRecruitmentDetail && vacature.requirements?.length ? (
                <Reveal delay={0.04}>
                  <DetailSection title={vacature.requirementsTitle ?? "Wat wij vragen"}>
                    <ul className="space-y-2.5 text-base leading-relaxed text-muted-foreground">
                      {vacature.requirements.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </DetailSection>
                </Reveal>
              ) : null}

              {showRecruitmentDetail && vacature.profile?.length ? (
                <Reveal delay={0.06}>
                  <DetailSection title={vacature.profileTitle ?? "Wie ben jij?"}>
                    <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                      {vacature.profile.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </DetailSection>
                </Reveal>
              ) : null}

              {showRecruitmentDetail && (vacature.employmentType || vacature.hours) ? (
                <Reveal delay={0.08}>
                  <DetailSection title="Dienstverband en uren">
                    <dl className="space-y-4 text-base leading-relaxed text-muted-foreground">
                      {vacature.employmentType ? (
                        <div>
                          <dt className="font-semibold text-foreground">Dienstverband</dt>
                          <dd className="mt-1">{vacature.employmentType}</dd>
                        </div>
                      ) : null}
                      {vacature.hours ? (
                        <div>
                          <dt className="font-semibold text-foreground">Uren</dt>
                          <dd className="mt-1">{vacature.hours}</dd>
                        </div>
                      ) : null}
                    </dl>
                  </DetailSection>
                </Reveal>
              ) : null}

              {showRecruitmentDetail && vacature.salary ? (
                <Reveal delay={0.1}>
                  <DetailSection title="Salaris">
                    <p className="text-base leading-relaxed text-muted-foreground">{vacature.salary}</p>
                    {!vacature.applyContact ? (
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Het exacte salaris bespreken we graag persoonlijk, op basis van uw ervaring en
                        opleiding.
                      </p>
                    ) : null}
                  </DetailSection>
                </Reveal>
              ) : null}

              {showRecruitmentDetail && vacature.benefits?.length ? (
                <Reveal delay={0.12}>
                  <DetailSection title={vacature.benefitsTitle ?? "Wat wij bieden"}>
                    <ul className="space-y-2.5 text-base leading-relaxed text-muted-foreground">
                      {vacature.benefits.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </DetailSection>
                </Reveal>
              ) : null}

              {vacature.culture?.length ? (
                <Reveal delay={showRecruitmentDetail ? 0.13 : 0.08}>
                  <DetailSection title="Waarom Sanadens?">
                    <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
                      {vacature.culture.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </DetailSection>
                </Reveal>
              ) : null}

              {!showRecruitmentDetail ? (
                <Reveal delay={0.1}>
                  <DetailSection title="Interesse in deze functie?">
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Via het sollicitatieformulier op onze vacaturepagina kunt u een open sollicitatie
                      insturen. Kies bij &ldquo;Vacature&rdquo; de optie{" "}
                      <span className="font-medium text-foreground">
                        Open sollicitatie / andere functie
                      </span>{" "}
                      en vermeld in uw motivatie dat u interesse heeft in de functie{" "}
                      <span className="font-medium text-foreground">{vacature.title}</span>.
                    </p>
                    <Button asChild className="mt-6 rounded-xl" size="lg">
                      <Link href={solliciteerHref} className="gap-2">
                        Open sollicitatie insturen
                        <ChevronRight className="size-4 opacity-80" aria-hidden />
                      </Link>
                    </Button>
                  </DetailSection>
                </Reveal>
              ) : null}

              {showRecruitmentDetail && vacature.applyContact ? (
                <Reveal delay={0.14}>
                  <DetailSection title="Klinkt dit als jouw plek?">
                    <p className="text-base leading-relaxed text-muted-foreground">
                      Stuur je CV en motivatie naar{" "}
                      <span className="font-semibold text-foreground">
                        {vacature.applyContact.name}
                      </span>{" "}
                      ({vacature.applyContact.role}) via{" "}
                      <a
                        href={`mailto:${vacature.applyContact.email}`}
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        {vacature.applyContact.email}
                      </a>
                      .
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {vacature.applyContact.note}
                    </p>
                  </DetailSection>
                </Reveal>
              ) : null}

              <Reveal delay={0.15}>
                <Button asChild variant="outline" className="rounded-xl">
                  <Link href="/onze-praktijk/vacatures">← Alle functies</Link>
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
                    {showRecruitmentDetail ? "Interesse?" : "Open sollicitatie"}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {vacature.applyContact
                      ? `${vacature.applyContact.note} Mail naar ${vacature.applyContact.name} (${vacature.applyContact.role}).`
                      : isOpen
                        ? "Deze functie heeft op dit moment een actuele vacature. Solliciteer via het formulier op onze vacaturepagina."
                        : "Geen actuele vacature, wel ruimte voor een open sollicitatie. Laat van u horen — we nemen contact op zodra er een plek vrijkomt."}
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
                      href={`mailto:${vacature.applyContact?.email ?? siteConfig.email}`}
                      className="inline-flex items-center gap-2 font-medium text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
                    >
                      <Mail className="size-4 shrink-0 text-primary" strokeWidth={2.2} aria-hidden />
                      {vacature.applyContact?.email ?? siteConfig.email}
                    </a>
                  </div>
                  <div className="flex flex-col gap-2 pt-1">
                    {vacature.applyContact ? (
                      <Button asChild className="h-11 w-full rounded-xl font-semibold" size="default">
                        <a
                          href={`mailto:${vacature.applyContact.email}?subject=${encodeURIComponent(`Sollicitatie ${vacature.title.toLowerCase()}`)}`}
                          className="gap-2"
                        >
                          Solliciteer per e-mail
                          <ChevronRight className="size-4 opacity-80" aria-hidden />
                        </a>
                      </Button>
                    ) : (
                      <Button asChild className="h-11 w-full rounded-xl font-semibold" size="default">
                        <Link href={solliciteerHref} className="gap-2">
                          {isOpen ? "Solliciteer nu" : "Open sollicitatie"}
                          <ChevronRight className="size-4 opacity-80" aria-hidden />
                        </Link>
                      </Button>
                    )}
                    <Button
                      asChild
                      variant="outline"
                      className="h-11 w-full rounded-xl border-primary/25 font-semibold"
                    >
                      <Link href="/contact" className="gap-2">
                        Contact
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
    </>
  );
}
