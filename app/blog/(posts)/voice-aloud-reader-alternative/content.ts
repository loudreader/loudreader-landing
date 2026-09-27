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
// - https://hyperionics.com/atvoice/index.asp — Android, supported inputs, free-with-ads and permanent Premium licence.
// - https://hyperionics.com/atVoice/features/cloud-tts-voices-android.asp — installed engines and optional cloud voices.
// - https://www.hyperionics.com/atvoice/AppFeatures.html — pronunciation, reading lists, bookmarks, sync and export formats; no LoudReader interoperability claimed.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  { q: "Can I use LoudReader on Android?", a: "No. LoudReader runs on iPhone and iPad, and as an iPad app on compatible Apple Silicon Macs. @Voice Aloud Reader is an Android app." },
  { q: "Can I improve @Voice without changing reader?", a: "Often the first thing to try is a different installed TTS engine or voice. @Voice supports installed Android engines and optional cloud configurations; their costs and offline requirements can differ." },
  { q: "Can LoudReader import my @Voice bookmarks?", a: "There is no automatic transfer of @Voice bookmarks, pronunciation rules or reading position. Import original DRM-free EPUB/PDF files and note your place before moving." },
  { q: "Does LoudReader support articles as well as books?", a: "Yes. It saves web articles from links or the share extension and imports EPUB/PDF books. Free article saving has a 30-save allowance; Premium unlocks unlimited saving." },
  { q: "What stays free in LoudReader?", a: `${FREE_TIER.full} Notes and highlights remain available without Premium. Controls such as adjustable speed and the sleep timer require Premium.` }
];
