import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type BrandLogoVariant = "desktop" | "mobile" | "footer";

type BrandLogoProps = {
  variant?: BrandLogoVariant;
  className?: string;
  linkClassName?: string;
  showText?: boolean;
};

const variantConfig = {
  desktop: {
    icon: "h-[4.25rem] w-auto shrink-0 lg:h-[4.75rem]",
    iconWidth: 80,
    iconHeight: 108,
    sizes: "80px",
    title: "font-serif text-[1.125rem] font-semibold leading-none tracking-tight text-foreground lg:text-[1.3rem]",
    subtitle:
      "mt-1 max-w-[9.5rem] text-[0.625rem] font-medium leading-snug tracking-[0.02em] text-muted-foreground lg:max-w-[10.5rem] lg:text-[0.6875rem]",
    gap: "gap-2.5 lg:gap-3",
  },
  mobile: {
    icon: "h-10 w-auto shrink-0 sm:h-11",
    iconWidth: 56,
    iconHeight: 72,
    sizes: "56px",
    title: "font-serif text-base font-semibold leading-none tracking-tight text-foreground sm:text-[1.0625rem]",
    subtitle:
      "mt-0.5 max-w-[10rem] text-[0.5625rem] font-medium leading-snug text-muted-foreground sm:max-w-[11rem] sm:text-[0.625rem]",
    gap: "gap-2 sm:gap-2.5",
  },
  footer: {
    icon: "h-14 w-auto shrink-0 sm:h-16",
    iconWidth: 72,
    iconHeight: 96,
    sizes: "72px",
    title: "font-serif text-lg font-semibold leading-none tracking-tight text-foreground sm:text-xl",
    subtitle: "mt-0.5 text-[0.6875rem] font-medium leading-snug text-muted-foreground sm:text-xs",
    gap: "gap-3",
  },
} as const;

export function BrandLogo({
  variant = "desktop",
  className,
  linkClassName,
  showText = true,
}: BrandLogoProps) {
  const styles = variantConfig[variant];
  const { brandTitle, brandSubtitle, logoIconSrc, name } = siteConfig;

  const content = (
    <span className={cn("flex min-w-0 items-center", styles.gap, className)}>
      <Image
        src={logoIconSrc}
        alt=""
        width={styles.iconWidth}
        height={styles.iconHeight}
        className={styles.icon}
        sizes={styles.sizes}
        priority={variant !== "footer"}
      />
      {showText ? (
        <span className="flex min-w-0 flex-col justify-center">
          <span className={styles.title}>{brandTitle}</span>
          <span className={styles.subtitle}>{brandSubtitle}</span>
        </span>
      ) : null}
    </span>
  );

  return (
    <Link
      href="/"
      className={linkClassName}
      aria-label={name}
    >
      {content}
    </Link>
  );
}
