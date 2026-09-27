// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Do I need mobile data during a listening walk?",
    "a": "Not for ready-to-use local narration. Import the book, open the desired voice and test it offline before leaving."
  },
  {
    "q": "Do one earbud or open-ear headphones guarantee safety?",
    "a": "No. Pause whenever your surroundings need attention, and stop somewhere suitable before looking at the phone."
  },
  {
    "q": "Will my headphones control playback?",
    "a": "Standard media controls may work, but gestures vary by accessory. Test play and pause before you leave."
  },
  {
    "q": "How much battery will a long walk use?",
    "a": "It depends on your phone, voice and other activity. No battery-life benchmark is claimed here; check your own setup before a long outing."
  },
  {
    "q": "What if I keep losing the story?",
    "a": "Use a book that is easier to resume, shorten the listening part or leave the walk silent. You do not need to finish a chapter on every outing."
  }
];
