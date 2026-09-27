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
        <p>A free English reading of <em>Meditations</em> is a reading of a particular translation, not a single definitive version of Marcus Aurelius. LoudReader’s catalogue points to <a href="https://www.gutenberg.org/ebooks/2680" className="text-loudBlue hover:underline">Project Gutenberg ebook #2680</a>. Its notes identify <strong>Meric Casaubon’s translation</strong>; it is not the George Long translation or a recent English edition. You can hear a generated-voice sample on the <Link href="/listen/meditations" className="text-loudBlue hover:underline">LoudReader book page</Link>. Start by checking whether this older English wording suits you. If you already own another supported, DRM-free edition, you can use that instead.</p>
        <Disclosure />
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="A short section, a pause and the text beside you: one way to listen to Meditations." />
      <QuestionSection question="Which translation is the free text?"><p>The notes in <a href="https://www.gutenberg.org/ebooks/2680" className="text-loudBlue hover:underline">Gutenberg #2680</a> describe a text prepared from editions of Casaubon’s translation. Its older forms of English are part of that choice of text. A different translation may express the same passage differently, so check the translator when a familiar quotation does not match what you hear.</p><p>The antiquity of Marcus Aurelius’s writing does not make every modern English translation free. Gutenberg lists #2680 as public domain in the USA; check the edition’s status in your country. For a recording elsewhere, check both the translator credit and the reader rather than relying on the title alone.</p></QuestionSection>

      <QuestionSection question="Where should you begin listening?"><p>This ebook contains an introduction, twelve books, an appendix, notes and a glossary. If you want to begin with Marcus’s reflections, use the contents to find Book I rather than assuming the first audio is the main work. You can return to the introductory material when you want more context.</p><p>A useful first session is one short section followed by a pause. Put the point into your own words and check the text if an old expression is unclear. You do not have to finish a whole book in one sitting, and there is no benefit in increasing speed merely to reach the end.</p></QuestionSection>

      <QuestionSection question="Does the lack of a plot make it effortless to follow?"><p>No. Short reflections can still make demanding arguments. Missing a sentence may change how you understand the next one. Treat listening as a way to return to the ideas, not background sound that guarantees comprehension.</p><ul className="list-disc pl-6 space-y-2"><li>Keep the book and section reference when a passage interests you.</li><li>Replay a complete section before isolating a sentence as a quotation.</li><li>When wording is obscure, read it on screen or compare another translation you can access. A different voice cannot remove difficulty in the source text.</li></ul><p>For notes shared with a reading group, include the translator’s name. That gives others a chance to find your passage even when their wording and section divisions differ.</p></QuestionSection>

      <QuestionSection question="How do you prepare a local reading in LoudReader?"><ol className="list-decimal pl-6 space-y-2"><li>Install LoudReader on iPhone or iPad; compatible Apple Silicon Macs can run the iPad build.</li><li>While connected, download Meditations from the Gutenberg catalogue and finish any required voice download.</li><li>Open the contents and choose the section you want. Play a short passage before taking the book offline.</li><li>If you prefer another legally obtained DRM-free EPUB, import it and check the translator credit and contents after import.</li></ol><p>{FREE_TIER.full} Premium includes speed control and the sleep timer. The <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">ebook-to-speech guide</Link> covers the same preparation for other supported books.</p></QuestionSection>

      <QuestionSection question="Should you choose a synthetic or human reading?"><p>Try a passage that you find difficult on the page. A recorded reader’s phrasing may help, while generated speech gives you a reading of your chosen ebook with a selected voice. Pronunciation, pauses and your tolerance for the sound matter more than a general claim that philosophy suits one kind of narrator.</p><p>A total runtime is less useful here than a repeatable session you actually follow. Front matter and notes can also account for a substantial difference between editions. Check what is included before treating two durations as a comparison of reading speed.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook with a voice you choose" subline="Download the book and voice first, then listen on your device." />
    </ArticleLayout>
  );
}
