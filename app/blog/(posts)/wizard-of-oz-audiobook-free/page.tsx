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

export default function WizardOfOzAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The Wonderful Wizard of Oz is public domain, so L. Frank Baum&apos;s
          actual 1900 text is free to listen to with no purchase and no
          subscription. LoudReader has the full book built into its catalog:
          open{" "}
          <Link
            href="/listen/the-wonderful-wizard-of-oz"
            className="text-loudBlue hover:underline"
          >
            its LoudReader page
          </Link>{" "}
          to hear the real opening read aloud right now, free, no account.
          One honest note up front: this is a synthetic voice reading Baum&apos;s
          text, not a performed audiobook with a different actor for Dorothy,
          the Scarecrow, and the Wizard. It reads the book brisker and
          stranger than the film script most people remember. Free tier
          listening is unlimited, cover to cover, and LoudReader is fully
          on-device and private, your library never leaves your device.
          Since the book is already in the built-in Project Gutenberg
          catalog, there's no file to import and no connection required.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Baum's original 1900 text, read aloud, no download required."
      />

      <QuestionSection question="What does the Wizard of Oz audiobook actually sound like?">
        <p>
          The fastest way to answer that is to listen. LoudReader&apos;s
          catalog page for the book has a rendered sample of the real
          opening, in the same voice you&apos;d hear in the app.{" "}
          <Link
            href="/listen/the-wonderful-wizard-of-oz"
            className="text-loudBlue hover:underline"
          >
            Play the sample
          </Link>{" "}
          before deciding whether it's for you.
        </p>
        <p>
          It's a natural offline voice reading Baum&apos;s narration exactly as
          written, from the cyclone lifting Dorothy&apos;s farmhouse onward,
          with no abridgment and no rewriting for a younger audience. One
          voice handles every character, so it does not switch tone between
          the Cowardly Lion and the Wizard the way a full-cast production
          would. If you want the actual text read clearly at whatever speed
          suits you, it holds up well; if you're picturing a dramatized
          multi-voice production, this isn't that.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you listen to it free right now?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Play the sample on{" "}
            <Link
              href="/listen/the-wonderful-wizard-of-oz"
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
            Search The Wonderful Wizard of Oz in the app&apos;s built-in
            Project Gutenberg catalog. It's already there, nothing to import
            or convert.
          </li>
          <li>
            Press play. The free tier is unlimited listening on the whole
            book with LoudReader&apos;s one built-in voice, no word limit and
            no trial cutoff partway through.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="Is this the same story as the movie?">
        <p>
          Close, but not identical, and the differences are part of the fun.
          Baum&apos;s 1900 novel has more of Oz in it: extra dangers on the
          road, stranger little kingdoms Dorothy passes through, and a
          Wizard whose secret plays a little differently on the page than it
          does on screen. It was written to be read aloud to children, which
          makes it a natural fit for a listen rather than a read, and its
          gentle joke about self-belief lands as much for adults as for kids.
        </p>
        <p>
          For a broader look at listening to public-domain classics like this
          one, see{" "}
          <Link
            href="/blog/best-audiobook-app-for-classics"
            className="text-loudBlue hover:underline"
          >
            the best audiobook app for classics
          </Link>
          . This page is just about this one book: pressing play on it, today.
        </p>
      </QuestionSection>

      <QuestionSection question="What do you give up compared to a professionally narrated version?">
        <p>
          Worth saying plainly: a synthetic voice does not act. It won&apos;t
          give the Wicked Witch a different register than Glinda, and it
          reads scene breaks the same way it reads everything else, evenly.
          What you get instead is the whole book, right now, with no library
          hold and no purchase, plus control a performed recording rarely
          gives you. Premium adds playback speed from 0.3x to 3.0x, useful
          for slowing down or speeding through a chapter you already know.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear The Wonderful Wizard of Oz read aloud, free"
        subline="The full book is already in LoudReader's catalog. Press play, no download, no account."
      />
    </ArticleLayout>
  );
}
