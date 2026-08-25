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

export default function GulliversTravelsAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Gulliver&apos;s Travels is public domain, so a free audiobook of it
          is one download away. <strong>LoudReader</strong> (native Mac and
          iPhone apps) reads Jonathan Swift&apos;s complete text aloud with a
          natural offline voice, all four voyages, no cost, no time limit.
          One honest note up front: this is a synthetic voice reading
          Swift&apos;s text on your device, not a studio-recorded
          performance. At roughly 52,000 words, it runs about 6 hours, short
          enough for a few commutes. Hear a sample on the{" "}
          <Link
            href="/listen/gullivers-travels"
            className="text-loudBlue hover:underline"
          >
            Gulliver&apos;s Travels catalog page
          </Link>
          , then open the app, where the book is already built in, and press
          play.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="The full 1726 text, all four voyages, read aloud on your device."
      />

      <QuestionSection question="Where can you listen to Gulliver's Travels for free?">
        <p>
          Jonathan Swift died in 1745, and Gulliver&apos;s Travels has been
          public domain for a very long time. Project Gutenberg carries the
          complete text as ebook #17157, so there&apos;s no cost or paywall
          standing between you and the book. What a plain Gutenberg file
          can&apos;t do is read itself to you.
        </p>
        <p>
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          does that part. Gulliver&apos;s Travels is already in the
          app&apos;s built-in library of 70,000+ free Gutenberg books, so
          there&apos;s nothing to find or convert. Open the app, search for
          it, press play. You can hear the voice first on the{" "}
          <Link
            href="/listen/gullivers-travels"
            className="text-loudBlue hover:underline"
          >
            Gulliver&apos;s Travels page
          </Link>
          , which has a rendered sample.
        </p>
      </QuestionSection>

      <QuestionSection question="Is this the whole book, or just the Lilliput part?">
        <p>
          The whole book. A lot of people only know the Lilliput voyage,
          because it&apos;s the section most abridged children&apos;s
          editions keep and the rest get cut. The complete novel has three
          more voyages: Brobdingnag, where Gulliver is the tiny one and a
          giant king delivers one of literature&apos;s harshest verdicts on
          humanity; the flying island of Laputa, populated by useless
          philosophers; and finally the land of the Houyhnhnms, rational
          horses who rule over filthy, greedy creatures that look exactly
          like us. Swift&apos;s satire gets darker and stranger as it goes,
          and the full text this reading uses is exactly as Project
          Gutenberg has it, unabridged.
        </p>
      </QuestionSection>

      <QuestionSection question="What does the narration sound like?">
        <p>
          Direct answer: it&apos;s a synthetic voice, not a human actor.
          LoudReader builds its narration from {"natural offline voices"},
          generated live on your device as the book plays, with no separate
          audio file to download or store. It reads the whole novel in one
          consistent voice, Gulliver&apos;s deadpan reporting included,
          rather than performing distinct characters.
        </p>
        <p>
          That deadpan tone is actually a decent fit for how the book is
          written. Swift&apos;s joke is that Gulliver narrates the most
          absurd things in the flat, matter-of-fact voice of a ship&apos;s
          log, and a synthetic reader doesn&apos;t editorialize either. Still,
          if what you want is a performed audiobook with dramatic emphasis
          and a distinct voice actor, a commercial edition will give you
          that, and this app won&apos;t pretend to compete with it on that
          front. What it gives you instead is the whole book, free, on
          demand.
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
            Search the built-in Gutenberg catalog inside the app for
            Gulliver&apos;s Travels. No file to hunt down, no conversion
            step.
          </li>
          <li>
            Press play. LoudReader is{" "}
            {"fully on-device and private, your library never leaves your device"},
            so the whole book plays without a connection once it&apos;s
            loaded.
          </li>
          <li>
            If you&apos;d rather push through the four voyages faster once
            you&apos;re used to the voice, Premium adds playback speed from 0.3x
            to 3.0x. The free tier plays at normal speed.
          </li>
        </ol>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Start Gulliver's Travels tonight"
        subline="It's already in LoudReader's free Gutenberg library. Import nothing, just press play."
      />
    </ArticleLayout>
  );
}
