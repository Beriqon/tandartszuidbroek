import type { PortableTextBlock } from "@portabletext/types";

export type SanitySlug = { current?: string };

export type SanityImage = {
  _type?: "image";
  asset?: { _ref: string; _type?: "reference" };
  hotspot?: { x: number; y: number };
  crop?: { top: number; bottom: number; left: number; right: number };
};

export type Link = { _type?: "link"; label?: string; href?: string };

export type SeoFields = {
  metaTitle?: string;
  metaDescription?: string;
  shareImage?: SanityImage;
};

export type SiteSettings = {
  _id: string;
  siteName?: string;
  tagline?: string;
  address?: { street?: string; postalCode?: string; city?: string };
  phone?: string;
  email?: string;
  openingHours?: Array<{ label?: string; hours?: string }>;
  publicTransport?: string;
  emergencyIntro?: string;
  socialLinks?: Array<{ label?: string; url?: string }>;
  defaultSeo?: SeoFields;
};

export type TreatmentSummary = {
  _id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  order?: number;
};

export type TeamMember = {
  _id: string;
  name?: string;
  role?: string;
  bio?: PortableTextBlock[];
  photo?: SanityImage;
  order?: number;
};

export type FaqItem = {
  _id: string;
  question?: string;
  answer?: PortableTextBlock[];
  category?: string;
  order?: number;
};

export type PageSection =
  | {
      _key: string;
      _type: "heroSection";
      eyebrow?: string;
      heading?: string;
      subheading?: string;
      image?: SanityImage;
      /** Lokale of gehoste afbeelding-URL (niet uit Sanity); overschrijft `image`. */
      staticImageSrc?: string;
      staticImageAlt?: string;
      primaryCta?: Link;
      secondaryCta?: Link;
    }
  | {
      _key: string;
      _type: "richTextSection";
      title?: string;
      content?: PortableTextBlock[];
    }
  | {
      _key: string;
      _type: "treatmentGridSection";
      title?: string;
      intro?: string;
      treatments?: TreatmentSummary[];
    }
  | {
      _key: string;
      _type: "teamSection";
      title?: string;
      intro?: string;
      members?: TeamMember[];
    }
  | {
      _key: string;
      _type: "faqSection";
      title?: string;
      items?: FaqItem[];
    }
  | {
      _key: string;
      _type: "ctaBandSection";
      heading?: string;
      body?: string;
      button?: Link;
    };

export type PageDocument = {
  _id: string;
  title?: string;
  slug?: string;
  seo?: SeoFields;
  sections?: PageSection[];
};

export type TreatmentDetail = {
  _id: string;
  title?: string;
  slug?: string;
  excerpt?: string;
  body?: PortableTextBlock[];
  order?: number;
};
