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
        <p>You can listen to <em>A Tale of Two Cities</em> through a free human recording or have an ebook read aloud. <a href="https://librivox.org/a-tale-of-two-cities-by-charles-dickens-2/" className="text-loudBlue hover:underline">LibriVox’s version 2</a> is one recorded option. LoudReader offers a different route: download the Gutenberg text and use an on-device synthetic voice. Its <Link href="/listen/a-tale-of-two-cities" className="text-loudBlue hover:underline">opening sample</Link> lets you try that sound before installing the app. Choose a version you enjoy listening to, then stay with it: Dickens moves between two cities, several households and different periods, so a familiar reading voice and clear chapter breaks are more useful than chasing the shortest runtime.</p>
        <Disclosure />
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Three books within one novel: use their chapter boundaries to plan a listen." />
      <QuestionSection question="Which free text are you hearing?"><p>LoudReader’s catalog entry points to <a href="https://www.gutenberg.org/ebooks/98" className="text-loudBlue hover:underline">Project Gutenberg ebook #98</a>, the English novel by Charles Dickens. Gutenberg labels this edition public domain in the USA. Outside the USA, check the edition’s status where you live; a catalogue listing is not worldwide clearance.</p><p>A text-to-speech reading follows that ebook. It is not a recording of a particular commercial narrator, and it does not include the introduction or annotations from a modern print edition. If you are reading for a course, compare the assigned edition’s contents before using the audio as your companion.</p></QuestionSection>

      <QuestionSection question="How do you keep track of the two cities?"><p>The contents divide the novel into three books: <em>Recalled to Life</em>, <em>The Golden Thread</em> and <em>The Track of a Storm</em>. Treat each as a useful checkpoint. When returning after a break, note the book and chapter rather than only a playback time; times change with the reader or speed setting.</p><ul className="list-disc pl-6 space-y-2"><li>Keep a short, spoiler-free list of the Manette family, Charles Darnay, Sydney Carton and the Defarges. Add details as you encounter them.</li><li>At a scene change, establish whether you are in London or Paris before continuing with another task.</li><li>If a long sentence loses you, replay the whole paragraph while looking at the text. Do not assume that every confusing passage is a voice problem.</li></ul></QuestionSection>

      <QuestionSection question="Should you choose a human recording or text-to-speech?"><p>Try the opening of both. A recorded narrator makes a fixed set of choices about dialogue, emphasis and pauses; text-to-speech generates a reading with the voice you select. Neither an opening sample nor a “natural voice” label guarantees that you will enjoy several hours of it.</p><p>The linked LibriVox page lists its chapter recordings and readers. Use those details to check whether you want that version. LoudReader is useful when you want the written text and generated speech together. Our <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">guide to reading ebooks aloud</Link> explains that workflow.</p></QuestionSection>

      <QuestionSection question="How do you prepare the book in LoudReader?"><ol className="list-decimal pl-6 space-y-2"><li>Install LoudReader on iPhone or iPad; its iPad build also runs on compatible Apple Silicon Macs.</li><li>While connected, find A Tale of Two Cities in the Gutenberg catalogue and download it. Let any required voice download finish.</li><li>Open the text and play a passage. Before travelling, test playback with the connection turned off so you know the files are ready.</li><li>Keep the same edition for your listening sessions and record the current book and chapter if you also use a print copy.</li></ol><p>{FREE_TIER.full} Premium adds features including playback-speed control and the sleep timer. The free voice allowance is separate from how long this novel takes to finish.</p></QuestionSection>

      <QuestionSection question="How long should you allow?"><p>There is no single runtime for the title. Human recordings differ, and generated narration depends on voice and playback speed. Use the duration shown for the recording you choose, or the app’s estimate as a planning aid. A chapter is a better stopping target than an arbitrary number of minutes when a conversation or scene is still unfolding.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook with a voice you choose" subline="Download the book and voice first, then listen on your device." />
    </ArticleLayout>
  );
}
