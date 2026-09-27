import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";
import ComparisonTable from "@/components/money/ComparisonTable";
import Disclosure from "@/components/blog/Disclosure";

import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);
export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>
        Look for <strong>synchronised word highlighting</strong>, not just an annotation tool. It marks the word being narrated so you can follow the text while listening. LoudReader does this in its reading view; Microsoft Word’s Immersive Reader, NaturalReader and Speechify also document read-along highlighting. The useful choice depends on where your material lives: a book file, a Word document or a webpage. Test a page of your own material before paying, especially if it is a scan or a complex PDF. A moving highlight can help you locate the current passage, but it does not guarantee better attention or comprehension.
      </p><Disclosure /></Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Check that the highlight follows narration, rather than merely marking a saved annotation." />
      <QuestionSection question="Which kind of highlighting do I need?">
        <p>Three features often share the same name. An <strong>annotation</strong> is a passage you mark for later. A <strong>line focus</strong> hides or dims surrounding text. <strong>Spoken-word highlighting</strong> moves as narration advances. Some readers combine all three; a product advertising highlighting may mean only one of them.</p>
        <p>For read-along use, check whether the app marks a word, a whole sentence or both. Also check whether the page follows automatically, whether you can return after scrolling away, and whether changing text size leaves the current word visible. These details matter more than a feature tick alone.</p>
      </QuestionSection>
      <QuestionSection question="Where can I find a read-along option?">
        <ComparisonTable caption="Documented read-along options, checked 28 September 2026" columns={["Option", "Documented highlighting", "Start by checking"]} highlightColumn={-1} rows={[
          {label:"Book files",cells:["LoudReader","Current sentence and spoken word in the reading view","Import your EPUB or PDF and inspect the extracted text"]},
          {label:"Word documents",cells:["Microsoft Word: Immersive Reader","Read Aloud highlights each word","Availability in your installed Word version"]},
          {label:"Web or mobile reader",cells:["NaturalReader Personal","Word, sentence or combined highlighting settings","Original document view versus Text View or captions"]},
          {label:"Browser pages",cells:["Speechify Chrome extension","Words highlighted along with the audio","The actual webpage and access needed for your chosen voice"]}
        ]} />
        <p>The feature descriptions come from <a href="https://support.microsoft.com/en-us/accessibility/word/use-immersive-reader-in-word" className="text-loudBlue hover:underline">Microsoft’s Word guide</a>, <a href="https://help.naturalreaders.com/en/articles/11585617-display-and-reading-appearance-personal-version" className="text-loudBlue hover:underline">NaturalReader’s display guide</a> and <a href="https://speechify.com/chrome/" className="text-loudBlue hover:underline">Speechify’s extension page</a>. We checked the documentation; this is not a hands-on benchmark of every app. Plans, supported files and interfaces vary, so inspect the current offer before subscribing.</p>
      </QuestionSection>
      <QuestionSection question="What should I test on my own document?">
        <ol className="list-decimal pl-6 space-y-2"><li><strong>Use a representative page.</strong> Include headings, a paragraph break and any tables or footnotes you need.</li><li><strong>Follow a full paragraph.</strong> Check whether the visible text matches the narration and whether the highlight is useful to you.</li><li><strong>Look away and return.</strong> See whether you can find the active passage without repeatedly scrolling.</li><li><strong>Inspect errors.</strong> If words are skipped or read in the wrong order, compare the extracted text with the original before blaming highlighting.</li></ol>
        <p>For scans, text recognition can introduce mistakes; columns and equations can be especially awkward. A clean EPUB may give a simpler reading view than a page designed for print. No highlight can correct text that the importer has read incorrectly.</p>
      </QuestionSection>
      <QuestionSection question="How does LoudReader handle it?">
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> highlights the current sentence and word while narrating supported DRM-free EPUBs and PDFs. Scanned PDFs can use on-device OCR, with results depending on legibility and layout. The app runs on iPhone and iPad, and on Apple Silicon Macs as an iPad app. Book libraries and reading positions do not automatically sync between devices.</p>
        <p>Word-following highlighting is free. {FREE_TIER.full} Adjustable playback speed is Premium. The studio voice collection covers ten languages, with availability depending on device; it is not English-only. If you have chosen a tool and want a routine for using it, see <Link href="/blog/read-and-listen-at-the-same-time" className="text-loudBlue hover:underline">how to read and listen at the same time</Link>.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try LoudReader on your own book" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
