// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Primary source checked 2026-09-28: https://journals.sagepub.com/doi/10.3102/00346543211060871
// Primary source checked 2026-09-28: https://journals.sagepub.com/doi/10.1177/2158244016669550
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Is it fair to count an audiobook in a personal reading list?",
    "a": "Yes, if your goal is engaging with books. Say that you listened when the format is relevant. Formal assignments or challenges may have their own rules."
  },
  {
    "q": "Does research prove listening and reading are identical?",
    "a": "No. A 2022 meta-analysis found no reliable overall comprehension difference, with differences in some conditions. An average result is not a guarantee for every learner, task or setting."
  },
  {
    "q": "Does listening while reading always improve comprehension?",
    "a": "No. The 2016 experiment discussed here did not find a significant advantage for its combined condition. Try the combination for your task rather than treating it as universally better."
  },
  {
    "q": "Can I rely on these results while multitasking?",
    "a": "The cited findings do not establish that a distracted commute or chore session matches a focused read. Pause and revisit anything important."
  },
  {
    "q": "Has LoudReader been tested in those studies?",
    "a": "No. They studied reading and listening conditions, not this app or its voices."
  }
];
