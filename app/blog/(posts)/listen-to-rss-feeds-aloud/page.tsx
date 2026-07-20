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

export default function ListenToRssFeedsAloudArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          RSS readers do not read articles aloud. The handful that do use a
          robotic system voice and stop when you lock the screen. The practical
          workflow for listening to your RSS queue is to pair any RSS reader
          you like with a dedicated text-to-speech app. Use your RSS reader to
          find and open articles, use Safari Reader view to strip ads and
          sidebars, export as PDF, and import into <strong>LoudReader</strong>{" "}
          (native Mac and iPhone apps). LoudReader reads the PDFs aloud with
          natural offline voices, remembers your place, and works in airplane
          mode. It is fully on-device and private, your library never leaves
          your device. This is a manual queue, not a live feed, but the
          tradeoff is that your entire reading list stays offline and private,
          with no account and no tracking.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="An RSS reader finds the articles. Safari cleans them up. LoudReader reads them aloud."
      />

      <QuestionSection question="Why don't RSS readers read articles aloud?">
        <p>
          Most RSS readers are built to skim headlines and read text on screen.
          Text-to-speech is not a feature the market has demanded from them, so
          developers have not invested in it. A few apps have tried: Voice
          Dream Reader on iOS can import RSS feeds and read articles aloud, and
          it does a decent job. But it is the exception, and even then the
          voice quality is tied to whatever system voices Apple makes available
          through the older speech API.
        </p>
        <p>
          The result is that RSS reading and TTS listening are two separate
          tools, and the workflow that bridges them is the export step. It is
          not seamless, and it is honest to say so. You do a few seconds of
          manual work per article in exchange for natural voices, offline
          playback, and privacy.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I set up an RSS-to-audio workflow?">
        <p>
          You need three pieces, and all of them are free:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">An RSS reader.</strong>{" "}
            NetNewsWire is free, open source, and native on both Mac and
            iPhone. It syncs feeds privately via iCloud. Reeder is a paid
            alternative with a polished design. Either one works. Add your
            feeds and skim headlines as you normally would.
          </li>
          <li>
            <strong className="text-gray-900">Safari Reader view.</strong>{" "}
            When you find an article worth listening to, tap the Reader button
            in Safari&apos;s address bar. This strips the page down to the
            article text and images, removing navigation, ads, and sidebars.
          </li>
          <li>
            <strong className="text-gray-900">LoudReader on iPhone or Mac.</strong>{" "}
            Export the Safari Reader page as a PDF. On Mac: File then Export as
            PDF. On iPhone: share button, Print, pinch outward to open as PDF,
            save or share to LoudReader. Import the PDF and press play.
          </li>
        </ol>
        <p>
          This three-tool chain feels like more work than it actually is. After
          the second or third article, it becomes muscle memory. The entire
          sequence takes about 15 seconds per article.
        </p>
      </QuestionSection>

      <QuestionSection question="Can I listen to full-text RSS feeds or only summaries?">
        <p>
          Whatever text Safari Reader view extracts is what you hear. If the
          RSS feed sends the full article text, Safari Reader captures it all,
          and LoudReader reads the entire piece. If the feed only sends a
          summary (a headline and a paragraph with a &quot;read more&quot;
          link), that summary is what Safari sees and what LoudReader reads.
        </p>
        <p>
          Most news sites and blogs that care about RSS send full-text feeds.
          Sites that truncate their feeds usually do it to drive clicks to the
          website. For those, you need to open the article link in Safari
          separately, wait for Reader view to activate, and export from the
          full article page. It adds one extra step but still works.
        </p>
      </QuestionSection>

      <QuestionSection question="What are the privacy tradeoffs?">
        <p>
          The RSS-to-audio pipeline with LoudReader is unusually private for a
          listening workflow, and the privacy comes from three layers:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">The RSS reader.</strong>{" "}
            NetNewsWire fetches feeds directly from the source with no
            intermediary server. There is no account, no analytics, and no
            tracking. Your feed list stays on your device.
          </li>
          <li>
            <strong className="text-gray-900">The export step.</strong>{" "}
            Safari exports a local PDF. No URL is sent to any service. The
            PDF is created offline on your device.
          </li>
          <li>
            <strong className="text-gray-900">LoudReader.</strong> The app is
            fully on-device and private, your library never leaves your
            device. There is no account, no cloud processing, and no analytics.
            Your article queue is as private as a stack of printed pages on
            your desk.
          </li>
        </ul>
        <p>
          Compare this to a cloud TTS service that receives every article URL
          you send, extracts the text on a server, and stores your reading
          history. For professionals reading industry news, competitive
          analysis, or anything they would rather not have profiled, the
          manual workflow is the private one. For more on the privacy model,
          see{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            private text-to-speech with no cloud
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What about article discovery with TTS built in?">
        <p>
          A few apps try to combine feed reading and TTS into one product.
          Voice Dream Reader on iOS does RSS plus TTS. Pocket has a listen
          feature for saved articles, though the voice is limited and the
          processing happens on Pocket&apos;s servers. Speechify can ingest
          articles from a URL. All of these are cloud-based and require
          accounts.
        </p>
        <p>
          The separated workflow (RSS reader plus LoudReader) is not as
          integrated. You manage feeds in one app and listen in another. The
          tradeoff is that both apps are native, private, and offline. For some
          people, the integration is worth the privacy cost. For others, the
          privacy is worth the manual step. Pick the tradeoff that fits your
          threat model. For more on the offline angle, see{" "}
          <Link
            href="/listen-to-articles-mac"
            className="text-loudBlue hover:underline"
          >
            listening to articles on Mac
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Your RSS queue, read aloud"
        subline="Skim feeds in your RSS reader, export articles as PDFs, and listen in LoudReader. Private, offline, natural voices."
      />
    </ArticleLayout>
  );
}
