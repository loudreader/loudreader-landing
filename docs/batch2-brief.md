# Batch 2 generation brief (for opencode + DeepSeek)

You are writing new blog articles for loudreader.io. Work ONE cluster at a time
(A–F, defined in `docs/article-plan-batch2.md`). For every topic row in the
cluster you are told to write, create ONE article.

## Read these first (every run)
1. `docs/article-contract.md` — the exact folder/file structure and shared components. Follow it to the letter.
2. `docs/voice-guide.md` — the voice + de-slop rules.
3. The reference article `app/blog/(posts)/listen-to-books-while-driving/` — copy its structure/wiring; change only the topic-specific copy.
4. `components/money/site.ts` — import real facts (APP_STORE_URL, DIFFERENTIATORS, PRICING); never retype them.

## One article = one folder
Create `app/blog/(posts)/<slug>/` with exactly `meta.json`, `content.ts`, `page.tsx`
(per the contract). The folder name IS the slug. Use the slug from the plan row.
NOTE the parentheses in `(posts)` — quote paths in the shell.

## HARD RULES (violating any = the article is rejected)
1. **ZERO em-dashes (—) and en-dashes-used-as-dashes (–), anywhere, including comments.** Rewrite around them: period, comma, "so", "and". Number ranges use "0.3x to 3.0x", not "0.3x–3.0x".
2. **Voice:** plain, direct, human, like a smart friend who uses the app — NOT a marketer, NOT an AI. Contractions, short sentences. Banned words: moreover, furthermore, seamless, effortless, unlock, elevate, robust, leverage(verb), delve, dive in, "when it comes to", "the beauty of", "in today's world". No throat-clearing intros; the first sentence does work. No rhetorical triads or staccato "X. Y. Z." drama.
3. **Differentiator, comma form verbatim:** "fully on-device and private, your library never leaves your device". (The contract shows an older em-dash version — ignore it, use this comma form.) Also "natural offline voices" and "native Mac and iPhone apps".
4. **NO fabrication.** No invented testimonials, user comments, reviews, statistics, studies, team members, or features. No `aggregateRating`. If you cite a study, it must be REAL, findable, and relevant — put the exact source in the fact-provenance comment at the top of `content.ts`. If you cannot verify a claim, do not make it. This is the #1 risk with a cheap model — do not guess numbers or research.
5. **App-behavior claims only if true:** LoudReader is on-device, no account, imports EPUB/PDF, has 70,000+ Project Gutenberg books, free tier = unlimited listening, Premium adds all voices + speed (0.3x to 3.0x) + sleep timer + soundscapes + notes. DO NOT claim CarPlay, Android, Windows, live cloud integrations, or OCR of image-only PDFs. Concede honestly what it does NOT do when the topic raises it (DRM/Kindle, CarPlay, languages, scanned PDFs).
6. **Dates = HOLD.** In every `meta.json`, set `"publishedAt": "2026-11-01"` and `"lastModified": "2026-11-01"`. These are held drafts, released later. Do NOT use today's date.
7. Structure per contract: TL;DR first (100–150 words, answers the query standalone), question-form H2s (`QuestionSection`), FAQ 4–6 Q&As (`FaqSection`), ≥2 internal links to money pages (`/speechify-alternative-for-mac` etc.) or home or sibling `/blog/` articles (real routes only), `StoreCta` at the bottom, 1–2 `ArticleIllustration`s. 800–1400 words.
8. Server components only — no `"use client"`. No new npm dependencies.

## After each cluster
1. `npm run build` — must pass (it also validates every `meta.json`).
2. `grep -rn '—\|–' "app/blog/(posts)/<new-slug>"/*` for each new slug — must return nothing.
3. Confirm each new folder has all 3 files and the FAQ/BlogPosting JSON-LD render (build output).

## Do NOT
- Do not edit any shared file (`app/sitemap.ts`, `components/*`, existing articles). Articles are self-contained; the manifest discovers them automatically.
- Do not run `git commit` or push.
- Do not publish (the hold date keeps them invisible until a human releases them).

When done with a cluster, report: which slugs you created, build pass/fail, and your em-dash grep result (must be zero).
