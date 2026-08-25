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

export default function TheOdysseyAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The Odyssey is public domain, so a free audiobook of it is a search
          away.{" "}
          <Link
            href="/listen/the-odyssey"
            className="text-loudBlue hover:underline"
          >
            LoudReader&apos;s catalog page for the poem
          </Link>{" "}
          plays a real sample of the opening before you install anything,
          and the full text plays free in the app with unlimited listening.
          One honest note first: this is a synthetic voice reading the
          Gutenberg translation on your device, not a performed audiobook.
          It runs about 13.5 hours, short enough for a normal week of
          commuting, and it is{" "}
          <strong>
            fully on-device and private, your library never leaves your
            device
          </strong>
          , so once downloaded it needs no connection. Homer&apos;s epic was
          composed to be heard aloud long before it was written down, so
          listening to it is, in a real sense, closer to the original
          experience than reading it silently. Get <strong>LoudReader</strong>{" "}
          (native Mac and iPhone apps) free from the App Store, search The
          Odyssey in the built-in catalog, and press play.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="An epic composed to be heard, read aloud by a natural offline voice."
      />

      <QuestionSection question="Where can you listen to The Odyssey free right now?">
        <p>
          Start with the sample.{" "}
          <Link
            href="/listen/the-odyssey"
            className="text-loudBlue hover:underline"
          >
            The poem&apos;s catalog page
          </Link>{" "}
          plays a rendered clip of the opening, so you can hear the voice
          before committing to the full listen. The rest happens inside the
          LoudReader app: the Gutenberg edition of <em>The Odyssey</em> is
          already built into the catalog, so nothing needs downloading
          separately. Search the title, tap it, press play.
        </p>
        <p>
          Worth saying plainly: what you hear is a computer voice reading a
          written translation of Homer&apos;s Greek, generated on your
          device. It is not a recording of a professional narrator, and
          nothing about the Cyclops, the Sirens, or Penelope&apos;s suitors
          is performed differently from any other passage. Performed
          recordings of The Odyssey exist through audiobook stores and
          library apps like Libby, and if that kind of narration is
          specifically what you want, it&apos;s worth checking. If you want
          the poem playing today, free, this is the faster route.
        </p>
      </QuestionSection>

      <QuestionSection question="What does a synthetic Odyssey audiobook actually sound like?">
        <p>
          Clear and even, reading the prose translation the way it reads on
          the page rather than as verse performance. LoudReader&apos;s voices
          are <strong>natural offline voices</strong> built for continuous
          narration, with normal sentence pacing and no added drama for the
          poem&apos;s big set pieces. What they don&apos;t do is act: no
          separate register for Odysseus&apos;s boasts, the gods&apos;
          arguments, or Penelope&apos;s patience. For a story built from
          episodic adventures strung together, that plainness is a
          reasonable trade, closer to a well-read reference text than a
          staged performance.
        </p>
        <p>
          The free tier gives you one voice with unlimited listening.{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            LoudReader Premium
          </Link>{" "}
          opens all 23 narrators, including 11 English voices, if you want to
          try a few and see which one suits an ancient epic best. Premium
          also unlocks playback speed from 0.3x to 3.0x, useful for slowing
          down the more genealogical passages (there are quite a few names)
          or moving faster through the parts you already know from
          adaptations.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you start listening in the next five minutes?">
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
            on iPhone or Mac. Free, no account required.
          </li>
          <li>
            Open the built-in Project Gutenberg catalog inside the app and
            search &ldquo;The Odyssey.&rdquo; It&apos;s one of the 70,000+
            titles already there.
          </li>
          <li>
            Tap the book, then press play. The text loads once and plays
            fully offline afterward, with each word highlighted as it is
            read.
          </li>
          <li>
            At 13.5 hours, a chapter or two on a commute clears the whole
            poem inside a couple of weeks.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="What is The Odyssey, and why does it still hold up?">
        <p>
          Homer composed The Odyssey somewhere between roughly 750 and 650
          BC, and it was performed aloud for audiences for centuries before
          anyone wrote it down. Odysseus, ten years into trying to get home
          from the Trojan War, faces a man-eating Cyclops, a sorceress who
          turns his crew into pigs, and the deadly song of the Sirens, while
          back on Ithaca his wife Penelope holds off a house full of suitors
          and his son Telemachus sets out to learn whether his father is
          alive at all. It is one of the oldest surviving works of Western
          literature, and it reads (and listens) less like homework than most
          people expect.
        </p>
        <p>
          If you want the broader case for listening to ancient and
          public-domain classics this way, or other titles in the catalog,{" "}
          <Link
            href="/blog/project-gutenberg-audiobooks"
            className="text-loudBlue hover:underline"
          >
            Project Gutenberg audiobooks
          </Link>{" "}
          covers that ground. This article stays narrow on purpose: it&apos;s
          about getting this one poem playing today.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear The Odyssey free, today"
        subline="The full poem is built into LoudReader's Gutenberg catalog. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
