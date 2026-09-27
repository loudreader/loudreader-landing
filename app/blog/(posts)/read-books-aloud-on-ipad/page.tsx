import Link from "next/link";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, FREE_TIER } from "@/components/money/site";
import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>An iPad gives you room to follow a book while it is read aloud. In LoudReader, import a DRM-free EPUB or PDF, choose a voice available on your device and press play. Word highlighting helps you locate the current passage; you can also listen without keeping the text in view. The larger screen may suit your desk or reading chair, but it does not guarantee better comprehension or less eye strain. Start with comfortable text size and a short session. The app requires iPadOS 18 or later, and voice availability depends on hardware: do not assume every iPad offers the full studio voice roster.</p>
      </Tldr>
      <ArticleIllustration variant="devices" caption="Keep the source text nearby for names, figures and passages you want to revisit." />
      <QuestionSection question="How do I start with a book I already own?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Install <a href={APP_STORE_URL} className="text-loudBlue hover:underline">LoudReader</a> and open it once.</li>
          <li>Choose an EPUB or PDF through the import picker. Make sure a file stored in a cloud drive has downloaded completely.</li>
          <li>Open a representative passage, including any unusual names or formatting, and press play.</li>
          <li>Adjust the reading view for a comfortable distance, then check that pausing and reopening keep you near the passage you expect.</li>
        </ol>
        <p>If the file is protected by a bookshop or lending service, its own reading app may be required. LoudReader does not remove DRM. Our <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">import and playback guide</Link> covers the supported file workflow.</p>
      </QuestionSection>
      <QuestionSection question="What works well on a larger screen?">
        <p>You can keep more surrounding text visible while listening, inspect an illustration, or pause to compare two passages. Those are practical reasons to choose an iPad over a phone. Increase the type size rather than fitting as much text as possible onto each page.</p>
        <p>For a novel, you might use the text only when a name is unfamiliar. For a paper, keep the original PDF available so you can inspect a figure or table that narration cannot explain. A voice reads the extracted words; it does not interpret a chart or check the author&apos;s argument.</p>
      </QuestionSection>
      <QuestionSection question="How can I use it for a study session?">
        <p>Pick a short section and decide what you want to understand before starting. Pause at its end, write a brief summary, then return to the source to check it. If listening makes it harder to follow an equation or dense paragraph, switch to silent reading for that part.</p>
        <p>You can take notes in another app or on paper. Multitasking controls depend on the iPad model, iPadOS version and app behaviour, so we do not promise a particular Split View or external-display layout. Test the arrangement you want to use. Simultaneous audio and text is an option to evaluate, not a guaranteed memory improvement.</p>
      </QuestionSection>
      <QuestionSection question="What should I check with scanned PDFs?">
        <p>LoudReader includes local text recognition for image-based PDFs. Clear scans of ordinary paragraphs are a better starting point than handwriting, faint photocopies or complex columns. Listen to the opening and a page from the middle to catch missing words or a wrong reading order.</p>
        <p>The OCR path processes at most 300 pages per import and can return partial results. For a difficult document, compare against the original or prepare a cleaner file. The <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">PDF listening guide</Link> also applies to the core import workflow on iPad.</p>
      </QuestionSection>
      <QuestionSection question="What is free, and what still needs a connection?">
        <p>{FREE_TIER.full} Adjustable speed and the sleep timer are Premium features. Notes and ordinary word highlighting are not Premium-only. The full studio roster should not be assumed available on every iPad.</p>
        <p>Once your book and chosen voice are ready, narration runs locally. Downloading new material or managing purchases needs a connection. The app also includes crash diagnostics and usage analytics, enabled by default in version 1.12; local speech is not a claim that the entire app sends no data. Before travelling, check the specific book and voice while disconnected.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a book in LoudReader" subline="Import a DRM-free EPUB or PDF and choose a voice available on your device." />
    </ArticleLayout>
  );
}
