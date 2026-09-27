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

export default function VoiceAloudReaderAlternativeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          If you are leaving Android for an iPhone, you need a reader for the
          new platform: @Voice Aloud Reader is an Android app. LoudReader can
          read your DRM-free EPUBs and PDFs on iPhone or iPad, and its iPad app
          can also run on compatible Apple Silicon Macs. Your files can move;
          your @Voice pronunciation rules, bookmarks and reading position do
          not transfer automatically into LoudReader. If you are staying on
          Android and only dislike the voice, first try a different supported
          TTS engine in @Voice. Changing the voice may solve the problem without
          replacing the reader you already know.
        </p>
        <Disclosure />
      </Tldr>

      <ArticleIllustration variant="devices" caption="Moving a book file is different from moving an app’s settings and reading history." />

      <QuestionSection question="What can you change without leaving @Voice?">
        <p>
          @Voice is not restricted to the voice that came with your phone.
          Hyperionics&apos; <a href="https://hyperionics.com/atVoice/features/cloud-tts-voices-android.asp" className="text-loudBlue hover:underline">voice guide</a>
          {" "}describes installed Android TTS engines and optional supported
          cloud voices. Voice availability, downloads and any provider charges
          depend on that configuration. Trying another installed engine is a
          sensible first step when the reading controls already suit you.
        </p>
        <p>
          Its <a href="https://www.hyperionics.com/atvoice/AppFeatures.html" className="text-loudBlue hover:underline">feature guide</a>
          {" "}also documents pronunciation replacements, adjustable pauses,
          reading lists and bookmarks. Before blaming the voice for awkward
          narration, check whether the extracted text contains headers or
          unwanted symbols. A replacement rule can help a recurring name; it
          will not repair missing paragraphs in the source document.
        </p>
      </QuestionSection>

      <QuestionSection question="When does switching to an Apple reader make sense?">
        <p>
          Switching phones is the clear case. <a href="https://hyperionics.com/atvoice/index.asp" className="text-loudBlue hover:underline">@Voice&apos;s official app</a>
          {" "}is for Android phones and tablets. LoudReader is for iPhone and
          iPad; its Apple Silicon Mac availability uses Apple&apos;s iPad
          compatibility mode. It is not an Android alternative you can install
          on your existing phone, and its Mac version should not be described
          as a separate native desktop app.
        </p>
        <p>
          Choose based on the work you want to retain. If your daily routine
          depends on elaborate pronunciation rules, compare that capability
          before moving. If it is mostly opening a novel and resuming tomorrow,
          trial a chapter of that novel first. Do not infer that an app with
          fewer visible settings will necessarily be easier for your own use.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you move a library without losing the originals?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Locate your original DRM-free EPUB or PDF files. Keep a separate copy before reorganising anything on the old phone.</li>
          <li>Move a small sample to the Files app on your iPhone using a computer or a file-transfer service you already trust.</li>
          <li>Import that sample into LoudReader. Verify the chapter order, text, images you need to reference and any scanned pages.</li>
          <li>Note your current chapter or a short passage manually. Do not expect an @Voice bookmark file or its playback position to import.</li>
          <li>Move the rest only after you have checked the new workflow. Keep the source files independent of either app.</li>
        </ol>
        <p>
          Protected ebook licences are not interchangeable with ordinary EPUB
          files; a book opening in one app does not establish that it can be
          imported in another. LoudReader requires DRM-free EPUBs or readable
          PDFs. For the basic import paths, see
          <Link href="/listen-to-pdf-iphone" className="text-loudBlue hover:underline"> PDFs on iPhone</Link>
          {" "}and <Link href="/read-epub-aloud-mac" className="text-loudBlue hover:underline">EPUBs on Mac</Link>.
          {" "}There is no automatic LoudReader library or reading-position sync
          between those devices.
        </p>
      </QuestionSection>

      <QuestionSection question="What about articles, free use and offline listening?">
        <p>
          @Voice accepts shared web pages and several kinds of files. Its free
          version has ads, and Hyperionics offers a permanent Premium licence
          to remove them. See the <a href="https://hyperionics.com/atvoice/index.asp" className="text-loudBlue hover:underline">current product details</a>
          {" "}for the purchase options rather than assuming every voice engine
          or connected service is included in that purchase.
        </p>
        <p>
          LoudReader can save web articles from links or its share extension,
          as well as import EPUB and PDF files. The free article allowance is
          30 saves; Premium makes article saving unlimited. {FREE_TIER.full}
          {" "}Speed control, sleep timer and the full available narrator
          selection are Premium features. Notes and highlights are not
          restricted to Premium.
        </p>
        <p>
          For offline use, test a saved document and the exact voice you intend
          to use. In @Voice, offline capability depends on the selected engine;
          cloud voice configuration changes that requirement. LoudReader
          generates narration locally, but initial setup and fetching articles
          still need preparation. Neither an offline test nor an account-free
          listening flow proves that an app has no telemetry: LoudReader sends
          crash/performance diagnostics and usage analytics separately from
          speech generation.
        </p>
      </QuestionSection>

      <QuestionSection question="What is the sensible next step?">
        <p>
          On Android, first test a different @Voice engine and keep a backup of
          the settings that work for you. On a new iPhone, try LoudReader with
          one book and one article before importing a large library. Compare
          the steps you repeat every day—opening a file, finding your place,
          correcting a misread passage and resuming after a break. Those small
          actions are more useful evidence than an unsupported claim that one
          product has universally better voices.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta headline="Bring a book to your new iPhone" subline="Try a DRM-free EPUB or PDF in LoudReader before moving the rest of your library." />
    </ArticleLayout>
  );
}
