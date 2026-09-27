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
// - https://speechcentral.net/ — current platforms, open local/cloud voice platform, one-time unlock, eligible free access.
// - https://apps.apple.com/us/app/speech-central-text-to-speech/id1223093645?mt=12 — Mac app exists; installed offline/third-party and optional cloud voices, platform-specific licensing.
// - https://speechcentral.net/2023/09/02/elevate-your-voice-reading-experience-with-speech-central-beyond-the-ordinary/ — web/headline/RSS workflows.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  { q: "Does Speech Central have a Mac app?", a: "Yes. Speech Central has a Mac App Store listing, as well as versions for other platforms. LoudReader instead runs its iPad app on compatible Apple Silicon Macs." },
  { q: "Are all Speech Central voices offline?", a: "No. Speech Central supports offline and optional cloud voice configurations. Check the selected voice and provider rather than treating the whole app as one speech engine." },
  { q: "Which app sounds better?", a: "There is no comparative listening test behind this article. Try the same passage, language and comfortable speed in each app and judge the available voices on your own device." },
  { q: "Does LoudReader read web articles?", a: "Yes. Articles can be saved from links or the share extension. The free allowance is 30 article saves; Premium unlocks unlimited article saving. EPUB and PDF book imports are also supported." },
  { q: "Can I listen free in LoudReader?", a: `${FREE_TIER.full} Features including adjustable speed and sleep timer require Premium; notes and highlights do not.` }
];
