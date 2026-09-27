// FACT PROVENANCE — editorial verification 2026-09-28.
// App-source audit on 2026-09-28: LoudReader release_v1.12, commit 5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0, released 2026-09-22 (Apple lookup id6758149478). Sources: LoudReader/PlayerService.swift (saved position, background audio, remote controls); ContentView.swift and BookImportService.swift (EPUB/PDF imports); Subscription/SubscriptionAccess.swift, SubscriptionManager.swift and Subscription/PaywallReason.swift (8-hour eligible-voice allowance, limited free English selection thereafter, paid speed/timer, free notes); LoudReaderApp.swift and Analytics.swift (diagnostics and usage analytics); PDFImportPipeline.swift (local OCR with limits). Source review, not new runtime testing.
// Read release_v1.12 SleepTimerFloatingMenu.swift (15/30/60 and Premium gate), PlayerService.swift tickSleepTimer→pause, SoundscapeService.swift (rain/fireplace/oceanWaves). No clinical sleep-benefit claim.
// Practical workflows are editorial suggestions, not measured outcomes or medical promises.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "How does LoudReader stop overnight playback?",
    "a": "Its Premium sleep timer pauses narration after 15, 30 or 60 minutes. Set and check it before you start listening."
  },
  {
    "q": "Does the timer detect when I fall asleep?",
    "a": "No. It pauses at the selected cutoff. You may need to rewind to the last passage you remember."
  },
  {
    "q": "Is the sleep timer free?",
    "a": "No. The sleep timer and ambient soundscapes are Premium features. Ordinary book listening remains free with the free voice selection after the initial voice allowance."
  },
  {
    "q": "Do soundscapes improve sleep?",
    "a": "This guide makes no clinical claim. They are optional background sounds; leave them off if you find them distracting."
  },
  {
    "q": "What if the book keeps me awake?",
    "a": "Pause it. Try a less engaging or familiar book on another evening if you want, but there is no need to force listening into your bedtime."
  }
];
