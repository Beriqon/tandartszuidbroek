import Link from "next/link";
import { ChevronRight, Phone, Stethoscope, UserPlus, Users } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const tiles = [
  {
    key: "enroll",
    href: "/inschrijven",
    icon: UserPlus,
    title: "Inschrijven",
    subtitle: "Schrijf u in als patiënt",
    external: false,
  },
  {
    key: "spoed",
    href: "/spoed",
    icon: Stethoscope,
    title: "Spoed",
    subtitle: "Meer informatie",
    external: false,
  },
  {
    key: "contact",
    href: `tel:${siteConfig.phoneTel}`,
    icon: Phone,
    title: "Contact",
    subtitle: siteConfig.phoneDisplay,
    external: true,
  },
  {
    key: "team",
    href: "/onze-praktijk/team",
    icon: Users,
    title: "Team",
    subtitle: "Leer ons kennen",
    external: false,
  },
] as const;

export function HomeQuickTiles() {
  return (
    <section
      aria-label="Snel naar"
      className="border-b border-border/60 bg-section-muted py-8 md:py-10"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-3 px-gutter sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((t) => {
          const Icon = t.icon;
          const inner = (
            <>
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                <Icon className="size-5" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-heading text-base font-semibold text-foreground">
                  {t.title}
                </span>
                <span className="mt-0.5 block text-sm text-muted-foreground">
                  {t.subtitle}
                </span>
              </span>
              <ChevronRight
                className="size-5 shrink-0 text-muted-foreground/60 transition group-hover:translate-x-0.5 group-hover:text-primary"
                aria-hidden
              />
            </>
          );
          const className = cn(
            "group flex items-center gap-4 rounded-xl border border-border/80 bg-card p-4 shadow-sm transition",
            "hover:border-primary/35 hover:shadow-md"
          );
          return t.external ? (
            <a key={t.key} href={t.href} className={className}>
              {inner}
            </a>
          ) : (
            <Link key={t.key} href={t.href} className={className}>
              {inner}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
