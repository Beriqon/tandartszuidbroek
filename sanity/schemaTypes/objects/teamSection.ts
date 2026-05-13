import { defineField, defineType } from "sanity";

export const teamSection = defineType({
  name: "teamSection",
  title: "Team",
  type: "object",
  fields: [
    defineField({ name: "title", title: "Kop", type: "string" }),
    defineField({ name: "intro", title: "Intro", type: "text", rows: 3 }),
    defineField({
      name: "members",
      title: "Teamleden",
      description: "Laat leeg om alle teamleden (op volgorde) te tonen.",
      type: "array",
      of: [{ type: "reference", to: [{ type: "teamMember" }] }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Team-sectie" };
    },
  },
});
