// FACT PROVENANCE — editorial review 2026-09-28.
// - https://speechify.com/pricing/ — checked 2026-09-28: monthly US price, free voice/speed limits, listed Premium workflow features.
// - https://speechify.com/usage-limits/ — current 2026 extension distinguished from baseline; no guaranteed future reduction inferred.
// - Removed invented comparative voice quality, no-OCR claim, and false claim $199.99 is less than two $29 monthly payments.
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
  { q: "Is Speechify worth paying for?", a: "It can be if you regularly use its document workflow, voices or integrations. Test those specific features on representative files and compare the actual billed amount with a free option that could do the same job." },
  { q: "Is Speechify Premium unlimited?", a: "Premium voice usage is subject to the published usage policy. Check the allowance for the current year and your account instead of assuming that a paid subscription removes every limit." },
  { q: "Should I buy the annual plan straight away?", a: "Only after checking the workflow and renewal terms. An annual plan may reduce the price for a full year, but it commits more money upfront than trying a shorter period." },
  { q: "Does a larger voice catalogue mean better narration?", a: "No. A particular voice, accent or language may suit you better, but catalogue size does not establish quality for your material. Compare the same passage at a similar speed." },
  { q: "Is LoudReader a substitute for every Speechify feature?", a: "No. It offers local book narration on supported Apple devices, with no automatic library sync. Compare platform support, available voices, document handling and controls before choosing." },
];
