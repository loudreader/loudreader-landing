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

export default function NoSubscriptionArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          <strong>LoudReader</strong> has a free tier with no subscription at
          all: {PRICING.free} If you want more than that, Premium adds{" "}
          {PRICING.premiumFeatures}, and you can pay for it either as a
          recurring plan ({PRICING.premiumMonthly} or {PRICING.premiumYearly}
          ) or as a {PRICING.premiumLifetime} purchase that never renews. The
          lifetime option exists specifically for people who don't want a
          subscription: you pay once and the app is yours. No account is
          required for either tier, and the free tier isn't a time-limited
          trial, it's the permanent free version of the app.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="Free with no subscription, or a one-time price with no renewal."
      />

      <QuestionSection question="What does 'text to speech with no subscription' actually mean?">
        <p>
          People searching this usually mean one of two things: an app with a
          genuinely free tier that isn't a trial in disguise, or an app that
          offers a one-time purchase instead of forcing a recurring charge.
          A lot of text-to-speech apps only offer the second thing after
          making the first thing nearly unusable, gating basic listening
          behind a word count that runs out in a chapter or two.
        </p>
        <p>
          LoudReader answers both versions of the question. The free tier is{" "}
          {PRICING.free} And Premium, if you want it, can be bought as a
          one-time purchase instead of a subscription.
        </p>
      </QuestionSection>

      <QuestionSection question="What do you actually get for free, permanently?">
        <p>
          {PRICING.free} That's not a seven-day trial or a fixed word
          allowance. You can import a book, read the entire thing, start
          another one, and keep going, with{" "}
          <Link href="/blog/best-free-text-to-speech-app" className="text-loudBlue hover:underline">
            no subscription and no meter running out
          </Link>
          . The free tier plays with one natural offline voice at normal
          speed, which is enough for a lot of reading. It's fully on-device
          and private, your library never leaves your device, on the free
          tier exactly as much as on Premium.
        </p>
      </QuestionSection>

      <QuestionSection question="What does Premium cost if you don't want a subscription?">
        <p>
          Premium adds {PRICING.premiumFeatures}. You can pay for that three
          ways: {PRICING.premiumMonthly}, {PRICING.premiumYearly}, or a{" "}
          {PRICING.premiumLifetime} purchase. The lifetime price is the
          answer if a recurring charge is the thing you're trying to avoid.
          Pay once, and there's no renewal date to remember and no
          subscription to cancel later.
        </p>
        <p>
          Worth saying plainly: the monthly and yearly options are, in fact,
          subscriptions. LoudReader isn't pretending otherwise. The honest
          pitch is that you have a real choice, including one that isn't a
          subscription at all, which is more than most apps in this category
          offer.
        </p>
      </QuestionSection>

      <QuestionSection question="How does this compare to apps that only offer a subscription?">
        <p>
          Most text-to-speech apps in this category, including{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            the better-known ones
          </a>
          , structure pricing around a recurring plan with no meaningful free
          option and no one-time alternative. If you read in bursts, a few
          books over a couple of months and then nothing for a while, a
          forced monthly subscription is a bad fit: you either pay for
          months you don't use or cancel and lose your setup. LoudReader's
          free tier covers casual reading without asking for a subscription
          at all, and the lifetime price covers the other end, heavy readers
          who want everything without an ongoing bill.
        </p>
      </QuestionSection>

      <QuestionSection question="When does the lifetime price actually pay off?">
        <p>
          Simple math, not a sales pitch: {PRICING.premiumLifetime} divided by
          {" "}{PRICING.premiumMonthly.replace("/month", "")} a month works out
          to a little over two years of the monthly plan. If you expect to
          use LoudReader Premium for longer than that, the lifetime price is
          the cheaper choice as well as the one with no ongoing commitment.
          If you're not sure yet whether you'll stick with it, the monthly
          plan costs less to try and you can switch to lifetime later. Either
          way, nothing about the free tier changes: it stays{" "}
          {PRICING.free.toLowerCase()}
        </p>
        <p>
          If you're weighing LoudReader against other apps on price at all,{" "}
          <Link href="/speechify-alternative-for-mac" className="text-loudBlue hover:underline">
            the full comparison
          </Link>{" "}
          covers voices, platforms, and privacy alongside cost.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Try it free, no subscription required"
        subline="Unlimited listening on every book. Upgrade later with a one-time price if you want."
      />
    </ArticleLayout>
  );
}
