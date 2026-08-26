// FACT PROVENANCE. Every claim verified on 2026-07-14.
//   - LoudReader facts from app source and components/money/site.ts.
//   - Competitor facts are publicly verifiable from their websites and
//     Mac App Store listings as of July 2026. Descriptions are general
//     enough to stay accurate.
//   - macOS Spoken Content is described accurately from macOS 15.
//   - The claim that LoudReader runs natively on Apple Silicon (not
//     Electron, not Catalyst) is verified from the app's Xcode project.
// Claims you may NOT make: specific competitor version numbers, user
// counts, or unlisted features.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "What is the best free read-aloud app for Mac?",
    a: "macOS Spoken Content (Option+Esc) is built in, free, and works in every app. For a dedicated app with bookmarking and natural voices, LoudReader has a genuinely unlimited free tier: listen to every book cover to cover with a standard voice, no word quota. Most other Mac read-aloud apps have time-limited trials or heavily restricted free tiers.",
  },
  {
    q: "Which Mac read-aloud app is most private?",
    a: "LoudReader and macOS Spoken Content. Both run entirely on your device with no cloud processing. LoudReader is fully on-device and private, your library never leaves your device, and requires no account. Cloud-based apps like Speechify and NaturalReader process your text on their servers, which is a privacy tradeoff you should be aware of before uploading sensitive documents.",
  },
  {
    q: "Which Mac app has the best voices?",
    a: "Speechify offers the widest voice selection, including celebrity voices, but the best voices stream from the cloud. LoudReader includes eight neural voices that run natively on Apple Silicon with no internet needed. Voice quality is subjective. Download a few apps and listen to the same passage. The voice you prefer is the right one for you.",
  },
  {
    q: "Can I use an iPhone read-aloud app on my Mac?",
    a: "Yes, on Apple Silicon. Many iPhone and iPad apps install on an Apple Silicon Mac from the Mac App Store's 'iPhone & iPad Apps' tab, and LoudReader is one of them. Being straight about the trade-off: this is Apple's compatibility mode, so you get a fixed-size window rather than a resizable Mac one, and no drag-and-drop or menu bar. What you do get is the full engine, with voices generated on the Mac's own Neural Engine and no network access. For listening to a book while you work, that is usually the part that matters. If you want a resizable window and Mac-native window management, no compatibility-mode app will give you that.",
  },
  {
    q: "Do any Mac read-aloud apps offer a one-time purchase?",
    a: "LoudReader offers a lifetime purchase ($199.99) that includes all Premium features permanently with no subscription. Most competitors are subscription-only. If you prefer paying once over a recurring charge, this is one of the few options on Mac.",
  },
];
