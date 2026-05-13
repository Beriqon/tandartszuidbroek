import Image from "next/image";

import { CmsLink } from "@/components/sections/CmsLink";
import { Reveal } from "@/components/sections/Reveal";
import { imageDimensions, imageSrc } from "@/lib/sanity/image";
import { cn } from "@/lib/utils";
import type { PageSection } from "@/lib/sanity/types";

type HeroProps = Extract<PageSection, { _type: "heroSection" }>;
type HeroComponentProps = HeroProps & { className?: string };

/**
 * Editorial hero with optional photo. Photo is rendered with next/image
 * and marked as the LCP element via `preload` (Next.js 16 replacement
 * for the deprecated `priority` prop).
 */
export function Hero({
  eyebrow,
  heading,
  subheading,
  image,
  staticImageSrc,
  staticImageAlt,
  primaryCta,
  secondaryCta,
  className,
}: HeroComponentProps) {
  const staticSrc = staticImageSrc?.trim() || undefined;
  const dims = staticSrc ? null : imageDimensions(image);
  const src = staticSrc || imageSrc(image, dims ? undefined : { width: 1600 });
  const aspect = dims ? `${dims.width} / ${dims.height}` : "5 / 4";
  const imageAlt = staticImageAlt?.trim() || heading || "Tandartspraktijk Zuidbroek";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-border/60 bg-[linear-gradient(180deg,var(--color-section)_0%,var(--color-section-muted)_100%)]",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(70%_50%_at_100%_0%,color-mix(in_oklab,var(--color-primary)_8%,transparent)_0%,transparent_55%)]"
      />
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-gutter pt-12 pb-12 sm:pt-14 sm:pb-14 lg:grid-cols-12 lg:gap-14 lg:pt-16 lg:pb-16">
        <Reveal className="lg:col-span-6 lg:pt-4">
          {eyebrow ? (
            <p className="mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="whitespace-pre-line font-heading text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-[2.75rem] md:leading-[1.06] lg:text-6xl">
            {heading}
          </h1>
          {subheading ? (
            <p className="mt-5 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
              {subheading}
            </p>
          ) : null}
          {(primaryCta?.href || secondaryCta?.href) && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CmsLink
                link={primaryCta}
                fallbackLabel="Inschrijven"
                className="h-11 min-w-[10rem] rounded-md px-6"
              />
              <CmsLink
                link={secondaryCta}
                variant="outline"
                fallbackLabel="Onze praktijk"
                className="h-11 min-w-[10rem] rounded-md border-primary/25 px-6 hover:border-primary/40 hover:bg-primary/5"
              />
            </div>
          )}
        </Reveal>

        <Reveal
          delay={0.1}
          className="relative lg:col-span-6 lg:col-start-7"
        >
          {src ? (
            <div
              className="relative w-full overflow-hidden rounded-lg bg-muted/50 ring-1 ring-border/70 shadow-[0_20px_50px_-24px_rgb(0_0_0/0.2)]"
              style={{ aspectRatio: aspect }}
            >
              <Image
                src={src}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                preload
                fetchPriority="high"
                className="object-cover"
              />
            </div>
          ) : (
            <HeroDecor aspect={aspect} />
          )}
        </Reveal>
      </div>
    </section>
  );
}

function HeroDecor({ aspect }: { aspect: string }) {
  return (
    <div
      className="relative w-full overflow-hidden rounded-lg bg-gradient-to-br from-muted via-background to-secondary/80 ring-1 ring-border/70"
      style={{ aspectRatio: aspect }}
      aria-hidden
    >
      <div className="absolute inset-0 [background-image:radial-gradient(circle_at_25%_15%,color-mix(in_oklab,var(--color-primary)_12%,transparent),transparent_50%),radial-gradient(circle_at_80%_70%,color-mix(in_oklab,var(--color-primary)_8%,transparent),transparent_55%)]" />
      <div className="absolute inset-x-6 bottom-6 rounded-md border border-border/70 bg-card/95 p-4 shadow-sm sm:inset-x-8 sm:bottom-8 sm:p-5">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-primary">
          Welkom
        </p>
        <p className="mt-1.5 text-sm leading-snug text-foreground/85">
          Moderne mondzorg met tijd voor u — duidelijke uitleg en aandacht voor
          angst en kinderen.
        </p>
      </div>
    </div>
  );
}
