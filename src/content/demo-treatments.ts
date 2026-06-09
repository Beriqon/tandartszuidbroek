import { getTreatmentFallback } from "@/content/treatment-detail-fallback";
import type { TreatmentDetail, TreatmentSummary } from "@/lib/sanity/types";

type DemoTreatment = TreatmentDetail & { slug: string };

const demoMeta = [
  { _id: "demo-periodieke-controle", slug: "periodieke-controle", title: "Periodieke controle", order: 1 },
  {
    _id: "demo-mondhygiene-preventie",
    slug: "mondhygiene-en-preventie",
    title: "Mondhygiëne en preventie",
    order: 2,
  },
  {
    _id: "demo-restauratief",
    slug: "restauratieve-tandheelkunde",
    title: "Restauratieve tandheelkunde",
    order: 3,
  },
  {
    _id: "demo-esthetisch",
    slug: "esthetische-tandheelkunde",
    title: "Esthetische tandheelkunde",
    order: 4,
  },
  { _id: "demo-bleken", slug: "tanden-bleken", title: "Tanden bleken", order: 5 },
  { _id: "demo-parodontologie", slug: "parodontologie", title: "Parodontologie", order: 6 },
  { _id: "demo-implantologie", slug: "implantologie", title: "Implantologie", order: 7 },
  { _id: "demo-endodontologie", slug: "endodontologie", title: "Endodontologie", order: 8 },
  {
    _id: "demo-frames-protheses",
    slug: "frames-en-protheses",
    title: "Frames en protheses",
    order: 9,
  },
  { _id: "demo-kronen-bruggen", slug: "kronen-en-bruggen", title: "Kronen en bruggen", order: 10 },
  { _id: "demo-chirurgie", slug: "chirurgie", title: "Chirurgie", order: 11 },
  { _id: "demo-gewoon-gaaf", slug: "gewoon-gaaf", title: "Gewoon Gaaf", order: 12 },
  {
    _id: "demo-clear-correct",
    slug: "clear-correct",
    title: "Clear Correct",
    order: 13,
  },
] as const;

const demo: DemoTreatment[] = demoMeta.map((m) => {
  const fb = getTreatmentFallback(m.slug);
  if (!fb) {
    throw new Error(`Ontbrekende fallback voor behandel-slug: ${m.slug}`);
  }
  return {
    _id: m._id,
    slug: m.slug,
    title: m.title,
    order: m.order,
    excerpt: fb.excerpt,
    body: fb.body,
  };
});

export const demoTreatmentSummaries: TreatmentSummary[] = demo.map((t) => ({
  _id: t._id,
  title: t.title,
  slug: t.slug,
  excerpt: t.excerpt,
  order: t.order,
}));

export const demoTreatmentSlugs = demo.map((t) => t.slug);

export function getDemoTreatmentBySlug(slug: string): DemoTreatment | undefined {
  return demo.find((t) => t.slug === slug);
}
