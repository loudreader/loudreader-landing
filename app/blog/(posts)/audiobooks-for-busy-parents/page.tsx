import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import Tldr from "@/components/money/Tldr";
import StoreCta from "@/components/money/StoreCta";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>You can make room for a book without expecting a quiet hour every evening. Try one small, repeatable slot: folding clothes, a quiet break, or a familiar walk where listening does not compete with supervision. Choose a story you want to return to and a player that remembers your position. Expect interruptions and rewind freely. A recorded audiobook works well; text-to-speech is another option for a DRM-free ebook you already have. The useful goal is an enjoyable few minutes, not finishing a book every week or turning every parenting task into productive time.</p>
      </Tldr>

      <ArticleIllustration variant="waveform" caption="Pause for the interruption. Return to a passage you recognise." />

      <QuestionSection question="Which moments are actually suitable for listening?">
        <p>Start by separating routine tasks from moments that need your full attention. Folding clean laundry may leave room for a story; helping a child, crossing a road, preparing something unfamiliar or dealing with a spill may not. A listening slot is optional, and some days silence is the better choice.</p><p>For a week, try just one slot you already have. Keep the same book ready so that a spare five minutes does not disappear into browsing. If that slot is regularly interrupted, move it rather than treating the interruptions as a failure.</p>
      </QuestionSection>

      <QuestionSection question="How do you make interruptions less frustrating?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Before starting, find the paragraph or chapter where you stopped. Listen to a little of the preceding passage if the story has gone cold.</li>
          <li>Test play and pause on your chosen headphones or speaker. Keep the volume low enough to notice what needs your attention; an open ear is not a guarantee that you will.</li>
          <li>Pause when someone needs you. There is no need to finish the sentence first.</li>
          <li>On returning, rewind to something you remember. The player saves where it stopped, not the last sentence you understood.</li>
        </ol><p>In <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>, playback can continue with the iPhone screen locked and standard remote controls can pause it. Test your particular accessory before relying on it with occupied hands.</p>
      </QuestionSection>

      <QuestionSection question="What makes a book easy to return to?">
        <p>Try short chapters, a small cast or a familiar subject. Essays and short stories give you natural stopping points; a longer novel can work just as well if you enjoy it enough to remember where you were. The right choice is personal, not a ranking of which genres parents ought to read.</p><p>If a book needs diagrams, notes or a quiet stretch to untangle its argument, save it for another setting. Keep one easy-to-resume title available rather than repeatedly abandoning a demanding one mid-page.</p>
      </QuestionSection>

      <QuestionSection question="What if there is no recording of the book I want?">
        <p>A TTS reader can narrate an accessible ebook. LoudReader imports DRM-free EPUBs and PDFs and generates the speech on your device. Test a page first: complicated layouts, OCR errors and unusual names can affect the result. See <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">the ebook-to-listening guide</Link> for the import process.</p><p>Try every available voice for your first 8 hours of listening. Afterwards, a free English voice selection remains available with unlimited book listening. Speed adjustment and the sleep timer are Premium features. You do not need to choose a subscription before seeing whether listening fits your routine.</p>
      </QuestionSection>

      <QuestionSection question="How should bedtime and the school run differ?">
        <p>For your own bedtime listening, a timer limits how far narration continues after you stop following it. LoudReader offers 15, 30 and 60 minutes in Premium. It pauses at the cutoff; it cannot know when you fell asleep. Choose audio that suits you, and stop if it keeps you awake. See <Link href="/blog/fall-asleep-to-audiobooks" className="text-loudBlue hover:underline">the bedtime setup guide</Link>.</p><p>For a drive, choose the book and test the connection while safely parked, then put the phone away. Never use its lock screen while driving. The <Link href="/blog/listen-to-books-while-driving" className="text-loudBlue hover:underline">car listening guide</Link> covers setup and distraction limits. Do not use narration or soundscapes to mask a child who needs attention.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Keep a book ready for a quiet moment" subline="Import a DRM-free EPUB or PDF and try a short listening session." />
    </ArticleLayout>
  );
}
