import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);
export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>
        To slow down an audiobook, open the player’s speed control, usually labelled 1x, and choose a lower rate. Start with a modest reduction and replay the difficult section. If the words remain unclear, pause and look at the text rather than pushing the slider to its minimum. In LoudReader, adjustable speed from 0.3x to 3.0x is a Premium feature. Slower playback can give you more time to inspect a phrase, but it is not a guarantee of understanding or a substitute for a clearer recording. This guide covers using it for a specific passage, then returning to a comfortable pace.
      </p></Tldr>
      <ArticleIllustration variant="waveform" caption="Slow a difficult passage, inspect it, then listen again at a comfortable pace." />
      <QuestionSection question="What is a useful way to replay a difficult passage?">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Replay a short section.</strong> Find the sentence or paragraph where you lost the thread. Repeating a whole chapter can make it hard to isolate the problem.</li>
          <li><strong>Reduce speed a little.</strong> Try a setting just below your current one. Listen for the words you missed rather than aiming for the lowest number.</li>
          <li><strong>Check the text.</strong> Identify an unfamiliar word, punctuation break or OCR error. A slower version of the same error remains an error.</li>
          <li><strong>Pause if you need to.</strong> Look up a term, inspect a diagram or write your own explanation before continuing.</li>
          <li><strong>Replay at your normal pace.</strong> Decide whether the passage is now clear enough to move on. You can keep the slower setting if it is more comfortable.</li>
        </ol>
        <p>For language practice, compare a short phrase with its written form. If you need pronunciation guidance, use a reliable dictionary or a teacher as well: a synthetic narrator can mispronounce names or unfamiliar words. Our <Link href="/blog/read-and-listen-at-the-same-time" className="text-loudBlue hover:underline">read-along guide</Link> explains how to keep text visible during playback.</p>
      </QuestionSection>
      <QuestionSection question="Where do I find speed settings?">
        <p>Look in the current audiobook player rather than the device’s general volume controls. In Apple Books on Mac, Apple documents a playback-speed control in its <a href="https://support.apple.com/guide/books/listen-to-audiobooks-ibks9a460640/mac" className="text-loudBlue hover:underline">audiobook listening guide</a>. Other apps and device versions offer different ranges, so check the installed player before choosing an app for a specific minimum.</p>
        <p>In <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>, Premium unlocks a speed control covering 0.3x–3.0x. Free book listening stays at normal speed. A supported setting is not a promise that every voice will sound equally clear across the entire range.</p>
      </QuestionSection>
      <QuestionSection question="Will slower playback change the pitch?">
        <p>LoudReader’s audio engine changes playback rate with pitch held at its normal setting. That avoids simply lowering the pitch as a slower tape would. It does not guarantee unchanged sound quality: at extreme rates, stretched consonants, pauses or other artefacts can become distracting.</p>
        <p>If a very slow rate sounds worse, move nearer to normal speed and use pauses between sentences instead. You may need time to think after an idea rather than longer vowels within each word. Try both approaches on the same short section.</p>
      </QuestionSection>
      <QuestionSection question="When should I return to a faster pace?">
        <p>When the difficult section is clear and the slower delivery no longer helps, return to a comfortable setting. You do not have to eliminate every replay before increasing it. Conversely, there is no need to accelerate a performance you enjoy at its original pace.</p>
        <p>For sustained study, assess more than whether individual words sound clear. Can you explain the point after the audio stops? Our <Link href="/blog/best-playback-speed-for-comprehension" className="text-loudBlue hover:underline">speed and comprehension guide</Link> provides a simple check. Keep slowing down as one tool among replaying, reading, taking a break and asking for an explanation.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try LoudReader on your own book" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
