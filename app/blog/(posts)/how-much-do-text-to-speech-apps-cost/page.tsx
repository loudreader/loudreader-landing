import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import ComparisonTable from "@/components/money/ComparisonTable";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, PRICING } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function HowMuchDoTextToSpeechAppsCostArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Text-to-speech apps range from free to about $29 a month, and the
          price mostly tracks how many voices and languages an app offers, not
          how good any single voice sounds. Your phone already has a free
          built-in reader (Spoken Content on iPhone, VoiceOver on Mac). Paid
          apps add nicer voices and features on top of that: Speechify Premium
          is $29/month, ElevenReader&apos;s Ultra plan is $11/month or
          $99/year, and Voice Dream Reader is $79.99/year.{" "}
          <strong>LoudReader</strong> (iPhone, iPad, and Mac) sits at the
          low end: the free tier is unlimited listening on every book with no
          word quota, and Premium is {PRICING.premiumMonthly},{" "}
          {PRICING.premiumYearly}, or {PRICING.premiumLifetime} as a
          one-time purchase. It is fully on-device and private, your library
          never leaves your device.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Free readers, paid subscriptions, and the odd one-time purchase."
      />

      <QuestionSection question="What do free text-to-speech apps actually give you?">
        <p>
          The most-overlooked free option is the one already on your phone.
          iPhone has Spoken Content, and Mac has VoiceOver and Speak
          Selection, both built into the operating system and free. They read
          whatever text is on screen, no app store visit required. The
          catch is convenience: they are not built around importing whole
          books, tracking your place, or offering a library of voices to
          choose between.
        </p>
        <p>
          Purpose-built reading apps then split into two camps. Some give a
          real free tier for actual book listening, and some give a limited
          trial meant to convert you to a subscription. LoudReader{" "}
          {PRICING.free.toLowerCase()} You get one natural offline voice for
          free, forever, with no meter on how much you listen.
        </p>
      </QuestionSection>

      <QuestionSection question="What do subscription text-to-speech apps cost?">
        <p>
          Here is what each app actually charges, checked directly against
          each vendor&apos;s own pricing page:
        </p>
        <ComparisonTable
          caption="Monthly and annual pricing for text-to-speech apps, checked against each vendor's own site"
          columns={["Monthly", "Annual", "What the free tier gives you"]}
          rows={[
            {
              label: "LoudReader",
              cells: [
                PRICING.premiumMonthly,
                PRICING.premiumYearly,
                "Unlimited listening, one voice, no word quota",
              ],
            },
            {
              label: "Speechify",
              cells: [
                "$29/month",
                "About 60% off, billed yearly",
                "10 standard voices, up to 1.5x speed",
              ],
            },
            {
              label: "ElevenReader",
              cells: [
                "$11/month (Ultra)",
                "$99/year (about $8.25/month)",
                "10 hours of text-to-audio a month",
              ],
            },
            {
              label: "Voice Dream Reader",
              cells: [
                "Subscription-based",
                "$79.99/year (regular price)",
                "36 built-in iOS voices, 27 languages",
              ],
            },
          ]}
        />
        <p>
          None of these numbers are guesses. They come from each vendor&apos;s
          own pricing page, and if any app on this list has since changed its
          price, its own site is the place to double-check, not this table.
        </p>
      </QuestionSection>

      <QuestionSection question="Is a word or hour quota the same as a price?">
        <p>
          Not quite, and it is worth reading past the sticker price. Speechify
          meters premium-voice listening even on Premium: 1,000,000
          words/month guaranteed for 2026, with a 150,000/month contractual
          baseline after that. A single long novel can run past 150,000 words,
          so a heavy reader can hit that ceiling on a paid plan. ElevenReader&apos;s
          free plan is capped at 10 hours of text-to-audio a month, described
          by ElevenLabs as roughly a 400-page book, and the Ultra plan is what
          removes that cap.
        </p>
        <p>
          LoudReader takes the meter out of the equation entirely.{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            The free tier
          </Link>{" "}
          has no word or hour quota on either the free or Premium plan. The
          real question when comparing prices is what the number buys you: a
          bucket that runs dry, or listening you never have to watch.
        </p>
      </QuestionSection>

      <QuestionSection question="Are there any one-time-purchase apps left?">
        <p>
          They are getting rare. Most of this category has moved to
          subscriptions, and even long-standing exceptions have followed:
          Voice Dream Reader switched from a one-time purchase to a
          subscription in 2024 (existing one-time purchasers were grandfathered
          onto the features they already had, but new customers now pay
          $79.99/year). LoudReader still offers {PRICING.premiumLifetime}{" "}
          as an outright purchase alongside the monthly and yearly plans, so
          if paying once and being done matters to you, check that an app
          still offers it before you assume every reading app works the same
          way now.
        </p>
      </QuestionSection>

      <QuestionSection question="What actually drives the price difference?">
        <p>
          Two things, mostly. The first is breadth: apps with dozens of
          languages, hundreds of voices, and extras like AI summaries,
          browser extensions, or audiobook stores are running real cloud
          infrastructure, and the subscription pays for it. The second is
          where the voice actually runs. Cloud voices cost the app money on
          every play, which shows up in your bill sooner or later, usually as
          a word or hour meter. LoudReader&apos;s{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            natural offline voices
          </Link>{" "}
          run on your own device, which is a large part of why the free tier
          can afford to be unlimited.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Unlimited listening, no meter"
        subline={`Free tier, one voice, no word quota. Premium is ${PRICING.premiumMonthly} or a one-time ${PRICING.premiumLifetime}.`}
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
