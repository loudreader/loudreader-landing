# Article contract (blog)

How to add a persona-driven article (GROWTH_PROMPT Part C1.5) to
`loudreader.io/blog`. Follow this exactly and you will not need to touch
**any shared file** — articles can be written in parallel without merge
conflicts. The `/blog` listing, the "Keep reading" block, and the sitemap all
discover articles automatically from the files you create.

Reference implementation (complete sample article):
`app/blog/(posts)/listen-to-books-while-driving/`.

This is the blog sibling of `docs/money-page-contract.md` — money pages own
the high-intent commercial queries; articles own the persona/informational
queries. Check both existing surfaces before choosing a query, to avoid
cannibalization.

## The one rule

**One article = one folder** under `app/blog/(posts)/`, containing exactly
three files:

```
app/blog/(posts)/<slug>/
├── page.tsx      # assembles shared components, server-rendered
├── content.ts    # fact-provenance comment + FAQ data (and any local copy constants)
└── meta.json     # single source of truth for title/description/dates — feeds
                  # the page <head>, the /blog listing, "Keep reading" cards,
                  # BlogPosting JSON-LD, and the sitemap. Never edit app/sitemap.ts.
```

The `(posts)` route group does not appear in the URL: the folder name **is**
the slug (`app/blog/(posts)/listen-to-books-while-driving/` →
`https://loudreader.io/blog/listen-to-books-while-driving`).

Each article targets **ONE customer avatar and ONE search query** — record
both in `meta.json` (`avatar`, `query`). They are internal targeting
metadata, never rendered on the page.

## Hard rules (non-negotiable)

1. **Server-rendered copy.** No `"use client"` in `page.tsx` or `content.ts`.
   All visible copy must be in server components — AI crawlers don't execute
   JS. The only client code allowed is the existing leaf
   (`components/money/QrFallback.tsx`, already wired into `StoreCta`).
2. **No fabrication.** No invented testimonials, user comments, reviews,
   statistics, studies, team members, or features. No `aggregateRating` in
   any JSON-LD. If you cite a study, it must be real, findable, and relevant
   — record the citation in the fact-provenance comment. If you cannot
   verify a claim, do not make it.
3. **Verify app-behavior claims against the app source or in-app** before
   writing them, and record what you checked in the fact-provenance comment
   at the top of `content.ts` (see the sample: background audio and
   lock-screen controls are verified against `Info.plist` and
   `PlayerService.swift`; CarPlay is explicitly noted as NOT claimable).
4. **Differentiators verbatim.** Weave the exact strings from
   `components/money/site.ts` (`DIFFERENTIATORS`) into the copy where
   natural — consistency across pages is what AI answer engines echo:
   - "fully on-device and private — your library never leaves your device"
   - "natural offline voices"
   - "native Mac and iPhone apps"
5. **No new dependencies.** The shared components cover everything an
   article needs, including illustrations (inline SVG — see below).
6. **Date honesty.** `publishedAt` is the day the article went live and
   never changes. `lastModified` is the date of the last REAL content edit —
   never `new Date()`, never bumped without an edit. The `LastUpdated` stamp,
   BlogPosting JSON-LD `dateModified`, and the sitemap all read
   `meta.json.lastModified`, so there is exactly one place to keep honest.
7. **No fake authors.** The only byline is the shared `Byline` component
   ("Built by the developer of LoudReader") — `ArticleLayout` renders it
   automatically. Do not invent staff writers.

## Shared components

Blog-specific (import from `@/components/blog/…`):

| Component | Purpose | Key props |
|---|---|---|
| `ArticleLayout` | Full shell: money-page chrome + breadcrumb, H1, byline, "Last updated", BlogPosting JSON-LD, and the manifest-driven "Keep reading" block after your body | `meta` (pass the `meta.json` import), `children` |
| `ArticleIllustration` | Decorative inline SVG vignette (no raster images in this pipeline) | `variant`, `caption?` |

`ArticleIllustration` variants: `waveform` (text becomes sound),
`book-to-audio` (import/TTS), `drive` (car/commute), `offline`
(on-device/private/no cloud), `devices` (native Mac + iPhone). Pick the one
that matches the article's topic; 1–2 per article is plenty. Need a new
variant? That is a shared-file edit — do it as its own change, never inside
an article PR.

Reused from money pages (import from `@/components/money/…`):

