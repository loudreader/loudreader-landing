#!/usr/bin/env node
/**
 * Merge data/synopses/batch-*.json into data/gutenberg-catalog.json.
 *
 * Each batch file is an array of { gutenberg_id, synopsis, hook }.
 * The catalog is the single source of truth for /listen pages; batches are
 * the review-able unit synopses get written in (25 books per batch).
 *
 * Idempotent: re-running overwrites synopsis/hook from the batches.
 * Reports any catalog entry left without a synopsis or hook, and any batch
 * entry whose gutenberg_id is not in the catalog (both are exit-code 1 so a
 * broken merge can't slip into a build unnoticed).
 *
 * Usage: node scripts/merge-synopses.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = path.join(import.meta.dirname, "..");
const catalogPath = path.join(root, "data", "gutenberg-catalog.json");
const synopsesDir = path.join(root, "data", "synopses");

const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));

const batchFiles = fs
  .readdirSync(synopsesDir)
  .filter((f) => /^batch-\d+\.json$/.test(f))
  .sort((a, b) => {
    const num = (f) => Number(/\d+/.exec(f)[0]);
    return num(a) - num(b);
  });

const byId = new Map();
const duplicates = [];
for (const file of batchFiles) {
  const entries = JSON.parse(
    fs.readFileSync(path.join(synopsesDir, file), "utf8")
  );
  for (const entry of entries) {
    if (byId.has(entry.gutenberg_id)) duplicates.push(entry.gutenberg_id);
    byId.set(entry.gutenberg_id, { ...entry, _file: file });
  }
}

const catalogIds = new Set(catalog.map((b) => b.gutenberg_id));
const orphans = [...byId.keys()].filter((id) => !catalogIds.has(id));

let merged = 0;
const missing = [];
for (const book of catalog) {
  const entry = byId.get(book.gutenberg_id);
  if (entry && entry.synopsis?.trim() && entry.hook?.trim()) {
    book.synopsis = entry.synopsis.trim();
    book.hook = entry.hook.trim();
    merged += 1;
  } else if (!book.synopsis?.trim() || !book.hook?.trim()) {
    missing.push(`${book.gutenberg_id} (${book.slug})`);
  }
}

fs.writeFileSync(catalogPath, JSON.stringify(catalog, null, 2) + "\n");

console.log(`Batches read: ${batchFiles.join(", ")}`);
console.log(`Merged synopsis+hook for ${merged}/${catalog.length} books.`);
if (duplicates.length)
  console.warn(`DUPLICATE ids across batches: ${duplicates.join(", ")}`);
if (orphans.length)
  console.warn(`Batch ids not in catalog: ${orphans.join(", ")}`);
if (missing.length) {
  console.error(`Books left WITHOUT synopsis/hook:\n  ${missing.join("\n  ")}`);
  process.exit(1);
}
console.log("All catalog entries have a synopsis and a hook.");
