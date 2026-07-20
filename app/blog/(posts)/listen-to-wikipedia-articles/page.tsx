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

export default function ListenToWikipediaArticlesArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Wikipedia gives you a clean PDF export for any article. Click
          &quot;Download as PDF&quot; in the left sidebar on desktop (or under
          Tools on mobile), save the file, and import it into{" "}
          <strong>LoudReader</strong> on your iPhone or Mac. LoudReader reads
          the article aloud with natural offline voices, remembers your place,
          and works without an internet connection. It is fully on-device and
          private, your library never leaves your device. This is useful for
          long research deep dives where reading on screen leads to skimming,
          for building a study queue of related articles, and for listening
          while looking at maps or diagrams on a separate device.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Download as PDF, import, press play. Every Wikipedia article becomes a listening session."
      />

      <QuestionSection question="How do I get a Wikipedia article as a PDF?">
        <p>
          Wikipedia has a built-in PDF export that has been there for years and
          works reliably. On a desktop browser, open any article and look at
          the left sidebar. Scroll to the &quot;Print/export&quot; section and
          click &quot;Download as PDF&quot;. Wikipedia generates a clean,
          formatted PDF with the article text, main images, and a table of
          contents. No ads, no donation banners, no edit buttons. The file
          downloads immediately.
        </p>
        <p>
          On mobile, scroll to the bottom of the article and look for the
          Tools section. &quot;Download as PDF&quot; is usually there. If you
          do not see it, switch to the desktop version of the site by tapping
          &quot;Desktop&quot; at the very bottom of the page.
        </p>
        <p>
          Once you have the PDF, open{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>
          , import the file, and press play. The app reads from the title
          through the references, in order, and remembers where you stopped.
          For a general overview of making text into audio, see{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What happens to tables, infoboxes, and references when it is read aloud?">
        <p>
          Wikipedia articles are dense with structured data, and the reading
          order is not always what a human would choose. Here is what to
          expect:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Infoboxes.</strong> The summary
            box on the right side of most articles (dates, locations, key
            facts) usually appears near the top of the PDF, and the TTS voice
            reads it as a block of labels and values. &quot;Born: April 15,
            1452. Died: May 2, 1519.&quot; It sounds like a list of facts,
            which it is. It is not graceful, but you get the information.
          </li>
          <li>
            <strong className="text-gray-900">Tables.</strong> Data tables
            get read cell by cell, left to right, top to bottom. For a table
            with many rows, this is hard to follow by ear. If an article has
            large data tables you need to understand, look at them on screen
            and listen to the prose sections.
          </li>
          <li>
            <strong className="text-gray-900">References.</strong> Citation
            numbers appear in brackets: [1], [2], [3]. The TTS voice reads
            them out: &quot;bracket one bracket&quot;. In a heavily cited
            article, this becomes a background noise of bracket numbers. Use
            the &quot;Printable version&quot; link in the sidebar instead of
            &quot;Download as PDF&quot;. The printable version often strips
            citation markers. The result is a cleaner listening experience.
          </li>
          <li>
            <strong className="text-gray-900">Images.</strong> Images appear
            in the PDF but produce no audio. Captions get read, which gives
            context. If an image contains essential information (a diagram,
            a map), keep the PDF open and glance at it while listening, or
            open the article on a separate screen.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="Why listen to a Wikipedia article instead of reading it?">
        <p>
          Listening is not better than reading. It is different, and it helps
          in specific situations where reading is harder:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Long article fatigue.</strong>{" "}
            Wikipedia articles on major topics (World War II, Quantum
            Mechanics, Evolution) can run to 10,000 words or more. Reading on
            screen leads to skimming. Listening forces you to hear every
            section, which means you actually finish the article instead of
            scrolling past the middle.
          </li>
          <li>
            <strong className="text-gray-900">Building context before reading.</strong>{" "}
            Listen to an article overview while doing something else. When you
            sit down to read it closely, you already know the structure and
            the key terms. The close read goes faster and sticks better.
          </li>
          <li>
            <strong className="text-gray-900">Multimodal study.</strong>{" "}
            Listen to the article text while looking at related images, maps,
            or timelines on a separate screen. Your brain processes the
            auditory and visual information through different channels, and
            combining them can improve recall. This is especially useful for
            topics with a strong visual component, like geography, art history,
            or anatomy.
          </li>
        </ul>
        <p>
          If listening while reading helps you, LoudReader&apos;s word
          highlighting shows each word as it is spoken. You can follow along
          in the PDF while the voice reads. For a related approach, see{" "}
          <Link
            href="/blog/project-gutenberg-audiobooks"
            className="text-loudBlue hover:underline"
          >
            Project Gutenberg audiobooks
          </Link>
          , which covers listening to public domain books.
        </p>
      </QuestionSection>

      <QuestionSection question="Can I build a Wikipedia study queue?">
        <p>
          Yes, and the workflow is the same as building any PDF listening
          queue. Download each article as a PDF, save them to a folder, and
          import them all into LoudReader. The app lists them in its library
          and you can play them in any order. Each article remembers its own
          playback position, so you can jump between articles without losing
          your place.
        </p>
        <p>
          For students, this is especially useful during research. Download the
          five or six Wikipedia articles that cover your topic from different
          angles, import them as a batch, and listen through them while walking
          or doing chores. You get a broad overview of the topic without
          spending hours staring at a screen.
        </p>
        <p>
          All of this runs offline once the PDFs are imported. LoudReader is
          fully on-device and private, your library never leaves your device.
          No internet, no account, no tracking.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Turn Wikipedia deep dives into listening sessions"
        subline="Download any article as PDF, import into LoudReader, and press play. Study hands-free, offline, no account."
      />
    </ArticleLayout>
  );
}
