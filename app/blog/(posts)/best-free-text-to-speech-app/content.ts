// FACT PROVENANCE — editorial review 2026-09-28.
// - https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios — current Read & Speak, highlighting and rate controls.
// - https://support.apple.com/en-au/guide/mac-help/mh27448/26/mac/26 — Mac Speak selection and Option–Esc.
// - https://help.naturalreaders.com/en/articles/8823770-voices-languages-and-tts-limits-personal-version — unlimited system Free Voices; AI allowances differ.
// - https://speechify.com/pricing/ and https://elevenreader.io/pricing — free plans exist; no universal quota comparison made.
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
  { q: "Is there a free text-to-speech option without a monthly listening quota?", a: "Apple includes reading controls in its operating systems. NaturalReader allows unlimited use of its available Free Voices. LoudReader has unlimited book listening with a limited free English voice selection. Features, languages and platform support differ." },
  { q: "Does Apple Spoken Content highlight words?", a: "Yes. Apple documents highlighting and speaking-rate controls in Read & Speak, called Spoken Content on older system versions. Results depend on the text exposed by the app you are using." },
  { q: "What remains free in LoudReader after the voice trial?", a: `${FREE_TIER.full} Adjustable playback speed, the sleep timer and the full available narrator selection are Premium features.` },
  { q: "Can a free plan read an entire book?", a: "It can, if its ongoing voice allowance and import support cover that book. Check the permanent free tier separately from premium voice samples. Protected ebooks may not be importable, regardless of the price." },
  { q: "How should I compare voice quality?", a: "Use the same passage and similar speed in each app. Include dialogue, names and a longer paragraph from your own reading. Listen long enough to notice pronunciation and pacing rather than choosing from a short promotional sample." },
];
