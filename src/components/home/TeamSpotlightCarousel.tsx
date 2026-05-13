"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";

import { Button } from "@/components/ui/button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import type { HomeTeamMember } from "@/content/home-team";
import { cn } from "@/lib/utils";

import "swiper/css";

type TeamSpotlightCarouselProps = {
  members: readonly HomeTeamMember[];
  className?: string;
  /** Tijd tussen automatische slides (ms). Standaard 5 s. */
  autoplayDelayMs?: number;
};

function syncNavDisabled(swiper: SwiperInstance, setNav: (v: { prev: boolean; next: boolean }) => void) {
  const loopOn = Boolean(swiper.params.loop);
  if (loopOn) {
    setNav({ prev: false, next: false });
    return;
  }
  setNav({ prev: swiper.isBeginning, next: swiper.isEnd });
}

export function TeamSpotlightCarousel({
  members,
  className,
  autoplayDelayMs = 5000,
}: TeamSpotlightCarouselProps) {
  const [autoplayOk, setAutoplayOk] = useState(true);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [navDisabled, setNavDisabled] = useState({ prev: false, next: false });

  const updateNav = useCallback((swiper: SwiperInstance) => {
    syncNavDisabled(swiper, setNavDisabled);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAutoplayOk(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const loopEnabled = members.length > 3;

  return (
    <div className={cn("relative", className)}>
      <Button
        type="button"
        variant="outline"
        size="icon-lg"
        aria-label="Vorige teamleden"
        disabled={navDisabled.prev}
        onClick={() => swiperRef.current?.slidePrev()}
        className={cn(
          "absolute left-0 top-1/2 z-20 h-11 w-11 -translate-y-1/2 rounded-xl border-border/60 bg-card/95 text-primary shadow-[0_12px_36px_-14px_rgba(15,23,42,0.28)] ring-1 ring-black/[0.05] backdrop-blur-md transition-[border-color,box-shadow,transform,background-color] duration-200",
          "hover:border-primary/35 hover:bg-card hover:shadow-[0_16px_40px_-14px_rgba(15,23,42,0.32)] hover:shadow-primary/[0.08]",
          "max-sm:left-0 max-sm:h-10 max-sm:w-10 max-sm:rounded-lg",
          "dark:bg-card/90 dark:ring-white/10 dark:hover:bg-card",
        )}
      >
        <ChevronLeft className="size-5 max-sm:size-[1.125rem]" strokeWidth={2} aria-hidden />
      </Button>
      <Button
        type="button"
        variant="outline"
        size="icon-lg"
        aria-label="Volgende teamleden"
        disabled={navDisabled.next}
        onClick={() => swiperRef.current?.slideNext()}
        className={cn(
          "absolute right-0 top-1/2 z-20 h-11 w-11 -translate-y-1/2 rounded-xl border-border/60 bg-card/95 text-primary shadow-[0_12px_36px_-14px_rgba(15,23,42,0.28)] ring-1 ring-black/[0.05] backdrop-blur-md transition-[border-color,box-shadow,transform,background-color] duration-200",
          "hover:border-primary/35 hover:bg-card hover:shadow-[0_16px_40px_-14px_rgba(15,23,42,0.32)] hover:shadow-primary/[0.08]",
          "max-sm:right-0 max-sm:h-10 max-sm:w-10 max-sm:rounded-lg",
          "dark:bg-card/90 dark:ring-white/10 dark:hover:bg-card",
        )}
      >
        <ChevronRight className="size-5 max-sm:size-[1.125rem]" strokeWidth={2} aria-hidden />
      </Button>

      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          syncNavDisabled(swiper, setNavDisabled);
        }}
        onSlideChange={updateNav}
        onBreakpoint={(swiper) => syncNavDisabled(swiper, setNavDisabled)}
        onReachBeginning={(swiper) => syncNavDisabled(swiper, setNavDisabled)}
        onReachEnd={(swiper) => syncNavDisabled(swiper, setNavDisabled)}
        loop={loopEnabled}
        watchOverflow
        grabCursor
        autoplay={
          autoplayOk && members.length > 1
            ? {
                delay: autoplayDelayMs,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
        spaceBetween={16}
        slidesPerView={1.08}
        breakpoints={{
          520: { slidesPerView: 1.35, spaceBetween: 16 },
          720: { slidesPerView: 1.95, spaceBetween: 18 },
          1024: { slidesPerView: 3.65, spaceBetween: 18 },
          1280: { slidesPerView: 4.15, spaceBetween: 20 },
          1536: { slidesPerView: 4.65, spaceBetween: 20 },
        }}
        className={cn(
          "team-spotlight-swiper !pb-2 !pl-12 !pr-12 max-sm:!pl-11 max-sm:!pr-11",
          "lg:!h-auto lg:min-h-0",
          "[&_.swiper-slide]:box-border [&_.swiper-slide]:flex [&_.swiper-slide]:h-auto [&_.swiper-slide]:self-stretch",
        )}
      >
        {members.map((m) => (
          <SwiperSlide key={m.id} className="!flex !h-auto !self-stretch py-1">
            <article
              className={cn(
                "group/card flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-2xl border border-border/55 bg-card/95 text-left shadow-[0_18px_44px_-24px_rgba(15,23,42,0.2)] ring-1 ring-black/[0.04] backdrop-blur-sm",
                "transition-[border-color,box-shadow,transform] duration-300 ease-out will-change-transform",
                "hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_22px_52px_-22px_rgba(15,23,42,0.24)] hover:shadow-primary/[0.06]",
                "dark:bg-card/85 dark:ring-white/5 dark:hover:shadow-primary/12",
              )}
            >
              <div className="relative w-full shrink-0 overflow-hidden bg-muted aspect-[4/5]">
                {m.imageSrc ? (
                  <Image
                    src={m.imageSrc}
                    alt={`Portret van ${m.name}`}
                    fill
                    sizes="(max-width: 520px) 88vw, (max-width: 720px) 45vw, (max-width: 1023px) 32vw, 260px"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover/card:scale-[1.025]"
                  />
                ) : (
                  <PhotoPlaceholder
                    label="Portret"
                    className="absolute inset-0 size-full rounded-none ring-0"
                  />
                )}
              </div>
              <div className="flex min-h-0 flex-1 flex-col gap-0.5 border-t border-border/50 px-3 py-2.5 sm:px-3.5 sm:py-3">
                <h3 className="line-clamp-2 font-heading text-base font-bold leading-snug tracking-tight text-foreground sm:text-[1.05rem]">
                  {m.name}
                </h3>
                <p className="text-sm leading-snug text-muted-foreground">{m.role}</p>
                <div className="mt-0.5 min-h-[2rem] text-xs leading-snug text-muted-foreground/90 sm:min-h-[2.125rem]">
                  {m.bigNumber ? <p className="m-0">BIG-nr. {m.bigNumber}</p> : null}
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
