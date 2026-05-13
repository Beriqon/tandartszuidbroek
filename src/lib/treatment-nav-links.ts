import { demoTreatmentSummaries } from "@/content/demo-treatments";
import { getTreatmentsList, sanityReady } from "@/lib/sanity/fetch";

export type TreatmentNavLink = { readonly label: string; readonly href: string };

export async function getTreatmentNavLinks(): Promise<TreatmentNavLink[]> {
  if (sanityReady()) {
    const list = await getTreatmentsList();
    if (list.length) {
      return [...list]
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
        .map((t) => ({
          label: t.title ?? "Behandeling",
          href: `/behandelingen/${t.slug ?? t._id}`,
        }));
    }
  }
  return demoTreatmentSummaries
    .slice()
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .map((t) => ({
      label: t.title ?? "Behandeling",
      href: `/behandelingen/${t.slug ?? t._id}`,
    }));
}
