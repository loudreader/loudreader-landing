// FACT PROVENANCE. Every app-behavior claim verified on 2026-08-24 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader/MathSpeech.swift implements a documented "subset of
//     ClearSpeak" (the code comment names ClearSpeak and MathSpeak, the
//     rule sets behind MathJax's Speech Rule Engine and VoiceOver, and
//     specifically the "read it the way a person would say it" variant, not
//     the verbose navigational one). This is real, checkable rule logic, not
//     a marketing claim.
//   - Coverage verified by reading the render(node:words:) switch: mfrac
//     (fractions, spoken plainly for simple terms, wrapped as "the fraction
//     with numerator/denominator" for compound ones), msqrt (square root),
//     mroot (nth root), msup (exponents, with "squared"/"cubed" special-cased
//     for powers of 2 and 3), msub (subscripts), msubsup, munderover (sum/
//     integral bounds, "from X to Y"), mfenced (parentheses), mo (operators:
//     +, -, times, divided by, equals, inequalities, sum, product, integral,
//     etc, per the `operators` dictionary), mi/mn/mtext (variables, numbers,
//     Greek letters and set symbols per `greekAndSymbols`).
//   - Publisher-supplied alttext or a TeX annotation is preferred over the
//     rule-based rendering when present and not itself raw TeX
//     (MathSpeech.speech(for:languageId:)), so an author's own phrasing wins
//     when it exists.
//   - Two languages have full word tables in the source: English and
//     Spanish (`private static let english = Words(...)`, `private static
//     let spanish = Words(...)`). No other language's Words struct exists
//     in MathSpeech.swift, so math speech beyond English and Spanish is NOT
//     claimed.
//   - Fallback: if an element cannot be rendered, MathSpeech falls back to
//     the element's own text content rather than producing empty or garbled
//     speech (see the doc comment "Anything this renderer cannot describe
//     falls back to the element's own text").
//   - Trigger and display behavior: ContentFilter.swift's
//     convertMathForSpeech() finds every `<math>` element via
//     document.select("math"), converts each to its spoken sentence, and
//     replaces the element with a plain-text span carrying that sentence.
//     The code comment explains why: the reader does not render the source
//     HTML, it rebuilds the page from sentence spans, so keeping raw MathML
//     would show broken tokens like "a 2 + b 2" rather than a real equation.
//     This means the on-screen text during playback is the same readable
//     sentence that gets spoken (e.g. "a squared plus b squared equals c
//     squared"), not typeset math notation.
//   - Input scope: this operates on `<math>` (MathML) elements already
//     present in the document, which is how EPUB books with STEM content
//     typically mark up equations. No LaTeX-parsing or image-to-math (OCR)
//     step was found in the app source, so a formula that exists only as a
//     picture in a scanned PDF is not covered; this is stated as an honest
//     limit, not implied to work.
//   - Pricing and differentiator facts from components/money/site.ts.
// Claims you may NOT make: math speech in languages other than English and
// Spanish, OCR of image-based equations, LaTeX source parsing.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "How does text to speech read math equations aloud?",
    a: "By parsing the equation's structure and describing it the way a person would say it, not by reading raw symbols. LoudReader reads MathML equations using rules based on ClearSpeak, turning 'x squared plus y squared' rather than spelling out characters. A fraction like one-half becomes 'one over two' when it's simple, or 'the fraction with numerator... and denominator...' when it's a longer expression.",
  },
  {
    q: "Can text to speech read fractions and square roots?",
    a: "Yes, both are explicitly handled. LoudReader speaks a simple fraction as 'X over Y', a more complex one as 'the fraction with numerator X and denominator Y', a square root as 'the square root of X', and an nth root with the correct ordinal, like 'the cube root of X'.",
  },
  {
    q: "Does text to speech understand exponents like x squared?",
    a: "Yes. LoudReader special-cases the two most common powers: an exponent of 2 is spoken as 'squared' and an exponent of 3 as 'cubed'. Any other exponent is read as 'X to the power of Y', and subscripts are read as 'X sub Y'.",
  },
  {
    q: "What happens if text to speech can't parse an equation?",
    a: "It falls back to the equation's own text instead of failing silently. If a piece of an equation doesn't match a known rule, LoudReader falls back to reading the element's raw text content rather than skipping it or producing nothing, which is still more useful than an equation that vanishes.",
  },
  {
    q: "Does text to speech read math in languages other than English?",
    a: "In LoudReader, math speech is fully built out for English and Spanish, each with its own word set (Spanish reads a fraction as 'la fracción con numerador... y denominador...', for example). Other languages LoudReader supports for regular text do not currently have equivalent math-speech rules.",
  },
  {
    q: "Can text to speech read equations in a scanned math textbook PDF?",
    a: "No, not if the equations exist only as images. LoudReader's math handling works on real MathML markup, the kind EPUB books with STEM content carry. A scanned page, where the equation is a picture rather than structured text, has nothing for any text-to-speech reader to parse until it goes through OCR, which LoudReader does not perform.",
  },
];
