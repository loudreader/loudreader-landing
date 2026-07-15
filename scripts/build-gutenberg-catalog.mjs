// Generates data/gutenberg-catalog.json + data/catalog-slugs.json (tier 1: 100 books)
// from the Gutendex API (https://gutendex.com), most-popular English books first.
//
// Usage:
//   node scripts/build-gutenberg-catalog.mjs            # full build (network: Gutendex + PG HEAD requests)
//   DRY_RUN=1 node scripts/build-gutenberg-catalog.mjs  # selection review only, no writes
//   TARGET=100 PAGES=10 ...                             # tier size / candidate pool (32 books per page)
//
// Selection policy (tier-1 rollout discipline, see GROWTH_PROMPT Part C2):
// keep REAL books ordered by download_count; drop multi-volume partials, duplicate
// editions, reference works, periodicals, authorless anthologies, and obscure titles
// whose synopsis could not be written accurately from general knowledge.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { tmpdir } from "node:os";

const REPO = dirname(dirname(fileURLToPath(import.meta.url)));
const OUT_DIR = join(REPO, "data");
const DRY = process.env.DRY_RUN === "1";
const TARGET = Number(process.env.TARGET ?? 100);
const PAGES = Number(process.env.PAGES ?? 10);
const CACHE = join(tmpdir(), "gutendex-raw-cache.json"); // delete to re-fetch

async function fetchRaw() {
  if (existsSync(CACHE)) return JSON.parse(readFileSync(CACHE, "utf8"));
  const all = [];
  let url = "https://gutendex.com/books?languages=en&sort=popular";
  for (let i = 0; i < PAGES && url; i++) {
    let ok = false;
    for (let attempt = 0; attempt < 3 && !ok; attempt++) {
      try {
        const res = await fetch(url, { headers: { "User-Agent": "loudreader-catalog-build/1.0" } });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        all.push(...json.results);
        url = json.next;
        ok = true;
      } catch (e) {
        console.error(`gutendex page ${i + 1} attempt ${attempt + 1} failed: ${e.message}`);
        await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
      }
    }
    if (!ok) throw new Error(`gutendex page ${i + 1} unreachable`);
  }
  writeFileSync(CACHE, JSON.stringify(all));
  return all;
}
const raw = await fetchRaw();

// ---------- filter rules ----------

