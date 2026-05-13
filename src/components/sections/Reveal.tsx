"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Delay in seconds, useful when staggering siblings. */
  delay?: number;
  /** Slightly larger initial offset for headline-like content. */
  offset?: number;
  className?: string;
};

/**
 * Subtle fade-up reveal used spaarzaam: only on top-of-section content
 * to add scroll-feel without turning the page into a speeltuin.
 * Honours the user's reduced-motion preference.
 */
export function Reveal({ children, delay = 0, offset = 16, className }: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
