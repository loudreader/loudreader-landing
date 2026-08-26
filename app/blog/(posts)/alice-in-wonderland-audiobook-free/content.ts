// FACT PROVENANCE. Verified 2026-08-24 against:
//   - Lewis Carroll published Alice's Adventures in Wonderland in 1865; it is
//     in the public domain everywhere. The Project Gutenberg edition is
//     catalog ID 11, listed as "Alice's Adventures in Wonderland" / "Lewis
//     Carroll" per data/catalog-slugs.json (slug:
//     "alices-adventures-in-wonderland").
//   - The book's LoudReader catalog page
//     (/listen/alices-adventures-in-wonderland) exists in
//     data/catalog-slugs.json and renders a real, rendered audio sample
//     (data/audio-samples.ts, "alices-adventures-in-wonderland" entry,
//     13.2 seconds), the same flagship reference voice used across the
//     catalog.
//   - LoudReader app-behavior claims (free unlimited listening, no account,
//     70,000+ built-in Gutenberg catalog, on-device, word-by-word
//     highlighting, natural offline voices, iPhone, iPad, and Apple Silicon Macs) come
//     from components/money/site.ts, the single source of truth.
//   - LibriVox as a free human-narrated alternative: general, verifiable
//     description only (volunteer readers, MP3 downloads).
// Claims NOT made: no invented word count, no invented listening-time figure,
// no "best narrator" ranking, no CarPlay, no Android.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a free audiobook of Alice's Adventures in Wonderland?",
    a: "Yes. Alice's Adventures in Wonderland is public domain, so nobody holds an exclusive audiobook right to it. Project Gutenberg hosts the full text free, and LoudReader reads it aloud on your Mac or iPhone with natural offline voices, free with unlimited listening and no account.",
  },
  {
    q: "Is the free Alice in Wonderland audiobook read by a human narrator?",
    a: "No. LoudReader reads the Gutenberg text with a synthetic voice, not a performed audiobook by a human narrator. It reads Carroll's wordplay and nonsense verse clearly and consistently, but it doesn't voice each character the way a trained narrator might. If a human performance matters most, look for a LibriVox recording instead.",
  },
  {
    q: "Where can I hear a sample before installing the app?",
    a: "The LoudReader catalog page for Alice's Adventures in Wonderland plays a short rendered sample of the opening in your browser, using the same voice heard across the app. You can check it works for you before installing anything.",
  },
  {
    q: "Do I need to find or convert a file to listen in LoudReader?",
    a: "No. Alice's Adventures in Wonderland is one of the 70,000+ Project Gutenberg books already built into LoudReader's catalog. You find it inside the app and press play, with nothing to download or convert first.",
  },
  {
    q: "Can I listen to Alice in Wonderland offline?",
    a: "Yes. LoudReader is fully on-device and private, your library never leaves your device, so playback works without a connection once the book is open, wherever the signal drops.",
  },
  {
    q: "Is a free public-domain audiobook of Alice in Wonderland legal?",
    a: "Yes. Lewis Carroll's copyright expired long ago, so the text is public domain and free to read, adapt, or read aloud by anyone, including a text-to-speech app. There's no licensing question involved.",
  },
];
