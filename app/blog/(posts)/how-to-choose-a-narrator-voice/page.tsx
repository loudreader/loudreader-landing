import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, DIFFERENTIATORS } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function HowToChooseANarratorVoiceArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          The right narrator voice depends on what you&apos;re reading, not
          on some universal &quot;best&quot; voice. A thriller wants presence
          and shape, something that holds your attention through a scene. A
          report or a set of meeting notes wants the opposite: even, brisk,
          easy to tune into the background while you fold laundry. No
          description of a voice tells you what it actually sounds like, so
          the only real way to pick one is to listen. <strong>LoudReader</strong>{" "}
          (iPhone, iPad, and Mac) has{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            23 studio narrators across 10 languages
          </Link>
          , every one playable on that page before you download anything. It
          is {DIFFERENTIATORS.private}, and the free tier gives you one voice
          with unlimited listening. Premium opens up the full roster so you can
          match the narrator to the book instead of settling for whichever
          voice you started with.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Every narrator, playable before you pick."
      />

      <QuestionSection question="Why does the right voice depend on what you're reading?">
        <p>
          A novel and a PDF of your team&apos;s quarterly numbers ask
          different things of a narrator. Fiction rewards a voice with some
          shape to it, warmth or weight that carries character and pacing
          across a long scene. You&apos;re listening for pleasure, so a
          little personality in the reading helps rather than hurts.
        </p>
        <p>
          Nonfiction and reference material want the opposite. When
          you&apos;re listening to a research paper or a set of notes for
          information, not story, a plain, even, easy-to-follow voice gets
          out of the way faster. Anything too expressive starts to feel like
          it&apos;s performing at you when you just want the content.
        </p>
        <p>
          Neither is wrong. They&apos;re different jobs, and treating one
          voice as correct for both is how people end up disliking a
          perfectly good narrator, just in the wrong context.
        </p>
      </QuestionSection>

      <QuestionSection question="Why won't a description tell you what a voice sounds like?">
        <p>
          Because words about sound are a translation, and translations lose
          the thing that mattered. &quot;Warm and even&quot; or &quot;deep and
          calm&quot; narrow the field a little, but two voices that both fit
          that description can still feel completely different in your ear.
          Pace, texture, how a voice handles a comma, none of that survives
          being written down.
        </p>
        <p>
          The only test that actually works is hearing the voice read
          something. That&apos;s why LoudReader puts every narrator on one
          page instead of describing them in a feature list.{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            Visit /voices
          </Link>{" "}
          and you can play any of the 23 narrators right in your browser, no
          download or account required, and just listen until one sounds
          right for the book you have in mind.
        </p>
      </QuestionSection>

      <QuestionSection question="How many voices are actually available, and in what languages?">
        <p>
          LoudReader ships {DIFFERENTIATORS.voices} covering 11 English
          narrators, 4 Spanish narrators, and one narrator each for German,
          French, Italian, Dutch, Polish, Portuguese, Swedish, and Danish.
          That&apos;s the honest shape of it: English readers get real range
          to choose from, and most other languages get one voice rather than
          a lineup. If you&apos;re reading in one of those single-voice
          languages, the samples at{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">
            /voices
          </Link>{" "}
          are still worth a listen before you commit, since it&apos;s the
          voice you&apos;ll be spending your reading time with.
        </p>
        <p>
          The free tier includes one voice with unlimited listening on every
          book. Premium opens up the rest of the roster, so trying a different
          narrator for a different book doesn&apos;t cost you anything beyond
          the subscription itself.
        </p>
      </QuestionSection>

      <QuestionSection question="Can you switch narrators once you've started a book?">
        <p>
          Yes, from the reader controls, any time. One thing worth knowing
          before you rely on it: the voice is a single setting for the whole
          app rather than something saved per book. Switching narrators
          changes what plays next everywhere in your library, not just the
          title you&apos;re currently listening to, until you switch again.
          It&apos;s still an easy way to test a voice mid-chapter and back out
          if it isn&apos;t working, you just want to know it&apos;s one dial,
          not one per book.
        </p>
      </QuestionSection>

      <QuestionSection question="What if none of the built-in voices fit?">
        <p>
          Worth trying all 11 English narrators before deciding that, since
          the range is wider than most apps offer. But if genuinely none of
          them land, LoudReader Premium also includes on-device voice
          cloning: read a few sentences aloud, about ten seconds, and the app
          builds a narrator from your own voice. The recording and the model
          never leave your device, matching the same privacy standard as
          everything else in the app.
        </p>
        <p>
          Download{" "}
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            LoudReader from the App Store
          </a>{" "}
          to try it, or start with the samples first.
        </p>
      </QuestionSection>

      <QuestionSection question="What comes after picking a voice?">
        <p>
          Once you&apos;ve found a narrator you like, the rest of the setup
          is quick. Import a DRM-free EPUB or PDF, or pick from the 70,000+
          Project Gutenberg classics built into the app, and it&apos;s ready
          to read aloud right away. The full walkthrough is in{" "}
          <Link
            href="/turn-any-book-into-an-audiobook"
            className="text-loudBlue hover:underline"
          >
            how to turn any book into an audiobook
          </Link>
          , but the short version is: pick a voice, import the file, press
          play.
        </p>
        <p>
          One more thing worth knowing before you settle on a narrator: the
          voice you pick applies across the whole app, not to one book in
          isolation. That&apos;s a small tradeoff for how easy it makes
          switching. There&apos;s no menu of &quot;book settings&quot; to dig
          through, just the reader controls and whichever narrator you feel
          like hearing next.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Hear the roster before you pick"
        subline="23 narrators across 10 languages, every one playable at /voices. Free tier includes one, no account needed to listen."
      />
    </ArticleLayout>
  );
}
