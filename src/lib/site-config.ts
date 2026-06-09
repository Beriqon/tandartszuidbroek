/** Logo-icoon (`public/logo/`). */
const LOGO_ICON_SRC = "/logo/sanadens-icon.png" as const;

export type OpeningHoursRow = {
  label: string;
  slots: readonly string[];
};

export const openingHours: readonly OpeningHoursRow[] = [
  { label: "Ma–wo", slots: ["07:30–17:00", "18:00–21:00"] },
  { label: "Do", slots: ["07:30–17:00"] },
  { label: "Vr", slots: ["07:30–16:10"] },
] as const;

/** Eénregelige samenvatting (header-fallback, SEO). */
export function formatOpeningHoursSummary(
  rows: readonly OpeningHoursRow[] = openingHours,
): string {
  return rows
    .map(({ label, slots }) => `${label} ${slots.join(" & ")}`)
    .join("; ");
}

export const siteConfig = {
  url: "https://sanadens.nl",
  name: "Tandartspraktijk Sanadens",
  logoIconSrc: LOGO_ICON_SRC,
  brandTitle: "Sanadens",
  brandSubtitle: "praktijk voor tandheelkunde",
  logoSrc: LOGO_ICON_SRC,
  logoFooterSrc: LOGO_ICON_SRC,
  tagline: "Kwalitatieve tandzorg in Apeldoorn.",
  phoneDisplay: "055 366 4924",
  phoneTel: "+31553664924",
  email: "info@sanadens.nl",
  address: {
    street: "Pythagorasstraat 4",
    postal: "7323 HE",
    city: "Apeldoorn",
  },
  kvk: "08225663",
  krtNote:
    "Sanadens staat geregistreerd in het Kwaliteitsregister Tandartsen (KRT)",
  /**
   * Optioneel: volledige iframe-src van Google Maps (Profiel → Delen → Kaart insluiten).
   * Laat leeg: de homepage bouwt automatisch een embed op basis van het adres.
   */
  googleMapsEmbedSrc: null as string | null,
  openingHours,
  /** Telefonisch bereikbaar (aanvullend op praktijkuren). */
  phoneHours: "Tijdens kantooruren: bel de praktijk (055 366 4924)",
  /** Google → patiëntenreviews (opent in nieuw tabblad). */
  googleReviewsUrl:
    "https://www.google.com/search?q=Sanadens+Praktijk+Voor+Tandheelkunde+Reviews&rflfq=1&stick=H4sIAAAAAAAAAONgkxIxNDI2NzYzNjW2NLU0NrQ0MzE3s9jAyPiKUSc4MS8xJTWvWCGgKDG7JDMrWyEsP79IISQxLyUjNTUnuzQvJVUhKLUsM7W8eBErScoBHBWOyXkAAAA&rldimm=12373635395931964768&tbm=lcl&hl=nl#lkt=LocalPoiReviews",
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
