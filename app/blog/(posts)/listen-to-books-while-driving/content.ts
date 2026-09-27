// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// PlayerService.swift MPRemoteCommandCenter supports preferred 15-second skips; actual vehicle mapping varies. No dedicated CarPlay target/entitlement in release audit.
// Primary source checked 2026-09-28: https://www.gov.uk/using-mobile-phones-when-driving-the-law
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does LoudReader have a dedicated CarPlay app?",
    "a": "No. It can play through the iPhone’s connected audio output and supports standard media commands, but it has no dedicated CarPlay interface."
  },
  {
    "q": "Can I use lock-screen controls while driving?",
    "a": "Do not handle the phone while driving. Set up while safely parked and follow the laws where you are. A lock screen is not a safety or legal exemption."
  },
  {
    "q": "Will every steering-wheel button work?",
    "a": "No universal guarantee is made. Test your vehicle’s supported pause and playback controls while safely parked."
  },
  {
    "q": "Will an imported book play without signal?",
    "a": "Local narration can work offline when the book and required voice resources are ready. Test the exact setup before the journey."
  },
  {
    "q": "What if listening distracts me?",
    "a": "Stop listening when you can do so safely. A hands-free setup does not make the story attention-free."
  }
];
