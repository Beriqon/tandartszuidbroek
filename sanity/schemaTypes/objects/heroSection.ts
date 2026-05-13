import { defineField, defineType } from "sanity";

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero",
  type: "object",
  fields: [
    defineField({ name: "eyebrow", title: "Bovenregel", type: "string" }),
    defineField({
      name: "heading",
      title: "Kop",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "subheading", title: "Ondertitel", type: "text", rows: 3 }),
    defineField({
      name: "image",
      title: "Afbeelding",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({ name: "primaryCta", title: "Primaire knop", type: "link" }),
    defineField({ name: "secondaryCta", title: "Secundaire knop", type: "link" }),
  ],
  preview: {
    select: { title: "heading", media: "image" },
    prepare({ title, media }) {
      return { title: title ?? "Hero", subtitle: "Hero-sectie", media };
    },
  },
});
