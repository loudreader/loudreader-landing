import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function AreTextToSpeechAppsSafeArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          In the malware sense, text-to-speech apps from the official app
          stores are as safe as any other reviewed software. The real
          question is a data question. <strong>Where is the voice
          generated?</strong> If an app&apos;s voices run in the cloud, every
          document you &ldquo;read&rdquo; with it is transmitted to the
          provider&apos;s servers. That is the architecture, not a scandal, and
          what happens next (retention, third parties, training) is governed by
          a privacy policy you have to read and trust. If the voices run
          on-device, the file never leaves your machine and the question
          disappears.{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          is built the second way: fully on-device and private, your library
          never leaves your device. The airplane-mode test below tells you
          which kind of app you have in under a minute.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="offline"
        caption="The safety question in one picture: does your text reach a cloud at all?"
      />

      <QuestionSection question="Does a text-to-speech app upload your document to a server?">
        <p>
          There are only two architectures, and everything else follows from
          which one an app uses. <strong>Cloud TTS</strong> synthesizes speech
          on the provider&apos;s servers: your text is sent up, audio comes
          back. The voices can be spectacular precisely because the heavy
          model runs in a data center, but by definition the text travels.
          If an app&apos;s voices are generated in the cloud, your document
          must reach that cloud. <strong>On-device TTS</strong> runs the voice
          model on your own hardware: nothing needs to be transmitted, so
          nothing is.
        </p>
        <p>
          Neither architecture is dishonest. What is risky is not knowing
          which one you are using while feeding it a contract, a medical
          record, or an unpublished manuscript.
        </p>
      </QuestionSection>

      <QuestionSection question="What happens to your file after a cloud TTS service receives it?">
        <p>
          Mechanically, a few things are always true: the service holds at
          least a temporary copy of your text to synthesize it, the request
          typically passes through hosting infrastructure run by
          subprocessors, and requests are usually logged somewhere. Beyond
          that, the specifics are contractual, and they vary by vendor:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Retention</strong>: is the text
            deleted after synthesis, kept for a period, or stored with your
            account (for libraries, sync, or resume features)?
          </li>
          <li>
            <strong className="text-gray-900">Third parties</strong>: which
            subprocessors touch the data, and in which jurisdictions?
          </li>
          <li>
            <strong className="text-gray-900">Training</strong>: do the terms
            permit using your content to improve models?
          </li>
          <li>
            <strong className="text-gray-900">Breach surface</strong>: any
            server-side copy, however well-intentioned, is one more place
            your document can leak from.
          </li>
        </ul>
        <p>
          To be fair to the vendors, reputable services publish exactly these
          terms, and many are conservative. The point is structural. Once
          the file leaves your device, your protection is a policy, not
          physics, and policies change with an updated terms page.
        </p>
      </QuestionSection>

      <QuestionSection question="What should you check in a TTS app's privacy policy?">
        <p>Five questions, in the order that matters:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Is the <strong>content itself</strong> (documents, text, audio)
            listed as collected, or only anonymous usage data?
          </li>
          <li>
            What is the <strong>retention period</strong> for uploaded text,
            stated in days rather than adjectives?
          </li>
          <li>
            Who are the <strong>third parties and subprocessors</strong>, and
            what do they receive?
          </li>
          <li>
            Can your content be used for <strong>model training</strong>, and
            is that opt-in or opt-out?
          </li>
          <li>
            Is there a working <strong>deletion path</strong>, and does
            deleting your account delete your uploads?
          </li>
        </ol>
        <p>
          Two shortcuts help. The App Store&apos;s privacy label (the
          &ldquo;App Privacy&rdquo; section on every listing) shows what a
          developer declares they collect before you install anything. And a
          policy&apos;s length is a signal in itself: an app that collects
          almost nothing needs very few words to say so.{" "}
          <Link href="/privacy" className="text-loudBlue hover:underline">
            LoudReader&apos;s privacy policy
          </Link>{" "}
          is a two-minute read for exactly that reason.
        </p>
      </QuestionSection>

      <QuestionSection question="How can you tell if a TTS app is really on-device?">
        <p>
          Run the airplane-mode test: turn off Wi‑Fi and cellular, then press
          play. An app that keeps narrating with no connection is generating
          speech locally, and there is no way to fake that. An app that stops,
          throws an error, or quietly switches to a lower-quality voice was
          synthesizing in the cloud. It is the fastest honest answer to
          &ldquo;is my text being uploaded?&rdquo; and it requires no
          policy-reading at all.
        </p>
        <p>
          Secondary signs of cloud processing: mandatory accounts, word-count
          quotas metered per month (metering happens server-side), and
          privacy labels that list your content as collected data.
        </p>
      </QuestionSection>

      <QuestionSection question="What is the structural fix?">
        <p>
          Keep the synthesis on the device, and the entire question of what a
          server does with your file becomes moot. That is how LoudReader is
          built: native Mac and iPhone apps that read EPUBs, PDFs, and
          articles aloud with natural offline voices, fully on-device and
          private, your library never leaves your device. There is no
          account, imported files live in the app&apos;s local storage, and
          the only network requests are downloads you explicitly ask for. The
          full breakdown of the architecture is on{" "}
          <Link
            href="/private-text-to-speech-no-cloud"
            className="text-loudBlue hover:underline"
          >
            private text to speech with no cloud
          </Link>
          , and the honest trade-offs are real: fewer voices than the cloud
          suites, English-only today, and it needs modern Apple hardware. If
          what you read is sensitive, that trade is the whole decision. And
          if you routinely listen to confidential material, the workflow in{" "}
          <Link
            href="/blog/listen-to-confidential-documents"
            className="text-loudBlue hover:underline"
          >
            how to listen to confidential documents securely
          </Link>{" "}
          takes this from principle to practice.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Text to speech that can't leak your files"
        subline="On-device narration for books, PDFs, and articles. No account, no uploads. Verify it yourself in airplane mode."
      />
    </ArticleLayout>
  );
}
