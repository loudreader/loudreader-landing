// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// SleepTimerFloatingMenu.swift options [15,30,60]; PlayerService.tickSleepTimer pauses playback. No child-development or sleep-benefit claims.
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Do I need a long session for it to be worthwhile?",
    "a": "No. A few enjoyable minutes are worthwhile on their own. Short sessions will not necessarily finish a chapter, and you do not need to turn them into a book-count target."
  },
  {
    "q": "Will the app remember what I heard?",
    "a": "It can save the playback position, but it cannot tell when you stopped paying attention. Rewind to the last passage you recognise after an interruption."
  },
  {
    "q": "Is one earbud enough to keep me aware of a child?",
    "a": "No headphone arrangement guarantees attention. Use a setup that lets you notice your surroundings, and pause the audio whenever supervision needs your attention."
  },
  {
    "q": "Can I use an ebook I already own?",
    "a": "Yes, if you have a supported DRM-free EPUB or PDF. Store or library access alone does not necessarily give you an importable file."
  },
  {
    "q": "Can I listen without paying for Premium?",
    "a": "Try every available voice for your first 8 hours of listening. Afterwards, a free English voice selection remains available with unlimited book listening. Speed control and the sleep timer are paid features."
  }
];
