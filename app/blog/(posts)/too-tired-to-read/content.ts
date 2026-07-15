// FACT PROVENANCE, every claim verified on 2026-07-14 against:
//   - Eye-strain physiology: American Academy of Ophthalmology,
//     "Computers, Digital Devices and Eye Strain"
//     (aao.org/eye-health/tips-prevention/computer-usage): people blink
//     roughly 5 to 7 times per minute at screens versus a normal ~15, blinking
//     keeps the eye surface moist, dry eyes tear or sting, and the AAO
//     recommends regular breaks looking at a distant object. The article
//     cites ONLY these verified points, with no invented statistics.
//   - Same-book reading/listening: LoudReader IS the reader. The book you
//     read and the book that is narrated are the same imported file, and
//     reading position is saved (money pages' verified "remembers your
//     place" claim; playback starts from the current position).
//   - Screen-off listening: LoudReader_mac Info.plist UIBackgroundModes =
//     ["audio"]; lock-screen play/pause/skip via MPRemoteCommandCenter in
//     PlayerService.swift (same provenance as the driving article).
//   - Night Mode is FREE: ReaderControlsSheet.swift. The Night Mode button
//     has no premium gate. Reading Style (fonts, sizes, spacing) IS premium:
//     ReaderControlsSheet.swift presents PaywallReason.readingStyle.
//   - Sleep timer and playback speed are Premium: PaywallReason.swift +
//     components/money/site.ts PRICING.
//   - Word-by-word highlighting free: ReaderStylesheet.swift
//     (.tts-word-highlight), no paywall gate.
// Claims you may NOT make until verified: that listening is objectively less
// tiring or better for comprehension than reading (no citation, the article
// deliberately frames this as moving load off the eyes, not a superiority
// claim); any sleep or health outcome.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Why do my eyes get tired when I read at night?",
    a: "By evening your eyes have usually spent hours doing close-up focus work at screens, and screen use lowers your blink rate. The American Academy of Ophthalmology notes people blink roughly 5 to 7 times per minute at a computer versus about 15 normally, which dries the eye surface and makes it sting or blur. Evening reading adds more of the same near-focus load, so your eyes give out before your interest does.",
  },
  {
    q: "Can I switch between reading and listening in the same book?",
    a: "Yes. In LoudReader they are not two editions of the book, they are the same imported file. Read with your eyes while you are fresh, then press play and the narration continues from where you are. Your position is saved either way, so nothing is lost switching back and forth.",
  },
  {
    q: "Is listening less tiring than reading?",
    a: "It moves the work off your eyes, which is exactly what you want at the end of a screen-heavy day. But honestly, it is not effort-free: following a book by ear still takes attention, and if you are truly falling asleep you will drift no matter the format. The practical win is that tired eyes stop being the reason your reading session ends.",
  },
  {
    q: "Does LoudReader work in dark mode with larger text?",
    a: "Night mode is free. One tap in the reader switches to a dark color scheme. Adjusting fonts, text sizes, and spacing is part of the Reading Style options in LoudReader Premium, so larger custom text is a paid feature. The free tier keeps the standard layout.",
  },
  {
    q: "Can I listen with the screen off?",
    a: "Yes. Playback continues with the screen locked, and the lock screen shows play, pause, and 15-second skip controls. All narration is generated on your device, so this works with no internet connection at all.",
  },
];
