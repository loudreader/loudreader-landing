"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SupportPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Header */}
      <motion.section
        className="text-center py-16 md:py-24 px-6 w-full bg-gradient-to-b from-softBeige via-white to-softBeige"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="LoudReader Logo"
              width={80}
              height={80}
              className="mx-auto mb-6 drop-shadow-lg hover:scale-105 transition-transform"
            />
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">
            Support
          </h1>
          <p className="text-gray-600 text-lg">
            We&apos;re here to help you get the most out of LoudReader.
          </p>
        </div>
      </motion.section>

      {/* Content */}
      <section className="w-full bg-white py-16 md:py-20 px-6 border-t border-gray-100">
        <motion.div
          className="max-w-3xl mx-auto prose prose-gray prose-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-8 text-gray-700 leading-relaxed">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>
                Have a question, feedback, or running into an issue? Reach out to us and we&apos;ll get back to you as soon as possible.
              </p>
              <p className="mt-4">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:jeremi@loudreader.io"
                  className="text-blue-600 hover:text-blue-800 underline transition-colors"
                >
                  jeremi@loudreader.io
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I import my own books?</h3>
                  <p>
                    You can import EPUB files directly from the Files app, Safari downloads, or any app that supports sharing. Just tap the share button and select LoudReader, or use the import button within the app.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Which voices are available?</h3>
                  <p>
                    LoudReader offers a male and a female voice. The female voice is available on the free plan, while both voices are available with a subscription. Currently only English is supported, but we&apos;re working on adding more languages.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Does the app work offline?</h3>
                  <p>
                    Yes! LoudReader works entirely offline. All text-to-speech processing happens on your device in real time — no internet connection is needed to read or listen to your books.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I manage my subscription?</h3>
                  <p>
                    Subscriptions are managed through Apple. Go to Settings &gt; Your Name &gt; Subscriptions on your device to view, change, or cancel your subscription.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I request a refund?</h3>
                  <p>
                    Refunds are handled by Apple. Visit{" "}
                    <a
                      href="https://reportaproblem.apple.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 underline transition-colors"
                    >
                      reportaproblem.apple.com
                    </a>
                    {" "}to request a refund for any purchase.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data private?</h3>
                  <p>
                    Absolutely. LoudReader does not collect any personal data. All your books, notes, and reading progress stay on your device. Read our full{" "}
                    <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline transition-colors">
                      Privacy Policy
                    </Link>
                    {" "}for details.
                  </p>
                </div>
              </div>
            </section>

            {/* Contact Box */}
            <section className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Still need help?</h2>
              <p className="text-gray-700">
                Drop us a line at{" "}
                <a
                  href="mailto:jeremi@loudreader.io"
                  className="text-blue-600 hover:text-blue-800 underline font-semibold transition-colors"
                >
                  jeremi@loudreader.io
                </a>
                {" "}and we&apos;ll do our best to respond within 24 hours.
              </p>
            </section>

          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900 transition-colors">
                Home
              </Link>
              <Link href="/privacy" className="hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-900 transition-colors">
                Terms of Use
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="LoudReader"
                width={32}
                height={32}
                className="opacity-80"
              />
              <span className="text-gray-600 text-sm">
                © {new Date().getFullYear()} LoudReader. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
