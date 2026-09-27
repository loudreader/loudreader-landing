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
        <p>There are several ways to hear a Project Gutenberg title. Look for a volunteer recording on LibriVox, check the Open Audiobook Collection for a synthetic recording, or download a suitable ebook and use text-to-speech. The first two give you an existing performance or recording; a reader such as LoudReader generates speech from the text you import. Start with the title and edition you want, then choose the format. Project Gutenberg’s availability is based on US rules, so check the ebook notice and the position in your country rather than assuming every listed work is unrestricted worldwide.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Choose a particular edition, then choose how you want to hear it." />

      <QuestionSection question="When should I choose a volunteer recording?">
        <p><a href="https://librivox.org/pages/about-librivox/" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">LibriVox</a> publishes free recordings made by volunteers. Search for the title, language and reader, then sample a chapter. Some projects use one reader, while others divide chapters among several; choose the presentation you prefer.</p><p>A recording is convenient if you want audio files for an existing player. Check the edition and whether it is complete, especially if you intend to follow a separate ebook. The text and recording may use different translations or chapter divisions.</p>
      </QuestionSection>

      <QuestionSection question="What is the Open Audiobook Collection?">
        <p>The <a href="https://marhamilresearch4.blob.core.windows.net/gutenberg-public/Website/index.html" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">Project Gutenberg Open Audiobook Collection</a> is a collaboration involving Project Gutenberg, Microsoft and MIT. Its project page describes thousands of free, open audiobooks made with neural text-to-speech and automated ebook parsing.</p><p>It is a collection of existing recordings, so search for your title and sample the result. The project itself notes possible parsing and pronunciation errors. Playback functions such as saved position and speed depend on the player you use; they are not properties of an MP3 file.</p>
      </QuestionSection>

      <QuestionSection question="When is reading an ebook aloud a better fit?">
        <p>A TTS reader is useful when you want the text on screen, a selectable voice or an ebook for which you have not found a recording you like. It speaks the imported text rather than requiring a matching audio edition. The result still depends on the file and voice, especially around poetry, notes and unusual names.</p><p>This article is published by the developer of <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>. Our app includes Gutenberg browsing and downloads and can narrate supported EPUBs and PDFs locally. It does not mean the entire Gutenberg catalogue is already stored on your phone or that every title and language has been tested.</p>
      </QuestionSection>

      <QuestionSection question="What should I check about copyright and editions?">
        <p>Read the notice in the exact ebook, not just the age of the author. <a href="https://www.gutenberg.org/policy/license" className="text-loudBlue hover:underline" target="_blank" rel="noopener noreferrer">Gutenberg’s licence guidance</a> explains its US basis and that some items are distributed with permission rather than being unrestricted. A translation, introduction or illustration can have a different status from the underlying work. Check local rules before using the file.</p><p>Keep an edition note if you are following a class or book group: title, translator or editor, and catalogue link. The same novel can have substantially different wording in another edition, even when both covers use the same title.</p>
      </QuestionSection>

      <QuestionSection question="How do I start with LoudReader?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Find the book through in-app Gutenberg browsing or obtain a supported DRM-free EPUB/PDF you are entitled to use.</li>
          <li>Download or import it while online. Test several paragraphs and a chapter transition before a long session.</li>
          <li>Choose an available voice and check pronunciation of names. Keep the text visible if the edition has notes or unusual formatting.</li>
          <li>Before an offline trip, open the required voice and test the book without a connection.</li>
        </ol><p>Try every available voice for your first 8 hours of listening. Afterwards, a free English voice selection remains available with unlimited book listening. Speed adjustment and the sleep timer are Premium features. The <Link href="/listen" className="text-loudBlue hover:underline">website’s classics catalogue</Link> is a curated starting point, separate from the broader in-app catalogue.</p>
      </QuestionSection>

      <QuestionSection question="What if I specifically need an audio file?">
        <p>Start with a recording source and confirm that it offers the format your player accepts. Playing an ebook inside a TTS reader is not the same as obtaining an MP3 you can move between players. This guide does not promise audio export from LoudReader.</p><p>For the text-import route, see <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">turning an ebook into a listening copy</Link>. For classics with difficult prose, <Link href="/blog/read-and-listen-at-the-same-time" className="text-loudBlue hover:underline">following the text while listening</Link> can help you locate a word the voice made unclear.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}
