import fs from "node:fs";
import path from "node:path";
import type { MetadataRoute } from "next";

import { getAllArticles } from "@/components/blog/articles";
import { CATALOG_LAST_MODIFIED, getAllBooks } from "@/components/listen/catalog";

const BASE = "https://loudreader.io";

/*
 * lastModified strategy: each date below is the last REAL content edit of that
 * route (seeded from `git log -1 --format=%cI -- app/<route>/page.tsx`).
 * Bump a date only when you materially change that page's content.
 * Never use `new Date()` here — a lastmod that changes on every build is
 * indistinguishable from noise and teaches crawlers to ignore it.
 *
 * /i/[ref] invite pages are excluded on purpose: personal links, noindex.
 */
const routes: Array<{
  path: string;
  lastModified: string;
  changeFrequency: "weekly" | "monthly" | "yearly";
  priority: number;
}> = [
  { path: "/", lastModified: "2026-07-14", changeFrequency: "weekly", priority: 1 },
  { path: "/faq", lastModified: "2026-07-14", changeFrequency: "monthly", priority: 0.8 },
  { path: "/releases", lastModified: "2026-07-06", changeFrequency: "monthly", priority: 0.6 },
  { path: "/support", lastModified: "2026-07-06", changeFrequency: "monthly", priority: 0.5 },
  { path: "/terms", lastModified: "2026-07-06", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", lastModified: "2026-02-25", changeFrequency: "yearly", priority: 0.3 },
];

/*
 * Money pages under app/(seo)/<slug>/ are discovered automatically at build
 * time from each page's colocated meta.json — so adding a new money page
 * never requires editing this file (see docs/money-page-contract.md).
 * meta.json shape: { "lastModified": "YYYY-MM-DD", "changeFrequency"?, "priority"? }
 * Same lastmod rule applies: bump only on real content edits.
 */
function seoRoutes(): typeof routes {
  const seoDir = path.join(process.cwd(), "app", "(seo)");
  if (!fs.existsSync(seoDir)) return [];
  return fs
    .readdirSync(seoDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) => {
      const metaPath = path.join(seoDir, entry.name, "meta.json");
      if (!fs.existsSync(metaPath)) return [];
      const meta = JSON.parse(fs.readFileSync(metaPath, "utf8")) as {
        lastModified: string;
        changeFrequency?: "weekly" | "monthly" | "yearly";
        priority?: number;
      };
      if (!/^\d{4}-\d{2}-\d{2}$/.test(meta.lastModified)) {
        throw new Error(
          `app/(seo)/${entry.name}/meta.json: lastModified must be YYYY-MM-DD`
        );
      }
      return [
        {
          path: `/${entry.name}`,
          lastModified: meta.lastModified,
          changeFrequency: meta.changeFrequency ?? ("monthly" as const),
          priority: meta.priority ?? 0.7,
        },
      ];
    });
}

/*
 * Blog articles under app/blog/(posts)/<slug>/ are discovered automatically
 * from each article's colocated meta.json, through the SAME build-time
 * manifest the /blog listing and RelatedArticles use
 * (components/blog/articles.ts) — publishing an article never requires
 * editing this file (see docs/article-contract.md).
 * The /blog index entry appears once at least one article exists; its
 * lastModified is the newest article lastModified (the listing's content
 * changes exactly when its articles do — no fake freshness).
 */
function blogRoutes(): typeof routes {
  const articles = getAllArticles();
  if (articles.length === 0) return [];
  const indexLastModified = articles
    .map((article) => article.lastModified)
    .sort()
    .at(-1)!;
  return [
    {
      path: "/blog",
      lastModified: indexLastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...articles.map((article) => ({
      path: `/blog/${article.slug}`,
      lastModified: article.lastModified,
      changeFrequency: article.changeFrequency ?? ("monthly" as const),
      priority: article.priority ?? 0.6,
    })),
  ];
}

/*
 * /listen catalog pages come straight from data/gutenberg-catalog.json — the
 * same file generateStaticParams builds the pages from, so the sitemap can
 * never list a page that doesn't exist (or miss one that does).
 * lastModified is CATALOG_LAST_MODIFIED (bumped only on real catalog edits).
 * Size note: tier 1 is ~100 URLs, far under the 50,000-URL sitemap limit —
 * one sitemap.xml is fine. If the catalog ever grows past a few thousand
 * books, split via Next's generateSitemaps into a sitemap index
 * (see docs/catalog-rollout.md).
 */
function listenRoutes(): typeof routes {
  return [
    {
      path: "/listen",
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...getAllBooks().map((book) => ({
      path: `/listen/${book.slug}`,
      lastModified: CATALOG_LAST_MODIFIED,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [...routes, ...seoRoutes(), ...blogRoutes(), ...listenRoutes()].map((route) => ({
    url: `${BASE}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
