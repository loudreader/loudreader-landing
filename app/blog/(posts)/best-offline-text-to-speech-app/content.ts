// FACT PROVENANCE — reviewed 2026-09-28.
// - https://www.voicedream.com/: offline reading, Mac availability,
//   pronunciation, supported documents and accessibility features.
// - https://apps.apple.com/us/app/voice-dream-reader/id972112040?mt=12:
//   confirms separate macOS Voice Dream listing. No current price asserted.
// - https://support.apple.com/en-gb/guide/mac-help/mh27448/mac:
//   Speak Selection highlighting and playback controller.
// - https://www.gutenberg.org/help/copyright.html: territorial limitations.
// LoudReader: release_v1.12 canonical source audit 2026-09-28: local synthesis,
// on-device PDF OCR, no automatic library sync, iPad compatibility on Mac,
// hardware-dependent voices, free selection, actual Premium feature gates,
// Sentry diagnostics + default usage analytics (no visible opt-out claimed).
// Removed unsupported voice rankings and all-local/no-data-collection claims.
// The suggested offline procedure is a reader checklist, not a reported test.
import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";
export const FAQS: Faq[] = [
  { q: "Does offline TTS mean the app never connects to the internet?", a: "No. Speech can be generated locally while downloads, purchases, diagnostics or other features use a network. Test offline availability and review data handling separately." },
  { q: "Is Voice Dream available for Mac?", a: "Yes. Voice Dream lists Mac support and has a macOS App Store listing. Check the current platform-specific features and purchase terms instead of assuming its mobile and desktop versions are identical." },
  { q: "Does LoudReader sync my library between phone and Mac?", a: "No automatic library or reading-position sync is provided. Importing a file from iCloud Drive is different from synchronising the app's library. The Mac option runs the iPad app on compatible Apple Silicon Macs." },
  { q: "How can I tell whether a voice works offline?", a: "Complete setup while connected, disconnect, then play a chapter you have not heard before in the selected voice. A previously downloaded recording can play offline without proving that new speech can be generated." },
  { q: "Can I try LoudReader's offline reading for free?", a: FREE_TIER.full },
];
