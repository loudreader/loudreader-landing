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

import { FAQS, HIGHLIGHT_COLUMNS, HIGHLIGHT_ROWS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function AppThatHighlightsWordsArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Plenty of apps highlight each word as it is read aloud.{" "}
          <strong>LoudReader</strong>, Speechify, NaturalReader, Voice Dream
          Reader, and Microsoft&apos;s free Immersive Reader all do it. What
          actually differs is price, privacy, and what you can read. If the
          thing you want highlighted is <em>books</em> (EPUBs, PDFs, whole
          novels), LoudReader (iPhone, iPad, and Mac) highlights the
          current sentence and each word within it, synced to natural offline
          voices, free on every book with no word quota. It is fully on-device
          and private, your library never leaves your device. If your reading
          is Word documents and web pages instead, Immersive Reader is free and
          already installed. The table below gives the honest lay of the land.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="Follow the voice word by word, on Mac and iPhone."
      />

      <QuestionSection question="What is synced word highlighting, and why does it work?">
        <p>
          Synced highlighting means the app tracks its own narration and marks
          the exact word being spoken, in real time, in the text. Your eyes
          and ears receive the same word at the same moment.
        </p>
        <p>
          The mechanical benefits are easy to state. You never lose your
          place, because a glance at the door costs nothing when the highlight
          marks the way back. Every printed word is paired with its sound,
          which is what makes read-along useful for dyslexic readers and
          language learners. And your attention has two channels to hold
          instead of one. On the evidence, honesty is owed. Read-aloud tools as
          a category have real research behind them. A{" "}
          <a
            href="https://journals.sagepub.com/doi/10.1177/0022219416688170"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            2018 meta-analysis in the Journal of Learning Disabilities
          </a>{" "}
          found they moderately improved comprehension for students with
          reading disabilities, but highlighting <em>in isolation</em> is far
          less studied. So treat the highlight as ergonomics with strong
          face-validity, not a clinically proven feature.
        </p>
      </QuestionSection>

      <QuestionSection question="Which apps highlight each word as it is spoken?">
        <p>
          All claims below were checked against each vendor&apos;s own pages
          in July 2026:
        </p>
        <ComparisonTable
          caption="Apps with synced word highlighting compared on highlighting granularity, price, and offline/privacy behavior"
          columns={HIGHLIGHT_COLUMNS}
          rows={HIGHLIGHT_ROWS}
          highlightColumn={-1}
        />
        <p>
          A sentence of honest color on each.{" "}
          <strong className="text-gray-900">Speechify</strong> has polished
          word-for-word highlighting and the biggest marketing footprint. Its
          free tier is 10 standard voices at up to 1.5x, and Premium is
          $29/month with a metered word allowance, which is fine for articles
          but the wrong shape for novels.{" "}
          <strong className="text-gray-900">NaturalReader</strong> offers an
          immersive mobile mode with highlighted text synced to audio and has
          a free plan, though it is web-first at heart.{" "}
          <strong className="text-gray-900">Voice Dream Reader</strong> is the
          accessibility veteran, with synchronized highlighting, deep format
          support, and a price now at $79.99/year. Our full comparison is on
          the{" "}
          <Link
            href="/voice-dream-reader-alternative"
            className="text-loudBlue hover:underline"
          >
            Voice Dream Reader alternative page
          </Link>
          . <strong className="text-gray-900">Immersive Reader</strong> is
          free inside Word, OneNote, Teams, and Edge and highlights each word.
          It is unbeatable for documents, but it is a view mode, not a home for
          a book library.
        </p>
      </QuestionSection>

      <QuestionSection question="Where does LoudReader stand?">
        <p>
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          is the books-first entry on the list. Import any DRM-free EPUB or
          PDF, or pick from 70,000+ built-in Project Gutenberg classics, and it
          reads aloud with natural offline voices while highlighting the
          current sentence and each spoken word inside it. The parts worth
          stating plainly:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Highlighting is free on
            every book</strong>, and free listening has no word quota. Whole
            novels, cover to cover.
          </li>
          <li>
            <strong className="text-gray-900">Everything runs on-device.</strong>{" "}
            Fully on-device and private, your library never leaves your device.
            No account, works in airplane mode.
          </li>
          <li>
            <strong className="text-gray-900">Runs on iPhone, iPad, and Apple Silicon Macs</strong>,
            not a web wrapper. The same book and highlighting on both.
          </li>
        </ul>
        <p>
          And the concessions. English voices only today, no browser extension
          for reading web pages in place, and if you need DAISY, Bookshare, or
          Word files, Voice Dream is the better tool. If your use case is
          books,{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader is a free download
          </a>
          , so you can watch the highlighting run on a full classic before
          spending anything.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="See the words light up as it reads"
        subline="Word-by-word highlighting on every EPUB and PDF, free, with natural offline voices. No account needed."
      />
    </ArticleLayout>
  );
}
