// FACT PROVENANCE. Every app-behavior claim verified on 2026-07-14 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - LoudReader imports EPUB and PDF files. Markdown (.md) is not a
//     supported import format.
//   - The honest workflow (convert .md to PDF via a Markdown renderer,
//     then import into LoudReader) is presented.
//   - Tools mentioned (Pandoc, Marked 2, iA Writer, Obsidian) are
//     well-known and their basic feature sets are publicly verifiable.
//   - The article explicitly notes that LoudReader reads the rendered
//     text, not the raw markup. Headings, lists, and bold text are
//     rendered correctly in the final output. Code blocks are rendered
//     as monospaced text, which TTS reads as plain prose.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: .md import support, syntax-highlighted reading.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can LoudReader open Markdown files directly?",
    a: "No. LoudReader imports EPUB and PDF files. Markdown is not a supported import format. You need to render the Markdown to PDF first using any Markdown tool (Pandoc, Marked, iA Writer, Obsidian, or even a VS Code extension), then import the PDF into LoudReader.",
  },
  {
    q: "Will the TTS voice read the Markdown syntax aloud?",
    a: "No, if you render the file to PDF first. The PDF contains the formatted output (headings, paragraphs, lists), not the raw Markdown syntax. LoudReader reads the rendered text, so you hear the content, not the hash marks, asterisks, and brackets. If you import a raw .md file as plain text (by copying into a text editor and exporting from there), the syntax marks get read aloud, which is noisy and not recommended.",
  },
  {
    q: "Does this work for code blocks inside Markdown?",
    a: "The text in code blocks gets read aloud as plain prose. A code block with indentation and syntax is rendered in a monospaced font in the PDF, and the TTS voice reads each line as if it were a sentence. It sounds like someone reading code out loud, which is exactly what it is. For short snippets, this is fine. For longer code listings, it gets hard to follow by ear.",
  },
  {
    q: "What is the best tool to convert Markdown to PDF for listening?",
    a: "Pandoc is the most reliable cross-platform option (free, open source). Run 'pandoc file.md -o file.pdf' in a terminal and you get a clean PDF with rendered headings, lists, and paragraphs. On Mac, Marked 2 produces prettier output. iA Writer and Obsidian can export Markdown to PDF with a few clicks. Any tool that renders Markdown to a readable PDF works for the listening step.",
  },
  {
    q: "Can I proofread my writing this way?",
    a: "Yes, and writers who draft in Markdown (bloggers, technical writers, documentation authors) find it especially useful. Draft the post or doc in Markdown, render it to PDF, and let LoudReader read it back. Hearing your prose catches the same problems as any proofreading-by-listening session: awkward rhythm, repeated words, and sentences that make sense on the page but sound wrong out loud.",
  },
];
