"use client";

import { Lenis } from "lenis/react";
import type { ReactNode } from "react";

/** Standaard uit: Lenis + document-scroll breekt op sommige mobiele browsers en in Chrome device mode. */
const lenisEnabled =
  typeof process.env.NEXT_PUBLIC_LENIS !== "undefined" &&
  process.env.NEXT_PUBLIC_LENIS === "true";

type LenisProviderProps = {
  children: ReactNode;
};

/**
 * Vloeiende scroll (wheel) alleen als `NEXT_PUBLIC_LENIS=true` in `.env.local`.
 */
export function LenisProvider({ children }: LenisProviderProps) {
  if (!lenisEnabled) {
    return children;
  }

  return (
    <Lenis
      root
      options={{
        lerp: 0.09,
        smoothWheel: true,
        autoRaf: true,
      }}
    >
      {children}
    </Lenis>
  );
}
