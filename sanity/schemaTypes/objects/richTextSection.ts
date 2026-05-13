import { defineField, defineType } from "sanity";

export const richTextSection = defineType({
  name: "richTextSection",
  title: "Tekstblok",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Kop (optioneel)", type: "string" }),
    defineField({
      name: "content",
      title: "Inhoud",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title" },
    prepare({ title }) {
      return { title: title || "Tekstblok", subtitle: "Rich text" };
    },
  },
});
