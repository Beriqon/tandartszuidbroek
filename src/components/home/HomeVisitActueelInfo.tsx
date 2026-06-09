import Link from "next/link";
import { Briefcase, ChevronRight } from "lucide-react";

import { praktijkNieuws } from "@/content/praktijk-nieuws";
import { getOpenVacatures } from "@/content/vacatures";
import { cn } from "@/lib/utils";

function formatSluiting(item: (typeof praktijkNieuws.aangepasteOpeningstijden.gesloten)[number]) {
  const suffix = item.omschrijving ?? item.details ?? "";
  return suffix ? `${item.datum} — ${suffix}` : item.datum;
}

export function HomeAangepasteOpeningstijdenInline() {
  const { gesloten, bijzonderheden } = praktijkNieuws.aangepasteOpeningstijden;
  const items = [...gesloten, ...bijzonderheden];

  if (items.length === 0) return null;

  return (
    <div
      id="actueel"
      className="mt-4 scroll-mt-28 rounded-lg border border-primary/20 bg-primary/[0.05] px-3.5 py-3"
    >
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary">
        Aangepaste openingstijden
      </p>
      <ul className="mt-2 space-y-1.5">
        {items.map((item) => (
          <li key={item.id} className="flex gap-2 text-xs leading-snug text-muted-foreground">
            <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary/60" aria-hidden />
            <span>{formatSluiting(item)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function HomeVacaturesSidebarCard() {
  const openVacatures = getOpenVacatures();

  if (openVacatures.length === 0) return null;

  return (
    <li
      className={cn(
        "rounded-2xl border border-border/55 bg-card/90 p-5 shadow-sm ring-1 ring-black/[0.03] backdrop-blur-sm transition-colors hover:border-primary/25 dark:bg-card/80 dark:ring-white/5",
      )}
    >
      <div className="flex gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Briefcase className="size-5" strokeWidth={2} aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="font-heading text-lg font-bold text-foreground">Vacatures</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {openVacatures.map((v) => v.title).join(" · ")}
          </p>
          <Link
            href="/onze-praktijk/vacatures"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Bekijk vacatures
            <ChevronRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      </div>
    </li>
  );
}
