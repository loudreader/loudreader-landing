// FACT PROVENANCE. All app-behavior claims verified against the LoudReader app
// source (LoudReader_mac repo, main branch). The 70,000+ Gutenberg book count
// is derived from the actual Project Gutenberg catalog available in-app.
// Pricing and features from components/money/site.ts (single source of truth).
// LibriVox claims are general descriptions of the well-known volunteer
// audiobook project. No invented stats, reviews, or testimonials.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "What is Project Gutenberg?",
    a: "Project Gutenberg is a digital library of over 70,000 free ebooks whose copyrights have expired in the United States. It includes almost every major classic of world literature alongside lesser-known works. The books are public domain and freely redistributable. LoudReader includes the entire catalog built in.",
  },
  {
    q: "Why would I listen to a classic through TTS when LibriVox recordings exist?",
    a: "Availability. LibriVox has high-quality human recordings of many classics, but only a fraction of Gutenberg's catalog. For well-known classics, LibriVox recordings are often excellent. For deeper catalog works, lesser-known authors, and niche titles, LibriVox simply does not have a recording. TTS fills that gap.",
  },
  {
    q: "Does LoudReader require a subscription to read Gutenberg books?",
    a: "No. The free tier gives you unlimited listening on every book, cover to cover, including all 70,000+ Gutenberg classics. No account, no word quota. You can browse, search, and start listening immediately.",
  },
  {
    q: "Can I listen to Gutenberg books offline?",
    a: "Yes. LoudReader is fully on-device and private, your library never leaves your device. Once you open a Gutenberg book, it downloads the text once and then plays offline forever. No internet needed for subsequent listening sessions.",
  },
  {
    q: "Are LibriVox recordings better than TTS for classics?",
    a: "For well-known classics, LibriVox volunteer narrators often deliver great performances. A human reading Pride and Prejudice or Moby Dick brings understanding and nuance that TTS cannot match. But recording quality varies widely between volunteers, and many books have no recording at all. TTS is consistent and covers everything.",
  },
];