"use client";

import Image from "next/image";
import Link from "next/link";

const releases = [
  {
    version: "1.0",
    date: "February 2026",
    title: "Hello, world",
    changes: [
      "Import and listen to your own EPUB and PDF files",
      "Browse and download free books from Project Gutenberg",
      "Natural AI narration powered entirely on-device",
      "Word-by-word text highlighting as you listen",
      "Sleep timer to fall asleep to your favorite book",
      "Notes and highlights to remember what matters",
      "Adjustable playback speed (0.3x – 3.0x) with Premium",
      "Multiple AI voices with Premium",
      "Works 100% offline — no internet required",
    ],
  },
];

export default function ReleasesPage() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      {/* Header */}
      <section className="text-center py-16 md:py-24 px-6 w-full bg-white">
        <div className="max-w-4xl mx-auto">
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="LoudReader Logo"
              width={64}
              height={64}
              className="mx-auto mb-6 hover:scale-105 transition-transform"
            />
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter text-gray-900">
            Release Notes
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            What&apos;s new in LoudReader.
          </p>
        </div>
      </section>

      {/* Releases */}
      <section className="w-full py-12 md:py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-16">
          {releases.map((release) => (
            <div key={release.version}>
              <div className="flex items-baseline gap-4 mb-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Version {release.version}
                </h2>
                <span className="text-sm text-gray-400">{release.date}</span>
              </div>
              {release.title && (
                <p className="text-loudBlue font-medium text-lg mb-6">
                  {release.title}
                </p>
              )}
              <ul className="space-y-3">
                {release.changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="text-loudBlue mt-1.5 shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="leading-relaxed">{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-gray-200 py-12 px-6 bg-white mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo2.png" alt="LoudReader" width={32} height={32} className="opacity-80" />
            <span className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} LoudReader
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <Link href="/faq" className="hover:text-gray-900 transition-colors">FAQ</Link>
            <Link href="/support" className="hover:text-gray-900 transition-colors">Support</Link>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">Privacy</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
