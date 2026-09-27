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
        <p>Before starting a free <em>Frankenstein</em> audiobook, decide which text you need: <strong>1818 or the revised 1831 edition</strong>. This matters particularly for a class or reading group. Project Gutenberg offers separately identified copies of both. LoudReader’s <Link href="/listen/frankenstein" className="text-loudBlue hover:underline">catalogue entry and audio sample</Link> use its existing #84 reference; do not assume that this automatically matches an assigned 1818 edition. You can import the clearly labelled ebook you need and have it read aloud, or choose a human recording with the same edition credit. The voice and the version are two separate decisions.</p>
        <Disclosure />
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Walton, Victor and the creature: keep track of who is telling the story." />
      <QuestionSection question="Where do you find the right free edition?"><p>The <a href="https://www.gutenberg.org/ebooks/84" className="text-loudBlue hover:underline">Gutenberg #84 listing</a> explicitly points readers to improved editions: <a href="https://www.gutenberg.org/ebooks/41445" className="text-loudBlue hover:underline">#41445 for 1818</a> and <a href="https://www.gutenberg.org/ebooks/42324" className="text-loudBlue hover:underline">#42324 for 1831</a>. Choose the one named on your reading list. A cover that only says “Frankenstein” does not answer the edition question.</p><p>Gutenberg marks these ebooks as public domain in the USA. Check availability for your territory and chosen edition; a modern introduction or recording has its own rights. For a human reading, <a href="https://librivox.org/frankenstein-edition-1831-by-mary-shelley-wollstonecraft/" className="text-loudBlue hover:underline">this LibriVox entry identifies the 1831 edition</a>.</p></QuestionSection>

      <QuestionSection question="Why are there letters before Victor’s story?"><p>The opening belongs to the explorer Robert Walton. Victor’s account sits inside Walton’s correspondence, and the creature later tells a story within Victor’s. Those changes of speaker are part of the novel, not an audiobook ordering mistake.</p><ul className="list-disc pl-6 space-y-2"><li>At the opening, note who is writing and who is being addressed.</li><li>When the creature begins speaking, keep its account separate from Victor’s description of it.</li><li>If a chapter sounds like a sudden change of narrator, check the surrounding text before skipping ahead.</li></ul><p>A single synthetic voice will not reliably mark every change as a distinct character performance. Keeping the text nearby for transitions is more useful than expecting the voice to explain the frame for you.</p></QuestionSection>

      <QuestionSection question="What should you check in a voice sample?"><p>Listen to a paragraph with long sentences as well as a short exchange of dialogue. Notice whether the pauses help you follow the thought, and whether the voice becomes tiring at your usual volume. The web sample is a starting point; it is not a test of the entire novel.</p><p>A human recording also deserves a sample. Some listeners want a recognisable performance for Walton, Victor and the creature; others prefer one consistent reading voice. You do not need sound effects or a dramatization to hear Shelley’s text, but an adaptation should not be mistaken for the complete novel.</p></QuestionSection>

      <QuestionSection question="How do you load the chosen text?"><ol className="list-decimal pl-6 space-y-2"><li>Download the permitted EPUB of the edition you selected. EPUB is usually easier to follow as flowing text than a page scan.</li><li>Import it into LoudReader on iPhone or iPad, or the iPad build on a compatible Apple Silicon Mac. You can also download its existing Gutenberg catalogue entry if that is the copy you want.</li><li>Check the title, contents and first letters after import. Let any required voice download finish.</li><li>Play a passage before disconnecting. Once the book and voice are ready, speech can be generated on the device.</li></ol><p>{FREE_TIER.full} Speed control and the sleep timer are Premium features. For general file preparation, see <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">how to listen to an ebook</Link>.</p></QuestionSection>

      <QuestionSection question="How much listening time should you set aside?"><p>Use the chosen recording’s runtime or your app’s current estimate. Edition, reading speed and included front matter affect the total, so a single figure for “the Frankenstein audiobook” can be misleading. For a first listen, stop at a chapter boundary and note the current speaker before taking a break.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook with a voice you choose" subline="Download the book and voice first, then listen on your device." />
    </ArticleLayout>
  );
}
