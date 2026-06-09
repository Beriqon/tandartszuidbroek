import { CalendarOff } from "lucide-react";

import type { AangepasteOpeningstijd } from "@/content/praktijk-nieuws";
import { praktijkNieuws } from "@/content/praktijk-nieuws";
import { cn } from "@/lib/utils";

type AangepasteOpeningstijdenPanelProps = {
  gesloten?: readonly AangepasteOpeningstijd[];
  bijzonderheden?: readonly AangepasteOpeningstijd[];
  className?: string;
  compact?: boolean;
};

function SluitingItem({ item, compact }: { item: AangepasteOpeningstijd; compact?: boolean }) {
  const suffix = item.omschrijving
    ? ` – ${item.omschrijving}`
    : item.details
      ? ` ${item.details}`
      : "";

  return (
    <li
      className={cn(
        "flex gap-2 text-muted-foreground",
        compact ? "text-xs leading-snug" : "text-sm leading-relaxed sm:text-[0.9375rem]",
      )}
    >
      <span className={cn("size-1.5 shrink-0 rounded-full bg-primary/70", compact ? "mt-1.5" : "mt-2")} aria-hidden />
      <span>
        <span className="font-medium text-foreground">{item.datum}</span>
        {suffix ? <span>{suffix}</span> : null}
      </span>
    </li>
  );
}

export function AangepasteOpeningstijdenPanel({
  gesloten = praktijkNieuws.aangepasteOpeningstijden.gesloten,
  bijzonderheden = praktijkNieuws.aangepasteOpeningstijden.bijzonderheden,
  className,
  compact = false,
}: AangepasteOpeningstijdenPanelProps) {
  const hasGesloten = gesloten.length > 0;
  const hasBijzonderheden = bijzonderheden.length > 0;

  if (!hasGesloten && !hasBijzonderheden) {
    return null;
  }

  return (
    <div className={cn("min-w-0", className)}>
      <div className={cn("flex", compact ? "gap-2.5" : "gap-4")}>
        <span
          className={cn(
            "flex shrink-0 items-center justify-center bg-primary/10 text-primary",
            compact ? "size-9 rounded-lg" : "size-11 rounded-xl",
          )}
        >
          <CalendarOff className={cn(compact ? "size-4" : "size-5")} strokeWidth={2} aria-hidden />
        </span>
        <div className="min-w-0 flex-1">
          <h3
            className={cn(
              "font-heading font-bold text-foreground",
              compact ? "text-base" : "text-lg",
            )}
          >
            Aangepaste openingstijden
          </h3>

          {hasGesloten ? (
            <div className={cn(compact ? "mt-2.5" : "mt-4")}>
              <p
                className={cn(
                  "font-semibold uppercase tracking-[0.16em] text-foreground/70",
                  compact ? "text-[0.65rem]" : "text-xs",
                )}
              >
                Gesloten
              </p>
              <ul className={cn(compact ? "mt-1.5 space-y-1" : "mt-2 space-y-2")}>
                {gesloten.map((item) => (
                  <SluitingItem key={item.id} item={item} compact={compact} />
                ))}
              </ul>
            </div>
          ) : null}

          {hasBijzonderheden ? (
            <div className={cn(hasGesloten ? (compact ? "mt-3" : "mt-5") : compact ? "mt-2.5" : "mt-4")}>
              <p
                className={cn(
                  "font-semibold uppercase tracking-[0.16em] text-foreground/70",
                  compact ? "text-[0.65rem]" : "text-xs",
                )}
              >
                {compact ? "Bijzonderheden" : "Gesloten i.v.m. andere bijzonderheden"}
              </p>
              <ul className={cn(compact ? "mt-1.5 space-y-1" : "mt-2 space-y-2")}>
                {bijzonderheden.map((item) => (
                  <SluitingItem key={item.id} item={item} compact={compact} />
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
