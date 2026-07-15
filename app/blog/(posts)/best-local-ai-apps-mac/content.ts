// FACT PROVENANCE. Every third-party claim checked on that vendor's OWN site
// on 2026-07-14 (per the article plan: verify each app's local-processing
// claim at write time). What was verified, per app:
//   - LM Studio (https://lmstudio.ai/): positions itself as running AI models
//     locally and privately on your own hardware; free for home and work use.
//   - Ollama (https://ollama.com/): local model runner, can run entirely
//     offline; free to download and use locally. HONEST NOTE kept in copy:
//     Ollama also sells optional cloud tiers ("start local, scale with
//     cloud"). The local path is free, the cloud path is opt-in.
//   - MacWhisper (https://www.macwhisper.com/ and its support docs):
//     transcribes with local models, "without data ever leaving your Mac";
//     free version + one-time Pro purchase. HONEST NOTE kept in copy:
//     optional integrations (cloud transcription providers, AI prompt
//     services) DO send data out when you enable them.
//   - Draw Things (https://drawthings.ai/): generates images locally and
//     offline on Mac/iPhone/iPad to protect privacy; free edition, optional
//     paid tier. Downloading models requires a connection.
//   - LoudReader claims verified against the app source (LoudReader_mac repo):
//     voice models bundled in-app and executed locally via Core ML on the
//     Apple Neural Engine (Engines/KokoroAneModelSeeder.swift with
//     DownloadUtils.enforceOffline = true; Engines/KittenSynthesisBackend.swift
//     loads from Bundle.main), and components/money/site.ts (pricing,
//     requirements, differentiators).
//   - "Why Apple Silicon" reasoning: ML accelerator (Neural Engine) + unified
//     memory are Apple's published architecture; no benchmark numbers are
//     claimed anywhere in the article.
// No ratings, download counts, or user numbers are cited for any app. None
// were verified, so none appear. Comparison table cells restate only the
// claims above.

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
      "Chat with local LLMs",
      "Local LLM runner (CLI + app)",
      "Audio transcription",
      "Image generation",
      "Read books & PDFs aloud (TTS)",
    ],
  },
  {
    label: "What runs on-device",
    cells: [
      "Model inference (models you download)",
      "Model inference (models you download)",
      "Transcription with local models",
      "Image generation, works offline",
      "Voice synthesis; models ship inside the app",
    ],
  },
  {
    label: "Any cloud parts?",
    cells: [
      "Model downloads need a connection; inference is local",
      "Optional paid cloud tiers (opt-in)",
      "Optional cloud providers & AI integrations (opt-in)",
      "Optional paid tier; model downloads need a connection",
      "None. The TTS engine cannot touch the network",
    ],
  },
  {
    label: "Price",
    cells: [
      "Free for home and work use",
      "Free locally; cloud is paid",
      "Free version; one-time Pro purchase",
      "Free edition; optional subscription",
      "Free unlimited listening; optional Premium",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "What counts as a truly local AI app?",
    a: "The model runs on your Mac's own processor and the data being processed never leaves the machine. A useful test: switch off Wi-Fi and use the core feature. A truly local app keeps working. Watch for hybrids, since many apps advertise 'local' but quietly route some features through a cloud API, so check which specific features are on-device and which are opt-in cloud.",
  },
  {
    q: "How do I check whether a Mac app sends data to the cloud?",
    a: "Three practical checks: read the app's privacy page for a concrete claim like 'data never leaves your Mac' rather than vague reassurance; use the core feature with Wi-Fi off and see if it works; and if you want certainty, watch the app with an outbound network monitor and see what connections it opens. An app with nothing to hide usually says so plainly and survives all three.",
  },
  {
    q: "Why do local AI apps require Apple Silicon?",
    a: "Running a neural network in real time is a heavy, sustained workload. Apple Silicon chips pair a dedicated machine-learning accelerator (the Neural Engine) with fast unified memory that CPU, GPU, and accelerator all share. That is what lets a model generate speech, text, or images live without swamping the machine. Most of the apps in this list are dramatically better on Apple Silicon, and some, like LoudReader, require it (macOS 15+).",
  },
  {
    q: "Are local AI models worse than cloud ones?",
    a: "Smaller, honestly. A model that fits on a laptop can't match the largest datacenter models on raw capability, and cloud services offer more variety. But for well-defined jobs like transcribing audio, generating an image, or reading a book aloud, compact specialized models have become good enough that the gap rarely matters in practice. You trade peak capability for privacy, offline reliability, and zero per-use cost.",
  },
  {
    q: "Which on-device apps handle text to speech?",
    a: "LoudReader is the reading-focused one: natural offline voices generated on your Mac or iPhone, with the voice models shipped inside the app so nothing is downloaded or uploaded afterwards. It reads DRM-free EPUBs and PDFs plus 70,000+ built-in Project Gutenberg classics, free with no word quota. macOS also has built-in system voices via Spoken Content, which are serviceable for short passages but less natural for whole books.",
  },
];
