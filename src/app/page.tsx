import type { Metadata } from "next";

import { HomeStaticPage } from "@/components/home/HomeStaticPage";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import {
  getPageBySlug,
  getSiteSettings,
  sanityReady,
} from "@/lib/sanity/fetch";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  if (!sanityReady()) {
    return {
      title: siteConfig.name,
      description:
        "Tandzorg voor het hele gezin in Apeldoorn-Zuidbroek: preventie, kindertandheelkunde en zorg op maat. Distelvlinderlaan 44.",
    };
  }
  const settings = await getSiteSettings();
  const title =
    settings?.defaultSeo?.metaTitle ??
    settings?.siteName ??
    siteConfig.name;
  const description =
    settings?.defaultSeo?.metaDescription ??
    settings?.tagline ??
    undefined;
  return { title, description };
}

export default async function Home() {
  const ready = sanityReady();
  const home = ready ? await getPageBySlug("home") : null;

  const cmsSections = home?.sections ?? [];
  const useCmsHome = ready && cmsSections.length > 0;
  const bleedHero =
    !useCmsHome || cmsSections[0]?._type === "heroSection";

  return (
    <main
      className="flex min-h-min flex-1 flex-col"
      {...(bleedHero ? { "data-bleed-hero": "" } : {})}
    >
      {useCmsHome ? (
        <SectionRenderer
          sections={cmsSections}
          firstHeroClearsFixedHeader={
            cmsSections[0]?._type === "heroSection"
          }
        />
      ) : (
        <HomeStaticPage />
      )}
    </main>
  );
}
