import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER, VOICES } from "@/components/money/site";
import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);

export default function BestVoiceForNonfictionVsFictionArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          Choose a TTS voice using passages from the book you want to hear.
          For nonfiction, test numbers, names and a dense explanation; for
          fiction, try dialogue, scene changes and unfamiliar character names.
          Clear pronunciation and a comfortable pace matter in both. You may
          prefer a restrained voice for one book and a more expressive voice
          for another, but genre does not dictate the right answer. LoudReader&apos;s{" "}
          <Link href="/voices" className="text-loudBlue hover:underline">voice samples</Link>{" "}
          can help you shortlist candidates. Then compare them on the same
          chapter in the app, on your own device. A short demo is a starting
          point, not a guarantee about hours of listening.
        </p>
      </Tldr>
      <ArticleIllustration variant="waveform" caption="Use the same passage to compare voices, then try the one you prefer on a longer chapter." />

      <QuestionSection question="What should I test in a nonfiction chapter?">
        <p>
          Choose a section that resembles the difficult parts of the book,
          rather than only its introduction. A conversational preface may
          tell you little about how a voice handles dates, abbreviations,
          references or a sequence of instructions. Keep the text nearby so
          you can distinguish a pronunciation issue from an extraction error.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="text-gray-900">Numbers and units.</strong> Can you hear the difference between a year, a decimal and a measurement? Replay anything whose meaning depends on a digit.</li>
          <li><strong className="text-gray-900">Names and specialist terms.</strong> Check recurring terms early. A pleasant voice may still pronounce an unfamiliar name incorrectly.</li>
          <li><strong className="text-gray-900">Sentence boundaries.</strong> Notice whether clauses run together or pauses interrupt the argument. Slow down if you keep losing the thread.</li>
          <li><strong className="text-gray-900">Lists and references.</strong> Listen for whether the spoken order makes sense. A table or footnote problem may come from the file rather than the voice.</li>
        </ul>
        <p>
          There is no requirement to choose a flat voice. A lively reading can
          suit narrative history; a calm one may suit a technical manual. The
          useful question is whether you can comfortably follow this material,
          not which voice sounds most like a stereotypical lecturer.
        </p>
      </QuestionSection>

      <QuestionSection question="What should I test in fiction?">
        <p>
          Pick a passage with narration and dialogue, ideally involving more
          than one character. Listen for quotation boundaries and whether the
          pacing fits the scene. Do not assume a synthetic narrator will assign
          a distinct, stable character voice to each speaker just because its
          demo sounds expressive. Check what the actual reader does.
        </p>
        <p>
          Names, invented words and changes in point of view are useful tests.
          If a delivery style draws attention away from the story, try a less
          emphatic voice. If it feels too uniform, try another. These are
          preferences, not evidence that one kind of voice is objectively better
          for fiction. Using the same favourite voice for a novel and a history
          book is a perfectly reasonable choice.
        </p>
      </QuestionSection>

      <QuestionSection question="How can I compare two voices fairly?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Choose a short passage containing a difficult name, a long sentence and something representative of the book.</li>
          <li>Play that same passage in two or three available voices, at a comparable volume and comfortable rate.</li>
          <li>Note concrete differences: a word you missed, a pause you found awkward, or a tone you enjoyed.</li>
          <li>Use the preferred voice for a longer section. Change your choice if it becomes distracting.</li>
        </ol>
        <p>
          Try changing one thing at a time. If you switch both narrator and
          speed, it can be hard to tell which change helped. This is a personal
          listening exercise, not a scientific benchmark. You do not need to
          prove that your preference will work for somebody else.
        </p>
        <p>
          In LoudReader you can change the narrator from the player. The app
          offers {VOICES.headline}, with availability depending on the device.
          Languages shown in the voice list also follow your library and language
          settings. The <Link href="/voices" className="text-loudBlue hover:underline">voice catalogue</Link>{" "}
          helps you explore the available languages before opening the player.
        </p>
      </QuestionSection>

      <QuestionSection question="What should I check before paying for more voices?">
        <p>
          {FREE_TIER.full} Use that listening allowance on your own chapters,
          not only samples. If the continuing free English selection suits your
          books, extra voices may not be necessary. Non-English reading and
          particular studio narrators can require a different entitlement;
          check the choices shown on your hardware.
        </p>
        <p>
          Premium adds continuing access to every available narrator, adjustable
          speed from 0.3× to 3.0×, a sleep timer, soundscapes and unlimited article
          saving. Notes and highlighting are not Premium-only. You can check the
          current <Link href="/faq" className="text-loudBlue hover:underline">feature details</Link>{" "}
          before subscribing. Paying for a larger roster gives you more options,
          not a guarantee of perfect pronunciation or a performed audiobook.
        </p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try a voice on the chapter you actually want to hear" subline="Compare samples, then check names, dialogue and pacing in your own book." />
    </ArticleLayout>
  );
}
