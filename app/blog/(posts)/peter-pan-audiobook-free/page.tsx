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

export default function PeterPanAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Peter Pan is public domain, so you can hear the whole novel read
          aloud for free, right now, no library hold and no subscription.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) reads J. M.
          Barrie&apos;s full text, Peter and Wendy, aloud with a natural
          offline voice. One honest note first: this is a synthetic voice
          reading Barrie&apos;s text on your device, not a studio-recorded
          performance with different voices for Peter, Hook, and Tinker Bell.
          At roughly 48,000 words, it runs about 5.5 hours, short enough for
          a weekend. Hear a sample on the{" "}
          <Link href="/listen/peter-pan" className="text-loudBlue hover:underline">
            Peter Pan catalog page
          </Link>
          , then open the app, where the book is already built in, and press
          play.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Peter and Wendy, read aloud from the original 1911 text."
      />

      <QuestionSection question="Where can you listen to Peter Pan for free?">
        <p>
          J. M. Barrie died in 1937, and the novel version of Peter Pan,
          titled Peter and Wendy, has been public domain for decades.
          Project Gutenberg carries the complete text as ebook #16, which
          means a free audiobook of it isn&apos;t locked behind anything.
          The catch with any plain ebook file is that it just sits there.
          Nothing reads it to you.
        </p>
        <p>
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          closes that gap. Peter Pan is already in the app&apos;s built-in
          library of 70,000+ free Gutenberg books, so there&apos;s nothing to
          download or convert first. Open the app, find it, press play. If
          you want to hear the voice before you commit to the app, the{" "}
          <Link href="/listen/peter-pan" className="text-loudBlue hover:underline">
            Peter Pan catalog page
          </Link>{" "}
          has a rendered sample.
        </p>
      </QuestionSection>

      <QuestionSection question="Is it the real novel, or a shortened kids' version?">
        <p>
          It&apos;s the real thing. Most people know Peter Pan through a
          stage musical, a Disney film, or an abridged picture book, and all
          three sand down what Barrie actually wrote. The original novel is
          sharper, funnier, and a lot sadder than any of the adaptations,
          because Barrie is telling two stories at once: a children&apos;s
          adventure on the surface, and a much more melancholy meditation on
          growing up aimed over the children&apos;s heads at whoever is
          reading it to them. Heard as an audiobook, both stories land
          together, which is closer to how it was meant to be experienced in
          the first place. Barrie&apos;s narrator also keeps interrupting the
          plot to needle the reader directly, a habit picture-book versions
          almost always cut, and it&apos;s a big part of why the original
          reads so differently from what most adults remember.
        </p>
      </QuestionSection>

      <QuestionSection question="What does the narration actually sound like?">
        <p>
          Worth being direct about this. LoudReader&apos;s narrator is a
          synthetic voice, not a human actor. It&apos;s built from{" "}
          {"natural offline voices"}, generated on your device while you
          listen, with no separate audio file created or downloaded. It
          reads the whole book in one consistent voice, Peter, Hook,
          Wendy, and Barrie&apos;s own narration included, rather than
          performing a separate character for each one.
        </p>
        <p>
          That&apos;s a real trade-off, not a hidden one. If a full-cast
          dramatization is what you&apos;re after, a commercial audiobook
          will give you that and this article won&apos;t pretend otherwise.
          What you get here is the complete, unabridged Peter Pan, narrated
          on demand, for free, whenever you feel like pressing play.
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
            . It&apos;s free, no account needed.
          </li>
          <li>
            Search the built-in Gutenberg catalog inside the app for Peter
            Pan. No file to find, no conversion step.
          </li>
          <li>
            Press play. LoudReader is{" "}
            {"fully on-device and private, your library never leaves your device"},
            so all 5.5 hours play with no connection needed once the book is
            loaded.
          </li>
          <li>
            Word-by-word highlighting tracks along as it reads, useful if
            you&apos;re reading along with a child or want to follow
            Barrie&apos;s longer sentences without losing your place. If
            you&apos;re reading it as a bedtime story out loud together, the
            highlighting also makes it easy to pick up mid-sentence wherever
            you left off.
          </li>
        </ol>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear Peter Pan tonight"
        subline="It's already in LoudReader's free Gutenberg library. Import nothing, just press play."
      />
    </ArticleLayout>
  );
}
