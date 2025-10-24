"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const screenshots = [
    {
      src: "/screen1.png",
      alt: "Your library, your way",
      caption: "Your entire library - organized, readable, and always with you.",
    },
    {
      src: "/screen2.png",
      alt: "Thousands of classics for free",
      caption: "Discover thousands of free classics ready to read or listen to.",
    },
    {
      src: "/screen3.png",
      alt: "Read and listen without a hassle",
      caption: "Switch seamlessly between reading and listening - even offline.",
    },
  ];

  return (
    <>
      <main className="flex flex-col items-center min-h-screen">
        {/* Hero Section with gradient background */}
        <motion.section
          className="text-center py-20 md:py-32 px-6 w-full bg-gradient-to-b from-softBeige via-white to-softBeige"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto">
            {/* Logo with subtle float animation */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut"
              }}
            >
              <Image
                src="/logo.png"
                alt="LoudReader Logo"
                width={120}
                height={120}
                className="mx-auto mb-8 drop-shadow-lg"
              />
            </motion.div>

            {/* Gradient text headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.05] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Read. Listen. Rest. Repeat.
            </h1>

            <p className="text-base md:text-xl text-gray-700 mb-4 max-w-2xl mx-auto leading-relaxed">
              Turn your books into stories that speak. All offline, all yours.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Read with your eyes or your ears, at your pace, in your space. Import your own titles or rediscover timeless classics.
            </p>

            {/* App Store style button */}
            <div className="flex flex-col items-center gap-4">
              <motion.button
                onClick={() => setShowComingSoon(true)}
                className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Apple logo */}
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>

                {/* Text content */}
                <div className="flex flex-col items-start -space-y-0.5">
                  <span className="text-[10px] font-normal leading-tight">Download on the</span>
                  <span className="text-xl font-semibold leading-tight tracking-tight">App Store</span>
                </div>
              </motion.button>

              <AnimatePresence>
                {showComingSoon && (
                  <motion.p
                    className="text-gray-600 text-lg font-medium"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Coming Soon!
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.section>

        {/* Features Section with enhanced cards */}
        <section className="w-full bg-white py-20 md:py-32 px-6 border-t border-gray-100">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-20 text-gray-900">
              Why LoudReader?
            </h2>

            <motion.div
              className="grid sm:grid-cols-3 gap-10"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Offline by design",
                  description: "No servers, no limits, no connection required. LoudReader uses your iPhone's own chip to read aloud - fast, private, and always ready, wherever you are.",
                  gradient: "from-blue-50 to-indigo-50"
                },
                {
                  title: "Your books, your rules",
                  description: "Import your own e-books or explore free classics. Your library stays truly yours - never locked, never shared, always on your device.",
                  gradient: "from-purple-50 to-pink-50"
                },
                {
                  title: "Made for calm",
                  description: "An elegant space that disappears while you read. Natural voices, sleep timer, light and dark modes - everything designed to help you relax into your story.",
                  gradient: "from-amber-50 to-orange-50"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${feature.gradient} rounded-3xl border border-gray-100 p-10 relative overflow-hidden group`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{
                    rotate: -1,
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <h3 className="font-bold mb-4 text-2xl text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Screenshots Section Header */}
        <motion.section
          className="w-full py-16 md:py-20 px-6 text-center border-t border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Inside the App
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Thoughtful details at every turn - from your library shelf to your bedtime story. Everything designed to feel natural, private, and effortless.
          </p>
        </motion.section>

        {/* Screenshot Panels - Alternating Layout with enhanced animations */}
        {screenshots.map((screenshot, index) => (
          <section
            key={index}
            className={`w-full py-16 md:py-24 px-6 border-t border-gray-100 ${
              index % 2 === 0 ? "bg-white" : "bg-softBeige"
            }`}
          >
            <motion.div
              className={`max-w-6xl mx-auto flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 md:gap-16`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex-1 flex justify-center">
                <motion.div
                  className="relative w-full max-w-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={400}
                    height={800}
                    className="rounded-3xl shadow-2xl cursor-pointer object-contain"
                    onClick={() => setSelectedImage(screenshot.src)}
                  />
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              </div>

              <div className={`flex-1 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"} text-center md:text-left`}>
                <p className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-8">
                  {screenshot.caption}
                </p>

                {/* App Store button on first screenshot (right-aligned) */}
                {index === 0 && (
                  <div className="flex flex-col items-center md:items-end gap-4 mt-8">
                    <motion.button
                      onClick={() => setShowComingSoon(true)}
                      className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Apple logo */}
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>

                      {/* Text content */}
                      <div className="flex flex-col items-start -space-y-0.5">
                        <span className="text-[10px] font-normal leading-tight">Download on the</span>
                        <span className="text-xl font-semibold leading-tight tracking-tight">App Store</span>
                      </div>
                    </motion.button>

                    <AnimatePresence>
                      {showComingSoon && (
                        <motion.p
                          className="text-gray-600 text-lg font-medium"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          Coming Soon!
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {/* App Store button on last screenshot (right-aligned) */}
                {index === 2 && (
                  <div className="flex flex-col items-center md:items-end gap-4 mt-8">
                    <motion.button
                      onClick={() => setShowComingSoon(true)}
                      className="inline-flex items-center gap-3 bg-black text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Apple logo */}
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>

                      {/* Text content */}
                      <div className="flex flex-col items-start -space-y-0.5">
                        <span className="text-[10px] font-normal leading-tight">Download on the</span>
                        <span className="text-xl font-semibold leading-tight tracking-tight">App Store</span>
                      </div>
                    </motion.button>

                    <AnimatePresence>
                      {showComingSoon && (
                        <motion.p
                          className="text-gray-600 text-lg font-medium"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          Coming Soon!
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </motion.div>
          </section>
        ))}

        {/* Enhanced Footer */}
        <footer className="w-full bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="LoudReader"
                  width={40}
                  height={40}
                  className="opacity-80"
                />
                <span className="text-gray-600 text-sm">
                  © {new Date().getFullYear()} LoudReader. Private. Simple. Yours.
                </span>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* Enhanced Modal with gradient blur and AnimatePresence */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 cursor-pointer"
            style={{
              background: "radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)",
              backdropFilter: "blur(8px)"
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
              className="relative max-w-4xl w-full"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button with rotate animation */}
              <motion.button
                className="absolute -top-12 md:-top-14 right-2 text-gray-900 bg-white/95 backdrop-blur-sm w-10 h-10 rounded-full flex items-center justify-center text-3xl hover:bg-white hover:scale-110 transition-all shadow-xl z-10"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                ×
              </motion.button>

              <Image
                src={selectedImage}
                alt="Screenshot preview"
                width={900}
                height={1800}
                className="rounded-3xl mx-auto shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
