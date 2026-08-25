// FACT PROVENANCE. Every app-behavior claim verified on 2026-08-24 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Footnote reference markers ([1], (1), {1}, ^1, daggers) are stripped
//     from the spoken sentence by footnoteMarkerRegexes and the
//     speechNormalized pipeline in LoudReader/ContentFilter.swift (see
//     stripFootnoteMarkers / removeBracketReferences / trailingReference
//     regexes), so the narrator does not read the marker mid-sentence.
//   - EPUB footnote lists are detected with
//     document.select("[epub:type~=footnotes] ol, .footnotes ol") in
//     extractAndRemoveFootnotes() (ContentFilter.swift), their text is
//     collected into collectedFootnotes, and the original list is removed
//     from the reading flow at that point.
//   - Collected footnotes are carried per chapter (ContinuousReaderView.swift,
//     CachedChapter/PrecacheService.swift) and appended ONCE, at the end of
//     the last chapter in the book, as a generated "Notes" section
//     (generateFootnotesSection() / appendFootnotesIfNeeded(), called only
//     when index == readingOrder.count - 1). Each note is numbered in the
//     order it was collected. This means footnotes are read, just moved to
//     the end instead of interrupting the sentence they were attached to.
//   - Tables: removeLikelyNonContentTables() (ContentFilter.swift) removes
//     table markup by default. isProseTable() and unwrapProseTable() detect
//     tables that are actually running prose laid out in cells (the example
//     in a code comment is a Standard Ebooks edition of the Tractatus using
//     a two-column table for proposition numbers) and unwrap those into
//     paragraphs instead of deleting them. Ordinary data tables (many short
//     cells) are removed rather than read cell by cell.
//   - Headers/footers: isWebArticle flag on ContentFilter changes this
//     specifically. For web articles, <header>/<footer>/<nav>/sidebar/ad
//     selectors are stripped as page furniture. For books, the same tags
//     are left alone, because Standard Ebooks and Project Gutenberg put the
//     chapter title and, in poetry collections, the poem's date line inside
//     <header>, and stripping it deleted real book content (documented in a
//     code comment in ContentFilter.swift referencing Drum-Taps).
//   - Cross-references like "(see Figure 3.2)" and "on page 12" are rewritten
//     for speech only (visualReferenceRegex, onPageRegex in
//     ContentFilter.swift) to "as mentioned earlier"; the on-screen text is
//     untouched. Table of contents lists are detected and pruned separately
//     (removeLikelyTableOfContentsLists).
//   - Project Gutenberg license boilerplate and header/footer wrappers
//     (title page repeats, "This ebook is for the use of anyone...", credits)
//     are cut before the reading starts (removeProjectGutenbergBoilerplate).
//   - Scanned, image-only PDFs: no OCR pipeline was found in the app source
//     (PDFImportPipeline.swift, DocumentScanImport.swift extract existing
//     text layers; there is no image-to-text step). This is stated as a
//     concession, not a claim.
//   - Pricing and differentiator facts from components/money/site.ts.
// Claims you may NOT make: OCR of scanned/image-only PDFs, footnotes spoken
// inline at their original position, table cells read aloud individually.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does text to speech read footnotes out loud?",
    a: "A well-built reader collects them and reads them, just not at the exact spot the little number sits. LoudReader strips the footnote marker from the sentence so the narration does not say the number mid-sentence, gathers the note text as it goes, and reads all of a book's footnotes as a numbered Notes section once the narration reaches the end of the book.",
  },
  {
    q: "What happens to tables when text to speech reads a document?",
    a: "Most readers, LoudReader included, remove ordinary data tables rather than reading the cells aloud one by one, because a grid read cell by cell is close to meaningless as audio. The one exception is a table that is actually prose laid out in columns, which LoudReader detects and unwraps into normal paragraphs instead of deleting.",
  },
  {
    q: "Does text to speech read page headers and running titles?",
    a: "It depends on the document type, and a reader that treats a book and a web page the same way will get one of them wrong. LoudReader keeps header content in books, because that is often the chapter title or a poem's date line, and strips header content in web articles, because there it is usually site navigation.",
  },
  {
    q: "Will text to speech read 'see Figure 3.2' or 'as shown on page 12' aloud?",
    a: "A page number or figure reference only means something on paper, so LoudReader rewrites these for the spoken version, turning a page cross-reference into a phrase like 'as mentioned earlier.' The text you see on screen is not changed. Only the sentence spoken aloud is.",
  },
  {
    q: "Can text to speech read a scanned PDF that has no text layer?",
    a: "No, not in LoudReader and not in most text-to-speech readers. If a PDF is a set of page images rather than real text, there is nothing for the reader to speak until it has been through OCR (optical character recognition), which is a separate step LoudReader does not perform. A PDF exported from a word processor, or one with a proper text layer, works normally.",
  },
];
