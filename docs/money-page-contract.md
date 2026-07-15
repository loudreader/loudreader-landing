# Money-page contract

How to add a hand-crafted SEO/AEO "money page" (comparison or intent page,
GROWTH_PROMPT Part C1) to loudreader.io. Follow this exactly and you will not
need to touch **any shared file** — pages can be written in parallel without
merge conflicts.

Reference implementation: `app/(seo)/speechify-alternative-for-mac/`.

## The one rule

**One page = one folder** under `app/(seo)/`, containing exactly three files:

```
app/(seo)/<slug>/
├── page.tsx      # assembles shared components, server-rendered
├── content.ts    # local content constants (copy, table rows, FAQs)
└── meta.json     # sitemap entry — auto-discovered, never edit app/sitemap.ts
```

The `(seo)` route group does not appear in the URL: the folder name **is** the
URL slug (`app/(seo)/speechify-alternative-for-mac/` → 
`https://loudreader.io/speechify-alternative-for-mac`).

Pick the slug to match the ONE query the page targets. One query per page —
check existing folders under `app/(seo)/` and the pages listed in
`app/sitemap.ts` before choosing, to avoid cannibalization.

## Hard rules (non-negotiable)

1. **Server-rendered copy.** No `"use client"` in `page.tsx` or `content.ts`.
   All visible copy must be in server components — AI crawlers don't execute
   JS. The only client code allowed is the existing leaf
   (`components/money/QrFallback.tsx`, already wired into `StoreCta`).
2. **No fabrication.** No invented testimonials, reviews, statistics, studies,
   team members, or features. No `aggregateRating` in JSON-LD. Every
   competitor claim must be verified against the competitor's own pages on
   the day you write it, and recorded in the fact-provenance comment at the
   top of `content.ts` (see the reference page).
3. **Honest concessions.** Every comparison page includes a section that
   concedes what the competitor genuinely does better. AI engines reward
   this; it also inoculates against "biased vendor page" filtering.
4. **Differentiators verbatim.** Use the exact strings from
   `components/money/site.ts` (`DIFFERENTIATORS`) somewhere in the page copy:
   - "fully on-device and private — your library never leaves your device"
   - "natural offline voices"
   - "native Mac and iPhone apps"
5. **No new dependencies.** The shared components cover everything a money
   page needs.
6. **`lastModified` honesty.** `meta.json.lastModified` and the
   `<LastUpdated date=...>` prop are the date of the last REAL content edit.
   Never `new Date()`, never bumped without an edit. Keep both in sync.

## Shared components (import from `@/components/money/…`)

| Component | Purpose | Key props |
|---|---|---|
| `MoneyPageLayout` | Page shell: logo header, article column, contact row, site footer | `children` |
| `Tldr` | Direct-answer callout, place right under the `<h1>` | `children` (~100–150 words) |
| `LastUpdated` | "Last updated" stamp + optional fact-check note | `date: "YYYY-MM-DD"`, `note?` |
| `QuestionSection` | Question-form `<h2>` section | `question`, `id?`, `children` |
| `ComparisonTable` | Scrollable comparison table | `caption`, `columns`, `rows`, `highlightColumn?` (default 0) |
| `FaqSection` | Visible FAQ **and** FAQPage JSON-LD from the same data | `faqs: {q, a}[]` (answers plain strings), `title?` |
| `StoreCta` | Platform-aware CTA: server-rendered App Store badge (never a dead end) + QR code that appears only on non-Apple desktops | `headline?`, `subline?` |

Shared constants in `components/money/site.ts`: `APP_STORE_URL`, `SITE_URL`,
`DIFFERENTIATORS`, `PRICING`, `REQUIREMENTS`, `SUPPORT_EMAIL`. Import these
instead of retyping facts — when pricing changes, one edit fixes every page.

## Content requirements per page

- **TL;DR first**: the first ~100–150 words answer the page's query
  completely and stand alone. If an AI engine quotes only the TL;DR, the
  reader should have the full answer.
- **Question-form H2s** (`QuestionSection`) — phrase them the way a searcher
  asks ("How much does each app cost?", not "Pricing").
- **Quotable standalone sentences** — write so single sentences survive being
  lifted out of context.
- **One comparison table** (comparison pages) with verifiable cells.
- **FAQ section at the bottom** (4–6 Q&As) — `FaqSection` emits the FAQPage
  JSON-LD automatically; answers must be plain text.
