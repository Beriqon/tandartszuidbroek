export const SANITY_REVALIDATE_SECONDS = 60;

export const sanityEnv = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01" as const,
};

export function isSanityConfigured(): boolean {
  return Boolean(sanityEnv.projectId);
}
