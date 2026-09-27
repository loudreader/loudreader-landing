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
    q: "Is Rafael Brazilian or European Portuguese?",
    a: "The app labels Rafael as Portuguese and does not offer a Brazilian/European accent switch. Audition the sample and your own passage before relying on it for a specific regional pronunciation task.",
  },
  {
    q: "Why is the Portuguese voice missing from my picker?",
    a: "Voices follow the languages in your library or those marked in Settings → Languages You Read. Mark Portuguese or import a Portuguese book, then look for Rafael. Studio availability also depends on the device, and listening needs a remaining voice trial or Premium.",
  },
  {
    q: "Can I listen to a scanned Portuguese PDF?",
    a: "LoudReader can use local OCR to recognise text in scanned PDF pages. Recognition can be incomplete, so inspect the imported text and warnings. A clean EPUB or selectable-text PDF is a useful alternative if a scan produces errors.",
  },
  {
    q: "Is Portuguese narration included in the free tier?",
    a: `${FREE_TIER.full} After the voice trial, Rafael requires Premium. The current price is shown in the app for your storefront.`,
  },
  {
    q: "Does Portuguese narration work offline?",
    a: "It can work offline after the book and required voice resources are available. Test the exact book and voice without a connection before travel. Speech processing is local, but that does not mean every app service is offline or that the app has no diagnostics or analytics.",
  },
  {
    q: "Will LoudReader translate my book into Portuguese?",
    a: "No. It narrates the text you provide; it does not translate an English book into Portuguese or assess your spoken Portuguese.",
  },
];
