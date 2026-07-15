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

export default function CatchTyposInYourOwnWritingArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          You miss typos in your own writing because your brain reads what it{" "}
          <strong>meant</strong> to write, not what it wrote. Writing is a
          high-level task, so your brain generalizes the small mechanical
          parts (letters, spellings, little words) to free attention for
          meaning. When you proofread your own draft, the finished version in
          your head competes with the actual text on the screen, and the head
          version usually wins: gaps get filled, doubled words get merged,
          &ldquo;form&rdquo; becomes &ldquo;from.&rdquo; The fix is to make
          the text unfamiliar (wait a few days, change the font, print it
          out), or to switch modality entirely and <strong>listen</strong> to
          it. A text-to-speech voice has no version in its head: it reads
          exactly what is on the page, mistakes and all.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="Your eyes read the draft in your head. Your ears get the one on the page."
      />

      <QuestionSection question="Why can't you see your own typos?">
        <p>
          The best plain-language explanation comes from psychologist Tom
          Stafford of the University of Sheffield, interviewed in{" "}
          <a
            href="https://www.wired.com/2014/08/wuwt-typos/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-loudBlue hover:underline"
          >
            WIRED&apos;s 2014 piece on typo blindness
          </a>
          : missing your own typos is not carelessness. It is a side effect
          of competence. Writing is a high-level task. To do it at all, your
          brain automates the low-level components (spelling, letter order,
          function words) so it can spend attention on the hard part:
          meaning. Once those components are automated, your brain stops
          inspecting them.
        </p>
        <p>
          Then comes the cruel part. When you proofread your own work, you
          are not reading fresh text. You are re-running a text you already
          know the meaning of. The version in your head competes with the
          version on the screen, and because reading is heavily predictive,
          the head version fills in whatever the screen version is missing.
          You do not see &ldquo;hte&rdquo; because your brain hands you
          &ldquo;the.&rdquo; You do not notice the missing word because the
          sentence was complete in your mind before your eyes reached it.
        </p>
      </QuestionSection>

      <QuestionSection question="Why do you spot typos instantly in other people's writing?">
        <p>
          Because you have no inside knowledge to betray you. Reading a
          colleague&apos;s draft, every sentence is new information: your
          brain cannot predict the next clause, so it actually reads the
          words on the page instead of skimming past them. That is the whole
          asymmetry: their typos live in text you process; yours live in
          text you remember. The author is, structurally, the worst-placed
          person to proofread the work. Every trick that follows is an
          attempt to turn you back into a stranger to your own draft.
        </p>
      </QuestionSection>

      <QuestionSection question="Do the classic tricks (reading backwards, changing the font) actually work?">
        <p>
          They work to the degree that they make the text unfamiliar, which
          is exactly the advice Stafford gives in the WIRED piece: change the
          font, change the background color, print it out and edit by hand.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Waiting</strong> is the
            gentlest version. Familiarity decays with time, so a draft you
            have not seen for a week reads almost like someone else&apos;s.
            The catch: deadlines.
          </li>
          <li>
            <strong className="text-gray-900">Font, color, paper</strong> all
            break the visual memory of the draft. Cheap and worth doing, but
            the effect is partial, since the words still arrive through the
            same predictive reading loop.
          </li>
          <li>
            <strong className="text-gray-900">Reading backwards</strong> is
            the extreme case: it destroys meaning so each word gets inspected
            alone. That catches misspellings, and it structurally cannot catch
            a missing &ldquo;not,&rdquo; because meaning is what a missing
            word breaks.
          </li>
        </ul>
        <p>
          All three attack familiarity from inside the same channel: your
          eyes. There is a fourth option that switches the channel entirely.
        </p>
      </QuestionSection>

      <QuestionSection question="Why does hearing your draft expose what your eyes hide?">
        <p>
          A text-to-speech voice is the stranger you cannot become. It has no
          intended meaning to defend and no memory of your draft. It just
          reads the page, verbatim. Listening moves proofreading out of the
          predictive visual loop where typo blindness lives: a missing word
          becomes an audible pothole, a doubled word gets dutifully spoken
          twice, and a sentence you mangled while rearranging clauses sounds
          exactly as mangled as it is.
        </p>
        <p>
          This is why a listening pass and a spellchecker are complements,
          not rivals. The spellchecker catches non-words; the voice catches
          the perfectly spelled sentence that is not the sentence you meant.
        </p>
        <p>
          If the draft is private (an unpublished manuscript, a grant
          application, a personal essay), the tool matters.{" "}
          <Link href="/" className="text-loudBlue hover:underline">
            LoudReader
          </Link>{" "}
          reads your exported PDF or EPUB with natural offline voices and is
          fully on-device and private, your library never leaves your
          device. It also highlights each word as it speaks, so when your ear
          flinches, your eye is already on the offending word.
        </p>
      </QuestionSection>

      <QuestionSection question="How do you build listening into your writing routine?">
        <p>The version that sticks is small:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Finish the draft. Run the spellchecker first and let it eat the easy errors.</li>
          <li>
            Export to PDF and open it in{" "}
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-loudBlue hover:underline"
            >
              LoudReader
            </a>{" "}
            (free, no account).
          </li>
          <li>
            Listen with the text in view. Pause at every flinch. The flinch
            is the finding.
          </li>
          <li>Fix, then re-listen to just that paragraph before moving on.</li>
        </ol>
        <p>
          The full technique guide is{" "}
          <Link
            href="/blog/proofread-by-listening"
            className="text-loudBlue hover:underline"
          >
            proofread by listening
          </Link>
          ; for the essay-specific version (what to listen for, how to loop
          on fixes), see{" "}
          <Link
            href="/blog/read-my-essay-out-loud"
            className="text-loudBlue hover:underline"
          >
            read my essay out loud: edit your essay by ear
          </Link>
          . And if you are wondering what LoudReader does and does not do,
          the{" "}
          <Link href="/faq" className="text-loudBlue hover:underline">
            FAQ
          </Link>{" "}
          covers it honestly.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />

      <StoreCta
        headline="Let a voice with no memory proofread your draft"
        subline="LoudReader reads exactly what you wrote. On-device, offline, free to start."
      />
    </ArticleLayout>
  );
}
