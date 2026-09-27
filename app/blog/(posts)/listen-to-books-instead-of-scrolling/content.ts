// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Do I need to stop using social media completely?",
    "a": "No. Pick one slot you want to change and leave useful or enjoyable uses alone. The experiment can stay small."
  },
  {
    "q": "What if the book feels less interesting than the feed?",
    "a": "Choose another book, shorten the session or decide this is not the right slot. The aim is a choice you want to repeat, not a punishment."
  },
  {
    "q": "Can I scroll while listening?",
    "a": "You can, but it defeats a screen-off goal and makes it harder to judge whether you followed the book. Try giving the activities separate time."
  },
  {
    "q": "Are notes and highlights paid features in LoudReader?",
    "a": "No. Notes and highlights do not require Premium. Adjustable playback speed, the sleep timer and soundscapes are paid features."
  },
  {
    "q": "Will this cure compulsive scrolling?",
    "a": "This article makes no treatment claim. It describes a small optional change to one routine."
  }
];
