// FACT PROVENANCE. Every app-behavior claim verified on 2026-11-01 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - PDF reading: EPUB/PDF import via Share sheet, on-device text extraction
//     from PDFs. Selectable-text PDFs work; scanned images do not.
//   - Natural offline voices: Apple speech synthesis, all local.
//   - Background playback / lock screen: Info.plist UIBackgroundModes = ["audio"];
//     MPRemoteCommandCenter in PlayerService.swift.
//   - Word-by-word highlighting: free, not gated (ReaderStylesheet.swift).
//   - Speed 0.3x to 3.0x: Premium (PaywallReason.playbackSpeed).
//   - Notes & highlights: Premium.
//   - Free tier unlimited listening, no word quota: SubscriptionAccess.swift.
// NO claims about: journal integration, reference management (Zotero, Mendeley),
// citation extraction, academic search, or research productivity metrics.
// LoudReader is a general TTS reader, not a research-specific tool.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Can text-to-speech read academic PDFs?",
    a: "Most of them, yes. If the PDF has selectable text, LoudReader can read it. Modern journal PDFs, preprints from arXiv, and conference papers are almost always text-based and work right away. What does not work: old scanned articles that are just page images with no text layer, and heavily formatted multi-column layouts that sometimes confuse the reading order. For the vast majority of academic PDFs, import and press play is the whole workflow.",
  },
  {
    q: "Does listening to a paper work for deep comprehension?",
    a: "It depends on the paper and the field. Methods sections with dense equations are hard to follow by ear. But literature reviews, introductions, discussion sections, and humanities papers often absorb better through audio, especially on a second pass. Many researchers use TTS as a first screen: listen to the abstract and intro while walking to the office, then decide which papers deserve a full sit-down read.",
  },
  {
    q: "Can I speed through a literature review?",
    a: "Yes. Setting playback to 1.5x or even 2.0x works well for papers in your field where you already know the terminology and just need to extract the contribution. For unfamiliar subfields or dense theory, slower speeds keep comprehension intact. In LoudReader, speed control from 0.3x to 3.0x is a Premium feature; the free tier plays at normal speed.",
  },
  {
    q: "What about notes and highlights?",
    a: "LoudReader Premium includes notes and highlights. You can mark passages during playback and return to them later. Many researchers use this to flag key claims and methods during a listen-through, then open the marked PDF for the detailed reading session.",
  },
  {
    q: "Can I listen to papers on my commute?",
    a: "Yes, and this is where TTS earns its keep for researchers. A 30-minute commute each way is an hour of daily listening time. Two or three papers a day absorbed en route adds up to a serious reading habit without taking time from lab work or teaching. The playback runs on-device with natural offline voices, so tunnels, subways, and dead zones do not interrupt it.",
  },
];
