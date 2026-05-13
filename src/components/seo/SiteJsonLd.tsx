import { getSiteSettings, sanityReady } from "@/lib/sanity/fetch";
import { siteConfig } from "@/lib/site-config";

function openingHoursFromSettings(
  rows: NonNullable<Awaited<ReturnType<typeof getSiteSettings>>>["openingHours"],
): unknown[] {
  if (!rows?.length) return [];
  return rows
    .map((row) => {
      const text = [row.label, row.hours].filter(Boolean).join(" ");
      if (!text.trim()) return null;
      return {
        "@type": "OpeningHoursSpecification",
        description: text,
      };
    })
    .filter(Boolean);
}

export async function SiteJsonLd() {
  const ready = sanityReady();
  const settings = ready ? await getSiteSettings() : null;

  const street =
    settings?.address?.street ?? siteConfig.address.street;
  const postal =
    settings?.address?.postalCode ?? siteConfig.address.postal;
  const city = settings?.address?.city ?? siteConfig.address.city;
  const name = settings?.siteName ?? siteConfig.name;
  const phone = settings?.phone ?? siteConfig.phoneDisplay;
  const email = settings?.email ?? siteConfig.email;

  const hours = openingHoursFromSettings(settings?.openingHours);
  const payload = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
    name,
    description:
      settings?.defaultSeo?.metaDescription ??
      settings?.tagline ??
      siteConfig.tagline,
    url: "https://tandartszuidbroek.nl",
    telephone: phone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      postalCode: postal,
      addressLocality: city,
      addressCountry: "NL",
    },
    ...(hours.length ? { openingHoursSpecification: hours } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
