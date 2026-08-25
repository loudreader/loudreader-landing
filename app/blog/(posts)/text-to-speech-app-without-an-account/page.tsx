import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function NoAccountArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          <strong>LoudReader</strong> has no sign-up screen, no login, and no
          account of any kind. You install it (native Mac and iPhone apps),
          import a book, and press play, with nothing that asks for an email
          or password first. It's fully on-device and private, your library
          never leaves your device, and with no account, there's no server
          record of who you are or what you've read. That design has a real
          cost worth naming up front: without an account, there's nothing to
          hang a synced library on, so a book you import on your iPhone
          doesn't automatically show up on your Mac. Each device keeps its
          own local library. If cross-device sync matters more to you than
          skipping sign-up, that's a genuine tradeoff to weigh, not a hidden
          catch.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="No login screen. Import a book and it starts reading."
      />

      <QuestionSection question="What does 'no sign up' actually mean here?">
        <p>
          It means what it sounds like: there is no screen anywhere in
          LoudReader that asks for an email, a password, or any personal
          detail before you can use it. You download the app, open it, and
          the first thing you can do is import a book. There's no account to
          create, verify, or eventually forget the password to.
        </p>
        <p>
          A lot of apps use "no credit card required" to mean something
          similar while still requiring an account. Those are different
          claims. LoudReader skips the account step entirely, not just the
          payment step.
        </p>
      </QuestionSection>

      <QuestionSection question="Why would an app deliberately skip accounts?">
        <p>
          Because it doesn't need one. LoudReader reads books aloud with{" "}
          <Link href="/blog/on-device-text-to-speech-explained" className="text-loudBlue hover:underline">
            speech generated entirely on your device
          </Link>
          , not on a server somewhere. An account exists, in most apps, to
          let a server know who you are so it can store your data, your
          preferences, or your usage. If the processing never touches a
          server in the first place, there's nothing for an account to
          attach to. Skipping accounts here is a consequence of the
          on-device design, not a separate feature bolted on for marketing.
        </p>
      </QuestionSection>

      <QuestionSection question="What does no account cost you?">
        <p>
          Be honest about this, because it's the real question behind "no
          sign up" apps: what are you giving up. The answer for LoudReader is
          sync. With no account to attach a library to, each device keeps its
          own local library. Import a novel on your iPhone during your
          commute, and it won't be waiting on your Mac when you sit down at
          your desk; you'd import it separately there too. If you regularly
          switch between devices mid-book and expect your place to follow
          you, that's a real limitation, not a footnote.
        </p>
        <p>
          What you get in exchange is that there's no server anywhere holding
          a list of what you've read, no password to lose, and no account to
          get breached in someone else's incident. For a lot of reading, on
          one device at a time, that trade is an easy one. For a workflow
          split evenly across a phone and a laptop, it's worth knowing before
          you start relying on it. The full picture of what stays local and
          what doesn't, beyond just the account question, is in{" "}
          <Link href="/private-text-to-speech-no-cloud" className="text-loudBlue hover:underline">
            this breakdown of on-device text to speech
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Does 'no account' also mean no purchases?">
        <p>
          No, Premium is still available. Buying it goes through the App
          Store's own purchase system tied to your Apple ID, which is a
          platform-level mechanism, not an account inside LoudReader itself.
          You can{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            get LoudReader on the App Store
          </a>{" "}
          the same way you'd get any other app, and restoring a purchase on
          a new device works the normal App Store way. That's separate from
          the in-app account question this article is about.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Start listening with no sign-up"
        subline="Free, on-device, no account. Import a book and press play."
      />
    </ArticleLayout>
  );
}
