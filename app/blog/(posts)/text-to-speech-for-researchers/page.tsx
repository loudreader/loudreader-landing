import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function TextToSpeechForResearchersArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Research means reading. A lot of it. Papers, preprints, theses,
          grant proposals, and the one 1998 conference paper that everyone
          cites but nobody has actually read. Text-to-speech turns the paper
          stack into something you can absorb while walking, commuting, or
          giving your eyes a break from the screen.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) reads
          PDFs and EPUBs aloud with natural offline voices, so you can
          screen papers during your commute and save the deep read for your
          desk. It is fully on-device and private, your library never leaves
          your device, and it needs no account. Import a PDF from arXiv,
          press play, and listen. Speed control (0.3x to 3.0x, a Premium
          feature) lets you skim at 2x and slow down for the methods section
          that actually matters.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="A 30-minute commute is a paper. A year of commutes is a literature review."
      />

      <QuestionSection question="Why do researchers have a reading problem?">
        <p>
          Volume is the obvious part. A researcher in any active field might
          need to stay current with dozens of journals, preprint servers,
          and working papers. The less obvious part is that reading papers
          competes directly with the work that produces papers: running
          experiments, writing, teaching, and meetings. Reading tends to be
          the thing that slides to evenings and weekends, which is exactly
          when your brain is least equipped for dense academic text.
        </p>
        <p>
          Text-to-speech moves reading into the time that already exists.
          Your commute, your lunch walk, your gym session. These are not
          &ldquo;found&rdquo; hours, they are hours you already have that
          happen to be compatible with audio. A 30-minute walk to campus is
          one paper. A year of those walks is an entire subfield surveyed.
        </p>
      </QuestionSection>

      <QuestionSection question="Can you really listen to an academic paper?">
        <p>
          Some papers, yes. Others, less so. Here is the honest breakdown:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">
              Literature reviews and introductions.
            </strong>{" "}
            These are narrative text and absorb well by ear. You get the
            framing, the gap, and the contribution without needing to see the
            page.
          </li>
          <li>
            <strong className="text-gray-900">
              Discussion and conclusion sections.
            </strong>{" "}
            Same thing. Once you understand the method, the interpretation
            reads naturally aloud.
          </li>
          <li>
            <strong className="text-gray-900">Humanities papers.</strong>{" "}
            These are often more narrative throughout and work well for
            audio from start to finish.
          </li>
          <li>
            <strong className="text-gray-900">
              Methods sections with heavy math.
            </strong>{" "}
            These are tough. Equations do not read well aloud, and dense
            statistical notation is hard to follow without seeing it. Save
            these for the screen.
          </li>
          <li>
            <strong className="text-gray-900">Papers in your subfield.</strong>{" "}
            You already know the terminology and the standard methods.
            Listening at 1.5x to 2.0x lets you extract the contribution
            quickly because your brain fills in the scaffolding.
          </li>
        </ul>
        <p>
          Many researchers use TTS as a screening pass: listen to the
          abstract and intro on the way in, flag the papers worth a full
          read, and only sit down for the ones that clear the bar. This cuts
          the reading pile by half or more.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you handle PDF papers practically?">
        <p>
          Most modern academic PDFs work right away. Journal articles,
          arXiv preprints, conference papers: all of these are text-based
          PDFs that{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          reads natively. Import the file and press play. No conversion, no
          reformatting.
        </p>
        <p>
          What does not work: old scanned articles that are just page
          images. If you cannot select text in the PDF, LoudReader cannot
          read it. Most papers from the last 20 years are text-based, but
          anything from the pre-digital era may need OCR first, which
          LoudReader does not do.
        </p>
        <p>
          For a deeper walkthrough of PDF listening, see{" "}
          <Link
            href="/listen-to-pdf-iphone"
            className="text-loudBlue hover:underline"
          >
            listen to PDF on iPhone
          </Link>
          , which covers the import process and what to expect from
          different PDF types.
        </p>
      </QuestionSection>

      <QuestionSection question="What speed should you use for academic reading?">
        <p>
          It depends on your goal and your familiarity with the material.
          For screening papers in your own field, 1.5x to 2.0x works well:
          you know the terminology, you recognize the methods, and you just
          need the contribution. For papers in an adjacent field where the
          vocabulary is less automatic, 1.0x to 1.3x keeps comprehension
          intact. For dense theory sections, 0.9x can help.
        </p>
        <p>
          In LoudReader, speed control from 0.3x to 3.0x is a Premium
          feature; the free tier plays at normal speed. The full range is
          useful for researchers because you switch speeds based on the
          paper and the section, in a way that casual reading does not
          require. Skim the intro at 2x, slow to 1.2x for the argument you
          actually need to understand, and skip the methods entirely if they
          are standard.
        </p>
      </QuestionSection>

      <QuestionSection question="What about notes and reference management?">
        <p>
          LoudReader is a reading tool, not a reference manager. It does not
          integrate with Zotero, Mendeley, or EndNote. What it gives you is
          a way to absorb the content. Many researchers use it as the
          consumption layer and keep their reference manager on screen for
          the note-taking layer.
        </p>
        <p>
          LoudReader Premium includes notes and highlights you can mark
          during playback. After a listening session, you have a set of
          flagged passages to transfer into your reference manager or
          reading notes. The app remembers your place in every file, so you
          can pause mid-paper when the bus reaches your stop and pick it up
          exactly there on the way home.
        </p>
      </QuestionSection>

      <QuestionSection question="Does this work on Mac as well as iPhone?">
        <p>
          Yes. LoudReader runs on iPhone, iPad, and Apple Silicon Macs, and the experience
          is consistent on both. Many researchers do the screening pass on
          iPhone during the commute and the deep read on Mac at the desk.
          The library syncs across devices through the app. Both platforms
          use the same on-device privacy model: the PDFs and EPUBs you
          import stay local, no cloud processing.
        </p>
        <p>
          For more on the Mac side, see{" "}
          <Link
            href="/read-epub-aloud-mac"
            className="text-loudBlue hover:underline"
          >
            read EPUB aloud on Mac
          </Link>
          . And for the privacy architecture,{" "}
          <Link
            href="/blog/on-device-text-to-speech-explained"
            className="text-loudBlue hover:underline"
          >
            on-device text to speech explained
          </Link>{" "}
          walks through what &ldquo;on-device&rdquo; actually means.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Turn your paper queue into a playlist"
        subline="Import PDFs, press play, and get through the stack during the time you already have. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
