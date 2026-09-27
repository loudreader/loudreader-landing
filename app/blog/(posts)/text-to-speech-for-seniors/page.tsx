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
      <Tldr>
        <p>Text-to-speech is an option for anyone who would rather listen to a book or document than keep looking at the page. For an older reader, the useful question is whether the whole workflow is comfortable: finding a book, starting it, adjusting volume, pausing and returning later. Begin on a familiar device with a short, familiar passage. If you are helping someone else, let them choose the voice and practise the controls themselves. LoudReader can read supported DRM-free EPUBs and PDFs, but it is not a system-wide screen reader, and it does not automatically sync libraries or reading positions between devices.</p>
      </Tldr>
      <ArticleIllustration variant="devices" caption="Choose a familiar device and practise the controls before starting a long book." />
      <QuestionSection question="Should you choose audio, larger text or both?">
        <p>That is a preference and access question, not a choice everyone must make based on age. Audio allows listening without continuously viewing a page. Larger text, suitable lighting or an accessible display may be preferable when someone wants to read visually. You can use different formats for different tasks.</p>
        <p>The <a href="https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/presbyopia" className="text-loudBlue hover:underline">National Eye Institute explains that age-related changes in near focus can make close reading harder</a>. An audio app does not replace an eye examination or prescribed vision support. It is simply another way to access the material.</p>
        <p>Listen to a sample using the speaker or headphones the reader will actually use. The best-sounding demo on someone else&apos;s equipment may not be the clearest choice at home.</p>
      </QuestionSection>
      <QuestionSection question="How do you set up the first book?">
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Choose the device together.</strong> A familiar phone or tablet may be easier than introducing a new device for this one task.</li>
          <li><strong>Start with one book.</strong> Import a supported DRM-free EPUB or PDF from Files. Check that the words appear in the right order before a long listening session.</li>
          <li><strong>Try a short passage.</strong> Let the reader choose a voice they can follow and set a comfortable volume.</li>
          <li><strong>Practise pause and resume.</strong> Try the on-screen controls and, on iPhone or iPad, the lock-screen controls.</li>
          <li><strong>Return to the book.</strong> Leave the app and open it again so the reader can see how to continue without someone taking over.</li>
          <li><strong>Keep a simple reminder if useful.</strong> A short note naming the app and the few steps can be more useful than explaining every feature at once.</li>
        </ol>
        <p>Do not assume the workflow is accessible just because it sounds simple in a description. Try it with the person who will use it, including any assistive technology they rely on.</p>
      </QuestionSection>
      <QuestionSection question="Where can the reading material come from?">
        <p>Use files that can be opened in another reader: DRM-free EPUBs, PDFs and personal documents exported in a supported format. A purchase in an ebook platform does not necessarily give you an importable file. LoudReader does not remove copy protection.</p>
        <p>The app also offers a Project Gutenberg catalogue for browsing and downloading classics. <a href="https://www.gutenberg.org/policy/permission.html" className="text-loudBlue hover:underline">Copyright status can depend on where you live</a>, and you should check the edition; the catalogue is not a promise that every title is free to use everywhere. You need a connection to download new material.</p>
        <p>For scanned PDFs, the app can attempt on-device text recognition. Check the result for missing words and ordering errors. The <Link href="/turn-any-book-into-an-audiobook" className="text-loudBlue hover:underline">book-import guide</Link> explains the general file workflow.</p>
      </QuestionSection>
      <QuestionSection question="What stays free, and which controls cost extra?">
        <p><Link href="/" className="text-loudBlue hover:underline">LoudReader</Link> does not require a LoudReader account to import and listen. {FREE_TIER.full} The available voices depend on the device, so test the options on the reader&apos;s own hardware.</p>
        <p>Speed control from 0.3x to 3.0x, the sleep timer, soundscapes and continued full voice access require Premium. The initial voice allowance is not a trial of every paid control. If slower playback is essential, establish its cost before setting up a routine around it. Check the in-app storefront price rather than relying on a price quoted for another country.</p>
        <p>Basic playback can continue while an iPhone or iPad is locked. A sleep timer is optional; it stops after the chosen interval and cannot know whether the listener has fallen asleep.</p>
      </QuestionSection>
      <QuestionSection question="Can you move between a phone, iPad and Mac?">
        <p>The app runs on iPhone and iPad, and compatible Apple Silicon Macs can run the iPad build. There is no separate native Mac app. More importantly for a simple routine, books and reading positions do not automatically sync between devices.</p>
        <p>For a first setup, use one main device. If you add another later, import the book there separately and find the place you want to continue. Importing a file from iCloud Drive is different from having the reading app synchronise its library.</p>
        <p>For offline use, prepare the book and voice first and test the exact setup without a connection. Narration and text recognition run locally; the app also has diagnostics and analytics, so offline speech should not be described as an absence of all network activity.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Start with one familiar book" subline="Try the voice, volume and pause controls on the device you want to use every day." />
    </ArticleLayout>
  );
}
