import type { PortableTextBlock } from "@portabletext/types";

import { getTreatmentFallback } from "@/content/treatment-detail-fallback";
import type { TreatmentDetail } from "@/lib/sanity/types";

function blockText(block: PortableTextBlock): string {
  if (block._type !== "block" || !("children" in block) || !Array.isArray(block.children)) {
    return "";
  }
  let acc = "";
  for (const child of block.children as Array<{ _type?: string; text?: string }>) {
    if (child?._type === "span" && typeof child.text === "string") {
      acc += child.text;
    }
  }
  return acc;
}

/** True als er geen body is, of alleen lege alinea’s / lege lijstitems. */
export function isPortableBodyEmpty(body?: PortableTextBlock[] | null): boolean {
  if (!body?.length) return true;
  for (const block of body) {
    if (blockText(block).trim()) return false;
  }
  return true;
}

export function resolveTreatmentContent(
  slug: string,
  treatment: TreatmentDetail,
): { excerpt: string; body: PortableTextBlock[] } {
  const fb = getTreatmentFallback(slug);
  const excerptFromCms = treatment.excerpt?.trim() ?? "";
  const excerpt = excerptFromCms || fb?.excerpt?.trim() || "";
  const body = isPortableBodyEmpty(treatment.body) ? (fb?.body ?? []) : (treatment.body ?? []);
  return { excerpt, body };
}
