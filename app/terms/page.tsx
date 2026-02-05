"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TermsPage() {
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
            Terms of Use
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using LoudReader ("the App"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p>
                LoudReader is a text-to-speech reading application that allows you to import and listen to e-books (EPUB and PDF formats) using on-device speech synthesis. The App also provides access to free public domain books from Project Gutenberg.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Subscription Terms</h2>
              <p className="mb-4">
                LoudReader offers premium features through auto-renewable subscriptions:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>Monthly Subscription:</strong> $4.99 USD per month</li>
                <li><strong>Annual Subscription:</strong> $39.99 USD per year</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Free Trial</h3>
              <p>
                New subscribers are eligible for a 1-month free trial. The free trial provides full access to all premium features. After the trial period ends, your subscription will automatically renew at the regular subscription price unless cancelled.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Billing</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment will be charged to your Apple ID account at confirmation of purchase.</li>
                <li>Subscription automatically renews unless cancelled at least 24 hours before the end of the current period.</li>
                <li>Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
                <li>Any unused portion of a free trial period will be forfeited when you purchase a subscription.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Managing Your Subscription</h3>
              <p>
                You can manage and cancel your subscription at any time through your Apple ID account settings. Go to Settings &gt; [Your Name] &gt; Subscriptions on your iOS device.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Free Features</h2>
              <p>
                Without a subscription, you may use LoudReader with the following limitations:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>One book in your library</li>
                <li>Access to the first two chapters of each book</li>
                <li>One voice option</li>
                <li>Standard playback speed (1.0x)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Premium Features</h2>
              <p>
                With an active subscription, you gain access to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Unlimited books in your library</li>
                <li>Full access to all chapters</li>
                <li>All available voices</li>
                <li>Adjustable playback speed (0.3x to 3.0x)</li>
                <li>Notes and highlights</li>
                <li>Reading style customization</li>
                <li>Background audio precaching</li>
                <li>Share extension import</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. User Content</h2>
              <p>
                You are solely responsible for any content you import into the App. You represent and warrant that you have all necessary rights to use any e-books or documents you import, and that such use does not infringe upon the intellectual property rights of any third party.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p>
                The App, including its design, features, and content (excluding user-imported content and public domain works), is owned by LoudReader and is protected by copyright and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the App.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
              <p>
                THE APP IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE APP.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. We will notify users of any material changes by updating the "Last updated" date. Your continued use of the App after such changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of Poland, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact</h2>
              <p>
                If you have any questions about these Terms of Use, please contact us at:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> jeremi@loudreader.io
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
