// Builds the render jobs for the marketing audio samples from
// data/sample-passages.json: one job per catalog book, with explicit
// sentence segments (abbreviation-aware, because the render script's naive
// splitter would break "Mr.", "St.", "P.M." into separate pseudo-segments).
//
// Usage: node scripts/build-sample-jobs.mjs > /tmp/marketing-jobs.json
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = dirname(dirname(fileURLToPath(import.meta.url)));
const REFERENCE = "/home/jeremi/chatterbox/models/voices/loudreader-flagship.wav";

const ABBREV = new Set([
  "mr", "mrs", "ms", "dr", "st", "prof", "rev", "hon", "capt", "col", "gen",
  "lt", "sgt", "sr", "jr", "esq", "no", "vol", "fig", "etc", "viz", "i.e",
  "e.g", "vs", "messrs", "madam", "m", "mm", "p.m", "a.m", "b.c", "a.d", "ph.d",
]);

function clean(text) {
  return text
    .replace(/_/g, "")
    .replace(/--+/g, "\u2014")
    .replace(/P\.\s*M\./g, "P.M.")
    .replace(/A\.\s*M\./g, "A.M.")
    .replace(/^IN\b/, "In")
    .replace(/^THE\b/, "The")
    .replace(/\s+/g, " ")
    .trim();
}

function splitSentences(text) {
  const sentences = [];
  let cur = "";
  for (const w of text.split(/\s+/).filter(Boolean)) {
    cur += (cur ? " " : "") + w;
    const last = w.replace(/["')\]]*$/g, "");
    if (/[.!?]+$/.test(last)) {
      const core = last.replace(/[.!?]+$/, "");
      const isAbbrev =
        ABBREV.has(core.toLowerCase().replace(/\.$/, "")) ||
        /^[A-Z]\.?$/.test(core) ||
        /\d$/.test(core);
      if (!isAbbrev) {
        sentences.push(cur);
        cur = "";
      }
    }
  }
  if (cur.trim()) sentences.push(cur);
  return sentences;
}

// A segment much over ~45 words can ramble past the renderer's 400-token
// cap before the model decides to stop. Split long ones at semicolons
// (and, as a last resort, commas) — audible pause points that keep the
// text identical.
function splitLongSegments(segments) {
  const out = [];
  for (const s of segments) {
    const words = s.split(/\s+/).filter(Boolean).length;
    if (words <= 45) {
      out.push(s);
      continue;
    }
    let rest = s;
    while (rest.split(/\s+/).filter(Boolean).length > 45) {
      let cut = -1;
      const semis = [];
      for (let i = 0, depth = 0; i < rest.length; i++) {
        if (rest[i] === "(") depth++;
        if (rest[i] === ")") depth--;
        if (rest[i] === ";" && depth === 0) semis.push(i);
      }
      const half = Math.floor(rest.length / 2);
      cut = semis.filter((i) => i < half).at(-1) ?? semis.find((i) => i >= half) ?? -1;
      if (cut === -1) {
        // fall back to a comma near the middle, outside parens
        const commas = [];
        for (let i = 0, depth = 0; i < rest.length; i++) {
          if (rest[i] === "(") depth++;
          if (rest[i] === ")") depth--;
          if (rest[i] === "," && depth === 0) commas.push(i);
        }
        cut = commas.filter((i) => i < half).at(-1) ?? commas.find((i) => i >= half) ?? -1;
      }
      if (cut === -1) break;
      out.push(rest.slice(0, cut + 1).trim());
      rest = rest.slice(cut + 1).trim();
    }
    if (rest) out.push(rest);
  }
  return out;
}

const passages = JSON.parse(readFileSync(join(REPO, "data", "sample-passages.json"), "utf8"));

const jobs = passages.map((p) => {
  const text = clean(p.text);
  return {
    name: p.slug,
    text,
    segments: splitLongSegments(splitSentences(text)),
    reference: REFERENCE,
  };
});

process.stdout.write(JSON.stringify(jobs, null, 2) + "\n");
