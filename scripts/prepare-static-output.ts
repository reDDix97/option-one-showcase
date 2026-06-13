import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const candidates = [
  join(process.cwd(), ".output", "public"),
  join(process.cwd(), "dist", "client"),
];

const publicDir = candidates.find((dir) => existsSync(join(dir, "index.html")));

if (!publicDir) {
  throw new Error("Static build did not create an index.html in .output/public or dist/client");
}

const indexFile = join(publicDir, "index.html");
const notFoundFile = join(publicDir, "404.html");

mkdirSync(dirname(notFoundFile), { recursive: true });
copyFileSync(indexFile, notFoundFile);

console.log(`Prepared static fallback: ${notFoundFile}`);