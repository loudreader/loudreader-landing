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
const compiledModule = { exports: {} };
new Function("require", "module", "exports", compiled)(
  createRequire(import.meta.url), compiledModule, compiledModule.exports
);
const { ARTICLE_TOPICS, getAllArticles, getRelatedArticles, isArticlePublished } = compiledModule.exports;
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

test("every article has a recognised reader-facing topic", () => {
  const articles = getAllArticles("9999-12-31");
  assert.equal(articles.length, 152);
  assert.ok(articles.every((article) => Object.hasOwn(ARTICLE_TOPICS, article.topic)));
});

test("related guides prioritise the topic and never leak a held article", () => {
  const date = "2026-09-28";
  const articles = getAllArticles(date);
  for (const topic of Object.keys(ARTICLE_TOPICS)) {
    const current = articles.find((article) => article.topic === topic && article.kind !== "release");
    assert.ok(current, topic);
    const related = getRelatedArticles(current.slug, 3, date);
    assert.equal(related.length, 3, topic);
    assert.ok(related.every((article) => article.slug !== current.slug && article.topic === topic && article.publishedAt <= date), topic);
  }
  const releaseRelated = getRelatedArticles(agents, 3, "2026-10-14");
  assert.equal(releaseRelated[0].slug, engine);
});
