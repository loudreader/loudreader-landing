// FACT PROVENANCE. Verified 2026-08-25 against the LoudReader app source
// (LoudReader_mac repo, main branch) and components/money/site.ts:
//   - Free listening is unlimited on every book: LoudReader/Subscription/
//     SubscriptionAccess.swift, baseFreeFraction = 1.0 and boostedFreeFraction
//     = 1.0, with the code comment "Free listening is UNLIMITED, the whole
//     book plays for everyone." Matches PRICING.free in site.ts.
//   - The all-voices trial is a one-time 8 hour allowance:
//     SubscriptionAccess.voiceTrialLimitSeconds = 8 * 3600. The code comment
//     specifies it is cumulative listening time, lifetime, and survives a
//     reinstall. After it runs out, the app falls back to a single free
//     voice. Matches VOICES.free in site.ts ("one natural offline voice,
//     with unlimited listening").
//   - Finishing your first book grants a one-time 3 hour bonus of all-voices
//     listening on top of the trial: SubscriptionAccess.voiceGiftSeconds =
//     3 * 3600, with an explicit code comment that it is never coupled to
//     leaving a review (App Store Guideline 5.6.1).
//   - Book imports are unlimited for both free and Premium:
//     SubscriptionAccess.canImportBook always returns true, with a comment
//     tying this to the "always unlimited" free-tier promise.
//   - Premium feature list and pricing are read verbatim from PRICING in
//     site.ts (premiumFeatures, premiumMonthly, premiumYearly,
//     premiumLifetime): all 23 studio narrators across 10 languages,
//     on-device voice cloning, playback speed 0.3x to 3.0x, sleep timer,
//     ambient soundscapes, and notes and highlights.
//   - Generating a book's audio ahead of time (offline prep) is Premium
//     only: SubscriptionAccess.canPrepareForOffline returns isPremium, with
//     a code comment explaining it costs real on-device compute and battery,
//     unlike the content-access gates that stay dormant.
// Claims NOT made: no word-count cap, no chapter cap, no time-boxed free
// trial that expires by the calendar (the 8 hour allowance is cumulative
// listening time, not days).

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is the free tier really unlimited, or is there a catch?",
    a: "Listening time has no catch. The free tier plays every book you import from cover to cover, with no word count and no chapter limit. The catch, if you want to call it that, is voice variety after your one-time trial runs out, not listening time itself.",
  },
  {
    q: "How long is the free trial, exactly?",
    a: "Eight hours of cumulative listening across all 23 studio narrators, one time, and it survives a reinstall since it is tied to your device rather than a session. It is not eight hours per day or per book. Once you have listened for eight hours total, the app moves you to your one free voice.",
  },
  {
    q: "What happens after the trial ends?",
    a: "You keep unlimited listening on every book, permanently, on one natural offline voice. You lose access to the other 22 narrators unless you upgrade. Finishing your first book adds a one-time 3 hour bonus of all-voice listening on top of the trial, as a thank-you, with no review or rating required.",
  },
  {
    q: "What does LoudReader Premium actually add?",
    a: "All 23 studio narrators across 10 languages, on-device voice cloning, playback speed from 0.3x to 3.0x, a sleep timer, ambient soundscapes, and notes and highlights. It also lets you generate a book's audio ahead of time for offline listening, which costs real processing on your device and is the one feature that is genuinely metered rather than simply included.",
  },
  {
    q: "How much does Premium cost?",
    a: "$7.99 a month, $49.99 a year, or $199.99 once for lifetime access. There is no cheaper tier with fewer voices; it is one plan with everything.",
  },
];
