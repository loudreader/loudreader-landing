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

export default function SherlockHolmesAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The Adventures of Sherlock Holmes is public domain, so a free
          audiobook of it is one tap away.{" "}
          <Link
            href="/listen/the-adventures-of-sherlock-holmes"
            className="text-loudBlue hover:underline"
          >
            LoudReader&apos;s catalog page for the book
          </Link>{" "}
          lets you hear an opening sample before you commit to anything, and
          the full 12 stories play free in the app with unlimited listening.
          One honest thing up front: this is a synthetic voice reading the
          real Gutenberg text on your device, not a professional audiobook
          performance. It runs about 11.5 hours across the twelve cases, and
          it is <strong>fully on-device and private, your library never
          leaves your device</strong>, so once the book is downloaded it
          plays with no connection at all. To listen, get{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) free from
          the App Store, search Sherlock Holmes in the built-in catalog, and
          press play.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="The same text Doyle wrote, read aloud by a natural offline voice."
      />

      <QuestionSection question="Where can you listen to Sherlock Holmes free right now?">
        <p>
          Start with the sample.{" "}
          <Link
            href="/listen/the-adventures-of-sherlock-holmes"
            className="text-loudBlue hover:underline"
          >
            The book&apos;s catalog page
          </Link>{" "}
          plays a real rendered clip of the opening, so you can hear the voice
          before installing anything. From there, the full listen happens
          inside the LoudReader app: the entire Project Gutenberg edition of{" "}
          <em>The Adventures of Sherlock Holmes</em> is already built into the
          catalog, so there is nothing to download separately and no file to
          find. Search the title, tap it, press play.
        </p>
        <p>
          This is worth saying plainly, because it is the honest core of the
          whole article: what you are hearing is a computer voice reading
          Arthur Conan Doyle&apos;s actual words, generated on your device. It
          is not a recording of a professional narrator performing the book.
          If a performed narration matters to you specifically for Holmes,
          check an audiobook store or a library app like Libby first, since
          Holmes is popular enough that recordings usually exist. If you just
          want to hear the stories today, for free, with no waiting list,
          this is the fastest route there is.
        </p>
      </QuestionSection>

      <QuestionSection question="What does a synthetic Sherlock Holmes audiobook actually sound like?">
        <p>
          Steady and clear, closer to a good reference recording than to a
          dramatized performance. LoudReader&apos;s voices are{" "}
          <strong>natural offline voices</strong> built to read continuous
          prose evenly, with normal sentence rhythm and pausing. What they
          don&apos;t do is act: no distinct voice for Holmes versus Watson,
          no dramatic tension held for a reveal. For a mystery that leans on
          Conan Doyle&apos;s own prose to build suspense, that is a fair
          trade rather than a loss, but it is a different listening
          experience than a performed audiobook, and you should know that
          before you start the first story.
        </p>
        <p>
          The free tier gives you one voice with unlimited listening.{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            LoudReader Premium
          </Link>{" "}
          opens all 23 narrators across the app&apos;s language roster,
          including 11 English voices, so if the default voice doesn&apos;t
          suit a Baker Street mystery, you can try a few others until one
          does. Speed control from 0.3x to 3.0x is also a Premium feature,
          useful for slowing down the denser deduction passages or speeding
          through familiar setup scenes.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you start listening in the next five minutes?">
        <ol className="list-decimal pl-6 space-y-2">
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
            on iPhone or Mac. Free, no account required.
          </li>
          <li>
            Open the built-in Project Gutenberg catalog inside the app and
            search &ldquo;Sherlock Holmes.&rdquo; The Adventures of Sherlock
            Holmes is one of the 70,000+ titles already there.
          </li>
          <li>
            Tap the book, then press play. The text loads once and then plays
            fully offline from there, with each word highlighted as it is
            read.
          </li>
          <li>
            Pick a story to start with; each one is a self-contained case
            around 40 to 50 minutes long, so you don&apos;t need to commit to
            the whole collection in one sitting.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="What is The Adventures of Sherlock Holmes, and why does it hold up?">
        <p>
          Published in 1892, it collects the first twelve short Holmes cases
          Arthur Conan Doyle wrote for The Strand Magazine, from{" "}
          <em>A Scandal in Bohemia</em> through{" "}
          <em>The Adventure of the Copper Beeches</em>. Each story is
          self-contained: a client climbs the stairs to 221B Baker Street with
          an impossible problem, and Holmes solves it in front of the reader
          rather than after the fact. That format is exactly why the book
          reads (and listens) so well in short sessions rather than one long
          push.
        </p>
        <p>
          If you want the wider case for reading classics this way, or a
          catalog of other titles built into LoudReader,{" "}
          <Link
            href="/blog/project-gutenberg-audiobooks"
            className="text-loudBlue hover:underline"
          >
            Project Gutenberg audiobooks
          </Link>{" "}
          covers the free routes in general. This article stays narrow on
          purpose: it is about getting this one book playing today.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear Sherlock Holmes free, today"
        subline="The full 12 stories are built into LoudReader's Gutenberg catalog. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
