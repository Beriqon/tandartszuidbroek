import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import { sanityEnv } from "./env";
import type { SanityImage } from "./types";

const builder = sanityEnv.projectId
  ? createImageUrlBuilder({
      projectId: sanityEnv.projectId,
      dataset: sanityEnv.dataset,
    })
  : null;

export function urlForImage(source: SanityImageSource) {
  if (!builder) return null;
  return builder.image(source);
}

/**
 * Extract intrinsic dimensions from a Sanity image asset _ref like
 * `image-<hash>-1200x800-jpg`. Returns null if the ref is missing
 * or unrecognised, so callers can fall back to `fill`.
 */
export function imageDimensions(
  image?: SanityImage | null,
): { width: number; height: number } | null {
  const ref = image?.asset?._ref;
  if (!ref) return null;
  const match = /-(\d+)x(\d+)-[^-]+$/.exec(ref);
  if (!match) return null;
  const width = Number(match[1]);
  const height = Number(match[2]);
  if (!Number.isFinite(width) || !Number.isFinite(height)) return null;
  return { width, height };
}

type ImageSrcParams = {
  width?: number;
  height?: number;
  /** crop fit, defaults to undefined (no fit forced) */
  fit?: "crop" | "max" | "fill";
};

/** Build an optimised CDN URL for a Sanity image. Returns null when Sanity is not configured. */
export function imageSrc(
  image?: SanityImage | null,
  params: ImageSrcParams = {},
): string | null {
  if (!image) return null;
  let b = urlForImage(image as SanityImageSource);
  if (!b) return null;
  if (params.width) b = b.width(params.width);
  if (params.height) b = b.height(params.height);
  if (params.fit) b = b.fit(params.fit);
  return b.auto("format").url();
}
