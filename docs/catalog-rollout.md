# /listen catalog — rollout discipline

The `/listen/[slug]` pages are the programmatic-SEO volume play (GROWTH_PROMPT
Part C2). This file is the contract for growing it. **Read it before adding
books.**

## Current state: tier 1 — 100 books

- `data/gutenberg-catalog.json` holds exactly the tier-1 set: the 100
  most-downloaded English Project Gutenberg books that survived the selection
  policy in `scripts/build-gutenberg-catalog.mjs` (no multi-volume partials,
  duplicate editions, reference works, or periodicals).
- Every page has unique, real substance: an original synopsis and hook
  (written per book, merged via `scripts/merge-synopses.mjs`), word count →
  estimated listening time at 1x, genre/subject tags, related books computed
  from shared Library of Congress subjects, and Book+Audiobook + breadcrumb
  JSON-LD. **No ratings, ever** — there are no real ones to cite.
- All pages are pure SSG (`generateStaticParams` + `dynamicParams = false`),
  plain server components, no framer-motion. The only client code is the
  shared `<QrFallback />` leaf, which renders nothing on the server.

## Expansion is GATED on Google Search Console data

Do **not** add tier 2 because it is easy. Thousands of unindexed thin pages
are a domain-level quality-demotion risk under Google's scaled-content
policy — the whole point of tier 1 is to find out whether these pages earn
their keep.

Expand only when, in GSC (Indexing → Pages + Performance, filter
`page path contains /listen/`), tier 1 shows **all three**:

1. **Indexed %** — a healthy majority of the ~100 book pages are
   "Indexed" (not "Crawled — currently not indexed", which is Google saying
   "thin"). If most pages sit unindexed after ~6-8 weeks, fix or prune
   before even thinking about more pages.
2. **Impressions** — book pages are appearing in search results at all.
3. **Clicks / store-badge CTR** — some pages actually get clicked, and GA4
   shows store-badge clicks originating from `/listen/*` (per-page
   store-click CTR is the site's #1 KPI).

## How to add tier 2 (only after the gate passes)

1. `TARGET=250 PAGES=25 node scripts/build-gutenberg-catalog.mjs` (or the
   next tier size) — review the selection diff by hand; the drop-list policy
   in that script is the quality bar.
2. Write synopses/hooks for the NEW books as `data/synopses/batch-N.json`
   (25 books per batch — the batch is the review unit). Original prose only;
   never paste publisher blurbs or Wikipedia summaries.
3. `node scripts/merge-synopses.mjs` — it exits non-zero if any book lacks a
   synopsis or hook, so an incomplete merge cannot ship silently.
4. Bump `CATALOG_LAST_MODIFIED` in `components/listen/catalog.ts` (this is
   the sitemap lastmod for every /listen page — bump only on real content
   changes).
5. Check the new books land in sensible genres (`genreOf` keyword rules +
   `GENRE_OVERRIDES` in `components/listen/catalog.ts`); add overrides for
   any misclassification.
6. `npm run build` — count the `/listen/*` lines in the build output; it must
   match the catalog size.

## Deliberately deferred to tier 2+ (do not build early)

- Author pages (`/author/[slug]`) and genre hub pages — only once book pages
  prove they index and convert.
- Short TTS audio samples per book.
- Sitemap chunking (`generateSitemaps`) — pointless below a few thousand
  URLs; a single `sitemap.xml` handles tier 1 and tier 2 fine.
