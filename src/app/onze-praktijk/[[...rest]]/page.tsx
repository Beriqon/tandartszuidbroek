import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HuisregelsStaticPage } from "@/components/onze-praktijk/HuisregelsStaticPage";
import { OnzePraktijkStaticPage } from "@/components/onze-praktijk/OnzePraktijkStaticPage";
import { KwaliteitKlachtenStaticPage } from "@/components/onze-praktijk/KwaliteitKlachtenStaticPage";
import { TeamStaticPage } from "@/components/onze-praktijk/TeamStaticPage";
import { VacaturesStaticPage } from "@/components/onze-praktijk/VacaturesStaticPage";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { CmsInnerPage } from "@/components/site/CmsInnerPage";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { onzePraktijkFallbackCopy } from "@/lib/inner-page-fallbacks";
import { onzePraktijkSlugCandidates } from "@/lib/onze-praktijk-slug";
import {
  getAllPageSlugs,
  getPageBySlugFirstMatch,
  getSiteSettings,
  sanityReady,
} from "@/lib/sanity/fetch";

export const revalidate = 60;

type PageProps = { params: Promise<{ rest?: string[] }> };

function pathnameFor(rest: string[] | undefined) {
  if (!rest?.length) return "/onze-praktijk";
  return `/onze-praktijk/${rest.join("/")}`;
}

export async function generateStaticParams() {
  const slugs = await getAllPageSlugs();
  const out: { rest?: string[] }[] = [];
  for (const s of slugs) {
    if (s === "onze-praktijk") {
      out.push({});
    } else if (s.startsWith("onze-praktijk/")) {
      const segments = s.slice("onze-praktijk/".length).split("/").filter(Boolean);
      if (segments.length) out.push({ rest: segments });
    }
  }
  /** Vaste subpagina’s met statische fallback (ook zonder Sanity-slug). */
  const staticRest: { rest: string[] }[] = [
    { rest: ["huisregels"] },
    { rest: ["team"] },
    { rest: ["kwaliteit-en-klachten"] },
    { rest: ["vacatures"] },
  ];
  const seen = new Set(out.map((p) => (p.rest?.join("/") ?? "")));
  for (const p of staticRest) {
    const key = p.rest.join("/");
    if (!seen.has(key)) {
      seen.add(key);
      out.push(p);
    }
  }
  return out;
}

const STATIC_FALLBACKS = {
  root: {
    title: "Onze praktijk",
    description:
      "Mondzorg met aandacht, rust en vakmanschap in Apeldoorn-Zuidbroek. Lees over onze visie, openingstijden, spoeddienst en hoe u zich kunt inschrijven.",
  },
  huisregels: {
    title: "Huisregels",
    description:
      "Onze huisregels — over afspraken, privacy, veiligheid, betalingen en meer. Zo zorgen we samen voor een plezierige en veilige praktijkomgeving.",
  },
  team: {
    title: "Team",
    description:
      "Maak kennis met ons team — tandartsen, mondhygiënisten en assistenten van Tandartspraktijk Zuidbroek in Apeldoorn.",
  },
  kwaliteitEnKlachten: {
    title: "Kwaliteit, klachten en geschillen",
    description:
      "Kwaliteitsgarantie, begrotingen, vaknormen en de ANT-klachtenregeling — transparante informatie van Tandartspraktijk Zuidbroek.",
  },
  vacatures: {
    title: "Vacatures",
    description:
      "Vacatures en solliciteren bij Tandartspraktijk Zuidbroek in Apeldoorn — werken in mondzorg met aandacht voor het hele gezin.",
  },
} as const;

function staticKey(rest: string[] | undefined): keyof typeof STATIC_FALLBACKS | null {
  if (!rest?.length) return "root";
  if (rest.length === 1 && rest[0] === "huisregels") return "huisregels";
  if (rest.length === 1 && rest[0] === "team") return "team";
  if (rest.length === 1 && rest[0] === "kwaliteit-en-klachten") return "kwaliteitEnKlachten";
  if (rest.length === 1 && rest[0] === "vacatures") return "vacatures";
  return null;
}

function renderStatic(key: keyof typeof STATIC_FALLBACKS) {
  if (key === "huisregels") return <HuisregelsStaticPage />;
  if (key === "team") return <TeamStaticPage />;
  if (key === "kwaliteitEnKlachten") return <KwaliteitKlachtenStaticPage />;
  if (key === "vacatures") return <VacaturesStaticPage />;
  return <OnzePraktijkStaticPage />;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { rest } = await params;
  const ready = sanityReady();
  const settings = ready ? await getSiteSettings() : null;
  const candidates = onzePraktijkSlugCandidates(rest);
  const page = ready ? await getPageBySlugFirstMatch(candidates) : null;
  const staticKind = staticKey(rest);
  const fb = onzePraktijkFallbackCopy(rest);
  return buildPageMetadata({
    pathname: pathnameFor(rest),
    page,
    settings,
    fallbackTitle: staticKind ? STATIC_FALLBACKS[staticKind].title : fb.title,
    fallbackDescription: staticKind
      ? STATIC_FALLBACKS[staticKind].description
      : fb.body.slice(0, 160),
  });
}

export default async function OnzePraktijkPage({ params }: PageProps) {
  const { rest } = await params;
  const ready = sanityReady();
  const candidates = onzePraktijkSlugCandidates(rest);
  const page = ready ? await getPageBySlugFirstMatch(candidates) : null;
  const staticKind = staticKey(rest);
  const fb = onzePraktijkFallbackCopy(rest);

  if (staticKind) {
    const cmsSections = page?.sections ?? [];
    const useCms = ready && cmsSections.length > 0;
    return (
      <main className="flex flex-1 flex-col">
        {useCms ? (
          <SectionRenderer sections={cmsSections} />
        ) : (
          renderStatic(staticKind)
        )}
      </main>
    );
  }

  if (ready && !page) {
    notFound();
  }

  const emptyMessage = !ready
    ? fb.body
    : page && !page.sections?.length
      ? "Voeg in Sanity secties toe aan deze pagina om inhoud te tonen."
      : undefined;

  return (
    <CmsInnerPage
      page={page}
      fallbackTitle={fb.title}
      emptyMessage={emptyMessage}
    />
  );
}
