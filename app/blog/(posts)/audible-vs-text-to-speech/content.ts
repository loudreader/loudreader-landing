// FACT PROVENANCE. All app-behavior claims verified against the LoudReader app
// source (LoudReader_mac repo, main branch). Pricing and features from
// components/money/site.ts (single source of truth).
// Audible claims are generic descriptions of the well-known audiobook service.
// No invented stats, reviews, or testimonials.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can TTS ever match a human narrator?",
    a: "No, not in pure performance terms. A skilled narrator brings character voices, emotional nuance, and pacing decisions that AI voices cannot replicate. TTS voices keep getting better, but they narrate; they do not perform. For stories, human narration is the premium experience.",
  },
  {
    q: "Can I own my Audible books and listen to them anywhere?",
    a: "You can download Audible purchases for offline listening, but the files are tied to your Audible account and wrapped in DRM. They are licensed, not owned. With TTS, you keep your EPUB and PDF files forever, no account and no DRM restrictions.",
  },
  {
    q: "What if my book is not available on Audible?",
    a: "That is the biggest gap TTS fills. Most books ever published do not have an audiobook edition. Backlist titles, indie books, academic texts, manuscripts, and public domain works. TTS reads anything you have as an EPUB or PDF file.",
  },
  {
    q: "Does LoudReader work for long listening sessions?",
    a: "Yes. LoudReader is built for full books. It remembers your place, works with the screen locked, and uses natural offline voices that do not tire your ears. The free tier gives you unlimited listening on every book.",
  },
  {
    q: "Do libraries solve the cost problem?",
    a: "Libby and Hoopla give you free access to audiobooks through your library card. No subscription, no purchase. It is a fantastic option for popular titles. But the catalog is limited to what your library licenses, and popular books often have waiting lists.",
  },
  {
    q: "Which is cheaper long-term, Audible or TTS?",
    a: "For a heavy listener (20+ books per year), Audible costs more over time. LoudReader reads an unlimited number of books with natural voices, and the Premium subscription covers a year of unlimited listening for less than three Audible credits.",
  },
];