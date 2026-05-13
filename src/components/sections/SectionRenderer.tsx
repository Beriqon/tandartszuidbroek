import { CtaBand } from "@/components/sections/CtaBand";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Hero } from "@/components/sections/Hero";
import { RichText } from "@/components/sections/RichText";
import { TeamStrip } from "@/components/sections/TeamStrip";
import { TreatmentGrid } from "@/components/sections/TreatmentGrid";
import type { PageSection } from "@/lib/sanity/types";

type SectionRendererProps = {
  sections?: PageSection[] | null;
  /** Alleen home: eerste CMS-hero moet onder het vaste lg-menu door kunnen lopen */
  firstHeroClearsFixedHeader?: boolean;
};

/**
 * Render an array of CMS-driven page sections in document order.
 * Unknown _type values are silently skipped so editors can add new
 * section types in Sanity before the front-end ships support.
 */
export function SectionRenderer({
  sections,
  firstHeroClearsFixedHeader,
}: SectionRendererProps) {
  if (!sections?.length) return null;

  return (
    <>
      {sections.map((section, index) => {
        switch (section._type) {
          case "heroSection":
            return (
              <Hero
                key={section._key}
                {...section}
                className={
                  firstHeroClearsFixedHeader && index === 0
                    ? "lg:pt-[var(--site-header-desktop-stack)]"
                    : undefined
                }
              />
            );
          case "richTextSection":
            return <RichText key={section._key} {...section} />;
          case "treatmentGridSection":
            return <TreatmentGrid key={section._key} {...section} />;
          case "teamSection":
            return <TeamStrip key={section._key} {...section} />;
          case "faqSection":
            return <FaqAccordion key={section._key} {...section} />;
          case "ctaBandSection":
            return <CtaBand key={section._key} {...section} />;
          default:
            return null;
        }
      })}
    </>
  );
}
