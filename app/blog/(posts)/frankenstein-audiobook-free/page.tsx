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

export default function FrankensteinAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Frankenstein is public domain, so a free full-length audiobook of
          it is already sitting inside <strong>LoudReader</strong> (native
          Mac and iPhone apps). One honest note first: this is a synthetic
          voice reading Mary Shelley&apos;s actual text on your device, not a
          professionally performed recording with a human narrator. If
          that&apos;s what you need, open the app, find{" "}
          <Link
            href="/listen/frankenstein"
            className="text-loudBlue hover:underline"
          >
            Frankenstein
          </Link>{" "}
          in the built-in Project Gutenberg catalog, and press play. No
          purchase, no account, natural offline voices, and it works with no
          connection because LoudReader is fully on-device and private, your
          library never leaves your device.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="The creature learned to speak. Now it's read aloud, free."
      />

      <QuestionSection question="Is there really a free Frankenstein audiobook?">
        <p>
          Yes. Mary Shelley published Frankenstein in 1818, and the copyright
          expired long ago, so the full text is free on Project Gutenberg for
          anyone to read or listen to. LoudReader has it built into the free
          catalog already, no file to hunt down. You can hear a sample of the
          opening framing letters on the{" "}
          <Link
            href="/listen/frankenstein"
            className="text-loudBlue hover:underline"
          >
            Frankenstein catalog page
          </Link>{" "}
          before you open the app.
        </p>
      </QuestionSection>

      <QuestionSection question="What does the free version actually sound like?">
        <p>
          It sounds like a computer reading, clearly and evenly, not like a
          horror-radio production. LoudReader&apos;s narration is a synthetic
          voice, generated on your device with natural offline voices, and it
          reads the ship captain&apos;s letters, Victor&apos;s confession, and
          the creature&apos;s own eloquent account in the same voice, rather
          than switching cast for each. It won&apos;t build dread the way a
          full-cast audio drama would. What it does is get the whole
          nested, epistolary structure of the novel read out loud, start to
          finish, at no cost.
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
              href="/listen/frankenstein"
              className="text-loudBlue hover:underline"
            >
              Frankenstein
            </Link>{" "}
            page to hear the sample first.
          </li>
          <li>Tap the book. It downloads once, then plays offline after that.</li>
          <li>Press play. LoudReader remembers your exact place every time.</li>
        </ol>
        <p>
          Free listening on Frankenstein is unlimited, cover to cover.
          Premium adds playback speed from 0.3x to 3.0x, a sleep timer, and
          every other voice in the app, none of it required to finish the
          book.
        </p>
      </QuestionSection>

      <QuestionSection question="How long is the Frankenstein audiobook?">
        <p>
          Around 8.5 hours, based on the novel&apos;s roughly 74,800 words.
          That&apos;s a word-count estimate, not a measured recording time,
          the same figure shown on the book&apos;s own catalog page. It&apos;s
          one of the shorter classics here, easy to finish in a handful of
          evenings.
        </p>
        <p>
          For more free horror and gothic classics like this one, the built-in
          catalog is browsable by genre, and the case for it is laid out in{" "}
          <Link
            href="/blog/best-audiobook-app-for-classics"
            className="text-loudBlue hover:underline"
          >
            the best audiobook app for classics
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Press play on Frankenstein"
        subline="Free, built into the app, no account. Natural offline voices, on Mac and iPhone."
      />
    </ArticleLayout>
  );
}
