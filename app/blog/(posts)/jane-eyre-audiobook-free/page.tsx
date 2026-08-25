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

export default function JaneEyreAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Jane Eyre has been public domain for well over a century, so a free
          audiobook always exists somewhere, and you can be listening in a
          couple of minutes. One honest note first: the fastest free option is
          a synthetic voice reading Charlotte Bronte&apos;s actual text, not a
          performed audiobook with a trained human narrator. <strong>LoudReader</strong>{" "}
          (native Mac and iPhone apps) has Jane Eyre built into its 70,000+
          Project Gutenberg catalog already, so there&apos;s no file to find or
          convert. Open the book, press play, and it reads aloud with natural
          offline voices, free with unlimited listening and no account. You
          can hear what it actually sounds like, with a real rendered sample,
          on the{" "}
          <Link href="/listen/jane-eyre" className="text-loudBlue hover:underline">
            Jane Eyre catalog page
          </Link>{" "}
          before you install anything.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Jane Eyre, read aloud from the Gutenberg text, on your terms."
      />

      <QuestionSection question="Is there a free Jane Eyre audiobook?">
        <p>
          Yes, and it&apos;s not a gray area. Charlotte Bronte published Jane
          Eyre in 1847, and its copyright expired long ago, which puts the
          full text in the public domain everywhere. Project Gutenberg hosts
          it free, and anyone, including a text-to-speech app, can turn that
          text into an audiobook without licensing it from anyone.
        </p>
        <p>
          That&apos;s different from finding a free copy of a commercial
          audiobook, which usually means someone uploaded a recording they
          didn&apos;t have the right to share. Jane Eyre doesn&apos;t need
          that shortcut. The book is genuinely, permanently free to read
          aloud.
        </p>
      </QuestionSection>

      <QuestionSection question="What does a free Jane Eyre audiobook actually sound like?">
        <p>
          This is the part worth being upfront about. A free public-domain
          audiobook made this way is a synthetic voice reading the real
          Gutenberg text, not a performed recording by a professional
          narrator. LoudReader&apos;s voices are natural offline voices
          rather than the flat, robotic text-to-speech you might remember
          from years ago, and they hold up over Bronte&apos;s long,
          formal, first-person sentences without stumbling. But a synthetic
          voice doesn&apos;t act the way a trained human narrator does,
          shifting tone for Mr. Rochester or building dread at Thornfield.
          It reads what&apos;s on the page, clearly and consistently.
        </p>
        <p>
          You don&apos;t have to take that on faith. The{" "}
          <Link href="/listen/jane-eyre" className="text-loudBlue hover:underline">
            Jane Eyre catalog page
          </Link>{" "}
          plays a short rendered sample of the opening in your browser, no
          install required, so you can hear the actual voice before deciding
          anything.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I listen to Jane Eyre free right now?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Play the sample on the{" "}
            <Link href="/listen/jane-eyre" className="text-loudBlue hover:underline">
              Jane Eyre catalog page
            </Link>{" "}
            to hear the voice.
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
            on your Mac or iPhone. Free, no account.
          </li>
          <li>
            Open the built-in Gutenberg catalog inside the app and search for
            Jane Eyre. It&apos;s already there, no file to import.
          </li>
          <li>
            Press play. The current sentence and word highlight as it reads,
            and your place is saved automatically if you stop partway
            through.
          </li>
        </ol>
        <p>
          You can also import your own EPUB or PDF of Jane Eyre the same way
          if you already have a specific edition, but with the book built
          into the catalog, most people won&apos;t need to.
        </p>
      </QuestionSection>

      <QuestionSection question="What if you want a human narrator instead?">
        <p>
          Fair preference, and worth saying plainly: if a performed reading
          matters more to you than speed and convenience, <Link href="/blog/librivox-alternative" className="text-loudBlue hover:underline">LibriVox</Link> has
          volunteer-read, human-narrated recordings of Jane Eyre free as MP3
          downloads. They vary in reader quality since anyone can volunteer,
          but they&apos;re a real human performance, which a synthetic voice
          isn&apos;t trying to replace. LoudReader&apos;s advantage is
          different: instant access to any of 70,000+ Gutenberg titles, not
          just the ones that happened to get a volunteer recording, plus
          word-by-word highlighting and offline playback on the same book.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Start Jane Eyre in under a minute"
        subline="It's already in the built-in Gutenberg catalog. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
