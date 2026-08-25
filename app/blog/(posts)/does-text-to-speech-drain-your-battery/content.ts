// FACT PROVENANCE. Every app-behavior claim verified on 2026-08-24 against
// the LoudReader app source (LoudReader_mac repo, main branch):
//   - Background audio: LoudReader/Info.plist declares
//     UIBackgroundModes = ["audio", "processing"], so narration keeps
//     playing with the screen locked, the standard low-power path any
//     audio app uses.
//   - Rendered sentences are cached to disk with a metadata sidecar
//     (voice, engine version, text hash, sample rate) so a sentence that
//     has already been synthesized is decoded and played back rather than
//     regenerated: LoudReader/AudioCacheManager.swift.
//   - Synthesis is fully on-device (no network round trip per sentence):
//     components/money/site.ts DIFFERENTIATORS.private.
// NO benchmark numbers, percentages, or "X% battery" figures are cited
// anywhere in this article. None were measured for it, so none are
// claimed. All power comparisons are qualitative (what costs more or less
// relative to what), per the no-fabrication rule.
// Claims you may NOT make until measured on-device: any specific battery
// percentage, minutes-of-listening-per-charge figure, or comparison number
// against a named competitor's power draw.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Does text to speech use more battery than playing a podcast?",
    a: "Turning text into speech takes more work than just decoding an existing audio file, because the app has to generate the waveform first. Once a sentence is generated, though, LoudReader caches the audio, so listening to it again is exactly as cheap as playing back a podcast. The extra cost is concentrated in the first pass through new text, not in replays.",
  },
  {
    q: "Does streaming text to speech from the cloud use more battery than offline?",
    a: "Cloud-based text to speech has to keep a network connection active for as long as you're listening, sending audio down constantly, and the radio is one of the more power-hungry parts of a phone. LoudReader runs synthesis fully on-device and private, your library never leaves your device, so there's no per-sentence network request eating battery in the background.",
  },
  {
    q: "Does the screen drain more battery than text to speech synthesis?",
    a: "For most phones, yes, the display is usually the single biggest power draw during active use. LoudReader supports background audio, so you can lock the screen and keep listening with the phone in your pocket. Locking the screen while you listen saves more battery than anything happening in the synthesis itself.",
  },
  {
    q: "Will listening to a whole audiobook overnight kill my battery?",
    a: "It can, if nothing stops it, which is a scheduling problem more than a power problem. A sleep timer that pauses playback after a set time protects your battery the same way it protects your place in the book: by making sure the app isn't working, and the screen isn't waking, for hours you're not actually listening.",
  },
  {
    q: "Does LoudReader use less battery than a cloud text to speech app?",
    a: "LoudReader has not published a battery benchmark against any competitor, so no specific number is claimed here. What's true structurally is that on-device synthesis skips the continuous network traffic a cloud app needs, and background audio mode lets you listen with the screen off, both of which are the two biggest levers for saving battery on any listening app.",
  },
];
