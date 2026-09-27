import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import Disclosure from "@/components/blog/Disclosure";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER, PRICING, VOICES } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function BestTextToSpeechAppIphoneArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The best iPhone text-to-speech app is the one that handles your reading
          material and listening routine well. Start with Apple&apos;s built-in
          reader for occasional passages. Shortlist LoudReader or Voice Dream
          for a book-centred workflow, Speechify for its broader listening tools,
          and NaturalReader or Speech Central if their document and article
          workflows fit your needs. These are options to test, not a voice-quality
          league table. Compare the same chapter, check screen-off playback and
          distinguish an offline voice from audio downloaded in advance. Then
          check which features remain when the free trial ends.
        </p>
      </Tldr>
      <Disclosure />
      <ArticleIllustration variant="devices" caption="A useful comparison starts with your own book, phone and listening habits." />

      <QuestionSection question="When is Apple’s free reader enough?">
        <p>
          In Settings → Accessibility → Read &amp; Speak, enable Speak Selection
          or Speak Screen. Earlier iOS versions use the name Spoken Content.
          You can choose voices, adjust the speaking rate, highlight spoken text
          and use an onscreen controller. With Speak Screen enabled, swipe down
          with two fingers from the top. Follow{" "}
          <a href="https://support.apple.com/en-gb/guide/iphone/iph96b214f0/ios" className="text-loudBlue hover:underline">Apple&apos;s current instructions</a>{" "}
          if your settings differ.
        </p>
        <p>
          Try this for messages, drafts and short articles. The text must be
          available to the reader; image-based pages and some app layouts can
          get in the way. A dedicated app becomes useful when you want an
          organised library and a repeatable import-and-resume routine.
        </p>
      </QuestionSection>

      <QuestionSection question="What does LoudReader offer on iPhone?">
        <p>
          <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>{" "}
          reads DRM-free EPUBs, PDFs and saved web articles. It includes local
          text recognition for scanned PDFs, though difficult layouts still need
          checking. No LoudReader account is required to import and listen.
          The studio catalogue contains {VOICES.headline}; availability depends
          on hardware, and languages can be selected in Settings.
        </p>
        <p>
          {FREE_TIER.full} Premium unlocks every available narrator, speed controls,
          the sleep timer, soundscapes and unlimited article saving. Notes and
          highlights remain available without Premium. There is no automatic
          library or reading-position sync across devices.
        </p>
        <p>
          Narration happens on the phone without uploading the book to a speech
          service. The app also sends crash/performance diagnostics and usage
          analytics. Local speech processing should not be confused with an app
          collecting no data.
        </p>
      </QuestionSection>

      <QuestionSection question="Which other iPhone readers are worth comparing?">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <a href="https://speechify.com/ios/" className="text-loudBlue hover:underline"><strong>Speechify</strong></a>{" "}
            offers document and article listening with a range of voices. Its
            iOS page explicitly supports offline listening for Premium users
            through downloaded converted audio. Check what needs preparing
            before a journey rather than assuming it cannot work offline.
          </li>
          <li>
            <a href="https://www.voicedream.com/" className="text-loudBlue hover:underline"><strong>Voice Dream</strong></a>{" "}
            supports offline listening, document imports, highlights and notes.
            Try it if annotation and navigating a substantial reading library
            matter to you; judge its controls with your own document.
          </li>
          <li>
            <a href="https://www.naturalreaders.com/" className="text-loudBlue hover:underline"><strong>NaturalReader</strong></a>{" "}
            offers a mobile app alongside its web reader, with document, EPUB
            and webpage support. Its mobile offering includes offline listening
            options. Check your chosen plan&apos;s voice and download allowances.
          </li>
          <li>
            <a href="https://speechcentral.net/" className="text-loudBlue hover:underline"><strong>Speech Central</strong></a>{" "}
            covers books, documents and web reading, with offline voices and
            optional cloud services. It is another candidate when your queue
            mixes longer books with articles and feeds.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="How do you compare them without buying every subscription?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Use the same passage.</strong> Pick a few pages with names,
            dialogue and numbers. Compare at a comfortable rate, not each
            app&apos;s most impressive demo speed. Listen for errors that would
            repeatedly distract you.
          </li>
          <li>
            <strong>Check your import route.</strong> Open your EPUB or PDF from
            Files, or share a real article. Inspect the reading order. A pleasant
            voice cannot repair missing text, and a supported file extension
            does not guarantee a clean import.
          </li>
          <li>
            <strong>Rehearse the journey.</strong> Download anything required,
            turn off both mobile data and Wi-Fi, lock the screen, pause, then
            resume. Try an unread section as well as something already played.
            Our <Link href="/blog/text-to-speech-without-internet-iphone" className="text-loudBlue hover:underline">offline iPhone guide</Link>{" "}
            explains the preparation in more detail.
          </li>
          <li>
            <strong>Read the paywall carefully.</strong> Check which voice,
            speed controls and export options are included after the trial.
            Compare the full annual cost in your storefront, not just the
            monthly equivalent shown beside annual billing.
          </li>
        </ol>
        <p>
          LoudReader has subscription options and a {PRICING.premiumLifetime}{" "}
          purchase in the US storefront; local prices differ. A free trial is
          useful for finding deal-breakers, but no trial can promise that you
          will enjoy a particular voice for every book. Keep the app that makes
          your ordinary reading session easiest to start and finish.
        </p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Test LoudReader with your own reading" subline="Import a book, try the available voices and check the free tier before choosing Premium." />
    </ArticleLayout>
  );
}
