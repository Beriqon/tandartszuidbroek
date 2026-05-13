import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Pagina",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "seo", title: "SEO", type: "seo" }),
    defineField({
      name: "sections",
      title: "Secties",
      type: "array",
      of: [
        { type: "heroSection" },
        { type: "richTextSection" },
        { type: "treatmentGridSection" },
        { type: "teamSection" },
        { type: "faqSection" },
        { type: "ctaBandSection" },
      ],
    }),
  ],
  preview: {
    select: { title: "title", slug: "slug.current" },
    prepare({ title, slug }) {
      return { title: title ?? "Pagina", subtitle: slug ? `/${slug}` : undefined };
    },
  },
});
