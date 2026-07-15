import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import ComparisonTable from "@/components/money/ComparisonTable";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import { COMPARISON_COLUMNS, COMPARISON_ROWS, FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function ReadAndListenAtTheSameTimeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Reading and listening at the same time (your eyes follow the text
          while a voice reads it aloud, with the current word highlighted)
          is usually called <strong>immersion reading</strong>. There are two
          ways to get it. Amazon&apos;s Whispersync pairs a Kindle ebook with
          its Audible audiobook, which is beautifully polished but means
          buying two editions of every book. The other way is a
          text-to-speech reader with synced highlighting.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) reads any
          DRM-free EPUB or PDF aloud with natural offline voices and
          highlights each word as it speaks. It's free, with unlimited
          listening, no account, and fully on-device and private, your
          library never leaves your device.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="One book, two channels: eyes on the words, ears on the voice."
      />

      <QuestionSection question="What is immersion reading?">
        <p>
          Immersion reading is the simplest study trick that most people have
          never tried: the text and the narration are the same book, playing
          at the same time, with a highlight tying them together. Your eyes
          anchor your ears; your ears pace your eyes.
        </p>
        <p>
          The people who swear by it are usually the ones for whom plain
          reading is hard work: readers with dyslexia or ADHD, language
          learners, and anyone whose attention slides off the page after a
          paragraph. The moving highlight gives wandering attention a place
          to snap back to. The moment your mind drifts, the highlight shows
          you exactly where the voice is, and you rejoin the sentence instead
          of hunting for it. Whether it also boosts test scores is a more
          nuanced question, covered honestly below, but as a way to stay
          <em> in</em> a book, it works from the first minute.
        </p>
      </QuestionSection>

      <QuestionSection question="How does Kindle + Audible Whispersync work, and what does it cost?">
        <p>
          Amazon&apos;s version is the best-known one. If a title is sold as
          both a Kindle ebook and an Audible audiobook, owning both turns on
          immersion reading in the Kindle app: the professional narration
          plays while the text highlights along.
        </p>
        <p>
          Credit where due, it's a polished experience. The narration is a
          professionally recorded human performance, the sync is tight,
          and if you already live in the Kindle ecosystem there's nothing to
          set up. The honest costs are structural:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Two purchases per book.</strong>{" "}
            You need the ebook <em>and</em> the audiobook. The audiobook
            add-on is often discounted, but reading this way across a
            semester or a series adds up fast.
          </li>
          <li>
            <strong className="text-gray-900">Catalog limits.</strong> It only
            exists for titles sold in both formats. Your own PDFs, EPUBs from
            other stores, web-fiction exports, course materials, and most
            backlist or niche titles are simply not eligible.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="How do you read and listen free on any EPUB or PDF?">
        <p>
          A text-to-speech reader with synced highlighting gives you the same
          eyes-plus-ears experience on any book you can get as a file. With{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader
          </a>{" "}
          the whole setup is three steps:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Import a DRM-free EPUB or PDF, or pick one of the 70,000+ free
            Project Gutenberg classics built into the app.
          </li>
          <li>Press play. Natural offline voices read the book aloud.</li>
          <li>
            Follow the highlight: each word lights up as it's spoken, on Mac
            and iPhone alike.
          </li>
        </ol>
        <p>
          There's no second edition to buy and no conversion step. The book
          you already own <em>is</em> the audiobook, which is the same idea
          behind{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            turning any book into an audiobook
          </Link>
          . The trade against Whispersync is honest in both directions: you
          give up a human performance, and you gain every book you own.
        </p>
        <ComparisonTable
          caption="Immersion reading with LoudReader compared to Kindle + Audible Whispersync"
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />
      </QuestionSection>

      <QuestionSection question="Does reading while listening actually improve comprehension?">
        <p>
          The research deserves a straight summary rather than a sales pitch.
          For skilled adult readers,{" "}
          <a
            href="https://journals.sagepub.com/doi/10.1177/2158244016669550"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Rogowsky, Calhoun and Tallal (2016)
          </a>{" "}
          gave the same non-fiction chapter to groups who read it, listened
          to it, or did both, and found no significant comprehension
          difference between any of them. For beginner language learners the
          picture is brighter:{" "}
          <a
            href="https://www.sciencedirect.com/science/article/abs/pii/S0346251X15000846"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Chang and Millett (2015)
          </a>{" "}
          followed 64 students for 26 weeks and found the
          reading-while-listening group improved reading rates and
          comprehension substantially more than the silent-reading group.
        </p>
        <p>
          So the fair claim isn't &ldquo;doing both makes you remember
          more&rdquo;. It's that doing both keeps you <em>reading</em>:
          more focus, less re-reading, and for developing readers, real
          measured gains. The fuller look at the modality research is in{" "}
          <Link
            href="/blog/is-listening-to-audiobooks-reading"
            className="text-loudBlue hover:underline"
          >
            does listening to audiobooks count as reading
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="How do you make the habit stick?">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Start with fiction.</strong> A
            novel&apos;s forward pull carries the habit while it forms; dense
            non-fiction can come later.
          </li>
          <li>
            <strong className="text-gray-900">Let the voice set the pace.</strong>{" "}
            Resist the urge to read ahead of the highlight. The point is one
            locked pace, not a race between channels.
          </li>
          <li>
            <strong className="text-gray-900">Use it where you actually drift.</strong>{" "}
            Evening reading when your eyes are tired, or study sessions where
            attention frays. That's where the second channel earns its keep.
          </li>
        </ul>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Immersion reading on any book you own"
        subline="EPUB, PDF, or a free classic. Read along with synced word-by-word highlighting. Free, no account."
      />
    </ArticleLayout>
  );
}
