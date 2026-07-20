// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader is a native macOS app built for Apple Silicon, listed in
//     the Mac App Store. The app uses AppKit and SwiftUI for a native
//     look and feel. No Electron, no Catalyst, no web wrapper.
//   - macOS Spoken Content (System Settings, Accessibility, Spoken Content)
//     is a built-in feature available on macOS 15+. Its capabilities and
//     limitations are accurately described: system voice, global speed
//     slider, reads selected text or the item under the cursor.
//   - The app's offline behavior is verified: all voice models run on the
//     device's Neural Engine with no network calls for speech generation.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: Intel Mac support (app requires Apple Silicon).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does my MacBook already have a way to read text aloud?",
    a: "Yes. macOS includes Spoken Content, a system-wide feature that reads selected text aloud. Go to System Settings, Accessibility, Spoken Content, and enable 'Speak selection'. Then select text anywhere and press Option+Esc. The voice is the system accessibility voice, and there is one speed slider for everything. It works for short passages. For books, long articles, and documents, a dedicated reader adds natural voices, place bookmarking, speed control per book, and offline playback with the screen locked.",
  },
  {
    q: "Does LoudReader run natively on a MacBook?",
    a: "Yes. LoudReader is a native Mac app built for Apple Silicon. It is not an iPhone app running in a compatibility mode, not a web wrapper, and not an Electron shell. It uses the Mac's Neural Engine for voice generation, so the voices run fast and use minimal battery. The app requires macOS 15.0 or later and an Apple Silicon Mac (M1 or newer). Intel Macs are not supported.",
  },
  {
    q: "Can I listen to books on my MacBook with the lid closed?",
    a: "No, and this is a macOS limitation, not a LoudReader limitation. MacBooks pause audio output when the lid is closed, and no app can override this without external display or power adapter tricks. The practical alternative is to use an iPhone for lid-closed listening and the MacBook for desk listening. LoudReader syncs your library across devices if you use iCloud Drive to store your EPUBs and PDFs, though the app itself does not sync playback position between Mac and iPhone.",
  },
  {
    q: "Does LoudReader on Mac support keyboard shortcuts?",
    a: "The app uses standard macOS media key handling: the play/pause key on the keyboard or Touch Bar controls playback. There are no dedicated app-specific keyboard shortcuts for import, navigation, or voice switching. Most interaction is through the main window with mouse or trackpad.",
  },
  {
    q: "How does the Mac version compare to the iPhone version?",
    a: "The core feature set is the same: import EPUBs and PDFs, read them aloud with natural offline voices, and keep your place. The Mac version benefits from a larger screen for following along with word highlighting, and it is easier to manage a large library with drag-and-drop import. The iPhone version is better for portable, screen-off listening. LoudReader is fully on-device and private, your library never leaves your device, on both platforms.",
  },
];
