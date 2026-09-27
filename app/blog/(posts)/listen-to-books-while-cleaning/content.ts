// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does cleaning leave my full attention free for a book?",
    "a": "Not always. Try quiet, familiar tasks and pause for anything that needs concentration or awareness."
  },
  {
    "q": "How do I pause with occupied hands?",
    "a": "Test the controls on your particular speaker or headphones before starting. Keep the phone somewhere dry and stable rather than handling it with wet or dirty hands."
  },
  {
    "q": "Should I turn the book up over the vacuum?",
    "a": "Pause for noisy tasks and resume afterwards. There is no need to catch every sentence while the task drowns it out."
  },
  {
    "q": "Does switching apps automatically pause LoudReader?",
    "a": "Do not rely on that. Pause the book explicitly before switching to other audio."
  },
  {
    "q": "Can I use my own books?",
    "a": "Yes, supported DRM-free EPUBs and PDFs can be imported. Test the file and voice before your hands are busy."
  }
];
