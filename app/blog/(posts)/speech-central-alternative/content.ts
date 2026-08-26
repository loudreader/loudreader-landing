// FACT PROVENANCE. All app-behavior claims verified against the LoudReader app
// source (LoudReader_mac repo, main branch). Pricing and features from
// components/money/site.ts (single source of truth).
// Speech Central claims are based on their publicly listed App Store features
// as of late 2026. No invented stats, reviews, or testimonials.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Which app has better voice quality, LoudReader or Speech Central?",
    a: "LoudReader generally has better voice quality thanks to more modern on-device neural voices. Both use offline voices, so neither needs an internet connection. LoudReader's natural offline voices sound closer to a human reader than Speech Central's default system voices.",
  },
  {
    q: "Does Speech Central have a Mac app?",
    a: "No, Speech Central is available on iPhone, iPad, and Apple Watch. LoudReader runs on iPhone, iPad, and Apple Silicon Macs, so you get the full experience on desktop too, with the same voices and the same library synced through iCloud.",
  },
  {
    q: "Does Speech Central have a free tier?",
    a: "Speech Central is a paid app with a free trial. LoudReader's free tier provides unlimited listening on every book, cover to cover, with no word quota and no account required. You get one natural voice free, forever.",
  },
  {
    q: "Which app handles more file formats?",
    a: "Both apps focus on EPUB and PDF. Speech Central also reads web articles and RSS feeds directly, which LoudReader does not. In LoudReader, you can save a web page as PDF first and then import it.",
  },
  {
    q: "Which one should I pick if I read on multiple devices?",
    a: "Speech Central has wider platform support overall with iOS, watchOS, and Android. LoudReader runs on iPhone, iPad, and Apple Silicon Macs only. If you need Android or Apple Watch support, Speech Central is the answer. If Mac and iPhone cover your devices, LoudReader gives you the better voices and a cleaner reading experience.",
  },
];