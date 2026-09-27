// FACT PROVENANCE — reviewed 2026-09-28; editorial guidance is not a runtime test.
// Shipping source: loudreader/LoudReader_mac release_v1.12,
// commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0 (not the dirty checkout HEAD).
// - LoudReader/Engines/ChatterboxVoice.swift:27-59,95-108: studio language
//   catalogue and narrator identities; internal QA voices are not counted.
// - LoudReader/ReadingLanguages.swift, SettingsSheet.swift:347-378 and
//   VoiceRegistry.swift:105-119: languages from library OR Settings marks;
//   "Languages You Read" adds voices without changing paid entitlements.
// - LoudReader/PDFImportPipeline.swift:88-96,155-218: local Vision OCR,
//   recognition limits and partial-import warnings. No claim of perfect OCR.
// - LoudReader/Subscription/SubscriptionAccess.swift:4-11,
//   SubscriptionManager.swift:280-297 and Subscription/PaywallReason.swift:
//   8 listening-hour allowance; post-trial English selection; paid studio
//   voices/speed/timer/soundscapes; notes and highlights are not paid-only.
//   Free-tier wording comes from shared FREE_TIER.full to keep device-specific
//   selection details consistent; studio availability depends on hardware
//   (DeviceCapability.swift:47-73).
// - LoudReader/LoudReaderApp.swift:62,244 and local TTS implementation:
//   speech synthesis is local, but Sentry diagnostics and usage analytics
//   exist. No "no telemetry", "no network", or user opt-out UI claim is made.
// - Official Apple version lookup https://itunes.apple.com/lookup?id=6758149478&country=us
//   and https://apps.apple.com/us/app/loudreader-text-to-speech/id6758149478:
//   release 1.12, iPhone/iPad app; compatible Macs run its iPad build.
//   Version/platform findings also checked in the canonical product audit
//   dated 2026-09-28. Public marketing privacy copy is stale and not evidence.
// - https://loudreader.io/voices (checked 2026-09-28), data/voices.ts:
//   public sample destination and language/voice catalogue only, not privacy.
// Not claimed: a selectable regional accent, automatic code-switching,
// translation, guaranteed pronunciation, DRM removal or all studio voices
// on every device. Suggested sample checks are reader guidance, not test results.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  {
    q: "How do I find the French voice in LoudReader?",
    a: "Import a French-language book or mark French in Settings → Languages You Read, then choose Antoine in the narrator picker. Studio voice availability depends on your device, and French requires a remaining voice trial or Premium.",
  },
  {
    q: "Does LoudReader offer Quebec or Belgian French?",
    a: "Antoine is listed as a French narrator without a regional-accent selector. Listen to the voice sample and a passage from your own material. If a particular regional variety is essential, compare it with an explicitly identified spoken reference.",
  },
  {
    q: "Can LoudReader read a scanned French PDF?",
    a: "Yes, the current app can recognise text from scanned PDF pages on your device. OCR can misread words or leave pages incomplete. Check import warnings and compare the recognised text with the original before a long listen.",
  },
  {
    q: "Is the French narrator free?",
    a: `${FREE_TIER.full} Continuing with Antoine after the voice trial requires Premium. Notes and highlights are available without Premium; adjustable playback speed, the sleep timer and soundscapes require Premium.`,
  },
  {
    q: "Can I listen to French books without internet?",
    a: "Speech is generated locally. Install the app, import the book and ensure the required voice resources are ready, then test offline playback before travelling. Downloads and other online features still need a connection; the app also uses diagnostics and analytics.",
  },
];
