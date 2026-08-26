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

export default function HoundOfTheBaskervillesAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The Hound of the Baskervilles is public domain, so you can hear the
          full Sherlock Holmes novel read aloud for free, right now.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) reads
          Arthur Conan Doyle&apos;s complete text aloud with a natural
          offline voice, no cost, no time limit. One honest note first: this
          is a synthetic voice reading Doyle&apos;s text on your device, not
          a studio-recorded performance with separate voices for Holmes and
          Watson. At roughly 65,000 words, it runs about 7 hours, a
          manageable listen over a few evenings. Hear a sample on the{" "}
          <Link
            href="/listen/the-hound-of-the-baskervilles"
            className="text-loudBlue hover:underline"
          >
            The Hound of the Baskervilles catalog page
          </Link>
          , then open the app, where the book is already built in, and press
          play.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Holmes's most famous case, read aloud from the original text."
      />

      <QuestionSection question="Where can you listen to The Hound of the Baskervilles for free?">
        <p>
          Arthur Conan Doyle died in 1930, and The Hound of the Baskervilles
          has been public domain for decades. Project Gutenberg carries the
          complete text as ebook #2852, so there&apos;s no cost standing
          between you and the story. The catch with any plain Gutenberg file
          is that it just sits there. Nothing reads it to you.
        </p>
        <p>
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          handles that part. The novel is already in the app&apos;s built-in
          library of 70,000+ free Gutenberg books, so there&apos;s nothing to
          download or convert first, and no separate file to lose track of
          later. Open the app, search for it, press play. You can hear the
          voice before committing on the{" "}
          <Link
            href="/listen/the-hound-of-the-baskervilles"
            className="text-loudBlue hover:underline"
          >
            The Hound of the Baskervilles page
          </Link>
          , which has a rendered sample.
        </p>
      </QuestionSection>

      <QuestionSection question="Is this a good audiobook for a spooky night in?">
        <p>
          It has a real claim to being the best Holmes novel for exactly
          that. A family curse, a phantom hound heard howling across
          Dartmoor, and Holmes staying in London while Watson is sent alone
          to guard the new heir among escaped convicts and secretive
          neighbors, the story balances a rational detective plot against
          genuine Gothic dread and lets both possibilities stay open until
          the end. The moor itself, vast and mire-ridden, does as much work
          as any character in the book. It reads well after dark, and an
          audiobook is a natural way to take it in, since a voice narrating
          the fog and the howling in the dark does more of the atmospheric
          work than your eyes moving down a page.
        </p>
      </QuestionSection>

      <QuestionSection question="What does the narration actually sound like?">
        <p>
          Worth stating plainly. LoudReader&apos;s narrator is a synthetic
          voice, not a human actor. It&apos;s built from{" "}
          {"natural offline voices"}, generated live on your device as you
          listen, with no separate audio file created or stored. Holmes,
          Watson, and the moor&apos;s cast of suspects are all read in the
          same consistent voice, not performed as distinct characters.
        </p>
        <p>
          If a full-cast dramatization with different voice actors matters
          to you more than getting the book for free right now, a commercial
          audiobook edition will do that better. What LoudReader gives you
          instead is the complete, unabridged novel, narrated on demand,
          with word-by-word highlighting tracking along the text as it
          reads, useful for keeping your place through Doyle&apos;s longer
          passages of scene-setting on the moor.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you start listening right now?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Get{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader from the App Store
            </a>
            . Free, no account required.
          </li>
          <li>
            Search the built-in Gutenberg catalog inside the app for The
            Hound of the Baskervilles. No file to find, no conversion step.
          </li>
          <li>
            Press play. LoudReader is{" "}
            {"fully on-device and private, your library never leaves your device"},
            so all 7 hours play without a connection once the book is
            loaded.
          </li>
          <li>
            Want more Holmes after this one, or more free classics in
            general? The built-in Gutenberg catalog covers 70,000+ titles,
            far more than any single genre page could ever list, so the
            next book after this one is already in the same app.
          </li>
        </ol>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Start The Hound of the Baskervilles tonight"
        subline="It's already in LoudReader's free Gutenberg library. Import nothing, just press play."
      />
    </ArticleLayout>
  );
}
