// FACT PROVENANCE (verified on 2026-07-14):
// External citation (the article's ONE study citation):
//   - Brown, R., Waring, R., & Donkaewbua, S. (2008). "Incidental vocabulary
//     acquisition from reading, reading-while-listening, and listening to
//     stories." Reading in a Foreign Language, 20(2), 136-163.
//     https://www2.hawaii.edu/~readfl/rfl/October2008/brown/brown.html
//     Verified via web search + fetch of the journal page on 2026-07-14.
//     Facts used (and ONLY these): 35 Japanese university students; three
//     modes compared (reading, reading-while-listening, listening-only) with
//     graded readers; on immediate translation tests reading-while-listening
//     scored highest (~16% of target words vs ~15% reading-only and ~2%
//     listening-only); words met more often were more likely to be learned
//     and retained. No other numbers or studies are cited.
// The claim that English spelling-to-sound mapping is irregular is common
// linguistic knowledge, illustrated with the standard "though/through/tough"
// example, no statistic attached.
// App-behavior claims verified against the LoudReader app source
// (LoudReader_mac repo, main branch) and components/money/site.ts:
//   - Word-by-word highlighting synced to narration:
//     ContinuousReaderView.swift:4383-4388 (per-word tts-word-highlight).
//   - Speed range 0.3x-3.0x: TTSPreferences.swift:14-15 (minRate 0.3,
//     maxRate 3.0). Speed control is a Premium feature; the free tier plays
//     at normal speed (site.ts PRICING).
//   - Voices cover 10 languages (11 English narrators of 23): consistent with the app's voice
//     catalog and the phrasing already used
//     on money pages ("10 languages, each with a native narrator").
//   - 70,000+ free Project Gutenberg classics built in: phrasing consistent
//     with app/(seo)/turn-any-book-into-an-audiobook (count Gutenberg
//     publishes on gutenberg.org).
//   - Free tier: unlimited listening, no word quota, no account (site.ts).
// Claims you may NOT make until verified: any non-English voice support,
// specific CEFR level mappings for specific books, any additional study.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is listening to books an effective way to learn English?",
    a: "It works well if you read along at the same time. That combination is one of the better-researched techniques in second-language learning. A 2008 study in Reading in a Foreign Language (Brown, Waring & Donkaewbua) compared reading, reading-while-listening, and listening-only with graded readers. Reading-while-listening produced the strongest immediate vocabulary gains, and listening alone produced the weakest. So keep your eyes on the text while the narration plays, and get through a lot of material. Repeated encounters with a word are what make it stick.",
  },
  {
    q: "Should I read along while I listen?",
    a: "Yes. For learners the combination beats either mode on its own. Reading along ties each spoken word to its spelling, which matters a lot in English because spelling and sound disagree so often (though, through, tough). LoudReader highlights each word the moment it is spoken, so your eyes and ears stay together and you never have to work to keep your place.",
  },
  {
    q: "What level of book should I start with?",
    a: "Easier than your pride suggests. The method works when you understand almost everything without a dictionary, so comprehension is the input, not the reward. Start with short, familiar material: fairy tales, Aesop's fables, children's classics like The Wonderful Wizard of Oz, or Sherlock Holmes short stories. LoudReader includes 70,000+ free Project Gutenberg classics built in, so trying a level costs nothing. If a book feels like homework, pick an easier one.",
  },
  {
    q: "Can I slow the voice down while I learn?",
    a: "Yes. LoudReader Premium includes playback speed from 0.3x to 3.0x. The low end is far slower than most audiobook apps allow, slow enough to hear every syllable and word boundary. The free tier plays at normal speed. Honest pricing: Premium is $7.99/month, $49.99/year, or $199.99 once.",
  },
  {
    q: "Are there free English books I can practice with?",
    a: "Yes. LoudReader has 70,000+ free Project Gutenberg classics built in, and the free tier is unlimited listening with no word quota and no account. Everything runs on your device, so practice works offline too. One honest note on the voices: English is the deepest part of the roster, 11 narrators of the 23, which for learning English is exactly what you need.",
  },
];
