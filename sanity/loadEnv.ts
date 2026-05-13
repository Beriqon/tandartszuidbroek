import { config } from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const sanityDir = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(sanityDir, "..");

config({ path: path.join(rootDir, ".env.local") });
config({ path: path.join(rootDir, ".env") });
