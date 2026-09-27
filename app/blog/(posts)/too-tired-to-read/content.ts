// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Is being too tired to read usually an eye problem?",
    "a": "This article does not diagnose the cause. Decide whether a different format sounds appealing or whether you would rather stop for the night."
  },
  {
    "q": "Does listening require less attention?",
    "a": "It removes the need to look at the text, but following the book still takes attention. Stop or replay if you lose the thread."
  },
  {
    "q": "Can I switch to audio in the same imported book?",
    "a": "Yes. In LoudReader, find the current passage and start playback from the text. Check the first sentence before putting the screen away."
  },
  {
    "q": "Will a sleep timer know when I stopped listening?",
    "a": "No. It pauses at a chosen cutoff. You may still need to rewind to the last passage you remember."
  },
  {
    "q": "Is stopping halfway through a session a problem?",
    "a": "No. Save or note your place and return when you want to. An evening session does not need a minimum page or chapter count."
  }
];
