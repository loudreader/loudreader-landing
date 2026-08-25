// FACT PROVENANCE. Every app-behavior claim verified on 2026-08-24 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Position is saved automatically, continuously, no manual bookmark:
//     LoudReader/ContinuousReaderView.swift:4506-4523 writes book.lastLocation
//     (Readium locator) on every scroll/position change, and updates
//     book.lastSentenceId in the same pass whenever the controller is
//     playing or paused.
//   - Position is saved again on close as a safety net:
//     LoudReader/PlayerService.swift:1213-1229 (stopAndClose()) captures the
//     current sentence ID and persists book.lastSentenceId before tearing
//     playback down.
//   - Resume is sentence-level, not just chapter-level: on relaunch,
//     LoudReader/PlayerService.swift:774-786 (headlessResumePlayback) prefers
//     the saved lastSentenceId, and if that's missing (an upgrade-path
//     fallback), derives the sentence from the locator's in-chapter
//     progression via character offset (PlayerService.swift:791-808), rather
//     than restarting the chapter.
//   - readingProgressFraction / readingProgressPercent read straight from the
//     saved locator, no separate progress-tracking system: LoudReader/Book.swift
//     lines 110-153.
//   - This is all local, on-device storage tied to the Book record, no
//     account or server round-trip: consistent with DIFFERENTIATORS.private
//     in components/money/site.ts, and no networking code appears anywhere
//     in the resume path above.
// Claims NOT made: cross-device sync (there is no account, so nothing syncs
// between an iPhone and a Mac); saved position for the ephemeral ListenLater
// article queue, which is a separate, simpler flow this article doesn't cover.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does LoudReader save your place automatically?",
    a: "Yes. LoudReader writes your position as you read or listen, with no button to press and nothing to remember to do. It saves again the moment you close the book, as a safety net. There's no separate 'bookmark' feature because the app is always bookmarking.",
  },
  {
    q: "Does it remember the exact sentence, or just the chapter?",
    a: "The exact sentence. LoudReader tracks position down to the specific sentence you were on, not just the chapter you were in. Reopen the book and playback picks up from that sentence, not the top of the chapter.",
  },
  {
    q: "What if I close the app without pressing pause first?",
    a: "It still saves. Position updates continuously while you're reading or listening, so even an app close mid-sentence loses at most a moment of narration, not your place in the book.",
  },
  {
    q: "Does saved position sync between my iPhone and my Mac?",
    a: "No. LoudReader has no account and no server, which is the same on-device design that keeps your library private, so there's no sync layer to carry a saved position from one device to another. Each device tracks its own progress in its own copy of the book.",
  },
  {
    q: "Do I need to manually bookmark my spot?",
    a: "No, and there's no manual bookmark feature to look for. The app already knows exactly where you stopped, every time, without you doing anything.",
  },
  {
    q: "Does this work for PDFs as well as EPUBs?",
    a: "Yes. Position tracking works the same way for both file types LoudReader imports, EPUB and PDF, since both are handled by the same reading and playback engine under the hood.",
  },
];
