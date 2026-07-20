// FACT PROVENANCE. All app-behavior claims verified against the LoudReader app
// source (LoudReader_mac repo, main branch). Pricing and features from
// components/money/site.ts (single source of truth).
// Pocket claims are based on publicly available information about the app
// as of late 2026. No invented stats, reviews, or testimonials.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Why not just use Pocket's built-in listen feature?",
    a: "Pocket's listen feature works well if you have internet and do not mind cloud processing. LoudReader gives you offline listening with no data leaving your device, plus richer controls like playback speed (0.3x to 3.0x) and the ability to listen to articles alongside your EPUB and PDF books in one library.",
  },
  {
    q: "Is the PDF export step a hassle?",
    a: "It takes a few extra seconds per article. In Pocket, you share the article to your device's print function and save as PDF. Then you share that PDF to LoudReader. It is not as fast as tapping play inside Pocket, but it gives you offline playback with a saved position and better voice quality.",
  },
  {
    q: "Does LoudReader work with other read-later apps?",
    a: "The same PDF export method works with any app that lets you save or export articles as PDF. Instapaper, Safari Reading List, and most read-later apps support this. As long as you can get a PDF file onto your device, you can listen to it in LoudReader.",
  },
  {
    q: "Does LoudReader support Pocket Premium's features?",
    a: "LoudReader is a separate app and does not integrate with Pocket's subscription features. What LoudReader adds is unrelated to Pocket Premium: natural offline voices, on-device privacy, and a single library for both books and saved articles.",
  },
];