# Blog editing and publication

Each article lives in `app/blog/(posts)/<slug>/` with `page.tsx`, `content.ts`
and `meta.json`. The existing slug is a public URL: preserve it when correcting
or retitling an article. The manifest discovers articles automatically.

## Read and verify before editing

Read all three files, including FAQ answers and metadata. An accurate body with
an obsolete description or FAQ is still an inaccurate article. Use
`docs/product-facts-2026-09-28.md` and `components/money/site.ts` for the
release-verified product baseline. Recheck them against the shipping release
when the app changes; a dirty checkout, source comment or old marketing page
is not by itself proof of current behaviour.

Import shared facts such as `FREE_TIER`, `VOICES`, `PRICING`, `CLONING`, `MAC`
and `PRIVACY` rather than transcribing them. Device-dependent availability,
trial limits, normal offline listening, and network diagnostics are distinct
facts. Do not describe the iPad build as a native Mac app, notes as Premium-only,
or local narration as proof that the app sends no telemetry.

Verify changing competitor claims against current official sources. Use
primary research for scientific claims, and accurately state what a study
actually measured. Do not invent listening tests, exact quality scores,
medical benefits, adoption figures, authors, testimonials or future verification
dates. Remove a claim that cannot be supported. Public-domain status depends
on territory and the particular edition, translation and recording.

Record what you checked, the source and check date in the provenance comment
at the top of `content.ts`. A real runtime test and a source-code inspection
are different evidence; identify which one was done.

## Write for the reader

Answer the article's own practical question first. Explain useful steps,
choices and limitations. Keep distinct jobs distinct: choosing an app,
checking an edition, troubleshooting a PDF and deciding on a voice should not
all become the same sales pitch. Avoid repeated generic paragraphs, made-up
precision, unsupported superiority and claims that everyone learns or listens
the same way.

LoudReader is the reading app; Loudkit is the open-source developer framework;
Loudkit for agents is a separate companion preview. Link to the developer
products where they help the reader. Consumer articles do not all need an
agent pitch. Product announcements should link to the relevant docs, source
or setup page; an App Store CTA is only appropriate for the reading app.

When a comparison recommends LoudReader, put the shared `Disclosure` component
near the first recommendation, normally in `Tldr`. The shared `Byline` names
the real developer. Do not invent a reviewer or imply independent testing.

## Page structure and metadata

Use the existing server-rendered `ArticleLayout`, `Tldr`, `QuestionSection`,
`FaqSection`, `ArticleIllustration` and appropriate CTA components. No new
client-side content dependency or package is needed. FAQ answers must agree
with the body; `FaqSection` produces their structured data automatically.
Use concise titles and descriptions that accurately describe the article,
not a second sales pitch. Keep the existing typography and colours.

`meta.json` contains the slug, title, description, publication and modification
dates, plus optional internal avatar/query fields. Reader-facing `topic` is
one of: `reading`, `formats`, `voices`, `learning`, `comparisons`, `classics`,
`technology`. This drives blog sections and the related-article selection.
Product announcements additionally use `kind: release`; `featured: true`
gives important releases priority. Existing guides may omit `kind`.

- Keep `publishedAt` unchanged when refreshing an existing article.
- Set `lastModified` only for a real edit. A fresh build or review alone does
  not justify a new modification date.
- A held article initially uses its intended publication date for both dates;
  record the earlier drafting/verification date in the source provenance.
- All dates use `YYYY-MM-DD`. Slug must match the folder name.
- Link to existing, published destinations. A post may link to an earlier
  scheduled post that will be public by its own publication date, but not a
  later one. Use a currently live product landing page when appropriate.

## Publication and checks

The manifest excludes future posts from the blog, related links and sitemap.
`ArticleLayout` returns404 for their direct URLs until a rebuild on or after
their publication date. Vercel's existing daily08:00UTC cron calls
`/api/cron/rollout`; the production `DEPLOY_HOOK_URL` rebuilds `main`.
Publication follows a successful build, not midnight or an exact-minute promise.
Verify that cron and hook remain active; do not add a competing publisher.

Run `node --test scripts/blog-schedule.test.mjs` and `npm run build`. Check
rendered HTML, metadata and JSON-LD as well as source syntax. Confirm held
articles still return404 and stay out of discovery. When doing an archive
pass, keep a per-article audit record so every article is accounted for.
