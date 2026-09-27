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

export default function SherlockHolmesAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p><em>The Adventures of Sherlock Holmes</em> is a collection of twelve cases, not the whole Holmes series. <a href="https://www.gutenberg.org/ebooks/1661" className="text-loudBlue hover:underline">Project Gutenberg ebook #1661</a> supplies the English text and marks it public domain in the US. Outside the US, check local terms. You can listen by downloading a recording or by having a text-to-speech app read the ebook. LoudReader uses the second approach: the <Link href="/listen/the-adventures-of-sherlock-holmes" className="text-loudBlue hover:underline">Sherlock Holmes sample</Link> is a synthetic voice, not an actor playing Holmes and Watson. Choose a voice you enjoy, then try one complete case before deciding whether you want the collection this way.</p><Disclosure /></Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Twelve separate cases make the collection easy to divide by story, without a fixed time commitment." />

      <QuestionSection question="Which Sherlock Holmes collection should you search for?"><p>Search for the full title, <em>The Adventures of Sherlock Holmes</em>, by Arthur Conan Doyle. Its contents begin with <em>A Scandal in Bohemia</em> and end with <em>The Adventure of the Copper Beeches</em>. A result labelled “Complete Sherlock Holmes” or <em>The Memoirs of Sherlock Holmes</em> is a different collection.</p><p>The <a href="https://www.gutenberg.org/ebooks/1661" className="text-loudBlue hover:underline">Gutenberg record</a> also points to an improved text edition, #48320, and an audio edition, #9551. Those are separate downloads. For audio, read the recording’s own terms: an old underlying story does not make every recording unrestricted. <a href="https://www.gutenberg.org/policy/permission.html" className="text-loudBlue hover:underline">Project Gutenberg’s permissions guidance</a> explains the US scope of Gutenberg’s copyright checks.</p></QuestionSection>

      <QuestionSection question="How do you judge a voice for a detective story?"><p>Listen for how easily you can follow Watson’s narration and the exchanges with clients. A clue may be a name, an address or a short phrase. If the voice mispronounces something, look at the text rather than guessing from the audio. A sample is useful, but it does not establish pronunciation quality throughout all twelve stories.</p><p>LoudReader generates narration from the text on your device; it is not a performed recording with an actor’s interpretation. If you prefer human narration, sample an edition offered by your library or audiobook provider and compare the same opening passage.</p></QuestionSection>

      <QuestionSection question="How do you get the stories ready in LoudReader?"><p>LoudReader is an iPhone and iPad app; its iPad build also runs on compatible Apple Silicon Macs.</p><ol className="list-decimal pl-6 space-y-2"><li>Install <a href="https://apps.apple.com/app/loudreader/id6758149478" className="text-loudBlue hover:underline">LoudReader from the App Store</a>.</li><li>Search the in-app Gutenberg catalog for the full collection title and confirm the author. Download the text; browsing the catalog does not mean the book is already stored.</li><li>Finish any required voice download, then play a passage. Check downloaded playback before relying on it offline.</li><li>Use the contents to choose a case. Stop at a story boundary if you want a self-contained session; the stories do not all take the same time.</li></ol><p>{FREE_TIER.full}</p><p>Playback speed control is a Premium feature. See the <Link href="/voices" className="text-loudBlue hover:underline">voice options</Link> before choosing a narrator for the rest of the collection.</p></QuestionSection>

      <QuestionSection question="Do you have to start with the first story?"><p>Reading in the printed order is a simple starting point, but these are separate cases rather than chapters of one mystery. If you already know the opening story, choose another from the contents. Avoid plot summaries if you want to preserve the solution.</p><p>Story length, voice and speed all affect the time needed for a case. Start one story, see how your chosen setup feels, and adjust your listening sessions from there. The <Link href="/blog/project-gutenberg-audiobooks" className="text-loudBlue hover:underline">Gutenberg listening guide</Link> explains the broader difference between downloading text and downloading audio.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a Sherlock Holmes passage" subline="Try the voice, then choose the edition you want to read." />
    </ArticleLayout>
  );
}
