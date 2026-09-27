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
        <p>For a free English reading of <em>Crime and Punishment</em>, start with the translator’s name. <a href="https://www.gutenberg.org/ebooks/2554" className="text-loudBlue hover:underline">Project Gutenberg ebook #2554</a> uses <strong>Constance Garnett</strong>, and <a href="https://librivox.org/crime-and-punishment-by-fyodor-dostoyevsky/" className="text-loudBlue hover:underline">this LibriVox recording</a> uses Garnett too. LoudReader’s catalogue entry also points to #2554 and can read the ebook with a synthetic voice. That gives you a choice of human narration or generated speech, but neither route supplies every English translation of Dostoyevsky. If you want to listen while following a print copy, match the translator before comparing voices.</p>
        <Disclosure />
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Match the translation first; the same title can contain different English wording." />
      <QuestionSection question="Why does the translation matter more than the cover?"><p>A new translation can change names, phrasing and sentence structure. An audiobook may therefore tell the same story while failing to line up with your page. Garnett’s name is given on the Gutenberg listing; check your own title page for the corresponding credit.</p><p>Do not treat a nineteenth-century Russian novel as evidence that every English edition is free. The linked Gutenberg edition is listed as public domain in the USA. The rights to another translation or recording need separate checking, including in your country.</p></QuestionSection>

      <QuestionSection question="What can you listen to before choosing?"><p>The <Link href="/listen/crime-and-punishment" className="text-loudBlue hover:underline">LoudReader sample</Link> demonstrates a short passage of generated narration. It cannot show how every name or later dialogue will sound. Try a longer passage in the app if the opening suits you; pronunciation and emphasis can be imperfect.</p><p>The linked LibriVox edition lists volunteers by section and supplies recorded audio. Sample more than one section if changes of reader matter to you. This is a practical difference to consider, not a reason to assume that either human or synthetic narration is always clearer.</p></QuestionSection>

      <QuestionSection question="How do you keep the Russian names straight?"><p>Make a small name list as you meet characters. Start with Raskolnikov and add a relationship or role beside each new name. If the text uses a familiar form or a patronymic, record it next to the person rather than counting it as another character. Keep the spellings from your chosen translation.</p><ul className="list-disc pl-6 space-y-2"><li>Use a spoiler-free character list, or build your own from the chapters already read.</li><li>Finish a conversation before switching to another activity if several people are arguing.</li><li>When you miss who is speaking, return to the start of the exchange and follow the text. Replaying a line without its context may not resolve it.</li></ul><p>The aim is to reduce small points of confusion, not to turn a first listen into memorisation. You can always stop and read a difficult page.</p></QuestionSection>

      <QuestionSection question="How do you use the free ebook in LoudReader?"><ol className="list-decimal pl-6 space-y-2"><li>Install the app on iPhone or iPad, or use the iPad build on a compatible Apple Silicon Mac.</li><li>Find Crime and Punishment in the Gutenberg catalogue while online and download the book plus any required voice.</li><li>Check the title/translation, play the first chapter and choose a voice you can follow comfortably.</li><li>If you have a different legally obtained, DRM-free EPUB, import that instead and check its formatting before beginning.</li></ol><p>{FREE_TIER.full} Premium includes speed control; a paid plan is not required just to complete this English ebook. See the <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">ebook-to-speech guide</Link> for the import route.</p></QuestionSection>

      <QuestionSection question="Will another edition have the same runtime or page numbers?"><p>Usually you should not expect either to match. Narration speed, translation, introductions and chapter packaging affect duration. Record the part and chapter when changing between reading and listening. For a class discussion, quote from the required text rather than copying wording from a different translation.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try the ebook with a voice you choose" subline="Download the book and voice first, then listen on your device." />
    </ArticleLayout>
  );
}
