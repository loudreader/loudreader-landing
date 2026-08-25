// FACT PROVENANCE. Verified 2026-08-25 against the LoudReader app source
// (LoudReader_mac repo, main branch) and components/money/site.ts (single
// source of truth for pricing, voices, and requirements):
//   - Native Mac and iPhone apps built from one Xcode project targeting both
//     platforms: LoudReader.xcodeproj.
//   - System requirements are read verbatim from REQUIREMENTS in site.ts:
//     "iOS 18.0+, iPadOS 18.0+, macOS 15.0+ (Apple Silicon)". The Apple
//     Silicon qualifier means an Intel Mac cannot run the app; do not soften
//     this.
//   - No iCloud or CloudKit entitlement exists anywhere in the project
//     (checked LoudReader/LoudReaderDebug.entitlements and
//     LoudReaderShareExtension/LoudReaderShareExtensionDebug.entitlements,
//     and grepped the source tree for CloudKit/NSUbiquitous/iCloud: no
//     matches outside unrelated variable names). There is also no account
//     system (PRICING.free in site.ts: "No account, no word quota"). A
//     library, therefore, does not sync between a Mac and an iPhone; each
//     device keeps its own local copy of the books you import there and its
//     own reading position.
//   - Voice cloning (Voice Studio) runs on-device per CLONING in site.ts
//     ("The recording, the model and the voice never leave your device").
//     Combined with the no-iCloud finding above, a voice cloned on the
//     iPhone is stored only on the iPhone; it does not appear on the Mac.
//   - CarPlay: not present anywhere in the app source (grepped the full
//     LoudReader_mac tree). Do not claim CarPlay support.
//   - Voice roster (VOICES) and pricing (PRICING) in site.ts are shared
//     constants used across the whole product, with no platform-specific
//     variant, so the same 23 narrators and the same subscription apply on
//     both devices.
// Claims NOT made: no CarPlay, no Android, no Windows, no cross-device
// library sync, no iCloud backup of imported books.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does LoudReader work the same way on Mac and iPhone?",
    a: "Yes, for reading and listening. Both are native apps that import the same EPUB and PDF files, use the same 23 studio narrators, and offer the same Premium features: playback speed from 0.3x to 3.0x, sleep timer, ambient soundscapes, notes and highlights, and on-device voice cloning. Neither app is a shrunk-down port of the other.",
  },
  {
    q: "Does my library sync between my Mac and my iPhone?",
    a: "No. LoudReader has no account and no iCloud sync, so each device keeps its own local library. A book you import on your iPhone will not show up on your Mac, and your reading position on one device does not carry to the other. You import each book on each device you want to read it on.",
  },
  {
    q: "If I clone my voice on my iPhone, can I use it on my Mac?",
    a: "No, not automatically. Voice cloning is fully on-device: the recording, the model, and the voice never leave the device where you made it. A voice you create on your iPhone stays on your iPhone unless you record it again on your Mac.",
  },
  {
    q: "Does LoudReader work on an Intel Mac?",
    a: "No. The Mac app requires macOS 15.0 or later on Apple Silicon. An Intel Mac cannot run it, no matter how recent the macOS version. The iPhone app requires iOS 18.0 or later, and the iPad app requires iPadOS 18.0 or later.",
  },
  {
    q: "Does LoudReader work with CarPlay?",
    a: "Not today. There is no dedicated CarPlay integration. On a drive, LoudReader plays through whatever your iPhone is already connected to over Bluetooth or a cable, the same way any other audio app would, and lock-screen and Bluetooth playback controls work normally.",
  },
];
