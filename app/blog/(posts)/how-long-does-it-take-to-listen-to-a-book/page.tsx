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
        If an audiobook already lists its duration, divide that time by your playback speed. A ten-hour recording takes about six hours forty minutes at 1.5x, before pauses or rewinds. For a book read by text to speech, estimate from its word count and the pace of the voice you will use. For example, 90,000 words at an assumed 150 words per minute takes ten hours at 1x. Those are chosen inputs for an example, not the length or pace of an average book. A measured sample from your actual voice gives you a more useful starting point.
      </p></Tldr>
      <ArticleIllustration variant="waveform" caption="Use a listed recording duration when available; use measured voice pace for a TTS estimate." />
      <QuestionSection question="How do I calculate time from a listed audiobook duration?">
        <p className="font-mono text-sm bg-gray-50 border border-gray-200 rounded-lg p-4">listening time = original recording duration / playback multiplier</p>
        <p>For an original ten-hour recording, the uninterrupted time is:</p>
        <ul className="list-disc pl-6 space-y-2"><li>0.8x: 12 hours 30 minutes.</li><li>1x: 10 hours.</li><li>1.25x: 8 hours.</li><li>1.5x: about 6 hours 40 minutes.</li><li>2x: 5 hours.</li></ul>
        <p>These examples assume the same audio is played throughout at a constant rate. Pauses, chapter skips and repeated sections change the time you actually spend. Check whether a player’s displayed remaining time already accounts for your selected speed before dividing it again.</p>
      </QuestionSection>
      <QuestionSection question="What if my ebook has no recording or duration?">
        <p>Estimate from words rather than pages:</p>
        <p className="font-mono text-sm bg-gray-50 border border-gray-200 rounded-lg p-4">hours = word count / words per minute / 60 / playback multiplier</p>
        <p>At an illustrative 150 words per minute and 1x, 50,000 words takes roughly 5 hours 33 minutes; 90,000 takes 10 hours; 150,000 takes roughly 16 hours 40 minutes. The pace here is an assumption for calculation, not a verified average for every narrator or language.</p>
        <p>To estimate your own voice’s pace, time a representative passage at 1x and divide its word count by the elapsed minutes. Use a few samples if the book mixes prose, dialogue and numbers. Then apply your speed multiplier once. If you timed the sample at your intended speed already, do not divide by that multiplier again.</p>
      </QuestionSection>
      <QuestionSection question="Why is page count a weak substitute?">
        <p>A printed page can contain a few lines of dialogue, a dense block of text or a diagram with almost nothing to narrate. Ebook page counts also change with display settings. Multiplying every page by a fixed word count can create a precise-looking estimate with uncertain inputs.</p>
        <p>If pages are all you have, count the words on several representative text pages and use their range to make a rough estimate. Label it as rough. A two-column textbook with tables needs a different treatment from a prose novel, and the reader may skip or mishandle text that does not extract cleanly.</p>
      </QuestionSection>
      <QuestionSection question="How do I turn the estimate into a reading plan?">
        <p>Divide estimated listening minutes by the minutes you expect to listen each day. A remaining six hours is 360 minutes, or twelve sessions of thirty minutes. Add room for missed days, pauses and replays rather than promising yourself an exact finish date.</p>
        <p>Choose the pace before optimising the calendar. Our <Link href="/blog/how-fast-should-you-listen-to-audiobooks" className="text-loudBlue hover:underline">playback pace guide</Link> covers comfortable listening; <Link href="/blog/best-playback-speed-for-comprehension" className="text-loudBlue hover:underline">the comprehension guide</Link> covers checking understanding for study.</p>
      </QuestionSection>
      <QuestionSection question="How does this apply to LoudReader?">
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> generates speech for supported DRM-free EPUBs and PDFs on your device. A different narrator or extracted version of a document can change the duration, so use an estimate as a planning aid. Premium includes 0.3x–3.0x playback; book listening remains available free at normal speed.</p>
        <p>The arithmetic does not rate how difficult a book will be. Ten hours of a familiar story and ten hours of material you need to annotate can occupy very different amounts of your week.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try LoudReader on your own book" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
