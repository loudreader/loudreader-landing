import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, VOICES } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function BestVoiceForNonfictionVsFictionArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          There is no single best text-to-speech voice for nonfiction, but
          there is a useful pattern. Nonfiction reads better in a steady,
          restrained voice, because your attention should go to the argument,
          not the performance. Dense chapters with numbers, citations, and
          technical terms want even pacing and clear consonants over
          personality. Fiction reads better in a voice with more range, one
          that can carry dialogue and let a scene breathe. Neither is a rule.
          It is a starting point for what to listen for. <strong>LoudReader</strong>{" "}
          (native Mac and iPhone apps) ships {VOICES.headline}, and the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>{" "}
          lets you hear every one of them read a real sample before you pick.
          The app is fully on-device and private, your library never leaves
          your device, and you can use one narrator for your nonfiction and a
          different one for your fiction with no extra setup.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Two books, two different jobs for a voice."
      />

      <QuestionSection question="Why would nonfiction and fiction want different voices?">
        <p>
          Think about what each kind of book is asking you to do while you
          listen. Nonfiction asks you to follow an argument, hold a sequence
          of facts, or absorb instructions. The narration is a delivery
          mechanism, and the less it draws attention to itself, the better it
          does that job. A voice that is even, unhurried, and clean on
          consonants lets a dense paragraph about interest rates or protein
          folding land the first time, instead of making you rewind because a
          word blurred.
        </p>
        <p>
          Fiction asks something different. You are following a scene, not
          extracting a fact, and a narrator with more warmth or range can
          carry tension through a chapter the way a flat, careful voice
          can&apos;t. None of this is a rule you have to follow. Plenty of
          people happily listen to a whole library in one voice. It is a
          pattern worth knowing before you pick a default, especially if
          you&apos;re about to commit to a Premium voice you&apos;ll hear for
          hours.
        </p>
      </QuestionSection>

      <QuestionSection question="What should you listen for in a nonfiction narrator?">
        <p>
          A few concrete things to check on an actual sample, not a
          description of the voice:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Even pacing.</strong> Does the
            voice speed up on easy sentences and slow down on hard ones, or
            does it hold a steady rhythm through a paragraph packed with
            numbers or names? Steady is what you want for reference material.
          </li>
          <li>
            <strong className="text-gray-900">Clear consonants.</strong>{" "}
            Technical terms, acronyms, and proper nouns need crisp
            articulation. A softer, breathier voice that sounds lovely in a
            novel can smear a term like &ldquo;coefficient&rdquo; into mush.
          </li>
          <li>
            <strong className="text-gray-900">Low personality, on
            purpose.</strong> A narrator with a strong character is
            memorable in fiction and distracting in a business book. For
            dense nonfiction, restraint is a feature.
          </li>
        </ul>
        <p>
          On LoudReader&apos;s English roster, narrators described as
          &ldquo;even and precise&rdquo; or &ldquo;clear and light&rdquo; are
          the ones worth auditioning first for reference-heavy reading. You
          can see every narrator&apos;s own one-line description, and hear
          the actual sample, on the{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            voices page
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="What should you listen for in a fiction narrator?">
        <p>
          Fiction rewards the opposite instincts. Look for a narrator with
          some warmth or texture, someone who sounds like they&apos;re telling
          you the story rather than reading you a memo. A voice described as a
          &ldquo;storyteller&rdquo; or one with a little more depth or
          character tends to hold attention better across a long novel than
          the flattest, most neutral option in the roster.
        </p>
        <p>
          This matters more the longer the book is. A voice that&apos;s fine
          for a 20-minute short story can start to grate over a
          400-page novel if it never varies. Sampling a chapter, not just the
          first paragraph, is the only reliable way to know before you
          commit.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you actually compare voices instead of guessing from a description?">
        <p>
          Descriptions like &ldquo;warm&rdquo; or &ldquo;precise&rdquo; only
          get you so far. Two people reading the same word will disagree on
          what it sounds like. The only real test is hearing the voice read
          something.{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            LoudReader&apos;s voices page
          </Link>{" "}
          plays every one of the {VOICES.headline}, each reading a real
          sample in their own language, right in the browser. Pull it up
          alongside the book you&apos;re about to start, listen to two or
          three candidates back to back, and pick the one that felt right on
          your ears, not on paper.
        </p>
        <p>
          Once you&apos;ve picked, the choice isn&apos;t permanent.{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader
          </a>{" "}
          lets you change narrators from inside the player at any time, so a
          nonfiction pick that turns out too dry, or a fiction pick that turns
          out too much, is a couple of taps away from a different voice. The
          details of switching mid-book are in{" "}
          <Link
            href="/blog/change-narrator-voice-mid-book"
            className="text-loudBlue hover:underline"
          >
            how to change your narrator voice mid-book
          </Link>
          .
        </p>
      </QuestionSection>

      <QuestionSection question="Do you need Premium to try different voices?">
        <p>
          No, not to start. The free tier gives you one natural offline voice
          with unlimited listening on every book, which is enough to test
          whether the narration style itself works for you, before spending
          anything on choice. Premium is what unlocks the rest of the roster:{" "}
          {VOICES.premium}, plus speed control from 0.3x to 3.0x, a sleep
          timer, ambient soundscapes, and notes. If your reading is mostly
          nonfiction and mostly one voice, the free tier may be all you ever
          need. If you want a different narrator for every book, Premium is
          what buys you that.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear every voice before you pick one"
        subline="23 studio narrators, playable on the voices page. Free listening on every book, no account."
      />
    </ArticleLayout>
  );
}
