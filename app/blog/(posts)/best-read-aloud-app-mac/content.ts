// FACT PROVENANCE — editorial verification on 2026-09-28, not a runtime benchmark.
// LoudReader shipping 1.12 facts from the root audit of release_v1.12,
// commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0 in
// the LoudReader app source:
// - Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and
//   Subscription/PaywallReason.swift: cumulative 8-hour allowance, free voice
//   selection and Premium gates. Notes/highlights are not Premium-only.
// - Engines/ChatterboxVoice.swift and Engines/VoiceRegistry.swift: 23 studio
//   narrators, 10 languages, device availability and Settings language choices.
// - ContentView.swift, PDFImportPipeline.swift and ArticleImportPipeline.swift:
//   DRM-free EPUB/PDF import, local OCR and web-article workflows.
// - LoudReaderApp.swift and Analytics.swift: local synthesis alongside Sentry
//   diagnostics and TelemetryDeck usage analytics. The shipping 1.12 app
//   does not expose an analytics opt-out: showsUsageStatisticsChoice=false.
// - iOS target/Xcode project: iPad compatibility on Apple Silicon, not a
//   separate native macOS target; no library/position sync service.
// - https://itunes.apple.com/lookup?id=6758149478&country=us : shipping version
//   and US pricing; use shared FREE_TIER/PRICING for centrally maintained copy.
// Primary competitor/Apple sources were opened on 2026-09-28 as listed below.
// The comparison is a documented shortlist plus suggested user tests. No
// hands-on comparative benchmark, privacy audit or quality ranking is claimed.
// - https://speechify.com/mac/ : dedicated Mac app, listening shortcuts,
//   voice typing and highlighting; do not repeat obsolete Electron claims.
// - https://www.voicedream.com/ : offline Mac/iOS reading and annotation.
// - https://www.naturalreaders.com/software.html : perpetual desktop editions,
//   distinct from the online service; no competitor prices hard-coded here.
// - https://speechcentral.net/ : Mac/other platform availability, document/web
//   reading and offline/optional cloud voice choices.
// - https://support.apple.com/en-gb/guide/mac-help/mh27448/mac : Speak selection,
//   Option-Esc, controller and highlighting; accessible text is required.
// Do not claim no analytics, English-only LoudReader, universal app access,
// superior voices, exact Mac window behaviour or unique lifetime pricing.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  {
    q: "What should I try before paying for a Mac read-aloud app?",
    a: "Try the built-in Speak selection feature first. If you need a book library, compare two dedicated readers with the same EPUB or PDF, then check resuming, reading order and your preferred voice before purchasing.",
  },
  {
    q: "Is LoudReader a native Mac app?",
    a: "No. LoudReader is an iPhone and iPad app that runs on compatible Apple Silicon Macs through Apple's iPad compatibility mode. Check the App Store compatibility information and try its interface on your Mac before upgrading.",
  },
  {
    q: "Can I keep listening to books in LoudReader for free?",
    a: FREE_TIER.full,
  },
  {
    q: "Does offline listening mean an app sends no data?",
    a: "No. Offline speech generation or downloaded playback describes listening, not all app behaviour. LoudReader generates narration locally but also sends diagnostics and usage analytics. Check each app's policy and chosen voice service separately.",
  },
  {
    q: "Are Mac text-to-speech apps all subscription-based?",
    a: "No. LoudReader offers a lifetime option as well as subscriptions, and NaturalReader desktop has perpetual-licence editions. Compare the exact product, included features and current regional price; a desktop licence is not automatically a subscription to a vendor's online service.",
  },
];
