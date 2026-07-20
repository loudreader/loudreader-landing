# Blog batch 2 — 60 topics (deduped vs the existing 40)

Ammo reserve. Written now, held (future publishedAt), released in tranches by the
weekly check-in / monthly loop only after GSC shows batch-1 indexing well.

Each row = ONE article, ONE query, ONE avatar. Checked to NOT cannibalize the 30
existing blog articles or the 10 money pages (`app/(seo)/*`). Before writing, the
agent must still confirm the query isn't already covered — if two rows are too
close, MERGE or DROP one (never two pages competing for one query).

Avatars: TSBL = Time-Starved Book Lover · NDS = Neurodivergent Student ·
WPE = Writer Proofreading by Ear · ELL = English Language Learner ·
PCP = Privacy-Conscious Professional · ACT = Active/On-the-go · SEN = Senior/low-vision.

Format: `slug | search query | avatar | angle (non-generic + honest note)`

## A. Format & source how-tos
1. listen-to-mobi-files | listen to mobi files | TSBL | import MOBI; DRM-Kindle honesty
2. listen-to-txt-files | text to speech for txt files | WPE | plain .txt read-aloud, simplest case
3. listen-to-google-docs-aloud | listen to google docs | WPE | export to PDF/EPUB then play; no live GDocs integration
4. listen-to-web-pages-aloud-mac | listen to web pages aloud mac | PCP | paste-link/reader flow; paywalled-page honesty
5. convert-kindle-books-to-audio | convert kindle books to audio | TSBL | DRM wall is real; works for DRM-free/your own EPUB
6. listen-to-substack-newsletters | listen to substack newsletters | TSBL | paste link; subscriber-only caveat
7. listen-to-rss-feeds-aloud | listen to rss feeds aloud | PCP | article queue workflow
8. listen-to-wikipedia-articles | listen to wikipedia articles | NDS | long-article listening
9. listen-to-markdown-files | text to speech markdown | WPE | devs/writers; .md read-aloud
10. listen-to-long-emails-aloud | listen to long emails | PCP | forward/paste; no mailbox integration
11. listen-to-medium-articles | listen to medium articles aloud | TSBL | paste-link flow
12. listen-to-scanned-pdf-books | listen to scanned pdf | SEN | OCR/text-layer honesty (image-only PDFs won't work)

## B. Platform & device
13. read-aloud-on-macbook | read aloud on macbook | PCP | native Mac app angle
14. read-books-aloud-on-ipad | read books aloud on ipad | TSBL | iPad-specific
15. macos-spoken-content-vs-app | macos spoken content vs app | PCP | honest compare to built-in Spoken Content (Option+Esc)
16. read-aloud-screen-off-iphone | listen with screen off iphone | ACT | background audio + lock-screen controls (verify Info.plist)
17. text-to-speech-airplane-mode | text to speech offline airplane | ACT | offline proof; the airplane test
18. best-text-to-speech-app-iphone | best text to speech app iphone | TSBL | roundup framing w/ honest field
19. best-read-aloud-app-mac | best read aloud app mac | PCP | roundup framing, Mac
20. text-to-speech-apple-silicon | text to speech apple silicon | PCP | on-device neural on M-series

## C. Use-case / lifestyle
21. listen-to-books-while-walking | listen to books while walking | ACT | hands-free, offline outdoors
22. listen-to-books-while-running | listen to books while running | ACT | no-data-needed on a run
23. listen-to-books-at-the-gym | listen to books at the gym | ACT | lift + listen
24. listen-to-books-while-cleaning | listen to books while cleaning | TSBL | chores + books
25. listen-to-books-while-cooking | listen to books while cooking | TSBL | hands-free kitchen
26. listen-to-books-on-your-commute | listen to books on commute | ACT | offline on the subway/plane
27. reduce-screen-time-with-audiobooks | reduce screen time reading | PCP | ears not eyes
28. listen-to-books-instead-of-scrolling | listen instead of scrolling | NDS | habit swap
29. read-more-books-by-listening | read more books by listening | TSBL | fit books into dead time
30. finish-the-books-you-start | finish books you start | NDS | momentum via listening

## D. Audience & accessibility
31. text-to-speech-for-students | text to speech for students | NDS | study workflow; textbooks/papers
32. text-to-speech-for-lawyers | text to speech for lawyers | PCP | document review by ear; confidential/on-device
33. text-to-speech-for-writers | text to speech for writers | WPE | hear your draft
34. text-to-speech-for-researchers | text to speech for researchers | NDS | papers/PDFs
35. text-to-speech-for-low-vision | text to speech for low vision | SEN | assistive, not a screen reader (honesty)
36. text-to-speech-for-eye-strain | text to speech for eye strain | PCP | rest your eyes
37. text-to-speech-for-seniors | text to speech for seniors | SEN | large-print alternative by ear
38. text-to-speech-for-esl-learners | text to speech for esl | ELL | listen + read to learn
39. read-aloud-for-visual-fatigue | read aloud visual fatigue | PCP | screen fatigue relief
40. audiobooks-for-busy-parents | audiobooks for busy parents | TSBL | read during chores/night feeds

## E. Comparisons & alternatives (new competitors — no overlap w/ money pages)
41. naturalreader-alternative | naturalreader alternative | PCP | offline + one-time vs their cloud/sub
42. speech-central-alternative | speech central alternative | PCP | honest; Speech Central is closest peer
43. voice-aloud-reader-alternative | voice aloud reader alternative | TSBL | @Voice on Apple; iOS/Mac native
44. pocket-read-aloud-alternative | pocket read aloud alternative | TSBL | Pocket TTS replacement for articles
45. audible-vs-text-to-speech | audible vs text to speech | TSBL | narrator vs TTS honesty; own your library
46. best-free-text-to-speech-app | best free text to speech app | TSBL | free-tier honesty
47. best-offline-text-to-speech-app | best offline text to speech app | PCP | offline field
48. natural-sounding-text-to-speech-apps | natural sounding tts apps | TSBL | quality framing (no fake claims)
49. speechify-vs-naturalreader | speechify vs naturalreader | PCP | competitor-vs-competitor, LoudReader as 3rd option
50. best-audiobook-app-for-classics | best app for public domain classics | TSBL | Gutenberg angle

## F. Question / informational
51. how-fast-should-you-listen-to-audiobooks | how fast should you listen to audiobooks | NDS | speed vs comprehension (cite real research)
52. is-text-to-speech-good-for-studying | is text to speech good for studying | NDS | evidence-based, honest
53. can-you-learn-from-audiobooks | can you learn from audiobooks | ELL | cite dual-coding/comprehension research
54. best-playback-speed-for-comprehension | best playback speed for comprehension | NDS | research-backed ranges
55. how-many-books-can-you-read-in-a-year | how many books can you read in a year | TSBL | listening-time math (labeled as math)
56. are-ai-voices-good-enough-for-books | are ai voices good enough for books | TSBL | honest; neural TTS state
57. are-offline-voices-as-good-as-cloud | offline vs cloud tts quality | PCP | honest tradeoff
58. how-to-build-a-reading-habit | how to build a reading habit | NDS | listening as the on-ramp
59. what-is-the-best-way-to-listen-to-ebooks | best way to listen to ebooks | TSBL | ebook-to-audio overview
60. do-audiobooks-help-you-read-more | do audiobooks help you read more | TSBL | behavior + honest framing
