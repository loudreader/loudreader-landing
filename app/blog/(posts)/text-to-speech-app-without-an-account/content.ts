// FACT PROVENANCE — reviewed 2026-09-28 against shipping release_v1.12
// (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), not the stale app checkout HEAD.
// Official Apple lookup https://itunes.apple.com/lookup?id=6758149478&country=us
// confirms 1.12 released 2026-09-22; see the root's product fact audit.
// - Local synthesis/imports: app TTS engines and BookImportService.swift;
//   local narration does not imply zero network activity or no system backups.
// - LoudReaderApp.swift: release Sentry startup, crash/performance diagnostics,
//   default PII disabled, screenshots and replay disabled, scrubber hooks.
// - Analytics.swift: TelemetryDeck starts, analytics is ON by default;
//   bounded feature/reliability events, playback session duration buckets.
// - CRITICAL: SettingsSheet.swift:65 showsUsageStatisticsChoice = false;
//   the toggle is gated at483. In 1.12 there is NO exposed usage-statistics
//   switch. Analytics.swift's comment suggesting Settings access is stale.
//   No separate Sentry switch. Do not promise opt-out or immediate suppression.
// - This is a source review, not an independent audit of network payloads.
//   Do not claim impossible leaks, zero telemetry, anonymity guarantees,
//   legal/compliance certification or that airplane mode proves data policy.
// Additional shipping evidence: SubscriptionAccess.swift:4–11 (8-hour
// cumulative allowance); SubscriptionManager.swift:280–297 (chosen Stella/Rio
// and Bella on supported devices), restore():955–967 (AppStore.sync).
// No CloudKit/iCloud sync entitlement; Files/iCloud source import is separate.
// Apple purchase restoration primary source, verified 2026-09-28:
// https://support.apple.com/en-gb/108096 (same Apple Account for restoration).
// Do not infer no identifiers, no backup or universal no-sync from no login.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Do I need a LoudReader account to import a book?",
    "a": "No. You can import a supported DRM-free EPUB or PDF and listen without creating a LoudReader profile, supplying a sign-up email or setting a password."
  },
  {
    "q": "Does no account mean LoudReader collects no analytics?",
    "a": "No. Version 1.12 uses TelemetryDeck analytics, enabled by default, and Sentry crash/performance diagnostics. There is currently no exposed usage-statistics switch in Settings. Local speech processing and account requirements are separate from those services."
  },
  {
    "q": "Does my library sync between my iPhone and Mac?",
    "a": "LoudReader does not currently offer automatic library or reading-position sync. Import a book separately on each device. An original stored in iCloud Drive is not the same as a synced LoudReader library."
  },
  {
    "q": "Can I restore Premium without creating a LoudReader login?",
    "a": "Yes. The app uses Apple in-app purchases and provides a restore option. Use the same Apple Account as the purchase. Restoring an entitlement does not transfer books or reading positions."
  },
  {
    "q": "Is listening free without an account?",
    "a": "Book listening stays unlimited. Every available voice can be tried during the first eight hours of cumulative listening. Afterwards, the free selection is Stella or Rio, plus Bella on supported devices. Premium features and additional voices are separate."
  }
];
