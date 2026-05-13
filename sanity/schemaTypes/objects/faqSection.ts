import { defineField, defineType } from "sanity";

export const faqSection = defineType({
  name: "faqSection",
  title: "FAQ",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Kop", type: "string" }),
    defineField({
      name: "items",
      title: "Vragen",
      type: "array",
      of: [{ type: "reference", to: [{ type: "faqItem" }] }],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    prepare() {
      return { title: "FAQ-sectie" };
    },
  },
});
