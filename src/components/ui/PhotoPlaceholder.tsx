import { ImageIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type PhotoPlaceholderProps = {
  className?: string;
  /** Korte tekst onder het icoon, bijv. "Foto" of "Teamfoto". */
  label?: string;
};

/**
 * Leeg vak waar later een echte foto komt — geen stock- of randomafbeelding.
 */
export function PhotoPlaceholder({ className, label = "Foto" }: PhotoPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "flex flex-col items-center justify-center bg-muted ring-1 ring-border/60 ring-inset",
        className,
      )}
    >
      <ImageIcon className="size-9 text-muted-foreground/45" strokeWidth={1.25} aria-hidden />
      <span className="mt-2 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground/75">
        {label}
      </span>
    </div>
  );
}
