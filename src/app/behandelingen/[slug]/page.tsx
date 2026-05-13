import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TreatmentDetailPageView } from "@/components/behandelingen/TreatmentDetailPageView";
import { demoTreatmentSlugs, getDemoTreatmentBySlug } from "@/content/demo-treatments";
import { treatmentDetailMetadata } from "@/lib/build-page-metadata";
import { resolveTreatmentContent } from "@/lib/resolve-treatment-content";
import {
  getAllTreatmentSlugs,
  getSiteSettings,
  getTreatmentBySlug,
  sanityReady,
} from "@/lib/sanity/fetch";
import type { TreatmentDetail } from "@/lib/sanity/types";

export const revalidate = 60;

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const ready = sanityReady();
  if (ready) {
    const slugs = await getAllTreatmentSlugs();
    return slugs.map((slug) => ({ slug }));
  }
  return demoTreatmentSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const ready = sanityReady();
  const settings = ready ? await getSiteSettings() : null;
  const treatment = ready
    ? await getTreatmentBySlug(slug)
    : getDemoTreatmentBySlug(slug) ?? null;
  if (!treatment) return treatmentDetailMetadata(null, settings);
  const resolved = resolveTreatmentContent(slug, treatment);
  return treatmentDetailMetadata(
    { ...treatment, excerpt: resolved.excerpt || treatment.excerpt },
    settings,
  );
}

export default async function BehandelingDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const ready = sanityReady();
  let treatment: TreatmentDetail | null = null;

  if (ready) {
    treatment = await getTreatmentBySlug(slug);
    if (!treatment) notFound();
  } else {
    const demo = getDemoTreatmentBySlug(slug);
    if (!demo) notFound();
    treatment = demo;
  }

  const title = treatment.title ?? "Behandeling";
  const { excerpt, body } = resolveTreatmentContent(slug, treatment);

  return (
    <TreatmentDetailPageView slug={slug} title={title} excerpt={excerpt} body={body} />
  );
}