- **≥2 internal links** in body copy (home, `/faq`, `/privacy`, or a sibling
  money page).
- **CTA never dead-ends**: use `StoreCta` (at minimum at the bottom); inline
  text links to `APP_STORE_URL` are encouraged mid-page.
- **`LastUpdated`** directly under the `<h1>`, with a `note` naming which
  competitor pages you fact-checked and when.

## File templates

### `meta.json`

```json
{
  "lastModified": "2026-07-14",
  "changeFrequency": "monthly",
  "priority": 0.7
}
```

`app/sitemap.ts` scans `app/(seo)/*/meta.json` at build time — your page
appears in the sitemap automatically. `changeFrequency` and `priority` are
optional (defaults: `monthly`, `0.7`).

### `content.ts` (skeleton)

```ts
// FACT PROVENANCE — every competitor claim checked on YYYY-MM-DD against:
//   - https://competitor.example/pricing   (what you verified there)
//   - ...

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";

export const SLUG = "my-page-slug";                    // must equal folder name
export const LAST_UPDATED = "2026-07-14";              // = meta.json lastModified
export const FACTS_CHECKED_NOTE = "Competitor facts checked against … on July 14, 2026";

export const PAGE_TITLE = "…";        // ≤ ~55 chars; layout appends " · LoudReader"
export const PAGE_DESCRIPTION = "…";  // ≤ ~160 chars
export const H1 = "…";

export const COMPARISON_COLUMNS = ["LoudReader", "Competitor"];
export const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Premium price", cells: ["…", "…"] },
  // …
];

export const FAQS: Faq[] = [
  { q: "…?", a: "Plain-text answer — emitted verbatim into FAQPage JSON-LD." },
  // …
];
```

### `page.tsx` (skeleton)

```tsx
import type { Metadata } from "next";
import Link from "next/link";

import ComparisonTable from "@/components/money/ComparisonTable";
import FaqSection from "@/components/money/FaqSection";
import LastUpdated from "@/components/money/LastUpdated";
import MoneyPageLayout from "@/components/money/MoneyPageLayout";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import {
  COMPARISON_COLUMNS, COMPARISON_ROWS, FACTS_CHECKED_NOTE, FAQS,
  H1, LAST_UPDATED, PAGE_DESCRIPTION, PAGE_TITLE, SLUG,
} from "./content";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  alternates: { canonical: `/${SLUG}` },
  openGraph: { url: `/${SLUG}`, title: PAGE_TITLE, description: PAGE_DESCRIPTION },
};

export default function Page() {
  return (
    <MoneyPageLayout>
      <header className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">{H1}</h1>
        <LastUpdated date={LAST_UPDATED} note={FACTS_CHECKED_NOTE} />
      </header>

      <Tldr>
        <p>{/* 100–150 word direct answer */}</p>
      </Tldr>

      <QuestionSection question="Why look for …?">
        <p>{/* body copy; <Link href="/faq">…</Link> internal links */}</p>
      </QuestionSection>

      <QuestionSection question="How do X and Y compare?">
        <ComparisonTable caption="…" columns={COMPARISON_COLUMNS} rows={COMPARISON_ROWS} />
      </QuestionSection>

      {/* … more QuestionSections, incl. the honest-concessions one … */}

      <FaqSection faqs={FAQS} />
      <StoreCta headline="…" subline="…" />
    </MoneyPageLayout>
  );
}
```

## Styling conventions (match the existing site)

Pages render on a white card (`MoneyPageLayout` handles it). Inside sections:
body text `text-gray-600`, emphasis `text-gray-900`, links
`text-loudBlue hover:underline`, lists `list-disc pl-6 space-y-2`. Don't
invent new colors or fonts; don't use framer-motion on these pages.

## Verify before handing off

1. `npm run build` passes (this also validates every `meta.json`).
2. `curl -s http://localhost:3000/<slug>` (after `npm run start`) — strip
   scripts, confirm all body copy is present in the raw HTML.
3. Your URL appears in `http://localhost:3000/sitemap.xml`.
4. FAQPage JSON-LD present exactly once; no `aggregateRating` anywhere.
5. Every competitor number in the page appears in the fact-provenance comment
   in `content.ts` with a source URL.

## Optional post-merge step (shared files — do NOT do this in parallel)

After merge, whoever integrates may add the page as one line under `## Pages`
in `public/llms.txt`. Low priority; skip it in your branch.
