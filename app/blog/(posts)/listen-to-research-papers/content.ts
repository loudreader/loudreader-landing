// FACT PROVENANCE. Every claim verified on 2026-07-14 against:
//   - LoudReader PDF behavior: LoudReader/PDFImportPipeline.swift (app repo,
//     main branch). Verified specifics used in this article:
//       * Extraction reads the PDF's embedded text layer via PDFKit
//         (page.attributedString). No OCR. A scanned PDF with no text layer
//         fails with a "does not contain a selectable text layer" error.
//       * Repeating headers/footers and page furniture are stripped
//         statistically (headerFooterSampleLineCount /
//         headerFooterOccurrenceThreshold in the pipeline Configuration).
//       * The pipeline has NO column-aware layout analysis. Text comes out
//         in the order the PDF encodes it, so two-column reading order
//         depends on how the specific PDF was produced. The article says
//         exactly this and promises nothing more.
//       * There is NO academic-specific parsing. Inline citations are read
//         aloud as text. Equations are either skipped (when they are images,
//         since figures are extracted separately, see extractFigures) or read
//         as garbled symbols (when they are glyph text). Stated honestly.
//   - Offline/on-device playback, bundled voices: the model seeder ships
//     bundled models with DownloadUtils.enforceOffline = true, and the
//     synthesis backends load from Bundle.main. Background audio plus lock
//     screen: Info.plist UIBackgroundModes and PlayerService.swift.
//   - Reader follows the sentence being read on screen:
//     ContinuousReaderController.swift (reader follows the read sentence,
//     commit c34f092). Per-book saved position is the library's standard
//     behavior, phrased consistently with /listen-to-pdf-iphone.
//   - Listening.com concession verified on listening.com's own pages
//     (https://www.listening.com/, /research-paper-listener,
//     /academic-paper-reader, 2026-07-14): purpose-built for academic papers,
//     understands paper structure, skips citations. Described generically as
//     subscription-based, no price quoted (goes stale).
//   - Pricing/free-tier facts: components/money/site.ts (PRICING).
//   - "Does listening save time" answer is reasoning, not research. It cites
//     no studies because we verified none for this claim.
// Claims you may NOT make until verified: OCR of scanned papers, citation
// skipping, equation narration, any speed-listening comprehension statistic.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can text to speech handle two-column PDF papers?",
    a: "Sometimes cleanly, sometimes not, and honesty means saying so. LoudReader reads the PDF's embedded text layer, so in a two-column paper the reading order depends on how the publisher's tools encoded the text. Most modern journal PDFs encode column by column and read fine. Some older or oddly produced ones interleave lines across the columns. Import the paper and skim-listen to the first page. You'll know within a minute which kind you've got.",
  },
  {
    q: "What happens to citations and equations when read aloud?",
    a: "LoudReader doesn't do academic-specific parsing, so inline citations like '(Smith et al., 2020)' get read aloud as text. It's background noise you learn to tune out, but it's still noise. Equations are either images in the PDF (LoudReader pulls those out as figures instead of reading them) or symbol text, which sounds garbled. Papers that are mostly prose, like introductions, reviews, and discussion sections, listen far better than dense mathematical ones.",
  },
  {
    q: "Is it safe to listen to an unpublished draft or a paper I'm reviewing?",
    a: "With a cloud TTS service, you're uploading a confidential document to a third-party server. For an embargoed manuscript or a paper under review, that can break the confidentiality you agreed to. LoudReader is fully on-device and private, your library never leaves your device. The voice is generated locally, and the app has no server, no account, and no upload path. The document stays exactly as private as it was on your disk.",
  },
  {
    q: "Can I listen to papers on my commute offline?",
    a: "Yes. LoudReader's voices are generated on the device, so playback works in the subway, on flights in airplane mode, and anywhere without signal. Papers you've imported keep their position, playback continues with the screen locked, and play/pause and 15-second skips work from the lock screen. Import the paper before you leave, and after that you never need a connection.",
  },
  {
    q: "Does listening to papers actually save time?",
    a: "Be skeptical of anyone quoting a precise number. We won't. What listening genuinely does is turn dead time into a first pass. A commute or a walk becomes the read-through that tells you whether a paper deserves desk time. It works best for prose-heavy sections and survey papers, and worst for dense methods and math. Most researchers who listen use it for triage and first reads, not as a replacement for careful reading.",
  },
];
