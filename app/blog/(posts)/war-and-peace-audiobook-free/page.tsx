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

export default function WarAndPeaceAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>A free text-to-speech route to <em>War and Peace</em> is the English translation by Louise and Aylmer Maude in <a href="https://www.gutenberg.org/ebooks/2600" className="text-loudBlue hover:underline">Project Gutenberg ebook #2600</a>. Gutenberg marks that edition public domain in the US; readers elsewhere need to check local terms. LoudReader reads the downloaded text using a synthetic voice, with a runtime that depends on the voice and speed. Before beginning, hear the <Link href="/listen/war-and-peace" className="text-loudBlue hover:underline">War and Peace sample</Link> and check that this is the translation you want. A modern translation, an abridgement and a performed audiobook may all differ from this edition despite sharing the same title.</p><Disclosure /></Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Choose a translation you want to stay with before committing to a long listening project." />

      <QuestionSection question="Which War and Peace translation is available?"><p>The <a href="https://www.gutenberg.org/ebooks/2600" className="text-loudBlue hover:underline">Gutenberg record</a> credits both Louise and Aylmer Maude. Their English translation makes choices about names, dialogue and wording that can differ from other editions.</p><p>If you already own another translation, compare a page before switching between it and the audio. Different spellings or wording may make it harder to match your place. For a course or reading group, keep the assigned edition where possible. <a href="https://www.gutenberg.org/policy/permission.html" className="text-loudBlue hover:underline">Project Gutenberg’s permissions guidance</a> explains the US scope of its copyright review; newer translations and recordings have their own terms.</p></QuestionSection>

      <QuestionSection question="How do you keep track of the names?"><p>Make a short personal list as people appear, grouping names by household instead of attempting to memorise the entire cast before starting. Note alternative forms of a name when the text gives them. Avoid a plot-heavy online character guide if you do not want spoilers.</p><p>When a name is unclear in the audio, look at the sentence on screen. Synthetic pronunciation is not an authoritative guide to Russian names, and the app does not assign an actor to every character. A human narrator may offer more distinctive characterisation; sample one if that would make the book more enjoyable for you.</p></QuestionSection>

      <QuestionSection question="How long should you plan to listen?"><p>This is a substantial novel, but its runtime depends on the edition, speech rate and pauses. A duration inferred from a word count is different from a measured recording. Listen to a chapter in the voice you intend to keep and plan regular sessions around your own pace.</p><p>Use the book’s existing part and chapter divisions as stopping points. If you have missed a conversation, returning to its beginning may be more useful than increasing speed to catch up. Premium speed control can change the pace, but finishing faster is not useful if the cast and setting stop making sense.</p></QuestionSection>

      <QuestionSection question="How do you prepare the book in LoudReader?"><p>LoudReader is an iPhone and iPad app; its iPad build also runs on compatible Apple Silicon Macs.</p><ol className="list-decimal pl-6 space-y-2"><li>Try the <Link href="/listen/war-and-peace" className="text-loudBlue hover:underline">catalog sample</Link> to hear one synthetic voice.</li><li>Install <a href="https://apps.apple.com/app/loudreader/id6758149478" className="text-loudBlue hover:underline">LoudReader</a> and find <em>War and Peace</em> in the in-app Gutenberg catalog. Confirm the Maude translation.</li><li>Download the book and any required voice resources. For offline listening, check the downloaded book and selected voice before travelling.</li><li>Alternatively, import a permitted DRM-free EPUB of your preferred translation. Do not assume a DRM-protected purchase can be imported.</li></ol><p>{FREE_TIER.full}</p><p>The <Link href="/voices" className="text-loudBlue hover:underline">voice guide</Link> lists narrator choices. Premium includes playback speed control from 0.3x to 3.0x; the <Link href="/blog/project-gutenberg-audiobooks" className="text-loudBlue hover:underline">Gutenberg listening guide</Link> explains the text and recording routes.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a passage of War and Peace" subline="Try the voice, then choose the edition you want to read." />
    </ArticleLayout>
  );
}
