// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Will a TTS narrator tell me whether dialogue is good?",
    "a": "No. It can prompt useful questions, but delivery depends on the voice and formatting. Re-read flagged dialogue with its intended expression before revising."
  },
  {
    "q": "Should I fix every problem while listening?",
    "a": "Choose one method for the pass. For scene structure, an issue log lets you hear the full scene; for wording, pausing and fixing a short passage can be more convenient."
  },
  {
    "q": "Which manuscript formats can LoudReader import?",
    "a": "Export a DRM-free EPUB or PDF. LoudReader does not edit your original writing project, so make corrections in the master manuscript."
  },
  {
    "q": "Does local narration mean no app telemetry?",
    "a": "No. LoudReader generates speech locally but includes crash/performance diagnostics and usage analytics. Usage analytics is enabled by default, and version 1.12 has no visible switch to disable it."
  },
  {
    "q": "Will my manuscript position sync between devices?",
    "a": "No automatic LoudReader library or reading-position sync is provided. Keep track of your chapter and version if you move a listening copy to another device."
  }
];
