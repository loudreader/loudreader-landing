import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";
import Disclosure from "@/components/blog/Disclosure";

import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);
export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>
        To read and listen together, use matching text and narration and keep the reading view visible. A text-to-speech reader can generate speech from your own supported ebook and highlight the current words. A paired ebook and audiobook can instead provide a recorded performance with synchronised text, where that combination is supported. You can also follow a print book manually, although it will not highlight or turn pages for you. Choose the route that fits the edition you have, then try a short section. Read-along is a way to use a book, not a promise that two channels will always improve learning.
      </p><Disclosure /></Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Match the text to the narration before trying to follow both together." />
      <QuestionSection question="What are the practical ways to read along?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Generate speech from an ebook.</strong> A TTS reader uses the same imported text for narration and highlighting. You need a supported, readable file and a voice that works for its language.</li>
          <li><strong>Use a supported ebook/audiobook pair.</strong> This preserves the purchased recording’s performance, with text synchronisation when the service supports those editions.</li>
          <li><strong>Follow a matching print or digital edition manually.</strong> This can work without a special feature. Check that the audio is unabridged and that the wording matches, especially for translations.</li>
        </ul>
        <p>Abridged recordings, different translations and editions with different introductions can drift apart. If you repeatedly lose your place, check that mismatch before trying to concentrate harder.</p>
      </QuestionSection>
      <QuestionSection question="How do I set up read-along in LoudReader?">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Import a supported DRM-free EPUB or PDF.</strong> For a scan, let the on-device OCR finish and inspect the text. A poor scan or complex layout can produce the wrong words or reading order.</li>
          <li><strong>Choose a suitable available voice.</strong> Use the book’s language. The voice list follows languages in your library or languages selected in Settings.</li>
          <li><strong>Press play with the reading view open.</strong> Follow the current sentence and word highlight. Try a comfortable text size and pause whenever you want to inspect a passage.</li>
          <li><strong>Try one short section first.</strong> If the moving highlight distracts you, try listening alone or reading quietly instead. There is no obligation to use both at once.</li>
        </ol>
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> runs on iPhone and iPad, and on Apple Silicon Macs as an iPad app. Word-following highlighting is free. {FREE_TIER.full} Speed adjustment is Premium. For choosing between tools, see <Link href="/blog/app-that-highlights-words-while-reading" className="text-loudBlue hover:underline">apps with spoken-word highlighting</Link>.</p>
      </QuestionSection>
      <QuestionSection question="Can I do this with Kindle and Audible?">
        <p>Audible now calls Whispersync for Voice <a href="https://www.audible.com/ep/read-listen" className="text-loudBlue hover:underline">Read &amp; Listen</a>. Supported ebook/audiobook pairs can show synchronised text in the Kindle or Audible app. You need both matching editions, and eligibility varies by title and marketplace. In Audible, look for the Read &amp; Listen badge and player toggle. Check eligibility before buying an additional edition; simply finding the same title in both stores is not enough.</p>
        <p>That route is useful when you want the existing recording. A TTS reader instead narrates supported text you import, without requiring a matching commercial audiobook. Neither route unlocks DRM-protected files for import into another app.</p>
      </QuestionSection>
      <QuestionSection question="Will reading and listening together help me learn more?">
        <p>It may suit your preferences, but a universal memory claim would go beyond the evidence. In <a href="https://journals.sagepub.com/doi/10.1177/2158244016669550" className="text-loudBlue hover:underline">Rogowsky, Calhoun and Tallal’s 2016 adult study</a>, the groups that read, listened, or did both did not differ significantly on comprehension and retention for the tested nonfiction material. That is one study, not a verdict for every learner or task.</p>
        <p>Try a short reading goal: follow an argument, locate an unfamiliar word or finish a scene. Afterwards, check whether you can explain it and whether the method felt manageable. If study is the aim, leave time for notes and review. Moving your eyes with a highlight is not itself evidence that you understood the text.</p>
      </QuestionSection>
      <QuestionSection question="What if the text and audio stop matching?">
        <p>Pause and compare the visible sentence with what you heard. In a TTS reader, inspect import or OCR errors. With a separate recording, check the edition and whether chapters, footnotes or introductory material differ. Restart from a sentence you can identify in both rather than trying to catch a running voice.</p>
        <p>For difficult phrasing, <Link href="/blog/slow-down-audiobook-speed" className="text-loudBlue hover:underline">reduce the speed briefly or pause</Link>. A clean source and an appropriate voice often matter more than finding a special read-along setting.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try LoudReader on your own book" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
