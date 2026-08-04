// FACT PROVENANCE. All app-behavior claims verified against the LoudReader app
// source (LoudReader_mac repo, main branch). Pricing and features from
// components/money/site.ts (single source of truth).
// @Voice Aloud Reader claims are based on publicly available information
// about the app on the Google Play Store as of late 2026.
// No invented stats, reviews, or testimonials.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does LoudReader work on Android?",
    a: "No. LoudReader is native Mac and iPhone apps only. There is no Android version and no plans to build one. If you are on Android, @Voice Aloud Reader is a solid choice for offline EPUB and PDF reading with good customization options.",
  },
  {
    q: "How is LoudReader different from @Voice Aloud Reader?",
    a: "Both apps read EPUBs and PDFs offline with no account required. The biggest difference is platform: @Voice is Android-only, LoudReader is Apple-only. LoudReader also offers more modern on-device neural voices and a built-in catalog of 70,000+ free classic books from Project Gutenberg.",
  },
  {
    q: "Can I transfer my @Voice files to LoudReader?",
    a: "Yes, if your files are standard DRM-free EPUBs or PDFs. Just move them to your iPhone or Mac through AirDrop, iCloud, or any file transfer method, then import them into LoudReader.",
  },
  {
    q: "Is there a LoudReader free tier like @Voice's free version?",
    a: "Yes. LoudReader's free tier provides unlimited listening on every book, cover to cover, with no word quota, no time limit, and no account. You get one natural offline voice free. Premium adds all 23 studio narrators, playback speed (0.3x to 3.0x), sleep timer, ambient soundscapes, and notes and highlights.",
  },
  {
    q: "Does LoudReader read web pages like @Voice does?",
    a: "LoudReader is built for books and focuses on EPUB and PDF. It does not read web pages directly. You can save a web article as PDF and import it, which gives you offline listening with your place saved. It is an extra step compared to @Voice's direct web reading.",
  },
];