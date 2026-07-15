// Single source of truth for FAQ content.
// Rendered server-side on /faq AND emitted as FAQPage JSON-LD. Keep both in sync by editing only this file.
export const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I add my own books?",
        a: "Share any EPUB or PDF to LoudReader from the Files app, Safari, or any app with a share button. You can also use the import button inside the app. Your book shows up in your library instantly.",
      },
      {
        q: "Where do the free books come from?",
        a: "LoudReader includes the entire Project Gutenberg catalog - over 70,000 public domain titles. Browse by genre, search by author, and download anything that catches your eye. It's all free and always will be.",
      },
      {
        q: "Do I need an account to use the app?",
        a: "No. LoudReader works right out of the box - no sign-up, no login, no profile. Just open the app and start reading.",
      },
    ],
  },
  {
    category: "Listening & Reading",
    questions: [
      {
        q: "How does the text-to-speech work?",
        a: "LoudReader uses an advanced AI voice model that runs directly on your device to generate natural-sounding narration in real time. Nothing is sent to the cloud - it all happens locally on your iPhone or iPad.",
      },
      {
        q: "Can I read and listen at the same time?",
        a: "Yes! That's what LoudReader is built for. As the AI reads aloud, each word highlights in the text so your eyes and ears stay perfectly in sync. It's a great way to improve focus and retention.",
      },
      {
        q: "Which voices are available?",
        a: "Every voice is free to try for your first 8 hours of listening. After that, free users keep the default voice, while Premium keeps every voice, plus adjustable playback speed from 0.3x to 3.0x. It's English only for now, with more languages coming.",
      },
      {
        q: "Does it work without internet?",
        a: "100%. All text-to-speech processing happens on your device in real time. You can listen on a plane, in the subway, or anywhere with zero connectivity.",
      },
    ],
  },
  {
    category: "Premium & Pricing",
    questions: [
      {
        q: "What do I get for free?",
        a: "A lot. Unlimited listening on every book cover to cover, an unlimited library, word-by-word highlighting, the full Project Gutenberg catalog, 100+ curated classics, and every voice free for your first 8 hours. No account, no time limit. Free, forever.",
      },
      {
        q: "What does Premium add?",
        a: "Premium keeps all AI voices after the free trial, and adds adjustable playback speed (0.3x to 3.0x), a sleep timer, ambient soundscapes, and notes & highlights. Available monthly, yearly, or as a one-time Lifetime purchase through Apple.",
      },
      {
        q: "How do I manage or cancel my subscription?",
        a: "Go to Settings → Your Name → Subscriptions on your device. Apple handles all billing - you can upgrade, downgrade, or cancel anytime.",
      },
      {
        q: "How do I request a refund?",
        a: "Refunds are handled by Apple. Visit reportaproblem.apple.com to request a refund for any purchase.",
      },
    ],
  },
  {
    category: "Privacy & Data",
    questions: [
      {
        q: "Is my data private?",
        a: "Completely. LoudReader doesn't collect any personal data. Your books, notes, highlights, and reading progress all stay on your device. Nothing is uploaded, tracked, or shared.",
      },
      {
        q: "Does the app phone home?",
        a: "No. The only network requests are when you browse or download free books from Project Gutenberg. Everything else - reading, listening, notes - is fully offline.",
      },
    ],
  },
];
