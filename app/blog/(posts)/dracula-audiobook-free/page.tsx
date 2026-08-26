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

export default function DraculaAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Dracula is public domain, so a free full-length audiobook of it is
          already built into <strong>LoudReader</strong> (iPhone, iPad, and Mac). One honest note first: this is a synthetic voice
          reading Bram Stoker&apos;s actual text on your device, not a
          professionally performed recording with a human narrator. If
          that&apos;s enough for you, open the app, find{" "}
          <Link
            href="/listen/dracula"
            className="text-loudBlue hover:underline"
          >
            Dracula
          </Link>{" "}
          in the built-in Project Gutenberg catalog, and press play. No
          purchase, no account, natural offline voices, and it works with no
          connection because LoudReader is fully on-device and private, your
          library never leaves your device.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Diaries, letters, and a count who doesn't die, read aloud for free."
      />

      <QuestionSection question="Is there really a free Dracula audiobook?">
        <p>
          Yes. Bram Stoker published Dracula in 1897, and the copyright
          expired long ago, so the full text is free on Project Gutenberg for
          anyone to read or listen to. LoudReader has it built into the free
          catalog already, so there&apos;s no file to download or convert.
          You can hear a sample of the opening on the{" "}
          <Link
            href="/listen/dracula"
            className="text-loudBlue hover:underline"
          >
            Dracula catalog page
          </Link>{" "}
          before you open the app.
        </p>
      </QuestionSection>

      <QuestionSection question="What does the free version actually sound like?">
        <p>
          It sounds like a computer reading, clearly and steadily, not like a
          radio horror production. LoudReader&apos;s narration is a synthetic
          voice, generated on your device with natural offline voices.
          Dracula is told through Jonathan Harker&apos;s journal, Mina&apos;s
          letters, Dr. Seward&apos;s phonograph diary, and newspaper
          clippings, an ensemble of documents in the original text, and
          LoudReader reads all of it in one consistent voice rather than a
          distinct cast per character. It won&apos;t build the slow dread the
          way a skilled full-cast production would. What it gives you is the
          entire epistolary novel narrated, start to finish, for free.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you play it in LoudReader?">
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
            on your iPhone or Mac. Free, no account.
          </li>
          <li>
            Open the built-in Project Gutenberg catalog and search the
            title, or go straight to the{" "}
            <Link
              href="/listen/dracula"
              className="text-loudBlue hover:underline"
            >
              Dracula
            </Link>{" "}
            page to hear the sample first.
          </li>
          <li>Tap the book. It downloads once, then plays offline after that.</li>
          <li>Press play. LoudReader remembers your exact place every time.</li>
        </ol>
        <p>
          Free listening on Dracula is unlimited, cover to cover. Premium
          adds playback speed from 0.3x to 3.0x, a sleep timer, and every
          other voice in the app, none of it required to finish the book.
        </p>
      </QuestionSection>

      <QuestionSection question="How long is the Dracula audiobook, and can you listen on a commute?">
        <p>
          Around 16.5 hours, based on the novel&apos;s roughly 148,400 words.
          That&apos;s a word-count estimate, not a measured recording time,
          the same figure shown on the book&apos;s own catalog page. It&apos;s
          one of the longer titles on this list, so it works well spread
          across a couple of weeks of commutes rather than one sitting. See{" "}
          <Link
            href="/blog/listen-to-books-while-driving"
            className="text-loudBlue hover:underline"
          >
            how to listen to books while driving
          </Link>{" "}
          for the setup: import or open the book before you start the car,
          then control it entirely from the lock screen.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Press play on Dracula"
        subline="Free, built into the app, no account. Natural offline voices, on Mac and iPhone."
      />
    </ArticleLayout>
  );
}
