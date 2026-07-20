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

export default function NaturalReaderAlternativeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          NaturalReader is a solid app with a clean interface and good voice
          quality, but it runs most voices in the cloud and requires a
          subscription for real use.{" "}
          <strong>LoudReader</strong> (native Mac and iPhone apps) goes the
          other direction: it is fully on-device and private, your library
          never leaves your device. The free tier has no word quota and lets
          you listen to entire books without paying a cent. Premium is{" "}
          {PRICING.premiumMonthly} or {PRICING.premiumYearly}, and there is
          a {PRICING.premiumLifetime} option so you can buy it once and own
          it. If you want something that works offline by design, has no
          account requirement, and won&apos;t send your reading habits to a
          server, LoudReader is the direct alternative.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Read anything, no cloud required."
      />

      <QuestionSection question="What is NaturalReader, and why look for an alternative?">
        <p>
          NaturalReader is a well-known text-to-speech app that reads
          documents, PDFs, and web pages aloud. The interface is polished and
          easy to use. It has been around for years and the company keeps it
          updated. For many people, NaturalReader works fine.
        </p>
        <p>
          The main reasons people search for an alternative: the best
          natural-sounding voices need an internet connection because they
          run on cloud servers. There is no way to buy it once; everything
          that makes the app useful sits behind a recurring subscription.
          And your documents get sent to NaturalReader&apos;s servers for
          processing when you use the cloud voices, which matters if you
          read confidential stuff or just prefer to keep your reading
          private.
        </p>
        <p>
          LoudReader is built around the opposite philosophy. Everything
          happens on your phone or Mac. No document upload. No account
          creation. No server ever sees what you are reading. The voices
          live on your device, so they work anywhere.
        </p>
      </QuestionSection>

      <QuestionSection question="How does the pricing compare?">
        <p>
          NaturalReader uses a subscription model. The free version is
          limited in what it can do. To get the natural-sounding cloud
          voices and full feature set, you pay monthly or yearly with no
          lifetime option.
        </p>
        <p>
          LoudReader&apos;s free tier is genuinely generous:{" "}
          {PRICING.free} You get one natural offline voice, and you can
          listen to an entire novel front to back without hitting a word
          cap. Premium adds{" "}
          {PRICING.premiumFeatures}. Premium costs{" "}
          {PRICING.premiumMonthly} or {PRICING.premiumYearly}. And there is
          a {PRICING.premiumLifetime} purchase. Pay once, and Premium is
          yours forever across both Mac and iPhone.
        </p>
        <p>
          If you read a lot and do not want another monthly bill, the
          lifetime option is the biggest pricing difference between the two
          apps.
        </p>
      </QuestionSection>

      <QuestionSection question="What about privacy and where your data lives?">
        <p>
          This is where the two apps diverge the most. NaturalReader
          processes text through cloud servers for its best voices. That
          means your documents leave your device. For casual reading like
          news articles, that might not bother you. For work documents,
          manuscripts, or personal journals, it can be a dealbreaker.
        </p>
        <p>
          LoudReader is fully on-device and private, your library never
          leaves your device. The app does not have an account system, so
          there is no email to collect, no reading history to sync to a
          server, and no analytics dashboard tracking what you open. Your
          EPUB and PDF files stay local. The speech synthesis engine runs
          right on your iPhone or Mac. No internet means no data
          transmitted anywhere.
        </p>
        <p>
          If you read anything you would not upload to a random website, an
          on-device reader is the safer choice.
        </p>
      </QuestionSection>

      <QuestionSection question="How does the reading experience compare?">
        <p>
          Both apps do the core job well: import text, pick a voice, press
          play. NaturalReader has a slightly wider format support out of
          the box. It reads Word documents, plain text files, and web pages
          directly, while LoudReader focuses on EPUB and PDF. For web
          articles, you can save them as PDF first and open them in
          LoudReader.
        </p>
        <p>
          LoudReader shines in the details of book reading. It remembers
          your position in every book, highlights words as it reads them,
          and works with the lock screen and Bluetooth controls on iPhone.
          The Mac app gives you the same experience on desktop with the
          same voices and the same library.
        </p>
        <p>
          Voice quality is comparable for the premium voices on both sides.
          NaturalReader&apos;s cloud voices can sound slightly more
          expressive since they have server power behind them.
          LoudReader&apos;s voices are local and always available, which
          means no latency waiting for text to round-trip through a server
          before it starts speaking.
        </p>
      </QuestionSection>

      <QuestionSection question="Which one should you pick?">
        <p>
          Pick NaturalReader if you need to read Word documents, web pages,
          or other formats beyond EPUB and PDF directly, or if you rely on
          Windows. The wider format support and cross-platform reach are
          real advantages.
        </p>
        <p>
          Pick LoudReader if you read mostly EPUBs or PDFs, want everything
          to work offline, care about keeping your documents private, or
          want to pay once and be done. LoudReader is native Mac and iPhone
          apps, so your library and your place syncs across those two
          platforms through iCloud.
        </p>
        <p>
          The two apps are not enemies. They solve the same problem from
          opposite angles: NaturalReader from the cloud, LoudReader from
          the device. Pick the one that fits how you think about your
          reading life.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Read privately, no cloud required"
        subline="Free unlimited listening, natural offline voices, and a lifetime purchase option. Your books stay on your device."
      />
    </ArticleLayout>
  );
}