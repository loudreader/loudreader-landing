// FACT PROVENANCE.
// ElevenReader claims are reused, not re-verified here, from
// app/(seo)/elevenreader-alternative/content.ts, which checked them directly
// against ElevenLabs' own pages on 2026-07-14:
//   - https://elevenreader.io/ (free plan = 10 hours of text-to-audio per
//     month, described by ElevenLabs as "about a 400-page book every month";
//     Ultra = $11/month or $8.25/month billed annually ($99/year), unlimited
//     text-to-audio, 200,000+ premium audiobooks, offline downloading,
//     custom voice creation; 1,000+ voices; platforms: web, iOS, Android,
//     Chrome extension; sign-up required to start listening; "Simply upload
//     and press play")
//   - https://apps.apple.com/us/app/elevenreader-read-books-aloud/id6479373050
//     (iOS 18+, iPhone/iPad only, no Mac app; IAP: Ultra $11/month, $99/year;
//     individual audiobook purchases as separate IAPs; 1,000+ AI voices,
//     30+ languages; offline listening via downloads; 0.25x to 4x speed;
//     thousands of free classic audiobooks)
//   - https://elevenlabs.io/text-reader (free app; GenFM AI podcasts;
//     licensed "Iconic Voices"; words highlighted in sync with audio)
// If ElevenLabs has changed these terms since 2026-07-14, elevenreader.io is
// the place to confirm, not this article.
// LoudReader pricing and features: components/money/site.ts (PRICING,
// DIFFERENTIATORS), single source of truth.
// This article answers the narrower "is it free" question. The full
// feature-by-feature comparison lives at /elevenreader-alternative and is
// linked from here rather than repeated.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is ElevenReader free to use?",
    a: "Yes, with a monthly cap. ElevenReader's free plan includes 10 hours of text-to-audio a month, which ElevenLabs describes as about a 400-page book. You also need to create an account before you can start listening. Removing the monthly cap requires the Ultra plan.",
  },
  {
    q: "What does ElevenReader's free plan actually include?",
    a: "10 hours of text-to-audio per month, access to the app's free classic audiobooks, and the core reading experience with word-synced highlighting. It does not include unlimited conversion of your own uploads, offline downloading, or custom voice creation, all of which require Ultra.",
  },
  {
    q: "What does ElevenReader Ultra cost?",
    a: "$11/month, or $99/year, which works out to about $8.25/month billed annually. Ultra removes the 10-hour monthly cap, adds offline downloading, opens up the 200,000+ premium audiobook store, and includes custom voice creation.",
  },
  {
    q: "Do you need an account to use ElevenReader's free plan?",
    a: "Yes. ElevenReader requires signing up before you can start listening, even on the free plan. That is different from an app with no account requirement at all.",
  },
  {
    q: "Is there a free text-to-speech app with no monthly hour cap?",
    a: "Yes. LoudReader's free tier is unlimited listening on every book, cover to cover, with no word or hour quota and no account required. You get one natural offline voice for free. The trade is fewer voices and languages than ElevenReader offers on Ultra; the full comparison is at /elevenreader-alternative.",
  },
  {
    q: "Does ElevenReader upload your files to listen to them?",
    a: "Yes. ElevenReader is a cloud service; its own site describes the flow as 'simply upload and press play', meaning your document goes to ElevenLabs' servers to be converted to audio. Apps that generate speech on-device, like LoudReader, never upload the file at all.",
  },
];
