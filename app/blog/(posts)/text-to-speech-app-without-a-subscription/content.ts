// FACT PROVENANCE — editorial review 2026-09-28.
// Shipping app: release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
// the LoudReader app source, read through git show, not local HEAD.
// Canonical audit: docs/product-facts-2026-09-28.md. Source review,
// not a new runtime test. Local speech does not imply no diagnostics:
// LoudReaderApp.swift initialises Sentry and Analytics.swift TelemetryDeck;
// SettingsSheet.showsUsageStatisticsChoice is false in this shipping release.
// SubscriptionAccess/SubscriptionManager verify 8 cumulative listening hours,
// then Stella or Rio plus Bella on capable devices; whole-book listening stays
// free. Notes/highlights are not Premium-only. Studio availability varies.
// Xcode target is iOS/iPadOS; on Apple Silicon Macs it is the iPad build.
// No automatic library/progress sync; iCloud file import is not app sync.
// https://itunes.apple.com/lookup?id=6758149478&country=us — root audit2026-09-28 current official1.12 price description.
// Shipping1.12 SubscriptionManager.swift, SubscriptionAccess.swift and PaywallReason.swift; no unverified competitor prices.

import type { Faq } from "@/components/money/FaqSection";
export const FAQS: Faq[] = [
  {
    "q": "Can I keep listening without paying?",
    "a": "Yes. After eight cumulative hours with the available voice selection, book listening continues free with the eligible English voices. Premium adds other voices and features."
  },
  {
    "q": "Is lifetime Premium a subscription?",
    "a": "No. It is a one-time purchase. The separately offered monthly and yearly plans are recurring subscriptions."
  },
  {
    "q": "Are the advertised prices the same worldwide?",
    "a": "No. The US prices checked on 28 September 2026 were $7.99 monthly, $49.99 yearly and $199.99 lifetime. Check the App Store purchase sheet for your storefront and any introductory terms."
  },
  {
    "q": "Do I need Premium for notes and highlights?",
    "a": "No. Notes and ordinary word highlighting are not Premium-only in the shipping 1.12 feature gates. Adjustable playback speed and the sleep timer are Premium features."
  }
];
