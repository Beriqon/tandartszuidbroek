import type { SchemaTypeDefinition } from "sanity";

import { faqItem } from "./faqItem";
import { ctaBandSection } from "./objects/ctaBandSection";
import { faqSection } from "./objects/faqSection";
import { heroSection } from "./objects/heroSection";
import { link } from "./objects/link";
import { richTextSection } from "./objects/richTextSection";
import { seo } from "./objects/seo";
import { teamSection } from "./objects/teamSection";
import { treatmentGridSection } from "./objects/treatmentGridSection";
import { page } from "./page";
import { siteSettings } from "./siteSettings";
import { teamMember } from "./teamMember";
import { treatment } from "./treatment";

export const schemaTypes: SchemaTypeDefinition[] = [
  link,
  seo,
  heroSection,
  richTextSection,
  treatmentGridSection,
  teamSection,
  faqSection,
  ctaBandSection,
  siteSettings,
  page,
  teamMember,
  treatment,
  faqItem,
];
