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

export default function ListenToFanfictionArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The cleanest way to listen to fanfiction is hiding in plain sight:
          every work on AO3 has a <strong>Download</strong> button near the top
          of the page, and one of the formats it offers is EPUB. Download the
          fic, open it in <strong>LoudReader</strong> (iPhone, iPad, and Mac), and the whole work (every chapter, in order) becomes an
          audiobook with natural offline voices and word-by-word highlighting.
          No account on either side and no word quota. LoudReader is fully
          on-device and private, your library never leaves your device, so
          nobody sees what you read. It works in airplane mode, keeps your
          place across a 300k-word longfic, and beats browser extensions that
          re-read the page you happen to have open.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="One EPUB download turns a whole longfic into an audiobook."
      />

      <QuestionSection question="How do you download a fanfic from AO3?">
        <p>
          AO3 ships this feature itself, with no extension, no converter site,
          and no account. On any work page:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Find the <strong className="text-gray-900">Download</strong> button
            near the top of the work, next to the bookmark and comment actions.
          </li>
          <li>
            Pick <strong className="text-gray-900">EPUB</strong> from the
            format list (AO3 also offers PDF, MOBI, AZW3, and HTML, and EPUB
            is the one ebook readers handle best).
          </li>
          <li>
            Save the file. A multi-chapter fic downloads as a{" "}
            <em>single file</em> containing every posted chapter in reading
            order, plus the tags, summary, and author notes.
          </li>
        </ol>
        <p>
          That one file is the entire work, frozen at the moment you downloaded
          it. That is also the quiet strength of this flow: the fic stays
          readable even if the author later locks, orphans, or deletes it, and
          even when AO3 itself is down.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you turn that EPUB into an audiobook?">
        <p>
          This is the short part.{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Download LoudReader from the App Store
          </a>{" "}
          (free, no sign-up), then import the fic: open the EPUB from the Files
          app or your Downloads folder, or use{" "}
          <strong className="text-gray-900">Import EPUB/PDF File</strong>{" "}
          inside the app. Press play.
        </p>
        <p>
          The narration is generated live on your device with natural offline
          voices, each word highlights as it is spoken, and your position is
          saved, so a slow-burn longfic behaves exactly like an audiobook you
          bought, minus the part where nobody will ever record an audiobook of
          it. The same flow works on the Mac; the full walkthrough is in{" "}
          <Link href="/read-epub-aloud-mac" className="text-loudBlue hover:underline">
            how to read an EPUB aloud on a Mac
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Why is an EPUB import better than a browser extension?">
        <p>
          Most &quot;listen to fanfiction&quot; guides point you at a
          text-to-speech browser extension. That works, but it reads the{" "}
          <em>web page</em>, not the <em>work</em>, and the difference shows
          on anything longer than a one-shot:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">One file, whole fic.</strong> An
            extension reads the chapter you have open; the EPUB contains all of
            them, so 40 chapters play straight through without you touching
            next-chapter links.
          </li>
          <li>
            <strong className="text-gray-900">No page cruft.</strong>{" "}
            Extensions happily narrate navigation menus, kudos counts, and
            comment threads. The EPUB is just the story and the author&apos;s
            own notes.
          </li>
          <li>
            <strong className="text-gray-900">Offline and durable.</strong> A
            page needs a connection every time; the EPUB is yours, readable on
            the subway and after the fic goes dark.
          </li>
          <li>
            <strong className="text-gray-900">A real reading position.</strong>{" "}
            A book keeps your place; a browser tab keeps a scroll offset,
            badly.
          </li>
        </ul>
        <p>
          Honest caveat: for a 2,000-word one-shot you are already reading in
          the browser, an extension is perfectly fine. The EPUB flow wins the
          moment a fic is long enough that you will come back to it, which,
          in fanfiction, is most of the fics worth listening to.
        </p>
      </QuestionSection>

      <ArticleIllustration
        variant="offline"
        caption="No account, no upload. Your fic library stays on your device."
      />

      <QuestionSection question="Is your fanfic library private?">
        <p>
          Fanfiction is exactly the kind of reading people prefer to keep to
          themselves, and this is where the architecture matters. Cloud TTS
          apps upload your text to a server to generate audio. LoudReader is
          fully on-device and private, your library never leaves your device.
          There is no account to create, nothing is uploaded, and the app works
          with the network off entirely. The tags you read are between you and
          your phone. If that is a deciding factor for you,{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            it is the reason LoudReader exists
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What about Royal Road and other web fiction?">
        <p>
          AO3 is the gold standard here, and its built-in EPUB button is
          genuinely rare. Elsewhere, the honest picture:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Royal Road</strong> has no
            official EPUB download; offline chapters are a perk of its own
            Premium app. Readers commonly use a third-party tool such as the
            WebToEpub browser extension to package a story into an EPUB, which
            then imports into LoudReader like any book.
          </li>
          <li>
            <strong className="text-gray-900">Individual chapters or
            articles</strong> can be pasted into LoudReader as a URL, and it
            fetches the page and adds it to your library. Note the free tier
            caps articles, while imported EPUB books have no cap.
          </li>
          <li>
            <strong className="text-gray-900">Anything you can save as an
            EPUB or PDF</strong>{" "}
            (newsletters, serials, your own drafts) imports the same way.
          </li>
        </ul>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Your longfic backlog, narrated"
        subline="Download the EPUB from AO3, import it, press play. Free, on-device, no account, and nobody sees your tags."
      />
    </ArticleLayout>
  );
}
