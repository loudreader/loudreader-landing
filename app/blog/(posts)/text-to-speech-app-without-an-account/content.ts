// FACT PROVENANCE. Verified on 2026-08-24 against the LoudReader app source
// (LoudReader_mac repo, main branch):
//   - No account/login/sign-up: grepped the full LoudReader/ tree for
//     account-creation UI and found none. There is no login screen anywhere
//     in the app.
//   - No cross-device sync: grepped for "CloudKit" (zero matches) and
//     "iCloud" across LoudReader/*.swift. The iCloud references that do
//     exist are about opening files from the Files app / iCloud Drive during
//     import, not about syncing a library, reading position, or settings
//     between devices. There is no account system to attach a synced
//     library to in the first place, so a book imported on iPhone does not
//     appear on Mac and vice versa.
//   - No account data collected: with no sign-up flow, there's no server-side
//     account record to build (no email, no password, no profile).
//   - Native Mac and iPhone apps, on-device processing, pricing and free-tier
//     facts: components/money/site.ts (single source of truth).
// This article does not claim purchase restore behavior beyond what's
// verifiable: App Store purchases are tied to the Apple ID the App Store
// itself uses for the purchase, which is a platform mechanism, not an
// in-app account.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Do I need to sign up or create an account to use LoudReader?",
    a: "No. There's no sign-up screen, no login, and no account of any kind. You install the app and start reading.",
  },
  {
    q: "Does LoudReader collect an email address or password?",
    a: "No. With no account system, there's no sign-up form asking for either. Nothing about your identity is required to use the app.",
  },
  {
    q: "If there's no account, does my library sync between my iPhone and Mac?",
    a: "No, and this is the real tradeoff. With no account to attach a synced library to, a book you import on your iPhone stays on your iPhone; it won't automatically appear on your Mac. Each device keeps its own local library.",
  },
  {
    q: "Why would an app skip accounts on purpose?",
    a: "Fewer accounts means fewer places for your data to live. LoudReader processes books entirely on-device, so there's no server-side reason to know who you are. Skipping accounts is a deliberate consequence of that design, not a missing feature.",
  },
  {
    q: "Can I still restore a Premium purchase without an in-app account?",
    a: "Yes, purchase restoration goes through the App Store's own purchase history tied to your Apple ID, which is a platform-level mechanism separate from any account inside LoudReader itself.",
  },
];
