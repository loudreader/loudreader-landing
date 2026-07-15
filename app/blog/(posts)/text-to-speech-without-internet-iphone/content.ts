// FACT PROVENANCE, every claim verified on 2026-07-14 against:
//   - iOS Spoken Content (Speak Selection / Speak Screen) exists, is built in,
//     and is enabled under Settings → Accessibility → Spoken Content:
//     Apple iPhone User Guide, https://support.apple.com/guide/iphone/iph96b214f0/ios
//     ("Hear iPhone speak the screen, selected text, and typing feedback").
//     iOS voice claims are kept deliberately generic (system voices, some
//     higher-quality versions offered as downloads in Settings), with no
//     per-voice or per-iOS-version specifics that could go stale.
//   - LoudReader voices ship INSIDE the app, no post-install voice download:
//     LoudReader/Engines/KokoroAneModelSeeder.swift (app-bundled model set is
//     copied into the local cache; `DownloadUtils.enforceOffline = true` so
//     the TTS engine can never touch the network) and
//     LoudReader/Engines/KittenSynthesisBackend.swift (free-tier voice models
//     loaded from Bundle.main).
//   - Background playback with the screen locked + lock-screen controls:
//     LoudReader/Info.plist (UIBackgroundModes = ["audio"]) and
//     LoudReader/PlayerService.swift (MPRemoteCommandCenter: play, pause,
//     15-second skips; MPNowPlayingInfoCenter metadata).
//   - Downloading NEW books from the built-in Project Gutenberg catalog
//     requires a connection: LoudReader/ProjectGutenbergService.swift fetches
//     over the network. Already-imported books play fully offline.
//   - Pricing / speed-control-is-Premium: components/money/site.ts (PRICING).
//   - Battery answer is deliberately qualitative, since we have not published
//     measured battery figures, so the article makes no numeric claims.
// Claims you may NOT make until verified: CarPlay support (not in the app),
// any numeric battery comparison, any specific iOS voice names or sizes.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can my iPhone do text to speech with no connection?",
    a: "Yes, two ways. iOS has a built-in Spoken Content feature (Settings → Accessibility → Spoken Content) that reads selected text or the whole screen using system voices stored on the phone. For books, PDFs, and long documents, a dedicated offline reader like LoudReader generates natural offline voices entirely on the device, with no connection, no account, and no upload.",
  },
  {
    q: "Do offline voices sound worse than online voices?",
    a: "Not necessarily anymore. Older offline voices were robotic because they used lightweight synthesis techniques, and that reputation stuck. Modern on-device apps run neural text-to-speech models directly on the iPhone's chip, so the voice is generated the same way cloud services generate theirs, just locally. Cloud services still offer more voices and languages, but the per-voice quality gap has narrowed dramatically.",
  },
  {
    q: "Does LoudReader need to download voices first?",
    a: "No. The voice models ship inside the app itself, so once the app is installed from the App Store there is nothing else to download. The engine is built to never touch the network. You can install LoudReader, import a book, and start listening in airplane mode.",
  },
  {
    q: "Does offline listening drain more battery?",
    a: "Generating speech on the phone is real work for the chip, so it isn't free. But it also removes the cost of keeping a cellular or Wi-Fi radio streaming audio for hours, which is a major battery consumer in its own right. In practice, on-device listening is comparable to other media playback. We haven't published measured figures, so treat any precise percentage you read elsewhere with skepticism.",
  },
  {
    q: "Does everything work on a flight with airplane mode on?",
    a: "Everything that matters: any book or PDF already in your library plays normally, word highlighting stays in sync, your position is saved, and lock-screen controls work. The one thing that needs a connection is downloading new books from the built-in Project Gutenberg catalog, so add your books before boarding.",
  },
];
