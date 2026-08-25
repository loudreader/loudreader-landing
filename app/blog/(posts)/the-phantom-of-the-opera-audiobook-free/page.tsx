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

export default function PhantomOfTheOperaAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The Phantom of the Opera novel is public domain, so a free
          audiobook of it is one download away. <strong>LoudReader</strong>{" "}
          (native Mac and iPhone apps) reads Gaston Leroux&apos;s original
          1910 text aloud with a natural offline voice, no cost, no time
          limit. One honest note first: this is a synthetic voice reading
          Leroux&apos;s text on your device, not a studio-recorded
          performance, and it is the novel, not the musical. At roughly
          84,000 words, it runs about 9.5 hours. Hear a sample on the{" "}
          <Link
            href="/listen/the-phantom-of-the-opera"
            className="text-loudBlue hover:underline"
          >
            The Phantom of the Opera catalog page
          </Link>
          , then open the app, where the book is already built in, and press
          play.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="The original 1910 novel, read aloud on your device."
      />

      <QuestionSection question="Where can you listen to The Phantom of the Opera for free?">
        <p>
          Gaston Leroux died in 1927, and his novel has been public domain
          for a long time. Project Gutenberg carries the complete text as
          ebook #175, so nothing stands between you and the story except
          finding someone, or something, to read it aloud. A plain Gutenberg
          text file can&apos;t do that on its own.
        </p>
        <p>
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          does. The novel is already in the app&apos;s built-in library of
          70,000+ free Gutenberg books, so there&apos;s nothing to find or
          convert first. Open the app, search for it, press play. You can
          hear the voice first on the{" "}
          <Link
            href="/listen/the-phantom-of-the-opera"
            className="text-loudBlue hover:underline"
          >
            The Phantom of the Opera page
          </Link>
          , which has a rendered sample.
        </p>
      </QuestionSection>

      <QuestionSection question="Is this the musical, or something different?">
        <p>
          Something different, and stranger. Most people know Phantom of the
          Opera through the long-running musical, which is a real thing but
          not what this reading covers. Leroux&apos;s original novel frames
          the whole story as investigative journalism, complete with
          witness testimony and documents, which gives its gothic melodrama
          a strange, convincing plausibility. Erik, the Phantom, is a
          composer, an architect, and a ventriloquist as well as a monster,
          and a far stranger and sadder figure on the page than any
          adaptation has room for. If all you know is the show, the book is
          a genuinely different experience of the same haunted opera house,
          closer to a mystery novel with a monster in it than to a romance
          with songs.
        </p>
      </QuestionSection>

      <QuestionSection question="What does the narration sound like?">
        <p>
          Direct answer: it&apos;s a synthetic voice, not a human actor.
          LoudReader builds its narration from {"natural offline voices"},
          generated live on your device as the book plays, with no separate
          audio file created or downloaded. Christine, Raoul, and the
          Phantom are all read in one consistent voice, the way any
          text-to-speech reader works, rather than performed as separate
          characters.
        </p>
        <p>
          If a full-cast, dramatically performed audiobook is what you want,
          a commercial edition will give you that, and this article
          won&apos;t pretend LoudReader competes with it on that front. What
          you get instead is the complete, unabridged novel, narrated for
          free, with word-by-word highlighting tracking the text as it
          reads, useful for keeping your place through Leroux&apos;s longer
          descriptive passages beneath the Opera, including the sections
          on the building&apos;s architecture that most adaptations skip
          entirely.
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
            Phantom of the Opera. No file to hunt down, no conversion step,
            and nothing to keep track of afterward.
          </li>
          <li>
            Press play. LoudReader is{" "}
            {"fully on-device and private, your library never leaves your device"},
            so the whole 9.5 hours play without a connection once the book
            is loaded.
          </li>
          <li>
            Once you&apos;re used to the voice, Premium adds playback speed
            from 0.3x to 3.0x if you want to move faster through the
            slower stretches. The free tier plays at normal speed and stays
            unlimited either way.
          </li>
        </ol>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Start The Phantom of the Opera tonight"
        subline="It's already in LoudReader's free Gutenberg library. Import nothing, just press play."
      />
    </ArticleLayout>
  );
}
