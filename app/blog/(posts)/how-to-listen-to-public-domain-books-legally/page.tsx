import Link from "next/link";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import ArticleLayout from "@/components/blog/ArticleLayout";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { FAQS } from "./content";
import meta from "./meta.json";

export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr><p>A classic being available online is not enough to establish how you may use it. Check the country whose rules apply, the specific text or translation, and the recording if you are downloading audio. Project Gutenberg follows US copyright rules; it also hosts some works under permission. Neither an old author nor a free download clears every modern edition worldwide. This guide explains the checks and points to official sources. It cannot determine the rights of an individual book for every reader or proposed use.</p></Tldr>
      <ArticleIllustration variant="book-to-audio" caption="Check the text, edition, country and recording separately." />
      <QuestionSection question="What does Project Gutenberg’s listing tell you?"><p>Start with the ebook’s own landing page and copyright notice. Gutenberg’s <a href="https://www.gutenberg.org/policy/permission.html" className="text-loudBlue hover:underline">permissions guidance</a> distinguishes its public-domain material from copyrighted items included under permission. Do not replace the item’s notice with the assumption that everything in the catalogue has identical terms.</p><p>The project’s <a href="https://www.gutenberg.org/help/copyright.html" className="text-loudBlue hover:underline">copyright how-to</a> describes its US clearance rules. That is useful evidence about the listed item, but it is not a worldwide licence for every edition with the same title.</p></QuestionSection>
      <QuestionSection question="Why does your country matter?"><p>Copyright duration and exceptions differ by jurisdiction. For example, the UK’s <a href="https://www.gov.uk/copyright/how-long-copyright-lasts" className="text-loudBlue hover:underline">official summary of copyright duration</a> describes terms by type of work; a US publication-date shortcut does not resolve a UK question.</p><p>Use the guidance of the relevant national copyright office for your situation. If the status is unclear and you need certainty, ask a qualified adviser rather than treating a blog or download button as clearance. Public posting or commercial reuse deserves its own check.</p></QuestionSection>
      <QuestionSection question="What should you check about the edition?"><ul className="list-disc pl-6 space-y-2"><li>The exact text: original language, abridgement, adaptation or later revision.</li><li>The translator, if any, and the edition’s publication details.</li><li>Added introductions, annotations, illustrations or other new material.</li><li>The notice supplied with the download, including any licence conditions.</li></ul><p>The <a href="https://www.gov.uk/government/publications/copyright-notice-duration-of-copyright-term/copyright-notice-duration-of-copyright-term" className="text-loudBlue hover:underline">UK Intellectual Property Office’s detailed duration notice</a> explains that a translation can have its own copyright without reviving copyright in the underlying original. A nineteenth-century novel and a recent translation are therefore not interchangeable for this check.</p></QuestionSection>
      <QuestionSection question="Does a recording have the same status as its text?"><p>No. A modern recording is a separate object to examine. The underlying words being public domain does not by itself let you copy a particular commercial performance. Read the recording provider’s terms and credits.</p><p>LibriVox explains its own approach in <a href="https://wiki.librivox.org/index.php/Copyright_and_Public_Domain" className="text-loudBlue hover:underline">Copyright and Public Domain</a>. Do not generalise that policy to an unrelated recording, or treat its US basis as a decision about another country.</p></QuestionSection>
      <QuestionSection question="How does personal text-to-speech listening fit in?"><p>A reader such as <Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> generates narration from an accessible file on your device. It does not determine copyright status or make an unauthorised source authorised. Choose a file you are entitled to use and distinguish private listening from making a recording available to others.</p><p>The <Link href="/listen" className="text-loudBlue hover:underline">classics shelf</Link> can help you find a title; the source edition and its rights still need checking. For publishing or selling audio, also consider the recording, voice and service terms relevant to that project. This article makes no blanket clearance claim for those uses.</p></QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Explore the classics shelf" subline="Find a title, then check its source edition and applicable rights." />
    </ArticleLayout>
  );
}
