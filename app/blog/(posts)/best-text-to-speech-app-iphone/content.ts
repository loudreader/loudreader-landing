// FACT PROVENANCE. Every claim verified on 2026-07-14.
//   - LoudReader facts from app source and components/money/site.ts.
//   - Competitor facts are publicly verifiable from their App Store
//     listings and official websites as of July 2026. Pricing and
//     feature claims are described at a high level that stays accurate
//     even if specifics change slightly.
//   - No specific competitor pricing or version numbers are claimed that
//     could go stale. Descriptions are deliberately general.
//   - Apple Spoken Content is described accurately from iOS 18.
// Claims you may NOT make: specific competitor ratings, user counts,
// or features not listed on their public pages.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "What is the best free text-to-speech app for iPhone?",
    a: "It depends on what you need. Apple's built-in Spoken Content (Speak Screen, two-finger swipe down) is free and works in any app, but uses the system accessibility voice with no bookmarking. LoudReader's free tier gives you unlimited listening on every book with a standard voice, no word quota, and full offline support. If you need high-quality voices for free, the built-in option is the only one with no limits. If you want bookmarking, per-book speed control, and natural voices, paid tiers on any of the dedicated apps are where those features live.",
  },
  {
    q: "Which iPhone TTS app has the best voice quality?",
    a: "Voice quality is subjective, but the top apps all use neural TTS models that sound natural and clear. Speechify offers celebrity voices (Snoop Dogg, Gwyneth Paltrow) as a differentiator. NaturalReader and Voice Dream Reader use high-quality standard voices. LoudReader includes eight neural voices that run on-device with no cloud dependency. The best way to pick is to download a few apps and listen to the same passage with each one. Voice preference is personal.",
  },
  {
    q: "Which TTS app works fully offline on iPhone?",
    a: "LoudReader and Voice Dream Reader are the two apps that work fully offline with natural voices. Both run voice generation on the device. Speechify and NaturalReader offer some offline capabilities but their highest-quality voices stream from the cloud. Apple's Spoken Content is fully offline but uses the system accessibility voice. Before relying on any app for offline use, test it in airplane mode.",
  },
  {
    q: "What TTS app is best for privacy?",
    a: "LoudReader and Apple's built-in Spoken Content are the most private options. Both run entirely on your device. LoudReader has no account, no analytics, and no cloud processing. Apple's Spoken Content is a system feature with no separate privacy policy. Cloud-based apps like Speechify and NaturalReader send your text to their servers for voice generation, which means they have access to what you are reading. For confidential documents or anyone who values reading privacy, the on-device options are the only ones that keep your text to yourself.",
  },
  {
    q: "Is there a one-time purchase TTS app for iPhone?",
    a: "LoudReader offers a lifetime purchase option ($199.99) that includes all Premium features with no subscription. Voice Dream Reader was historically a one-time purchase but moved to a subscription model. Most other TTS apps are subscription-only. If you want to pay once and be done, LoudReader is currently one of the few apps offering that option alongside its subscription tiers.",
  },
];
