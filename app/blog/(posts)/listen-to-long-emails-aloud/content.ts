// FACT PROVENANCE — reviewed 2026-09-28.
// Shipping source: LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0),
//   LoudReader/BookImportService.swift — file types; no mailbox connector
//   LoudReader/PDFImportPipeline.swift — extracted document order
//   LoudReader/Analytics.swift; LoudReaderApp.swift — telemetry
// Canonical release audit: docs/product-facts-2026-09-28.md.
// Source inspection, not a new runtime or network test.
// Official source checked 2026-09-28: https://support.apple.com/guide/mail/mlhlp1044/mac
// No promise of perfect extraction, all-site compatibility, or absence of telemetry.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Does LoudReader connect to my inbox?",
    "a": "No. This workflow imports an individual PDF or supported article link. It does not connect to Gmail, Outlook or an IMAP mailbox."
  },
  {
    "q": "Will a PDF contain my email attachments?",
    "a": "Not necessarily. Check the export and save supported attachments separately when you need their contents read."
  },
  {
    "q": "Will replies be read in chronological order?",
    "a": "The app follows the imported document’s text, not your mail client’s conversation logic. Inspect the order and repeated quotations before listening."
  },
  {
    "q": "Is local narration enough for confidential work email?",
    "a": "No single feature establishes permission or compliance. Check your organisation’s rules and account for exported copies, transfer services and device backups. LoudReader uses local speech but also includes telemetry."
  }
];
