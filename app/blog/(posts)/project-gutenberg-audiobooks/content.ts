// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Primary source checked 2026-09-28: https://librivox.org/pages/about-librivox/
// Primary source checked 2026-09-28: https://marhamilresearch4.blob.core.windows.net/gutenberg-public/Website/index.html
// Primary source checked 2026-09-28: https://www.gutenberg.org/policy/license
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Is every Gutenberg title unrestricted worldwide?",
    "a": "No. Check the notice for the exact ebook and local rules. Gutenberg’s assessment is based on US law, and translations or other edition material can differ."
  },
  {
    "q": "Are LibriVox recordings made by people?",
    "a": "Yes. Volunteers record the books. Sample the particular recording and check its reader, language and edition."
  },
  {
    "q": "What is the Open Audiobook Collection?",
    "a": "A project involving Gutenberg, Microsoft and MIT that provides thousands of synthetic audiobook recordings. It is separate from using a reader to narrate your own ebook."
  },
  {
    "q": "Are all Gutenberg books already on my phone after installing LoudReader?",
    "a": "No. In-app catalogue access and downloaded books are different. Download or import the book and prepare the voice before relying on offline use."
  },
  {
    "q": "Do I need a matching audiobook to follow the text in LoudReader?",
    "a": "No. The app narrates its imported text, with word-following highlighting. That is a different workflow from playing a separate recording beside an ebook."
  }
];
