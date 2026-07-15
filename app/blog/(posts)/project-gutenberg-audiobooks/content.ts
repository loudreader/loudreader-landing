// FACT PROVENANCE. Every claim verified on 2026-07-14 against:
//   - Project Gutenberg Open Audiobook Collection: ~5,000 titles generated
//     with neural text-to-speech in 2023 by researchers from MIT and
//     Microsoft, released free as audio files / podcast-style streams:
//     https://techcrunch.com/2023/09/19/project-gutenberg-puts-5000-audiobooks-online-for-free-using-synthetic-speech/
//     (TechCrunch, Sept 19, 2023, cited inline in the article) and the
//     collection's own site:
//     https://marhamilresearch4.blob.core.windows.net/gutenberg-public/Website/index.html
//   - LibriVox: 20,000 recordings as of December 2024, volunteer-read,
//     free, hosted on librivox.org and the Internet Archive:
//     https://en.wikipedia.org/wiki/LibriVox and https://librivox.org/.
//   - Project Gutenberg catalog size (70,000+ free ebooks): the count
//     Gutenberg itself publishes (https://www.gutenberg.org/), same source
//     as the rest of this site (see /turn-any-book-into-an-audiobook).
//   - LoudReader claims: components/money/site.ts + app/faq/faq-data.ts
//     (built-in Gutenberg catalog browsable by genre/author, free unlimited
//     listening, word-by-word highlighting, natural offline voices, no
//     account) and the app FAQ's offline note: network is used only to
//     browse/download Gutenberg books; reading and listening are fully
//     offline afterwards.
//   - LoudReader does NOT export audio files (narration generated live,
//     on-device), stated honestly where the MP3 collections are discussed.
// Claims you may NOT make until verified: exact Open Audiobook Collection
// title count today (article says "about 5,000", the launch number),
// voice-customization features of that collection, CarPlay.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Are Project Gutenberg audiobooks really free?",
    a: "Yes, every one of them. Gutenberg books are public domain, so all three listening routes cost nothing: the Open Audiobook Collection's ~5,000 synthetic recordings, LibriVox's 20,000+ volunteer-read recordings, and LoudReader, which reads any of the 70,000+ titles aloud with natural offline voices and unlimited free listening.",
  },
  {
    q: "What is the Project Gutenberg Open Audiobook Collection?",
    a: "A set of about 5,000 Project Gutenberg titles converted to audiobooks in 2023 by researchers from MIT and Microsoft using neural text-to-speech, released free as audio files and podcast-style streams. It's a remarkable project with two limits. It covers a fraction of the catalog, and the voices are fixed 2023-era recordings that are audio only, with no synced text.",
  },
  {
    q: "How is LoudReader different from downloading the MP3 audiobooks?",
    a: "The MP3 collections are recordings of some books. LoudReader is a reader for all of them. Every one of the 70,000+ Gutenberg titles is browsable in the app and read aloud on demand with natural offline voices, plus word-by-word highlighting, a saved place in every book, and your choice of voice. The honest flip side: there are no audio files to export, so if you need MP3s to keep, use the Open Audiobook Collection or LibriVox.",
  },
  {
    q: "Can I read along while listening to a Gutenberg classic?",
    a: "In LoudReader, yes, and that's the point. The full text is on screen and each word highlights in sync with the narration, so your eyes and ears stay locked together. The MP3-based options (the Open Audiobook Collection, LibriVox) are audio-only files. The text is available separately, but nothing keeps the two in sync.",
  },
  {
    q: "Do I need an internet connection after downloading a book?",
    a: "No. LoudReader only uses the network to browse and download books from the Project Gutenberg catalog. Once a book is on your device, reading, listening, and highlighting are fully offline. The voices run on-device, so airplane mode works fine. It's fully on-device and private, your library never leaves your device.",
  },
];
