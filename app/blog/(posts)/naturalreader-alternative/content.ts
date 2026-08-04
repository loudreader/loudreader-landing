// FACT PROVENANCE. All app-behavior claims verified against the LoudReader app
// source (LoudReader_mac repo, main branch). Pricing and features from
// components/money/site.ts (single source of truth).
// NaturalReader claims are based on their publicly listed App Store features
// as of late 2026. No invented stats, reviews, or testimonials.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does LoudReader work without an internet connection?",
    a: "Yes. All voices run entirely on your device. LoudReader is fully on-device and private, your library never leaves your device, so you can listen on a plane, in a tunnel, or anywhere with no signal. NaturalReader needs a connection for most of its natural-sounding voices since they run in the cloud.",
  },
  {
    q: "Is there a free version of LoudReader?",
    a: "Yes. LoudReader's free tier gives you unlimited listening on every book, cover to cover, with no word quota and no time limit. You get one natural offline voice for free. Premium adds all 23 studio narrators, playback speed (0.3x to 3.0x), sleep timer, ambient soundscapes, and notes and highlights for $7.99/month, $49.99/year, or $199.99 one-time (lifetime).",
  },
  {
    q: "Can I buy LoudReader once and own it forever?",
    a: "Yes. LoudReader offers a $199.99 one-time (lifetime) purchase that includes all Premium features forever, no subscription needed. NaturalReader is subscription-only for its premium features.",
  },
  {
    q: "What file formats does LoudReader support?",
    a: "LoudReader imports EPUB and PDF files. Everything stays on your device with no upload step. NaturalReader supports more formats including Word documents and web pages, which LoudReader does not read directly. For web articles, you can save them as PDF and import them into LoudReader.",
  },
  {
    q: "Does LoudReader have a web version or Windows app?",
    a: "No. LoudReader is native Mac and iPhone apps only, the same as NaturalReader's native apps. If you need a web-based reader or Windows support, NaturalReader is the better choice.",
  },
];