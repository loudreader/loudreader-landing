// FACT PROVENANCE. Every app-behavior claim verified on 2026-11-01 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - On-device processing: all voice generation runs locally via Apple's
//     speech synthesis APIs. No network calls for TTS. Verified in
//     Engines/*.swift (no outbound URL requests for speech).
//   - No account required: SubscriptionAccess.swift and AppEntry.swift (no
//     signup gate, free tier starts immediately without login).
//   - EPUB/PDF import: works via iOS Share sheet and file picker. Files stay
//     in the app sandbox, never uploaded.
//   - Background playback / lock screen: Info.plist UIBackgroundModes = ["audio"];
//     MPRemoteCommandCenter in PlayerService.swift.
//   - Speed control 0.3x to 3.0x: Premium (PaywallReason.playbackSpeed).
//   - Voice selection: 23 studio narrators in 10 languages, all free for first 8 hours, 1 voice
//     remains free, all 8 on Premium (site.ts PRICING).
// NO claims about: legal-specific certifications, bar association endorsements,
// compliance with specific privacy regulations (HIPAA, GDPR). LoudReader is
// not a legal-tech product; it is a general on-device TTS reader suitable for
// confidential documents precisely because nothing leaves the device.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is it safe to use text-to-speech for client documents?",
    a: "It depends on the tool. Cloud-based TTS services send your text to a remote server for processing, which is a confidentiality problem for legal documents. On-device readers like LoudReader process everything locally: the text stays in the app sandbox, no upload happens, and no account is required. You should still follow your firm's data-handling policies, but an on-device reader removes the third-party exposure that makes most TTS tools a non-starter for legal work.",
  },
  {
    q: "What kinds of legal documents work well for listening?",
    a: "Briefs you are reviewing rather than drafting line by line. Opposing counsel's filings where you want the gist before a deep read. Contracts at the familiarity stage, where you have seen the template and need to catch deviations. Long witness statements. Hearing transcripts. Anything where the primary task is absorption rather than precise editing. Dense legal writing with heavy citations is harder to follow by ear, but the preamble and fact sections often read well aloud.",
  },
  {
    q: "Does LoudReader work offline?",
    a: "Yes. The voices are downloaded to your device and run entirely locally. This matters for legal work in courtrooms, client sites, airplanes, and any environment where Wi-Fi is unreliable or prohibited. It is fully on-device and private, your library never leaves your device.",
  },
  {
    q: "Can I use this on my work Mac?",
    a: "Yes. LoudReader has native Mac and iPhone apps, and the same on-device privacy model applies on both. Import a PDF brief on your Mac, press play, and the narration runs locally with no network dependency.",
  },
  {
    q: "What about page numbers and citations?",
    a: "LoudReader is not a legal research tool. It reads the text of a document aloud and highlights as it goes, but it does not preserve pagination to match official filings. For precise citation work, you will still want the PDF open alongside the audio. What it gives you is a way to absorb the substance of a 40-page motion during a commute or while you review exhibits.",
  },
];
