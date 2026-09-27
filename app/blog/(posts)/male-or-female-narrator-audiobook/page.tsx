import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FREE_TIER } from "@/components/money/site";

import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);
export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>
        Choose the voice you prefer hearing on the book, rather than treating male or female as a quality ranking. These catalogue labels can help you narrow a search, but they do not tell you how a narrator handles pronunciation, pauses, dialogue or pace. You may have a strong preference, no preference, or a different one for each book. Compare a few voices using the same passage and include at least one you would not normally pick. This article offers a listening method; it does not claim that research proves one category better, or that no relevant research exists.
      </p></Tldr>
      <ArticleIllustration variant="waveform" caption="Compare individual voices on the same passage; a category label is only a starting point." />
      <QuestionSection question="What am I choosing when I choose a male or female voice?">
        <p>Usually you are choosing among voices a library presents under those labels. The sound you prefer may involve pitch, texture, accent, delivery or familiarity. A label alone cannot tell you whether a particular voice will be clear or comfortable for a long session.</p>
        <p>Try describing what you like more precisely. Is it a lower pitch, a gentler delivery, sharper consonants or longer pauses? That can help you find another suitable voice without assuming every narrator in one category will sound alike.</p>
      </QuestionSection>
      <QuestionSection question="Does the narrator have to match the author or protagonist?">
        <p>You can use that as a preference, especially when you have a particular first-person voice in mind, but it need not be a rule. Hear a scene before deciding. With a recorded audiobook, consider whether the performance works for you; with TTS, check whether the selected voice makes the dialogue easy to follow.</p>
        <p>A text-to-speech voice selection also does not promise a different actor for each character. Listen to a passage with several speakers and decide whether the single narrator suits it. If a performed cast is what you want, check recorded editions separately.</p>
      </QuestionSection>
      <QuestionSection question="How do I compare without choosing from the label alone?">
        <ol className="list-decimal pl-6 space-y-2"><li><strong>Shortlist a few voices.</strong> Keep the language appropriate for the book and include a contrast to your usual choice.</li><li><strong>Use the same passage.</strong> Pick ordinary prose plus some dialogue or unfamiliar names. Compare at comfortable volume and a similar pace.</li><li><strong>Note what helped.</strong> Describe clarity, pauses and enjoyment rather than assigning a score to a gender.</li><li><strong>Try a longer section.</strong> A favourite short sample may not remain your favourite through a chapter.</li></ol>
        <p>You can stop once a voice works for you. This is a preference check, not an obligation to exhaust every option. For the broader process, see <Link href="/blog/how-to-choose-a-narrator-voice" className="text-loudBlue hover:underline">choosing a narrator voice</Link>.</p>
      </QuestionSection>
      <QuestionSection question="What can I try in LoudReader?">
        <p><Link href="/voices" className="text-loudBlue hover:underline">LoudReader’s voice page</Link> has playable samples of its 23 studio narrators across ten languages. English and Spanish have multiple studio voices; German, French, Italian, Dutch, Polish, Portuguese, Swedish and Danish have one each. Hear the available voice rather than assuming each language offers every kind of voice.</p>
        <p>Availability in the app depends on your device, language settings and access. {FREE_TIER.full} Voice selection is an app-wide preference, so changing narrator affects subsequent listening until you change it again; it is not stored separately for each title.</p>
        <p>If you are still deciding whether synthetic narration suits long reading at all, <Link href="/blog/are-ai-voices-good-enough-for-books" className="text-loudBlue hover:underline">test it on a chapter</Link>. That question is separate from which voice category you normally choose.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try LoudReader on your own book" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