| Component | Purpose | Key props |
|---|---|---|
| `Tldr` | Direct-answer callout, place first inside `ArticleLayout` | `children` (~100–150 words) |
| `QuestionSection` | Question-form `<h2>` section | `question`, `id?`, `children` |
| `FaqSection` | Visible FAQ **and** FAQPage JSON-LD from the same data | `faqs: {q, a}[]` (answers plain strings), `title?` |
| `StoreCta` | Platform-aware App Store CTA (badge + QR on non-Apple desktops) | `headline?`, `subline?` |
| `ComparisonTable` | Scrollable comparison table (if the article needs one) | `caption`, `columns`, `rows` |

Shared constants in `components/money/site.ts`: `APP_STORE_URL`, `SITE_URL`,
`DIFFERENTIATORS`, `PRICING`, `REQUIREMENTS`, `SUPPORT_EMAIL`. Import these
instead of retyping facts.

## Content requirements per article

- **TL;DR first**: the first ~100–150 words answer the article's one query
  completely and stand alone.
- **Question-form H2s** (`QuestionSection`) — phrase them the way the avatar
  searches.
- **Quotable standalone sentences** — write so single sentences survive
  being lifted out of context by an AI answer engine.
- **FAQ section at the bottom** (4–6 Q&As) — `FaqSection` emits the FAQPage
  JSON-LD automatically; answers must be plain text.
- **≥2 internal links** in body copy — at least one money page
  (see `app/(seo)/*/`) or the home page; siblings under `/blog/` also count.
- **Inline CTAs**: `StoreCta` at the bottom at minimum; mid-page text links
  to `APP_STORE_URL` are encouraged.
- **1–2 `ArticleIllustration`s**, content-relevant, with captions.
- **Honesty over reach**: concede what LoudReader does not do (DRM, CarPlay,
  languages) when the topic raises it — concessions are rewarded, and they
  are the brand.

## File templates

### `meta.json`

```json
{
  "slug": "my-article-slug",
  "title": "Question or How-To Title",
  "description": "≤160 chars; used for meta description, /blog cards, and Keep-reading cards.",
  "publishedAt": "2026-07-14",
  "lastModified": "2026-07-14",
  "avatar": "One Customer Avatar",
  "query": "the one search query this article targets"
}
```

- `slug` must equal the folder name (the build fails loudly if not).
- `title` ≤ ~55 chars; the root layout appends " · LoudReader".
- Optional sitemap overrides: `"changeFrequency": "weekly" | "monthly" | "yearly"`
  (default `monthly`), `"priority"` (default `0.6`).
- `components/blog/articles.ts` validates all of this at build time —
  `npm run build` is your schema check.

### `content.ts` (skeleton)

```ts
// FACT PROVENANCE — every app-behavior claim verified on YYYY-MM-DD against:
//   - <app source file / in-app screen / official page> (what you verified)
//   - ...
// Claims you may NOT make until verified: <list them so the next editor knows>

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  { q: "…?", a: "Plain-text answer — emitted verbatim into FAQPage JSON-LD." },
  // 4–6 total
];
```

### `page.tsx` (skeleton)

```tsx
import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function MyArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>{/* 100–150 word direct answer */}</p>
      </Tldr>

      <ArticleIllustration variant="waveform" caption="…" />

      <QuestionSection question="…?">
        <p>{/* body copy; <Link href="/…"> internal links */}</p>
      </QuestionSection>

      {/* … more QuestionSections … */}

      <FaqSection faqs={FAQS} />
      <StoreCta headline="…" subline="…" />
    </ArticleLayout>
  );
}
```

That is the entire wiring: `ArticleLayout` adds the breadcrumb, H1, byline,
"Last updated" stamp, BlogPosting JSON-LD, and "Keep reading" — all from
`meta`. The listing page, related-article cards, and sitemap pick the
article up from `meta.json` automatically at build time.

## Styling conventions (match the existing site)

Same as money pages: body text `text-gray-600`, emphasis `text-gray-900`,
links `text-loudBlue hover:underline`, lists `list-disc pl-6 space-y-2` /
`list-decimal pl-6 space-y-2`. Don't invent new colors or fonts; don't use
framer-motion on these pages.

## Verify before handing off

1. `npm run build` passes (this also validates your `meta.json`).
2. `curl -s http://localhost:3000/blog/<slug>` (after `npm run start`) —
   strip scripts, confirm all body copy is present in the raw HTML.
3. `http://localhost:3000/blog` lists the article;
   `http://localhost:3000/sitemap.xml` contains `/blog/<slug>`.
4. FAQPage JSON-LD present exactly once, BlogPosting JSON-LD present exactly
   once; no `aggregateRating` anywhere.
5. Every app-behavior claim and citation in the page appears in the
   fact-provenance comment in `content.ts` with its source.