// Multi-volume / partial / periodical patterns.
const VOLUME_RE = [
  /\bvol(ume|\.)\s*[IVXLC\d]/i, // "Volume 1", "Vol. 2", "Volume Seventeen" (word numerals handled below)
  /\bvolume\s+(one|two|three|seventeen|first|second)/i,
  /\(of \d+\)/i,
  /\(part \d/i,
  /\bpart \d+ of \d+/i,
  /\bv\.\s*\d+\s*\/\s*\d+/i, // "v. 4/4"
  /\bno\.\s*\d+/i, // periodicals "No. 452"
  /\bnumber \d+,/i, // "Number 4, June, 1923"
  /\bBooks?\s+[IVXLC]+[-–]/, // "Books I-VII"
];

// Reference works / indexes / periodicals by keyword.
const NONBOOK_RE =
  /factbook|dictionary|thesaurus|encyclopaed|encyclopedi|linked index|magazine|journal/i;

// Explicit skips: id -> reason.
const SKIP = new Map(Object.entries({
  // duplicate editions of a work already kept under a higher-ranked id
  1112: "dup of 1513 Romeo and Juliet",
  42: "dup of 43 Jekyll and Hyde",
  161: "dup of 21839 Sense and Sensibility",
  45839: "dup of 345 Dracula",
  42671: "dup of 1342 Pride and Prejudice",
  3070: "dup of 2852 Hound of the Baskervilles",
  221: "dup of 108 Return of Sherlock Holmes",
  48320: "dup of 1661 Adventures of Sherlock Holmes (illustrated ed.)",
  829: "dup of 17157 Gulliver's Travels (variant text)",
  2488: "dup of 164 Twenty Thousand Leagues (variant translation)",
  // reference / non-book / not read-aloud material
  27509: "CIA World Factbook 2006 (reference)",
  27558: "CIA World Factbook 2003 (reference)",
  31100: "PG linked index, not a book",
  26225: "Fifteen Thousand Useful Phrases (reference)",
  28428: "Manual of Surgery (reference)",
  12082: "Mars rover image collection, not a text",
  50603: "Minute Mysteries puzzle book",
  51143: "Waterloo Roll Call (reference)",
  33283: "Calculus Made Easy (math notation, not read-aloud material)",
  43453: "A Pickle for the Knowing Ones (typographic oddity, unlistenable)",
  63469: "Washington Confidential (dated sensationalist expose)",
  // anthologies with no named author (thin/unattributable)
  12758: "anthology, no author",
  2038: "anthology, no author",
  15381: "anthology, no author",
  53419: "anthology, no author",
  // adult titles unsuitable for store-facing marketing catalog
  27827: "Kama Sutra",
  7889: "Erotica Romana",
  40284: "The Sex Life of the Gods",
  // religious recruitment tract
  37734: "conversion tract, not catalog material",
  // single short stories too thin for a page
  23172: "single short story (The Damned Thing)",
  67173: "single Christie short story (in Poirot Investigates)",
  67160: "single Christie short story (in Poirot Investigates)",
  66446: "single Christie short story (in Poirot Investigates)",
  // omnibus collections
  4499: "omnibus (Complete Short Works of Meredith)",
  26716: "omnibus of five Ruskin works",
  2760: "omnibus (Celebrated Crimes, 8 vols in one)",
  // obscure titles: no reliable common-knowledge synopsis -> fabrication risk / thin pages
  24739: "obscure memoir", 2868: "obscure (Fergus Hume minor work)",
  22541: "pulp short story", 19476: "obscure early SF", 7326: "obscure",
  23784: "obscure", 27475: "obscure", 24793: "obscure", 19771: "obscure (minor Disraeli)",
  25789: "biography of Bronte, obscure", 76639: "archaic 4-vol epistolary, MARC-junk title",
  34413: "letters collection, obscure", 26563: "obscure", 22163: "series juvenile, obscure",
  23184: "unauthorized Monte Cristo sequel", 18459: "1592 archaic spelling, unlistenable",
  8197: "obscure poetry", 26315: "scholarly genealogy", 4712: "obscure", 18875: "obscure",
  10441: "obscure", 6635: "obscure", 20628: "obscure", 20546: "obscure", 23500: "obscure",
  10102: "obscure", 53874: "obscure", 3530: "minor Sabatini", 15384: "obscure",
  1849: "minor Oppenheim", 16433: "obscure", 14818: "obscure", 3321: "obscure",
  76668: "pulp short", 27997: "obscure", 51428: "obscure", 1931: "minor Oppenheim",
  79: "1993 shareware novel, off-theme", 19742: "obscure", 19412: "obscure",
  53416: "obscure", 53154: "obscure", 55179: "obscure", 48296: "obscure",
  49987: "obscure", 19146: "obscure", 57641: "obscure", 46276: "obscure",
  7184: "obscure", 12345: "obscure", 11987: "obscure", 25132: "obscure",
  38311: "obscure", 77092: "minor Rohmer", 31472: "obscure", 50290: "pulp short",
  31635: "obscure", 33823: "obscure", 31257: "obscure", 38177: "obscure",
  36223: "obscure", 26593: "obscure", 22210: "obscure travel", 36725: "obscure",
  35548: "obscure", 32155: "letters, thin", 37499: "letters, thin",
  43098: "essay collection, obscure", 20439: "obscure biography", 54219: "obscure essays",
  59892: "obscure", 42681: "minor Dumas attribution", 21638: "pulp", 24149: "pulp short",
  23599: "pulp short", 20121: "pulp short", 18151: "pulp short", 16921: "minor Norton",
  4488: "minor Meredith", 1686: "minor Leroux", 28203: "minor Alcott",
  48438: "fragmentary memoir", 42389: "minor Scott", 3044: "minor Hardy",
  3146: "minor Hardy", 11982: "memoir, obscure today", 57669: "single short story",
}).map(([k, v]) => [Number(k), v]));

const AUTHORLESS_KEEP = new Set([16328]); // Beowulf

function normKey(b) {
  let t = (b.title || "").toLowerCase().split(/[;:]/)[0];
  t = t.replace(/^the /, "").replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim();
  const a = b.authors?.[0]?.name?.split(",")[0]?.toLowerCase() ?? "";
  return `${t}|${a}`;
}

const skipped = [];
const seen = new Set();
const keepers = [];
for (const b of raw) {
  if (!b.languages?.includes("en") || b.media_type !== "Text") { skipped.push([b.id, b.title, "not en text"]); continue; }
  if (b.copyright === true) { skipped.push([b.id, b.title, "copyrighted"]); continue; }
  if (SKIP.has(b.id)) { skipped.push([b.id, b.title, SKIP.get(b.id)]); continue; }
  if (VOLUME_RE.some((re) => re.test(b.title))) { skipped.push([b.id, b.title, "multi-volume/partial/periodical"]); continue; }
  if (NONBOOK_RE.test(b.title)) { skipped.push([b.id, b.title, "reference/non-book"]); continue; }
  if ((!b.authors || b.authors.length === 0) && !AUTHORLESS_KEEP.has(b.id)) { skipped.push([b.id, b.title, "no author"]); continue; }
  const key = normKey(b);
  if (seen.has(key)) { skipped.push([b.id, b.title, `dedupe key ${key}`]); continue; }
  seen.add(key);
  keepers.push(b);
}

keepers.sort((a, b) => b.download_count - a.download_count);
const selected = keepers.slice(0, TARGET);
const cutLine = keepers.slice(TARGET, TARGET + 15);

console.error(`raw=${raw.length} keepers=${keepers.length} selected=${selected.length}`);
if (DRY) {
  selected.forEach((b, i) =>
    console.log(`${String(i + 1).padStart(3)}. ${String(b.id).padStart(6)} ${String(b.download_count).padStart(7)}  ${b.authors?.[0]?.name ?? "-"}  ||  ${b.title}`));
  console.log("---- first 15 BELOW the cut ----");
  cutLine.forEach((b) => console.log(`     ${String(b.id).padStart(6)} ${String(b.download_count).padStart(7)}  ${b.authors?.[0]?.name ?? "-"}  ||  ${b.title}`));
  process.exit(0);
}

// ---------- field construction ----------

function cleanTitle(t) {
  let s = t.replace(/\s*\[sic\]\s*/gi, " ");
  s = s.replace(/\s*:\s*\$b\s*/g, ": ").replace(/[[\]]/g, "");
  s = s.replace(/\s*[—–-]\s*Complete$/i, "").replace(/,?\s*Complete$/i, "").replace(/\s*\(Complete\)$/i, "");
  s = s.replace(/\s+/g, " ").trim();
  s = s.replace(/[.,;:\s]+$/, "");
  // title-case fully-lowercase words (Gutendex sentence-cases some titles)
  const small = new Set(["a","an","the","and","or","nor","but","of","in","on","at","to","for","with","from","by","into","under","over","upon"]);
  const words = s.split(" ");
  return words.map((w, i) => {
    if (!/^[a-z]/.test(w)) return w; // already capitalized / punctuation / digits
    if (i !== 0 && i !== words.length - 1 && small.has(w.replace(/[^a-z]/g, ""))) return w;
    return w[0].toUpperCase() + w.slice(1);
  }).join(" ");
}

const AUTHOR_OVERRIDES = new Map(Object.entries({
  1184: "Alexandre Dumas", // standard attribution (PG co-credits Maquet)
  1259: "Alexandre Dumas",
  1608: "Alexandre Dumas fils", // PG lists as "Dumas, Alexandre" but years 1824-1895 = fils
  3296: "Saint Augustine of Hippo",
  2680: "Marcus Aurelius",
  2600: "Leo Tolstoy",
  831: "Chrétien de Troyes",
  468: "Abbé Prévost",
  2825: "Friedrich de la Motte Fouqué",
  7735: "Edward Bulwer-Lytton",
  7524: "Tacitus",
  6761: "Tobias Smollett", 2160: "Tobias Smollett", 4085: "Tobias Smollett",
  9911: "Ivan Turgenev",
  1998: "Friedrich Nietzsche",
  3268: "Ann Radcliffe",
  394: "Elizabeth Gaskell",
  16389: "Elizabeth von Arnim",
  16328: "Anonymous",
  36462: "Sir Thomas Malory",
  27673: "Sophocles",
}).map(([k, v]) => [Number(k), v]));

function formatOneAuthor(name) {
  let n = name.replace(/\s*\([^)]*\)/g, "").trim();
  const parts = n.split(",").map((p) => p.trim()).filter(Boolean);
  if (parts.length === 1) return parts[0];
  let out = `${parts[1]} ${parts[0]}`;
  if (parts.length > 2) {
    const third = parts[2];
    if (/^(sir|saint|dame)$/i.test(third)) out = `${third} ${out}`;
    // otherwise drop honorific/epithet segments ("graf", "Earl of ...", "active 12th century")
  }
  return out.replace(/\s+/g, " ").trim();
}

