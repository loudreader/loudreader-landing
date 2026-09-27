import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

/**
 * Build-time article manifest (server-only).
 *
 * The manifest is the filesystem: every folder under `app/blog/(posts)/`
 * containing a `meta.json` IS an article. This module globs those files so
 * the /blog listing, the RelatedArticles block, and app/sitemap.ts all
 * discover articles automatically, so writers add an article by creating ONE
 * folder and never edit a central list (see docs/article-contract.md).
 *
 * Everything here runs at build time (all blog routes are static), so a
 * malformed meta.json fails `next build` loudly instead of shipping quietly.
 */

export type ChangeFrequency = "weekly" | "monthly" | "yearly";

export const ARTICLE_TOPICS = {
  reading: "Reading & listening habits",
  formats: "Documents & web articles",
  voices: "Voices & playback",
  learning: "Learning & accessibility",
  comparisons: "Choosing an app",
  classics: "Books & editions",
  technology: "Local speech & privacy",
} as const;
export type ArticleTopic = keyof typeof ARTICLE_TOPICS;

export type ArticleMeta = {
  /** Must equal the folder name under app/blog/(posts)/, validated below. */
  slug: string;
  /** ≤ ~55 chars; the root layout appends " · LoudReader". */
  title: string;
  /** ≤ ~160 chars; used for <meta description>, the /blog cards, and related-article cards. */
  description: string;
  /** YYYY-MM-DD, the date the article first went live. Never changes. */
  publishedAt: string;
  /** YYYY-MM-DD, last REAL content edit. Same honesty rule as money pages. */
  lastModified: string;
  /** Internal targeting metadata (never rendered): the ONE customer avatar. */
  avatar?: string;
  /** Internal targeting metadata (never rendered): the ONE search query. */
  query?: string;
  /** Product announcements are listed separately from practical guides. */
  kind?: "guide" | "release";
  /** Give an important announcement a prominent place in product news. */
  featured?: boolean;
  /** Reader-facing category for navigation and relevant follow-up articles. */
  topic?: ArticleTopic;
  /** Sitemap override; defaults to "monthly". */
  changeFrequency?: ChangeFrequency;
  /** Sitemap override; defaults to 0.6 (money pages are 0.7). */
  priority?: number;
};

const POSTS_DIR = path.join(process.cwd(), "app", "blog", "(posts)");
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const CHANGE_FREQUENCIES: ReadonlySet<string> = new Set([
  "weekly",
  "monthly",
  "yearly",
]);

function validate(folder: string, raw: Record<string, unknown>): ArticleMeta {
  const where = `app/blog/(posts)/${folder}/meta.json`;
  const requireString = (key: "slug" | "title" | "description" | "publishedAt" | "lastModified"): string => {
    const value = raw[key];
    if (typeof value !== "string" || value.trim() === "") {
      throw new Error(`${where}: "${key}" must be a non-empty string`);
    }
    return value;
  };

  const slug = requireString("slug");
  if (slug !== folder) {
    throw new Error(`${where}: "slug" ("${slug}") must equal the folder name ("${folder}")`);
  }
  const publishedAt = requireString("publishedAt");
  const lastModified = requireString("lastModified");
  for (const [key, value] of [["publishedAt", publishedAt], ["lastModified", lastModified]] as const) {
    if (!ISO_DATE.test(value)) {
      throw new Error(`${where}: "${key}" must be YYYY-MM-DD, got "${value}"`);
    }
  }
  const changeFrequency = raw.changeFrequency;
  if (changeFrequency !== undefined && !CHANGE_FREQUENCIES.has(changeFrequency as string)) {
    throw new Error(`${where}: "changeFrequency" must be weekly | monthly | yearly`);
  }
  const priority = raw.priority;
  if (priority !== undefined && (typeof priority !== "number" || priority <= 0 || priority > 1)) {
    throw new Error(`${where}: "priority" must be a number in (0, 1]`);
  }
  if (raw.kind !== undefined && raw.kind !== "guide" && raw.kind !== "release") {
    throw new Error(`${where}: "kind" must be guide | release`);
  }
  if (raw.featured !== undefined && typeof raw.featured !== "boolean") {
    throw new Error(`${where}: "featured" must be a boolean`);
  }
  if (raw.topic !== undefined && (typeof raw.topic !== "string" || !Object.hasOwn(ARTICLE_TOPICS, raw.topic))) {
    throw new Error(`${where}: "topic" must be a recognised article topic`);
  }

  return {
    slug,
    title: requireString("title"),
    description: requireString("description"),
    publishedAt,
    lastModified,
    avatar: typeof raw.avatar === "string" ? raw.avatar : undefined,
    query: typeof raw.query === "string" ? raw.query : undefined,
    kind: raw.kind as ArticleMeta["kind"],
    featured: raw.featured as boolean | undefined,
    topic: raw.topic as ArticleTopic | undefined,
    changeFrequency: changeFrequency as ChangeFrequency | undefined,
    priority: priority as number | undefined,
  };
}

