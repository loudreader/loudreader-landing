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
        “Robotic” can mean several different problems: flat delivery, odd pauses, wrong pronunciation, a language mismatch or distortion at an extreme playback rate. First identify which one you are hearing. A newer voice may improve the delivery, but it cannot reliably rescue broken source text or every unfamiliar name. Try the same short passage with clean punctuation, the correct language and a normal playback rate before comparing voices. This guide explains common causes and a practical way to isolate them; it does not claim that every modern neural voice sounds human or that cloud processing guarantees better speech.
      </p></Tldr>
      <ArticleIllustration variant="waveform" caption="Listen for the specific fault: delivery, pronunciation, source text or playback." />
      <QuestionSection question="Is it the voice, or the words it has been given?">
        <p>If the sound is consistently flat across clean passages, the voice’s delivery may simply not suit you. If it stumbles at particular abbreviations, dates or symbols, the problem may be how written text is turned into spoken words. For example, a year and a page number can require different readings of the same digits.</p>
        <p>This is a recognised engineering problem called <a href="https://research.google/pubs/transformer-based-models-of-text-normalization-for-speech-applications/" className="text-loudBlue hover:underline">text normalisation</a>. A voice can have a pleasant tone and still say a number incorrectly. Changing the narrator may help, but it is useful to inspect the text rather than treating every error as an acoustic problem.</p>
      </QuestionSection>
      <QuestionSection question="Why do neural voices sound different from older speech tools?">
        <p>Speech systems use different methods to turn text into sound. Some older systems rely on hand-designed speech rules or assembled recordings; neural systems learn aspects of speech from training examples. Research such as <a href="https://research.google/pubs/tacotron-towards-end-to-end-speech-synthesis/" className="text-loudBlue hover:underline">this neural speech synthesis paper</a> describes learned generation from text.</p>
        <p>That architectural difference does not provide a universal quality score. Older systems were not all incapable of modelling rhythm, and neural systems can still produce awkward pauses, pronunciation errors or inconsistent delivery. Choose based on the output you need, rather than assuming an engine label settles the listening experience.</p>
      </QuestionSection>
      <QuestionSection question="What should I check when a passage sounds wrong?">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Match the voice language to the text.</strong> A voice intended for another language can pronounce ordinary words unexpectedly. Selecting it does not translate the passage.</li>
          <li><strong>Inspect the extracted text.</strong> Look for broken words, missing punctuation, repeated headers or columns read in the wrong order. Scanned documents can contain OCR mistakes.</li>
          <li><strong>Return to a normal playback rate.</strong> If the sound is stretched or rushed, establish whether the problem remains before changing voice.</li>
          <li><strong>Compare a second voice on the same words.</strong> If both fail at the same abbreviation, the source or its interpretation may be the more useful thing to fix.</li>
          <li><strong>Try a cleaner edition or a short corrected copy.</strong> Where you can edit the source, add the intended punctuation or expand an ambiguous abbreviation. Keep the meaning intact.</li>
        </ol>
        <p>Do not spend time polishing punctuation if the document’s reading order is wrong. For tables, equations and page layouts, reading the original visually may be more useful than forcing them into one stream of speech.</p>
      </QuestionSection>
      <QuestionSection question="Does an offline voice have to sound more robotic?">
        <p>No quality ranking follows just from local versus cloud processing. Voices differ in the languages, material and controls they support. Compare representative passages. Our <Link href="/blog/are-offline-voices-as-good-as-cloud" className="text-loudBlue hover:underline">offline and cloud comparison</Link> separates that listening choice from connectivity and data handling.</p>
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> generates narration locally and offers <Link href="/voices" className="text-loudBlue hover:underline">browser voice samples</Link>. Its studio roster spans ten languages, with availability depending on your device. Use your own book to check difficult names and formatting before deciding whether a voice works for you.</p>
      </QuestionSection>
      <QuestionSection question="What if the voice still sounds wrong after those checks?">
        <p>Try another narrator or a recorded audiobook if one exists. A voice that is intelligible may still be a voice you do not enjoy hearing for hours. That preference is a valid reason to change it.</p>
        <p>For a longer test, listen to a chapter and note whether the delivery helps you follow the meaning. Our guide to <Link href="/blog/are-ai-voices-good-enough-for-books" className="text-loudBlue hover:underline">AI voices for whole books</Link> covers that decision beyond a short sample.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Try LoudReader on your own book" subline={FREE_TIER.full} />
    </ArticleLayout>
  );
}
