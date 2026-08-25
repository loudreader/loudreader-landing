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

export default function IsElevenReaderFreeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Yes, ElevenReader has a free plan, but it&apos;s capped, not
          unlimited. The free tier includes 10 hours of text-to-audio a
          month, which ElevenLabs describes as about a 400-page book, and you
          need to create an account before you can start listening at all.
          Going past 10 hours, or turning on offline downloads, the 200,000+
          premium audiobook store, and custom voice creation, requires the
          Ultra plan at $11/month or $99/year (about $8.25/month billed
          annually). If a real free tier without a monthly clock matters more
          to you than ElevenReader&apos;s 1,000+ voices,{" "}
          <strong>LoudReader</strong> offers unlimited listening on every
          book with no account and no hour cap; it is fully on-device and
          private, your library never leaves your device.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Free, but the clock is running: 10 hours a month before Ultra kicks in."
      />

      <QuestionSection question="What exactly does ElevenReader's free plan include?">
        <p>
          ElevenReader&apos;s free plan gives you 10 hours of text-to-audio
          per month, along with the app&apos;s free classic audiobooks and
          the core reading experience, including word-synced highlighting.
          ElevenLabs frames the 10-hour cap as roughly a 400-page book&apos;s
          worth of listening, which is generous for a single book but tight
          for a reader working through more than one title a month.
        </p>
        <p>
          One detail worth knowing upfront: the free plan still requires
          creating an account before you can listen to anything. There is no
          try-it-with-no-signup path.
        </p>
      </QuestionSection>

      <QuestionSection question="What do you have to pay for?">
        <p>
          Past the 10-hour monthly cap, or for anything beyond basic
          reading, ElevenReader moves you to Ultra: $11/month, or $99/year
          (about $8.25/month billed annually). Ultra removes the hour cap on
          your own uploads, adds offline downloading so you can listen
          without a connection, opens up the 200,000+ premium audiobook store,
          and includes custom voice creation. Individual audiobook purchases
          are sold separately as in-app purchases on top of either plan.
        </p>
      </QuestionSection>

      <QuestionSection question="Does the free plan upload your documents?">
        <p>
          Yes. ElevenReader is built as a cloud service; the company&apos;s
          own description of the flow is &quot;simply upload and press
          play&quot;, meaning your document is sent to ElevenLabs&apos;
          servers to be converted to audio, on the free plan and on Ultra
          alike. For a privacy-conscious reader, that upload step, not the
          hour cap, is often the bigger consideration.
        </p>
        <p>
          Apps that generate speech entirely on-device skip that step by
          design. LoudReader is one of them: it{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            reads books and PDFs aloud with no upload
          </Link>
          , because the narration is generated on your own Mac or iPhone.
        </p>
      </QuestionSection>

      <QuestionSection question="Does ElevenReader have a Mac app?">
        <p>
          No. ElevenReader ships for iPhone and iPad, plus web and Android,
          but there is no native Mac app in the App Store listing. If you read
          on a Mac as often as you read on your phone, that is worth knowing
          before you pick a free plan to build a habit around.
        </p>
        <p>
          LoudReader is built the other way: native Mac and iPhone apps,
          reading the same book and picking up your place on either device.
          ElevenReader offers speed control from 0.25x to 4x and GenFM, an
          AI-generated podcast feature built from your reading, on top of
          its book listening.
        </p>
      </QuestionSection>

      <QuestionSection question="Is there a free text-to-speech app with no monthly limit?">
        <p>
          Yes. LoudReader (native Mac and iPhone apps) turns any DRM-free
          EPUB or PDF into an audiobook, and its free tier is unlimited
          listening on every book, cover to cover, with no hour or word quota
          and no account required. You get one natural offline voice for
          free, forever, and it works entirely offline since it is fully
          on-device and private, your library never leaves your device.
        </p>
        <p>
          The honest trade: ElevenReader offers 1,000+ voices across 30+
          languages on Ultra, including licensed celebrity voices and custom
          voice creation, well beyond LoudReader&apos;s smaller offline
          roster. If breadth matters more to you than an unmetered free tier,
          ElevenReader is the better fit. The full side-by-side is at{" "}
          <Link
            href="/elevenreader-alternative"
            className="text-loudBlue hover:underline"
          >
            the ElevenReader alternative comparison
          </Link>
          .
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Unlimited listening, no account, no upload"
        subline={`Free tier is every book, cover to cover. Premium is ${PRICING.premiumMonthly} or a one-time ${PRICING.premiumLifetime}.`}
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
