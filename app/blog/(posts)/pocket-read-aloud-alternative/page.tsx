import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import Disclosure from "@/components/blog/Disclosure";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function PocketReadAloudAlternativeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Pocket has shut down, so replacing its read-aloud feature now means
          choosing a new place to save and listen to articles. Mozilla closed the
          service on 8 July 2025; its current notice says exports ended on
          12 November 2025. There is no working Pocket-to-LoudReader connection.
          If you kept an export or still have the original article links, use
          those to rebuild the parts of your queue you want. For a read-later
          service, consider Instapaper. For local narration alongside your EPUBs
          and PDFs on Apple devices, LoudReader is another option. Neither can
          recover a Pocket account that is no longer available.
        </p>
        <Disclosure />
      </Tldr>

      <ArticleIllustration variant="book-to-audio" caption="Keep the article or file as well as the place where you plan to listen." />

      <QuestionSection question="Can you still export your old Pocket queue?">
        <p>
          No. Mozilla&apos;s <a href="https://support.mozilla.org/en-US/kb/future-of-pocket" className="text-loudBlue hover:underline">shutdown notice</a>
          {" "}says exports and the API were disabled in November 2025 and user
          data was queued for deletion. Instructions telling you to open Pocket,
          press Listen or request a fresh export are obsolete.
        </p>
        <p>
          Start with what you already have: a previously downloaded export,
          saved PDF files, browser bookmarks or links in your notes. A list of
          links is not necessarily an archive of the articles themselves. Some
          pages may have moved, disappeared or require a subscription. Keep your
          original export untouched and work from a copy while organising the
          material that remains useful.
        </p>
      </QuestionSection>

      <QuestionSection question="Do you want a read-later queue or a book reader?">
        <p>
          If saving links across devices, searching old articles and organising
          a large queue are the main requirements, start with a read-later app.
          <a href="https://www.instapaper.com/docs/premium/overview" className="text-loudBlue hover:underline"> Instapaper&apos;s current Premium features</a>
          {" "}include full-text search, an article archive and mobile
          text-to-speech playlists. Check its current plan and voice requirements
          before assuming every listening mode will work offline.
        </p>
        <p>
          If you mostly want to listen to a few long articles alongside books,
          LoudReader can save web articles from a link or share extension and
          narrate the saved text locally. It runs on iPhone and iPad, and as an
          iPad app on compatible Apple Silicon Macs. It has no automatic library
          or position sync, so it is not a drop-in replacement for a queue that
          follows you between every device.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you rebuild a listening queue in LoudReader?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose a few original article links you still want to read. Open each page and check that the full text remains accessible.</li>
          <li>Save the article through LoudReader&apos;s link or share workflow. Review the imported beginning, middle and ending before queuing a long listen.</li>
          <li>If extraction misses useful text, use a saved PDF instead. Safari on iPhone can save a webpage through Share → Markup, then Save File To.</li>
          <li>Import the PDF into LoudReader, choose a voice and start listening. Check headings, captions and reading order; a saved webpage can include navigation or duplicated text.</li>
          <li>Before travel, open the articles and chosen voice, disconnect and try an unread section. Keep original links or files outside the app as well.</li>
        </ol>
        <p>
          Apple documents the <a href="https://support.apple.com/guide/iphone/annotate-and-save-a-webpage-as-a-pdf-iphfd5b616b5/ios" className="text-loudBlue hover:underline">Safari PDF workflow</a>.
          {" "}Our <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">iPhone PDF guide</Link>
          {" "}covers listening after import. A PDF is a useful fallback, not a
          required conversion for every article. This process also does not
          import Pocket tags, highlights or listening positions automatically.
        </p>
      </QuestionSection>

      <QuestionSection question="What are the limits of this replacement?">
        <p>
          LoudReader&apos;s free article-saving allowance is 30 saves; Premium
          unlocks unlimited article saving. Book importing and whole-book
          listening are separate from that article limit. {FREE_TIER.full}
          {" "}Adjustable speed and the sleep timer are Premium features. Try
          the actual mix of articles and books you use before deciding whether
          those controls justify a paid plan.
        </p>
        <p>
          Local speech generation means saved text is not uploaded to a speech
          server for narration. Fetching a webpage still needs a connection, and
          LoudReader also sends crash/performance diagnostics and usage analytics.
          Offline playback should not be mistaken for proof that an
          entire application never uses the network.
        </p>
        <p>
          The useful long-term habit is to keep a recoverable copy of material
          you care about. Choose a service for its current reading workflow,
          then check how you can take your files or saved links with you later.
          See <Link href="/listen-to-articles-mac" className="text-loudBlue hover:underline">listening to articles on Mac</Link>
          {" "}if the desktop is where your queue usually starts.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Build a new listening queue" subline="Save accessible articles or import EPUB and PDF files for local narration." />
    </ArticleLayout>
  );
}
