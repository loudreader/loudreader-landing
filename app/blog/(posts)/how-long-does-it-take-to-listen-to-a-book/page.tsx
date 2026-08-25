import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function HowLongToListenArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          A typical novel takes about 9 to 10 hours to listen to at normal
          speed. That number comes from simple arithmetic, not a study: an
          average novel runs around 90,000 words, and audiobook narration is
          commonly cited at roughly 150 words per minute, which is 600
          minutes, or 10 hours. To estimate any specific book, divide its word
          count by 150, then divide by 60 for hours. Longer books, dense
          non-fiction, and doorstop fantasy novels take a lot more. Playback
          speed changes the total directly: a 10-hour book takes about 6.7
          hours at 1.5x and about 5 hours at 2x, since doubling speed halves
          time. LoudReader Premium supports playback speed from 0.3x to 3.0x,
          for whatever pace actually holds your attention. None of this is a
          guarantee for any one title, but it gives you a real number to work
          from instead of a guess.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Word count divided by pace is the whole calculation."
      />

      <QuestionSection question="How long does an average book take to listen to?">
        <p>
          The short answer, worked out with real arithmetic: around 9 to 10
          hours. A standard adult novel runs somewhere between 70,000 and
          100,000 words, so 90,000 is a reasonable round middle. Audiobook
          narration commonly runs around 150 words per minute. Divide 90,000
          by 150 and you get 600 minutes, which is 10 hours. That is an
          average, built from average inputs, not a measurement of any
          specific book, but it gives you a real baseline instead of a
          shrug.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you calculate listening time for a specific book?">
        <p>The formula is the same one used above, applied to your actual book:</p>
        <p className="font-mono text-sm bg-gray-50 border border-gray-200 rounded-lg p-4">
          hours = (word count / words per minute) / 60
        </p>
        <p>A few worked examples at 150 words per minute:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            A 50,000-word novella: 50,000 / 150 = 333 minutes, about 5.6
            hours.
          </li>
          <li>
            A 90,000-word novel: 90,000 / 150 = 600 minutes, about 10 hours.
          </li>
          <li>
            A 150,000-word epic fantasy doorstop: 150,000 / 150 = 1,000
            minutes, about 16.7 hours.
          </li>
        </ul>
        <p>
          If you don't know a book's exact word count, page count times
          roughly 275 words per page is a workable stand-in for a standard
          printed page. None of this predicts an exact time for an exact
          edition, but it gets you within a reasonable range before you press
          play.
        </p>
      </QuestionSection>

      <QuestionSection question="How much does playback speed actually save you?">
        <p>
          A lot, and the relationship is direct: double the speed, halve the
          time, for the same book. Using the 10-hour example above:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>1x speed: 10 hours.</li>
          <li>1.25x speed: 8 hours.</li>
          <li>1.5x speed: about 6.7 hours.</li>
          <li>2x speed: 5 hours.</li>
        </ul>
        <p>
          LoudReader Premium lets you set speed anywhere from 0.3x to 3.0x, so
          the same 10-hour book at the fast end works out to about 3.3 hours,
          arithmetically. Whether that speed is actually useful depends on the
          material and on you. Dense non-fiction you're taking notes on holds
          up worse at high speed than light fiction you're following for
          plot. Find the fastest speed where you're not rewinding, and that's
          your real number, not the arithmetic ceiling.
        </p>
      </QuestionSection>

      <QuestionSection question="Does book length track page count or word count better?">
        <p>
          Word count, not page count. Two books with the same page count can
          have very different listening times if one uses a larger font,
          wider margins, or shorter paragraphs with more white space. Word
          count is the number that actually drives narration time, since it's
          what the narrator, human or synthetic, is reading through minute by
          minute. Page count is a reasonable stand-in only when you don't have
          the real word count to work with.
        </p>
      </QuestionSection>

      <QuestionSection question="Where does this arithmetic come from with LoudReader specifically?">
        <p>
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          reads any DRM-free EPUB or PDF aloud with natural offline voices, so
          the math above applies directly to books you already own, not just
          ones with a commercial audiobook edition. It also has 70,000+
          Project Gutenberg classics built in, browsable at{" "}
          <Link href="/listen" className="text-loudBlue hover:underline">
            /listen
          </Link>
          , where each catalog page shows the book's estimated listening
          time so you don't have to run the calculation yourself. It's fully
          on-device and private, your library never leaves your device, so
          none of this depends on a subscription tier to try.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Do the math with a real book"
        subline="Import any EPUB or PDF and see the estimate, then press play. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
