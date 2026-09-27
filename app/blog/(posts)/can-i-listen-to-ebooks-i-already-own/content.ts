// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Primary source checked 2026-09-28: https://kdp.amazon.com/en_US/help/topic/GDDXGH9VR22ACM8U
// Primary source checked 2026-09-28: https://help.kobo.com/hc/en-us/articles/360019527954-Download-books-from-your-Kobo-account-to-export-to-another-device-or-app
// Primary source checked 2026-09-28: https://manual.calibre-ebook.com/drm.html
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does owning an ebook mean I can import it into LoudReader?",
    "a": "Not necessarily. You need an accessible DRM-free EPUB or PDF, not just a title listed in a store account."
  },
  {
    "q": "Can eligible Kindle purchases now be downloaded as EPUB or PDF?",
    "a": "Yes. Amazon allows this for confirmed DRM-free titles for verified purchasers. Availability depends on the publisher’s setting; Kindle Unlimited loans do not qualify."
  },
  {
    "q": "Does a Calibre error prove that a book has DRM?",
    "a": "No. Calibre cannot open DRM-protected books, but errors can also come from unsupported or damaged files. Read the specific error and check the download format."
  },
  {
    "q": "Can LoudReader remove DRM?",
    "a": "No. Use an authorised compatible download, listening features in the original service, or another edition you are entitled to use."
  },
  {
    "q": "Can I import a scanned PDF?",
    "a": "LoudReader can attempt local OCR for image-based PDFs. Poor scans and complex layouts may need correction or a better source copy."
  }
];
