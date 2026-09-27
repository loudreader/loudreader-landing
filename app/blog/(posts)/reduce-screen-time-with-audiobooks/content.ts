// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does playing an audiobook automatically reduce screen time?",
    "a": "No. It reduces display use only when it replaces time looking at a screen. Browsing another app or device while listening may leave total display use unchanged."
  },
  {
    "q": "Will the phone display always be dark when locked?",
    "a": "That depends on device settings such as notifications and an always-on display. LoudReader can continue playback while locked, but does not guarantee the display stays dark."
  },
  {
    "q": "Should I avoid looking at the text entirely?",
    "a": "No. Look when the material calls for a diagram, spelling check or note. Decide which parts of your routine you actually want to move off screen."
  },
  {
    "q": "Does this guide promise better sleep or eye health?",
    "a": "No. It describes a practical change in display use, not a medical outcome."
  },
  {
    "q": "Can I alternate reading and listening in LoudReader?",
    "a": "Yes, within the same imported text. Check the current passage when switching and remember that positions do not automatically sync between devices."
  }
];
