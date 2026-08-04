// FACT PROVENANCE. Every claim verified on 2026-07-14 against:
//   - LoudReader word-by-word highlighting: LoudReader_mac
//     ReaderStylesheet.swift (.tts-word-highlight + .tts-sentence-highlight)
//     and Engines/HighlightSchedule.swift (per-word timing schedule). Free:
//     highlighting is not among the premium gates in PaywallReason.swift.
//     Free listening unlimited / no word quota: SubscriptionAccess.swift
//     (baseFreeFraction = 1.0) + components/money/site.ts PRICING.
//   - PDF highlighting: PDFImportPipeline.swift converts text-layer PDFs to
//     the same reader format (EPUB package), so the same highlighting
//     applies; image-only scans are rejected ("no text layer" error).
//   - Speechify: word-for-word "active text highlighting" per speechify.com
//     blog ("How do I enable text highlighting on the computer?") and its
//     App Store listing; pricing/limits reuse this repo's provenance in
//     app/(seo)/speechify-alternative-for-mac/content.ts (checked 2026-07-14
//     against speechify.com/pricing and /usage-limits): free tier 10
//     standard voices up to 1.5x, Premium $29/month, metered Premium word
//     allowance (1M words/month guaranteed for 2026; 150k baseline).
//   - NaturalReader: naturalreaders.com (checked 2026-07-14). The mobile app
//     advertises an immersive reading mode with "highlighted text, reduced
//     distractions, and synchronized audio"; free-forever plan exists; web
//     app + mobile apps + Chrome extension. (Their site does not detail
//     free-tier caps, so this article makes no claim about them.)
//   - Voice Dream Reader: synchronized highlighting, offline, subscription
//     $79.99/year. Reuses this repo's provenance in
//     app/(seo)/voice-dream-reader-alternative/content.ts (checked
//     2026-07-14 against voicedream.com and its App Store listing).
//   - Microsoft Immersive Reader: support.microsoft.com ("Read Aloud
//     highlights each word as it reads your document"), free, built into
//     Word/OneNote/Outlook/Teams/Edge.
//   - Research framing: Wood, Moxley, Tighe & Wagner (2018), Journal of
//     Learning Disabilities 51(1), 73 to 84, DOI 10.1177/0022219416688170.
//     A meta-analysis of TTS/read-aloud tools, average effect size .35 on
//     reading comprehension for students with reading disabilities. Cited
//     with the honest caveat that it covers read-aloud tools generally, not
//     highlighting in isolation.
// Claims you may NOT make until verified: NaturalReader free-tier limits;
// highlighting-specific (isolated) comprehension research; languages other
// than English in LoudReader; Speechify/NaturalReader offline behavior.

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";

export const HIGHLIGHT_COLUMNS = [
  "Highlighting",
  "Price",
  "Offline & privacy",
];

export const HIGHLIGHT_ROWS: ComparisonRow[] = [
  {
    label: "LoudReader",
    cells: [
      "Word-by-word + current sentence, free on every book",
      "Free, no word quota; Premium $7.99/mo, $49.99/yr, or $199.99 once",
      "Fully on-device, works in airplane mode, no account",
    ],
  },
  {
    label: "Speechify",
    cells: [
      "Word-for-word active text highlighting",
      "Free tier (10 standard voices, up to 1.5x); Premium $29/mo, metered words",
      "Cloud-based voices and integrations; sign-in required",
    ],
  },
  {
    label: "NaturalReader",
    cells: [
      "Immersive mode with highlighted text synced to audio (mobile app)",
      "Free plan; paid plans on top",
      "Web-first with mobile apps; offline mode on mobile",
    ],
  },
  {
    label: "Voice Dream Reader",
    cells: [
      "Synchronized highlighting, long accessibility pedigree",
      "Subscription, $79.99/year (iOS + Mac)",
      "Works offline; account sign-in for subscription sync",
    ],
  },
  {
    label: "Immersive Reader (Microsoft)",
    cells: [
      "Read Aloud highlights each word",
      "Free, built into Word, OneNote, Teams, Edge",
      "Lives inside Microsoft apps; for documents and web, not book libraries",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Which apps highlight each word as it is spoken?",
    a: "The main options in 2026 are LoudReader (word-by-word highlighting free on every EPUB and PDF, Mac and iPhone), Speechify (word-for-word active highlighting, subscription-first), NaturalReader (highlighted text synced to audio in its mobile immersive mode), Voice Dream Reader (synchronized highlighting, accessibility-first, subscription), and Microsoft Immersive Reader (free word highlighting inside Word, OneNote, Teams, and Edge).",
  },
  {
    q: "Does LoudReader highlight word by word or sentence by sentence?",
    a: "Both at once. The current sentence is highlighted, and within it the word being spoken lights up as the voice reaches it. This works on every book and PDF, on the free tier, with natural offline voices.",
  },
  {
    q: "Does highlighted read-along improve comprehension?",
    a: "Read-aloud tools as a whole have real evidence behind them. A 2018 meta-analysis in the Journal of Learning Disabilities found text-to-speech and related tools moderately improved reading comprehension for students with reading disabilities. Highlighting on its own is less studied. Its value is mechanical: your eyes always know where the voice is, so glancing away costs nothing and your tracking effort goes to meaning instead.",
  },
  {
    q: "Does word highlighting work with PDFs?",
    a: "In LoudReader, yes. PDFs with selectable text get converted into the reader format, and the same word-by-word highlighting applies as with EPUBs. The exception is scanned, image-only PDFs with no text layer. Those can't be read aloud as-is.",
  },
  {
    q: "Is word highlighting a paid feature in LoudReader?",
    a: "No. Word-by-word highlighting is free on every book, and free listening is unlimited with no word quota. Premium ($7.99/month, $49.99/year, or $199.99 lifetime) adds all 23 studio narrators, playback speed control, sleep timer, ambient soundscapes, and notes.",
  },
];
