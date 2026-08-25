// FACT PROVENANCE.
// Speechify claims are reused, not re-verified here, from
// app/(seo)/speechify-alternative-for-mac/content.ts, which checked them
// directly against Speechify's own pages on 2026-07-14:
//   - https://speechify.com/pricing/ (Premium $29/month, about 60% off
//     billed annually; free tier = 10 voices, up to 1.5x speed; 1000+ voices
//     and 60+ languages on Premium)
//   - https://speechify.com/usage-limits/ (Premium word allowance:
//     1,000,000 words/month guaranteed for 2026, 150,000/month contractual
//     baseline after that)
//   - https://speechify.com/text-to-speech-mac/ (Mac app exists, sign-in
//     required, TTS plus voice typing, currently English US/UK on Mac)
// LoudReader pricing and features: components/money/site.ts (PRICING,
// VOICES, DIFFERENTIATORS), single source of truth.
// This article deliberately does not repeat the full head-to-head feature
// table; that comparison already lives at /speechify-alternative-for-mac.
// This piece answers the narrower "is it worth the money" question and links
// there for readers who want the full breakdown.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is Speechify worth $29 a month?",
    a: "For some readers, yes. If you rely on multiple languages, want a huge voice catalog including celebrity voices, need Android or Windows support, or use extras like AI summaries and a Chrome extension, $29/month buys real capability you'd struggle to replace. If you mainly want English-language books and PDFs read aloud, the price is harder to justify next to narrower, cheaper apps.",
  },
  {
    q: "Does Speechify's free plan cover normal reading?",
    a: "It's limited. The free plan includes 10 standard voices at speeds up to 1.5x, which is workable for short reading but not built for listening to whole books regularly. Heavier use, and access to the more natural-sounding premium voices, pushes you toward the paid plan.",
  },
  {
    q: "Does paying for Speechify Premium mean unlimited listening?",
    a: "Not exactly. Even on Premium, listening with the premium voices is metered by a monthly word allowance: 1,000,000 words guaranteed for 2026, dropping to a 150,000/month contractual baseline after that. A long novel can run past 150,000 words, so a heavy reader on a paid plan can still hit a ceiling.",
  },
  {
    q: "What does Speechify do that most other reading apps don't?",
    a: "Breadth. 60+ languages, 1000+ voices, scanning physical books with your camera, AI summaries and chats, voice typing, and apps across iOS, Android, web, and a Chrome extension. If any of those specific features is the reason you're looking at Speechify, it's likely worth it for you.",
  },
  {
    q: "Who is Speechify not worth it for?",
    a: "Readers whose actual use case is narrower than the suite: mostly books and PDFs, read privately, without a monthly word cap. For that use case, a dedicated on-device reader can cost less and remove the metering question entirely. LoudReader is one example, and a full comparison is at /speechify-alternative-for-mac.",
  },
  {
    q: "Is there a cheaper way to get similar reading quality?",
    a: "Depends what you need. If your reading is mostly English books and documents and privacy matters to you, LoudReader's free tier is unlimited listening on every book with no word quota, and Premium is $7.99/month, $49.99/year, or a $199.99 one-time purchase, all well under Speechify's $29/month.",
  },
];