function formatAuthors(b) {
  if (AUTHOR_OVERRIDES.has(b.id)) return AUTHOR_OVERRIDES.get(b.id);
  const names = (b.authors ?? []).map((a) => formatOneAuthor(a.name));
  return names.join(" and ");
}

function authorYears(b) {
  const a = b.authors?.[0];
  if (!a || (a.birth_year == null && a.death_year == null)) return null;
  const fmt = (y) => (y < 0 ? `${-y} BC` : String(y));
  if (a.death_year == null) return `b. ${fmt(a.birth_year)}`;
  if (a.birth_year == null) return `d. ${fmt(a.death_year)}`;
  return `${fmt(a.birth_year)}–${fmt(a.death_year)}`;
}

const ERA_OVERRIDES = new Map([
  [16328, "Medieval"], // Beowulf (no author record)
  [831, "Medieval"], // Chrétien de Troyes, active 12th century (no years in PG)
  [6400, "Antiquity"], // Suetonius (no years in PG)
  // Author-midpoint heuristic lands on the wrong side of a century boundary
  // for these well-known publication dates:
  [3268, "18th century"], // The Mysteries of Udolpho (1794)
  [601, "18th century"], // The Monk (1796)
  [2527, "18th century"], // The Sorrows of Young Werther (1774)
  [1661, "19th century"], // The Adventures of Sherlock Holmes (1892)
  [834, "19th century"], // The Memoirs of Sherlock Holmes (1894)
  [244, "19th century"], // A Study in Scarlet (1887)
  [2097, "19th century"], // The Sign of the Four (1890)
  [8492, "19th century"], // The King in Yellow (1895)
]);
function era(b) {
  if (ERA_OVERRIDES.has(b.id)) return ERA_OVERRIDES.get(b.id);
  const a = b.authors?.[0];
  // approximate the author's active period, not their death year
  const y = a?.birth_year != null && a?.death_year != null
    ? Math.round((a.birth_year + a.death_year) / 2) + 10
    : a?.death_year ?? (a?.birth_year != null ? a.birth_year + 50 : null);
  if (y == null) return null;
  if (y <= 500) return "Antiquity";
  if (y <= 1500) return "Medieval";
  const c = Math.ceil(y / 100);
  const suffix = c % 10 === 1 && c !== 11 ? "st" : c % 10 === 2 && c !== 12 ? "nd" : c % 10 === 3 && c !== 13 ? "rd" : "th";
  return `${c}${suffix} century`;
}

