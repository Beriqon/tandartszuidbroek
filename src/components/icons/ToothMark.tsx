import { cn } from "@/lib/utils";

/** Tandpictogram (pad afgeleid van Material Design Icons “tooth”, Apache-2.0). */
export function ToothMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={cn("size-6 shrink-0", className)}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M7 2C4 2 2 5 2 8c0 2.11 1 5 2 6s2 8 4 8c4.54 0 2-7 4-7s-.54 7 4 7c2 0 3-7 4-8s2-3.89 2-6c0-3-2-6-5-6s-3 1-5 1s-2-1-5-1"
      />
    </svg>
  );
}
