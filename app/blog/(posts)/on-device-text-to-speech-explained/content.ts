// FACT PROVENANCE. Original app-source audit: 2026-07-14. Editorial refresh:
// 2026-09-27 against components/money/site.ts (current roster, requirements,
// and documented app-source provenance), plus:
//   - https://loudkit.loudreader.io/ and loudkit/README.md: Apache-2.0
//     framework, SDKs, CLI, 28 voices, model download followed by local speech.
//   - https://loudkit.loudreader.io/agents/ and site/src/pages/agents.astro:
//     developer preview on Apple Silicon Mac, local speech after setup;
//     messenger/model may use network; local providers tested, full messenger
//     delivery still unverified. These are NOT LoudReader app capabilities.
//   - https://arxiv.org/abs/1609.03499 rechecked 2026-09-27. It supports the
//     history of neural waveform generation, not a current product ranking.
// Original evidence retained below; no new app runtime audit is claimed:
//   - WaveNet (the 2016 neural-TTS turning point) is a real, findable paper:
//     van den Oord et al., "WaveNet: A Generative Model for Raw Audio",
//     arXiv:1609.03499, https://arxiv.org/abs/1609.03499 (verified via web
//     search 2026-07-14; also published by DeepMind, Sept 2016). The article
//     cites it only for what it says: neural waveform generation that
//     substantially narrowed the gap to human-sounding speech, initially at
//     high computational cost.
//   - Pre-neural offline TTS being concatenative/formant-based is standard,
//     uncontroversial TTS history; described generically with no invented
//     numbers.
//   - LoudReader as the working example: voice models are BUNDLED in the app
//     and executed locally via Core ML with the Apple Neural Engine.
//     The model seeder ships a bundled model set with
//     `DownloadUtils.enforceOffline = true` into the ANE model directory, and
//     the synthesis backend reads from there. The engine can never download at
//     runtime; that is enforced in code, not just policy.
//   - Apple Silicon requirement: components/money/site.ts REQUIREMENTS
//     ("iOS 18.0+, iPadOS 18.0+, macOS 15.0+ (Apple Silicon)").
//   - Voice count and language spread: components/money/site.ts (VOICES)
//     PRICING and existing money pages (consistent phrasing).
// Claims you may NOT make: any specific latency/RTF benchmark numbers, any
// claim that on-device quality has "matched" cloud quality (say "narrowed"),
// parameter counts of specific models (not published on this site).

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
    a: "LoudReader requires macOS 15 or later on Apple Silicon because its app and speech runtime target that hardware. This is a LoudReader requirement, not a rule for all on-device TTS: other engines and system voices have different hardware support. Check the requirements of the exact app or SDK you want to use.",
  },
  {
    q: "Is on-device voice quality catching up to cloud voices?",
    a: "Quality depends on the model, voice, language, and material, not only on whether it runs locally. Compare the same chapter, including dialogue, names, and numbers. A short sample can help you choose a voice, but a longer passage is a better check for comfortable book listening.",
  },
];
