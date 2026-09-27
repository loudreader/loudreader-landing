// FACT PROVENANCE — reviewed 2026-09-28, not a comparative listening test.
// LoudReader shipping release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
// audited in docs/product-facts-2026-09-28.md:
// SubscriptionAccess.swift and SubscriptionManager.swift: 8 cumulative listening
// hours, limited free English voice selection thereafter; book listening stays free.
// PaywallReason.swift: speed/timer/unlimited article saving are Premium;
// notes/highlights are not Premium-only. ArticleImportPipeline + share extension:
// direct saved-web-article workflow. BookImportService + PDFImportPipeline:
// DRM-free EPUB/PDF, local OCR with layout/legibility limitations.
// Xcode iOS target: iPad compatibility on Apple Silicon, no native macOS target.
// App-group entitlement only: no automatic library or reading-position sync.
// LoudReaderApp.swift and Analytics.swift: local narration plus Sentry diagnostics
// and usage analytics. The opt-out control is hidden in release1.12; do not
// promise a visible Settings toggle or call usage collection opt-in.
// No independent network audit, universal voice-quality ranking or hands-on
// competitor benchmark is claimed. Prices/features can vary by storefront.
// Official competitor sources retrieved 2026-09-28:
// - https://support.mozilla.org/en-US/kb/future-of-pocket — July8 2025 shutdown; current export/API closure date Nov12 2025 supersedes older Oct8 notices.
// - https://www.instapaper.com/docs/premium/overview — current Premium archive/search/mobile TTS playlists.
// - https://support.apple.com/guide/iphone/annotate-and-save-a-webpage-as-a-pdf-iphfd5b616b5/ios — Safari Share/Markup PDF saving.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  { q: "Does Pocket still have a listen feature?", a: "No. Pocket shut down on 8 July 2025. Its web and mobile services are no longer available." },
  { q: "Can I export my Pocket account now?", a: "No. Mozilla says exports ended on 12 November 2025. You need an export already saved elsewhere, original links or your own file copies." },
  { q: "Can LoudReader import a Pocket export automatically?", a: "There is no Pocket integration or automatic transfer of tags, highlights and positions. Use accessible original article links or supported EPUB/PDF files to rebuild the material you want." },
  { q: "Must every article be converted to PDF?", a: "No. LoudReader can save web articles from links or its share extension. A saved PDF is a fallback when extraction is incomplete or you already have a file." },
  { q: "Is unlimited article saving free?", a: `The free article-saving allowance is 30 saves. Premium unlocks unlimited article saving. Whole-book listening has a different allowance: ${FREE_TIER.full}` }
];
