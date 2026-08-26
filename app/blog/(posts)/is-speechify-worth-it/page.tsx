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

export default function IsSpeechifyWorthItArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Speechify is worth $29/month if you actually use what makes it a
          suite: 60+ languages, 1000+ voices, camera scanning of physical
          books, AI summaries, and apps on iOS, Android, web, and Chrome. It
          is a harder sell if you mainly want English books and PDFs read
          aloud, because even Premium meters premium-voice listening by a
          monthly word allowance (1,000,000 words guaranteed for 2026,
          dropping to a 150,000/month baseline after), and a long novel can
          run past that on its own. The free plan covers light use with 10
          standard voices at up to 1.5x speed. If your reading is narrower
          than the suite, apps like <strong>LoudReader</strong> cover the same
          core job (books and PDFs read aloud, fully on-device and private,
          your library never leaves your device) for less, without a word
          cap.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="What $29 a month actually buys, and what it doesn't."
      />

      <QuestionSection question="What does Speechify actually do well?">
        <p>
          Speechify built its reputation on breadth, and it delivers on it.
          60+ languages, 1000+ voices including celebrity options, a mobile
          camera that scans physical book pages, a Chrome extension for
          reading the web, AI summaries and chats layered on top of your
          documents, and native apps across iOS, Android, and a Mac app that
          needs sign-in. If your reading spans multiple languages, or you
          want voice typing and AI features alongside text-to-speech, that
          combination is genuinely hard to find bundled anywhere else.
        </p>
      </QuestionSection>

      <QuestionSection question="Where does the price stop making sense?">
        <p>
          The catch is in the metering, and it is easy to miss until you hit
          it. Even on the $29/month Premium plan, listening with the premium
          voices is capped by a monthly word allowance: 1,000,000 words
          guaranteed for 2026, with a contractual baseline of 150,000
          words/month after that. A single long novel can run past 150,000
          words on its own, so a reader who listens to several books a month
          can feel that ceiling on a plan they are already paying for.
        </p>
        <p>
          The free plan is more limited still: 10 standard voices at speeds
          up to 1.5x, workable for short reading but not built around
          listening to whole books regularly.
        </p>
      </QuestionSection>

      <QuestionSection question="Who is Speechify worth it for?">
        <p>
          Honestly, plenty of people. If any of these is true for you, $29 a
          month is a reasonable trade: you read across multiple languages and
          want native voices for each; you want the largest possible voice
          catalog to pick a favorite from; you use the camera scanner on
          physical books regularly; or the AI summary and podcast features
          save you real time. Speechify built those features because people
          pay for them, and if you are one of those people, the price buys
          real capability.
        </p>
      </QuestionSection>

      <QuestionSection question="When is a narrower app the better trade?">
        <p>
          If your actual use case is simpler than the suite, mostly books and
          PDFs, read privately, with no monthly word cap to watch, you can pay
          less and get exactly that. <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>{" "}
          (iPhone, iPad, and Mac)
          reads any DRM-free EPUB or PDF aloud with natural offline voices,
          fully on-device and private, your library never leaves your device.
          The free tier is unlimited listening on every book, cover to cover,
          with no word quota, and Premium is {PRICING.premiumMonthly},{" "}
          {PRICING.premiumYearly}, or a {PRICING.premiumLifetime} one-time
          purchase, which is less than two months of Speechify Premium.
        </p>
        <p>
          The trade goes the other way too: LoudReader covers 10 languages
          against Speechify&apos;s 60+, and has nowhere near 1000+ voices or a
          camera scanner. For the full feature-by-feature comparison, see{" "}
          <Link
            href="/speechify-alternative-for-mac"
            className="text-loudBlue hover:underline"
          >
            the Speechify alternative for Mac breakdown
          </Link>
          , which lays out price, privacy, offline behavior, and platform
          support side by side.
        </p>
      </QuestionSection>

      <QuestionSection question="So, is it worth it?">
        <p>
          There is no single answer, and anyone who gives you one is selling
          something. Speechify is worth it when you use the breadth: the
          languages, the voice count, the camera, the AI extras. It is not
          worth it if your actual habit is narrower than that, in which case
          you are paying a suite price for a single-app job. Read the two
          questions above honestly about your own reading, and the answer
          for your case falls out on its own.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Just books and PDFs, no word cap"
        subline={`Free tier is unlimited listening on every book. Premium is ${PRICING.premiumMonthly} or a one-time ${PRICING.premiumLifetime}.`}
      />

      <p className="text-sm text-gray-500">
        Get LoudReader from the{" "}
        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-loudBlue hover:underline"
        >
          App Store
        </a>
        .
      </p>
    </ArticleLayout>
  );
}
