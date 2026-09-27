// FACT PROVENANCE — editorial review 2026-09-28.
// - Release source: SubscriptionAccess.swift voiceTrialLimitSeconds, voiceGiftSeconds, canImportBook, free article and bulk-action limits; SubscriptionManager.swift free voice and clone gates.
// - PaywallReason.swift explicitly leaves notes, highlights and normal cache/background features ungated.
// - Live Apple lookup on 2026-09-28 confirmed release1.12 and US pricing; do not interpret introductory subscription trial as voice allowance.
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
import { FREE_TIER, PRICING } from "@/components/money/site";

export const FAQS: Faq[] = [
  { q: "Does free listening stop after eight hours?", a: `No. ${FREE_TIER.full} The allowance concerns voice access, not whether the rest of a book can be read.` },
  { q: "Which voices remain free?", a: "Choose Stella or Rio; supported devices also keep Bella. This is an English selection, not a choice of any studio narrator. Available voices depend on the device." },
  { q: "Are notes and highlights Premium-only?", a: "No. Notes, highlights and ordinary word-following highlighting do not require Premium. Adjustable playback speed, the sleep timer and the full available narrator selection are paid features." },
  { q: "Can I try voice cloning for free?", a: "The all-voices allowance permits up to three clones from your own or permissioned speech. Premium removes that creation quota. Existing clones remain stored but lock when the allowance ends without Premium." },
  { q: "How much does Premium cost?", a: `The current US prices are ${PRICING.premiumMonthly}, ${PRICING.premiumYearly}, or ${PRICING.premiumLifetime}. Prices and offers can vary by storefront; check the purchase sheet before confirming.` },
];
