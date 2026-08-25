// FACT PROVENANCE. Verified 2026-08-24 against:
//   - Charlotte Bronte published Jane Eyre in 1847, and it entered the public
//     domain long ago (Project Gutenberg edition, catalog ID 1260, title
//     "Jane Eyre: An Autobiography", listed under author "Charlotte Bronte" /
//     used with the accent on the site per data/catalog-slugs.json).
//   - The book's LoudReader catalog page (/listen/jane-eyre) exists in
//     data/catalog-slugs.json (slug: "jane-eyre") and renders a real, rendered
//     audio sample (data/audio-samples.ts, "jane-eyre" entry, 19.0 seconds),
//     the same flagship reference voice used across the catalog.
//   - LoudReader app-behavior claims (free unlimited listening, no account,
//     70,000+ built-in Gutenberg catalog, on-device, word-by-word
//     highlighting, natural offline voices, native Mac and iPhone apps) come
//     from components/money/site.ts, the single source of truth.
//   - LibriVox as a free human-narrated alternative: general, verifiable
//     description only (volunteer readers, MP3 downloads), no specific
//     numbers claimed here that aren't already sourced elsewhere on the site.
// Claims NOT made: no invented word count, no invented listening-time figure,
// no "most popular" or ranking claim, no CarPlay, no Android.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a free audiobook of Jane Eyre?",
    a: "Yes. Jane Eyre has been in the public domain for a long time, so nobody owns an exclusive audiobook right to it. Project Gutenberg hosts the full text free, and LoudReader reads that text aloud on your Mac or iPhone with natural offline voices, free with unlimited listening and no account.",
  },
  {
    q: "Is the free Jane Eyre audiobook read by a real narrator?",
    a: "No. LoudReader reads the Gutenberg text using a synthetic voice, not a performed audiobook by a human narrator. It handles Bronte's long sentences clearly and consistently, but it doesn't act the way a trained narrator would. If a human performance matters most to you, look for a LibriVox or commercial recording instead.",
  },
  {
    q: "Where can I hear a sample before I download the app?",
    a: "The LoudReader catalog page for Jane Eyre plays a short rendered sample of the opening, read by the same voice used across the app, right in your browser. No install needed to check whether the voice works for you.",
  },
  {
    q: "Do I need to download or convert a file to listen to Jane Eyre in LoudReader?",
    a: "No. Jane Eyre is one of the 70,000+ Project Gutenberg books built into LoudReader's catalog. You browse to it inside the app and press play. There's no separate ebook file to find, download, or convert first.",
  },
  {
    q: "Can I listen to Jane Eyre offline?",
    a: "Yes. LoudReader is fully on-device and private, your library never leaves your device. Once the book is open, the reading works without an internet connection, on a plane, a subway, or anywhere else your signal drops.",
  },
  {
    q: "Is a free public-domain audiobook of Jane Eyre legal?",
    a: "Yes. Jane Eyre's copyright has expired, so the text is public domain and free to read, adapt, or read aloud by anyone, including a text-to-speech app. There's no licensing question to worry about.",
  },
];
