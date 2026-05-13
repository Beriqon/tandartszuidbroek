import { defineField, defineType } from "sanity";

export const seo = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta-titel",
      type: "string",
      validation: (Rule) => Rule.max(70).warning("Houd titels onder ~60 tekens"),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta-omschrijving",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(180).warning("Houd omschrijvingen onder ~155 tekens"),
    }),
    defineField({
      name: "shareImage",
      title: "Social afbeelding",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});