function subjectTags(b) {
  const tags = [];
  const push = (t) => {
    const s = t.trim();
    if (!s) return;
    if (/^(early works to \d+|translations into english|history and criticism|\d{2,4}(th|st|nd|rd)? century|to \d+|19th century|20th century)$/i.test(s)) return;
    if (/^\d/.test(s)) return;
    if (!tags.some((x) => x.toLowerCase() === s.toLowerCase())) tags.push(s);
  };
  for (const subj of b.subjects ?? []) for (const part of subj.split(" -- ")) push(part);
  return tags.slice(0, 8);
}

const TITLE_OVERRIDES = new Map([
  [1727, "The Odyssey"], // PG title carries a translator's subtitle
  [67979, "The Blue Castle"],
  [1608, "Camille (La Dame aux Camélias)"], // fix PG typo "Camilias"
]);

const SLUG_OVERRIDES = new Map([[17157, "gullivers-travels"]]);

function slugify(title) {
  let base = title.split(/[:;]/)[0].trim();
  if (base.length > 50 && base.includes(",")) base = base.split(",")[0].trim();
  let s = base.normalize("NFKD").replace(/[̀-ͯ]/g, "").toLowerCase()
    .replace(/['’]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return s;
}

function plainTextUrl(b) {
  for (const [k, v] of Object.entries(b.formats ?? {})) {
    if (k.startsWith("text/plain") && !v.endsWith(".zip")) return v;
  }
  return null;
}

async function contentLength(url) {
  try {
    const res = await fetch(url, { method: "HEAD", redirect: "follow", headers: { "User-Agent": "loudreader-catalog-build/1.0", "Accept-Encoding": "identity" } });
    if (res.headers.get("content-encoding")) throw new Error("encoded response, length unusable");
    if (res.ok) {
      const len = res.headers.get("content-length");
      if (len && Number(len) > 0) return Number(len);
    }
  } catch { /* fall through */ }
  try { // range fallback
    const res = await fetch(url, { method: "GET", redirect: "follow", headers: { Range: "bytes=0-0", "User-Agent": "loudreader-catalog-build/1.0", "Accept-Encoding": "identity" } });
    const cr = res.headers.get("content-range"); // bytes 0-0/123456
    res.body?.cancel?.();
    const m = cr?.match(/\/(\d+)$/);
    if (m) return Number(m[1]);
  } catch { /* fall through */ }
  return null;
}

const bytesByBook = new Map();
const queue = [...selected];
async function worker() {
  while (queue.length) {
    const b = queue.shift();
    const url = plainTextUrl(b);
    if (!url) { console.error(`no plain text for ${b.id} ${b.title}`); continue; }
    const len = await contentLength(url);
    if (len) bytesByBook.set(b.id, len);
    else console.error(`HEAD+range failed for ${b.id} ${b.title} (${url})`);
  }
}
await Promise.all(Array.from({ length: 8 }, worker));
console.error(`content-length ok for ${bytesByBook.size}/${selected.length}`);

const roundHalf = (h) => Math.max(0.5, Math.round(h * 2) / 2);
const hoursFromBytes = (bytes) => (bytes / 6) / 150 / 60;

// same-era medians for fallback
const eraHours = new Map();
for (const b of selected) {
  if (!bytesByBook.has(b.id)) continue;
  const e = era(b) ?? "unknown";
  if (!eraHours.has(e)) eraHours.set(e, []);
  eraHours.get(e).push(hoursFromBytes(bytesByBook.get(b.id)));
}
const median = (xs) => { const s = [...xs].sort((a, b) => a - b); const m = Math.floor(s.length / 2); return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const globalMedian = median([...bytesByBook.values()].map(hoursFromBytes));

const slugSeen = new Set();
const catalog = selected.map((b) => {
  const title = TITLE_OVERRIDES.get(b.id) ?? cleanTitle(b.title);
  let slug = SLUG_OVERRIDES.get(b.id) ?? slugify(title);
  if (slugSeen.has(slug)) slug = `${slug}-${b.id}`;
  slugSeen.add(slug);
  const measured = bytesByBook.get(b.id) ?? null;
  let hours, words, estimated;
  if (measured) {
    words = Math.round(measured / 6 / 100) * 100;
    hours = roundHalf(hoursFromBytes(measured));
    estimated = false;
  } else {
    const e = era(b) ?? "unknown";
    const pool = eraHours.get(e);
    const h = pool?.length ? median(pool) : globalMedian;
    words = Math.round((h * 150 * 60) / 100) * 100;
    hours = roundHalf(h);
    estimated = true;
  }
  return {
    gutenberg_id: b.id,
    slug,
    title,
    author: formatAuthors(b),
    author_years: authorYears(b),
    year: null,
    era: era(b),
    subjects: subjectTags(b),
    download_count: b.download_count,
    word_count_estimate: words,
    listening_hours: hours,
    estimated,
    synopsis: "",
  };
});

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/gutenberg-catalog.json`, JSON.stringify(catalog, null, 2) + "\n");
writeFileSync(`${OUT_DIR}/catalog-slugs.json`, JSON.stringify(
  catalog.map(({ gutenberg_id, slug, title, author }) => ({ gutenberg_id, slug, title, author })), null, 2) + "\n");
console.log(`wrote ${catalog.length} books to ${OUT_DIR}/gutenberg-catalog.json and catalog-slugs.json`);
console.log(`estimated (fallback) count: ${catalog.filter((c) => c.estimated).length}`);
