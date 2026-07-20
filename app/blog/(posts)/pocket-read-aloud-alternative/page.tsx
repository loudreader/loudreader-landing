import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { PRICING } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function PocketReadAloudAlternativeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Pocket&apos;s listen feature is convenient: tap a button and your
          saved article starts playing. The catch is that the best
          natural-sounding voices need an internet connection, and your
          article text gets sent to a server for processing. If you want
          offline listening with no data leaving your device,{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) gives you
          an alternative path. Save your Pocket articles as PDFs, import
          them into LoudReader, and listen with natural offline voices
          anywhere. It is fully on-device and private, your library never
          leaves your device. It takes an extra step, but you get offline
          playback, better voice quality, custom speed from 0.3x to 3.0x,
          and all your articles and books in one place. {PRICING.free}
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Save as PDF, import, listen. No cloud gets to see what you read."
      />

      <QuestionSection question="What is Pocket, and how does its listen feature work?">
        <p>
          Pocket is a read-later app that saves articles, videos, and web
          pages to a personal queue. It strips away clutter and presents a
          clean reading view. The listen feature, available on mobile and
          desktop, reads articles aloud with a text-to-speech voice.
        </p>
        <p>
          The free version of the listen feature uses a basic system voice.
          Pocket Premium adds more natural-sounding voices, but those voices
          run in the cloud. Your article text is sent to a server,
          processed, and streamed back as audio. If your connection drops,
          playback stops. If you are in a dead zone or on a plane, the
          listen button does nothing useful.
        </p>
        <p>
          For many people this is fine. The integration is seamless and the
          quality is good. The trade-off is privacy and connectivity. Pocket
          knows what you are listening to and needs to be online to deliver
          the best experience.
        </p>
      </QuestionSection>

      <QuestionSection question="Why look for an alternative to Pocket's read-aloud?">
        <p>
          Three reasons, and they may or may not matter to you:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Offline reliability.</strong>{" "}
            If you listen during a commute through tunnels, on a flight, or
            in areas with spotty coverage, cloud-based TTS fails exactly
            when you want it most.
          </li>
          <li>
            <strong className="text-gray-900">Privacy.</strong> Pocket&apos;s
            cloud voices mean your article text hits a server. For most
            casual reading this is a non-issue. For sensitive material or
            simply a preference for keeping your reading habits private, an
            on-device reader is the answer.
          </li>
          <li>
            <strong className="text-gray-900">A unified library.</strong> If
            you listen to both books and articles, having everything in one
            app with one set of voices and one playback position tracker is
            simpler than switching between Pocket for articles and another
            app for books.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="How do you listen to Pocket articles with LoudReader?">
        <p>
          The workflow has one extra step compared to Pocket&apos;s
          built-in listen button, but the payoff is full offline access and
          better voices. Here is how it works:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Open the article in Pocket. Tap the share button and choose
            Print. In the print preview, pinch outward on the thumbnail (or
            use the Share button again) and choose Save to Files as a PDF.
          </li>
          <li>
            Open the Files app, find your saved PDF, and share it to
            LoudReader. The article appears in your LoudReader library.
          </li>
          <li>
            Press play. LoudReader reads it aloud with natural offline voices,
            remembers where you stopped, and works with the screen locked.
          </li>
        </ol>
        <p>
          It is not as fast as Pocket&apos;s one-tap listen. But once the
          PDF is imported, it behaves like any other book in your
          LoudReader library: offline, private, with speed control and a
          saved position. You can build up a library of articles the same
          way you save them in Pocket, and they stay on your device.
        </p>
        <p>
          This also works with{" "}
          <Link href="/listen-to-articles-mac" className="text-loudBlue hover:underline">
            saving articles to listen to on Mac
          </Link>
          , and the full article-to-audio workflow is covered in{" "}
          <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline">
            how to listen to PDFs on iPhone
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="How does the listening experience compare?">
        <p>
          Pocket&apos;s listen feature is simpler. Tap one button, audio
          starts. The voice quality with Pocket Premium is good, though
          dependent on your connection. Playback speed options are basic.
          There is no saved position if you close the app mid-article.
        </p>
        <p>
          LoudReader gives you natural offline voices that work anywhere.
          Playback speed from 0.3x to 3.0x on Premium. Word highlighting as
          it reads. Lock screen and Bluetooth controls on iPhone. A saved
          position in every article that survives app restarts. The trade
          is that PDF export step.
        </p>
        <p>
          If you listen to an article here and there, Pocket is fine. If
          you listen to a lot of long-form articles and want them to work
          like audiobooks, the extra step is worth it.
        </p>
      </QuestionSection>

      <QuestionSection question="What about privacy between the two?">
        <p>
          Pocket, like most read-later services, has an account. It knows
          what you save. When you use the cloud-based listen feature, it
          processes your article text on its servers.
        </p>
        <p>
          LoudReader has no account system. It is fully on-device and
          private, your library never leaves your device. The PDF you saved
          from Pocket lives on your phone or Mac. No server ever sees it.
          The speech synthesis runs locally. Your reading list is yours
          alone.
        </p>
        <p>
          If privacy is a concern for your reading habits, the difference
          between cloud and on-device is clear.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Listen to articles and books in one place"
        subline="Save articles as PDFs and import them into LoudReader. Natural voices, offline, private."
      />
    </ArticleLayout>
  );
}