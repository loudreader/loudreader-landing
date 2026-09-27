// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Primary source checked 2026-09-28: https://writingcenter.unc.edu/tips-and-tools/editing-and-proofreading/
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Will listening catch every typo?",
    "a": "No. It can flag missing words, repetition and awkward joins, but homophones, formatting and many punctuation errors need a visual check."
  },
  {
    "q": "Does a strange pronunciation mean my spelling is wrong?",
    "a": "Not necessarily. Check the written word and its source; a speech engine may mispronounce a correct name or abbreviation."
  },
  {
    "q": "Should I read backwards?",
    "a": "It is an optional way to isolate spelling or individual sentences. It does not replace reading the passage in context for meaning."
  },
  {
    "q": "Should I wait before proofreading?",
    "a": "If your deadline allows, take a break before the final pass. There is no required number of hours or days; a careful short pass is more useful than a timing promise."
  },
  {
    "q": "Where should I make corrections?",
    "a": "In the master writing document. Export a fresh listening copy if needed, and recheck the changed sentence in context."
  }
];
