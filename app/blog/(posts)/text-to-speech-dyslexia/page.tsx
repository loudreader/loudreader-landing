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

export default function TextToSpeechDyslexiaArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Text to speech genuinely helps dyslexic readers. A 2018
          meta-analysis found read-aloud tools improved reading comprehension
          for students with reading disabilities, with a moderate average
          effect. But the tool only helps if three features are there:{" "}
          <strong>word-by-word highlighting</strong> that keeps eyes and ears
          locked together, control over the voice and pace, and{" "}
          <strong>no word quota</strong>, because dyslexic readers listen to
          whole books, not paragraphs. <strong>LoudReader</strong> (native Mac
          and iPhone apps) highlights every word as it speaks, free and
          unlimited on every EPUB and PDF, with natural offline voices, and it
          is fully on-device and private, your library never leaves your
          device. Honest alternatives exist too: Microsoft&apos;s Immersive
          Reader is free for documents, and Read&amp;Write is the classroom
          standard.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Read-aloud pairs every printed word with its sound."
      />

      <QuestionSection question="Does text to speech actually help with dyslexia?">
        <p>
          This question has a real answer, which is rarer than it should be in
          assistive-tech marketing. Wood, Moxley, Tighe and Wagner published a
          meta-analysis in the <em>Journal of Learning Disabilities</em>,{" "}
          <a
            href="https://journals.sagepub.com/doi/10.1177/0022219416688170"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            &quot;Does Use of Text-to-Speech and Related Read-Aloud Tools
            Improve Reading Comprehension for Students With Reading
            Disabilities?&quot; (2018)
          </a>
          , pooling studies of TTS and read-aloud tools. The answer was yes,
          with a moderate average effect size of .35 on reading comprehension.
        </p>
        <p>
          Two honest framings of that number. First, moderate is meaningful:
          it is the difference between a chapter that lands and a chapter that
          has to be reread. Second, TTS is <em>assistive, not remedial</em>.
          It does not teach decoding, and it is not a substitute for
          structured literacy instruction. What it does is decouple access to
          books from decoding speed, so a student can read at the level they
          think, not the level they decode.
        </p>
      </QuestionSection>

      <QuestionSection question="Why does word-by-word highlighting matter so much?">
        <p>
          If you take one feature requirement from this page, take this one.
          Reading with dyslexia often fails at <em>tracking</em>: losing the
          line, losing the word, spending effort re-finding your place that
          should have gone to meaning. Audio alone does not fix that. It
          just moves the text somewhere invisible.
        </p>
        <p>
          Synced highlighting fixes it mechanically. When each word lights up
          the instant it is spoken, your eyes never have to find anything: the
          text finds you. Eyes and ears stay locked to the same word, every
          printed word arrives paired with its pronunciation, and a glance
          away costs nothing because the highlight marks the way back.
          LoudReader highlights the current sentence and the current word
          within it, on every book, with no setup.
        </p>
      </QuestionSection>

      <QuestionSection question="What features actually matter in a TTS app for dyslexia?">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Word-level highlighting</strong>
            , not just sentence-level. The lock between eyes and ears happens
            at the word.
          </li>
          <li>
            <strong className="text-gray-900">No word quota.</strong> A novel
            is 80,000 to 120,000 words. Metered plans are priced for snippets,
            not for how dyslexic readers actually use TTS, cover to cover.
          </li>
          <li>
            <strong className="text-gray-900">A voice you can live with.</strong>{" "}
            Robotic voices add listening effort exactly where you are trying
            to remove reading effort. Natural offline voices matter for hours
            of daily use.
          </li>
          <li>
            <strong className="text-gray-900">Speed control</strong>, slower
            for dense material, faster once a voice is familiar.
          </li>
          <li>
            <strong className="text-gray-900">Your real reading</strong>,
            school PDFs, EPUB novels, not just pasted text boxes.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="What are the honest options?">
        <p>
          The dyslexia-TTS space is crowded, and the truthful comparison is
          more useful than a rigged one:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Microsoft Immersive Reader</strong>{" "}
            is free and already inside Word, OneNote, Teams, and the Edge
            browser. Its Read Aloud highlights each word, and Line Focus and
            text spacing are genuinely good. If your reading lives in
            documents and web pages, start there, since it costs nothing. It
            is not, however, a home for a book library.
          </li>
          <li>
            <strong className="text-gray-900">Read&amp;Write (Texthelp)</strong>{" "}
            owns classrooms: schools deploy it centrally, it integrates with
            learning platforms, and its TTS reads with dual-color
            highlighting. If your school provides it, use what you have.
          </li>
          <li>
            <strong className="text-gray-900">Speechify</strong> is the most
            heavily marketed option and its highlighting is word-for-word,
            but its free tier is 10 standard voices at up to 1.5x speed, and
            Premium is $29/month with a metered word allowance. For book-length
            listening, the meter is the wrong shape. The full comparison is in{" "}
            <Link
              href="/speechify-alternative-for-mac"
              className="text-loudBlue hover:underline"
            >
              our Speechify alternative page
            </Link>
            .
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="Where does LoudReader fit?">
        <p>
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          is built for exactly one of these jobs: whole books, read aloud,
          followed with your eyes. Word-by-word highlighting is free on every
          book, and free listening is unlimited: no word quota, no metered
          months, cover to cover. Voices are natural offline voices, and the
          app is fully on-device and private, your library never leaves your
          device, which also means a student&apos;s reading data isn&apos;t
          anyone&apos;s telemetry.
        </p>
        <p>
          The honest limits: ten languages today, not thirty; playback-speed control
          (0.3x to 3.0x) is a Premium feature, as are the extra voices after
          the 8-hour all-voices trial; and scanned PDFs without a text layer
          can&apos;t be read. If those are dealbreakers, the alternatives
          above are real options. If not,{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            it is a free download
          </a>
          , with no account and nothing to configure.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Every word highlighted, every book, free"
        subline="Import an EPUB or PDF and read along as it speaks. No word quota, no account, fully on-device."
      />
    </ArticleLayout>
  );
}
