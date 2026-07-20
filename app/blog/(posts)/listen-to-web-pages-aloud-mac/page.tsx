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

export default function ListenToWebPagesAloudMacArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Your Mac has two honest paths to listen to web pages aloud. The
          built-in one: Safari&apos;s Spoken Content (select text, right-click,
          Speech, Start Speaking, or Option+Esc). It is free and works
          immediately, but the voice is the system accessibility voice and
          there is no bookmarking, speed control per article, or offline queue.
          The app path: open the article in Safari Reader view to strip ads
          and sidebars, export as PDF, and import into <strong>LoudReader</strong>{" "}
          (native Mac and iPhone apps). LoudReader reads the PDF with natural
          offline voices, remembers your place, and works fully offline because
          it is fully on-device and private, your library never leaves your
          device. Both paths are honest. Pick the one that matches what you
          need.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="Safari Reader strips the noise. LoudReader reads the text. Both run on your Mac."
      />

      <QuestionSection question="What is the built-in way to listen to web pages on a Mac?">
        <p>
          Safari on macOS has a feature called Spoken Content that reads
          selected text aloud. Here is exactly what it does and does not do:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">How to use it:</strong> Select
            the text you want to hear, right-click, and pick Speech then Start
            Speaking. Or select text and press Option+Esc. Press Option+Esc
            again to stop.
          </li>
          <li>
            <strong className="text-gray-900">What voice it uses:</strong>{" "}
            The system voice set in System Settings under Accessibility then
            Spoken Content. You can pick from the voices Apple ships, including
            the higher-quality neural voices (Samantha, Daniel, etc.) if you
            have downloaded them. The voice applies globally to all Spoken
            Content on your Mac.
          </li>
          <li>
            <strong className="text-gray-900">What it lacks:</strong>{" "}
            No per-article speed control (there is one system-wide slider), no
            bookmarking, no offline queue of articles, no sleep timer. It reads
            whatever text is selected on screen, and when it reaches the end of
            the selection, it stops. If the page scrolls or reloads, you lose
            your place.
          </li>
        </ul>
        <p>
          This is a perfectly good tool for reading a few paragraphs, checking
          a quote, or hearing a short news item. It was not designed for
          listening to long articles or building a reading queue.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I listen to a web page with LoudReader on Mac?">
        <p>
          The workflow has three steps, and after the first time it takes under
          a minute:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Open the article in Safari Reader view.</strong>{" "}
            When Safari detects an article, a Reader button appears in the
            address bar (it looks like a document icon). Click it. Reader view
            strips navigation, ads, sidebars, and auto-play videos, leaving
            just the headline, body text, and images. If the page has no Reader
            button, it is usually not an article page (it might be a landing
            page, a forum, or a page built in a way Safari cannot parse).
          </li>
          <li>
            <strong className="text-gray-900">Export as PDF.</strong> With
            Reader view active, go to File then Export as PDF. Pick a name
            and save it. The PDF contains only the Reader view content, which
            is exactly what you want read back.
          </li>
          <li>
            <strong className="text-gray-900">Import into LoudReader.</strong>{" "}
            Open LoudReader on your Mac, drag the PDF into the app, and press
            play. The app reads the article aloud with natural offline voices,
            remembers your place, and keeps reading with the screen locked or
            in the background.
          </li>
        </ol>
        <p>
          For a deeper look at article listening on Mac, see{" "}
          <Link
            href="/listen-to-articles-mac"
            className="text-loudBlue hover:underline"
          >
            how to listen to articles on Mac
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What are the tradeoffs of the PDF export approach?">
        <p>
          The approach is simple and private, and it has real limits. Being
          honest about them:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">It is manual.</strong> You
            export each article one at a time. There is no &quot;send this URL
            to LoudReader&quot; button and no browser extension that does it
            for you. If you read dozens of articles a day, the manual export
            step adds up.
          </li>
          <li>
            <strong className="text-gray-900">Paywalled pages export the paywall.</strong>{" "}
            If a page is behind a paywall and you are not logged in, the PDF
            shows the paywall overlay, not the article. You need an active
            subscription and you need to be logged in before exporting.
          </li>
          <li>
            <strong className="text-gray-900">No live links.</strong> The
            PDF is a static snapshot. Hyperlinks from the original article
            are not clickable in audio form, which is obvious but worth saying.
          </li>
          <li>
            <strong className="text-gray-900">Images are silent.</strong>{" "}
            LoudReader reads text. Charts, photos, and diagrams appear in the
            PDF but produce no audio. Captions get read, which gives some
            context.
          </li>
        </ul>
        <p>
          On the upside, the PDF lives on your device and never touches a
          server. LoudReader is fully on-device and private, your library
          never leaves your device. Compare that to a cloud-based article
          reader that uploads every URL to its server for processing. For
          professionals reading confidential research, legal memos, or
          internal documents, the privacy tradeoff favors the manual route
          every time. See{" "}
          <Link
            href="/offline-text-to-speech-mac"
            className="text-loudBlue hover:underline"
          >
            offline text-to-speech on Mac
          </Link>{" "}
          for more on the privacy angle.
        </p>
      </QuestionSection>

      <QuestionSection question="When would I use Safari's built-in reader vs LoudReader?">
        <p>
          Safari&apos;s built-in Spoken Content wins when you need one
          paragraph read right now and the system voice is fine. No setup, no
          export, no file management. Select text, Option+Esc, done.
        </p>
        <p>
          LoudReader wins when you are listening to a long article and care
          about voice quality, when you want to queue up several articles and
          listen through them without touching the computer, when you are
          stepping away from the screen entirely, or when the content is
          sensitive and you do not want it processed by a cloud service. The
          two tools complement each other. Use both.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Turn web articles into a podcast queue"
        subline="Export as PDF, import into LoudReader, and listen with natural voices. Fully offline, private, no account."
      />
    </ArticleLayout>
  );
}
