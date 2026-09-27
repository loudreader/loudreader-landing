# Existing blog refresh — September 27, 2026

Three published evergreen articles were updated. Their slugs and original
`publishedAt` dates stay unchanged; `lastModified` is `2026-09-27` because the
body copy, FAQ data, descriptions, and source notes changed.

| Article | Editorial change |
| --- | --- |
| `on-device-text-to-speech-explained` | Separates local speech generation from downloads, agents, and messaging. Explains when to choose the reading app, open-source framework, or agents preview. Removes blanket privacy and cloud-quality claims. |
| `best-local-ai-apps-mac` | Retitles the page to “Local AI Apps for Mac: What Actually Runs Offline?” and checks vendor documentation again. Organises the comparison around specific local workflows and separate network features. Adds a developer section for Loudkit and agents, and accurately identifies LoudReader's Mac compatibility build. |
| `are-ai-voices-good-enough-for-books` | Replaces unsupported claims about blind tests and what most listeners notice with a practical chapter-length listening checklist. Keeps the reader's choice of a human audiobook clear. Briefly connects the same voice-evaluation idea to software and agents. |

The narrator-choice guide was left unchanged: it was published recently and
is already focused on the consumer reading job. No consumer post was turned
into a release announcement. Release articles remain separate work.

## Sources and limits

Detailed provenance is recorded at the top of each article's `content.ts`.
The current verified product constants in `components/money/site.ts` were
used, preserving their documented app-source provenance; no new runtime audit
of the LoudReader app is claimed.

Third-party local workflows were rechecked against official documentation:

- [LM Studio offline operation](https://lmstudio.ai/docs/app/offline)
- [Ollama FAQ](https://docs.ollama.com/faq)
- [MacWhisper features](https://www.macwhisper.com/)
- [Draw Things](https://drawthings.ai/)

Loudkit's public landing pages were checked alongside its README and agent
page source. The framework and reading app have different voice collections;
the agents service is an Apple Silicon developer preview. Local provider tests
do not establish real messenger delivery. No new performance numbers, live
messenger claims, or guarantees about completely offline agent conversations
were added.

The AI-narration article had a future-dated provenance comment (`2026-11-01`)
even though its actual publication metadata is July 31. The source note now
records the real refresh date. Its original publication date remains July 31.

All new product links point to live landing pages, never the future release
articles. The two existing internal article links referenced by the refreshed
copy are already published as of September 27.

## Validation handoff

JSON metadata parsing, original publication dates, description/title lengths,
FAQ counts, and local page structure were checked without installing packages
or building. Full Next.js build and rendered-page checks belong to the parent
release task, which owns shared components and scheduling changes.

## Announcements and publication

| UTC build date | Article | Destination |
| --- | --- | --- |
| 2026-10-11 | Introducing Loudkit: speech on your own hardware | `/blog/introducing-loudkit` |
| 2026-10-14 | Introducing Loudkit for agents | `/blog/loudkit-voice-notes-for-agents` |

Both are English-language product announcements with documentation and source
links. Their `kind: release` and `featured: true` metadata place them in the
blog's separate Product news section once published. Existing queued articles
keep their original dates. The refreshed evergreen guides are also highlighted
under Start here, without turning the rest of the blog into release notes.

Vercel's existing daily 08:00 UTC cron is enabled; its `daily-rollout` hook
targets `main`, and `DEPLOY_HOOK_URL` is present in Production. Recent daily
deployments were READY. The posts become public after the successful rebuild
on their respective dates; this is not an exact-minute publication promise.

Central checks completed on September 27:

- Three publication tests passed, including October 10/11/13/14 boundaries.
- Full production Next.js build and TypeScript checks passed (379 routes).
- Current-date HTTP checks: both future articles return 404 with noindex and
  no article body; neither appears in `/blog` or `/sitemap.xml`.
- All three refreshed pages return 200, link to the products, and emit exactly
  one BlogPosting and FAQPage with the real September 27 modification date.
- A local-only October 14 preview rendered both new articles with 200, correct
  publication dates and four FAQs each. Blog and article styling was checked
  in the browser. No clock override or preview script is part of the project.
- Independent content review checked all eleven external release links (200),
  the messenger verification caveats and publication discovery. Its native-Mac
  wording correction was applied before the build.
- Vercel preview deployment `dpl_3k4JjCeMnmozpSzuRZe36CHTiNDg` is READY.
