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
        <p><em>Jane Eyre</em> is available as a free <a href="https://librivox.org/jane-eyre-by-charlotte-bront/" className="text-loudBlue hover:underline">LibriVox human recording</a> and as an ebook that a text-to-speech app can read aloud. LoudReader’s <Link href="/listen/jane-eyre" className="text-loudBlue hover:underline">catalogue page</Link> has a short synthetic-voice sample, so you can hear that option before downloading the app. Choose based on the reading you want to hear: a recorded interpretation of Jane’s voice, or generated speech alongside the ebook. If you are using audio for a course, first check that it matches the text you have been asked to read.</p>
        <Disclosure />
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Follow Jane’s first-person account, and keep the chosen text close at hand." />
      <QuestionSection question="Which text does the free catalogue entry use?"><p>The LoudReader entry points to <a href="https://www.gutenberg.org/ebooks/1260" className="text-loudBlue hover:underline">Project Gutenberg #1260, Jane Eyre: An Autobiography</a>, by Charlotte Brontë. The title’s “Autobiography” describes the novel’s first-person form; it is not Brontë’s autobiography. Use the book’s chapter headings to match your place if your print copy has different page numbers.</p><p>Gutenberg lists its edition as public domain in the USA. A contemporary introduction, annotation or recording can have different rights. Check availability in your territory rather than assuming that every edition labelled Jane Eyre is freely downloadable.</p></QuestionSection>

      <QuestionSection question="What should you listen for in a sample?"><p>Jane narrates her own story, but the text also contains other people’s dialogue. Try a passage of each. Ask whether it is clear when narration changes into speech, and whether you find the voice comfortable for a longer session. The opening alone cannot show every accent, French phrase or emotional turn in the book.</p><p>A human recording provides the reader’s chosen delivery; generated speech lets you use the ebook with a selected synthetic voice. Either may suit you. We have not run a comparative listening test of the linked editions, so the samples are a better basis for your choice than a blanket quality ranking.</p></QuestionSection>

      <QuestionSection question="How do you listen without losing your place in the story?"><p>For a first listen, follow the sequence of Jane’s life instead of skipping ahead to Thornfield. The childhood and school chapters establish relationships and judgements that matter later. If you miss a scene, return to its beginning before looking up a plot explanation; many online summaries disclose later events.</p><ul className="list-disc pl-6 space-y-2"><li>Keep one edition for the whole read if you want audio and text to line up.</li><li>When taking notes for study, record the chapter and a few opening words of the passage; page numbers vary between editions.</li><li>Pause at a chapter boundary when possible. On returning, read the final paragraph you heard to recover the setting and speaker.</li></ul></QuestionSection>

      <QuestionSection question="How do you download it for LoudReader?"><ol className="list-decimal pl-6 space-y-2"><li>Install LoudReader on iPhone or iPad, or run its iPad build on a compatible Apple Silicon Mac.</li><li>Connect to the Gutenberg catalogue, find Jane Eyre and download the text. Let any voice download finish before you leave Wi-Fi.</li><li>Play a passage and check that the text is the edition you want. You may instead import a supported DRM-free EPUB that you are entitled to use.</li><li>Try playback after disconnecting if you plan to listen where there is no signal.</li></ol><p>{FREE_TIER.full} Premium adds playback-speed control and the sleep timer. You do not need those features simply to finish the novel. The <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">guide to listening to an ebook</Link> explains the import workflow.</p></QuestionSection>

      <QuestionSection question="Can audio replace the assigned printed edition?"><p>It can accompany your reading, but check what your course requires. A general ebook may omit the specific introduction, notes or page references used in class. For an essay, return to the required edition to check a quotation and citation. Listening is a way to encounter the novel, not evidence that two editions are interchangeable.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook with a voice you choose" subline="Download the book and voice first, then listen on your device." />
    </ArticleLayout>
  );
}
