import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site-instellingen",
  type: "document",
  fields: [
    defineField({
      name: "siteName",
      title: "Praktijknaam",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({
      name: "address",
      title: "Adres",
      type: "object",
      fields: [
        defineField({ name: "street", title: "Straat en huisnummer", type: "string" }),
        defineField({ name: "postalCode", title: "Postcode", type: "string" }),
        defineField({ name: "city", title: "Plaats", type: "string" }),
      ],
    }),
    defineField({ name: "phone", title: "Telefoon", type: "string" }),
    defineField({ name: "email", title: "E-mail", type: "string" }),
    defineField({
      name: "openingHours",
      title: "Openingstijden",
      type: "array",
      of: [
        {
          type: "object",
          name: "openingHoursRow",
          fields: [
            defineField({ name: "label", title: "Dagen", type: "string" }),
            defineField({ name: "hours", title: "Tijden", type: "string" }),
          ],
        },
      ],
    }),
    defineField({
      name: "publicTransport",
      title: "Openbaar vervoer",
      description: "Bijv. buslijnen",
      type: "string",
    }),
    defineField({
      name: "emergencyIntro",
      title: "Spoed — korte tekst",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "socialLinks",
      title: "Social media",
      type: "array",
      of: [
        {
          type: "object",
          name: "socialLink",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "url", title: "URL", type: "url" }),
          ],
        },
      ],
    }),
    defineField({ name: "defaultSeo", title: "Standaard SEO", type: "seo" }),
  ],
  preview: {
    select: { title: "siteName" },
    prepare({ title }) {
      return { title: title ?? "Site-instellingen" };
    },
  },
});
