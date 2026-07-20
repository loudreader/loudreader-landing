// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14
// against the LoudReader app source (LoudReader_mac repo, main branch):
//   - All voice models run on-device via the Neural Engine. No network
//     calls are made during speech generation. Verified by inspecting
//     the TTS pipeline in the app source.
//   - Offline behavior tested: playback continues with Airplane Mode
//     enabled on both iOS and macOS.
//   - Pricing, free-tier, and voice facts from components/money/site.ts.
// Claims you may NOT make: that all TTS apps work offline (many don't).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does LoudReader work in airplane mode?",
    a: "Yes, completely. LoudReader is fully on-device and private, your library never leaves your device. All voice generation runs on the iPhone or Mac's Neural Engine with no internet connection needed. Import your books while online, switch to airplane mode, and listen for the entire flight.",
  },
  {
    q: "Do I need to download voices before going offline?",
    a: "No. The voices are built into the app. There is no separate voice download step and no voice packs to manage. When you install LoudReader from the App Store, the voices are included. The free tier includes a standard voice. Premium unlocks all eight neural voices, which are also built in and ready offline from the moment you upgrade.",
  },
  {
    q: "What about cloud-based TTS apps on a plane?",
    a: "Cloud-based text-to-speech apps send your text to a server, which generates the audio and streams it back. In airplane mode, the server is unreachable. These apps either stop working entirely or fall back to a lower-quality on-device voice, if they have one. Before a flight, check whether your TTS app works offline. The test is simple: enable airplane mode, press play. If you hear audio, it works. If not, find an offline alternative before you board.",
  },
  {
    q: "Can I import new books while in airplane mode?",
    a: "Yes, if the files are already on your device. You can import EPUBs and PDFs from the Files app, iCloud Drive (if synced before going offline), or any local storage. You cannot browse the built-in Project Gutenberg catalog while offline because it fetches book data from Gutenberg's servers. Download your Gutenberg picks before the flight.",
  },
  {
    q: "How many hours of listening does a full battery give in airplane mode?",
    a: "A typical iPhone on a full charge can play many hours of audio with the screen off and airplane mode enabled. The Neural Engine is power-efficient for voice generation. Airplane mode itself saves battery by disabling the cellular and WiFi radios. Exact hours depend on your iPhone model and battery health, but a long-haul flight is well within range.",
  },
];
