import { defineField, defineType } from "sanity";

export const faqItem = defineType({
  name: "faqItem",
  title: "FAQ-item",
  type: "document",
  fields: [
    defineField({
      name: "question",
      title: "Vraag",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "answer",
      title: "Antwoord",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categorie (optioneel)",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Volgorde",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Volgorde",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "question", subtitle: "category" },
    prepare({ title, subtitle }) {
      return { title, subtitle };
    },
  },
});
