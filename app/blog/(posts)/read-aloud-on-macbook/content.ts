// FACT PROVENANCE. Every app-behavior claim re-verified on 2026-08-26
// against the LoudReader app source (LoudReader_mac repo, main branch) and
// the App Store record (itunes lookup id=6758149478):
//   - There is NO native macOS build and NO Mac App Store record. The Xcode
//     project has one iOS app target (SDKROOT = iphoneos, deployment target
//     18.0, TARGETED_DEVICE_FAMILY "1,2"), no macOS target, no Catalyst.
//   - On Apple Silicon Macs the iPad build installs from the Mac App Store's
//     "iPhone & iPad Apps" tab and runs in Apple's compatibility mode, which
//     Apple labels "Designed for iPad. Not verified for macOS." Fixed,
//     non-resizable window.
//   - macOS 15 + Apple Silicon IS the correct floor (an iOS 18 app on Mac
//     requires macOS 15). That claim is true and may stay.
//   - macOS Spoken Content (System Settings, Accessibility, Spoken Content)
//     is a built-in feature available on macOS 15+. Its capabilities and
//     limitations are accurately described: system voice, global speed
//     slider, reads selected text or the item under the cursor.
//   - The app's offline behavior is verified: all voice models run on the
//     device's Neural Engine with no network calls for speech generation.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: "native Mac app", a separate Mac build or Mac
// App Store download, AppKit, Catalyst, or Intel Mac support.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does my MacBook already have a way to read text aloud?",
    a: "Yes. macOS includes Spoken Content, a system-wide feature that reads selected text aloud. Go to System Settings, Accessibility, Spoken Content, and enable 'Speak selection'. Then select text anywhere and press Option+Esc. The voice is the system accessibility voice, and there is one speed slider for everything. It works for short passages. For books, long articles, and documents, a dedicated reader adds natural voices, place bookmarking, speed control per book, and offline playback with the screen locked.",
  },
  {
    q: "Does LoudReader run on a MacBook?",
    a: "Yes, with one honest caveat about what it is. LoudReader is an iPhone and iPad app. On an Apple Silicon Mac you install the iPad version from the Mac App Store's 'iPhone & iPad Apps' tab, and it runs in Apple's compatibility mode in a fixed-size window rather than a resizable Mac one. There is no separate Mac build. What is real is the engine underneath: the voices are generated on your Mac's own Neural Engine, fully offline, with no account. It requires macOS 15.0 or later on Apple Silicon (M1 or newer). Intel Macs are not supported.",
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
    q: "How does listening on a Mac compare to listening on an iPhone?",
    a: "It is literally the same app, so the feature set is identical: import EPUBs and PDFs, read them aloud with natural offline voices, and keep your place. On a Mac you get a larger screen for following the word highlighting, though the window is a fixed size because this is the iPad app in Apple's compatibility mode, not a Mac build. The iPhone is better for portable, screen-off listening. LoudReader is fully on-device and private on both, and your library never leaves your device.",
  },
];
