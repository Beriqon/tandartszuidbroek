"use client";

import type { ComponentProps, FocusEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  ChevronDown,
  ChevronRight,
  Home,
  LayoutDashboard,
  LayoutGrid,
  ListOrdered,
  Mail,
  MapPin,
  MenuIcon,
  Phone,
  Scale,
  Sparkles,
  UserPlus,
  Users,
  X,
} from "lucide-react";

import { BrandLogo } from "@/components/site/BrandLogo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { formatOpeningHoursSummary, siteConfig, type NavItem } from "@/lib/site-config";

const HEADER_RIGHT_HREFS = ["/spoed", "/inschrijven", "/contact"] as const;

/** Betrouwbare klok in Europe/Amsterdam (sv-SE geeft 24-uurs ISO-achtige string). */
function getAmsterdamClock(now: Date) {
  const stamp = now.toLocaleString("sv-SE", { timeZone: "Europe/Amsterdam" });
  const timePart = stamp.split(" ")[1] ?? "0:0:0";
  const [hStr, miStr] = timePart.split(":");
  const minutesSinceMidnight =
    Number.parseInt(hStr ?? "0", 10) * 60 + Number.parseInt(miStr ?? "0", 10);
  const weekdayShort = now.toLocaleDateString("en-US", {
    timeZone: "Europe/Amsterdam",
    weekday: "short",
  });
  return { weekdayShort, minutesSinceMidnight };
}

type AmsterdamOpeningStatus = {
  mounted: boolean;
  open: boolean;
  hint: string;
  fallback: string;
};

function useAmsterdamOpeningStatus(): AmsterdamOpeningStatus {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState("");

  useEffect(() => {
    setMounted(true);

    const compute = () => {
      const { weekdayShort: wd, minutesSinceMidnight: mins } = getAmsterdamClock(
        new Date()
      );
      const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(wd);
      const isOpen = isWeekday && mins >= 8 * 60 && mins < 17 * 60;
      setOpen(isOpen);

      if (isOpen) {
        setHint("Sluit om 17:00");
        return;
      }
      if (isWeekday && mins < 8 * 60) {
        setHint("Open vanaf 08:00");
        return;
      }
      if (isWeekday && mins >= 17 * 60) {
        setHint(wd === "Fri" ? "Open maandag vanaf 08:00" : "Open morgen vanaf 08:00");
        return;
      }
      setHint("Open maandag vanaf 08:00");
    };

    compute();
    const id = window.setInterval(compute, 60_000);
    return () => window.clearInterval(id);
  }, []);

  return {
    mounted,
    open,
    hint,
    fallback: formatOpeningHoursSummary(siteConfig.openingHours),
  };
}

type NavLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

function DesktopRowLink({
  href,
  children,
  className,
  withDivider,
}: NavLinkProps & { withDivider?: boolean }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      data-active={active ? "" : undefined}
      className={cn(
        "inline-flex items-center px-3.5 py-3 text-sm font-medium text-foreground/90 transition-colors hover:text-foreground sm:text-[0.9375rem]",
        withDivider && "border-l border-border/70",
        active && "font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4",
        className
      )}
    >
      {children}
    </Link>
  );
}

function OpeningStatusInline({ status }: { status: AmsterdamOpeningStatus }) {
  const { mounted, open, hint, fallback } = status;

  return (
    <>
      {!mounted ? (
        <span className="text-muted-foreground">{fallback}</span>
      ) : (
        <>
          <span className="inline-flex items-center gap-1.5">
            <span
              className={cn(
                "size-1.5 shrink-0 rounded-full",
                open ? "bg-primary" : "bg-amber-500"
              )}
              aria-hidden
            />
            <span
              className={cn(
                "font-medium",
                open ? "text-primary" : "text-amber-600"
              )}
            >
              {open ? "Open" : "Gesloten"}
            </span>
          </span>
          <span className="text-muted-foreground">—</span>
          <span className="text-muted-foreground">{hint}</span>
        </>
      )}
    </>
  );
}

function HeaderOpeningLine({ status }: { status: AmsterdamOpeningStatus }) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-x-1.5 gap-y-0.5 text-right text-[0.9375rem] leading-snug sm:text-base">
      <OpeningStatusInline status={status} />
    </div>
  );
}

