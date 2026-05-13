import { siteConfig } from "@/lib/site-config";

/** Volledige adresregel voor zoeken / embeds. */
export function practiceAddressLine(): string {
  const { street, postal, city } = siteConfig.address;
  return `${street}, ${postal} ${city}, Nederland`;
}

/** Iframe `src` voor Google Maps (embed of aangepaste `googleMapsEmbedSrc`). */
export function googleMapsEmbedIframeSrc(): string {
  return (
    siteConfig.googleMapsEmbedSrc ??
    `https://maps.google.com/maps?q=${encodeURIComponent(practiceAddressLine())}&output=embed&hl=nl&z=16`
  );
}

/** “Route plannen” in Google Maps (extern). */
export function googleMapsDirectionsUrl(): string {
  const { street, postal, city } = siteConfig.address;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${street}, ${postal} ${city}`,
  )}`;
}

/** “Open in Google Maps” (zoek/place). */
export function googleMapsOpenPlaceUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(practiceAddressLine())}`;
}
