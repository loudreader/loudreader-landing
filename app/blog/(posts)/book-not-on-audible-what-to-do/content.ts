// FACT PROVENANCE. Every app-behavior claim verified on 2026-08-24 against:
//   - 70,000+ Project Gutenberg books built into the app, free tier plays
//     them at unlimited length: components/money/site.ts (PRICING.free) and
//     the batch2-brief app-behavior list, cross-checked with app/listen
//     (the 100-book catalog page pulling from that same Gutenberg set).
//   - EPUB/PDF import, no conversion step: components/money/site.ts app
//     behavior list, same as every prior article in this repo.
//   - "Fully on-device and private" and "natural offline voices": verbatim
//     from DIFFERENTIATORS in components/money/site.ts.
//   - Native Mac and iPhone apps, no CarPlay/Android/Windows: DIFFERENTIATORS
//     and the batch2-brief DO-NOT-CLAIM list.
// Statements about Audible's catalog size and policies are deliberately
// generic (it is a large commercial catalog with real gaps) with no invented
// numbers, prices, or specific title counts, since Audible does not publish
// an exact catalog size and any number would go stale or be a guess.
// No fabricated statistics, studies, or testimonials.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Why isn't every book on Audible?",
    a: "Audible licenses recordings from publishers and rights holders, and a title only shows up once someone pays to record and license it. Most backlist books, self-published titles, academic texts, niche non-fiction, and older public-domain works never get that treatment because the economics don't justify a studio recording. The book existing is not the same as the book being worth recording commercially.",
  },
  {
    q: "Can I request that Audible add a book?",
    a: "Audible has no public system for readers to request specific titles, and adding a book depends on a publisher deciding to produce and license an audio edition, not on reader demand alone. If a book matters enough to a large audience, a publisher may eventually record it, but there's no guaranteed timeline and no reader-facing request form.",
  },
  {
    q: "Is it legal to make my own audiobook from a book I own?",
    a: "For a book you own as a DRM-free file, a text-to-speech reader generating a spoken narration for your own private listening is a normal use of tools like LoudReader, VoiceOver, or a Kindle's accessibility features. This isn't legal advice and copyright details vary by country and use case, but generating a private narration from a file you legitimately own is different from redistributing someone else's recording.",
  },
  {
    q: "Does text to speech work for books that are still under copyright?",
    a: "Yes, as long as you have a legitimate DRM-free copy of the file, such as a self-published EPUB, a review copy, a manuscript, or an ebook from a store that doesn't lock its files. LoudReader reads any DRM-free EPUB or PDF aloud. It can't open a file that's still locked to another app's reader, like a DRM-protected Kindle book.",
  },
  {
    q: "What if the book is a PDF instead of an EPUB?",
    a: "LoudReader reads PDFs aloud the same way it reads EPUBs: import the file and press play. The one honest limit is scanned, image-only PDFs, since there's no text underneath a photo of a page for the app to read. A PDF with selectable text, which is most exported or downloaded ones, works fine.",
  },
  {
    q: "Is a synthetic narration as good as a professional audiobook?",
    a: "Not for every book. A performed audiobook with a skilled narrator doing character voices is its own art form, and for a novel you love, that might be worth waiting or paying for. But for the huge number of books that will never get that treatment, natural offline voices reading the actual text is the difference between listening to the book now and not listening to it at all.",
  },
];
