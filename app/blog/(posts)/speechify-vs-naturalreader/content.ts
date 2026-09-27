// FACT PROVENANCE — editorial review 2026-09-28.
// - https://speechify.com/pricing/ and https://speechify.com/usage-limits/ — free/Premium distinction, scanning, paid usage policy.
// - https://help.naturalreaders.com/en/articles/8854700-plans-pricing-personal-version — web/mobile/Chrome access, document formats and paid OCR.
// - https://help.naturalreaders.com/en/articles/8823770-voices-languages-and-tts-limits-personal-version — ongoing system voices versus AI allowances.
// - https://www.naturalreaders.com/software.html — separate perpetual desktop licence; no blanket subscription-only claim.
// - https://help.naturalreaders.com/en/articles/11543218-working-with-text-and-audio-personal-version — MP3 conversion subject to paid plan/voice limits.
// - LoudReader release PDFImportPipeline.swift verifies local OCR, replacing obsolete no-scanning claim.
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

export const FAQS: Faq[] = [
  { q: "Which has better voices, Speechify or NaturalReader?", a: "This article does not establish a quality winner. Compare the same passage in a voice and language available on the plan you would actually use. Listen for pronunciation, pacing and fatigue over a longer session." },
  { q: "Does NaturalReader offer a one-time purchase?", a: "Yes. Its separate downloadable desktop software is advertised with a perpetual licence. That is different from its web/mobile personal plans; verify edition, included voices and current device compatibility." },
  { q: "Are both free plans just short demos?", a: "No. NaturalReader has ongoing use of available system Free Voices, alongside limited AI voice samples. Speechify also separates free and Premium voice access. Check the permanent free option rather than only the initial sample." },
  { q: "Which is better for a scanned PDF?", a: "Test the same scan in each app with an applicable scanning or OCR feature. Legibility, columns, tables and reading order affect the result. A feature list alone cannot establish which handles your document better." },
  { q: "Does LoudReader have OCR?", a: "Yes. It performs on-device text recognition for scanned PDFs, with results depending on layout and legibility. This does not guarantee correct equations, tables or reading order." },
];
