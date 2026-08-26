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

export default function ListenToSubstackNewslettersArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Substack has no built-in text-to-speech button for newsletters. Some
          authors record their own audio, and those posts have a play button at
          the top. For every other newsletter, the path to listening is
          straightforward: open the post in Safari, use Reader view to strip
          the noise, export as PDF, and import into <strong>LoudReader</strong>{" "}
          (iPhone, iPad, and Mac). LoudReader reads the PDF aloud with
          natural offline voices and remembers your place. It is fully
          on-device and private, your library never leaves your device. If you
          subscribe to paid newsletters, make sure you are logged in before
          exporting, otherwise the PDF captures the paywall, not the article.
          No account is needed for LoudReader itself.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Newsletter to audio: open, export, import, press play. Three steps."
      />

      <QuestionSection question="Does Substack let me listen to newsletters?">
        <p>
          Only the ones where the author recorded a narration. A growing number
          of Substack writers record themselves reading each post, and Substack
          added built-in audio support for that in 2023. When a post has audio,
          a play button appears below the title, and you can listen right in
          the browser or the Substack app. The quality is whatever the
          author&apos;s microphone produces. It is a human reading, not TTS.
        </p>
        <p>
          For the vast majority of Substack posts, there is no audio. The post
          is text, and Substack gives you no button to listen to it. That is
          the gap this guide covers.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I listen to a text-only Substack post?">
        <p>
          The workflow is the same as listening to any web article. Here it is
          step by step:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Open the post in Safari.</strong>{" "}
            On iPhone or Mac, open the Substack post in Safari rather than the
            Substack app. If it is a subscriber-only post, make sure you are
            logged in.
          </li>
          <li>
            <strong className="text-gray-900">Activate Reader view.</strong>{" "}
            Tap or click the Reader button in the Safari address bar. Reader
            view strips the Substack branding, the subscribe prompts, the
            comment section, and everything that is not the article text. You
            get a clean page with just the headline and the body.
          </li>
          <li>
            <strong className="text-gray-900">Export as PDF.</strong> On Mac,
            go to File then Export as PDF. On iPhone, tap the share button,
            find Print, pinch outward on the preview to open it as a PDF, then
            save to Files or share directly to LoudReader.
          </li>
          <li>
            <strong className="text-gray-900">Import into LoudReader.</strong>{" "}
            Open LoudReader, import the PDF, and press play. The app reads the
            newsletter aloud with natural neural voices.
          </li>
        </ol>
        <p>
          After you do this once, the whole sequence takes about 30 seconds. If
          you read several newsletters in a session, you can export them all
          as PDFs first, then import them into LoudReader as a batch.{" "}
          <Link
            href="/listen-to-pdf-iphone"
            className="text-loudBlue hover:underline"
          >
            Listening to PDFs on iPhone
          </Link>{" "}
          covers the import side in more detail.
        </p>
      </QuestionSection>

      <QuestionSection question="What are the honest limits of this approach?">
        <p>
          The approach works, and it has real tradeoffs worth knowing before
          you commit to it:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Manual export.</strong> There is
            no &quot;send this Substack to LoudReader&quot; button. Every post
            needs a manual export. This takes seconds per post, and if you read
            ten newsletters a day, you will spend a few minutes a day
            exporting. Whether that friction is acceptable depends on how much
            you value listening over reading.
          </li>
          <li>
            <strong className="text-gray-900">Paywall honesty.</strong>{" "}
            If a post is behind a paywall and you are not subscribed, the PDF
            captures the paywall message (usually a &quot;subscribe to
            read&quot; prompt with a blurred preview). The text behind the
            paywall does not export. You must be an active subscriber and
            logged in to capture the full article.
          </li>
          <li>
            <strong className="text-gray-900">No embedded content.</strong>{" "}
            Substack posts often include embedded tweets, YouTube videos,
            charts, and Substack Notes. None of these produce audio. The TTS
            voice reads the surrounding text and skips the embeds. If the
            author describes what is in the embed, you hear the description.
            If not, you miss that content entirely.
          </li>
          <li>
            <strong className="text-gray-900">No comment section.</strong>{" "}
            Reader view strips the comments, which is usually what you want
            for listening, but some Substack communities have comment threads
            that are worth reading separately.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="Can I build a newsletter listening queue?">
        <p>
          You can, but the queue is a folder of PDFs, not a live feed. Here is
          a practical workflow that several LoudReader users have settled on:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            When a newsletter arrives in your inbox, open it in Safari and
            export it as a PDF immediately. Save it to a dedicated folder
            (iCloud Drive, or a local folder on your Mac).
          </li>
          <li>
            At the end of the day or week, open LoudReader and import the
            PDFs you collected. The app lists them in its library, and you
            can play them in any order.
          </li>
          <li>
            Delete each PDF from LoudReader when you are done listening, or
            keep them as a reference archive.
          </li>
        </ol>
        <p>
          This is not as slick as a podcast app that auto-downloads new
          episodes. It is a manual queue. But it works, it is entirely offline
          once the PDFs are imported, and it keeps your reading private.
          LoudReader is fully on-device and private, your library never leaves
          your device, so your newsletter queue is not mined or profiled by a
          cloud service.
        </p>
        <p>
          For a broader look at turning web content into audio, see{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          . The same principles apply to newsletters.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Give your inbox a voice"
        subline="Export your Substack newsletters as PDFs and listen in LoudReader. Offline, private, no account needed."
      />
    </ArticleLayout>
  );
}
