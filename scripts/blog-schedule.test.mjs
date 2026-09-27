import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import test from "node:test";
import ts from "typescript";

// Exercise the real manifest without requiring a running Next server.
const compiled = ts.transpileModule(
  readFileSync(new URL("../components/blog/articles.ts", import.meta.url), "utf8"),
  { compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true } }
).outputText;
const module = { exports: {} };
new Function("require", "module", "exports", compiled)(
  createRequire(import.meta.url), module, module.exports
);
const { getAllArticles, isArticlePublished } = module.exports;
const engine = "introducing-loudkit";
const agents = "loudkit-voice-notes-for-agents";

test("announcements appear on their own publication dates", () => {
  for (const [date, expected] of [
    ["2026-10-10", []],
    ["2026-10-11", [engine]],
    ["2026-10-13", [engine]],
    ["2026-10-14", [agents, engine]],
  ]) {
    const articles = getAllArticles(date);
    assert.deepEqual(
      articles.filter((article) => [engine, agents].includes(article.slug)).map((article) => article.slug),
      expected, date
    );
    assert.ok(articles.every((article) => article.publishedAt <= date));
  }
});

test("direct-page publication gate agrees with discovery", () => {
  for (const [slug, date, previous] of [
    [engine, "2026-10-11", "2026-10-10"],
    [agents, "2026-10-14", "2026-10-13"],
  ]) {
    const meta = JSON.parse(readFileSync(new URL(`../app/blog/(posts)/${slug}/meta.json`, import.meta.url), "utf8"));
    assert.equal(isArticlePublished(meta, previous), false);
    assert.equal(isArticlePublished(meta, date), true);
    assert.equal(isArticlePublished(meta, "2026-10-15"), true);
  }
});

test("announcements remain distinguished from existing guides", () => {
  const articles = getAllArticles("2026-10-14");
  for (const slug of [engine, agents]) {
    const article = articles.find((entry) => entry.slug === slug);
    assert.equal(article.kind, "release");
    assert.equal(article.featured, true);
  }
  const guide = articles.find((entry) => entry.slug === "on-device-text-to-speech-explained");
  assert.ok(guide);
  assert.notEqual(guide.kind, "release");
});
