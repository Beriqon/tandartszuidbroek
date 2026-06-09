import type { PageSection } from "@/lib/sanity/types";
import { siteConfig } from "@/lib/site-config";

export const trustPillars = [
  {
    title: "Kwaliteit & zorg",
    body: "Geregistreerd in het Kwaliteitsregister Tandartsen (KRT) — vakmanschap met persoonlijke aandacht.",
  },
  {
    title: "Specialisaties",
    body: "Implantologie, endodontologie en meer — ervaren professionals voor complexe behandelingen.",
  },
  {
    title: "Gewoon Gaaf",
    body: "Preventieprogramma voor kinderen en jongeren van 0 tot 18 jaar — gezond gebit van jongs af aan.",
  },
  {
    title: "Holistische aanpak",
    body: "Uw gebit als weerslag van uw gezondheid — we kijken naar het totaalplaatje.",
  },
] as const;

export const homePrimaryCta = {
  _key: "home-cta-inschrijven",
  _type: "ctaBandSection" as const,
  heading: "Wilt u patiënt worden?",
  body: `Vraag een inschrijving aan of bel ${siteConfig.phoneDisplay}. We plannen graag een eerste kennismaking.`,
  button: { label: "Inschrijven", href: "/inschrijven" },
} satisfies Extract<PageSection, { _type: "ctaBandSection" }>;
