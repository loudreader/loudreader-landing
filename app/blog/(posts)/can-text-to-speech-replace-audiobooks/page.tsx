import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, DIFFERENTIATORS, PRICING } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function CanTextToSpeechReplaceAudiobooksArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Sometimes, and the honest answer depends on what you actually want
          from the book. Text to speech cannot replace an audiobook where the
          performance is the point: a full-cast production, a memoir read by
          its author, a novel that leans on distinct character voices. A
          trained narrator makes acting choices no TTS engine attempts.
          Where text to speech wins outright is availability. Most books ever
          published, backlist titles, academic texts, manuscripts,
          self-published novels, public domain classics, were never recorded
          as audiobooks and never will be. <strong>LoudReader</strong> (iPhone, iPad, and Mac) reads any DRM-free EPUB or PDF aloud with{" "}
          {DIFFERENTIATORS.voices}, so for the book you already own that has
          no audiobook edition, TTS is not a compromise. It is the only
          version that exists. For a story you want performed rather than
          narrated, an audiobook still wins.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Every book you own becomes audio. Not every book becomes a performance."
      />

      <QuestionSection question="Where does an audiobook still beat text to speech?">
        <p>
          On performance, plainly. A professional narrator brings choices a
          synthesized voice does not attempt: distinct character voices,
          comic timing, emotional pacing built around the story rather than
          the sentence. A full-cast dramatization with a separate actor per
          character, or a memoir read by the person who lived it, is doing
          something categorically different from reading text aloud. If that
          performance is what draws you to a specific book, buying or
          borrowing the audiobook is the right call, not a fallback.
        </p>
        <p>
          It is also worth being direct about what LoudReader does not do.
          It does not produce a multi-cast dramatization, and it is not a
          celebrity or author reading in their own voice unless you record
          that voice yourself. It reads your text with a natural narrator, not
          a performance troupe.
        </p>
      </QuestionSection>

      <QuestionSection question="Where does text to speech clearly win?">
        <p>
          Availability, first and by a wide margin. Only a small fraction of
          books ever get a professional recording. If your reading list
          includes backlist titles, indie and self-published novels, academic
          or technical books, manuscripts, or the huge public-domain catalog,
          no audiobook store can help you, because the recording simply does
          not exist. A text-to-speech reader reads the file you already have.
          The full mechanics are in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          , and the short version is: import the EPUB or PDF, press play.
        </p>
        <p>
          Price and control follow close behind. LoudReader&apos;s free tier
          plays every imported book with unlimited listening, and{" "}
          {PRICING.premiumFeatures} come with Premium at{" "}
          {PRICING.premiumMonthly}. Speed is continuous rather than a handful
          of presets, which matters if you read faster than 1.0x or want a
          slower pace for dense material. And the app is {DIFFERENTIATORS.private},
          so listening does not depend on a connection.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you decide between them for a specific book?">
        <p>
          Ask one question first: does this book exist as an audiobook, and
          do you actually want the performance it offers? If yes to both, an
          audiobook store, a subscription service, or a library app is the
          better choice for that title.{" "}
          <Link
            href="/blog/audible-vs-text-to-speech"
            className="text-loudBlue hover:underline"
          >
            The full comparison of Audible against text to speech
          </Link>{" "}
          covers that trade-off in more depth.
        </p>
        <p>
          If the answer is no, either because there is no recording or
          because a narrator&apos;s interpretation is not what you are after,
          text to speech is not a lesser option. It is the tool built for
          that job, reading your own files on whatever schedule you set.
        </p>
      </QuestionSection>

      <QuestionSection question="Do most people end up choosing one over the other?">
        <p>
          Not in practice. The people who get the most out of both treat them
          as different tools for different books rather than as competitors.
          A prestige literary novel with a celebrated narrator is worth
          seeking out as an audiobook. The technical manual, the out-of-print
          classic, the manuscript a friend sent you as a PDF, none of those
          are waiting for a studio recording. Import them into{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader
          </a>{" "}
          and they become listenable today.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="A reader for every book, even the ones with no audiobook"
        subline="Import any EPUB or PDF and press play. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