function MobileHeaderOpeningLine({ status }: { status: AmsterdamOpeningStatus }) {
  return (
    <p className="mt-1.5 text-pretty text-left text-[0.8125rem] leading-snug text-muted-foreground sm:text-[0.875rem]">
      <span className="inline-flex flex-wrap items-center gap-x-1.5 gap-y-0.5">
        <OpeningStatusInline status={status} />
      </span>
    </p>
  );
}

function HeaderLogoLink({ className }: { className?: string }) {
  return (
    <BrandLogo
      variant="desktop"
      linkClassName={cn(
        "flex shrink-0 items-center self-stretch rounded-bl-2xl rounded-tl-2xl border-r border-border/80 bg-white px-4 py-1.5 transition-opacity hover:opacity-90 sm:px-5 sm:py-2",
        className,
      )}
    />
  );
}

function isNavDropdownCta(parentHref: string, subHref: string) {
  if (parentHref === "/onze-praktijk" && subHref === "/inschrijven") return true;
  if (parentHref === "/behandelingen" && subHref === "/behandelingen") return true;
  return false;
}

function getNavChildIcon(href: string): LucideIcon {
  if (href === "/inschrijven") return UserPlus;
  if (href === "/behandelingen") return LayoutGrid;
  if (href.includes("huisregels")) return ListOrdered;
  if (href.includes("/team")) return Users;
  if (href.includes("kwaliteit-en-klachten")) return Scale;
  if (href.includes("vacature")) return Briefcase;
  return Sparkles;
}

function getNavTopIcon(href: string): LucideIcon {
  if (href === "/") return Home;
  if (href === "/onze-praktijk") return Users;
  if (href === "/behandelingen") return LayoutGrid;
  if (href === "/spoed") return Phone;
  if (href === "/inschrijven") return UserPlus;
  if (href === "/contact") return Mail;
  return Sparkles;
}

function LuxeNavDropdownRow({
  href,
  label,
  icon: Icon,
  active,
  variant = "default",
}: {
  href: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
  variant?: "default" | "cta";
}) {
  if (variant === "cta") {
    return (
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3.5 border-t border-primary/20 bg-primary/10 px-4 py-4 text-foreground",
          "transition-colors hover:bg-primary/16"
        )}
      >
        <span
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-inner"
          aria-hidden
        >
          <Icon className="size-5 stroke-[1.65]" />
        </span>
        <span className="flex-1 font-heading text-base font-semibold tracking-tight">{label}</span>
        <ChevronRight className="size-4 shrink-0 opacity-95" aria-hidden />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      data-active={active ? "" : undefined}
      className={cn(
        "flex items-center gap-3.5 px-4 py-3.5 transition-colors hover:bg-muted/55",
        active && "bg-muted/35"
      )}
    >
      <span
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/[0.14] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] dark:bg-primary/20"
        aria-hidden
      >
        <Icon className="size-[1.125rem] stroke-[1.85]" />
      </span>
      <span
        className={cn(
          "flex-1 text-[0.9375rem] font-medium tracking-tight text-foreground/95",
          active && "font-semibold underline decoration-primary decoration-2 underline-offset-[5px]"
        )}
      >
        {label}
      </span>
      <ChevronRight className="size-4 shrink-0 text-muted-foreground/75" aria-hidden />
    </Link>
  );
}

const HOVER_MENU_CLOSE_MS = 160;

