// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Can LoudReader read scanned research papers?",
    "a": "It can attempt local OCR. Results depend on the scan; the current pipeline processes at most 300 OCR pages per import and can report partial results."
  },
  {
    "q": "Will two-column papers always read in the right order?",
    "a": "No guarantee is made. Compare a sample and a column transition with the original before relying on the listening copy."
  },
  {
    "q": "Can I trust narrated equations and tables?",
    "a": "Keep the original visible for those. Speech can omit or misrepresent structure even when the surrounding prose sounds fluent."
  },
  {
    "q": "Does a successful import mean the paper is complete?",
    "a": "No. Check import warnings, the end of the document and a few representative passages."
  },
  {
    "q": "Is local narration enough to approve a confidential review workflow?",
    "a": "No. Follow the applicable review or institutional rules. LoudReader processes speech locally but also has diagnostics and usage analytics."
  }
];
