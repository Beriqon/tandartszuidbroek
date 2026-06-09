"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type HomeVisitMapStickyProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Houdt de kaart op vaste grootte, maar laat die op desktop meeschuiven
 * zodat de ruimte naast de langere sidebar niet leeg blijft.
 */
export function HomeVisitMapSticky({ children, className }: HomeVisitMapStickyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [stickyTop, setStickyTop] = useState<string>("calc(var(--site-header-desktop-stack) + 1rem)");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      if (!isDesktop) {
        setStickyTop("");
        return;
      }

      const height = el.getBoundingClientRect().height;
      const headerStack =
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue("--site-header-desktop-stack"),
        ) || 156;
      const minTop = headerStack + 16;
      const bottomAlignedTop = window.innerHeight - height - 16;
      setStickyTop(`${Math.max(minTop, bottomAlignedTop)}px`);
    };

    update();

    const media = window.matchMedia("(min-width: 1024px)");
    const onMediaChange = () => update();
    media.addEventListener("change", onMediaChange);

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);

    return () => {
      media.removeEventListener("change", onMediaChange);
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("min-w-0 lg:sticky lg:self-start", className)}
      style={stickyTop ? { top: stickyTop } : undefined}
    >
      {children}
    </div>
  );
}
