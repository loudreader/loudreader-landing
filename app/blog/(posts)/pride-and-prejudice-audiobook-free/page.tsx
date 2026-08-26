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

export default function PrideAndPrejudiceAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Pride and Prejudice is public domain, so a free full-length
          audiobook of it is one tap away in <strong>LoudReader</strong>{" "}
          (iPhone, iPad, and Mac). One honest note first: this is a
          synthetic voice reading Jane Austen&apos;s actual text, generated
          on your device, not a professionally performed recording with a
          human narrator. If that&apos;s what you&apos;re after, open the app,
          find{" "}
          <Link
            href="/listen/pride-and-prejudice"
            className="text-loudBlue hover:underline"
          >
            Pride and Prejudice
          </Link>{" "}
          in the built-in Project Gutenberg catalog, and press play. No
          purchase, no library hold, no account. It runs on natural offline
          voices and works with no connection once it&apos;s open, because
          LoudReader is fully on-device and private, your library never
          leaves your device.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Elizabeth Bennet and Mr. Darcy, read aloud for free."
      />

      <QuestionSection question="Is there really a free Pride and Prejudice audiobook?">
        <p>
          Yes, and it&apos;s not a trick or a trial. Jane Austen died in 1817
          and Pride and Prejudice was published in 1813, so the copyright
          expired long ago and the full text sits free on Project Gutenberg
          for anyone to read. LoudReader has it built into its free catalog
          already, so you never touch a file. You can hear a sample of the
          opening lines directly on the{" "}
          <Link
            href="/listen/pride-and-prejudice"
            className="text-loudBlue hover:underline"
          >
            Pride and Prejudice catalog page
          </Link>{" "}
          before you even open the app, to check the voice suits you.
        </p>
      </QuestionSection>

      <QuestionSection question="What does the free version actually sound like?">
        <p>
          It sounds like a computer reading, clearly and evenly, not like a
          BBC radio drama. LoudReader&apos;s narration is a synthetic voice,
          generated on your device with natural offline voices, and it will
          not do a different register for Mr. Collins&apos; obsequiousness or
          Lady Catherine&apos;s condescension the way a skilled human narrator
          would. What it does well is deliver Austen&apos;s sentences at a
          steady pace with a real place kept and a word-by-word highlight
          synced to the audio, so you can follow along on the page while you
          listen. If you want the full performed version with distinct
          voices for every character, look at a commercial audiobook edition
          instead. If you want the whole novel read aloud for free, today,
          this does that.
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
            Open the built-in Project Gutenberg catalog and browse by title
            or author, or jump straight to the{" "}
            <Link
              href="/listen/pride-and-prejudice"
              className="text-loudBlue hover:underline"
            >
              Pride and Prejudice
            </Link>{" "}
            page to preview the sample first.
          </li>
          <li>Tap the book. It downloads once, then it&apos;s yours offline.</li>
          <li>
            Press play. LoudReader remembers exactly where you stopped, every
            time you come back.
          </li>
        </ol>
        <p>
          Free listening on Pride and Prejudice is unlimited, cover to cover.
          Premium adds playback speed from 0.3x to 3.0x, a sleep timer, and
          every other voice in the app, but none of that is required to
          finish the book.
        </p>
      </QuestionSection>

      <QuestionSection question="How long is the Pride and Prejudice audiobook?">
        <p>
          Roughly 14.5 hours, based on the novel&apos;s length of about
          128,700 words. That&apos;s an estimate from the text, not a
          measured recording, the same figure LoudReader shows on the
          book&apos;s own catalog page. It&apos;s a long book by the standards
          of this list, but the dialogue-heavy chapters move fast, so it
          splits comfortably across a week or two of commutes.
        </p>
        <p>
          If you&apos;re working through the wider Austen shelf or other free
          classics, the full walkthrough of what&apos;s available is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Press play on Pride and Prejudice"
        subline="Free, built into the app, no account. Natural offline voices, on Mac and iPhone."
      />
    </ArticleLayout>
  );
}
