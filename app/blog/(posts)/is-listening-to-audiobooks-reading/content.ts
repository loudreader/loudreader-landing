// FACT PROVENANCE. Checked on 2026-07-14.
//
// Research citations (all verified via web search on 2026-07-14; links go to
// the actual publisher/PubMed pages and are reproduced in the page copy):
//   - Rogowsky, Calhoun & Tallal (2016), "Does Modality Matter? The Effects
//     of Reading, Listening, and Dual Modality on Comprehension", SAGE Open
//     6(3), DOI 10.1177/2158244016669550.
//     https://journals.sagepub.com/doi/10.1177/2158244016669550
//     91 adults randomly assigned to audiobook, e-text, or both (same
//     non-fiction material); no statistically significant comprehension
//     differences immediately or at a 2-week retention test.
//   - Clinton-Lisell (2022), "Listening Ears or Reading Eyes: A Meta-Analysis
//     of Reading and Listening Comprehension Comparisons", Review of
//     Educational Research 92(4).
//     https://journals.sagepub.com/doi/10.3102/00346543211060871
//     46 studies, 4,687 participants: overall no reliable difference
//     (g = 0.07, p = .23); small reading advantage when reading was
//     self-paced (g = 0.13) and for inferential questions (g = 0.36); no
//     difference for literal comprehension (g = −0.01).
//   - Milani, Lorusso & Molteni (2010), "The effects of audiobooks on the
//     psychosocial adjustment of pre-adolescents and adolescents with
//     dyslexia", Dyslexia. https://pubmed.ncbi.nlm.nih.gov/19725019/
//     Small controlled study (20 adolescents per group, 5 months): audiobook
//     group showed improved reading accuracy, reduced emotional-behavioural
//     problems, and greater school motivation vs. control.
//   - Chang & Millett (2015), "Improving reading rates and comprehension
//     through audio-assisted extensive reading for beginner learners",
//     System 52.
//     https://www.sciencedirect.com/science/article/abs/pii/S0346251X15000846
//     64 EFL secondary students, 26 weeks: both groups improved, but the
//     audio-assisted (reading-while-listening) group improved substantially
//     more in reading rate and comprehension than silent reading.
//
// App claims verified against the LoudReader app source (LoudReader_mac,
// main): word-by-word highlighting (ContinuousReaderController.swift,
// highlightWord(for:)); on-device voices (no cloud); free tier = unlimited
// listening (components/money/site.ts). Do NOT claim LoudReader itself has
// been studied. It has not. The research is about modalities, not this app.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    q: "Is listening to a book cheating?",
    a: "No. 'Cheating' implies the goal is the eye movement rather than the book. If the goal is the story, the argument, or the ideas, research comparing modalities finds listeners and readers come away with broadly similar comprehension. A 2022 meta-analysis of 46 studies found no reliable overall difference. Listening is a different route to the same destination.",
  },
  {
    q: "Do you remember as much from listening as from reading?",
    a: "For most material, roughly yes. A 2016 experiment (Rogowsky, Calhoun & Tallal) found no significant comprehension difference between adults who listened to a non-fiction chapter, read it, or did both, including on a retention test two weeks later. Print shows a small edge in some studies when the material demands inference and you control your own pace.",
  },
  {
    q: "Is listening while reading better than either alone?",
    a: "The evidence is honest but mixed: for skilled adult readers, the 2016 modality study found no comprehension advantage for doing both at once. For beginner language learners, a 26-week study (Chang & Millett, 2015) found reading while listening improved reading rates and comprehension substantially more than silent reading. The practical benefit most people notice is attention. A voice plus a moving highlight makes it much harder to drift.",
  },
  {
    q: "Does audio reading help struggling readers?",
    a: "There is real evidence it can. A small controlled study of adolescents with dyslexia (Milani, Lorusso & Molteni, 2010; 20 students per group over five months) found the audiobook group improved reading accuracy and showed fewer emotional and behavioural difficulties, with greater school motivation, compared to a control group using print alone. For struggling readers, audio removes the decoding bottleneck between them and the ideas.",
  },
  {
    q: "What does the research actually compare?",
    a: "Typically the same text is given to groups who read it, listen to it, or both, followed by the same comprehension test. That's why the results are credible: everything is held constant except the modality. The largest synthesis to date, Clinton-Lisell's 2022 meta-analysis covering 46 studies and 4,687 participants, found overall performance was not reliably different between reading and listening.",
  },
];
