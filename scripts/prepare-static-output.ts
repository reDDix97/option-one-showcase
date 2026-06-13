import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const publicDir = join(process.cwd(), ".output", "public");
const indexFile = join(publicDir, "index.html");
const notFoundFile = join(publicDir, "404.html");

if (!existsSync(indexFile)) {
  throw new Error("Static build did not create .output/public/index.html");
}

mkdirSync(dirname(notFoundFile), { recursive: true });
copyFileSync(indexFile, notFoundFile);

console.log("Prepared static fallback: .output/public/404.html");