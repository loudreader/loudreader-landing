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
        <p>Yes, you can learn from audiobooks. Whether you remember a chapter depends on the material, your attention and what you do with it afterwards. Listening can work well for a continuous explanation; a diagram, equation or worked example may still need the page. Research does not establish that every reader learns equally well in every format, or that reading and listening together automatically doubles learning. A useful test is simple: pause after a short section, explain its main point without the book, then check your explanation. Use audio for the parts it handles well and keep the original available for the parts it cannot convey.</p>
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Listen to an explanation, then check what you can explain back." />
      <QuestionSection question="What does the research actually compare?">
        <p>A <a href="https://journals.sagepub.com/doi/10.1177/2158244016669550" className="text-loudBlue hover:underline">2016 study by Rogowsky, Calhoun and Tallal</a> assigned 91 adults to listen, read an electronic text, or do both. For the selected non-fiction material, comprehension tests immediately afterwards and two weeks later showed no statistically significant differences between groups.</p>
        <p>That is evidence from one task, not proof that formats are interchangeable. It does not establish that listening while distracted matches focused reading, or that audio alone is sufficient for technical study. It also did not find a comprehension advantage for combining the two formats. Choose based on your task and check your own understanding.</p>
      </QuestionSection>
      <QuestionSection question="Which parts of a book need the page?">
        <p>Separate continuous prose from information whose layout carries meaning. A history chapter can often be followed in sequence. A proof may depend on notation you need to inspect, and a table may need comparison across rows rather than a stream of numbers.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Diagrams and graphs:</strong> pause when the author refers to a figure. Look at it alongside the explanation, including labels and units.</li>
          <li><strong>Equations, code and worked examples:</strong> keep the original visible and do the steps yourself. A voice can misread symbols or punctuation.</li>
          <li><strong>Reference material:</strong> use search or the contents to locate the exact passage. Listening from the beginning is rarely the quickest way to check one definition.</li>
          <li><strong>Dense arguments:</strong> replay a paragraph or return to its written form when the connections are unclear. There is no prize for finishing without pausing.</li>
        </ul>
      </QuestionSection>
      <QuestionSection question="How can you tell whether you are learning?">
        <p>Try this routine with one section rather than committing to an entire course in audio:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Before listening, write one question you expect the section to answer.</li>
          <li>Listen to a manageable passage at a pace you can follow. Pause at a natural heading or example.</li>
          <li>Without looking, explain the answer in your own words. For a practical subject, attempt a problem or apply the idea to a new example.</li>
          <li>Check against the text. Revisit the missing step, rather than replaying the entire chapter automatically.</li>
          <li>Check again on another day. Familiar-sounding narration is not the same thing as being able to explain it.</li>
        </ol>
        <p>This is a way to inspect your progress, not a promise about grades. Notes can be on paper or in whatever system you already use. You do not need a specialised app to begin.</p>
      </QuestionSection>
      <QuestionSection question="Should you speed up or read along?">
        <p>Start near normal speed, then change one thing at a time. If you repeatedly lose the argument or miss unfamiliar terms, pause, slow down or use the page. There is no universal speed threshold that makes every subject easy or impossible to learn.</p>
        <p>Reading along can help you locate a name or check spelling. Audio alone can suit a passage you already understand. Try both with comparable sections and judge by your recall or worked answers, rather than assuming that two simultaneous formats must be better.</p>
        <p>Give unfamiliar material your attention. If another activity makes you miss the book, choose a less demanding listening task or save the chapter for later. Driving and other safety-critical tasks take priority over study.</p>
      </QuestionSection>
      <QuestionSection question="How do you turn your own books into listening material?">
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> reads supported DRM-free EPUB and PDF files with on-device narration and read-along highlighting. It runs on iPhone and iPad, with the iPad build available on compatible Apple Silicon Macs. Check a representative passage after import, especially if the file contains columns, tables or scanned pages.</p>
        <p>{FREE_TIER.full} Playback-speed adjustment is a Premium feature. Narration runs locally once the necessary files are available; this is separate from app diagnostics and analytics.</p>
        <p>For course material, the <Link href="/blog/listen-to-textbooks" className="text-loudBlue hover:underline">textbook listening workflow</Link> explains how to check the imported text and keep diagrams available during revision.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try one chapter, then check your understanding" subline="Import a supported EPUB or PDF and choose whether to listen, read along or switch between the two." />
    </ArticleLayout>
  );
}
