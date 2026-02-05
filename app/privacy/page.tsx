"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Last updated: February 2026
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment to Privacy</h2>
              <p>
                LoudReader is designed with privacy at its core. We believe your reading habits are personal, and we've built our app to respect that. <strong>We do not collect, store, or transmit any of your personal data.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data We Do NOT Collect</h2>
              <p>Unlike many apps, LoudReader does not collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal information (name, email, phone number)</li>
                <li>Device identifiers or advertising IDs</li>
                <li>Location data</li>
                <li>Usage analytics or behavioral data</li>
                <li>The content of books you import</li>
                <li>Your reading history or preferences</li>
                <li>Notes, highlights, or bookmarks you create</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How the App Works</h2>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">On-Device Processing</h3>
              <p>
                All text-to-speech processing happens entirely on your device using Apple's CoreML framework. Your books are never sent to any server. The AI voice synthesis runs locally on your iPhone or iPad's neural engine.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Local Storage</h3>
              <p>
                All your data — including imported books, notes, highlights, reading progress, and cached audio — is stored locally on your device. This data is not accessible to us or any third party.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Project Gutenberg</h3>
              <p>
                When you browse or download free books from Project Gutenberg, your device connects directly to Project Gutenberg's servers. We do not intermediate or log these requests. Please refer to Project Gutenberg's privacy policy for information about their practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Subscription and Payments</h2>
              <p>
                Subscription purchases are handled entirely by Apple through the App Store. We do not have access to your payment information, Apple ID, or billing details. Apple's privacy policy governs how they handle this information.
              </p>
              <p className="mt-4">
                We receive only anonymized transaction confirmations from Apple to verify your subscription status. These do not contain any personally identifiable information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Required Reason APIs</h2>
              <p>
                LoudReader uses certain iOS APIs that Apple requires us to disclose. These are used solely for the app's core functionality:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>UserDefaults:</strong> To save your app preferences (font size, voice selection, night mode, etc.) locally on your device.</li>
                <li><strong>File Timestamps:</strong> To manage your book library and audio cache efficiently.</li>
                <li><strong>Disk Space:</strong> To ensure there's enough storage for audio caching and to manage cache size limits.</li>
              </ul>
              <p className="mt-4">
                None of this information leaves your device or is shared with us or any third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No Third-Party Services</h2>
              <p>
                LoudReader does not integrate with any third-party analytics, advertising, or tracking services. We do not use:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Analytics or Firebase</li>
                <li>Facebook SDK</li>
                <li>Advertising networks</li>
                <li>Crash reporting services that collect user data</li>
                <li>Any other third-party SDKs that collect personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p>
                Since all your data stays on your device, it is protected by your device's built-in security features, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device passcode/Face ID/Touch ID</li>
                <li>iOS data encryption</li>
                <li>App sandboxing</li>
              </ul>
              <p className="mt-4">
                We recommend keeping your device's software up to date and using a strong passcode to protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p>
                LoudReader does not knowingly collect any information from children under 13 (or the applicable age in your jurisdiction). Since we don't collect any personal information from anyone, children can safely use the app.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p>
                Since we don't collect any personal data, there is no personal data to access, correct, or delete. All your data is stored locally on your device and can be removed by:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Deleting individual books or notes within the app</li>
                <li>Clearing the audio cache in Settings</li>
                <li>Uninstalling the app (which removes all app data)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">International Users</h2>
              <p>
                LoudReader is available worldwide. Since no data is collected or transferred, there are no cross-border data transfer concerns. Your data remains on your device regardless of your location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify users of any material changes by updating the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> jeremi@loudreader.io
              </p>
            </section>

            {/* Summary Box */}
            <section className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Summary</h2>
              <p className="text-gray-700">
                <strong>LoudReader respects your privacy.</strong> Your books, notes, and reading habits stay on your device. We don't collect data, we don't track you, and we don't sell anything to anyone. It's that simple.
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
