// FACT PROVENANCE. Verified 2026-08-24 against:
//   - Emily Bronte published Wuthering Heights in 1847; it is in the public
//     domain everywhere. The Project Gutenberg edition is catalog ID 768,
//     listed as "Wuthering Heights" / "Emily Bronte" per
//     data/catalog-slugs.json (slug: "wuthering-heights").
//   - The book's LoudReader catalog page (/listen/wuthering-heights) exists
//     in data/catalog-slugs.json and renders a real, rendered audio sample
//     (data/audio-samples.ts, "wuthering-heights" entry, 23.3 seconds), the
//     same flagship reference voice used across the catalog.
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
    q: "Is there a free audiobook of Wuthering Heights?",
    a: "Yes. Wuthering Heights is public domain, so nobody holds an exclusive audiobook right to it. Project Gutenberg hosts the full text free, and LoudReader reads it aloud on your Mac or iPhone with natural offline voices, free with unlimited listening and no account.",
  },
  {
    q: "Is the free Wuthering Heights audiobook read by a human narrator?",
    a: "No. LoudReader reads the Gutenberg text with a synthetic voice, not a performed audiobook by a human narrator. It's clear and consistent through the novel's shifting narrators (Lockwood, then Nelly Dean), but it doesn't act the dialogue the way a trained narrator would. If a human performance matters most, look for a LibriVox recording instead.",
  },
  {
    q: "Where can I hear a sample before installing the app?",
    a: "The LoudReader catalog page for Wuthering Heights plays a short rendered sample of the opening in your browser, using the same voice heard across the app. You can check it works for you before installing anything.",
  },
  {
    q: "Do I need to find or convert a file to listen in LoudReader?",
    a: "No. Wuthering Heights is one of the 70,000+ Project Gutenberg books already built into LoudReader's catalog. You find it inside the app and press play, with nothing to download or convert first.",
  },
  {
    q: "Can I listen to Wuthering Heights offline?",
    a: "Yes. LoudReader is fully on-device and private, your library never leaves your device, so playback works without a connection once the book is open, on a train, a plane, or anywhere else the signal drops.",
  },
  {
    q: "Is a free public-domain audiobook of Wuthering Heights legal?",
    a: "Yes. Emily Bronte's copyright expired long ago, so the text is public domain and free to read, adapt, or read aloud by anyone, including a text-to-speech app. There's no licensing question involved.",
  },
];
