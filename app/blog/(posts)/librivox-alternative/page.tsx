import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import ComparisonTable from "@/components/money/ComparisonTable";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import {
  COMPARISON_CAPTION,
  COMPARISON_COLUMNS,
  COMPARISON_ROWS,
  FAQS,
} from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function LibrivoxAlternativeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          LibriVox is one of the internet&apos;s good places: 20,000+
          volunteer-read recordings of public-domain books, free to download
          and keep forever. Its honest trade-off is baked into the volunteer
          model. Narration quality varies recording to recording, and one
          novel can change narrators chapter to chapter. If that
          inconsistency is what sends you looking for an alternative,{" "}
          <strong>LoudReader</strong> reads the same public-domain catalog
          (all 70,000+ Project Gutenberg titles, built in) with natural
          offline voices. You get one consistent voice from cover to cover,
          word-by-word highlighting so you can read along, and a saved place
          in every book. It is free, with unlimited listening, no account,
          and fully on-device and private, your library never leaves your
          device.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Same public-domain classics, one consistent voice from the first chapter to the last."
      />

      <QuestionSection question="What makes LibriVox great, and where does it fall short?">
        <p>
          Credit first, because LibriVox has earned it. Since 2005,
          volunteers have recorded more than 20,000 public-domain works,
          mostly in English but with recordings in many other languages, and
          released every one of them free, as files you can download, keep,
          and play on anything. No account, no ads, no catch. The best
          LibriVox narrators are genuinely wonderful, and the project&apos;s
          open, communal spirit is the reason so many classics have any
          audio edition at all.
        </p>
        <p>
          The trade-offs come from the same volunteer model that makes it
          possible:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">
              Narration quality varies.
            </strong>{" "}
            Different volunteers, microphones, rooms, and reading styles
            mean every recording is a roll of the dice.
          </li>
          <li>
            <strong className="text-gray-900">
              Narrators can change mid-book.
            </strong>{" "}
            Chapters are claimed individually, so a novel can switch voices
            (and audio character) between chapters.
          </li>
          <li>
            <strong className="text-gray-900">It is audio only.</strong> No
            synced text, no highlighting, no reading app around it. And with
            20,000 recordings against Project Gutenberg&apos;s 70,000+
            books, most of the catalog is still waiting for a narrator.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="Why do LibriVox narrators change mid-book?">
        <p>
          Because a LibriVox audiobook is a community project, not a studio
          production. Volunteers pick individual chapters from an open list,
          record them at home, and the community proof-listens the results.
          Solo projects (one narrator, whole book) exist and are often
          excellent, but collaborative projects are how big books get done,
          and those arrive with several voices. It is a feature of the model,
          not a bug. It is also, for many listeners, the single reason to
          look for an alternative.
        </p>
      </QuestionSection>

      <QuestionSection question="How is LoudReader different from LibriVox?">
        <p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader
          </a>{" "}
          flips the approach. Instead of finding a recording of the book, it
          reads the book itself. The entire Project Gutenberg catalog is
          built in, every title, not the subset volunteers have recorded,
          and natural offline voices narrate in real time with one
          consistent voice from the first chapter to the last. Each word is
          highlighted as it is read, every book keeps your place, and it all
          runs in{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            native Mac and iPhone apps
          </Link>{" "}
          that work in airplane mode. You can also import your own DRM-free
          EPUBs and PDFs. The walkthrough is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
        <p>
          The concession in the other direction: LoudReader has no files to
          download. Narration is generated live on your device, so if your
          workflow needs MP3s (a dumb MP3 player, burning discs, archiving),
          LibriVox remains the right tool for that job.
        </p>
      </QuestionSection>

      <QuestionSection question="How do LibriVox, LoudReader, and the Gutenberg audiobooks compare?">
        <p>
          There is a third free option worth knowing:{" "}
          <Link
            href="/blog/project-gutenberg-audiobooks"
            className="text-loudBlue hover:underline"
          >
            the Project Gutenberg Open Audiobook Collection
          </Link>
          , about 5,000 titles generated with synthetic voices in 2023 and
          published as free audio files. Side by side:
        </p>
        <ComparisonTable
          caption={COMPARISON_CAPTION}
          columns={COMPARISON_COLUMNS}
          rows={COMPARISON_ROWS}
        />
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Every classic, one consistent voice"
        subline="All 70,000+ Project Gutenberg titles built in, read with natural offline voices. Free, unlimited, no account."
      />
    </ArticleLayout>
  );
}
