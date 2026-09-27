// FACT PROVENANCE — checked on 2026-09-27; held for the 2026-10-11 release post.
// Recheck release scope before publication if the scheduled date changes.
// - https://github.com/loudreader/loudkit README and LICENSE, also read from
//   /Users/pepi/Developer/loudkit/README.md: LoudReader uses the engine;
//   Apache-2.0 code and loudr-1/loudr-1-turbo releases; no engine account,
//   telemetry or usage fees; Python, Swift, Go, Rust and TypeScript SDKs.
// - site/src/content/docs/guides/01-getting-started.md and the live page
//   https://loudkit.loudreader.io/guides/01-getting-started/:
//   install/speak commands, first model download, subsequent offline synthesis,
//   local WAV output, 28 included voice profiles. Commands below reproduce the
//   documented quickstart; no new execution/performance claim is made.
// - site/src/content/docs/guides/11-choosing-a-model.md and live
//   https://loudkit.loudreader.io/guides/11-choosing-a-model/:
//   two models, shared profiles, PyTorch/ONNX Runtime/CoreML runtime paths;
//   compare models on the intended text rather than promising a speedup.
// - site/src/content/docs/supported.md and live
//   https://loudkit.loudreader.io/supported/: ten voice languages; English
//   listening evaluation, other nine lack native-speaker review; supported
//   platforms have distinct dependencies and acceptance evidence. No claim of
//   identical audio across machines or universal hardware compatibility.
// - site/src/content/docs/guides/03-cloning-a-voice.md and live
//   https://loudkit.loudreader.io/guides/03-cloning-a-voice/:
//   5–10 seconds of clean single-speaker audio, permission required, portable
//   voice profiles reused by both models; enrollment adds model assets.
// - https://loudreader.io/ and /offline-text-to-speech-mac plus shared
//   components/money/site.ts: LoudReader is the iPhone/iPad reader app; its
//   iPad build runs on compatible Apple Silicon Macs. It is distinct from the
//   developer toolkit. No app pricing/voice-count claims.
// - https://loudkit.loudreader.io/agents/ (live HTTP 200): separate open-source
//   companion developer preview for existing agents, currently Apple Silicon
//   Mac; voice-provider tests do not establish live messenger delivery.
// Editorial scope: this announces the engine. The CTA goes to its docs/repo,
// rather than the article contract's reader-app StoreCta. No unverified release
// date, adoption metrics, speed comparisons, emotion control, browser runtime,
// all-agent compatibility, or production messenger delivery is claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is Loudkit free to use in my own project?",
    a: "Loudkit's code and the loudr-1 and loudr-1-turbo model releases use Apache-2.0. The local engine has no account requirement or usage fees. You supply the hardware, storage and any services your application connects to. The repository includes the licence and upstream notices.",
  },
  {
    q: "Does Loudkit need an internet connection?",
    a: "The standard setup downloads the model and voice files first. Speech generation then runs locally without an internet connection. Your application may still need the network for other features, such as fetching articles or calling an AI agent.",
  },
  {
    q: "Which programming languages can I use?",
    a: "Loudkit has SDKs for Python, Swift, Go, Rust and TypeScript. Their runtime and platform requirements differ: Python offers PyTorch, ONNX Runtime and CoreML paths; Swift uses CoreML rendering; Go, Rust and TypeScript use ONNX Runtime. Follow the guide for your chosen SDK.",
  },
  {
    q: "Is Loudkit the same thing as LoudReader or Loudkit for agents?",
    a: "LoudReader is the finished reading app. Loudkit is its open-source speech engine for developers. Loudkit for agents is a separate companion developer preview that connects local speech to an existing agent; it currently requires an Apple Silicon Mac.",
  },
];
