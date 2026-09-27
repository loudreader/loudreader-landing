// FACT PROVENANCE — editorial review 2026-09-28.
// - https://speechify.com/pricing/ — USD monthly Premium price.
// - https://elevenreader.io/ — Ultra monthly and annual USD prices.
// - https://help.naturalreaders.com/en/articles/8854700-plans-pricing-personal-version — Lite monthly/annual prices and voice tiers.
// - https://apps.apple.com/us/app/voice-dream-natural-reader/id496177674 — multiple IAP offers, no single guaranteed offer inferred.
// - https://www.naturalreaders.com/software.html — desktop perpetual licence distinct from web subscription.
// - https://help.elevenlabs.io/hc/en-us/articles/35971782968465-How-do-ElevenReader-hours-work — generation versus replay.
// - https://speechify.com/usage-limits/ — paid premium voice limits.
// - Apple Read & Speak: https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios and https://support.apple.com/en-au/guide/mac-help/mh27448/26/mac/26.
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
import { PRICING } from "@/components/money/site";

export const FAQS: Faq[] = [
  { q: "What is the cheapest way to have text read aloud?", a: "Start with reading controls included in your device. If their workflow does not fit, compare permanent free app tiers before paid trials. Check the voice and language that remain free." },
  { q: "Does a per-month annual price mean I pay monthly?", a: "Usually no: it may be the annual total divided by twelve for comparison. Read the billing period and upfront total at checkout." },
  { q: "How much does LoudReader Premium cost?", a: `Current US prices are ${PRICING.premiumMonthly}, ${PRICING.premiumYearly}, or ${PRICING.premiumLifetime}. Your storefront purchase sheet may differ.` },
  { q: "Do paid plans always remove usage limits?", a: "No. Limits may apply to particular voices, new audio generation, exports or catalogue listening. Check the vendor plan details for the feature you expect to use." },
  { q: "Can I still buy a reader without a subscription?", a: "Yes. LoudReader has a lifetime Premium option, and NaturalReader offers separate desktop software with a perpetual licence. Verify the specific edition and compatibility before buying." },
];
