import type { Metadata } from "next";

import { imageSrc } from "@/lib/sanity/image";
import type { PageDocument, SiteSettings } from "@/lib/sanity/types";
import { siteConfig } from "@/lib/site-config";

type BuildArgs = {
  pathname: string;
  page?: PageDocument | null;
  settings?: SiteSettings | null;
  fallbackTitle: string;
  fallbackDescription?: string;
};

export function buildPageMetadata({
  pathname,
  page,
  settings,
  fallbackTitle,
  fallbackDescription,
}: BuildArgs): Metadata {
  const seo = page?.seo;
  const title =
    seo?.metaTitle ?? page?.title ?? settings?.defaultSeo?.metaTitle ?? fallbackTitle;
  const description =
    seo?.metaDescription ??
    settings?.defaultSeo?.metaDescription ??
    settings?.tagline ??
    fallbackDescription;

  const share = seo?.shareImage ?? settings?.defaultSeo?.shareImage;
  const ogUrl = imageSrc(share, { width: 1200, height: 630, fit: "crop" });

  return {
    title,
    description: description ?? undefined,
    alternates: { canonical: pathname },
    openGraph: {
      title,
      description: description ?? undefined,
      url: pathname,
      ...(ogUrl ? { images: [{ url: ogUrl, width: 1200, height: 630 }] } : {}),
    },
  };
}

export function treatmentListMetadata(settings: SiteSettings | null): Metadata {
  return buildPageMetadata({
    pathname: "/behandelingen",
    settings,
    fallbackTitle: "Behandelingen",
    fallbackDescription: `Behandelingen bij ${siteConfig.name} in ${siteConfig.address.city}.`,
  });
}

export function treatmentDetailMetadata(
  treatment: { title?: string; excerpt?: string; slug?: string } | null,
  settings: SiteSettings | null,
): Metadata {
  const title = treatment?.title ?? "Behandeling";
  const description = treatment?.excerpt ?? settings?.tagline ?? undefined;
  const slug = treatment?.slug;
  return buildPageMetadata({
    pathname: slug ? `/behandelingen/${slug}` : "/behandelingen",
    settings,
    fallbackTitle: title,
    fallbackDescription: description,
  });
}
