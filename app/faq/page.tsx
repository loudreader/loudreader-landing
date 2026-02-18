"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "How do I add my own books?",
        a: "Share any EPUB or PDF to LoudReader from the Files app, Safari, or any app with a share button. You can also use the import button inside the app. Your book shows up in your library instantly.",
      },
      {
        q: "Where do the free books come from?",
        a: "LoudReader includes the entire Project Gutenberg catalog — over 70,000 public domain titles. Browse by genre, search by author, and download anything that catches your eye. It's all free and always will be.",
      },
      {
        q: "Do I need an account to use the app?",
        a: "No. LoudReader works right out of the box — no sign-up, no login, no profile. Just open the app and start reading.",
      },
    ],
  },
  {
    category: "Listening & Reading",
    questions: [
      {
        q: "How does the text-to-speech work?",
        a: "LoudReader runs its own AI voice model directly on your device to generate natural-sounding narration in real time. Nothing is sent to the cloud — it all happens locally on your iPhone or iPad.",
      },
      {
        q: "Can I read and listen at the same time?",
        a: "Yes! That's what LoudReader is built for. As the AI reads aloud, each word highlights in the text so your eyes and ears stay perfectly in sync. It's a great way to improve focus and retention.",
      },
      {
        q: "Which voices are available?",
        a: "Free users get the default voice at standard speed. Premium unlocks all available voices and adjustable playback speed from 0.3x to 3.0x. Currently English only — more languages are coming.",
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
        a: "Everything you need to get started: import your own books, browse the full Project Gutenberg library, listen with the default voice, and use word-by-word highlighting. Free, forever.",
      },
      {
        q: "What does Premium add?",
        a: "Premium unlocks all AI voices, adjustable playback speed (0.3x–3.0x), sleep timer, and notes & highlights. It's a subscription managed through Apple.",
      },
      {
        q: "How do I manage or cancel my subscription?",
        a: "Go to Settings → Your Name → Subscriptions on your device. Apple handles all billing — you can upgrade, downgrade, or cancel anytime.",
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
        a: "No. The only network requests are when you browse or download free books from Project Gutenberg. Everything else — reading, listening, notes — is fully offline.",
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base md:text-lg font-medium text-gray-900 pr-4 group-hover:text-loudBlue transition-colors">
          {q}
        </span>
        <span
          className={`text-gray-400 text-xl shrink-0 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 leading-relaxed pb-5 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Header */}
      <section className="text-center py-16 md:py-24 px-6 w-full bg-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="LoudReader Logo"
              width={64}
              height={64}
              className="mx-auto mb-6 hover:scale-105 transition-transform"
            />
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-gray-900">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Everything you need to know about LoudReader.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="w-full py-12 md:py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((category) => (
            <div key={category.category}>
              <h2 className="text-sm font-semibold text-loudBlue uppercase tracking-widest mb-4">
                {category.category}
              </h2>
              <div className="bg-gray-50/50 rounded-2xl px-6">
                {category.questions.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions? */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-500 text-lg">
            Still have questions?{" "}
            <a
              href="mailto:jeremi@loudreader.io"
              className="text-loudBlue hover:underline font-medium"
            >
              Get in touch
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="LoudReader" width={32} height={32} className="opacity-80" />
            <span className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} LoudReader
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <Link href="/releases" className="hover:text-gray-900 transition-colors">Release Notes</Link>
            <Link href="/support" className="hover:text-gray-900 transition-colors">Support</Link>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
