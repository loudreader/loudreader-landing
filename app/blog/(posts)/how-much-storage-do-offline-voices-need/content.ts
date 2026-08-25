// FACT PROVENANCE. Every app-behavior claim verified on 2026-08-24 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Voice models ship bundled inside the app itself. There is no download
//     manager or network fetch path for voice models anywhere in the
//     codebase; the only path found is a local, one-time copy from the
//     app bundle into an on-device cache folder:
//     LoudReader/Engines/ (the on-device model seeder's `seedIfNeeded()`
//     copies its bundled model-seed folder into the exact cache tree the
//     speech engine reads from, "so `initialize()` is a pure cache hit").
//   - The app explicitly forbids any network fetch for speech models:
//     `DownloadUtils.enforceOffline = true`, set before any model loader
//     runs, so a missing file throws a typed offline error instead of
//     silently reaching the network: same model-seeder source file in
//     LoudReader/Engines/.
//   - On-device voice cloning needs about 170 MB of enrollment-only models
//     to build a clone from a recording. They are not used to speak with,
//     only to create a voice, and are unloaded once the voice is made:
//     LoudReader/AppFeatures.swift ("The 170 MB of enrollment models. They
//     are needed only to MAKE a voice, never to speak one") and
//     LoudReader/VoiceStudio.swift, `finishRecording()`
//     ("the ~170 MB of enroll-only models have no further job... await
//     enrollment.unload()").
//   - Those 170 MB currently ship inside every install rather than as an
//     optional download, because On-Demand Resources packaging for them
//     isn't finished yet: LoudReader/AppFeatures.swift, same comment
//     ("ODR is served by the App Store... a local build always bundles
//     them").
//   - Free tier keeps one natural offline voice with unlimited listening;
//     Premium includes all 23 studio narrators across 10 languages:
//     components/money/site.ts (VOICES, PRICING).
//   - The voice picker only lists narrators for a language once you have a
//     book in that language. This is a picker-declutter behavior, not a
//     storage mechanism, since every voice model already ships inside the
//     app: components/money/site.ts (VOICES.lazyLanguages).
// Claims you may NOT make until verified: a total megabyte figure for the
// full 23-narrator model set or for a single saved cloned voice, and any
// size comparison against a named competitor's app.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Do offline text to speech voices take up storage on your phone?",
    a: "Yes. An offline voice has to have its speech model living somewhere on the device to work without a network connection, so it's part of your storage, not a separate download that hits your data plan every time you listen. In LoudReader the voice models ship inside the app itself.",
  },
  {
    q: "Do you need to download each voice separately?",
    a: "No. LoudReader's voice models are bundled into the app at install time, not fetched one by one as you use them. The app explicitly blocks any network request for speech models, so nothing downloads in the background while you're reading, and nothing surprises you with a new download the first time you try a different narrator.",
  },
  {
    q: "Why do the first few seconds of a new voice feel different from playback later?",
    a: "On first launch, LoudReader copies its bundled speech-model files into an on-device cache folder so the speech engine always reads from the same known location. That's a local copy, not a network fetch, and it happens once, not every time you open the app.",
  },
  {
    q: "Does voice cloning use more storage than the built-in voices?",
    a: "Setting one up temporarily needs about 170 MB of enrollment-only models to build a voice from your recording. Those models exist purely to make the clone, not to speak with it, and LoudReader unloads them from memory once the voice is created. They currently ship inside every install rather than as an optional download, so every user carries that 170 MB whether or not they ever record a voice.",
  },
  {
    q: "Do you get more voices with LoudReader Premium?",
    a: "Yes. The free tier includes one natural offline voice with unlimited listening on every book. Premium adds all 23 studio narrators across 10 languages, on-device voice cloning, and playback speed control, on top of the same fully on-device and private, your library never leaves your device model.",
  },
];
