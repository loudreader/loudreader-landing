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

export default function MonteCristoAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>For a free text-to-speech reading of <em>The Count of Monte Cristo</em>, start by checking the edition. <a href="https://www.gutenberg.org/ebooks/1184" className="text-loudBlue hover:underline">Project Gutenberg ebook #1184</a> is an English text attributed to Alexandre Dumas and Auguste Maquet; its catalog record does not identify a translator. It is marked public domain in the US, which is not a blanket clearance for other territories or newer translations. LoudReader can speak the downloaded text with a synthetic voice. The <Link href="/listen/the-count-of-monte-cristo" className="text-loudBlue hover:underline">Monte Cristo sample</Link> lets you try that voice before starting a long novel. If a particular translation or an actor’s performance matters most, choose the listening edition on that basis first.</p><Disclosure /></Tldr>

      <ArticleIllustration variant="book-to-audio" caption="For a long novel, choose the translation before choosing the listening schedule." />

      <QuestionSection question="Which English translation are you getting?"><p>The <a href="https://www.gutenberg.org/ebooks/1184" className="text-loudBlue hover:underline">Gutenberg listing</a> is clear about language and ebook number, but does not name a translator. We therefore identify it as ebook #1184 rather than assigning a translator or claiming it matches a modern edition. The underlying French work, an English translation and a particular recording are different things to check.</p><p>If you are reading with a book group, compare a paragraph and the chapter headings with the group’s edition. Different wording may indicate a different translation, not a fault in speech. If you need an exact modern translation, obtain a permitted copy of that edition; the age of the original does not settle its availability.</p></QuestionSection>

      <QuestionSection question="Is it an unabridged audiobook?"><p>Text-to-speech reads the text supplied to the app. That does not by itself prove a translation is unabridged relative to Dumas’s French original. Gutenberg #1184 has a long chapter sequence, but chapter count alone is not a scholarly completeness check. This guide makes no claim that it reproduces every passage of a particular French or modern English edition.</p><p>For a commercial or library recording, check the stated translator and whether the listing says “unabridged” or “abridged”. For an ebook, inspect the title page and editorial notes. This is more useful than comparing two runtimes and assuming the longer one must be complete.</p></QuestionSection>

      <QuestionSection question="How can you make a long listen manageable?"><p>Start with a chapter to get a feel for the pace. Speech rate and the chosen text change the total time. Decide on a regular listening slot and let chapter boundaries provide useful stopping points; there is no need to rush through every section at the same pace.</p><p>Keep a short personal list of names and aliases as they appear, without searching ahead for spoilers. When the setting or cast changes, read the opening paragraph on screen before continuing. A synthetic voice may not make each speaker distinctive, so the written dialogue tags remain useful.</p><p>Try the <Link href="/listen/the-count-of-monte-cristo" className="text-loudBlue hover:underline">sample reading</Link> and then a chapter in your chosen voice. If you prefer an actor’s handling of the dialogue, sample a recorded edition instead.</p></QuestionSection>

      <QuestionSection question="How do you load it in LoudReader?"><p>LoudReader is an iPhone and iPad app; its iPad build also runs on compatible Apple Silicon Macs.</p><ol className="list-decimal pl-6 space-y-2"><li>Install <a href="https://apps.apple.com/app/loudreader/id6758149478" className="text-loudBlue hover:underline">LoudReader</a> and search the in-app Gutenberg catalog for the title.</li><li>Check the English edition and download it, or import your own permitted DRM-free EPUB.</li><li>Allow any voice resources to download before listening. For offline travel, check playback with the selected book and voice beforehand.</li><li>Start with the opening chapter and keep the same edition when moving between text and audio.</li></ol><p>{FREE_TIER.full}</p><p>Premium includes speed control from 0.3x to 3.0x. Increase it only while you can comfortably follow the names and dialogue. <Link href="/blog/project-gutenberg-audiobooks" className="text-loudBlue hover:underline">The Gutenberg listening guide</Link> covers text and audio downloads; <a href="https://www.gutenberg.org/policy/permission.html" className="text-loudBlue hover:underline">Project Gutenberg’s permissions guidance</a> explains the territorial limitation.</p></QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Sample The Count of Monte Cristo" subline="Try the voice, then choose the edition you want to read." />
    </ArticleLayout>
  );
}
