// FACT PROVENANCE, every claim verified on 2026-07-14 against:
//   - Research honesty: NO ADHD-specific TTS study is cited anywhere in this
//     article, because none was verified at write time. The single citation
//     is Wood, Moxley, Tighe & Wagner (2018), Journal of Learning
//     Disabilities 51(1), 73 to 84, DOI 10.1177/0022219416688170 (verified via
//     journals.sagepub.com and PubMed 28112580). It is a meta-analysis of
//     TTS/read-aloud tools for students with READING DISABILITIES (average
//     effect size .35 on comprehension). The article explicitly says the
//     ADHD-specific evidence is thinner and frames dual-channel reading as
//     mechanics/experience, not clinical claims. Keep it that way.
//   - Word-by-word highlighting: LoudReader_mac ReaderStylesheet.swift
//     (.tts-word-highlight + .tts-sentence-highlight) and
//     Engines/HighlightSchedule.swift. Free, not gated in PaywallReason.swift.
//   - Playback speed 0.3x to 3.0x is Premium; free tier plays at normal speed:
//     components/money/site.ts PRICING + PaywallReason.playbackSpeed.
//   - Listening while moving / screen locked: Info.plist UIBackgroundModes =
//     ["audio"]; lock-screen play/pause/15s-skip via MPRemoteCommandCenter in
//     PlayerService.swift (same provenance as the driving article).
//   - Free tier unlimited listening, no word quota: SubscriptionAccess.swift
//     (baseFreeFraction = 1.0) + site.ts PRICING. Voice trial: all voices
//     free for the first 8 listening hours, then one free voice.
//   - Sibling article link: /blog/text-to-speech-dyslexia (this batch).
// Claims you may NOT make until verified: any ADHD prevalence/reading
// statistic; that faster playback clinically improves ADHD focus (framed as
// a lever some listeners find helpful, not a finding); medical advice of any
// kind; languages other than English.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Why is reading with ADHD so exhausting?",
    a: "Eyes-only reading asks one attention channel to do everything: hold the line, decode the words, build the meaning, and suppress every competing thought. When attention dips for a moment, the page does not notice. Your eyes keep sliding, so you surface a paragraph later having absorbed nothing and pay the re-reading tax again. It is not a motivation problem. It is a single-channel bottleneck.",
  },
  {
    q: "Does listening while reading help ADHD focus?",
    a: "Many readers find that pairing narration with highlighted text keeps them anchored: the voice keeps moving so you cannot silently stall, and the moving highlight gives your eyes an instant way back after a drift. Honestly, the strong research on read-aloud tools is for reading disabilities generally, where a 2018 meta-analysis found moderate comprehension gains, and ADHD-specific evidence is thinner. The practical test is one real chapter: it either keeps you in the book or it does not.",
  },
  {
    q: "What playback speed works best for ADHD readers?",
    a: "There is no universal answer. Some listeners focus better slightly above 1x because the brisker pace leaves less idle attention. Others need slower speeds for dense material. The useful thing is having the dial: in LoudReader, speed control from 0.3x to 3.0x is a Premium feature, and the free tier plays at normal speed.",
  },
  {
    q: "Can I listen while walking or doing something with my hands?",
    a: "Yes, and this is one of the most ADHD-friendly things about turning a book into audio. Playback continues with the screen locked, with play, pause, and 15-second skip on the lock screen, and because LoudReader's voices run entirely on-device it works on a walk with no signal. Pacing, dishes, or the gym can occupy the restless part while the book gets the rest.",
  },
  {
    q: "Is text to speech a crutch or a legitimate reading tool?",
    a: "It is a tool. The book is the same book whether it enters through your eyes, your ears, or both at once, and what matters is whether you finish chapters and retain them. If listening while following highlighted text turns abandoned books into finished ones, that is not cheating. That is reading in the format your attention actually accepts.",
  },
];
