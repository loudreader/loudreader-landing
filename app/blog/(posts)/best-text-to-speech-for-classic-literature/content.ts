// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Primary source checked 2026-09-28: https://www.gutenberg.org/policy/permission
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Can classic books work with text-to-speech?",
    "a": "Yes, when the text imports cleanly and the voice suits you. Sample long sentences, dialogue and unfamiliar names; results vary by edition and voice."
  },
  {
    "q": "Will slowing the voice fix every difficult passage?",
    "a": "No. It can make a passage easier to follow, but unfamiliar vocabulary, complex arguments and extraction errors still need attention. LoudReader speed control is Premium."
  },
  {
    "q": "Are all Gutenberg classics free worldwide?",
    "a": "Do not assume so. Gutenberg applies US copyright rules. Check the notice for the specific edition and the rules where you are, including the status of translations and illustrations."
  },
  {
    "q": "Is a synthetic voice the same as a performed audiobook?",
    "a": "No. Both can speak the text, but a recording may include deliberate interpretation and character performances. Sample both when those qualities matter."
  },
  {
    "q": "Should I prefer EPUB or PDF?",
    "a": "Try a clean EPUB for reflowable prose. A PDF preserves page layout but may introduce reading-order or recognition problems. The exact file matters more than the extension alone."
  }
];
