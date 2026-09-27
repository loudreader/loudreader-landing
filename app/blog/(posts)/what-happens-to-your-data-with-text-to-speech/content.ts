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
// More detail checked directly in release_v1.12:
// Analytics.swift playbackSessionEnded and signal definitions; SDK-context
// comment identifies version/platform fields. Do not call these zero data.
// LoudReaderApp.swift:62–158 release configuration and SentryScrubber hooks;
// ErrorReporting.swift scrubber covers pattern-based paths/filenames/URLs,
// and warns that arbitrary titles cannot be recognised by patterns alone.
// No claim that all server payloads were captured or independently audited.
// Apple App Privacy Report primary source, verified 2026-09-28:
// https://support.apple.com/en-gb/102188 (domain activity, not payload proof).
// Removed Firebase anecdote: not needed to explain current reader choices.
// Removed exhaustive three-channel inventory and opt-out promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does LoudReader upload my book to generate speech?",
    "a": "No. Speech is generated locally, and imported books are processed in the app library. That is separate from analytics, diagnostics, content downloads, Apple purchases and any source files or system backups outside the app."
  },
  {
    "q": "What does LoudReader usage analytics collect?",
    "a": "Reviewed release 1.12 event definitions include feature-use counts, import categories, reliability events and listening-session statistics such as duration ranges and playback speed. The SDK also supplies app/device context. These events are designed to exclude book titles and reading text."
  },
  {
    "q": "Can I turn off LoudReader analytics in Settings?",
    "a": "Not in the reviewed version 1.12: the usage-statistics switch is hidden and analytics is enabled by default. An internal stored preference exists, but that is not an available user-facing control. Sentry crash/performance reporting is separate and has no in-app switch."
  },
  {
    "q": "Do diagnostic reports record my screen?",
    "a": "The release 1.12 configuration disables screenshot attachments and session replay. It also filters diagnostic paths and URLs. These source safeguards are not an independent network audit or a guarantee against every possible privacy defect."
  },
  {
    "q": "Is an offline playback test a complete privacy check?",
    "a": "No. It can establish that a particular workflow plays without a current connection. It does not reveal previous traffic, cached audio, queued reports or backup contents."
  }
];
