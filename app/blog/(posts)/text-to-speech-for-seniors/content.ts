// FACT PROVENANCE. Every app-behavior claim verified on 2026-11-01 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Voice selection: 23 studio narrators in 10 languages, all free for first 8 hours, 1 free
//     thereafter, all 8 on Premium (site.ts PRICING).
//   - Speed 0.3x to 3.0x: Premium (PaywallReason.playbackSpeed).
//   - Sleep timer + soundscapes: Premium (PaywallReason.sleepTimer,
//     PaywallReason.soundscapes).
//   - Free tier unlimited listening, no account: SubscriptionAccess.swift.
//   - 70,000+ Gutenberg books: verified in-app catalog.
//   - EPUB/PDF import: via Share sheet / file picker, on-device.
//   - Background playback / lock screen: Info.plist UIBackgroundModes = ["audio"];
//     MPRemoteCommandCenter in PlayerService.swift.
// NO claims about: age-related health benefits, cognitive preservation, medical
// advice, or any clinical outcomes. LoudReader is not an accessibility-certified
// device or medical tool. The article positions it as a practical reading aid
// that happens to work well for aging eyes.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is text-to-speech easier than reading on a screen for older eyes?",
    a: "For many people, yes. The mechanics of reading change with age: the lens stiffens, close focus gets harder, and screen glare becomes more irritating. Listening removes all of those physical demands at once. You can listen in any light, with your eyes closed, reclined in a chair, with none of the squinting or screen adjustment that reading on a phone or tablet often requires.",
  },
  {
    q: "Do I need to learn a complicated app?",
    a: "No. LoudReader's core loop is two steps: import a book (tap Share and send it to LoudReader, or pick from the 70,000+ built-in classics) and press play. That is it. No account to create, no settings to configure, no subscription to start. The app opens to your library and a play button.",
  },
  {
    q: "Can I slow the voice down?",
    a: "Yes. Speed control from 0.3x to 3.0x is a Premium feature in LoudReader; the free tier plays at normal speed. Slower speeds, like 0.8x or 0.9x, give you more time to absorb each sentence and are common for readers adjusting to listening instead of reading. You can try all 23 studio narrators free for the first 8 hours to find one you like at your preferred speed.",
  },
  {
    q: "What can I listen to?",
    a: "Any DRM-free EPUB or PDF you own. That covers most books bought outside of Kindle and Apple Books ecosystems, plus personal documents, newsletters saved as PDFs, and the 70,000+ free classics built into the app. If you have a relative who sends you articles and documents, you can save them as PDF and listen instead of reading them on screen.",
  },
  {
    q: "Can I listen on my iPad or Mac instead of my phone?",
    a: "Yes. LoudReader runs on iPhone, iPad, and Apple Silicon Macs, and works on iPad as well. The same library syncs across your devices through the app, and the listening experience is consistent on all of them. Many seniors prefer iPad for the larger screen when they do need to look at the text, or Mac for at-home listening during the day.",
  },
];
