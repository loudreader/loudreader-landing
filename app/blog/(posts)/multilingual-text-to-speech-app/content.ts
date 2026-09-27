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
    q: "Which languages does LoudReader support?",
    a: "The studio catalogue covers English, Spanish, German, French, Italian, Dutch, Polish, Portuguese, Swedish and Danish. It has 23 studio narrators: 11 English, four Spanish and one for each other language. Availability depends on your device.",
  },
  {
    q: "How do I add languages to the voice picker?",
    a: "Import books in the languages you read or mark those languages in Settings → Languages You Read. The app combines library languages with your selections. Making a voice visible does not change its trial or Premium entitlement.",
  },
  {
    q: "Will the app automatically switch voices inside a bilingual sentence?",
    a: "Support for several languages should not be taken as a guarantee of automatic language or narrator switching within a sentence. Test mixed-language passages with the selected narrator. For bilingual lessons, listening to one language's section at a time can make the result easier to check.",
  },
  {
    q: "Does multilingual text to speech translate a book?",
    a: "No. LoudReader reads the supplied text aloud and does not translate between languages. A French book remains French.",
  },
  {
    q: "Are the non-English voices free after the trial?",
    a: `${FREE_TIER.full} Continuing with non-English studio voices requires Premium. Notes and highlights do not require Premium.`,
  },
  {
    q: "Can I use more than one language offline?",
    a: "Speech is generated locally for supported language voices. Make sure each book and its required voice resources are available, then test your chosen combinations offline. This does not mean downloads, purchases, diagnostics or analytics are entirely offline.",
  },
];
