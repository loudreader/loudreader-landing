// FACT PROVENANCE. Checked on 2026-07-14.
//
// App claims verified against the LoudReader app source (LoudReader_mac,
// main branch):
//   - Word-by-word highlighting: ContinuousReaderController.swift,
//     highlightWord(for:) fires from the speech engine's word-boundary
//     callbacks as audio actually plays (not a pre-computed timer), so the
//     highlight stays locked to the voice at ANY playback speed. That is the
//     basis for the "stays in sync at faster speeds" FAQ answer.
//   - Import formats: .fileImporter(allowedContentTypes: [.epub, .pdf]) in
//     ContentView.swift / HomeView.swift, DRM-free EPUB and PDF only.
//   - Both platforms: one iOS app (iOS 18+). On Apple Silicon Macs it is the
//     iPad build in Apple's compatibility mode, which is why the Mac floor is
//     macOS 15+. No separate macOS target exists.
//   - 70,000+ built-in Project Gutenberg classics: same claim as the home
//     page (app/page.tsx) and the App Store listing.
//   - Free tier unlimited listening / speed control (0.3x to 3.0x) is Premium:
//     components/money/site.ts PRICING.
// Kindle/Audible claims are deliberately limited to what is publicly true
// and stable: Whispersync/immersion reading requires owning BOTH the Kindle
// edition and the Audible audiobook of a title, it only exists for titles
// sold in both formats, and the narration is professionally recorded. No
// specific Amazon prices are quoted (they vary per book). Concessions to
// Whispersync's polish are intentional and stay.
//
// Research citations (verified via web search 2026-07-14, links in copy):
//   - Rogowsky, Calhoun & Tallal (2016), SAGE Open, DOI
//     10.1177/2158244016669550, dual modality showed NO comprehension
//     advantage over reading or listening alone for adults.
//   - Chang & Millett (2015), System 52, 64 beginner EFL students,
//     26 weeks: the reading-while-listening group improved reading rates and
//     comprehension substantially more than the silent-reading group.
//     https://www.sciencedirect.com/science/article/abs/pii/S0346251X15000846

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";

export const COMPARISON_COLUMNS = ["LoudReader", "Kindle + Audible (Whispersync)"];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "What you buy",
    cells: [
      "Nothing. Free app, unlimited listening on files you already have",
      "The Kindle ebook AND the Audible audiobook, per title",
    ],
  },
  {
    label: "Works with",
    cells: [
      "Any DRM-free EPUB or PDF, plus 70,000+ built-in Gutenberg classics",
      "Titles sold in both Kindle and Audible editions",
    ],
  },
  {
    label: "Narration",
    cells: [
      "Natural offline voices, generated on your device",
      "Professionally recorded human narrators",
    ],
  },
  {
    label: "Highlighting",
    cells: [
      "Word-by-word, driven by the voice as it speaks",
      "Yes, text highlights along with the audiobook",
    ],
  },
  {
    label: "Privacy",
    cells: [
      "Fully on-device, your library never leaves your device; no account",
      "Amazon account and cloud library required",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "What is immersion reading?",
    a: "Immersion reading means reading the text with your eyes while a voice reads the same words aloud, with the current word or sentence highlighted so both channels stay locked together. Amazon uses the term for its Kindle+Audible feature, but the method itself works with any synced text-and-audio setup, including a text-to-speech reader with word-by-word highlighting.",
  },
  {
    q: "Do I have to buy both the ebook and audiobook to read along?",
    a: "Only on the Kindle+Audible route, where immersion reading requires owning both editions of the title. The alternative is text-to-speech with synced highlighting. LoudReader reads any DRM-free EPUB or PDF you already have, plus 70,000+ built-in Project Gutenberg classics, for free, highlighting each word as it speaks.",
  },
  {
    q: "Does reading while listening improve comprehension?",
    a: "The honest answer is mixed. For skilled adult readers, a 2016 study (Rogowsky, Calhoun & Tallal) found no comprehension advantage for reading and listening together versus either alone. For beginner language learners, a 26-week study (Chang & Millett, 2015) found reading-while-listening improved reading rates and comprehension substantially more than silent reading. What nearly everyone notices in practice is better focus: the moving highlight makes drifting off much harder.",
  },
  {
    q: "Can LoudReader do immersion reading on Mac and iPhone?",
    a: "Yes. LoudReader runs on iPhone, iPad, and Apple Silicon Macs: import an EPUB or PDF on either device, press play, and follow the word-by-word highlight as the voice reads. It's fully on-device and private, your library never leaves your device, and the free tier includes unlimited listening with no account.",
  },
  {
    q: "Does the highlighted text stay in sync at faster speeds?",
    a: "Yes. The highlight is driven by the speech engine's word events as the audio actually plays, not by a separate timer, so it stays locked to the voice at any speed. Note that changing playback speed (0.3x to 3.0x) is a LoudReader Premium feature, and the free tier plays at normal speed.",
  },
];
