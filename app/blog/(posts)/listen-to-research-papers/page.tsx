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
        <p>You can listen to a research paper, but first check what the reader extracted. Play a paragraph while looking at the original PDF, then test a column transition, a citation and a figure reference. Use audio for sections that make sense as prose and return to the page for equations, tables and exact quotations. LoudReader can import DRM-free PDFs, including attempting local OCR on scans, and generate narration on the device. Neither a successful import nor a fluent voice establishes that every part of the paper was captured accurately.</p>
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Check the extracted text against the paper before relying on the audio." />

      <QuestionSection question="What should I check in the first few minutes?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Confirm the paper title, version and date. Keep the original PDF and its source link alongside your listening copy.</li>
          <li>Compare a paragraph line by line with the narration. Watch for omitted lines or headers inserted into a sentence.</li>
          <li>Test the transition between columns and pages. A PDF that looks correct can still produce a poor reading order.</li>
          <li>Try a section containing a citation, a table and a figure reference. Decide which parts need to stay in a visual read.</li>
          <li>Check the end of the document and any import warning. Do not mistake a partial extraction for a complete paper.</li>
        </ol><p>The general <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">PDF listening guide</Link> explains importing; these checks are the extra step for material you may later cite.</p>
      </QuestionSection>

      <QuestionSection question="Can scanned papers work now?">
        <p>Yes. LoudReader attempts on-device OCR when a PDF has little usable embedded text. The current import pipeline limits OCR to 300 pages per import and can report partial results. This makes scans possible to try; it does not guarantee an accurate transcript of an old or complex document.</p><p>Inspect names, minus signs, decimal points and technical symbols closely. If a scan is skewed, faint or heavily annotated, look for a better source copy or correct the extracted text in a separate preparation workflow. Keep the original available for verification.</p>
      </QuestionSection>

      <QuestionSection question="What happens to equations, citations and figures?">
        <p>Do not rely on fluent narration to express mathematical layout or table relationships. An equation can be represented as text, glyphs or an image, and the resulting speech may be incomplete or misleading. A spoken “see Figure 2” still requires you to inspect Figure 2.</p><p>Citations and footnotes may interrupt the prose, and extraction can change their position. Test the actual file. This guide does not promise automatic academic parsing, reliable equation narration or perfect citation handling. For a result you plan to quote, check the original passage and page.</p>
      </QuestionSection>

      <QuestionSection question="Which sections should I listen to first?">
        <p>Start with a section whose purpose fits your session: the abstract for scope, the introduction for the question, or a discussion for the authors’ interpretation. That can help you decide what to examine next. It does not validate the method or evidence.</p><p>Keep a note of claims to inspect at your desk. For example: “Table 3—check comparison group” or “Discussion—does the limitation change the conclusion?” The companion <Link href="/blog/text-to-speech-for-researchers" className="text-loudBlue hover:underline">researcher workflow</Link> covers turning these flags into a manageable reading queue.</p>
      </QuestionSection>

      <QuestionSection question="What about confidential drafts or peer review?">
        <p>Follow the journal, institution or agreement that governs the document. Local speech reduces the need to send a manuscript to a speech service, but it is not a blanket confidentiality certification.</p><p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> generates speech and OCR on the device rather than uploading the paper for narration. It also includes crash/performance diagnostics and usage analytics, which is enabled by default with no visible disable switch in version 1.12. The <Link href="/private-text-to-speech-no-cloud" className="text-loudBlue hover:underline">privacy explanation</Link> separates local document processing from those other app services.</p>
      </QuestionSection>

      <QuestionSection question="How do I take a paper offline?">
        <p>Import it, let processing finish, open the voice you want and test the combination without a connection before leaving. Save enough identifying information to find the same source later. On iPhone, narration can continue with the screen locked.</p><p>If a file takes more work to repair than the listening pass is worth, read it visually or use a tool better suited to its layout. No app needs to be the right reader for every paper.</p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
    </ArticleLayout>
  );
}
