import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import Tldr from "@/components/money/Tldr";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>The best voice for a classic is the one you can follow through that particular edition. Test a descriptive paragraph, a conversation and a passage with unfamiliar names before committing to a long book. Older spelling, verse, footnotes and long sentences can all need attention, but no single rule covers every author or speech engine. A TTS reader lets you hear an accessible ebook; a recorded performance may offer the interpretation you want. The text matters as much as the voice: check the translation, abridgement and formatting, not just the title on the cover.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Test the edition as well as the voice." />

      <QuestionSection question="What should a useful voice test include?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose a page from the middle of the book as well as the opening. A title page is a poor test of a novel.</li>
          <li>Listen for who is speaking in dialogue. Check whether quotation marks and paragraph breaks produce pauses you can follow.</li>
          <li>Try a long sentence and an unfamiliar name. Keep the text visible to distinguish a pronunciation problem from an unfamiliar word.</li>
          <li>Listen for several minutes. Pick the voice you find comfortable over a passage, rather than judging only its first sentence.</li>
        </ol><p>These are listening checks, not a claim that one app has measured accuracy on every classic. A name pronounced consistently but incorrectly may be tolerable for casual listening and unacceptable for language study.</p>
      </QuestionSection>

      <QuestionSection question="Why does the edition matter?">
        <p>Different editions can change spelling, paragraph breaks and notes. A translation can change the prose more substantially. A scan may contain recognition errors; an ebook may insert footnotes into the sentence being spoken. Before changing voices repeatedly, look at the text where playback goes wrong.</p><p>For verse, plays or heavily annotated editions, keep the page nearby. Line breaks, speaker labels and notes carry information that speech may not make clear. A reflowable EPUB is often a convenient listening copy, but check a sample instead of assuming its formatting is sound.</p>
      </QuestionSection>

      <QuestionSection question="How can I handle dense passages?">
        <p>Pause at a paragraph boundary and say to yourself what happened or what the sentence claims. If it is unclear, replay the passage with the text visible. Try a slower pace if your player offers it, but do not expect speed alone to resolve unfamiliar vocabulary or an argument you need to think through.</p><p>LoudReader includes word-following highlighting and saved position; adjustable playback speed is a Premium feature. The <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">import guide</Link> explains how to test your own EPUB or PDF.</p>
      </QuestionSection>

      <QuestionSection question="Where should I get a classic ebook?">
        <p>Start with a specific edition from a publisher, library or catalogue, then check that you can use its file in your reader. LoudReader provides in-app Gutenberg browsing, while <Link href="/listen" className="text-loudBlue hover:underline">our classics catalogue</Link> is a smaller selection with links and estimated listening times.</p><p>Project Gutenberg applies US copyright rules. Availability there does not establish that the same edition, translation or illustrations are unrestricted in your country. Read the ebook notice and <a href="https://www.gutenberg.org/policy/permission" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">Gutenberg’s permissions guidance</a> before downloading or reusing it.</p>
      </QuestionSection>

      <QuestionSection question="When would I choose a recorded performance instead?">
        <p>If interpretation is the attraction—comic timing, dramatic dialogue, poetry or a narrator you particularly enjoy—sample a recording. TTS is useful when you want to hear the ebook itself, choose a voice or follow its text as it is spoken. Neither choice has to cover every book you read.</p><p>This guide is published by the developer of <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>. We suggest trying the actual edition in whichever tool you already have before buying anything. A clean import and a voice you like are more useful than a universal “best voice” claim.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}
