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

export default function PictureOfDorianGrayAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>You can use the free English text of <em>The Picture of Dorian Gray</em> for a synthetic reading, where that edition is available for you to use. <a href="https://www.gutenberg.org/ebooks/174" className="text-loudBlue hover:underline">Project Gutenberg ebook #174</a> contains a preface and twenty chapters and is marked public domain in the US. That does not make every modern annotated edition or audiobook recording unrestricted. LoudReader reads an ebook with a synthetic voice; it is one listening option, not a human performance of Wilde’s dialogue. The <Link href="/listen/the-picture-of-dorian-gray" className="text-loudBlue hover:underline">Dorian Gray sample</Link> helps you judge whether the phrasing suits you before downloading the app and book.</p><Disclosure /></Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Check the text as well as the voice: Dorian Gray exists in different versions." />

      <QuestionSection question="Which version of Dorian Gray are you hearing?"><p>The <a href="https://www.gutenberg.org/ebooks/174" className="text-loudBlue hover:underline">edition linked here</a> has the preface followed by twenty chapters. Use that structure to identify the text instead of assuming every edition with the title is interchangeable. If your class or book group assigns a particular version, compare the contents and first page before you start.</p><p>A modern introduction, annotations or a recording can have separate terms from Wilde’s underlying text. <a href="https://www.gutenberg.org/policy/permission.html" className="text-loudBlue hover:underline">Project Gutenberg’s permissions guidance</a> limits its copyright determinations to the US. Check your country and the particular file; this page is not permission to reuse someone else’s audiobook.</p></QuestionSection>

      <QuestionSection question="How do you choose a voice for Wilde’s dialogue?"><p>Listen to the sample as a conversation. Can you follow which character is speaking without relying on a different performed voice for each one? Does the pacing give you enough space to understand a long sentence? Try a longer passage in the app if you want to hear how the voice handles irony and longer exchanges.</p><p>LoudReader’s synthetic speech follows the text, while a human narrator can make interpretive choices about irony and emphasis. If that interpretation is the main reason you want this novel in audio, sample a human recording available from your library or audiobook provider as well.</p></QuestionSection>

      <QuestionSection question="How do you start with the Gutenberg text?"><p>LoudReader is an iPhone and iPad app; its iPad build also runs on compatible Apple Silicon Macs.</p><ol className="list-decimal pl-6 space-y-2"><li>Hear the <Link href="/listen/the-picture-of-dorian-gray" className="text-loudBlue hover:underline">Dorian Gray sample</Link> to try one synthetic voice.</li><li>Install <a href="https://apps.apple.com/app/loudreader/id6758149478" className="text-loudBlue hover:underline">LoudReader</a> and search the in-app catalog for the novel by Oscar Wilde.</li><li>Download the ebook and any required voice resources. A catalog entry is not a preloaded book.</li><li>Open the text and start with the preface or first chapter. If you already have a permitted DRM-free EPUB of your chosen edition, import that instead.</li></ol><p>{FREE_TIER.full}</p><p>The <Link href="/voices" className="text-loudBlue hover:underline">voice page</Link> explains narrator choices. Playback speed control and the sleep timer are Premium features, rather than requirements for ordinary free listening.</p></QuestionSection>

      <QuestionSection question="What helps if you lose the thread?"><p>Return to the beginning of the exchange rather than repeatedly replaying an isolated sentence. Dialogue moves between Dorian, Basil and Lord Henry; following the written speech tags can be more helpful than expecting the audio to assign a different actor to each.</p><p>Keep the same text edition if you alternate reading and listening. Runtime depends on that edition and the chosen voice or recording, so use chapter boundaries for your plan. Before a trip, check that the downloaded book and voice play without the connection you used to obtain them.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Listen to a Dorian Gray sample" subline="Try the voice, then choose the edition you want to read." />
    </ArticleLayout>
  );
}
