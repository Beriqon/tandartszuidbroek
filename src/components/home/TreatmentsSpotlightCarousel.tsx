"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { treatmentLocalImageSrc } from "@/lib/treatment-local-images";
import type { TreatmentSummary } from "@/lib/sanity/types";
import { cn } from "@/lib/utils";

import "swiper/css";
import "swiper/css/navigation";

type TreatmentsSpotlightCarouselProps = {
  treatments: TreatmentSummary[];
  className?: string;
  /** Tijd tussen automatische slides (ms). Standaard 5 s. */
  autoplayDelayMs?: number;
};

export function TreatmentsSpotlightCarousel({
  treatments,
  className,
  autoplayDelayMs = 5000,
}: TreatmentsSpotlightCarouselProps) {
  const [autoplayOk, setAutoplayOk] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAutoplayOk(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div
      className={cn(
        "relative flex h-full min-h-0 w-full flex-col overflow-visible lg:h-full",
        "max-lg:min-h-[min(22rem,58svh)]",
        className,
      )}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={treatments.length > 1}
        centeredSlides
        slidesPerView={1.28}
        spaceBetween={10}
        breakpoints={{
          640: { slidesPerView: 1.38, spaceBetween: 11 },
          1024: { slidesPerView: 1.48, spaceBetween: 12 },
        }}
        watchOverflow
        grabCursor
        autoplay={
          autoplayOk && treatments.length > 1
            ? {
                delay: autoplayDelayMs,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        className={cn(
          "treatments-spotlight-swiper h-full w-full min-h-0 flex-1",
          "[--swiper-navigation-size:1.35rem]",
          "[&_.swiper-slide]:box-border [&_.swiper-slide]:h-full [&_.swiper-slide]:min-h-0",
          "[&_.swiper-slide]:z-0 [&_.swiper-slide-active]:z-10",
          "[&_.swiper-slide:not(.swiper-slide-active)_div.treatment-slide-sizer]:scale-[0.88]",
          "[&_.swiper-slide:not(.swiper-slide-active)_div.treatment-slide-sizer]:opacity-[0.88]",
          "[&_.swiper-slide-active_div.treatment-slide-sizer]:scale-100",
          "[&_.swiper-slide-active_div.treatment-slide-sizer]:opacity-100",
          "[&_.swiper-slide_div.treatment-slide-sizer]:origin-center",
          "[&_.swiper-slide_div.treatment-slide-sizer]:transition-[transform,opacity]",
          "[&_.swiper-slide_div.treatment-slide-sizer]:duration-300 [&_.swiper-slide_div.treatment-slide-sizer]:ease-out",
          "[&_.swiper-button-next]:right-2 [&_.swiper-button-next]:top-1/2 [&_.swiper-button-next]:mt-0 [&_.swiper-button-next]:-translate-y-1/2",
          "[&_.swiper-button-prev]:left-2 [&_.swiper-button-prev]:top-1/2 [&_.swiper-button-prev]:mt-0 [&_.swiper-button-prev]:-translate-y-1/2",
          "[&_.swiper-button-next]:z-20 [&_.swiper-button-prev]:z-20",
          "[&_.swiper-button-next]:h-10 [&_.swiper-button-next]:w-10 [&_.swiper-button-next]:rounded-full [&_.swiper-button-next]:border [&_.swiper-button-next]:border-border/70 [&_.swiper-button-next]:bg-background/90 [&_.swiper-button-next]:text-primary [&_.swiper-button-next]:shadow-sm",
          "[&_.swiper-button-prev]:h-10 [&_.swiper-button-prev]:w-10 [&_.swiper-button-prev]:rounded-full [&_.swiper-button-prev]:border [&_.swiper-button-prev]:border-border/70 [&_.swiper-button-prev]:bg-background/90 [&_.swiper-button-prev]:text-primary [&_.swiper-button-prev]:shadow-sm",
          "[&_.swiper-button-next.swiper-button-disabled]:opacity-35 [&_.swiper-button-prev.swiper-button-disabled]:opacity-35",
        )}
      >
        {treatments.map((t) => {
          const slug = t.slug ?? t._id;
          const imageSrc = treatmentLocalImageSrc(slug);
          return (
            <SwiperSlide key={t._id} className="!flex h-full min-h-0">
              <div className="treatment-slide-sizer flex h-full min-h-0 w-full">
                <Link
                  href={`/behandelingen/${slug}`}
                  className="group flex h-full min-h-0 w-full flex-col overflow-hidden rounded-lg bg-background outline-none transition focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <div
                    className={cn(
                      "relative w-full min-h-0 flex-[1.15]",
                      /* Mobiel: flex + min-h-0 laat deze zone naar 0 krimpen; aspect geeft next/image `fill` een echte hoogte. */
                      "max-lg:flex-none max-lg:aspect-[5/4]",
                    )}
                  >
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={t.title ? `Beeld bij: ${t.title}` : "Behandeling"}
                        fill
                        className="absolute inset-0 object-cover transition-opacity duration-300 group-hover:opacity-90"
                        sizes="(min-width: 1024px) 38vw, 92vw"
                      />
                    ) : (
                      <PhotoPlaceholder
                        label="Foto"
                        className="absolute inset-0 size-full rounded-none ring-0 ring-inset transition group-hover:bg-muted"
                      />
                    )}
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent"
                      aria-hidden
                    />
                  </div>
                  <div className="flex min-h-0 shrink-0 flex-col gap-2 border-t border-border/50 bg-background p-4 sm:p-5">
                    <h3 className="font-heading text-base font-bold leading-snug tracking-tight text-foreground group-hover:text-primary sm:text-lg">
                      {t.title}
                    </h3>
                    {t.excerpt ? (
                      <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                        {t.excerpt}
                      </p>
                    ) : null}
                    <span className="pt-1 text-xs font-medium text-primary sm:text-sm">Meer lezen →</span>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
