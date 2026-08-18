// Regenerates the BOOK_SAMPLES table in data/audio-samples.ts from
// data/sample-durations.json (written by postprocess-samples.mjs).
//
// Usage: node scripts/update-audio-samples.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = dirname(dirname(fileURLToPath(import.meta.url)));
const durations = JSON.parse(readFileSync(join(REPO, "data", "sample-durations.json"), "utf8"));

const entries = Object.entries(durations)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([slug, seconds]) => {
    return `  "${slug}": { file: "/samples/${slug}.mp3", seconds: ${Number(seconds).toFixed(1)} },`;
  });

const table = `export const BOOK_SAMPLES: Record<string, { file: string; seconds: number }> = {
${entries.join("\n")}
};`;

const path = join(REPO, "data", "audio-samples.ts");
let src = readFileSync(path, "utf8");
const start = src.indexOf("export const BOOK_SAMPLES");
const end = src.indexOf("};", start) + 2;
src = src.slice(0, start) + table + src.slice(end);
writeFileSync(path, src);
console.log(`${entries.length} samples written to data/audio-samples.ts`);
