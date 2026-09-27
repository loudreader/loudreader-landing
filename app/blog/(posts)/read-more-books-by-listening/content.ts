// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "How many extra books will listening let me finish?",
    "a": "There is no reliable universal number. Use your actual available sessions and a particular book’s remaining length, then allow for interruptions and replaying."
  },
  {
    "q": "Do I need to listen at a high speed?",
    "a": "No. Choose a pace you enjoy and can follow. Rewinding repeatedly may erase any apparent time saving."
  },
  {
    "q": "Can I read and listen to the same imported book?",
    "a": "Yes. LoudReader can narrate the text in its reader. Check the current passage when switching between silent reading and playback."
  },
  {
    "q": "Will my place automatically move between my iPhone and Mac?",
    "a": "No. LoudReader does not provide automatic library or reading-position sync. Track the chapter yourself if you move a copy."
  },
  {
    "q": "Should I keep listening to a book just to finish it?",
    "a": "That is your choice. For leisure reading, stopping or changing formats can be more useful than protecting a completion count."
  }
];
