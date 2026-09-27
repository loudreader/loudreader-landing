import Link from "next/link";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER, PRICING } from "@/components/money/site";
import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>You can use LoudReader without a subscription: the free tier continues to read imported books after the introductory voice allowance ends. If you want Premium features without recurring billing, there is also a one-time lifetime purchase. These are different choices. Free listening has a limited English voice selection; Premium unlocks additional available narrators and controls. The monthly and yearly Premium plans do renew, so read the App Store purchase sheet before confirming one. A lifetime purchase avoids those renewal charges, but it should still be judged against the features you need and the devices you expect to use.</p>
      </Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Compare what stays free with what the one-time purchase actually adds." />
      <QuestionSection question="What stays free after the introductory allowance?">
        <p>{FREE_TIER.full} The eight hours are cumulative listening time, not eight hours after you install the app. They are also not an eight-hour cap on book listening. After the allowance, supported devices keep Bella alongside your choice of Stella or Rio; older devices have the eligible lighter voice choice.</p>
        <p>Ordinary book imports and whole-book listening remain unrestricted. Free playback runs at normal speed. Do not confuse those features with every optional workflow: article saving and bulk-import usage have their own limits, and additional controls are part of Premium.</p>
      </QuestionSection>
      <QuestionSection question="What does the one-time purchase unlock?">
        <p>Premium includes the full narrator selection available to your device, adjustable speed from 0.3× to 3.0×, a sleep timer, soundscapes and unlimited article saving. Voice Studio also has a trial creation allowance; Premium removes that creation quota. Notes and normal word highlighting are not Premium-only.</p>
        <p>The lifetime option is a one-time Premium purchase. It is not ownership of the app&apos;s source code, a promise about future hardware support, or a purchase of the ebooks you import. The separate <a href="https://loudkit.loudreader.io/" className="text-loudBlue hover:underline">Loudkit framework</a> is open-source developer software; it is a different product.</p>
      </QuestionSection>
      <QuestionSection question="How much does it cost?">
        <p>At the US storefront prices checked on 28 September 2026, Premium is {PRICING.premiumMonthly}, {PRICING.premiumYearly}, or {PRICING.premiumLifetime}. Prices and available offers vary by storefront. The purchase sheet in the app gives the current price and terms for your account.</p>
        <p>A subscription introductory offer, where available, is separate from the eight-hour voice allowance. Read what renews, when it renews and at what price. No LoudReader account is required, but App Store purchases use your Apple Account.</p>
      </QuestionSection>
      <QuestionSection question="When is a one-time purchase better value?">
        <p>Use the billing option you would otherwise choose as the comparison. At those US prices, $199.99 is a little more than 25 payments of $7.99, or about four payments of $49.99. That arithmetic describes payments avoided; it does not predict how long you will use an app.</p>
        <p>If the free voice selection already suits you, the cost of staying free is zero. If you are unsure about the Premium voices, file import or Mac compatibility, try those first. Paying once only helps when the product remains useful to you.</p>
      </QuestionSection>
      <QuestionSection question="What should I check in any no-subscription app?">
        <ul className="list-disc pl-6 space-y-2">
          <li>Does “free” mean a permanent tier, a timed trial, or a monthly allowance?</li>
          <li>Which voices and languages remain available after the introductory period?</li>
          <li>Does the one-time purchase cover the features and devices you need?</li>
          <li>Are there separate charges or limits for characters, exports or other services?</li>
          <li>Can you restore the purchase using the same store account?</li>
        </ul>
        <p>Compare the actual terms instead of assuming every competing app uses the same subscription model. For a broader route through the options, see <Link href="/blog/best-free-text-to-speech-app" className="text-loudBlue hover:underline">our free-app guide</Link>. The <Link href="/" className="text-loudBlue hover:underline">LoudReader home page</Link> shows the reader itself so you can judge the workflow as well as the billing.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try listening before choosing a plan" subline="Start with a book and the available voices. Premium is optional." />
    </ArticleLayout>
  );
}
