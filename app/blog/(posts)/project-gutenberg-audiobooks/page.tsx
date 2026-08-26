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

export default function ProjectGutenbergAudiobooksArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Every Project Gutenberg book can be a free audiobook. The only
          question is which of three routes fits you. The{" "}
          <strong>Open Audiobook Collection</strong> offers about 5,000
          titles as synthetic-voice recordings you can download or stream.{" "}
          <strong>LibriVox</strong> offers 20,000+ human, volunteer-read
          recordings as MP3s. Both are audio files that cover a fraction of the
          catalog. <strong>LoudReader</strong> covers all of it. The full
          70,000+ Gutenberg catalog is built into the app, browsable by genre
          and author, and any title is read aloud on demand with natural
          offline voices and word-by-word highlighting. It's free, with
          unlimited listening, no account, and fully on-device and private,
          your library never leaves your device. Download a book once and
          everything works offline.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="70,000+ public-domain books, every one of them a potential audiobook."
      />

      <QuestionSection question="What is the Project Gutenberg Open Audiobook Collection?">
        <p>
          In 2023, researchers from MIT and Microsoft used neural
          text-to-speech to convert about 5,000 Project Gutenberg titles
          into free audiobooks, released as audio files and podcast-style
          streams.{" "}
          <a
            href="https://techcrunch.com/2023/09/19/project-gutenberg-puts-5000-audiobooks-online-for-free-using-synthetic-speech/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            TechCrunch covered the launch
          </a>
          . It's a genuinely important project. Thousands of classics got a
          listenable edition overnight, at zero cost to anyone.
        </p>
        <p>Its limits are just as plain, and worth stating honestly:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Coverage:</strong> ~5,000
            titles against a catalog of 70,000+, so most Gutenberg books
            aren't in it.
          </li>
          <li>
            <strong className="text-gray-900">Fixed recordings:</strong> the
            voices are 2023-era synthesis, frozen at generation time. No
            voice choice, and no speed beyond what your player offers.
          </li>
          <li>
            <strong className="text-gray-900">Audio only:</strong> they're
            files, not a reading experience, with no synced text, no library,
            and no saved place tied to the book.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="What are all the ways to listen to Project Gutenberg for free?">
        <p>Three honest routes, each with a different shape:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">
              The Open Audiobook Collection
            </strong>{" "}
            is the ~5,000 synthetic recordings above. Best when you want free
            audio files of a covered title with zero setup.
          </li>
          <li>
            <strong className="text-gray-900">LibriVox</strong> has 20,000+
            recordings read by human volunteers, downloadable as MP3s and
            hosted on the Internet Archive. Human warmth, with the honest
            trade-off that quality varies and narrators can change
            chapter to chapter. The full comparison is in our{" "}
            <Link
              href="/blog/librivox-alternative"
              className="text-loudBlue hover:underline"
            >
              LibriVox alternative guide
            </Link>
            .
          </li>
          <li>
            <strong className="text-gray-900">LoudReader</strong> isn't a
            set of recordings. It's a reader with the whole catalog inside.
            Any of the 70,000+ titles is read aloud on demand, with the text
            on screen and each word highlighted as it's spoken.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="How does LoudReader turn the whole catalog into audiobooks?">
        <p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader
          </a>{" "}
          ships with the entire Project Gutenberg catalog built in. Browse
          by genre, search by author, download any title, press play.
          Natural offline voices generate the narration in real time on your
          device. That's why coverage is total rather than a curated
          subset, and why nothing was frozen in 2023: the book is read
          fresh, with your choice of voice, every time. It works the same
          way for books you import yourself, and the walkthrough is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
        <p>
          Listening is free and unlimited (every book, cover to cover, no
          word quota, no account) on iPhone, iPad, and Apple Silicon Macs. The honest
          concession: narration is generated live, so there are no MP3s to
          export. If downloadable files are the requirement, the two
          collections above are the right tools.
        </p>
      </QuestionSection>

      <QuestionSection question="Can you read along while you listen?">
        <p>
          This is the practical difference the MP3 collections can't
          bridge. In LoudReader the full text is on screen and each word
          highlights in sync with the narration, so you can glance down
          mid-sentence and land exactly where the voice is. It keeps names
          and places straight in dense classics, and it gives drifting
          attention somewhere to re-attach. Audio files can sit next to an
          open ebook, but nothing holds them together. A synced reader is a
          different experience from a recording, and for long, unfamiliar
          books it's the better one.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="The whole Gutenberg catalog, read aloud"
        subline="Browse 70,000+ free classics and press play. Natural offline voices, synced highlighting, unlimited free listening."
      />
    </ArticleLayout>
  );
}
