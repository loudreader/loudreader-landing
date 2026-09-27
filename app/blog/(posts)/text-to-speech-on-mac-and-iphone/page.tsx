import Link from "next/link";
import ArticleLayout from "@/components/blog/ArticleLayout";
import ArticleIllustration from "@/components/blog/ArticleIllustration";
import { articleMetadata } from "@/components/blog/articles";
import FaqSection from "@/components/money/FaqSection";
import QuestionSection from "@/components/money/QuestionSection";
import StoreCta from "@/components/money/StoreCta";
import Tldr from "@/components/money/Tldr";
import { REQUIREMENTS } from "@/components/money/site";
import { FAQS } from "./content";
import meta from "./meta.json";
export const metadata = articleMetadata(meta);

export default function Article() {
  return (
    <ArticleLayout meta={meta}>
      <Tldr>
        <p>LoudReader runs on iPhone and iPad, and its iPad build can also run on compatible Apple Silicon Macs. It is not two separate native builds. You can import the same supported book files on each device, but the app does not automatically carry your library or reading position between them. A purchase and a reading session are separate things: restoring eligible Premium access does not move your books. If you alternate between a laptop at a desk and a phone while out, plan a small manual handover. Keep the source file, note the chapter or a distinctive sentence, and find that place in the other device&apos;s copy.</p>
      </Tldr>
      <ArticleIllustration variant="devices" caption="Share a source file if you choose; reading progress stays separate." />
      <QuestionSection question="What stays the same across devices?">
        <p>The core workflow is to import a DRM-free EPUB or PDF, choose an available voice and listen. Local progress and word highlighting are part of the reading experience. You can review the <Link href="/voices" className="text-loudBlue hover:underline">voice catalogue</Link> before trying the app, but device capability determines which narrators appear on a particular device.</p>
        <p>The Mac uses Apple&apos;s iPad-app compatibility mode. Expect the iPad interface rather than assuming Mac-specific menus or shortcuts. Check the current App Store compatibility entry; the published requirements are {REQUIREMENTS}. Intel Macs cannot install this app build.</p>
      </QuestionSection>
      <QuestionSection question="What does not move automatically?">
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Imported books.</strong> A book added on your phone does not appear by itself in the Mac library.</li>
          <li><strong>Reading position.</strong> Each imported copy has its own saved progress.</li>
          <li><strong>Cloned voices.</strong> A locally created voice is not automatically copied to another device.</li>
        </ul>
        <p>There is no built-in account or cloud library-sync service. That is the current product behaviour, not a universal consequence of requiring no login: other applications can sync through a platform account without creating a separate app account.</p>
      </QuestionSection>
      <QuestionSection question="How do I move a reading session manually?">
        <ol className="list-decimal pl-6 space-y-2">
          <li>Keep the original EPUB or PDF somewhere you can access from both devices, if its sensitivity allows that.</li>
          <li>Import the file separately on each device.</li>
          <li>Before switching, note the chapter heading and a short phrase near where you stopped.</li>
          <li>Find that passage on the other device and listen briefly to check the handover.</li>
        </ol>
        <p>A shared file in iCloud Drive helps with the first step; it is not LoudReader library sync. Page numbers may differ with font size or document conversion, so a chapter and phrase can be easier to match than a screen number. Keep confidential source files only in storage your organisation permits.</p>
      </QuestionSection>
      <QuestionSection question="What about Premium and a custom voice?">
        <p>Use the same purchasing Apple Account and the app&apos;s Restore Purchases option to check eligible Premium access on another compatible device. Do not buy again merely because a new installation has not restored its entitlement. A purchase restores access; it does not overcome hardware restrictions or transfer local content.</p>
        <p>Voice Studio creates a narrator on the device where you record it. There is no automatic clone sync, and the clone files are excluded from system backup. If you want a custom narrator elsewhere, follow the supported recording workflow there with your own or permissioned speech. Do not assume a backup or a Premium purchase will copy it.</p>
      </QuestionSection>
      <QuestionSection question="Which device should I use for each session?">
        <p>A Mac may suit a desk where you can keep the source document nearby. An iPhone fits portable listening and supports screen-off playback. An iPad gives you another viewing size; it should not be assumed to have the same studio voice availability as either device.</p>
        <p>For the laptop interface, see <Link href="/blog/read-aloud-on-macbook" className="text-loudBlue hover:underline">reading aloud on MacBook</Link>. For portable playback, see <Link href="/blog/read-aloud-screen-off-iphone" className="text-loudBlue hover:underline">listening with the iPhone screen off</Link>. Test the setup you intend to use, including audio interruptions and whether your laptop goes to sleep.</p>
      </QuestionSection>
      <FaqSection faqs={FAQS} />
      <StoreCta headline="Check your reading setup on each device" subline="LoudReader runs on iPhone and iPad, and as an iPad app on compatible Apple Silicon Macs." />
    </ArticleLayout>
  );
}
