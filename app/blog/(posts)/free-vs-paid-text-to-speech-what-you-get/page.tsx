import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, PRICING, VOICES } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function FreeVsPaidTextToSpeechArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          LoudReader&apos;s free tier is genuinely unlimited on listening
          time: {PRICING.free} The line sits on voices, not on words or
          chapters. Every free user gets an eight hour, one-time trial of all
          23 studio narrators, counted as cumulative listening and not tied
          to a calendar day. After those eight hours, the app settles you
          onto {VOICES.free}, permanently, at no cost. Finish your first book
          and you get a one-time 3 hour bonus of all-voice listening as a
          thank-you, no review required. LoudReader Premium adds{" "}
          {PRICING.premiumFeatures}. It costs {PRICING.premiumMonthly},{" "}
          {PRICING.premiumYearly}, or {PRICING.premiumLifetime}. There is no
          middle tier and no word quota hiding behind the free label.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Free plays the whole book. Premium is about voices, speed, and extras."
      />

      <QuestionSection question="What can you actually do on the free tier?">
        <p>
          Everything that matters for finishing a book. LoudReader&apos;s
          free tier plays a book start to finish with no word count and no
          chapter cap, because {PRICING.free} You can import as many EPUBs
          and PDFs as you want, on your Mac or your iPhone, and none of them
          are locked partway through waiting for a subscription. If you have
          ever hit a text-to-speech app that reads the first few pages and
          then stops, that is not how LoudReader&apos;s free tier works.{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            Download it from the App Store
          </a>{" "}
          and you can test every claim in this article in a few minutes.
        </p>
      </QuestionSection>

      <QuestionSection question="Where does the free tier actually stop?">
        <p>
          Voice variety. Every free user starts with an eight hour trial of
          all 23 studio narrators across 10 languages, and that number is
          cumulative listening time, not a daily allowance and not a
          calendar window. You can spread it across a week or burn through it
          in a weekend. Once you have listened for eight hours total, the app
          moves you onto {VOICES.free}. You keep it forever, and it keeps
          reading everything you import, but the other 22 narrators go behind
          Premium.
        </p>
        <p>
          There is one small, honest sweetener: finish your first book on
          LoudReader and you get a one-time 3 hour bonus of all-voice
          listening added on top of the trial. It is not tied to leaving a
          review, and it is not a marketing trick, it is a thank-you for
          reaching the end of something.
        </p>
      </QuestionSection>

      <QuestionSection question="What does Premium add?">
        <p>
          Premium adds {PRICING.premiumFeatures}. The narrator roster is the
          same 23 voices across 10 languages you sampled during the trial,{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            listed with audio samples here
          </Link>
          . On-device voice cloning lets you build a narrator from about ten
          seconds of your own recorded speech, and that recording never
          leaves your device.
        </p>
        <p>
          One feature is metered rather than simply included: generating a
          book&apos;s audio ahead of time for offline listening. That is
          Premium-only because it costs real processing and battery on your
          own phone, not because the words themselves are being held back.
        </p>
      </QuestionSection>

      <QuestionSection question="Is Premium worth it, or is the free tier enough?">
        <p>
          If one voice reading every book you own sounds fine, the free tier
          is a complete product, not a stripped-down demo. It is{" "}
          <Link
            href="/blog/text-to-speech-app-without-a-subscription"
            className="text-loudBlue hover:underline"
          >
            a real subscription-free option
          </Link>
          , and it is fully on-device and private, your library never leaves
          your device, on the free tier exactly as much as on Premium. Where
          Premium earns its price is variety and control: a different voice
          for fiction than for a dense report, a faster speed for a familiar
          book, a sleep timer so the narration stops when you doze off, and a
          voice cloned from your own or someone else&apos;s speech. None of
          that changes whether the book gets read to you, only how well the
          listening fits the book and fits your day. At{" "}
          {PRICING.premiumMonthly} a month, that is a small bet if voice
          variety and speed control are things you actually want.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Try every voice, then keep one for free"
        subline={`Download LoudReader from the App Store. ${PRICING.free}`}
      />
    </ArticleLayout>
  );
}
