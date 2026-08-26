// FACT PROVENANCE. Verified 2026-08-24 against:
//   - Fyodor Dostoyevsky published Crime and Punishment in 1866; it is in the
//     public domain everywhere. The English translation on Project Gutenberg
//     (the Constance Garnett translation, also long public domain) is catalog
//     ID 2554, listed as "Crime and Punishment" / "Fyodor Dostoyevsky" per
//     data/catalog-slugs.json (slug: "crime-and-punishment").
//   - The book's LoudReader catalog page (/listen/crime-and-punishment)
//     exists in data/catalog-slugs.json and renders a real, rendered audio
//     sample (data/audio-samples.ts, "crime-and-punishment" entry,
//     28.1 seconds), the same flagship reference voice used across the
//     catalog.
//   - LoudReader app-behavior claims (free unlimited listening, no account,
//     70,000+ built-in Gutenberg catalog, on-device, word-by-word
//     highlighting, natural offline voices, iPhone, iPad, and Apple Silicon Macs) come
//     from components/money/site.ts, the single source of truth.
//   - LibriVox as a free human-narrated alternative: general, verifiable
//     description only (volunteer readers, MP3 downloads).
// Claims NOT made: no invented word count, no invented listening-time figure,
// no translation-quality ranking, no CarPlay, no Android.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is there a free audiobook of Crime and Punishment?",
    a: "Yes. Crime and Punishment is public domain, so nobody holds an exclusive audiobook right to it. Project Gutenberg hosts the full English text free, and LoudReader reads it aloud on your Mac or iPhone with natural offline voices, free with unlimited listening and no account.",
  },
  {
    q: "Which translation does the free audiobook use?",
    a: "LoudReader's built-in copy comes from the Project Gutenberg edition of Crime and Punishment, which is also public domain. It's the same text you'd get reading the book on Gutenberg directly.",
  },
  {
    q: "Is the free Crime and Punishment audiobook read by a human?",
    a: "No. LoudReader reads the Gutenberg text with a synthetic voice, not a performed audiobook by a human narrator. It's clear and consistent through Dostoyevsky's long interior monologues, but it doesn't act the dialogue the way a trained narrator would. If a human performance matters most, look for a LibriVox recording instead.",
  },
  {
    q: "Where can I hear a sample before installing the app?",
    a: "The LoudReader catalog page for Crime and Punishment plays a short rendered sample of the opening in your browser, using the same voice heard throughout the app. You can check whether it works for you before installing anything.",
  },
  {
    q: "Do I need to find or convert a file to listen in LoudReader?",
    a: "No. Crime and Punishment is one of the 70,000+ Project Gutenberg books already built into LoudReader's catalog. You find it inside the app and press play, with nothing to download or convert first.",
  },
  {
    q: "Can I listen to Crime and Punishment offline, and is it legal?",
    a: "Yes to both. LoudReader is fully on-device and private, your library never leaves your device, so playback works without a connection once the book is open. And since the book's copyright has expired, reading or listening to it in any form, including text-to-speech, is legal everywhere.",
  },
];
