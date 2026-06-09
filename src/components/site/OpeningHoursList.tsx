import type { OpeningHoursRow } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type OpeningHoursListProps = {
  rows: readonly OpeningHoursRow[];
  className?: string;
};

export function OpeningHoursList({ rows, className }: OpeningHoursListProps) {
  return (
    <ul className={cn("flex flex-col gap-1.5", className)}>
      {rows.map(({ label, slots }) => (
        <li key={label} className="grid grid-cols-[3.25rem_minmax(0,1fr)] items-start gap-x-2.5">
          <span className="pt-px text-xs font-semibold uppercase tracking-wide text-foreground/65">
            {label}
          </span>
          <div className="flex flex-col gap-0.5 tabular-nums leading-snug text-foreground/85">
            {slots.map((slot) => (
              <span key={slot}>{slot}</span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
