// FACT PROVENANCE. Every claim verified on 2026-11-01 against:
//   - Audiobooks turning dead time into reading time: this is a behavioral
//     observation, not a fabricated statistic. The claim is that listening
//     fills time your eyes cannot use (commuting, chores, exercise), which
//     increases total book consumption. This is a logical framing, not a study.
//   - Listening vs reading as different cognitive experiences: honest framing.
//     Both are valid forms of consuming books, but they engage different
//     cognitive processes. Research in cognitive psychology has found that
//     listening comprehension is roughly similar to reading comprehension for
//     narrative and informational texts. The article frames this honestly
//     without claiming superiority for either format.
//   - LoudReader features from site.ts: free unlimited listening, no account,
//     EPUB/PDF import, 70,000+ Gutenberg, natural offline voices, Premium features.
//   - No fabricated study claims, testimonials, or statistics.
// Claims you may NOT make: that listening is objectively better than reading,
// specific percentage increases in books read, named study claims unless verified.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Do audiobooks actually help people read more books?",
    a: "Yes, in the sense that they turn dead time into reading time. The minutes you spend commuting, doing chores, exercising, and running errands are minutes your eyes cannot use for a book. Your ears, on the other hand, are usually free. Fill those minutes with books and your total book consumption goes up even if your dedicated reading time stays exactly the same. That is not a study finding, it is simple time arithmetic.",
  },
  {
    q: "Is listening to a book the same as reading it?",
    a: "For the story, yes. For the experience, no. Research has found that listening comprehension is roughly similar to reading comprehension for narrative and informational texts, so you understand the book either way. But reading print is a more active, self-paced experience: you pause, reread, and control the rhythm. Listening is more passive and linear. Both count as engaging with the book, just through different cognitive paths.",
  },
  {
    q: "Which format makes me a better reader?",
    a: "Neither. The question sets up a false competition. Reading print builds visual literacy and the skill of sustained focused attention on a page. Listening builds auditory comprehension and the ability to follow a narrative without visual anchors. Both are useful skills, and they reinforce each other. The person who listens to 20 books a year and reads 10 is engaging with more books than the person who reads 10 and feels guilty about not hitting 20.",
  },
  {
    q: "Does listening to audiobooks reduce my attention span?",
    a: "It depends on how you listen. If you use audiobooks as background noise while doing something mentally demanding, you are training divided attention, not focused listening. If you give the book most of your attention while doing something physical and routine (walking, driving, folding laundry), you are practicing sustained auditory focus, which is a real cognitive skill. The format is not the problem; how you use it is.",
  },
  {
    q: "Can I switch between reading and listening for the same book?",
    a: "Yes, and it is a great way to get the benefits of both. Read when you have dedicated sit-down time. Listen when you are on the move. LoudReader keeps them as the same book, the same file, the same saved position. You read a chapter with your eyes, then press play and the narration continues from where you are. No two-edition sync to manage, no lost place.",
  },
  {
    q: "What if I feel guilty about listening instead of reading?",
    a: "The guilt is a cultural reflex, not a reading metric. Books do not come with a preferred input method printed on the cover. If the ideas, the story, or the information got into your head, the book did its job. Listening is not cheating. It is a different way to the same destination, and for many people with limited sit-down time, it is the only way that fits.",
  },
];