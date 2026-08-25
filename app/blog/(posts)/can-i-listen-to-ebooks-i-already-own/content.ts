// FACT PROVENANCE. Every app-behavior claim verified on 2027-01-01 against
// the LoudReader app source (LoudReader_mac repo, main branch), consistent
// with the DRM facts already shipped in convert-kindle-books-to-audio and
// listen-to-mobi-files:
//   - LoudReader imports EPUB and PDF files (BookImportService.swift only
//     branches on .epub and .pdf; "Only EPUB and PDF files are supported"
//     error string at BookImportService.swift:163 and :177).
//   - LoudReader has no DRM circumvention code anywhere in the app source.
//     It cannot open a DRM-locked file from any store, full stop.
//   - Amazon Kindle Store purchases, Kobo Store purchases, Apple Books
//     purchases (except the small share sold DRM-free), and most library
//     ebook loans (Libby/OverDrive use Adobe DRM) are DRM-locked by the
//     seller. This is a description of how those stores work, not a
//     LoudReader feature claim, and is publicly verifiable from each
//     store's own terms.
//   - DRM-free ebooks (Project Gutenberg, publishers like Tor and Baen that
//     explicitly sell DRM-free, most self-published direct-from-author
//     sales, your own manuscripts) import and play normally. MOBI/AZW3
//     files that are DRM-free convert to EPUB with Calibre (free, open
//     source) first.
//   - Pricing, free-tier, and voice facts come from components/money/site.ts.
// Claims you may NOT make: DRM removal, breaking Kindle/Kobo/Adobe
// protection, or any circumvention of a library-loan DRM system.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can I listen to ebooks I already own?",
    a: "Only the DRM-free ones. If you own the file (not just the app it opens in) and it isn't wrapped in copy protection, LoudReader imports it as an EPUB or PDF and reads it aloud. If you bought it from a store like the Kindle Store, most Kobo purchases, or most Apple Books purchases, it's almost certainly DRM-locked, and no app, LoudReader included, can open a DRM-locked file without breaking that protection, which LoudReader does not do.",
  },
  {
    q: "How do I know if my ebook has DRM?",
    a: "The simplest test: try opening the file in Calibre, a free ebook manager. If Calibre can display the text, the file is DRM-free. If it refuses or shows an error about encryption, it's protected. As a rule of thumb, anything downloaded through a Kindle, Kobo, or Nook store app is locked to that app. Anything you downloaded as a plain .epub file from a publisher's own site, Project Gutenberg, or a DRM-free retailer like Tor's ebook store or Baen is not.",
  },
  {
    q: "What about ebooks I borrowed from the library?",
    a: "Library loans through apps like Libby almost always use Adobe DRM, which locks the file to the library app for the loan period. LoudReader can't open those. If you want a text-to-speech option for a library book, some library apps have their own built-in read-aloud or accessibility features worth checking, but that's a feature of the library app, not something LoudReader can add to a locked file.",
  },
  {
    q: "Which ebooks am I likely to actually own DRM-free?",
    a: "Public-domain classics from Project Gutenberg (DRM-free by definition, and 70,000+ of them are built directly into LoudReader). Ebooks from publishers that explicitly sell DRM-free, Tor and Baen being the best-known examples. Self-published books bought directly from an author's own site. Your own manuscripts, drafts, and PDFs. If a purchase came through a big retailer's own storefront and app, assume it's locked until Calibre tells you otherwise.",
  },
  {
    q: "Can LoudReader remove DRM so I can listen anyway?",
    a: "No, and it never will. LoudReader has no DRM-removal code of any kind. That's a deliberate line: bypassing DRM you don't have explicit permission to bypass raises real legal questions depending on where you live, and it's not something an app should quietly do on your behalf. The honest path is to use the DRM-free ebooks you have and buy or download future ones DRM-free when the option exists.",
  },
  {
    q: "If my ebook is locked, what are my options?",
    a: "A few. Check whether the same title is available DRM-free from a publisher's own site or Project Gutenberg, common for older or public-domain works. Check whether the store's own app has a built-in text-to-speech or accessibility read-aloud feature, several do. Or see whether the book has an actual audiobook edition through a service like Audible or your library, which is a fundamentally different, professionally narrated product.",
  },
];
