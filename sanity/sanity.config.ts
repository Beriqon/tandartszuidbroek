import "./loadEnv";
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { schemaTypes } from "./schemaTypes";
import { structure } from "./structure";

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset =
  process.env.SANITY_STUDIO_DATASET ??
  process.env.NEXT_PUBLIC_SANITY_DATASET ??
  "production";

if (!projectId) {
  throw new Error(
    "Missing Sanity project id. Set SANITY_STUDIO_PROJECT_ID or NEXT_PUBLIC_SANITY_PROJECT_ID.",
  );
}

export default defineConfig({
  name: "default",
  title: "Tandartspraktijk Zuidbroek",
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultDataset: dataset, defaultApiVersion: "2024-01-01" }),
  ],
  schema: {
    types: schemaTypes,
  },
});
