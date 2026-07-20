// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - On-device voices, no internet: speech synthesis runs locally.
//     Works in airplane mode, tunnels, basements.
//   - Lock-screen controls via MPRemoteCommandCenter: PlayerService.swift
//     configures play, pause, toggle, skip (15 sec).
//   - Background audio: Info.plist UIBackgroundModes = ["audio"].
//   - Free tier unlimited listening: SubscriptionAccess.swift
//     baseFreeFraction = 1.0, site.ts PRICING.
//   - 70,000+ Gutenberg books built in.
//   - Import: EPUB and PDF (DRM-free), ContentView.swift
//     .fileImporter(allowedContentTypes: [.epub, .pdf]).
//   - Pricing: components/money/site.ts PRICING.
// Claims you may NOT make: specific transit statistics, that TTS is
// allowed on all airlines (check your airline's policy), CarPlay support.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does LoudReader work on the subway with no signal?",
    a: "Yes. The voices are fully on-device and private, your library never leaves your device, and nothing streams. No signal needed. Tunnels, underground stations, and dead zones make no difference. The book you imported at home plays all the way to your stop.",
  },
  {
    q: "Can I listen on a plane in airplane mode?",
    a: "Yes. Switch to airplane mode after takeoff, open LoudReader, and press play. The voices run entirely on your iPhone with no internet connection. Import your EPUBs and PDFs before the flight, or pick from the 70,000+ built-in Gutenberg classics, and you have a whole library in the air.",
  },
  {
    q: "What is different about listening on a commute versus at home?",
    a: "Two things. First, background noise means you need headphones or earbuds, and noise-cancelling ones make a real difference on trains and buses. Second, you cannot stop to highlight or take notes as easily while standing in a crowded train car, but the basic controls, play, pause, and 15-second skip, work perfectly from the lock screen.",
  },
  {
    q: "Is it better than podcasts for a commute?",
    a: "Different thing. Podcasts are great for quick hits and current events. Books are for longer arcs. A 30-minute commute each way adds up to 5 hours a week, which is most of a novel or a solid chunk of non-fiction. The math on commute reading is hard to argue with.",
  },
  {
    q: "What if my commute involves walking between transfers?",
    a: "Same setup works. The narration keeps going, and you control it from the lock screen or your headphone button. If you are navigating city streets, keep one earbud out or the volume low enough to hear traffic. Bone-conduction headphones are a solid option for the walk-and-listen commute.",
  },
];
