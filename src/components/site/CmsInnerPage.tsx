import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { ArticlePageHeader } from "@/components/site/ArticlePageHeader";
import type { PageDocument } from "@/lib/sanity/types";

type CmsInnerPageProps = {
  page: PageDocument | null;
  /** Titel wanneer er geen CMS-pagina is */
  fallbackTitle: string;
  fallbackDescription?: string;
  /** Tekst onder de kop wanneer er geen secties zijn (bijv. Sanity niet geconfigureerd) */
  emptyMessage?: string;
};

export function CmsInnerPage({
  page,
  fallbackTitle,
  fallbackDescription,
  emptyMessage,
}: CmsInnerPageProps) {
  const title = page?.title ?? fallbackTitle;
  const first = page?.sections?.[0];
  const hasHero = first?._type === "heroSection";
  const headerDescription = !hasHero
    ? (page?.seo?.metaDescription ?? fallbackDescription)
    : undefined;

  const hasSections = Boolean(page?.sections?.length);

  return (
    <div className="flex flex-1 flex-col">
      {!hasHero ? <ArticlePageHeader title={title} description={headerDescription} /> : null}
      {hasSections ? <SectionRenderer sections={page!.sections!} /> : null}
      {!hasSections && emptyMessage ? (
        <section className="py-section">
          <div className="mx-auto max-w-3xl px-gutter text-muted-foreground">
            <p className="leading-relaxed">{emptyMessage}</p>
          </div>
        </section>
      ) : null}
    </div>
  );
}
