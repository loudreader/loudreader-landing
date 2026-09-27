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

export default function TheOdysseyAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>The translation matters as much as the narrator when choosing a free <em>Odyssey</em> audiobook. <a href="https://www.gutenberg.org/ebooks/1727" className="text-loudBlue hover:underline">Project Gutenberg ebook #1727</a> is Samuel Butler’s English prose translation, marked public domain in the US. It is not the Greek text, a modern verse translation or a reconstruction of an ancient performance. LoudReader can generate a synthetic reading of that ebook. Hear the <Link href="/listen/the-odyssey" className="text-loudBlue hover:underline">Odyssey sample</Link> first, and choose a different edition if you want verse or a translation specified by your course. Outside the US, check your local terms before downloading. This guide helps you choose the text and get it ready for listening.</p><Disclosure /></Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Samuel Butler’s English prose translation is one way to approach Homer’s epic." />

      <QuestionSection question="Which Odyssey translation does the catalog use?"><p>The <a href="https://www.gutenberg.org/ebooks/1727" className="text-loudBlue hover:underline">Gutenberg catalog identifies Samuel Butler as translator</a> and describes the edition as English prose. This is a useful distinction for listening: sentences in a prose translation do not reproduce the line breaks and verse choices of a different edition.</p><p>For study, use the translator your teacher specifies. For a first personal reading, compare the opening in a few editions you can lawfully access and pick the language you want to spend time with. Do not assume that a free text and a recording with the same title use the same translation. A recent translation may have separate rights even though the ancient work is old.</p></QuestionSection>

      <QuestionSection question="Where does the story begin?"><p>The opening focuses on the household in Ithaca and Telemachus, rather than immediately starting with the Cyclops. Let that opening establish the problem at home before expecting the better-known adventures. A chapter list helps you keep your place without reading summaries that reveal the outcome.</p><p>Butler’s prose lets you follow the action in continuous English sentences. If poetic rhythm is what interests you most, compare it with a verse translation before choosing your listening edition.</p></QuestionSection>

      <QuestionSection question="What should you listen for in a sample?"><p>Try a passage containing names and speech, not only a descriptive opening. Check whether you can distinguish the narration from quoted dialogue and whether unfamiliar names are understandable. Speech synthesis can mispronounce names; keep the text available when something sounds unclear.</p><p>LoudReader’s <Link href="/listen/the-odyssey" className="text-loudBlue hover:underline">catalog sample</Link> demonstrates a synthetic reading, while a performed audiobook offers a narrator’s interpretation. If you want a verse performance, choose a recorded verse translation deliberately; changing the app’s voice cannot turn Butler’s prose into another translator’s poem.</p></QuestionSection>

      <QuestionSection question="How do you prepare it for listening?"><p>LoudReader is an iPhone and iPad app; its iPad build also runs on compatible Apple Silicon Macs.</p><ol className="list-decimal pl-6 space-y-2"><li>Install <a href="https://apps.apple.com/app/loudreader/id6758149478" className="text-loudBlue hover:underline">LoudReader</a> and search for <em>The Odyssey</em> in its Gutenberg catalog.</li><li>Confirm that the ebook is the Butler translation, or import a permitted DRM-free EPUB of the edition you prefer.</li><li>Download the book and required voice resources. For travel, check downloaded playback before leaving a connection.</li><li>Start with one section. Runtime varies with the translation, voice and speed; use the selected edition’s estimate as a starting point for planning sessions.</li></ol><p>{FREE_TIER.full}</p><p>Premium adds playback speed control. See <Link href="/voices" className="text-loudBlue hover:underline">the available voices</Link> and the <Link href="/blog/project-gutenberg-audiobooks" className="text-loudBlue hover:underline">guide to Gutenberg listening</Link> for the app and file options. <a href="https://www.gutenberg.org/policy/permission.html" className="text-loudBlue hover:underline">Project Gutenberg’s permissions guidance</a> explains its US copyright scope.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Hear a sample of Butler’s Odyssey" subline="Try the voice, then choose the edition you want to read." />
    </ArticleLayout>
  );
}