/** All published articles (publishedAt on or before the build date), newest first. */
export function getAllArticles(asOf = new Date().toISOString().slice(0, 10)): ArticleMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  // Scheduled rollout: an article becomes visible (listing, sitemap,
  // RelatedArticles, and therefore crawlable) only once its publishedAt is on
  // or before the build date. Future-dated articles are held back until a
  // later rebuild, so content drips in over time instead of all at once. A
  // daily redeploy (vercel.json cron -> /api/cron/rollout) advances the drip.
  return fs
    .readdirSync(POSTS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) => {
      const metaPath = path.join(POSTS_DIR, entry.name, "meta.json");
      if (!fs.existsSync(metaPath)) return [];
      const raw = JSON.parse(fs.readFileSync(metaPath, "utf8")) as Record<string, unknown>;
      return [validate(entry.name, raw)];
    })
    .filter((meta) => isArticlePublished(meta, asOf))
    .sort(
      (a, b) =>
        b.publishedAt.localeCompare(a.publishedAt) ||
        a.title.localeCompare(b.title)
    );
}

/** Shared by discovery and direct pages so a scheduled post cannot leak early. */
export function isArticlePublished(
  meta: Pick<ArticleMeta, "publishedAt">,
  asOf = new Date().toISOString().slice(0, 10)
): boolean {
  return meta.publishedAt <= asOf;
}

/** Prefer the same product series or topic, retaining publication order. */
export function getRelatedArticles(currentSlug: string, max = 3, asOf?: string): ArticleMeta[] {
  const published = getAllArticles(asOf);
  const current = published.find((article) => article.slug === currentSlug);
  const score = (article: ArticleMeta) =>
    current?.kind === "release" && article.kind === "release" ? 2 :
      current?.topic && article.topic === current.topic ? 1 : 0;
  return published
    .filter((article) => article.slug !== currentSlug)
    .sort((a, b) => score(b) - score(a))
    .slice(0, Math.max(0, max));
}

/**
 * Next.js Metadata for an article page from its own meta.json:
 *   import meta from "./meta.json";
 *   export const metadata = articleMetadata(meta);
 */
export function articleMetadata(
  meta: Pick<ArticleMeta, "slug" | "title" | "description">
): Metadata {
  const url = `/blog/${meta.slug}`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: meta.title,
      description: meta.description,
    },
  };
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/** Deterministic (build-independent) date formatting: "July 14, 2026". */
export function formatArticleDate(iso: string): string {
  const match = ISO_DATE.exec(iso);
  if (!match) throw new Error(`formatArticleDate: date must be YYYY-MM-DD, got "${iso}"`);
  const [y, m, d] = iso.split("-");
  return `${MONTHS[Number(m) - 1]} ${Number(d)}, ${y}`;
}
