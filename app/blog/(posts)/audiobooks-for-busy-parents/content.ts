// FACT PROVENANCE. Every app-behavior claim verified on 2026-11-01 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Background playback / lock screen: Info.plist UIBackgroundModes = ["audio"];
//     MPRemoteCommandCenter in PlayerService.swift (play, pause, 15s skip).
//   - On-device voices: Apple speech synthesis, all local. Works without
//     internet, which matters for parents multitasking around the house.
//   - Speed 0.3x to 3.0x: Premium (PaywallReason.playbackSpeed).
//   - Sleep timer: Premium (PaywallReason.sleepTimer).
//   - Word-by-word highlighting: free (ReaderStylesheet.swift).
//   - EPUB/PDF import + 70,000+ Gutenberg: verified in-app.
//   - Free tier unlimited listening: SubscriptionAccess.swift.
//   - Voice selection: 8 AI voices, all free for first 8 hours, 1 free
//     thereafter, all 8 on Premium.
// NO claims about: parenting advice, child development, audiobook efficacy
// for children, or sleep training. The article is about fitting adult reading
// into a parenting schedule.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "How do parents actually find time to read?",
    a: "They do not find it, they borrow it from activities where their hands are busy but their mind is free. Dishes, laundry, night feeds, stroller walks, the drive to daycare. These are all reading opportunities if the book lives in your ears. The honest truth is that the two-hour reading session is gone, but six 15-minute listening sessions scattered through the day add up to a chapter.",
  },
  {
    q: "Can I listen while holding a sleeping baby?",
    a: "Yes, and this is one of the most common parent reading hacks. Baby falls asleep on you, the room is dark, you cannot move, and you cannot hold a book or a phone screen. One earbud in, playback running on device, and you get through a chapter of something that is not about parenting. The sleep timer (Premium) stops playback so you do not wake up three hours later with the book still going.",
  },
  {
    q: "What if the book I want has no audiobook edition?",
    a: "This is where text-to-speech fills the gap. Most books were never recorded, and the ones that were tend to be bestsellers. If you are reading something niche, a backlist novel, or a book you already own as an EPUB, LoudReader turns it into audio on the spot. Import the file and press play. No conversion, no waiting. The narration is generated live on your device with natural offline voices.",
  },
  {
    q: "Does listening work with one earbud?",
    a: "Yes. Parents often keep one ear free for kid sounds and one earbud in for the book. Mono audio mode (built into iOS settings) routes both channels to one ear so you do not miss half the narration. LoudReader plays through whatever audio output your phone is using, earbuds or speaker.",
  },
  {
    q: "Can I pause and come back days later?",
    a: "Yes. LoudReader remembers your place in every book. You can stop mid-sentence when the toddler needs you and pick up exactly there three days later. The app is free with no account, and everything stays local: it is fully on-device and private, your library never leaves your device.",
  },
  {
    q: "What speed works best for distracted listening?",
    a: "Slightly slower than your desk speed. If you normally listen at 1.5x, try 1.2x when you are also doing dishes. The divided attention means you need a pace that lets you absorb without effort. Slower speeds from 0.8x to 1.0x also work well for late-night listening when you are tired and not fighting for speed. Speed control from 0.3x to 3.0x is a Premium feature.",
  },
];
