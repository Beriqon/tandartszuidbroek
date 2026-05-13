import type { Metadata } from "next";

import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { SpoeddienstStaticPage } from "@/components/spoed/SpoeddienstStaticPage";
import { ArticlePageHeader } from "@/components/site/ArticlePageHeader";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { getPageBySlug, getSiteSettings, sanityReady } from "@/lib/sanity/fetch";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const ready = sanityReady();
  const [settings, page] = await Promise.all([
    ready ? getSiteSettings() : Promise.resolve(null),
    ready ? getPageBySlug("spoed") : Promise.resolve(null),
  ]);
  return buildPageMetadata({
    pathname: "/spoed",
    page,
    settings,
    fallbackTitle: "Spoeddienst",
    fallbackDescription: `Pijnklachten: bel ${siteConfig.phoneDisplay} vóór 10.00 uur. Buiten openingstijden Dental365 (Deventer / Apeldoorn). Levensgevaar: 112.`,
  });
}

export default async function SpoedPage() {
  const ready = sanityReady();
  const page = ready ? await getPageBySlug("spoed") : null;
  const useCms = ready && Boolean(page?.sections?.length);
  const title = page?.title ?? "Spoeddienst";
  const first = page?.sections?.[0];
  const hasHero = first?._type === "heroSection";
  const headerDescription = !hasHero
    ? (page?.seo?.metaDescription ?? undefined)
    : undefined;

  return (
    <main className="flex flex-1 flex-col">
      {useCms ? (
        <>
          {!hasHero ? <ArticlePageHeader title={title} description={headerDescription} /> : null}
          <SectionRenderer sections={page!.sections!} />
        </>
      ) : (
        <SpoeddienstStaticPage />
      )}
    </main>
  );
}
