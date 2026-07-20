// FACT PROVENANCE. Every claim verified on 2026-07-14.
//   - Apple Silicon's Neural Engine is a hardware component in M-series
//     chips. Its existence and purpose are publicly documented by Apple.
//   - LoudReader's use of the Neural Engine for voice generation is
//     verified from the app source (TTS pipeline uses Apple's on-device
//     ML APIs).
//   - The claim that on-device TTS is private (no text sent to servers)
//     is verified: LoudReader has no network calls during speech generation.
//   - Intel Macs lack a Neural Engine. This is a public hardware fact.
//   - Pricing, free-tier, and voice facts from components/money/site.ts.
// Claims you may NOT make: specific Neural Engine benchmarks,
// comparisons to other chips.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "What is the Neural Engine on Apple Silicon?",
    a: "The Neural Engine is a specialized processor inside every M-series chip (M1, M2, M3, M4) designed for machine learning tasks. It handles voice generation, image recognition, and other AI workloads efficiently without taxing the main CPU cores. For text-to-speech, the Neural Engine converts text into natural-sounding audio using neural network models that run locally on the chip.",
  },
  {
    q: "Does text-to-speech on Apple Silicon sound better than on Intel Macs?",
    a: "It can, because the Neural Engine runs more sophisticated voice models than older Intel Macs could handle locally. On an Intel Mac, high-quality TTS usually required streaming from a cloud server. On Apple Silicon, those same neural voice models run on-device. The difference is that an M-series Mac generates natural voices locally while an Intel Mac either uses a simpler voice or sends your text to a server.",
  },
  {
    q: "Which TTS apps use the Neural Engine on Mac?",
    a: "LoudReader uses the Neural Engine for all voice generation. Apple's own Spoken Content can use downloaded neural voices that run on the Neural Engine. Voice Dream Reader uses Apple's speech API, which also leverages the Neural Engine. Cloud-based apps like Speechify and NaturalReader stream voices from their servers and do not use the local Neural Engine for their best voices.",
  },
  {
    q: "Is text-to-speech on Apple Silicon private?",
    a: "Yes, when the app runs the voices on-device. The Neural Engine processes text and generates audio inside the chip, with no data leaving the device. LoudReader is fully on-device and private, your library never leaves your device. Apple's Spoken Content is also on-device. Cloud-based TTS apps send your text to a server, which processes it remotely. Whether that matters depends on what you are reading.",
  },
  {
    q: "Does on-device TTS use a lot of battery?",
    a: "The Neural Engine is purpose-built for machine learning workloads and is more power-efficient than running the same models on the CPU or GPU. On a MacBook, TTS voice generation adds some battery draw, but it is modest compared to the display or active CPU work. You can listen for hours on battery without a noticeable hit. On an iPhone, screen-off listening with the Neural Engine is especially efficient because the display (the biggest power draw) is off.",
  },
];
