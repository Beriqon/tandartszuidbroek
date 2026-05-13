import { createClient, type SanityClient } from "next-sanity";

import { sanityEnv } from "./env";

let cachedClient: SanityClient | null = null;

export function getSanityClient(): SanityClient | null {
  if (!sanityEnv.projectId) return null;
  if (!cachedClient) {
    cachedClient = createClient({
      projectId: sanityEnv.projectId,
      dataset: sanityEnv.dataset,
      apiVersion: sanityEnv.apiVersion,
      useCdn: process.env.NODE_ENV === "production",
    });
  }
  return cachedClient;
}
