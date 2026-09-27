// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "How many days does it take to build a reading habit?",
    "a": "This guide does not promise a number. Use a week as a convenient review point to see whether the book, format and occasion suit you."
  },
  {
    "q": "Does it have to happen every day?",
    "a": "No. Pick a frequency that fits your week. Several enjoyable sessions can be a better plan than a daily target you dislike."
  },
  {
    "q": "Should I start with a short book?",
    "a": "A short book can give an early finishing point, but interest and ease of returning matter too. Choose something you want to continue."
  },
  {
    "q": "Does listening count for my own reading goal?",
    "a": "You can define your personal goal to include audio. If you are following a class, challenge or other external rule, check its requirements."
  },
  {
    "q": "What should I do after missing a day?",
    "a": "Resume at the next suitable moment. If misses repeat, adjust one part of the plan rather than creating catch-up sessions."
  }
];
