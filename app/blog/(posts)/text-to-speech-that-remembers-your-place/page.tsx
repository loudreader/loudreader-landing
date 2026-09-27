import Link from "next/link";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>LoudReader automatically saves reading progress for books in its local library. During narration, the saved information includes a sentence position, so reopening a book can return you to a specific passage rather than requiring you to start a chapter again. You do not need to set a manual bookmark just to record where you stopped. That is a convenience, not a guarantee against every crash, changed file or app update. Keep the same imported copy, pause before a planned break and check your position when you return. Progress belongs to that device; opening the same source file on another device does not transfer it.</p>
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Reopen the same local book and check the passage before continuing." />
      <QuestionSection question="What does the app save?">
        <p>The book record stores a reading location and a sentence anchor for playback. As the reading position changes, the app updates the stored location; normal playback shutdown also captures the current sentence. On resume, the playback code prefers a compatible saved sentence anchor and has a location-based fallback when one is not available.</p>
        <p>For the reader, the useful result is simple: you can close a book and come back to where the app recorded your progress. It is not a separate list of favourite passages or a replacement for notes you want to keep for study.</p>
      </QuestionSection>
      <QuestionSection question="How should I stop and resume a listening session?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Pause at a convenient point if you know you are about to stop.</li>
          <li>Return to the same book in the library when you are ready.</li>
          <li>Listen briefly or look at the surrounding text to check the resumed passage.</li>
          <li>If you need more context, move back before continuing.</li>
        </ol>
        <p>A sentence can be a useful technical anchor without being the ideal place to understand a story again. After a long break, replaying a paragraph or rereading the chapter heading can be more helpful than demanding an exact audio timestamp.</p>
      </QuestionSection>
      <QuestionSection question="What changes when I read silently?">
        <p>The reader stores a location while you navigate the text, while the playback path also uses sentence anchors. Treat these as related ways of locating a passage, not a promise that every scroll updates an exact spoken-word timestamp.</p>
        <p>If you switch from listening to silent reading, check the highlighted passage. When you return to narration, confirm it starts where you expect. This small habit is useful with dense material, where you may have looked back several pages without intending to restart the listening session there.</p>
      </QuestionSection>
      <QuestionSection question="Why might I return to a slightly different place?">
        <p>An abrupt interruption can happen before the latest state is persisted. An updated text-segmentation scheme may need the location fallback rather than an older sentence anchor. Removing and reimporting a book creates a different situation from reopening the same library item.</p>
        <p>If a repeatable problem occurs, note the app version, file type and the sequence of actions. Test with a harmless sample before sharing a private document. Keep an original copy of important source files; saved progress is not a backup of the book or a guarantee that deleted library data can be recovered.</p>
      </QuestionSection>
      <QuestionSection question="Will my place follow me to another device?">
        <p>No. LoudReader does not automatically sync its library or reading position. The other device starts with its own local copy, even if both copies came from the same iCloud Drive file. Note a chapter and distinctive phrase when switching devices.</p>
        <p>For initial setup, see <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">the import-and-listen guide</Link>. For a portable session, <Link href="/blog/read-aloud-screen-off-iphone" className="text-loudBlue hover:underline">screen-off listening on iPhone</Link> explains the controls. Local progress also does not mean the whole app has no network services: the <Link href="/privacy" className="text-loudBlue hover:underline">privacy policy</Link> covers diagnostics and analytics separately.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Pick up your next chapter" subline="Import a book, listen and try returning to the saved passage." />
    </ArticleLayout>
  );
}
