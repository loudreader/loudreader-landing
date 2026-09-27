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
      <Tldr><p>Use text to speech at a defined stage of revision: first to hear the structure of a section, later to examine dialogue and sentence rhythm. Keep a dated listening copy and write changes into the original manuscript. A reader can make a draft feel unfamiliar enough to reconsider, but it does not reliably detect errors or replace an editor. Choose one question for each pass, then compare what you hear with what is actually written.</p></Tldr>
      <ArticleIllustration variant="waveform" caption="Give each listening pass a specific revision question." />
      <QuestionSection question="What should the first pass focus on?"><p>For fiction, listen to a scene without editing every sentence. Note where you lose track of who wants what, where a transition seems abrupt or where dialogue repeats information. For nonfiction, listen for the sequence of claims, examples and explanations.</p><p>Keep observations separate from solutions. “I cannot tell why this paragraph is here” is a useful note even before you know whether to move or remove it. Do not let a pleasing voice substitute for evaluating the writing.</p></QuestionSection>
      <QuestionSection question="How can you use another pass for dialogue?"><p>Choose a scene with several speakers and check whether tags and context make the exchange clear. If a line sounds stiff, read it yourself too: a synthetic voice’s interpretation may be responsible. Character names and invented vocabulary deserve separate pronunciation checks.</p><p>LoudReader is a reading app, not a cast-direction tool or manuscript evaluator. It does not certify that dialogue is believable or generate structural editorial feedback. Keep those judgements with you and your readers.</p></QuestionSection>
      <QuestionSection question="How should you prepare a full manuscript?"><ol className="list-decimal pl-6 space-y-2"><li>Export the current version as EPUB if your writing tool offers it, or as a PDF. Do not assume every editor exports EPUB.</li><li>Use a versioned filename and import the supported file.</li><li>Check chapter order and a passage with special formatting.</li><li>Listen in sections you can review attentively, with a notebook or notes tool nearby.</li><li>Make edits in the authoritative draft. Re-export before checking revised passages.</li></ol><p>The detailed <Link href="/blog/proofread-by-listening" className="text-loudBlue hover:underline">proofreading workflow</Link> explains why the imported listening copy should not be mistaken for a live view of your editor.</p></QuestionSection>
      <QuestionSection question="What voice, pace and session length should you use?"><p>Start with a voice you can follow at normal speed. Adjust based on this passage, not a claimed universal optimum. A dialogue check and a slow detail check may need different approaches. Stop for a break when you notice that you are no longer evaluating the words.</p><p>In <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link>, notes, highlights and ordinary word-following are free. Playback speed control is Premium. LoudReader runs on iPhone and iPad; its iPad build also runs on compatible Apple Silicon Macs.</p><p>{FREE_TIER.full}</p></QuestionSection>
      <QuestionSection question="How should you handle unpublished work?"><p>Speech is generated on device. That does not mean the whole app is network-free: LoudReader uses Sentry crash diagnostics and TelemetryDeck analytics. File transfers, device backups and any services you use before importing are separate parts of the workflow. In release 1.12, usage analytics is enabled by default without an in-app off switch. An offline listening check is not a complete privacy assessment.</p><p>Check any publisher, client or workplace agreement before placing restricted material in another app. For ordinary personal drafts, keep track of exported copies so you do not edit or circulate an obsolete version.</p></QuestionSection>
      <QuestionSection question="What does a human or visual edit still contribute?"><p>Return to the written page for spelling, homophones, punctuation, layout and citations. A reader or editor can discuss the argument, structure and effect on an audience; a TTS voice provides another presentation of the text, not that discussion.</p><p>For a short academic submission, <Link href="/blog/read-my-essay-out-loud" className="text-loudBlue hover:underline">the essay guide</Link> narrows the listening pass to argument and final submission checks. Across all formats, use the tool to support a revision decision rather than treating playback as proof of completion.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Hear a version of your draft" subline="Keep the source authoritative and re-export after revising." />
    </ArticleLayout>
  );
}
