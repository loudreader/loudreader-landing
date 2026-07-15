import Image from "next/image";
import Link from "next/link";
import { SUPPORT_EMAIL } from "./site";

/**
 * Shared shell for money pages (server component).
 * Header logo + centered article column + the same footer as /faq.
 * Visible copy lives in the page itself. This only provides chrome.
 */
export default function MoneyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center min-h-screen bg-white">
      {/* Header */}
      <section className="w-full pt-12 md:pt-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <Link href="/">
            <Image
              src="/logo2.png"
              alt="LoudReader Logo"
              width={56}
              height={56}
              className="mx-auto hover:scale-105 transition-transform"
            />
          </Link>
        </div>
      </section>

      {/* Article column */}
      <article className="w-full max-w-3xl mx-auto px-6 py-10 md:py-14 flex flex-col gap-12">
        {children}
      </article>

      {/* Still have questions? */}
      <section className="w-full py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-500 text-lg">
            Still have questions?{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-loudBlue hover:underline font-medium"
            >
              Get in touch
            </a>
          </p>
        </div>
      </section>

      {/* Footer, matches /faq */}
      <footer className="w-full border-t border-gray-200 py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/logo2.png"
              alt="LoudReader"
              width={32}
              height={32}
              className="opacity-80"
            />
            <span className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} LoudReader
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <Link href="/listen" className="hover:text-gray-900 transition-colors">Free Classics</Link>
            <Link href="/faq" className="hover:text-gray-900 transition-colors">FAQ</Link>
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
