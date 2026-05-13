import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import type { Link as CmsLinkType } from "@/lib/sanity/types";
import { cn } from "@/lib/utils";

type ButtonVariant = ComponentProps<typeof Button>["variant"];
type ButtonSize = ComponentProps<typeof Button>["size"];

type CmsLinkProps = {
  link?: CmsLinkType;
  /** Fallback label when the CMS link has none. */
  fallbackLabel?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

function isExternal(href: string): boolean {
  return /^(https?:|mailto:|tel:)/i.test(href);
}

/**
 * Render a CMS-defined call-to-action as a Button. Internal hrefs use
 * next/link for client-side navigation; external/mailto/tel use a plain anchor
 * with `rel="noopener"` for safety.
 */
export function CmsLink({
  link,
  fallbackLabel,
  variant = "default",
  size = "lg",
  className,
}: CmsLinkProps) {
  const href = link?.href?.trim();
  const label = link?.label?.trim() || fallbackLabel;

  if (!href || !label) return null;

  const merged = cn("h-10 rounded-xl px-4 text-sm font-semibold", className);

  if (isExternal(href)) {
    return (
      <Button asChild variant={variant} size={size} className={merged}>
        <a href={href} rel="noopener" target={href.startsWith("http") ? "_blank" : undefined}>
          {label}
        </a>
      </Button>
    );
  }

  return (
    <Button asChild variant={variant} size={size} className={merged}>
      <Link href={href}>{label}</Link>
    </Button>
  );
}
