// FACT PROVENANCE. All app-behavior claims verified against the LoudReader app
// source (LoudReader_mac repo, main branch). Pricing and features from
// components/money/site.ts (single source of truth).
// Speechify and NaturalReader claims are general descriptions based on
// publicly available information about both apps as of late 2026.
// No invented stats, reviews, or testimonials.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Which has better voices, Speechify or NaturalReader?",
    a: "Both use high-quality cloud-based neural voices. Speechify's voices are generally considered slightly more expressive, with celebrity-voiced options. NaturalReader's voices are polished and clean, good for document reading. Voice quality between the two is close enough that personal preference matters more than any measurable difference.",
  },
  {
    q: "Do either offer a one-time purchase?",
    a: "Both Speechify and NaturalReader use subscription pricing with no lifetime purchase option. LoudReader offers a $199.99 one-time (lifetime) Premium purchase that includes all features forever.",
  },
  {
    q: "Which app has the best free tier?",
    a: "LoudReader's free tier provides unlimited listening with no word quota and no account. Speechify and NaturalReader offer limited free tiers with word or time caps. For reading full books without paying, LoudReader is the only option with no limits.",
  },
  {
    q: "Which app is best for reading PDFs?",
    a: "All three handle PDFs. NaturalReader and Speechify may have slightly better PDF text extraction since they process on servers with more powerful OCR-like engines. LoudReader reads PDFs natively on-device, which is reliable for text-based PDFs but does not handle scanned documents.",
  },
  {
    q: "Is Speechify or NaturalReader better for students?",
    a: "Both market to students. Speechify has more educational features like document scanning and cross-platform sync. NaturalReader has a cleaner interface and strong document format support. LoudReader focuses on book reading with EPUB and PDF, not the broader study-aid features the cloud apps offer.",
  },
];