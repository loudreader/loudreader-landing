import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import Disclosure from "@/components/blog/Disclosure";
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
      <Tldr>
        <p>For <em>The Hound of the Baskervilles</em>, free audio does not have to mean text-to-speech: <a href="https://librivox.org/the-hound-of-the-baskervilles-by-arthur-conan-doyle/" className="text-loudBlue hover:underline">LibriVox offers a reading by Laurie Anne Walden</a>. If you prefer an ebook with generated narration, LoudReader can read the <a href="https://www.gutenberg.org/ebooks/2852" className="text-loudBlue hover:underline">Gutenberg #2852 text</a> on your device. Try the <Link href="/listen/the-hound-of-the-baskervilles" className="text-loudBlue hover:underline">LoudReader sample</Link> and a chapter of the recording, then choose the one you want to spend the evening with. Both routes follow a mystery; avoid reviews that reveal the solution while you compare voices.</p>
        <Disclosure />
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="A family legend, a new heir and Watson’s reports from Dartmoor." />
      <QuestionSection question="Do you need to know the earlier Holmes stories?"><p>You can approach this as a single case. The opening introduces Holmes and Watson through their discussion of a visitor’s walking stick, then brings in the Baskerville mystery. Familiarity with the other stories adds context, but you do not need to study a chronology before starting.</p><p>The important early distinction is between the family legend and the current events being investigated. Let the book reveal how they relate. A spoiler-free note with the names of the heir, doctor and household is enough; a plot summary of the whole novel may give away what you are listening to discover.</p></QuestionSection>

      <QuestionSection question="How can you check that it is the complete novel?"><p>The <a href="https://www.gutenberg.org/ebooks/2852" className="text-loudBlue hover:underline">Gutenberg contents</a> run through fifteen chapters, beginning with <em>Mr. Sherlock Holmes</em> and ending with <em>A Retrospection</em>. Compare that sequence with the edition you choose. A radio adaptation or a retelling can have a different structure, even when it uses the same title.</p><p>Gutenberg lists this text as public domain in the USA. Check the text and recording’s availability in your country. An old novel does not make every later audio production freely reusable.</p></QuestionSection>

      <QuestionSection question="What changes when you listen with one voice?"><p>Watson’s reports and diary entries are useful landmarks in the middle of the book. Listen for the way a section is introduced; the narrative can change form without changing to another character voice. If you lose the thread, check the chapter heading rather than assuming you have skipped audio.</p><p>LoudReader generates speech with the voice you select. It is not a full cast, and pronunciation or emphasis may occasionally need checking against the text. The linked LibriVox recording is a human performance. Compare them on a quiet scene as well as an exciting one: much of a mystery is conversation and observation.</p></QuestionSection>

      <QuestionSection question="How do you set it up for an offline evening?"><ol className="list-decimal pl-6 space-y-2"><li>For a recording, download the audio from the selected edition’s page and make sure it plays in your audio player.</li><li>For LoudReader, find the novel in the Gutenberg catalogue while connected and download the text. Finish any required voice download as well.</li><li>Start a chapter before disconnecting so you know the files are available locally.</li><li>If you stop during a report or conversation, note the chapter and return a little earlier next time.</li></ol><p>{FREE_TIER.full} LoudReader runs on iPhone and iPad; compatible Apple Silicon Macs can run the iPad build. Playback-speed control and the sleep timer are Premium features. Our <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">ebook listening guide</Link> covers importing a different supported file.</p></QuestionSection>

      <QuestionSection question="How long is this particular recording?"><p>The linked Laurie Anne Walden recording lists a runtime of <strong>5 hours 52 minutes 59 seconds</strong>. That is the duration of that edition, not a promise for every reading of the novel. Generated speech has a different runtime depending on voice and speed. Use chapter boundaries to plan breaks without interrupting the reveal of a clue.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook with a voice you choose" subline="Download the book and voice first, then listen on your device." />
    </ArticleLayout>
  );
}
