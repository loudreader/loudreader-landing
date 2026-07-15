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

export default function TooTiredToReadArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          If you are too tired to read in the evening, the failing part is
          usually your eyes, not your interest. After a day of screens they
          are dry and done focusing, and ten pages in, the lines swim. The fix
          is not more willpower. It is switching the <em>same book</em> from
          your eyes to your ears. <strong>LoudReader</strong> (native Mac and
          iPhone apps) reads any DRM-free EPUB or PDF aloud with natural
          offline voices: read while you are fresh, press play when you fade,
          and the narration picks up right where you are. It keeps your place
          either way, works with the screen locked or off, and is fully
          on-device and private, your library never leaves your device. Your
          book keeps moving while your eyes clock out.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="book-to-audio"
        caption="Same book, different channel. The story continues while your eyes rest."
      />

      <QuestionSection question="Why do your eyes give out before your brain does?">
        <p>
          The 10 p.m. version of you still wants the story. It is the optics
          that quit. By evening, most of us have spent hours doing close-range
          focus work at screens, and screens change how your eyes behave: the{" "}
          <a
            href="https://www.aao.org/eye-health/tips-prevention/computer-usage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            American Academy of Ophthalmology
          </a>{" "}
          notes that people blink only about 5 to 7 times a minute at a
          computer, versus roughly 15 normally, and blinking is how the eye
          keeps its surface moist. Less blinking means dryness, stinging, and
          blur, on top of the plain muscular effort of holding near focus all
          day.
        </p>
        <p>
          Then you get into bed and hand those same eyes a page of small text.
          Evening reading is not a fresh activity for your visual system. It
          is overtime. That is why the sleepiness hits so much harder with a
          book in hand than it did five minutes earlier watching something
          across the room.
        </p>
      </QuestionSection>

      <QuestionSection question="Why switch to listening instead of pushing through?">
        <p>
          Because pushing through does not actually get you the book. Everyone
          knows the loop: eyes skate over a paragraph, nothing lands, you read
          it again, you bargain with yourself about one more chapter, you fall
          asleep with the light on. The session technically happened; the
          story did not.
        </p>
        <p>
          Switching channels sidesteps the failing component instead of
          fighting it. Your ears have not spent the day focusing on anything
          eight inches away. Lie back, close your eyes, and let the narration
          carry the same chapter you would have squinted through.
        </p>
        <p>
          The honest caveat: listening is not effort-free. If you are truly
          falling asleep, you will drift out of an audiobook just as surely as
          out of a paperback. The difference is that a reader that saves your
          position makes drifting cheap. Skip back fifteen seconds, or
          tomorrow, resume from the last thing you actually remember. Tired
          eyes stop being the thing that ends the evening.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you switch the same book from eyes to ears?">
        <p>
          The trap with &quot;just get the audiobook&quot; is that it is a{" "}
          <em>different edition</em>: you keep two positions in two apps, if a
          recording exists at all. The cleaner setup is one file that does
          both. In{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>
          , the book you read and the book that is narrated are the same
          import:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            Get{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader from the App Store
            </a>
            , free, no account.
          </li>
          <li>
            Import any DRM-free EPUB or PDF, or pick one of the 70,000+ free
            Project Gutenberg classics built in.
          </li>
          <li>
            Read normally while your eyes are good. When they are not, press
            play, and narration starts from where you are, with each word
            highlighted if you want to half-follow along.
          </li>
          <li>
            Lock the screen, put the phone down, listen in the dark.
          </li>
        </ol>
        <p>
          There is no conversion step and no audio files to manage. The full
          picture is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          .
        </p>
      </QuestionSection>

      <ArticleIllustration
        variant="waveform"
        caption="The chapter keeps going after your eyes close."
      />

      <QuestionSection question="What helps when you still want to read in bed?">
        <p>
          Some nights you want the page anyway. A few honest notes on what
          LoudReader does and does not do for late reading:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Night mode is free</strong>. One
            tap switches the reader to a dark scheme, which is kinder in a
            dark room.
          </li>
          <li>
            <strong className="text-gray-900">
              Custom fonts, sizes, and spacing are Premium
            </strong>{" "}
            (the Reading Style options), so the free tier keeps the standard
            layout.
          </li>
          <li>
            <strong className="text-gray-900">The sleep timer is
            Premium</strong> too: playback fades out gently so falling asleep
            mid-chapter costs you minutes, not hours of lost position.
          </li>
          <li>
            <strong className="text-gray-900">
              Listening itself is free and unquota&apos;d
            </strong>
            . Whole books, cover to cover, with no word limit. More detail on
            the tiers is in the{" "}
            <Link href="/faq" className="text-loudBlue hover:underline">
              FAQ
            </Link>
            .
          </li>
        </ul>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Finish the chapter with your eyes closed"
        subline="Import the book once, read while you're fresh, listen when you're not. Free, on-device, no account."
      />
    </ArticleLayout>
  );
}
