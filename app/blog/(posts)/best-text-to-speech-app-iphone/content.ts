// FACT PROVENANCE — editorial verification on 2026-09-28, not a runtime benchmark.
// LoudReader shipping 1.12 facts from the root audit of release_v1.12,
// commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0 in
// the LoudReader app source:
// - Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and
//   Subscription/PaywallReason.swift: cumulative 8-hour allowance, free voice
//   selection and Premium gates. Notes/highlights are not Premium-only.
// - Engines/ChatterboxVoice.swift and Engines/VoiceRegistry.swift: 23 studio
//   narrators, 10 languages, device availability and Settings language choices.
// - ContentView.swift, PDFImportPipeline.swift and ArticleImportPipeline.swift:
//   DRM-free EPUB/PDF import, local OCR and web-article workflows.
// - LoudReaderApp.swift and Analytics.swift: local synthesis alongside Sentry
//   diagnostics and TelemetryDeck usage analytics. The shipping 1.12 app
//   does not expose an analytics opt-out: showsUsageStatisticsChoice=false.
// - iOS target/Xcode project: iPad compatibility on Apple Silicon, not a
//   separate native macOS target; no library/position sync service.
// - https://itunes.apple.com/lookup?id=6758149478&country=us : shipping version
//   and US pricing; use shared FREE_TIER/PRICING for centrally maintained copy.
// Primary competitor/Apple sources were opened on 2026-09-28 as listed below.
// The comparison is a documented shortlist plus suggested user tests. No
// hands-on comparative benchmark, privacy audit or quality ranking is claimed.
// - https://speechify.com/ios/ : iPhone product and Premium offline playback
//   through downloaded converted audio. Do not describe offline use as absent.
// - https://www.voicedream.com/ : offline reading, document imports, notes.
// - https://www.naturalreaders.com/ : mobile/web offerings, EPUB/documents,
//   mobile offline options; no unsupported "weak EPUB support" judgement.
// - https://speechcentral.net/ : document/web workflows, offline voices and
//   optional cloud services.
// - https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios : Read & Speak,
//   selection/screen controls, highlighting, voices and speaking rate.
// Do not claim universal app access, no analytics, English-only LoudReader,
// Premium-only notes, comparative voice superiority or measured battery gains.

import type { Faq } from "@/components/money/FaqSection";
import { FREE_TIER } from "@/components/money/site";

export const FAQS: Faq[] = [
  {
    q: "Do I need a separate app to hear text on iPhone?",
    a: "Not always. Apple's Read & Speak settings include Speak Selection and Speak Screen, voice choices, highlighting and playback controls. Try them with your actual text. A separate reader can make managing and returning to a book library more convenient.",
  },
  {
    q: "Which iPhone reader sounds best?",
    a: "There is no objective winner established by this article. Compare the same passage at your normal listening speed, including names, dialogue and numbers. Check the voices available in the plan you would actually keep, rather than only the trial catalogue.",
  },
  {
    q: "Can Speechify work offline on iPhone?",
    a: "Yes. Speechify's current iOS documentation says Premium users can download converted audio for offline listening. That is different from generating new narration locally. Prepare the reading you need and test it with mobile data and Wi-Fi disabled before travelling.",
  },
  {
    q: "What remains free in LoudReader after the voice allowance ends?",
    a: `${FREE_TIER.full} Notes and highlights are not Premium-only; adjustable playback speed and the sleep timer require Premium.`,
  },
  {
    q: "Does LoudReader collect analytics even though speech is local?",
    a: "Yes. Book narration happens on the device, while the app also sends crash/performance diagnostics and usage analytics. Offline narration is not a promise that the entire app makes no network requests.",
  },
];
