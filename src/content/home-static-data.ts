import type { PageSection } from "@/lib/sanity/types";
import { siteConfig } from "@/lib/site-config";

export const trustPillars = [
  {
    title: "Rust & tempo",
    body: "Geen haastwerk: we plannen bewust en houden ruimte voor uw vragen.",
  },
  {
    title: "Preventie eerst",
    body: "Samen werken we aan gezond tandvlees en een sterk gebit voor later.",
  },
  {
    title: "Kinderen welkom",
    body: "Wennen in kleine stappen — een praktijk die vertrouwd voelt.",
  },
  {
    title: "Duidelijke uitleg",
    body: "Heldere keuzes: wat we doen, waarom het helpt, en wat u zelf kunt doen.",
  },
] as const;

export const homePrimaryCta = {
  _key: "home-cta-inschrijven",
  _type: "ctaBandSection" as const,
  heading: "Wilt u patiënt worden?",
  body: `Vraag een inschrijving aan of bel ${siteConfig.phoneDisplay}. We plannen graag een eerste kennismaking.`,
  button: { label: "Inschrijven", href: "/inschrijven" },
} satisfies Extract<PageSection, { _type: "ctaBandSection" }>;
