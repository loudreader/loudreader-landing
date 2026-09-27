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
// External primary sources verified 2026-09-28:
// https://support.apple.com/en-gb/102399 — developer-reported privacy labels.
// https://support.apple.com/en-gb/102188 — App Privacy Report domain activity.
// Offline-test limitations are technical reasoning, not a claimed runtime test.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Do text-to-speech apps upload every document?",
    "a": "Cloud synthesis sends the text being spoken to a service, but apps differ in whether they send passages or whole files and how long they retain them. On-device synthesis avoids that speech-server upload; sync, conversion, backups and diagnostics need separate checks."
  },
  {
    "q": "Does offline playback prove no information is collected?",
    "a": "No. The audio may already be cached, and diagnostic events may be delivered when the connection returns. Offline playback is an availability check, not a complete privacy audit."
  },
  {
    "q": "Are App Store privacy labels independently verified?",
    "a": "Apple describes the privacy information as self-reported by developers. Read it with the current privacy policy and ask about unclear points that matter to your documents."
  },
  {
    "q": "Does LoudReader collect analytics?",
    "a": "Yes. Version 1.12 enables TelemetryDeck usage analytics by default and sends Sentry crash/performance diagnostics. The Settings screen does not currently expose an analytics switch. Speech generation and document processing are local."
  },
  {
    "q": "Is a local TTS app suitable for confidential work?",
    "a": "It may fit your workflow, but local narration alone does not establish suitability. Check approved-device and app rules, backups, document access and any diagnostics with whoever manages the information."
  }
];
