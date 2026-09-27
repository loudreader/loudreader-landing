// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Primary source checked 2026-09-28: https://support.apple.com/guide/iphone/hear-whats-on-the-screen-or-typed-iph96b214f0/ios
// Primary source checked 2026-09-28: https://www.overdrive.com/apps/libby
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Is a recorded audiobook always better than text-to-speech?",
    "a": "No universal ranking is useful. Choose a recording for a performance you like; choose TTS when you want narration of an accessible text or another voice choice. Sample the actual material."
  },
  {
    "q": "Do iPhone’s built-in speech tools support highlighting?",
    "a": "Yes. Apple documents highlighting alongside Speak Screen and Speak Selection, with voice and rate settings. Exact availability and behaviour depend on the OS and source app."
  },
  {
    "q": "Can a dedicated reader open every store purchase?",
    "a": "No. LoudReader needs a supported DRM-free EPUB or PDF. Check the title’s authorised download options or use the original service’s listening features."
  },
  {
    "q": "Does LoudReader require a subscription for notes?",
    "a": "No. Notes and highlights are free. Adjustable playback speed, the sleep timer and soundscapes are Premium features."
  },
  {
    "q": "Can I use more than one listening method?",
    "a": "Yes. A recording, built-in speech and a dedicated reader can serve different books and situations. There is no need to choose one for every use."
  }
];
