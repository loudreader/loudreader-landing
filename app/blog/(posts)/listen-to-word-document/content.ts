// FACT PROVENANCE — revised 2026-09-28, not a runtime test.
// Shipping app: the LoudReader app source, release_v1.12,
// peeled commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0 (git show, not dirty HEAD).
// BookImportService.swift:319–334,972–979 accepts EPUB/PDF file imports;
// remote article links have a separate download/import path.
// PDFImportPipeline.swift:88–96,153–218 uses on-device Apple Vision OCR
// when at least half the pages lack text or total extracted text is very small;
// at most 300 OCR pages/import, with partial/unreadable-result notices.
// LoudReaderApp.swift and Analytics.swift initialise Sentry diagnostics and
// TelemetryDeck usage analytics; the latter defaults ON. Release SettingsSheet.swift
// hides the usage-statistics switch; do not promise a visible opt-out.
// Local narration is not a claim of zero network traffic.
// Platform/account/free-tier facts: docs/product-facts-2026-09-28.md,
// audited against this shipping tag and official Apple lookup on 2026-09-28.
// Microsoft primary sources checked 2026-09-28:
// https://support.microsoft.com/en-us/office/listen-to-your-word-documents-5a2de7f3-1ef4-4795-b24e-64fc2731b001
// Desktop Review/Read Aloud; web Immersive Reader; platform-dependent voices;
// neural-voice connection/sign-in guidance; no storage claim is Microsoft's statement.
// https://support.microsoft.com/en-gb/office/collab-files/save-or-convert-to-pdf-or-xps-in-office-desktop-apps
// Desktop PDF export and markup selection; not a claim every export is local.
// App highlighting/local reading position: release ContinuousReaderView/PlayerService;
// no automatic cross-device sync per source audit. No universal Word price claim.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Can I listen without converting my Word file?",
    "a": "Yes. Use Word’s reading tools in a supported version. This is especially convenient while editing because you keep working in the original document."
  },
  {
    "q": "Does LoudReader open DOCX files?",
    "a": "No. Export a PDF copy first, then import it. Keep the Word file as the editable source; changes to it will not automatically update the imported PDF."
  },
  {
    "q": "Do I need internet access for Word’s voices?",
    "a": "It depends on the platform and voice. Microsoft says voices may be device-based or service-based, and its neural-voice guidance requires an internet connection and sign-in. Test your intended setup before going offline."
  },
  {
    "q": "Will a PDF include my tracked changes?",
    "a": "That depends on the export options. Check whether you are exporting the document or a version showing markup, then inspect the PDF. Keep the original Word document unchanged if you still need its review history."
  },
  {
    "q": "Can I listen on iPhone and continue on a Mac?",
    "a": "You can import the document on both supported devices, but LoudReader does not automatically sync your library or reading position. On Apple Silicon Macs, it runs as an iPad app."
  },
  {
    "q": "Does local narration mean there is no analytics?",
    "a": "No. LoudReader generates speech locally but also uses crash/performance diagnostics and usage analytics. Usage analytics is enabled by default."
  }
];
