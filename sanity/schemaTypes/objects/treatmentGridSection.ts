import { defineField, defineType } from "sanity";

export const treatmentGridSection = defineType({
  name: "treatmentGridSection",
  title: "Behandelingen-grid",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Kop", type: "string" }),
    defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
    defineField({
      name: "treatments",
      title: "Behandelingen",
      type: "array",
      of: [{ type: "reference", to: [{ type: "treatment" }] }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    prepare() {
      return { title: "Behandelingen-grid" };
    },
  },
});
