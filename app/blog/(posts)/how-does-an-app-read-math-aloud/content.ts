// FACT PROVENANCE — reviewed 2026-09-28.
// Shipping source: LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
//   LoudReader/MathSpeech.swift — word tables, speech(for:), render subset
//   LoudReader/ContentFilter.swift — convertMathForSpeech replaces MathML with text
//   LoudReader/PDFImportPipeline.swift — Vision OCR is ordinary text recognition
// Canonical release audit: docs/product-facts-2026-09-28.md.
// Source inspection, not a new runtime or network test.
// No promise of perfect extraction, all-site compatibility, or absence of telemetry.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Can LoudReader speak fractions and exponents?",
    "a": "It has rules for supported MathML fractions and exponents, including squared and cubed wording. The file must preserve that structure; an image or ordinary PDF text is not equivalent."
  },
  {
    "q": "Does it support every mathematical expression?",
    "a": "No. It implements a subset of rules. Unrecognised structures may fall back to text and can be ambiguous or incomplete."
  },
  {
    "q": "Which languages have equation wording?",
    "a": "The current renderer has English and Spanish word tables. Other available narration languages do not imply equivalent math-speech rules."
  },
  {
    "q": "Does scanned-PDF OCR recognise equations?",
    "a": "LoudReader includes text OCR, but it does not promise reliable reconstruction of structured equations from images. Check the original notation."
  },
  {
    "q": "Can I import a LaTeX source file?",
    "a": "Not through this workflow. The MathML handling is part of processing supported reading content, not a LaTeX file importer."
  }
];
