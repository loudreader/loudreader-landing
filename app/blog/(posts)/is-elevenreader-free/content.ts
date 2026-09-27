// FACT PROVENANCE — editorial review 2026-09-28.
// - https://help.elevenlabs.io/hc/en-us/articles/35971782968465-How-do-ElevenReader-hours-work — monthly generation, replay exemption, free Explore titles, separate packs.
// - https://elevenreader.io/ — Ultra US pricing and premium catalogue allowance.
// - https://elevenreader.io/pricing — daily import limit, offline restrictions, no audio export.
// - https://help.elevenlabs.io/hc/en-us/sections/26165356474897-ElevenReader — web/desktop access and account-based files.
// - Removed fixed page equivalence, native-Mac inference, unconditional no-upload claims and invented LoudReader cross-device sync.
// LoudReader: release_v1.12 (5dc3c0d) source audit, recorded in
// docs/product-facts-2026-09-28.md: SubscriptionAccess.swift,
// SubscriptionManager.swift, PaywallReason.swift, VoiceRegistry.swift,
// PDFImportPipeline.swift, LoudReaderApp.swift, Analytics.swift and SettingsSheet.swift.
// SettingsSheet hides the usage-analytics control in 1.12; no visible opt-out claimed.
// Platform: iPad app compatibility on Apple Silicon; no library-position sync.
// Local narration does not imply no diagnostics/analytics. US pricing uses
// shared site constants; the storefront purchase sheet controls actual billing.
// No comparative listening test or network audit was performed for this article.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  { q: "Is ElevenReader free to use?", a: "Yes. Its free plan includes a monthly allowance for generating new audio. Replaying already converted text and free Explore listening are treated differently from new imports; check your usage display." },
  { q: "Does faster playback stretch ElevenReader free hours?", a: "Do not assume it does. The allowance measures generation from text using normal speed as a reference, rather than only the wall-clock time you spend listening." },
  { q: "Must I subscribe to get more generation hours?", a: "No. ElevenLabs documents extra-hour packs available without an active subscription. Check their current price and expiry in your account. Some features still require a subscription." },
  { q: "Does Ultra give unlimited premium audiobooks?", a: "No. The premium catalogue has its own monthly allowance. It is separate from the reasonable-use limit for generating audio from personal imports." },
  { q: "Does LoudReader offer a different free model?", a: `Yes. ${FREE_TIER.full} It generates book narration locally on supported Apple devices; it does not provide ElevenReader's cloud library or account sync.` },
];
