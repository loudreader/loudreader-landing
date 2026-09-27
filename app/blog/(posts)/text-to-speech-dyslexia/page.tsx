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
        <p>Text-to-speech can be an access tool for some people with dyslexia: it offers spoken access to a text that would otherwise require visual decoding throughout. It is not a cure or a replacement for reading instruction. Research on read-aloud support suggests a comprehension benefit on average, but does not establish that every reader needs the same voice, highlighting or app. Try a short piece of your actual reading, compare audio alone with reading along, and check both understanding and effort. For school use, include the learner and the relevant support team in that choice. This guide is published by LoudReader&apos;s developer and includes our app alongside other options.</p>
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Try support with the text and task you need to use, rather than a generic demo." />
      <QuestionSection question="What does the research show?">
        <p>A <a href="https://pubmed.ncbi.nlm.nih.gov/28112580/" className="text-loudBlue hover:underline">meta-analysis by Wood, Moxley, Tighe and Wagner, published in 2018</a>, examined text-to-speech and related read-aloud tools for students with reading difficulties. It reported an average standardised effect of 0.35 on reading comprehension, with results varying across studies.</p>
        <p>That number is not a percentage improvement or a promise about one student. The analysis covered different read-aloud approaches, not a test of LoudReader. The authors called for stronger research on who benefits and under which conditions. It does not establish that word highlighting by itself improves decoding skill.</p>
      </QuestionSection>
      <QuestionSection question="How can you try it without assuming what a reader needs?">
        <p>Choose a short, representative passage at the level the learner needs to access. Explain the controls, then let them try audio alone and audio with the text visible. Ask what helps and what gets in the way; some people welcome highlighting, while others may prefer fewer visual changes.</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Check the imported text against the original so layout errors are not confused with a reading difficulty.</li>
          <li>Choose a voice and pace the reader can follow, and show how to pause or replay.</li>
          <li>After a section, ask the learner to explain the idea or answer the same kind of question their task requires.</li>
          <li>Notice effort as well as correctness. Ask whether the process feels manageable enough to use again.</li>
          <li>Try a second real document before choosing a long-term tool.</li>
        </ol>
        <p>This is a practical comparison, not a diagnostic test. For formal teaching, support plans or assessment accommodations, work with the appropriate school or professional team.</p>
      </QuestionSection>
      <QuestionSection question="Which features are useful to compare?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Control:</strong> can the reader pause, return to a passage and change the pace without losing the task?</li>
          <li><strong>Presentation:</strong> try highlighting and text settings rather than assuming a single layout suits everyone.</li>
          <li><strong>Real files:</strong> check a school PDF or book, including its columns, footnotes and any scanned pages.</li>
          <li><strong>Access and cost:</strong> make sure the required voice, language and controls remain available after a trial.</li>
          <li><strong>Device and privacy requirements:</strong> check the equipment the learner actually uses and the institution&apos;s policies.</li>
        </ul>
        <p>Word highlighting can show where narration is happening. That is a navigation feature, not proof that it resolves dyslexia or that losing a line explains every reader&apos;s difficulty.</p>
      </QuestionSection>
      <QuestionSection question="Which existing tools are worth checking first?">
        <p>If a school or workplace already provides a tool, start by finding out what it can do. Access, training and compatibility with everyday documents may matter more than a long list of advertised voices.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><a href="https://support.microsoft.com/en-US/edge/use-immersive-reader-in-microsoft-edge" className="text-loudBlue hover:underline">Microsoft Edge Reading mode</a> includes Read aloud for supported web pages, with voice and pace controls. Check it with the pages you need.</li>
          <li><a href="https://www.everway.com/products/read-and-write-education/" className="text-loudBlue hover:underline">Read&amp;Write from Everway</a> combines text-to-speech with broader reading and writing tools. If your institution supplies it, ask about setup and training.</li>
          <li><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> is an option for supported DRM-free EPUB and PDF book listening on iPhone and iPad, with the iPad build available on compatible Apple Silicon Macs.</li>
        </ul>
        <p>These are different workflows, not a ranking of clinical effectiveness. Check the current offering and the learner&apos;s files before buying anything.</p>
      </QuestionSection>
      <QuestionSection question="What are LoudReader’s practical limits?">
        <p>Read-along highlighting and book listening are available without Premium. {FREE_TIER.full} Adjustable speed from 0.3x to 3.0x and continuing access to the full available narrator roster require Premium. Studio voices also depend on device support.</p>
        <p>PDF import includes on-device OCR for scans, but recognised text and reading order can be wrong. Keep the original for figures, notation and checking errors. The <Link href="/blog/listen-to-textbooks" className="text-loudBlue hover:underline">textbook workflow</Link> shows what to inspect. Protected course books cannot be unlocked by the app.</p>
        <p>Speech is generated locally without uploading a book for narration. The app also has diagnostics and analytics. No claim here establishes suitability for every school policy, learner or accessibility requirement; try the actual controls with the person who will use them.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try read-aloud support with a real passage" subline="Check the text, controls and available voice. Let the reader decide whether the workflow helps." />
    </ArticleLayout>
  );
}
