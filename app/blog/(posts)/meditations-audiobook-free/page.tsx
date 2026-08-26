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

export default function MeditationsAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Meditations is public domain, and Project Gutenberg hosts an
          English translation of Marcus Aurelius&apos;s private notebook, so
          it's free to listen to with no purchase and no subscription.
          LoudReader has the full text built into its catalog: open{" "}
          <Link href="/listen/meditations" className="text-loudBlue hover:underline">
            its LoudReader page
          </Link>{" "}
          to hear the opening read aloud right now, free, no account. One
          honest note up front: this is a synthetic voice reading the
          public-domain English text, not a performed audiobook with a
          narrator's dramatic pacing. That actually suits the material.
          Meditations has no plot, so a steady, even reading works well for
          dipping in on a walk or a commute. Free tier listening is
          unlimited, and LoudReader is fully on-device and private, your
          library never leaves your device. Since the book is already in
          the built-in Project Gutenberg catalog, there's no file to import
          and no connection required.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Short entries, read aloud, easy to drop into anywhere."
      />

      <QuestionSection question="What does the Meditations audiobook actually sound like?">
        <p>
          The fastest way to answer that is to listen. LoudReader&apos;s
          catalog page for the book has a rendered sample of the real
          opening, in the same voice you&apos;d hear in the app.{" "}
          <Link href="/listen/meditations" className="text-loudBlue hover:underline">
            Play the sample
          </Link>{" "}
          before deciding whether it's for you.
        </p>
        <p>
          It's a natural offline voice reading the public-domain English
          translation of Marcus Aurelius&apos;s notes to himself, clearly and
          at a steady pace. There's no dialogue or cast of characters here,
          just one voice moving through short, self-contained entries, so
          the flat, even delivery isn't a limitation the way it might be for
          a novel; it's closer to how the book was actually meant to be
          read.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you listen to it free right now?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Play the sample on{" "}
            <Link href="/listen/meditations" className="text-loudBlue hover:underline">
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
            for iPhone, iPad, and Mac. Free, no account.
          </li>
          <li>
            Search Meditations in the app&apos;s built-in Project Gutenberg
            catalog. It's already there, nothing to import or convert.
          </li>
          <li>
            Press play. The free tier is unlimited listening with
            LoudReader&apos;s one built-in voice, no word limit and no trial
            that runs out.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="Is Meditations a good book to listen to instead of read?">
        <p>
          Yes, arguably better suited to listening than most books.
          Meditations has no plot and no characters to track, so there's
          nothing to lose by drifting in and out of attention the way you
          might on a walk or a commute. Marcus Aurelius wrote these notes for
          himself, not for an audience, coaching himself toward patience and
          steadiness in the middle of running an empire. You can start
          anywhere, skip around, and come back later without losing your
          place in a story, because there isn't one.
        </p>
        <p>
          For more on listening to classic public-domain works like this
          one, see{" "}
          <Link
            href="/blog/best-audiobook-app-for-classics"
            className="text-loudBlue hover:underline"
          >
            the best audiobook app for classics
          </Link>
          . This page is about this one book specifically: pressing play on
          it today.
        </p>
      </QuestionSection>

      <QuestionSection question="What do you give up compared to a professionally narrated version?">
        <p>
          Worth saying plainly: a synthetic voice doesn&apos;t bring
          interpretive weight to a passage the way an experienced narrator
          might, choosing where to pause for effect on a particularly sharp
          line. What you get instead is the whole text, available instantly,
          with no purchase and no waiting on a library hold. Premium adds
          playback speed from 0.3x to 3.0x, useful for slowing down a dense
          passage or moving quickly through entries you've read before.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear Meditations read aloud, free"
        subline="The full text is already in LoudReader's catalog. Press play, no download, no account."
      />
    </ArticleLayout>
  );
}
