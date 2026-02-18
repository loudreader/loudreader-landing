"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

const appStoreUrl = "#"; // Replace with actual App Store URL when available

function AppStoreButton({ onClick }: { onClick?: () => void }) {
  return (
    <motion.a
      href={appStoreUrl}
      onClick={(e) => {
        if (appStoreUrl === "#") {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="flex flex-col items-start -space-y-0.5">
        <span className="text-[10px] font-normal leading-tight">Download on the</span>
        <span className="text-xl font-semibold leading-tight tracking-tight">App Store</span>
      </div>
    </motion.a>
  );
}

const featureShowcase = [
  {
    headline: "Your library, always listening",
    description:
      "Import your own EPUBs and PDFs, or browse thousands of free classics. Every book becomes an audiobook — organized, beautiful, and always on your device.",
    image: "/iphone-library.png",
    alt: "LoudReader library view",
  },
  {
    headline: "Thousands of classics, zero cost",
    description:
      "The entire Project Gutenberg catalog at your fingertips. From Jane Austen to Jules Verne — download, listen, and keep forever. No subscription required.",
    image: "/iphone-gutenberg.png",
    alt: "Project Gutenberg browser",
  },
  {
    headline: "Follow every word",
    description:
      "Word-by-word highlighting keeps you engaged as you listen. Adjust speed, choose your voice, set a sleep timer — your reading experience, your rules.",
    image: "/iphone-reader.png",
    alt: "Reader with playback controls",
  },
];

const featureGrid = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12 20.5h.01" />
      </svg>
    ),
    title: "Offline AI voices",
    description: "Natural narration powered entirely on-device. No internet needed, ever.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
      </svg>
    ),
    title: "Word-by-word highlighting",
    description: "Follow along visually as each word is spoken. Stay focused, absorb more.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: "Import EPUB & PDF",
    description: "Bring your own books. Drop in any EPUB or PDF and start listening.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>
    ),
    title: "Sleep timer",
    description: "Drift off to your favorite book. Set a timer and let LoudReader do the rest.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
    title: "Notes & highlights",
    description: "Mark passages, add notes, and build your personal reading archive.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 14.25 2.25 12 10.5h8.25L10.5 21.75 12.75 13.5H3.75Z" />
      </svg>
    ),
    title: "Adjustable speed",
    description: "From 0.5x to 4x. Listen at the pace that works for you.",
  },
];

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const section1 = useInView();
  const section2 = useInView();
  const section3 = useInView();
  const gridSection = useInView();
  const ctaSection = useInView();
  const showcaseSections = [section1, section2, section3];

  return (
    <>
      <main className="flex flex-col items-center min-h-screen">
        {/* ── Hero Section ── */}
        <section className="relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden bg-white">
          {/* Radial glow behind logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-loudBlue/15 rounded-full blur-[120px] animate-glow pointer-events-none" />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <div className="animate-float mb-10">
              <Image
                src="/logo.png"
                alt="LoudReader Logo"
                width={140}
                height={140}
                className="mx-auto drop-shadow-xl"
                priority
              />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] text-gray-900 mb-6 animate-fade-in-up">
              Your books.
              <br />
              Your voice.
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto mb-12 animate-fade-in-up animation-delay-200 leading-relaxed">
              Turn any book into a natural-sounding audiobook with on-device AI.
              Completely offline. Completely private.
            </p>

            <div className="flex flex-col items-center gap-5 animate-fade-in-up animation-delay-400">
              <AppStoreButton onClick={() => setShowComingSoon(true)} />
              <AnimatePresence>
                {showComingSoon && (
                  <motion.p
                    className="text-gray-500 text-base font-medium"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Coming Soon!
                  </motion.p>
                )}
              </AnimatePresence>
              <p className="text-sm text-gray-400 tracking-wide">
                Free to try &middot; Completely offline &middot; Private by design
              </p>
            </div>
          </div>
        </section>

        {/* ── Feature Showcase ── alternating text + device mockup */}
        {featureShowcase.map((feature, index) => {
          const { ref, isVisible } = showcaseSections[index];
          const isReversed = index % 2 !== 0;
          return (
            <section
              key={index}
              className={`w-full py-24 md:py-32 px-6 ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
              }`}
            >
              <div
                ref={ref}
                className={`max-w-6xl mx-auto flex flex-col ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-12 md:gap-20 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {/* Device mockup */}
                <div className="flex-1 flex justify-center">
                  <div className="device-frame w-[260px] md:w-[300px]">
                    <Image
                      src={feature.image}
                      alt={feature.alt}
                      width={375}
                      height={812}
                      className="w-full h-auto cursor-pointer"
                      onClick={() => setSelectedImage(feature.image)}
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.05]">
                    {feature.headline}
                  </h2>
                  <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            </section>
          );
        })}

        {/* ── Feature Grid ── */}
        <section className="w-full py-24 md:py-32 px-6 bg-white">
          <div
            ref={gridSection.ref}
            className={`max-w-5xl mx-auto transition-all duration-700 ${
              gridSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center mb-16">
              Everything you need to listen
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {featureGrid.map((feature, index) => (
                <div
                  key={index}
                  className="group"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <div className="text-loudBlue mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[15px]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ── */}
        <section className="w-full py-24 md:py-32 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div
            ref={ctaSection.ref}
            className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
              ctaSection.isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6">
              Start listening
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-lg mx-auto">
              Your next favorite book is waiting. Import it, tap play, and let your device do the reading.
            </p>

            <div className="flex flex-col items-center gap-5">
              <AppStoreButton onClick={() => setShowComingSoon(true)} />
              <p className="text-sm text-gray-400 tracking-wide">
                Free to try &middot; Completely offline &middot; Private by design
              </p>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="w-full border-t border-gray-200 py-12 px-6 bg-white">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="LoudReader"
                width={32}
                height={32}
                className="opacity-80"
              />
              <span className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} LoudReader
              </span>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="/terms" className="hover:text-gray-900 transition-colors">
                Terms
              </a>
              <a href="/privacy" className="hover:text-gray-900 transition-colors">
                Privacy
              </a>
              <a href="/support" className="hover:text-gray-900 transition-colors">
                Support
              </a>
              <a href="mailto:hello@loudreader.com" className="hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* ── Lightbox Modal ── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 cursor-pointer"
            style={{
              background:
                "radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.7) 100%)",
              backdropFilter: "blur(12px)",
            }}
            onClick={() => setSelectedImage(null)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setSelectedImage(null);
            }}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.div
              className="relative max-w-md w-full"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-2 text-white/80 hover:text-white w-10 h-10 rounded-full flex items-center justify-center text-3xl transition-colors z-10"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                &times;
              </button>

              <Image
                src={selectedImage}
                alt="Screenshot preview"
                width={375}
                height={812}
                className="rounded-3xl mx-auto shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
