import type { Metadata } from "next";

import { ContactPageLayout } from "@/components/contact/ContactPageLayout";
import { buildPageMetadata } from "@/lib/build-page-metadata";
import { getPageBySlug, getSiteSettings, sanityReady } from "@/lib/sanity/fetch";
import { siteConfig } from "@/lib/site-config";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const ready = sanityReady();
  const [settings, page] = await Promise.all([
    ready ? getSiteSettings() : Promise.resolve(null),
    ready ? getPageBySlug("contact") : Promise.resolve(null),
  ]);
  return buildPageMetadata({
    pathname: "/contact",
    page,
    settings,
    fallbackTitle: "Contact",
    fallbackDescription: `Bel ${siteConfig.phoneDisplay}, mail ${siteConfig.email} of bezoek ons in Apeldoorn. Route en contactformulier op deze pagina.`,
  });
}

export default function ContactPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ContactPageLayout />
    </main>
  );
}
