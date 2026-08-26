import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, PRICING } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function BestFreeTextToSpeechAppArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The two genuinely free, no-catch text-to-speech options are{" "}
          <strong>Apple Spoken Content</strong> (built into every iPhone
          and Mac) and <strong>LoudReader</strong> (iPhone, iPad, and Mac). Apple Spoken Content is always free and reads anything on
          screen, but it is not built for books. LoudReader&apos;s free
          tier provides {PRICING.free} You get one natural offline voice
          and can listen to entire books with no word cap. Most other apps
          like Speechify and NaturalReader give you a free sample and then
          ask for a subscription. LoudReader is fully on-device and
          private, your library never leaves your device, so there is no
          per-word cost for the developer and no reason to cap your
          listening.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="devices"
        caption="Free TTS options: built-in or dedicated, both work offline."
      />

      <QuestionSection question="What makes a free TTS app actually free?">
        <p>
          There is a big difference between &quot;free tier&quot; and
          &quot;free.&quot; Most TTS apps use cloud processing. Every word
          spoken costs the developer money for server time. Those apps give
          you free words as a sample, up to a limit, and then require a
          subscription. That is fair: the service costs money to run and
          the developer has to recoup it somehow.
        </p>
        <p>
          On-device TTS does not have that cost. The speech synthesis
          happens on your phone or computer using the device&apos;s own
          processor. There is no server bill for the developer, so there is
          no reason to cap your listening. Apple Spoken Content and
          LoudReader both work this way. That is why their free offerings
          are genuinely unlimited.
        </p>
      </QuestionSection>

      <QuestionSection question="Apple Spoken Content: free, built in, surprisingly good">
        <p>
          Every iPhone, iPad, and Mac has a feature called Spoken Content.
          It lives in Accessibility settings. Turn it on, and a
          two-finger-swipe-down gesture on iPhone (or a keyboard shortcut
          on Mac) reads whatever is on screen aloud. It works in Safari,
          Books, Mail, Notes, and most third-party apps.
        </p>
        <p>
          The built-in voices have improved dramatically. Recent versions
          of iOS and macOS include high-quality voices that sound natural
          and handle pacing well. They work offline. They cost nothing. For
          reading short articles, emails, or web pages, Spoken Content is
          often all you need. It is the best free TTS option that requires
          zero downloads and zero setup beyond a settings toggle.
        </p>
        <p>
          The limitation is that Spoken Content is not a book reader. It
          does not import EPUB files. It does not save your place. It does
          not highlight words as it reads. It does not have a library view
          or a playback speed control beyond a basic setting. It is a
          system utility, not a reading app. For full books, a dedicated
          reader is better.
        </p>
      </QuestionSection>

      <QuestionSection question="LoudReader: free unlimited book listening">
        <p>
          LoudReader&apos;s free tier is designed for actual book reading.
          You get one natural offline voice that sounds good enough for
          long sessions. There is no word quota. You can import any DRM-free
          EPUB or PDF and listen to the entire thing, cover to cover,
          without ever hitting a paywall. No account required. No credit
          card asked.
        </p>
        <p>
          The free tier includes core book-reading features: your place is
          saved across sessions, playback continues with the screen locked,
          lock screen and Bluetooth controls work on iPhone, and the Mac
          app gives you the same experience on desktop. It ships with
          70,000+ free Project Gutenberg classics built in: open the app,
          pick a book, press play.{" "}
          <Link
            href="/blog/project-gutenberg-audiobooks"
            className="text-loudBlue hover:underline"
          >
            Project Gutenberg through TTS
          </Link>{" "}
          is a genuinely free library that never expires.
        </p>
        <p>
          What changes with Premium? {PRICING.premiumFeatures}. That is
          it. The free tier is not a crippled demo. It is a fully
          functional book reader that you can use forever without paying.{" "}
          <Link
            href="/blog/free-audible-alternative"
            className="text-loudBlue hover:underline"
          >
            It works as a free alternative to audiobook subscriptions
          </Link>{" "}
          for anyone who reads EPUBs and PDFs.
        </p>
        <p>
          LoudReader is fully on-device and private, your library never
          leaves your device. No word quota, because there is no server
          cost to offset. That is the structural reason the free tier can
          be unlimited.
        </p>
      </QuestionSection>

      <QuestionSection question="How do other free tiers compare?">
        <p>
          Most competing apps give you a sample of their paid service. They
          let you listen for a limited number of words, minutes, or
          characters per day or per month. After that, you subscribe. The
          quality of the free sample is often high, with good cloud voices,
          but it runs out quickly for book reading. A single novel can be
          80,000 to 120,000 words, which exhausts most free quotas in a
          chapter or two.
        </p>
        <p>
          These free tiers are honest about what they are: trials. They
          let you test the app before committing. They are not designed for
          ongoing free use with full books. If your goal is to listen to
          complete books without paying, a cloud-based TTS free tier will
          not get you there.
        </p>
      </QuestionSection>

      <QuestionSection question="Which free option should you pick?">
        <p>
          If you read mostly web articles, emails, and short-form content,
          Apple Spoken Content is already on your device and costs nothing.
          Turn it on and start listening. It is the simplest, most
          accessible free TTS option available.
        </p>
        <p>
          If you want to listen to full books, EPUBs, and PDFs, LoudReader
          gives you a dedicated reading experience with no limits. Natural
          voices, saved positions, word highlighting, and a built-in
          catalog of classics. All free, forever.
        </p>
        <p>
          If you try the free tier and want more voices, speed control, and
          extras, Premium is {PRICING.premiumMonthly} or{" "}
          {PRICING.premiumYearly}. But you never have to.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Start listening free, no strings attached"
        subline="One natural voice, every book, unlimited listening. No account needed."
      />
    </ArticleLayout>
  );
}