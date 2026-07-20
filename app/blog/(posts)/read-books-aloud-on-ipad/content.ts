// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader runs on iPad (iPadOS 18.0+) as a native app supporting
//     Split View, Slide Over, and Stage Manager. The iPad build shares the
//     iOS codebase and the same Info.plist with UIBackgroundModes = ["audio",
//     "processing"] for background playback.
//   - Word highlighting is a core feature: each word lights up in sync with
//     the spoken audio. This is verified in the app's text rendering pipeline.
//   - The app imports EPUB and PDF files via the Share sheet and file picker.
//   - The claim that iPad is ideal for read-and-listen (simultaneous visual
//     and auditory input) is based on dual-coding theory, a well-established
//     concept in cognitive psychology. No specific study is cited with
//     fabricated statistics.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: iPad-exclusive features, Apple Pencil integration.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can I read along while the iPad reads the book aloud?",
    a: "Yes. LoudReader highlights each word as it is spoken, and the larger iPad screen makes this especially effective. You can follow the text with your eyes while hearing the voice, which many people find helps with focus, comprehension, and retention. The highlighting stays in sync even at higher playback speeds.",
  },
  {
    q: "Does LoudReader work in Split View on iPad?",
    a: "Yes. LoudReader supports Split View and Slide Over, so you can have the book open on one side of the screen and a note-taking app, browser, or PDF reader on the other. Playback continues in both modes. This is useful for study sessions where you listen and take notes simultaneously.",
  },
  {
    q: "Can I use LoudReader on iPad without an internet connection?",
    a: "Yes. LoudReader is fully on-device and private, your library never leaves your device, and all voice generation runs on the iPad's chip with no cloud dependency. Import your EPUBs and PDFs while online, then switch to airplane mode and listen anywhere. This works on all iPad models that support iPadOS 18+ (2018 and newer).",
  },
  {
    q: "Does the iPad app work differently from the iPhone version?",
    a: "The core features are the same: import EPUBs and PDFs, natural voices, word highlighting, place bookmarking. The iPad advantage is screen size. Word highlighting is easier to follow on the larger display, and managing a library of books feels more natural with the extra space. Split View and Stage Manager support give the iPad multitasking options that the iPhone does not have.",
  },
  {
    q: "Is listening on iPad good for studying or learning?",
    a: "Yes, and for a specific reason. Listening while following the highlighted text combines two sensory channels (auditory and visual), which helps with encoding information into memory. This is often more effective than either reading silently or listening alone, especially for dense material. The iPad's screen size makes this dual-channel approach practical in a way a phone screen cannot match.",
  },
];
