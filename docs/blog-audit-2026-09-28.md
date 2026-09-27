# Full blog editorial review — 28 September 2026

All 152 article sets were read in full: page body, FAQ/source notes and metadata.
150 articles received substantive revisions. The two recently prepared Loudkit
announcements were reviewed and retained; their publication dates remain
11 October (framework) and 14 October (agent voice notes).

The per-article findings, changes and source references are recorded in
[the audit manifest](./blog-audit-2026-09-28.json). Product claims use the
[shipping 1.12 facts audit](./product-facts-2026-09-28.md), not assumptions
from old marketing copy. No new app runtime or messenger test is claimed.

## What changed

- Corrected the free voice allowance, device-dependent voices, free notes,
  cloning trial, local OCR and the absence of cross-device library sync.
- Distinguished local speech processing from default app diagnostics and
  analytics. Release 1.12 does not expose a visible analytics opt-out.
- Updated comparisons using primary vendor documentation, including Pocket's
  closure, current Mac options, Apple controls and audiobook access rules.
- Removed invented quality scores, universal learning/comprehension claims,
  misleading timing arithmetic and unsupported confidentiality guarantees.
- Checked book editions, translations and territorial rights. The catalogue's
  Gulliver entry is an abridgement; it now identifies that and links readers
  towards the full four-voyage edition.
- Reworked overlapping guides around different practical tasks, preserving
  useful detail, original publication dates and every existing article URL.
- Added seven topic sections and topic-aware related articles, with clear
  developer authorship and comparison disclosures. Product links retain the
  distinction between LoudReader, the Loudkit framework and the agent preview.
- Aligned the linked homepage, FAQ, support, voice gallery, privacy policy,
  machine-readable product facts, catalogue templates and ten product/SEO pages. Consent logic,
  scheduling, application behaviour and dependencies were not changed.

## Validation

- All 152 original publication dates preserved; all 152 articles classified.
- Five tests pass for publication boundaries, release grouping, topic coverage
  and related-article selection without premature scheduled links.
- Next.js production build and TypeScript checks pass: 379 generated routes.
- Local production-server audit: 117 currently published articles return 200;
  35 held articles return 404 with noindex and no BlogPosting. Index and sitemap
  contain exactly the published article set. Each published article has one
  BlogPosting, one FAQPage, correct dates/canonical and one H1.
- All 40 additional internal destinations linked by those articles return 200.
  The source-link audit also checks held-to-held publication order.
- Editorial components, articles, product pages and scheduling test pass ESLint
  with zero errors/warnings. Broader lint retains 12 errors and two warnings
  already present in the base homepage animation and analytics components;
  those were reproduced against base commit 6a76591. Behaviour there is unchanged.
- Browser review confirms the blog layout, category navigation and article
  typography/author attribution. Literal Unicode escapes in JSX were repaired.

The existing daily Vercel rebuild remains responsible for scheduled publication.
Submission to a search engine is not a guarantee of indexing or rankings.
