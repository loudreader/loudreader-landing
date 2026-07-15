#!/usr/bin/env node
/**
 * Merge data/entities/batch-*.json into data/book-entities.json, keyed by slug.
 *
 * Each batch file is an array of:
 *   { slug, gutenberg_id, author_name,
 *     author_qid, author_wikipedia, author_wikidata,
 *     work_qid, work_wikipedia, work_wikidata }
 * Any of the entity fields may be null when it was skipped (not verified).
 *
 * book-entities.json is the single lookup the /listen/[slug] pages read to
 * emit VERIFIED-only sameAs links in JSON-LD and the visible "More about the
 * author on Wikipedia" link. Null fields are preserved as null so the page
 * layer can omit them; we never invent a Q-id or URL.
 *
 * Idempotent: re-running rebuilds the file from the batches.
 * Cross-checks every slug against data/gutenberg-catalog.json and fails
 * (exit 1) on a batch slug missing from the catalog or a duplicate slug, so a
 * broken merge can't slip into a build unnoticed.
 *
 * Usage: node scripts/merge-entities.mjs
 */
import fs from "node:fs";
import path from "node:path";

const root = path.join(import.meta.dirname, "..");
const catalogPath = path.join(root, "data", "gutenberg-catalog.json");
const entitiesDir = path.join(root, "data", "entities");
const outPath = path.join(root, "data", "book-entities.json");

const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const catalogSlugs = new Set(catalog.map((b) => b.slug));

const batchFiles = fs
  .readdirSync(entitiesDir)
  .filter((f) => /^batch-\d+\.json$/.test(f))
  .sort((a, b) => Number(/\d+/.exec(a)[0]) - Number(/\d+/.exec(b)[0]));

const bySlug = {};
const duplicates = [];
const orphans = [];

for (const file of batchFiles) {
  const entries = JSON.parse(
    fs.readFileSync(path.join(entitiesDir, file), "utf8")
  );
  for (const e of entries) {
    if (!catalogSlugs.has(e.slug)) orphans.push(`${e.slug} (${file})`);
    if (bySlug[e.slug]) duplicates.push(e.slug);
    bySlug[e.slug] = {
      author_name: e.author_name ?? null,
      author_qid: e.author_qid ?? null,
      author_wikipedia: e.author_wikipedia ?? null,
      author_wikidata: e.author_wikidata ?? null,
      work_qid: e.work_qid ?? null,
      work_wikipedia: e.work_wikipedia ?? null,
      work_wikidata: e.work_wikidata ?? null,
    };
  }
}

// Stable, slug-sorted output so diffs are review-able.
const ordered = {};
for (const slug of Object.keys(bySlug).sort()) ordered[slug] = bySlug[slug];

fs.writeFileSync(outPath, JSON.stringify(ordered, null, 2) + "\n");

const total = Object.keys(ordered).length;
const withAuthor = Object.values(ordered).filter(
  (e) => e.author_wikidata || e.author_wikipedia
).length;
const withWork = Object.values(ordered).filter(
  (e) => e.work_wikidata || e.work_wikipedia
).length;
const missingInEntities = catalog
  .map((b) => b.slug)
  .filter((slug) => !ordered[slug]);

console.log(`Batches read: ${batchFiles.join(", ")}`);
console.log(`Wrote ${total} slugs to data/book-entities.json`);
console.log(`  with author entity: ${withAuthor}/${total}`);
console.log(`  with work entity:   ${withWork}/${total}`);
if (duplicates.length)
  console.warn(`DUPLICATE slugs across batches: ${duplicates.join(", ")}`);
if (orphans.length) console.warn(`Batch slugs not in catalog: ${orphans.join(", ")}`);
if (missingInEntities.length)
  console.warn(
    `Catalog slugs with no entity record: ${missingInEntities.join(", ")}`
  );
if (duplicates.length || orphans.length) process.exit(1);
