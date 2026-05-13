/** Logo zonder witte achtergrond (`public/logo/`). */
const LOGO_REMOVEBG_SRC = "/logo/logotzuidbroek-removebg-preview.png" as const;

export const siteConfig = {
  name: "Tandartspraktijk Zuidbroek",
  /** Header: zelfde remove-bg logo als elders. */
  logoSrc: LOGO_REMOVEBG_SRC,
  /** Footer (zelfde bron als `logoSrc`). */
  logoFooterSrc: LOGO_REMOVEBG_SRC,
  tagline: "Tandzorg voor het hele gezin in Apeldoorn.",
  phoneDisplay: "055 301 3488",
  phoneTel: "+31553013488",
  email: "info@tandartszuidbroek.nl",
  address: {
    street: "Distelvlinderlaan 44",
    postal: "7323 XA",
    city: "Apeldoorn",
  },
  /**
   * Optioneel: volledige iframe-src van Google Maps (Profiel → Delen → Kaart insluiten).
   * Laat leeg: de homepage bouwt automatisch een embed op basis van het adres.
   */
  googleMapsEmbedSrc: null as string | null,
  openingHours: "Maandag t/m vrijdag 08:00–17:00",
  /** Telefonisch bereikbaar (aanvullend op praktijkuren). */
  phoneHours:
    "Telefonisch: ma–do 08:00–12:30 en 13:15–16:00, vrijdag 08:00–12:30",
  /** Google Zoeken → lokale reviews (opent in nieuw tabblad). */
  googleReviewsUrl:
    "https://www.google.com/search?sa=X&sca_esv=89f358ba4e2fcd04&hl=en-NL&sxsrf=ANbL-n7jFYJ2F9a2PxhYTd9uHzN5yum_UA:1778546807264&q=Tandartspraktijk+Zuidbroek+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2Nja2MDU3t7CwMDA0NDawMLcw3cDI-IpRKSQxLyWxqKS4oCgxuyQzK1shqjQzJakoPzVbISi1LDO1vHgRKxGKAJVd5ERkAAAA&rldimm=3338577888011308785&tbm=lcl&ved=2ahUKEwjoh6eVw7KUAxXd9LsIHRpHISEQ9fQKegQIRRAG&biw=1536&bih=730&dpr=1.25#lkt=LocalPoiReviews",
  /** Subtiele footer­credit (ontwerp). Zet `url` op een string om te linken. */
  designStudio: { name: "BeriQon", url: null as string | null },
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: readonly { label: string; href: string }[];
};

export const mainNav: readonly NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Onze praktijk",
    href: "/onze-praktijk",
    children: [
      { label: "Huisregels", href: "/onze-praktijk/huisregels" },
      { label: "Team", href: "/onze-praktijk/team" },
      {
        label: "Kwaliteit & klachten",
        href: "/onze-praktijk/kwaliteit-en-klachten",
      },
      { label: "Vacatures", href: "/onze-praktijk/vacatures" },
      { label: "Inschrijven", href: "/inschrijven" },
    ],
  },
  { label: "Behandelingen", href: "/behandelingen" },
  { label: "Spoeddienst", href: "/spoed" },
  { label: "Inschrijven", href: "/inschrijven" },
  { label: "Contact", href: "/contact" },
] as const;
