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
        Listen at a pace that lets you follow and enjoy the book. Start near the recording’s original speed, then move one small step faster or slower if it feels uncomfortable. You do not need to reach 2x, and you do not need to stay at 1x. A slow performance, a fast voice, a familiar re-read and a new subject may all call for different settings. The useful question is whether the adjustment improves this listening session. This guide is about everyday pace and enjoyment; if you are studying material you must remember, use a separate understanding check.
      </p></Tldr>
      <ArticleIllustration variant="waveform" caption="A playback setting can change with the book, voice and listening session." />
      <QuestionSection question="Why does the same speed feel different between books?">
        <p>The multiplier is relative to the original audio. A deliberately paced narrator at 1.25x can still speak more slowly than a brisk narrator at 1x. Pauses and dialogue also change how hurried a passage feels. Text-to-speech voices have their own rhythms, so a number you liked with one voice is only a starting point with another.</p>
        <p>If you change narrator, listen briefly at the new voice’s normal speed before restoring your usual setting. For choosing the voice itself, our <Link href="/blog/how-to-choose-a-narrator-voice" className="text-loudBlue hover:underline">narrator selection guide</Link> covers comparing samples on the same passage.</p>
      </QuestionSection>
      <QuestionSection question="How do I find a comfortable pace on a new book?">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Give the opening a chance.</strong> Learn the narrator’s sound and the book’s style before changing several controls at once.</li>
          <li><strong>Make one small adjustment.</strong> For example, try 1.1x instead of jumping straight from 1x to 2x. The example is a convenient step, not a recommended target.</li>
          <li><strong>Listen through a complete scene or section.</strong> Notice whether you are following connections as well as individual words.</li>
          <li><strong>Keep, reverse or stop adjusting.</strong> If the original speed was more enjoyable, return to it. There is no progress score to protect.</li>
        </ol>
        <p>For a performance you particularly enjoy, timing may be part of the appeal. You can choose normal speed even when you understand a faster version. Finishing sooner and enjoying the delivery are separate goals.</p>
      </QuestionSection>
      <QuestionSection question="When is a pace change the wrong fix?">
        <p>If you keep missing sections while answering messages or doing a demanding task, first try a less distracting session. If words are unclear, check the headphones, source text and voice. If you are tired, a shorter session may work better than either speed extreme.</p>
        <p>During a difficult chapter, pause or return to the page. You need not preserve a setting for an entire book. Our <Link href="/blog/best-playback-speed-for-comprehension" className="text-loudBlue hover:underline">comprehension guide</Link> gives a more deliberate self-check for study and unfamiliar arguments.</p>
      </QuestionSection>
      <QuestionSection question="How much time does faster playback save?">
        <p>Divide the original duration by the multiplier. A ten-hour recording takes eight hours at 1.25x, about six hours forty minutes at 1.5x, or five hours at 2x, before pauses and replays. Those are arithmetic examples, not claims about what you will understand at those speeds.</p>
        <p>Keep rewinds in the calculation. A faster setting that makes you replay every paragraph may not save time. For fiction, it may also change the experience even if you miss no plot details.</p>
      </QuestionSection>
      <QuestionSection question="Can I listen slower than the original pace?">
        <p>Yes, when your player supports it. A small reduction can be worth trying on a difficult passage; you can also pause between sections. Very slow playback can sound stretched, so use your ears rather than assuming slower is always clearer.</p>
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> reads supported DRM-free EPUBs and PDFs with local voices. Premium includes the 0.3x–3.0x speed control; the free tier uses normal speed. See <Link href="/blog/slow-down-audiobook-speed" className="text-loudBlue hover:underline">how to slow a passage down</Link> for a short replay-and-read workflow.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try LoudReader on your own book" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
