import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
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
        <p>You can listen to the prose in many textbooks, but the useful first step is checking the file, not pressing play on the whole semester. Import a supported DRM-free EPUB or PDF, compare a sample with the original and check whether headings, columns and footnotes appear in the right order. <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> provides on-device narration and highlighting, with an OCR fallback for scanned PDF pages. Recognition can make mistakes, and neither extracted text nor OCR turns a diagram or equation into a complete spoken explanation. Keep the original textbook available, and use audio for reading or revision alongside the exercises your course requires.</p>
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Listen to the prose; keep the original page for figures, notation and exercises." />
      <QuestionSection question="Which course files can you use?">
        <p>Start with a downloadable EPUB or PDF you are permitted to use in a reader app. A file on your course portal is not necessarily an unrestricted ebook: some publishers provide access only inside their own platform. LoudReader does not remove DRM or unlock a protected textbook.</p>
        <p>Download an authorised copy to Files, then import it into the app. If the material is in a word processor or slide deck, a PDF export may be an option, but inspect the result. A slide made of brief labels and arrows may depend on a lecturer&apos;s explanation and make little sense as continuous narration.</p>
        <p>When you cannot obtain a usable file, ask the library, course team or accessibility service about an accessible version. That can be more useful than repeatedly trying to convert a restricted or badly scanned copy. The <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">PDF import guide</Link> covers the iPhone workflow.</p>
      </QuestionSection>
      <QuestionSection question="What should you check before listening to a long chapter?">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Choose a representative page.</strong> Include a heading, ordinary prose and any columns or footnotes used throughout the book.</li>
          <li><strong>Compare reading order.</strong> Make sure the voice follows one paragraph before moving to another, rather than jumping across columns.</li>
          <li><strong>Check specialised content.</strong> Listen for names, abbreviations, units, minus signs and other symbols that could change the meaning when read incorrectly.</li>
          <li><strong>Find the figures in the original.</strong> Decide when to pause and inspect a diagram, table or worked example.</li>
          <li><strong>Try navigation and resume.</strong> Pause, leave the reader and return before relying on it during a commute or revision session.</li>
        </ol>
        <p>Being able to select text in a PDF is a useful starting sign, but it does not prove that extraction order or narration will be correct. Check what the reader actually imports.</p>
      </QuestionSection>
      <QuestionSection question="Can scanned textbooks be read aloud?">
        <p>LoudReader&apos;s PDF import includes an on-device OCR fallback for pages without usable text. It attempts to recognise the words in a scan; it cannot guarantee an accurate transcription. A clear, upright page is a better starting point than a blurred photograph with a curved margin.</p>
        <p>A single import processes at most 300 pages with OCR and reports when the result is partial. After import, check a short passage against the scan. Pay particular attention to numbers, unusual vocabulary, footnotes and mathematical notation. If the result is poor, seek a cleaner digital edition or accessible copy instead of treating an OCR mistake as part of the textbook. Figures and complex layouts still need the original page.</p>
      </QuestionSection>
      <QuestionSection question="How do you use audio for revision?">
        <p>Divide the work by what you need to do with the material. For an overview, listen to the introduction and section explanations. For a technical argument, sit with the original open. For a calculation, pause and work through it yourself.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Set a question first.</strong> Decide what this section should help you explain.</li>
          <li><strong>Pause at natural breaks.</strong> Summarise the point before looking back at the book.</li>
          <li><strong>Keep a short confusion list.</strong> Record the term or step you need to ask about, rather than making a transcript of everything.</li>
          <li><strong>Revisit selectively.</strong> Replay the passage connected to a missed question, then attempt the question again.</li>
        </ul>
        <p>Read-along highlighting can help you locate the current passage, but it cannot tell whether you understood it. If you want a way to check progress, see <Link href="/blog/can-you-learn-from-audiobooks" className="text-loudBlue hover:underline">learning from audiobooks</Link>.</p>
      </QuestionSection>
      <QuestionSection question="What do offline playback and the free tier include?">
        <p>Once the book and required voice files are available, narration runs on the device. Playback can continue with an iPhone or iPad screen locked. Import and test the chapter beforehand if you plan to listen without a connection.</p>
        <p>{FREE_TIER.full} Playback-speed control from 0.3x to 3.0x and the sleep timer require Premium. Notes and highlights are available without Premium. Check the in-app offer for your storefront&apos;s price.</p>
        <p>LoudReader runs on iPhone and iPad, with the iPad build available on compatible Apple Silicon Macs. Local narration does not mean the app has no network activity: diagnostics, analytics, downloads and purchases are separate. Follow your institution&apos;s rules before importing confidential or restricted material.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Start with one course chapter" subline="Import a supported PDF or EPUB, check the reading order and keep the original nearby." />
    </ArticleLayout>
  );
}
