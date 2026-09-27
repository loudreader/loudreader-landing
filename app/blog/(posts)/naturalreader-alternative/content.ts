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
// - https://help.naturalreaders.com/en/articles/8584530-what-is-naturalreader-ai-text-to-speech-personal-version — platforms/formats.
// - https://www.naturalreaders.com/software.html — separate desktop perpetual licence.
// - https://help.naturalreaders.com/en/articles/11543218-working-with-text-and-audio-personal-version — paid MP3 conversion, offline playback and limits.
// - https://help.naturalreaders.com/en/articles/8854700-plans-pricing-personal-version — personal subscriptions; no exact competitor price repeated.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  { q: "Is NaturalReader subscription-only?", a: "No. Its online personal reader has subscription plans, while the separate NaturalReader Software product offers paid perpetual desktop licences. Compare the specific product you use." },
  { q: "Can NaturalReader be used offline?", a: "NaturalReader supports saving converted audio for offline listening on eligible plans. That is different from generating new speech locally. Check the requirements of the particular product, voice and plan." },
  { q: "What can I move into LoudReader?", a: "DRM-free EPUB and PDF files can be imported. Saved web articles are also supported. Do not expect NaturalReader annotations, audio libraries or reading positions to transfer automatically." },
  { q: "Is LoudReader free to try?", a: `${FREE_TIER.full} Premium includes the full available voice selection and controls such as adjustable speed and sleep timer.` },
  { q: "Does local narration mean LoudReader collects no data?", a: "No. Narration runs locally, but the app sends crash/performance diagnostics and usage analytics. Local speech does not mean the entire app is free of network activity." }
];
