import { defineQuery } from "next-sanity";

/** Singleton site-instellingen (eerste document van dit type). */
export const siteSettingsQuery = defineQuery(`
  *[_type == "siteSettings"][0]{
    _id,
    siteName,
    tagline,
    address,
    phone,
    email,
    openingHours,
    publicTransport,
    emergencyIntro,
    socialLinks,
    defaultSeo
  }
`);

/** Pagina op slug met uitgelopen referenties in modulaire secties. */
export const pageBySlugQuery = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    seo,
    sections[]{
      _key,
      _type,
      ...,
      "treatments": treatments[]->{
        _id,
        title,
        "slug": slug.current,
        excerpt,
        order
      },
      "members": members[]->{
        _id,
        name,
        role,
        bio,
        photo,
        order
      },
      "items": items[]->{
        _id,
        question,
        answer,
        category,
        order
      }
    }
  }
`);

export const allPageSlugsQuery = defineQuery(`
  *[_type == "page" && defined(slug.current)]{"slug": slug.current}
`);

export const treatmentBySlugQuery = defineQuery(`
  *[_type == "treatment" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    order
  }
`);

export const allTreatmentSlugsQuery = defineQuery(`
  *[_type == "treatment" && defined(slug.current)]{"slug": slug.current}
`);

export const treatmentsListQuery = defineQuery(`
  *[_type == "treatment"] | order(order asc, title asc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    order
  }
`);

export const teamMembersQuery = defineQuery(`
  *[_type == "teamMember"] | order(order asc, name asc) {
    _id,
    name,
    role,
    bio,
    photo,
    order
  }
`);

export const faqItemsQuery = defineQuery(`
  *[_type == "faqItem"] | order(order asc, question asc) {
    _id,
    question,
    answer,
    category,
    order
  }
`);
