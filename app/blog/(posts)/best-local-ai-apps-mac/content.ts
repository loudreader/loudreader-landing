// FACT PROVENANCE — refreshed 2026-09-27. Vendor documentation was checked;
// this article does NOT claim that we ran each third-party app or audited it.
//   - https://lmstudio.ai/docs/app/offline: local chat, RAG, server;
//     network required for discovery, model/runtime downloads, update checks.
//   - https://docs.ollama.com/faq: local processing; optional cloud models
//     and web search; documented disable_ollama_cloud / OLLAMA_NO_CLOUD.
//   - https://www.macwhisper.com/: local transcription plus optional local
//     and cloud AI providers. No current price claim retained.
//   - https://drawthings.ai/: local image generation on Apple devices.
//     No pricing or claim that every available generation mode is local.
//   - components/money/site.ts: documented LoudReader app-source audits,
//     bundled local voices, DRM-free files, Apple Silicon/macOS 15+;
//     Mac runs the iPad compatibility build, NOT a native macOS app.
//   - https://loudkit.loudreader.io/ and loudkit/README.md: Apache-2.0,
//     CLI + five language SDKs, download model before offline speech.
//   - https://loudkit.loudreader.io/agents/ and site/src/pages/agents.astro:
//     separate Apple Silicon developer preview, local STT/TTS, local Hermes
//     and OpenClaw provider tests; real messenger delivery not yet verified;
//     agent and messenger can still use online services/cost money.
// No ranking, benchmark, model-quality equivalence, privacy certification,
// current third-party pricing, or all-local end-to-end agent claim.

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";

export const COMPARISON_COLUMNS = [
  "LM Studio",
  "Ollama",
  "MacWhisper",
  "Draw Things",
  "LoudReader",
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Category",
    cells: [
      "Chat with downloaded LLMs",
      "Language-model runner",
      "Audio transcription",
      "Image generation",
      "Read books and PDFs aloud",
    ],
  },
  {
    label: "Local workflow",
    cells: [
      "Chat and document processing with local models",
      "Inference with a locally installed model",
      "Transcription with a local speech model",
      "Generation with a locally installed image model",
      "Speech synthesis with bundled voices",
    ],
  },
  {
    label: "Check separately",
    cells: [
      "Model/runtime downloads, discovery, updates, connected tools",
      "Cloud models and web search; local-only settings",
      "Selected transcription and AI-summary providers",
      "Model downloads and selected generation mode",
      "Book downloads and other network features are separate from synthesis",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "What counts as a local AI workflow?",
    a: "The model processes your input on your device. Downloads, updates, connected tools, and optional cloud models are separate features to check. An app can support a local workflow and also offer online services.",
  },
  {
    q: "Does working without Wi-Fi prove an app never sends data out?",
    a: "No. It shows that the tested feature can work offline. Review the app's documentation, selected providers, and behaviour when connected as well. An outbound network monitor can help you inspect requests, but an offline test alone is not a security audit.",
  },
  {
    q: "Does every local AI app require Apple Silicon?",
    a: "No single requirement covers every local model and runtime. Check each tool's supported hardware, memory, and storage needs. LoudReader requires macOS 15 or later on Apple Silicon and runs the iPad app in Apple's Mac compatibility mode.",
  },
  {
    q: "What is the difference between LoudReader and Loudkit?",
    a: "LoudReader is the reading app for books and documents. Loudkit is a separate Apache-2.0 open-source speech framework, with SDKs and a CLI for developers. Its models download during setup, and speech can then run locally.",
  },
  {
    q: "Can I add local voice to an existing agent?",
    a: "Loudkit for agents is a developer preview for that use case on Apple Silicon Macs. Local Hermes and OpenClaw speech-provider integrations have been tested, while full delivery through real messaging accounts still needs validation. Local speech does not make the messenger or the agent's model offline.",
  },
];
