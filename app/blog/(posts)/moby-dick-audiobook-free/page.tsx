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

export default function MobyDickAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Moby Dick is public domain, so a free full-length audiobook of it
          is already built into <strong>LoudReader</strong> (native Mac and
          iPhone apps). One honest note first: this is a synthetic voice
          reading Herman Melville&apos;s actual text on your device, not a
          professionally performed recording with a human narrator. If
          that&apos;s what you need to finally get through it, open the app,
          find{" "}
          <Link
            href="/listen/moby-dick"
            className="text-loudBlue hover:underline"
          >
            Moby Dick
          </Link>{" "}
          in the built-in Project Gutenberg catalog, and press play. No
          purchase, no account, natural offline voices, and it works with no
          connection because LoudReader is fully on-device and private, your
          library never leaves your device.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="&quot;Call me Ishmael.&quot; Read aloud, free, all 23.5 hours of it."
      />

      <QuestionSection question="Is there really a free Moby Dick audiobook?">
        <p>
          Yes. Herman Melville published Moby Dick in 1851, and the
          copyright expired long ago, so the full text is free on Project
          Gutenberg for anyone to read or listen to. LoudReader has it built
          into the free catalog already, no file to hunt down. You can hear
          a sample of the famous opening on the{" "}
          <Link
            href="/listen/moby-dick"
            className="text-loudBlue hover:underline"
          >
            Moby Dick catalog page
          </Link>{" "}
          before you open the app.
        </p>
      </QuestionSection>

      <QuestionSection question="What does the free version actually sound like?">
        <p>
          It sounds like a computer reading, clearly and steadily, not a
          seasoned narrator relishing Melville&apos;s digressions on whaling
          and fate. LoudReader&apos;s narration is a synthetic voice,
          generated on your device with natural offline voices. It won&apos;t
          add the dramatic weight a great human reading gives Ahab&apos;s
          obsession. What it gives you is the entire novel, cetology
          chapters and all, read out loud at a steady pace with the current
          word highlighted on screen, for free.
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
              href="/listen/moby-dick"
              className="text-loudBlue hover:underline"
            >
              Moby Dick
            </Link>{" "}
            page to hear the sample first.
          </li>
          <li>Tap the book. It downloads once, then plays offline after that.</li>
          <li>Press play. LoudReader remembers your exact place every time.</li>
        </ol>
        <p>
          Free listening on Moby Dick is unlimited, cover to cover, no word
          quota. Premium adds playback speed from 0.3x to 3.0x, a sleep
          timer, and every other voice in the app. At 23.5 hours, nudging the
          speed up on familiar chapters is a reasonable way to keep momentum,
          but it costs nothing to finish the book at normal speed either.
        </p>
      </QuestionSection>

      <QuestionSection question="How long is Moby Dick, and is it worth the time?">
        <p>
          Around 23.5 hours, based on the novel&apos;s roughly 212,700 words,
          the longest title in this batch of free classics by a wide margin.
          That&apos;s a word-count estimate, not a measured recording, the
          same figure shown on the book&apos;s own catalog page. The book is
          long on purpose, alternating a whaling adventure with essay-like
          chapters, and some readers find that structure works better as
          audio than on the page, where a wandering aside feels less like a
          detour and more like a storyteller talking.
        </p>
        <p>
          If you&apos;d rather borrow a volunteer-read recording instead of a
          synthetic one, the free alternatives and the tradeoffs are covered
          in{" "}
          <Link
            href="/blog/librivox-alternative"
            className="text-loudBlue hover:underline"
          >
            LibriVox alternative
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Press play on Moby Dick"
        subline="Free, built into the app, no account. Natural offline voices, on Mac and iPhone."
      />
    </ArticleLayout>
  );
}
