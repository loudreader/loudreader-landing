// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Can listening replace reviewing the methods and results?",
    "a": "No. Use it to orient yourself or revisit prose, then inspect the original methods, figures, tables and supporting evidence before relying on a result."
  },
  {
    "q": "How many papers should I expect to finish per commute?",
    "a": "There is no useful universal number. Paper length, familiarity, extraction quality and the depth of your review all change the work required."
  },
  {
    "q": "Are research notes and highlights Premium-only?",
    "a": "No. LoudReader notes and highlights are free. Adjustable playback speed and the sleep timer are paid features."
  },
  {
    "q": "Does LoudReader sync with my reference manager?",
    "a": "No automatic Zotero, Mendeley or EndNote integration is provided. Keep source records and verified research notes in your own reference workflow."
  },
  {
    "q": "Can I move from iPhone to Mac automatically?",
    "a": "No automatic library or reading-position sync is provided. The Mac version runs as a compatible iPad app; track the source version and passage when moving between devices."
  }
];
