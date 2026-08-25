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

export default function LittleWomenAudiobookFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Little Women is public domain, so a free audiobook of it is a
          search away.{" "}
          <Link
            href="/listen/little-women"
            className="text-loudBlue hover:underline"
          >
            LoudReader&apos;s catalog page for the book
          </Link>{" "}
          plays a real sample of the opening before you install anything, and
          the full novel plays free in the app with unlimited listening. One
          honest note up front: this is a synthetic voice reading the actual
          Gutenberg text on your device, not a performed audiobook with
          distinct voices for Meg, Jo, Beth, and Amy. It runs about 20.5
          hours, and it is{" "}
          <strong>
            fully on-device and private, your library never leaves your
            device
          </strong>
          , so once it&apos;s downloaded there&apos;s no connection needed to
          keep listening. Get <strong>LoudReader</strong> (native Mac and
          iPhone apps) free from the App Store, search Little Women in the
          built-in catalog, and press play.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="The March sisters' story, read aloud by a natural offline voice."
      />

      <QuestionSection question="Where can you listen to Little Women free right now?">
        <p>
          Start with the sample.{" "}
          <Link
            href="/listen/little-women"
            className="text-loudBlue hover:underline"
          >
            The book&apos;s catalog page
          </Link>{" "}
          plays a rendered clip of the opening, so you can hear the voice
          before committing to the full 20.5 hours. The full listen happens
          inside the LoudReader app: the entire Gutenberg edition of{" "}
          <em>Little Women</em> is already in the built-in catalog, so
          there&apos;s nothing extra to download. Search the title, tap it,
          press play.
        </p>
        <p>
          Worth saying plainly: what you&apos;re hearing is a computer voice
          reading Louisa May Alcott&apos;s actual words, generated on your
          device. It is not a recording of a professional narrator, and it
          doesn&apos;t give each sister a distinct voice. Little Women is
          popular enough that performed recordings exist through audiobook
          stores and library apps like Libby, and if that kind of
          dramatization is specifically what you want, look there first. If
          you want the whole book playing today, free, with no waiting list,
          this is the faster path.
        </p>
      </QuestionSection>

      <QuestionSection question="What does a synthetic Little Women audiobook actually sound like?">
        <p>
          Warm and unhurried, and reasonably well suited to the book&apos;s
          quiet, domestic register. LoudReader&apos;s voices are{" "}
          <strong>natural offline voices</strong> built to read continuous
          prose evenly, with normal sentence pacing. What they don&apos;t do
          is perform: no separate voice for each March sister, no held-back
          delivery for the book&apos;s more emotional chapters. Little Women
          leans on small, specific domestic scenes rather than plot
          mechanics, and a lot of its power is in the writing itself, which
          survives a plain reading better than a book that depends on
          dramatic pacing would.
        </p>
        <p>
          The free tier gives you one voice with unlimited listening.{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            LoudReader Premium
          </Link>{" "}
          opens all 23 narrators, including 11 English voices, so you can try
          a few and pick the one that feels right for this particular book.
          Premium also unlocks playback speed from 0.3x to 3.0x, if you want
          to move faster through familiar chapters or slow down for the ones
          you know you&apos;ll want to sit with.
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
            search &ldquo;Little Women.&rdquo; It&apos;s one of the 70,000+
            titles already there.
          </li>
          <li>
            Tap the book, then press play. The text loads once and plays
            fully offline afterward, with each word highlighted as it is
            read.
          </li>
          <li>
            Your place is saved automatically, so a chapter during a chore or
            a commute adds up without you keeping track of anything.
          </li>
        </ol>
      </QuestionSection>

      <QuestionSection question="What is Little Women, and why does it still land?">
        <p>
          Louisa May Alcott published the first part in 1868 and the second a
          year later; most editions today, including the Gutenberg text, run
          them together as one novel. With their father away serving in the
          Civil War, sisters Meg, Jo, Beth, and Amy March grow up together in
          genteel poverty in New England, quarreling, staging plays,
          befriending the wealthy boy next door, and figuring out who they
          want to become. Alcott based the family closely on her own, and the
          book&apos;s reputation as one of the most beloved American family
          stories has held for well over a century.
        </p>
        <p>
          If you want the broader case for listening to public-domain
          classics this way, or other titles in the catalog,{" "}
          <Link
            href="/blog/project-gutenberg-audiobooks"
            className="text-loudBlue hover:underline"
          >
            Project Gutenberg audiobooks
          </Link>{" "}
          covers that ground. This article stays narrow on purpose: it&apos;s
          about getting this one book playing today.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear Little Women free, today"
        subline="The full novel is built into LoudReader's Gutenberg catalog. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
