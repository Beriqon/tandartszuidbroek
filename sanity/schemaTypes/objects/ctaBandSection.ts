import { defineField, defineType } from "sanity";

export const ctaBandSection = defineType({
  name: "ctaBandSection",
  title: "CTA-band",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Kop",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "body", title: "Tekst", type: "text", rows: 3 }),
    defineField({ name: "button", title: "Knop", type: "link" }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return { title: title ?? "CTA-band", subtitle: "Call-to-action" };
    },
  },
});
