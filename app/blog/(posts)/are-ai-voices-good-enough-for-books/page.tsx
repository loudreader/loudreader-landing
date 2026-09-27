import Link from "next/link";

import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { APP_STORE_URL, FREE_TIER } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function AreAiVoicesGoodEnoughForBooksArticle() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>
          AI voices can be a useful way to listen to a whole book, but a
          polished ten-second sample cannot tell you whether you will enjoy
          a chapter. Try the voice on the material you read: names and numbers
          in nonfiction, dialogue in novels, and longer sentences in either.
          Check whether you follow the meaning comfortably and want to keep
          listening. <strong>LoudReader</strong> offers 23 studio narrators
          across 10 languages, with natural offline voices generated on your
          device. Start with the browser samples, then use your own book.
          {" "}{FREE_TIER.full} A human-recorded audiobook remains a separate
          choice when you want a particular narrator&apos;s performance.
        </p>
      </Tldr>

      <ArticleIllustration
        variant="waveform"
        caption="A sample helps you choose a voice. A chapter tells you whether you want to keep listening."
      />

      <QuestionSection question="What makes an AI voice good for a whole book?">
        <p>
          Pleasant tone is only the first check. For a book, listen for clear
          pronunciation, sensible pauses, a pace you can follow, and
          consistency through longer passages. A voice can sound appealing
          in a greeting and still struggle with the names, abbreviations, or
          sentence structure in your reading.
        </p>
        <p>
          There is no single preference that fits every reader. Use the same
          passage to compare two or three voices, then spend more time with
          the one you prefer. Our guide to{" "}
          <Link href="/blog/how-to-choose-a-narrator-voice" className="text-loudBlue hover:underline">choosing a narrator voice</Link>{" "}
          covers how to make that comparison.
        </p>
      </QuestionSection>

      <QuestionSection question="Where is a human narrator still worth choosing?">
        <p>
          A recorded audiobook gives you a particular performance: timing,
          character choices, and a narrator&apos;s interpretation of the
          story. Those can be a large part of why you want to hear a book.
          Text to speech gives you a way to listen to the text you already
          have, including material that has no recorded edition.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Dialogue:</strong> try a scene
            with several speakers. Check whether you can follow who is
            talking without repeatedly looking back at the page.
          </li>
          <li>
            <strong className="text-gray-900">Humour and emotion:</strong>{" "}
            listen to a scene whose effect depends on delivery, not only
            the literal words.
          </li>
          <li>
            <strong className="text-gray-900">Literary style:</strong> compare
            a dense or rhythmic paragraph with the kind of performance you
            enjoy. Your preference matters more than a generic quality claim.
          </li>
        </ul>
      </QuestionSection>

      <QuestionSection question="Are on-device voices worse than cloud voices?">
        <p>
          The location of the model does not settle its quality. The voice,
          language, model, and passage all matter. Cloud services and local
          tools can offer different voices and controls, so compare the
          actual outputs you would use rather than the labels.
        </p>
        <p>
          LoudReader generates speech on your device. You can hear its
          roster on the <Link href="/voices" className="text-loudBlue hover:underline">voice samples page</Link>.
          For how the local processing works, see{" "}
          <Link href="/blog/on-device-text-to-speech-explained" className="text-loudBlue hover:underline">on-device text to speech, explained</Link>.
          We have not run a controlled listener study comparing these voices
          with cloud services, so this article does not claim they are
          indistinguishable or assign them a quality score.
        </p>
      </QuestionSection>

      <QuestionSection question="How should I test a voice on my own book?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong className="text-gray-900">Choose representative text.</strong>{" "}
            Include ordinary prose and a difficult passage: dialogue, names,
            numbers, or technical vocabulary.
          </li>
          <li>
            <strong className="text-gray-900">Keep the comparison fair.</strong>{" "}
            Use the same passage and comfortable playback volume. Avoid
            choosing from unrelated demo scripts alone.
          </li>
          <li>
            <strong className="text-gray-900">Listen beyond the first minute.</strong>{" "}
            Try a chapter. Notice whether the voice helps you follow the text
            or makes you work harder to understand it.
          </li>
          <li>
            <strong className="text-gray-900">Check your normal setting.</strong>{" "}
            Try your usual headphones and, if offline listening matters,
            an imported book with the network disconnected.
          </li>
        </ol>
        <p>
          These are listening checks, not scientific benchmarks. Keep the
          option that works for your reading and switch when the material
          calls for something else.
        </p>
      </QuestionSection>

      <QuestionSection question="Can the same voice idea work for an app or an agent?">
        <p>
          The listening test still helps, but the task changes. A brief spoken
          answer needs to be clear on the first listen; a narrator needs to remain
          comfortable through long passages. Developers can try the separate{" "}
          <a href="https://loudkit.loudreader.io/" className="text-loudBlue hover:underline">Loudkit open-source speech framework</a>{" "}
          when adding speech to software, or explore{" "}
          <a href="https://loudkit.loudreader.io/agents/" className="text-loudBlue hover:underline">the Loudkit for agents developer preview</a>{" "}
          for an existing agent. These are separate projects from the
          LoudReader reading app, with their own setup and voice collection.
        </p>
      </QuestionSection>

      <QuestionSection question="How do I try LoudReader on a book?">
        <p>
          <a href={APP_STORE_URL} className="text-loudBlue hover:underline">Get LoudReader from the App Store</a>,
          import a DRM-free EPUB or PDF, choose a narrator, and press play.
          {" "}{FREE_TIER.full} Try a few voices on the same passage before
          settling into a chapter. If you prefer a human performance for that
          book, keep that as a separate choice; your other reading may suit a
          different voice.
        </p>
      </QuestionSection>

      <FaqSection faqs={FAQS} />
      <StoreCta
        headline="Try a voice on your own book"
        subline={`${FREE_TIER.full} Import a book and decide for yourself.`}
      />
    </ArticleLayout>
  );
}
