// FACT PROVENANCE. Every claim verified on 2026-07-14 against:
//   - LoudReader pricing, free tier, Premium features, and the 70,000+
//     Project Gutenberg catalog: components/money/site.ts and
//     app/faq/faq-data.ts (single sources of truth, synced with the
//     App Store listing). Free tier = unlimited listening, no word quota,
//     no account; every voice free for the first 8 hours of listening,
//     then free users keep the default voice; Premium adds all 8 AI
//     voices, speed 0.3x to 3.0x, sleep timer, soundscapes, notes.
//   - DRM limitation: LoudReader imports standard DRM-free EPUB/PDF only.
//     There is no DRM-decryption capability in the app source
//     (BookImportService.swift).
//     Audible (.aax) and Kindle purchases are DRM-locked and cannot be
//     imported. Stated as an honest limitation.
//   - LibriVox: 20,000 recordings as of December 2024, volunteer-read,
//     public domain, free (https://en.wikipedia.org/wiki/LibriVox and
//     https://librivox.org/).
//   - Audible, Libby, and Hoopla are described generically (subscription/
//     credits; library card + waitlists) with no pricing or feature
//     specifics that could go stale.
//   - "Why are audiobooks so expensive" is answered qualitatively
//     (narrator + studio + editing time) with NO invented statistics.
// Claims you may NOT make until verified: any specific Audible price,
// any audiobook-production cost figure, CarPlay support.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a genuinely free alternative to Audible?",
    a: "Yes, three honest ones. Libby and Hoopla let you borrow professionally narrated audiobooks free with a library card. LibriVox offers 20,000+ volunteer-read recordings of public-domain classics. And LoudReader turns books you already own into audiobooks: it reads any DRM-free EPUB or PDF aloud with natural offline voices, free, with unlimited listening and no credits.",
  },
  {
    q: "Can I listen to Kindle or Audible books in LoudReader?",
    a: "No. Kindle and Audible purchases are locked with DRM, and LoudReader can't open DRM-protected files. No legitimate third-party reader can. LoudReader reads standard DRM-free EPUBs and PDFs: Project Gutenberg titles, DRM-free store purchases, and your own files.",
  },
  {
    q: "Why are audiobooks so expensive?",
    a: "Because each one is a produced recording: a narrator performs the whole book in a studio, and every finished hour of audio takes additional hours of recording, editing, and proofing behind it. That cost is real, which is why the free route works differently. Instead of buying a recording, a text-to-speech reader like LoudReader generates the narration on your device from the text you already own.",
  },
  {
    q: "How many free classics does LoudReader include?",
    a: "The entire Project Gutenberg catalog, over 70,000 public-domain titles, is built into LoudReader. Browse by genre, search by author, download any of them, and listen free with natural offline voices.",
  },
  {
    q: "Is there a monthly listening limit on the free plan?",
    a: "No. LoudReader's free tier is unlimited listening on every book, cover to cover, with no word quota, no monthly cap, no credits, and no account. Premium adds all 23 studio narrators, playback speed control, a sleep timer, ambient soundscapes, and notes & highlights.",
  },
];