function DesktopNavSplitDropdown({
  item,
  withDivider,
}: {
  item: NavItem;
  withDivider?: boolean;
}) {
  const pathname = usePathname();
  const childLinks = item.children ?? [];
  const closeTimerRef = useRef<number | null>(null);
  const dropdownFlyoutRef = useRef<HTMLDivElement | null>(null);
  const treatmentsScrollRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    };
  }, []);

  const mainChildren = childLinks.filter((c) => !isNavDropdownCta(item.href, c.href));
  const ctaChildren = childLinks.filter((c) => isNavDropdownCta(item.href, c.href));

  useEffect(() => {
    if (!menuOpen || mainChildren.length === 0) return;
    const flyout = dropdownFlyoutRef.current;
    const list = treatmentsScrollRef.current;
    if (!flyout || !list) return;

    const wheelOpts = { passive: false, capture: true } as const;

    const onWheel = (e: WheelEvent) => {
      if (!flyout.contains(e.target as Node)) return;
      e.preventDefault();
      e.stopPropagation();
      list.scrollTop += e.deltaY;
    };

    flyout.addEventListener("wheel", onWheel, wheelOpts);
    return () => flyout.removeEventListener("wheel", onWheel, wheelOpts);
  }, [menuOpen, mainChildren.length]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  if (!childLinks.length) return null;

  const branchActive =
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(`${item.href}/`);
  const childActive = childLinks.some(
    (c) => pathname === c.href || pathname.startsWith(`${c.href}/`)
  );
  const active = branchActive || childActive;

  const showOverviewItem = !childLinks.some((c) => c.href === item.href);

  const openMenu = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setMenuOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => {
      setMenuOpen(false);
      closeTimerRef.current = null;
    }, HOVER_MENU_CLOSE_MS);
  };

  const handleBlurCapture = (e: FocusEvent<HTMLDivElement>) => {
    const next = e.relatedTarget;
    if (next instanceof Node && e.currentTarget.contains(next)) return;
    scheduleClose();
  };

  return (
    <div
      className={cn(
        "relative inline-flex min-h-[3.15rem] items-stretch sm:min-h-[3.35rem]",
        withDivider && "border-l border-border/70",
        menuOpen && "z-50"
      )}
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocusCapture={openMenu}
      onBlurCapture={handleBlurCapture}
    >
      <Link
        href={item.href}
        data-active={active ? "" : undefined}
        className={cn(
          "inline-flex items-center px-3 py-3 text-sm font-medium text-foreground/90 transition-colors hover:text-foreground sm:px-3.5 sm:text-[0.9375rem]",
          active &&
            "font-semibold text-foreground underline decoration-primary decoration-2 underline-offset-4"
        )}
        aria-expanded={menuOpen}
        aria-haspopup="true"
      >
        {item.label}
      </Link>
      <span
        className={cn(
          "inline-flex items-center pr-1.5 pl-0.5 text-sm font-medium text-foreground/90 sm:text-[0.9375rem]",
          active && "text-foreground"
        )}
        aria-hidden
      >
        <ChevronDown
          className={cn("size-3.5 opacity-70 transition-transform duration-200", menuOpen && "rotate-180")}
        />
      </span>

      <div
        ref={dropdownFlyoutRef}
        className={cn(
          "pointer-events-none absolute top-full left-0 min-w-[17.5rem] max-w-[min(calc(100vw-2rem),22rem)] pt-2 opacity-0 transition-[opacity,transform] duration-200 ease-out",
          menuOpen && "pointer-events-auto translate-y-0 opacity-100",
          !menuOpen && "-translate-y-1"
        )}
        aria-hidden={!menuOpen}
      >
        <div
          className={cn(
            "overflow-hidden rounded-2xl border border-border/45 bg-card shadow-[0_20px_50px_-12px_rgba(15,23,42,0.28)] ring-1 ring-black/[0.04]"
          )}
        >
          {showOverviewItem ? (
            <LuxeNavDropdownRow
              href={item.href}
              label={`Overzicht ${item.label.toLowerCase()}`}
              icon={LayoutDashboard}
              active={pathname === item.href}
            />
          ) : null}

          {mainChildren.length > 0 ? (
            <div
              ref={treatmentsScrollRef}
              className={cn(
                "max-h-[min(52vh,22rem)] overflow-y-auto overscroll-contain",
                showOverviewItem && "border-t border-border/40"
              )}
            >
              {mainChildren.map((sub) => {
                const subActive =
                  pathname === sub.href || pathname.startsWith(`${sub.href}/`);
                return (
                  <LuxeNavDropdownRow
                    key={sub.href}
                    href={sub.href}
                    label={sub.label}
                    icon={getNavChildIcon(sub.href)}
                    active={subActive}
                  />
                );
              })}
            </div>
          ) : null}

          {ctaChildren.map((sub) => (
            <LuxeNavDropdownRow
              key={sub.href}
              href={sub.href}
              label={sub.label}
              icon={getNavChildIcon(sub.href)}
              variant="cta"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopRightLink({ href, children }: { href: string; children: string }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1 border-l border-border/60 px-3.5 py-3 text-sm font-medium text-foreground/90 transition-colors hover:text-primary sm:text-[0.9375rem]",
        active && "bg-primary/[0.06] font-semibold text-primary"
      )}
    >
      {children}
      <ChevronRight className="size-3.5 opacity-90" aria-hidden />
    </Link>
  );
}

function MobileSheetNav({ navItems }: { navItems: readonly NavItem[] }) {
  const pathname = usePathname();
  const { address, email, phoneTel, phoneDisplay, name, tagline } = siteConfig;
  const addressLine = `${address.street}, ${address.postal}, ${address.city}`;

  return (
    <>
      <SheetClose asChild>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Menu sluiten"
          className="absolute top-[max(0.65rem,env(safe-area-inset-top))] right-[max(0.65rem,env(safe-area-inset-right))] z-20 size-11 rounded-full border-border/60 bg-card/95 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.18)] backdrop-blur-sm sm:size-10"
        >
          <X className="size-5" aria-hidden />
        </Button>
      </SheetClose>

      <div className="flex min-h-0 flex-1 flex-col">
        <div className="relative shrink-0 overflow-hidden border-b border-border/50 px-4 pb-5 pt-[max(3.25rem,calc(env(safe-area-inset-top)+2.5rem))] pr-16 sm:px-5 sm:pb-6">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-primary/[0.02]"
            aria-hidden
          />
          <div className="relative flex items-center gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-border/45 bg-card shadow-sm sm:size-14">
              <MenuIcon className="size-6 text-primary sm:size-7" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <SheetTitle className="font-heading text-left text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Menu
              </SheetTitle>
              <p className="mt-0.5 text-pretty text-sm text-muted-foreground sm:text-[0.9375rem]">
                {name}
              </p>
            </div>
          </div>
          <p className="relative mt-3 max-w-[22rem] text-pretty text-sm leading-snug text-muted-foreground">
            {tagline}
          </p>
        </div>

        <nav
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4 sm:px-4 sm:py-5"
          aria-label="Mobiel menu"
        >
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {navItems.map((item) => {
              const TopIcon = getNavTopIcon(item.href);
              const isBranchActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              const childActive = item.children?.some(
                (c) => pathname === c.href || pathname.startsWith(`${c.href}/`)
              );
              const active = isBranchActive || Boolean(childActive);

              return (
                <div
                  key={item.href}
                  className="overflow-hidden rounded-2xl border border-border/50 bg-card shadow-[0_8px_28px_-14px_rgba(15,23,42,0.14)] ring-1 ring-black/[0.03]"
                >
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      data-active={active ? "" : undefined}
                      className={cn(
                        "flex items-center gap-3 px-3 py-3.5 transition-colors sm:gap-3.5 sm:px-4 sm:py-4",
                        "hover:bg-muted/50 active:bg-muted/60",
                        active && "bg-muted/35"
                      )}
                    >
                      <span
                        className={cn(
                          "flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/[0.14] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:size-11",
                          active && "bg-primary/[0.2]"
                        )}
                        aria-hidden
                      >
                        <TopIcon className="size-[1.125rem] stroke-[1.85] sm:size-5" />
                      </span>
                      <span
                        className={cn(
                          "min-w-0 flex-1 font-heading text-[0.9375rem] font-semibold tracking-tight text-foreground sm:text-base",
                          active &&
                            "underline decoration-primary decoration-2 underline-offset-[5px]"
                        )}
                      >
                        {item.label}
                      </span>
                      <ChevronRight
                        className="size-4 shrink-0 text-muted-foreground/70 sm:size-[1.125rem]"
                        aria-hidden
                      />
                    </Link>
                  </SheetClose>

                  {item.children?.length ? (
                    <div className="border-t border-border/45 bg-muted/20 px-2 py-2 sm:px-2.5 sm:py-2.5">
                      <ul
                        className={cn(
                          "flex max-h-[min(46vh,19rem)] flex-col gap-0.5 overflow-y-auto overscroll-contain rounded-xl sm:max-h-[min(50vh,24rem)]"
                        )}
                      >
                        {item.children.map((sub) => {
                          const subActive =
                            pathname === sub.href || pathname.startsWith(`${sub.href}/`);
                          const isInschrijven = sub.href === "/inschrijven";
                          const SubIcon = getNavChildIcon(sub.href);
                          return (
                            <li key={sub.href}>
                              <SheetClose asChild>
                                <Link
                                  href={sub.href}
                                  data-active={subActive ? "" : undefined}
                                  className={cn(
                                    "flex items-center gap-2.5 rounded-lg px-2 py-2.5 text-sm transition-colors sm:gap-3 sm:px-2.5 sm:py-3 sm:text-[0.9375rem]",
                                    "hover:bg-card/90",
                                    subActive && "bg-card/80 font-semibold text-foreground",
                                    !subActive &&
                                      (isInschrijven
                                        ? "font-medium text-primary hover:text-primary/90"
                                        : "text-muted-foreground hover:text-foreground")
                                  )}
                                >
                                  <span
                                    className={cn(
                                      "flex size-8 shrink-0 items-center justify-center rounded-full sm:size-9",
                                      isInschrijven
                                        ? "bg-primary/15 text-primary"
                                        : "bg-primary/[0.1] text-primary/90"
                                    )}
                                    aria-hidden
                                  >
                                    <SubIcon className="size-3.5 stroke-[1.85] sm:size-4" />
                                  </span>
                                  <span className="min-w-0 flex-1 leading-snug">{sub.label}</span>
                                  <ChevronRight className="size-3.5 shrink-0 opacity-50" aria-hidden />
                                </Link>
                              </SheetClose>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </nav>

        <div className="shrink-0 space-y-3 border-t border-border/50 bg-gradient-to-t from-muted/25 to-card px-3 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:space-y-3.5 sm:px-4 sm:py-5">
          <SheetClose asChild>
            <Button
              asChild
              className="h-12 w-full gap-2 rounded-xl text-base font-semibold shadow-sm sm:h-12 sm:text-[1.0625rem]"
            >
              <a href={`tel:${phoneTel}`}>
                <Phone className="size-[1.125rem] sm:size-5" aria-hidden />
                Bel {phoneDisplay}
              </a>
            </Button>
          </SheetClose>
          <div className="flex flex-col gap-2.5 text-sm sm:text-[0.9375rem]">
            <SheetClose asChild>
              <a
                href={`mailto:${email}`}
                className="flex items-start gap-2.5 rounded-xl border border-border/50 bg-card/80 px-3 py-2.5 text-foreground transition-colors hover:border-primary/35 hover:bg-card sm:px-3.5 sm:py-3"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-primary sm:size-[1.125rem]" aria-hidden />
                <span className="min-w-0 break-all font-medium leading-snug">{email}</span>
              </a>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/contact"
                className="flex items-start gap-2.5 rounded-xl border border-border/50 bg-card/80 px-3 py-2.5 text-muted-foreground transition-colors hover:border-primary/35 hover:bg-card hover:text-foreground sm:px-3.5 sm:py-3"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary sm:size-[1.125rem]" aria-hidden />
                <span className="min-w-0 leading-snug">{addressLine}</span>
              </Link>
            </SheetClose>
          </div>
        </div>
      </div>
    </>
  );
}

export function SiteHeader({ navItems }: { navItems: readonly NavItem[] }) {
  const openingStatus = useAmsterdamOpeningStatus();
  const { address } = siteConfig;
  const addressLine = `${address.street}, ${address.postal}, ${address.city}`;

  const navRight = HEADER_RIGHT_HREFS.map((href) =>
    navItems.find((n) => n.href === href)
  ).filter(Boolean) as NavItem[];

  const navLeft = navItems.filter(
    (n) => !(HEADER_RIGHT_HREFS as readonly string[]).includes(n.href)
  );

  return (
    <>
      {/* Mobiel / tablet: compacte balk */}
      <header className="sticky top-0 z-40 lg:hidden pt-[env(safe-area-inset-top,0px)]">
        <div className="mx-auto max-w-screen-2xl px-gutter pb-2.5 pt-1 sm:pb-3 sm:pt-1.5">
          <div className="flex items-start justify-between gap-2 rounded-2xl border border-border/50 bg-card/92 px-3 py-2 shadow-[0_12px_40px_-14px_rgba(15,23,42,0.16)] ring-1 ring-black/[0.04] backdrop-blur-md supports-backdrop-filter:bg-card/88 sm:gap-3 sm:rounded-[1.35rem] sm:px-4 sm:py-2.5">
            <div className="min-w-0 flex-1">
              <BrandLogo
                variant="mobile"
                linkClassName="inline-flex min-w-0 max-w-full"
              />
              <MobileHeaderOpeningLine status={openingStatus} />
            </div>
            <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="hidden h-10 rounded-xl border-border/60 px-3 font-medium shadow-sm sm:inline-flex md:px-4"
              >
                <a href={`tel:${siteConfig.phoneTel}`}>{siteConfig.phoneDisplay}</a>
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="Menu openen"
                    className="size-11 shrink-0 rounded-xl border-border/60 bg-card shadow-sm sm:size-10"
                  >
                    <MenuIcon className="size-5" aria-hidden />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  showCloseButton={false}
                  className="flex min-h-0 w-[min(100%,23.5rem)] max-w-none flex-col gap-0 border-l border-border/50 bg-card p-0 shadow-[0_24px_60px_-12px_rgba(15,23,42,0.28)] ring-1 ring-black/[0.05] data-[side=right]:sm:w-[min(100%,28rem)]"
                >
                  <SheetDescription className="sr-only">
                    Hoofdnavigatie en contact van {siteConfig.name}
                  </SheetDescription>
                  <MobileSheetNav navItems={navItems} />
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop: zwevende kaart zoals referentie, met primary (groen/teal) i.p.v. bordeaux */}
      <header className="fixed top-0 right-0 left-0 z-40 hidden pt-5 pb-2.5 lg:block">
        <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-visible rounded-2xl border border-border/70 bg-card shadow-[0_12px_40px_-12px_rgba(15,23,42,0.18)] ring-1 ring-foreground/5">
            <HeaderLogoLink />
            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-tr-2xl border-b border-border/60 bg-white px-4 py-3.5 sm:px-5 sm:py-4">
                <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-2 text-[0.9375rem] leading-snug text-foreground/90 sm:text-base">
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary"
                  >
                    <Phone className="size-[1.125rem] shrink-0 text-primary" aria-hidden />
                    {siteConfig.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 font-medium text-foreground hover:text-primary"
                  >
                    <Mail className="size-[1.125rem] shrink-0 text-primary" aria-hidden />
                    {siteConfig.email}
                  </a>
                  <span className="inline-flex min-w-0 items-start gap-1.5">
                    <MapPin
                      className="mt-0.5 size-[1.125rem] shrink-0 text-primary"
                      aria-hidden
                    />
                    <span className="min-w-0 leading-snug">{addressLine}</span>
                  </span>
                </div>
                <HeaderOpeningLine status={openingStatus} />
              </div>

              <div className="flex min-h-[3.15rem] flex-wrap items-stretch rounded-br-2xl border-t border-primary/10 bg-gradient-to-r from-white via-[color-mix(in_oklab,var(--color-primary)_6%,white)] to-[color-mix(in_oklab,var(--color-primary)_14%,white)] sm:min-h-[3.35rem] sm:flex-nowrap">
                <nav
                  className="flex min-w-0 flex-1 flex-wrap items-center gap-0 sm:flex-nowrap"
                  aria-label="Hoofdnavigatie"
                >
                  {navLeft.map((item, index) =>
                    item.children?.length ? (
                      <DesktopNavSplitDropdown
                        key={item.href}
                        item={item}
                        withDivider={index > 0}
                      />
                    ) : (
                      <DesktopRowLink
                        key={item.href}
                        href={item.href}
                        withDivider={index > 0}
                      >
                        {item.label}
                      </DesktopRowLink>
                    )
                  )}
                </nav>
                <nav
                  className="flex flex-wrap items-center sm:flex-nowrap"
                  aria-label="Snel naar"
                >
                  {navRight.map((item) => (
                    <DesktopRightLink key={item.href} href={item.href}>
                      {item.label}
                    </DesktopRightLink>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
