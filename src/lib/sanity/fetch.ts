import { SANITY_REVALIDATE_SECONDS, isSanityConfigured } from "./env";
import { getSanityClient } from "./client";
import {
  allPageSlugsQuery,
  allTreatmentSlugsQuery,
  faqItemsQuery,
  pageBySlugQuery,
  siteSettingsQuery,
  teamMembersQuery,
  treatmentBySlugQuery,
  treatmentsListQuery,
} from "./queries";
import type {
  FaqItem,
  PageDocument,
  SiteSettings,
  TeamMember,
  TreatmentDetail,
  TreatmentSummary,
} from "./types";

const nextFetch = {
  revalidate: SANITY_REVALIDATE_SECONDS,
  tags: ["sanity"],
} as const;

function pageTags(slug: string) {
  return ["sanity", `page:${slug}`] as const;
}

function treatmentTags(slug: string) {
  return ["sanity", `treatment:${slug}`] as const;
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const client = getSanityClient();
  if (!client) return null;
  return client.fetch(
    siteSettingsQuery,
    {},
    { next: { ...nextFetch, tags: [...nextFetch.tags, "siteSettings"] } },
  );
}

export async function getPageBySlug(slug: string): Promise<PageDocument | null> {
  const client = getSanityClient();
  if (!client) return null;
  return client.fetch(pageBySlugQuery, { slug }, { next: { ...nextFetch, tags: [...pageTags(slug)] } });
}

/** Probeer opeenvolgende slug-varianten (bijv. `onze-praktijk/foo` vs `onze-praktijk-foo`). */
export async function getPageBySlugFirstMatch(
  candidates: readonly string[],
): Promise<PageDocument | null> {
  for (const slug of candidates) {
    const page = await getPageBySlug(slug);
    if (page) return page;
  }
  return null;
}

export async function getAllPageSlugs(): Promise<string[]> {
  const client = getSanityClient();
  if (!client) return [];
  const rows = await client.fetch<Array<{ slug?: string }>>(
    allPageSlugsQuery,
    {},
    { next: { ...nextFetch, tags: ["sanity", "pages:index"] } },
  );
  return rows.map((r) => r.slug).filter((s): s is string => Boolean(s));
}

export async function getTreatmentBySlug(slug: string): Promise<TreatmentDetail | null> {
  const client = getSanityClient();
  if (!client) return null;
  return client.fetch(treatmentBySlugQuery, { slug }, { next: { ...nextFetch, tags: [...treatmentTags(slug)] } });
}

export async function getAllTreatmentSlugs(): Promise<string[]> {
  const client = getSanityClient();
  if (!client) return [];
  const rows = await client.fetch<Array<{ slug?: string }>>(
    allTreatmentSlugsQuery,
    {},
    { next: { ...nextFetch, tags: ["sanity", "treatments:index"] } },
  );
  return rows.map((r) => r.slug).filter((s): s is string => Boolean(s));
}

export async function getTreatmentsList(): Promise<TreatmentSummary[]> {
  const client = getSanityClient();
  if (!client) return [];
  return client.fetch(treatmentsListQuery, {}, { next: { ...nextFetch, tags: ["sanity", "treatments:list"] } });
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  const client = getSanityClient();
  if (!client) return [];
  return client.fetch(teamMembersQuery, {}, { next: { ...nextFetch, tags: ["sanity", "team:list"] } });
}

export async function getFaqItems(): Promise<FaqItem[]> {
  const client = getSanityClient();
  if (!client) return [];
  return client.fetch(faqItemsQuery, {}, { next: { ...nextFetch, tags: ["sanity", "faq:list"] } });
}

export function sanityReady(): boolean {
  return isSanityConfigured();
}
