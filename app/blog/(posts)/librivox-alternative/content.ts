// FACT PROVENANCE. Every claim verified on 2026-07-14 against:
//   - LibriVox: 20,000 recordings (as of December 2024), roughly 90% in
//     English with recordings in many other languages, volunteer-read,
//     chapter-by-chapter production model where one book can have multiple
//     narrators, everything public-domain and free to download (kept as
//     MP3s, also hosted on the Internet Archive):
//     https://en.wikipedia.org/wiki/LibriVox and https://librivox.org/.
//     The "narration quality varies / narrators change mid-book" trade-off
//     follows directly from the volunteer chapter model and is described
//     as a trade-off, not a defect.
//   - Project Gutenberg Open Audiobook Collection: ~5,000 titles generated
//     in 2023 with neural text-to-speech by MIT/Microsoft researchers,
//     distributed free as audio files/streams:
//     https://techcrunch.com/2023/09/19/project-gutenberg-puts-5000-audiobooks-online-for-free-using-synthetic-speech/
//     and https://marhamilresearch4.blob.core.windows.net/gutenberg-public/Website/index.html
//   - LoudReader claims: components/money/site.ts + app/faq/faq-data.ts
//     (70,000+ Gutenberg catalog built in, free unlimited listening,
//     word-by-word highlighting, natural offline voices, 10 languages
//     today, Premium = all 23 studio narrators/speed/sleep timer/soundscapes/notes).
//   - LoudReader does NOT export audio files. Narration is generated live
//     on-device (no MP3 download). Stated as an honest concession; LibriVox
//     is recommended when downloadable files are the requirement.
// Claims you may NOT make until verified: exact LibriVox language counts
// today, any A/B voice-quality claim ("better than a human volunteer" is
// framed as depending on the volunteer/recording, never as blanket fact).

import type { ComparisonRow } from "@/components/money/ComparisonTable";
import type { Faq } from "@/components/money/FaqSection";

export const COMPARISON_CAPTION =
  "LibriVox, LoudReader, and the Project Gutenberg Open Audiobook Collection compared for listening to free public-domain classics";

export const COMPARISON_COLUMNS = [
  "LoudReader",
  "LibriVox",
  "Gutenberg Open Audiobooks",
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "Catalog",
    cells: [
      "70,000+ Project Gutenberg titles built in, plus your own DRM-free EPUBs and PDFs",
      "20,000+ recordings of public-domain works (as of late 2024)",
      "About 5,000 titles generated in 2023",
    ],
  },
  {
    label: "Narration",
    cells: [
      "Natural offline voices, one consistent voice, cover to cover",
      "Human volunteers; quality varies and narrators can change per chapter",
      "Fixed 2023-era synthetic voices",
    ],
  },
  {
    label: "Read along with the text",
    cells: [
      "Yes, word-by-word highlighting synced to narration",
      "No, audio only (text available separately)",
      "No, audio only",
    ],
  },
  {
    label: "Format",
    cells: [
      "A reading app: library, saved position, voice choice",
      "Downloadable MP3 files you keep forever and play anywhere",
      "Audio files / podcast-style streams",
    ],
  },
  {
    label: "Languages",
    cells: [
      "English voices only today",
      "Mostly English, with recordings in many other languages",
      "English",
    ],
  },
  {
    label: "Price",
    cells: [
      "Free, unlimited listening; Premium adds all 23 studio narrators, speed, sleep timer",
      "Free, public domain",
      "Free",
    ],
  },
  {
    label: "Privacy",
    cells: [
      "Fully on-device; your library never leaves your device; no account",
      "Website / file downloads; no account needed",
      "File downloads / streaming platforms",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Why do LibriVox narrators change mid-book?",
    a: "Because of how LibriVox is made. Volunteers claim individual chapters of a project, record them independently, and the community proof-listens the results. It is a wonderfully open model, but it means one novel can arrive with several different voices, microphones, and reading styles. Some listeners enjoy the variety; many find it breaks immersion.",
  },
  {
    q: "Is LoudReader really free for Project Gutenberg classics?",
    a: "Yes. The entire Project Gutenberg catalog, over 70,000 titles, is built into LoudReader, and the free tier is unlimited listening on every book, cover to cover. No credits, no word quota, no account. Premium adds all 23 studio narrators, speed control, a sleep timer, soundscapes, and notes & highlights.",
  },
  {
    q: "Are AI voices better than LibriVox volunteer narrators?",
    a: "It depends on the volunteer. The best LibriVox narrators are genuinely lovely and no synthetic voice replaces a great human reading. But quality varies recording to recording, and that inconsistency is the honest trade-off. LoudReader's natural offline voices are consistent: the same voice, pacing, and audio quality from the first page to the last, on every one of the 70,000+ titles.",
  },
  {
    q: "Can I download LibriVox-style audio files from LoudReader?",
    a: "No, and this is LibriVox's real advantage. LoudReader generates narration live on your device; there are no MP3s to export or move to another player. If you need audio files you can keep and play anywhere, LibriVox is the right tool. If you want a reading app with a consistent voice, synced highlighting, and a saved place, that is LoudReader.",
  },
  {
    q: "How many free classics can I listen to in LoudReader?",
    a: "All of Project Gutenberg, over 70,000 public-domain titles, browsable by genre and author inside the app, plus any DRM-free EPUB or PDF you import yourself. Every one of them plays free with unlimited listening.",
  },
];
