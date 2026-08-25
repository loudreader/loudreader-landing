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

export default function TaleOfTwoCitiesAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          A Tale of Two Cities is public domain, so Charles Dickens&apos;s
          actual text, including the famous opening line, is free to listen
          to with no purchase and no subscription. LoudReader has the full
          novel built into its catalog: open{" "}
          <Link
            href="/listen/a-tale-of-two-cities"
            className="text-loudBlue hover:underline"
          >
            its LoudReader page
          </Link>{" "}
          to hear the real opening read aloud right now, free, no account.
          One honest note up front: this is a synthetic voice reading
          Dickens&apos;s text, not a performed audiobook with an actor giving
          Sydney Carton and Madame Defarge different voices. It reads
          clearly and steadily through Dickens&apos;s long sentences, exactly
          as written. Free tier listening is unlimited, cover to cover, and
          LoudReader is fully on-device and private, your library never
          leaves your device. Since the book is already in the built-in
          Project Gutenberg catalog, there's no file to import and no
          connection required.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Dickens's text, read aloud, from the first line to the last."
      />

      <QuestionSection question="What does the A Tale of Two Cities audiobook actually sound like?">
        <p>
          The fastest way to answer that is to listen. LoudReader&apos;s
          catalog page for the book has a rendered sample of the real
          opening, in the same voice you&apos;d hear in the app.{" "}
          <Link
            href="/listen/a-tale-of-two-cities"
            className="text-loudBlue hover:underline"
          >
            Play the sample
          </Link>{" "}
          before deciding whether it's for you.
        </p>
        <p>
          It's a natural offline voice reading Dickens&apos;s narration exactly
          as written, unabridged, with no modernizing of the period
          vocabulary or long clauses. One voice reads every character, so it
          doesn&apos;t shift tone between Doctor Manette, Charles Darnay, and
          Sydney Carton the way a full-cast dramatization would. If you want
          the real text read clearly at a pace you control, including the
          famous opening and closing lines, it does that well.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you listen to it free right now?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Play the sample on{" "}
            <Link
              href="/listen/a-tale-of-two-cities"
              className="text-loudBlue hover:underline"
            >
              the book's catalog page
            </Link>{" "}
            to hear the voice first.
          </li>
          <li>
            Download{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader from the App Store
            </a>{" "}
            for its native Mac and iPhone apps. Free, no account.
          </li>
          <li>
            Search A Tale of Two Cities in the app&apos;s built-in Project
            Gutenberg catalog. It's already there, nothing to import or
            convert.
          </li>
          <li>
            Press play. The free tier is unlimited listening on the whole
            book with LoudReader&apos;s one built-in voice, no word limit and
            no trial cutoff before the guillotine.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="Why isn't there already a well-known free audiobook of this everywhere?">
        <p>
          There actually might be one you haven&apos;t found: LibriVox, the
          volunteer human-narration project, likely has a recording of A
          Tale of Two Cities, and it's worth a look if you want a performed
          reading with a narrator's pacing and character work.
        </p>
        <p>
          Text-to-speech offers something different and more immediate: the
          exact Gutenberg text, read aloud on demand, in an app you already
          have open, with no library hold and no browsing for a recording.
          The general case for that is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          . For this specific book, the file is already sitting in
          LoudReader&apos;s catalog.
        </p>
      </QuestionSection>

      <QuestionSection question="What do you give up compared to a professionally narrated version?">
        <p>
          Worth saying plainly: a synthetic voice doesn&apos;t act. It won&apos;t
          build dread the way a skilled narrator paces the storming of the
          Bastille or the final ride to the guillotine, and it won&apos;t
          give Madame Defarge a different edge than Lucie Manette. What you
          get instead is the whole novel, unabridged, right now, no purchase
          and no waiting. Premium adds playback speed from 0.3x to 3.0x, so a
          dense passage can be slowed down or a familiar section sped
          through.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear A Tale of Two Cities read aloud, free"
        subline="The full book is already in LoudReader's catalog. Press play, no download, no account."
      />
    </ArticleLayout>
  );
}
