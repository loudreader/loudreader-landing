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
// Additional shipping evidence: PDFImportPipeline.swift:90,155–218 (local
// Vision OCR, thresholds, 300-page cap, partial-result warnings);
// BookImportService.swift deleteBook removes app library files, with failure
// handling. No assurance of deletion from originals, backups or storage media.
// No NDA, HIPAA, GDPR or other jurisdiction-specific legal claim is made.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Can I use text to speech on a confidential work document?",
    "a": "Check whether the device and app are approved for that material before importing it. Local speech avoids a speech-server upload, but it does not settle requirements about diagnostics, backups or copying documents outside a managed system."
  },
  {
    "q": "Does airplane mode prove my document has never been uploaded?",
    "a": "No. It tests whether the current workflow can play offline. It does not show earlier uploads, cached audio, queued diagnostics or the contents of backups."
  },
  {
    "q": "Does LoudReader process scanned PDFs locally?",
    "a": "Yes. Version 1.12 includes on-device OCR and attempts recognition when a PDF contains little extractable text. It processes at most 300 OCR pages per import, and complex layouts or poor scans can produce mistakes or partial results."
  },
  {
    "q": "What happens when I delete a document from LoudReader?",
    "a": "Deletion removes the library item and its local app files when it completes successfully. It does not delete the original from Files, email or another document service, and is not a guarantee of secure erasure from backups."
  },
  {
    "q": "Does LoudReader have an analytics opt-out?",
    "a": "The version 1.12 Settings screen does not expose the usage-statistics switch. TelemetryDeck analytics is on by default, and Sentry crash/performance diagnostics are separate. Consider this alongside the local speech-processing behaviour."
  }
];
