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
// https://arxiv.org/abs/1609.03499 rechecked2026-09-28: neural waveform generation history, not a current voice-quality ranking.
// https://developer.apple.com/documentation/coreml/mlcomputeunits checked2026-09-28: execution options, not every operation guaranteed on Neural Engine.
// Local loudkit docs/supported.md and agents landing checked2026-09-28:28voices,fiveSDKs,agentpreview limits.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "How can a phone generate natural speech without the cloud?",
    a: "A speech model stored on the device turns text into audio using its own processor. Compact neural models and hardware acceleration make that practical on supported phones and computers. The model may come with the app or require an initial download. Once installed, local synthesis does not need a hosted speech service.",
  },
  {
    q: "Why were offline voices robotic for so long?",
    a: "Older systems often used recorded speech fragments or hand-tuned rules, which could make joins and intonation sound mechanical. Neural models learned more of those patterns from speech. WaveNet in 2016 was an influential example; later advances in model efficiency and device hardware made local neural synthesis practical.",
  },
  {
    q: "What are the trade-offs of on-device TTS?",
    a: "The main trade-offs are storage, hardware requirements, and the available voices and languages. Models must be installed locally, and performance depends on the device and runtime. Local speech avoids sending the text to a speech provider, but other app features, agents, and messaging services can still use the network.",
  },
  {
    q: "Why does LoudReader need Apple Silicon on a Mac?",
    a: "LoudReader runs its iPad build on compatible Apple Silicon Macs with macOS 15 or later; there is no separate native Mac build. This is a LoudReader requirement, not a rule for all on-device TTS: other engines and system voices have different hardware support. Check the requirements of the exact app or SDK you want to use.",
  },
  {
    q: "Is on-device voice quality catching up to cloud voices?",
    a: "Quality depends on the model, voice, language, and material, not only on whether it runs locally. Compare the same chapter, including dialogue, names, and numbers. A short sample can help you choose a voice, but a longer passage is a better check for comfortable book listening.",
  },
];
