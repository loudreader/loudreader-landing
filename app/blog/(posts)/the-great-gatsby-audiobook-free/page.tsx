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

export default function TheGreatGatsbyAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The Great Gatsby entered the public domain in 2021, so a free
          audiobook of it now exists inside <strong>LoudReader</strong>{" "}
          (iPhone, iPad, and Mac). One honest note up front: this is a
          synthetic voice reading Fitzgerald&apos;s actual text on your
          device, not a professionally performed recording with a human
          narrator. If that&apos;s enough, open the app, find{" "}
          <Link
            href="/listen/the-great-gatsby"
            className="text-loudBlue hover:underline"
          >
            The Great Gatsby
          </Link>{" "}
          in the built-in Project Gutenberg catalog, and press play. No
          purchase, no account, natural offline voices, and it keeps
          playing with no connection because LoudReader is fully on-device
          and private, your library never leaves your device.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="One green light across the bay, read aloud for free."
      />

      <QuestionSection question="Is there really a free Great Gatsby audiobook?">
        <p>
          Yes, and it&apos;s newer than you might think. Fitzgerald published
          The Great Gatsby in 1925, and under US copyright law the book
          stayed protected for 95 years, entering the public domain on
          January 1, 2021. That&apos;s why it&apos;s free on Project Gutenberg
          now in a way the 19th-century classics on this list have been for
          much longer. LoudReader has it built into the free catalog already,
          so there&apos;s no file to find. You can hear a sample of the
          opening on the{" "}
          <Link
            href="/listen/the-great-gatsby"
            className="text-loudBlue hover:underline"
          >
            Great Gatsby catalog page
          </Link>{" "}
          before you open the app.
        </p>
      </QuestionSection>

      <QuestionSection question="What does the free version actually sound like?">
        <p>
          It sounds like a computer reading Nick Carraway&apos;s narration
          clearly and steadily, not like a film adaptation&apos;s voiceover.
          LoudReader generates the audio on your device with natural offline
          voices, and it will not vary its delivery for the glitter of
          Gatsby&apos;s parties or the flatness of the valley of ashes the way
          a skilled actor would. What it gives you is the full text, read at
          a consistent pace, with the current word highlighted on screen so
          your eyes and ears stay together. If a performed reading matters
          more to you than the price, a commercial audiobook edition is the
          better fit. If you want the whole novel narrated for free today,
          this is that.
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
              href="/listen/the-great-gatsby"
              className="text-loudBlue hover:underline"
            >
              The Great Gatsby
            </Link>{" "}
            page to hear the sample first.
          </li>
          <li>Tap the book. It downloads once, then plays offline from then on.</li>
          <li>Press play. LoudReader saves your exact place every time.</li>
        </ol>
        <p>
          Free listening on The Great Gatsby is unlimited, no word quota.
          Premium adds playback speed from 0.3x to 3.0x, a sleep timer, and
          every other voice in the app, none of which you need to finish this
          particular book.
        </p>
      </QuestionSection>

      <QuestionSection question="How long is The Great Gatsby audiobook?">
        <p>
          Around 5.5 hours, based on the novel&apos;s roughly 51,100 words.
          That&apos;s a word-count estimate, not a measured recording time,
          the same figure shown on the book&apos;s own catalog page. It&apos;s
          the shortest title in this whole free-classics roundup, easily
          finished in one long drive or two or three commutes.
        </p>
        <p>
          For the wider case for free public-domain listening and how the
          built-in catalog works, see{" "}
          <Link
            href="/blog/project-gutenberg-audiobooks"
            className="text-loudBlue hover:underline"
          >
            Project Gutenberg audiobooks
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Press play on The Great Gatsby"
        subline="Free, built into the app, no account. Natural offline voices, on Mac and iPhone."
      />
    </ArticleLayout>
  );
}
