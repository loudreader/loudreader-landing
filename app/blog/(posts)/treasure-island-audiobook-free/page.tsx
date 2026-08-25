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

export default function TreasureIslandAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Treasure Island is public domain, so a free audiobook of it already
          exists as text on Project Gutenberg, and any text-to-speech app can
          read it aloud. LoudReader has the full book built into its catalog:
          open <Link href="/listen/treasure-island" className="text-loudBlue hover:underline">
            its LoudReader page
          </Link>{" "}
          to hear the opening read aloud right now, free, no account. One
          honest note up front: this is a synthetic voice reading Robert
          Louis Stevenson&apos;s text, not a performed audiobook with an actor
          doing Long John Silver in character. It is clear and natural to
          listen to on a walk or a commute, and the free tier plays the whole
          book, cover to cover, at no cost. LoudReader is fully on-device and
          private, your library never leaves your device, so import is
          instant and works offline because the book is already in the
          built-in Project Gutenberg catalog.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Stevenson's text, read aloud, no download required."
      />

      <QuestionSection question="What does the Treasure Island audiobook actually sound like?">
        <p>
          Before anything else: press play and find out. LoudReader&apos;s
          catalog page for the book has a rendered sample of the actual
          opening, read aloud by the same voice you&apos;d hear in the app.
          That is the honest way to answer &quot;what does it sound
          like,&quot; better than any description here could.{" "}
          <Link href="/listen/treasure-island" className="text-loudBlue hover:underline">
            Listen to the Treasure Island sample
          </Link>{" "}
          before you decide whether this is for you.
        </p>
        <p>
          What you will hear is a synthetic, natural offline voice reading
          Jim Hawkins&apos; narration exactly as Stevenson wrote it, sentence
          by sentence, with no abridgment. It is not a dramatized reading:
          one voice reads every character, including Long John Silver, the
          squire, and the doctor. If you are picturing a full-cast production
          with different actors for each pirate, this isn&apos;t that. If you
          want the actual text read aloud, clearly and at whatever pace suits
          you, it does the job well.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you listen to Treasure Island free right now?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Play the sample on{" "}
            <Link href="/listen/treasure-island" className="text-loudBlue hover:underline">
              the Treasure Island catalog page
            </Link>{" "}
            to hear the voice before you commit to anything.
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
            Open the app and search Treasure Island in the built-in Project
            Gutenberg catalog. There is nothing to import or convert; the
            book is already there.
          </li>
          <li>
            Press play. The free tier is unlimited listening on the whole
            book with LoudReader&apos;s one built-in voice, cover to cover, no
            word limit and no trial that runs out partway through.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="Why doesn't Treasure Island already have a free audiobook everywhere?">
        <p>
          It does, in a sense, and it doesn&apos;t. The book&apos;s copyright
          expired long ago, so nothing stops anyone from recording or reading
          it aloud for free. LibriVox, the volunteer human-narration project,
          likely has a recording of it, and that is worth checking if a
          performed reading is what you want.
        </p>
        <p>
          What a lot of people actually want is simpler than a curated
          performance: press play on the actual text, on their own schedule,
          in an app they already have open. That is the gap text-to-speech
          fills, and it is covered in more general terms in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          . For Treasure Island specifically, the book is already sitting in
          LoudReader&apos;s catalog, so there is no conversion step at all.
        </p>
      </QuestionSection>

      <QuestionSection question="What do you give up compared to a professionally narrated version?">
        <p>
          Being straight about this matters more than selling it. A
          synthetic voice does not do character acting. It won&apos;t give
          Long John Silver a different register than Jim Hawkins, it won&apos;t
          build suspense the way a skilled narrator paces a reveal, and it
          reads footnotes and section breaks plainly rather than
          dramatically. What you get in exchange is availability: no waiting
          for a library hold, no purchase, and the entire book right now,
          plus control most performed audiobooks don&apos;t give you.
          Premium adds playback speed from 0.3x to 3.0x, so you can slow down
          a dense passage or speed through a chapter you already know.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear Treasure Island read aloud, free"
        subline="The full book is already in LoudReader's catalog. Press play, no download, no account."
      />
    </ArticleLayout>
  );
}
