// FACT PROVENANCE.
// LoudReader pricing and features: components/money/site.ts (PRICING, VOICES),
// the single source of truth, synced with the App Store listing.
//
// Competitor prices below are reused, not re-verified here, from the money
// pages that already checked them directly against each vendor's own pages
// on 2026-07-14:
//   - Speechify: app/(seo)/speechify-alternative-for-mac/content.ts, checked
//     against speechify.com/pricing/ ($29/month, 60% off billed annually,
//     free tier = 10 voices at up to 1.5x speed) and
//     speechify.com/usage-limits/ (Premium word allowance: 1,000,000
//     words/month guaranteed for 2026, 150,000/month baseline after).
//   - ElevenReader: app/(seo)/elevenreader-alternative/content.ts, checked
//     against elevenreader.io (free plan = 10 hours of text-to-audio per
//     month) and the ElevenReader App Store listing (Ultra: $11/month or
//     $99/year, about $8.25/month billed annually).
//   - Voice Dream Reader: app/(seo)/voice-dream-reader-alternative/content.ts,
//     checked against voicedream.com/subscription-pricing-update/ (switched
//     to subscription pricing May 1, 2024, regular price $79.99/year, legacy
//     one-time purchasers grandfathered onto their existing features at no
//     extra cost) and the Voice Dream Reader App Store listing (free
//     download, in-app subscriptions, 36 built-in iOS voices free in 27
//     languages).
// No other competitor is named, because no other price could be verified for
// this article. Rather than guess, those apps are omitted.
// Apple's own built-in Spoken Content / VoiceOver reading is a real, free,
// system-level option; it is described only in general terms here (no
// specific claim beyond "it exists and is free"), since it ships with iOS
// and macOS and needs no separate verification.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a completely free way to get text read aloud?",
    a: "Yes, two ways. Every iPhone and Mac has a built-in screen reader (Spoken Content on iOS, VoiceOver and Speak Selection on macOS) that reads any text aloud for free, with no app to install. Separately, LoudReader's free tier gives unlimited listening on every book, cover to cover, with one natural offline voice and no word quota, no account, and no time limit.",
  },
  {
    q: "What does Speechify cost?",
    a: "Speechify Premium is advertised at $29/month, with roughly 60% off if you pay annually. The free tier includes 10 standard voices at up to 1.5x speed. Even on Premium, listening with the premium voices is metered by a monthly word allowance rather than being unlimited.",
  },
  {
    q: "What does ElevenReader cost?",
    a: "ElevenReader's free plan includes 10 hours of text-to-audio per month, which ElevenLabs describes as about a 400-page book. Removing that cap requires Ultra, at $11/month or $99/year (about $8.25/month billed annually).",
  },
  {
    q: "Are there any one-time-purchase text-to-speech apps left?",
    a: "They are rare now. Voice Dream Reader moved from a one-time purchase to a subscription (regular price $79.99/year) in 2024, though existing one-time purchasers were grandfathered onto the app's features they already had. LoudReader still sells a $199.99 one-time lifetime purchase alongside its $7.99/month and $49.99/year plans.",
  },
  {
    q: "Why do some text-to-speech apps cost so much more than others?",
    a: "Mostly it comes down to what runs where and how many voices and languages are on offer. Apps built around large cloud voice libraries, dozens of languages, and extras like AI summaries or audiobook stores carry real server costs, and the subscription reflects that. LoudReader keeps its price lower partly because voices run on your own device instead of a server LoudReader has to pay for on every play.",
  },
  {
    q: "Does a higher price mean better voice quality?",
    a: "Not necessarily. Price mostly tracks breadth (languages, voice count, extra features) and cloud infrastructure costs, not raw narration quality on any single voice. The only way to judge quality for your own ear is to listen to samples from each app before you commit to a subscription.",
  },
];
