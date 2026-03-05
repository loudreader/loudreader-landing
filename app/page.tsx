"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";

/* ─── Touch detection ─── */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);
  return isMobile;
}

/* ─── Scroll reveal ─── */
function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const appStoreUrl = "https://apps.apple.com/app/loudreader/id6758149478";

/* ─── App Store Button ─── */
function AppStoreButton({ dark = false }: { dark?: boolean }) {
  return (
    <motion.a
      href={appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 px-7 py-3.5 rounded-[14px] transition-all duration-200 ${
        dark
          ? "bg-white text-black shadow-lg shadow-white/10"
          : "bg-black text-white shadow-lg shadow-black/20"
      }`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
      <div className="flex flex-col items-start -space-y-0.5">
        <span className="text-[10px] font-normal leading-tight opacity-80">Download on the</span>
        <span className="text-lg font-semibold leading-tight tracking-tight">App Store</span>
      </div>
    </motion.a>
  );
}

/* ─── Interactive Phone with tilt + optional slow crossfade hover ─── */
function Phone({
  src,
  hoverSrc,
  alt,
  className = "",
  light = false,
  size = "md",
  onClick,
  delay = 0,
  tilt = true,
  onHoverChange,
}: {
  src: string;
  hoverSrc?: string;
  alt: string;
  className?: string;
  light?: boolean;
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  delay?: number;
  tilt?: boolean;
  onHoverChange?: (hovered: boolean) => void;
}) {
  const sizes = {
    sm: "w-[180px] md:w-[200px]",
    md: "w-[240px] md:w-[270px]",
    lg: "w-[270px] md:w-[300px]",
  };

  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 30 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!tilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [tilt, mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const [hovered, setHovered] = useState(false);
  const isMobile = useIsMobile();

  return (
    <motion.div
      ref={ref}
      className={`device-frame ${light && !hovered ? "device-frame-light" : ""} ${sizes[size]} ${className}`}
      style={tilt ? {
        rotateX, rotateY, transformPerspective: 800,
        transition: "background 0.8s ease, box-shadow 0.8s ease",
      } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { handleMouseLeave(); setHovered(false); onHoverChange?.(false); }}
      onMouseEnter={() => { setHovered(true); onHoverChange?.(true); }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="relative overflow-hidden rounded-[36px]">
        {/* Base image */}
        <Image
          src={src}
          alt={alt}
          width={393}
          height={852}
          className={`w-full h-auto block ${!isMobile && onClick ? "cursor-pointer" : ""}`}
          onClick={() => { if (!isMobile) onClick?.(); }}
          quality={90}
        />
        {/* Hover image crossfade */}
        {hoverSrc && (
          <Image
            src={hoverSrc}
            alt={alt}
            width={393}
            height={852}
            className={`w-full h-auto absolute inset-0 block ${!isMobile && onClick ? "cursor-pointer" : ""}`}
            style={{
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
            onClick={() => onClick?.()}
            quality={90}
          />
        )}
        {/* Subtle surface glow on hover */}
        {tilt && (
          <div
            className="absolute inset-0 pointer-events-none rounded-[36px]"
            style={{
              background: "radial-gradient(circle at 50% 40%, rgba(255,255,255,0.06), transparent 70%)",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
        )}
      </div>
    </motion.div>
  );
}

/* ─── Feature data for bento grid ─── */
const featureItems = [
  { icon: "🌙", label: "Sleep timer", desc: "Drift off. It stops when you do." },
  { icon: "🌧", label: "Soundscapes", desc: "Rain, fireplace, ocean waves." },
  { icon: "⚡", label: "0.3x to 3.0x", desc: "Blaze through or savor every word." },
  { icon: "🌑", label: "Night mode", desc: "Easy on the eyes after dark." },
  { icon: "✏️", label: "Notes", desc: "Highlight passages. Save thoughts." },
  { icon: "📖", label: "Chapters", desc: "Jump to any chapter instantly." },
  { icon: "🎧", label: "Background", desc: "Keep listening with the screen off." },
  { icon: "📤", label: "Share", desc: "Send from Safari, Mail, anywhere." },
];

/* ═══════════════════════════════════════════════ */

export default function Home() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [heroDimmed, setHeroDimmed] = useState(false);

  const s1 = useReveal();
  const s2 = useReveal();
  const s3 = useReveal();
  const s4 = useReveal();
  const s5 = useReveal();
  const s6 = useReveal();
  const s7 = useReveal();
  const s8 = useReveal();

  const reveal = (r: { ref: React.RefObject<HTMLDivElement | null>; visible: boolean }) =>
    `section-reveal ${r.visible ? "visible" : "not-visible"}`;

  return (
    <>
      <main className="flex flex-col items-center min-h-screen overflow-x-hidden">

        {/* ══════════ HERO ══════════ */}
        <section className="relative w-full min-h-screen flex items-center justify-center px-6 overflow-hidden">
          {/* Animated background: beige -> dark on hover */}
          <div
            className="absolute inset-0 transition-colors duration-[1200ms] ease-in-out"
            style={{ backgroundColor: heroDimmed ? "#1d1d1f" : "#f7f5f2" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-loudBlue/8 rounded-full blur-[140px] animate-glow pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-20">
            <div className="flex-1 text-center lg:text-left">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <Image src="/logo2.png" alt="LoudReader" width={56} height={56} className="mx-auto lg:mx-0 mb-8 drop-shadow-md" priority />
              </motion.div>
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[0.95] mb-6 transition-colors duration-[1200ms]"
                style={{ color: heroDimmed ? "#ffffff" : "#111827" }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                Every book is<br />an audiobook.
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-10 leading-relaxed transition-colors duration-[1200ms]"
                style={{ color: heroDimmed ? "rgba(255,255,255,0.5)" : "#9ca3af" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                Beautiful AI voices read your books aloud, with every word highlighted in sync. Completely on-device.
              </motion.p>
              <motion.div
                className="flex flex-col items-center lg:items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <AppStoreButton dark={heroDimmed} />
                <p
                  className="text-[13px] tracking-wide transition-colors duration-[1200ms]"
                  style={{ color: heroDimmed ? "rgba(255,255,255,0.3)" : "#9ca3af" }}
                >
                  Your first book is on us &middot; Offline &middot; Private
                </p>
              </motion.div>
            </div>

            {/* Hero phone: hover swaps to dark mode + dims entire section */}
            <div className="flex-1 flex justify-center items-end gap-4">
              <Phone
                src="/screen-reader-light.png"
                hoverSrc="/screen-reader-dark-hero.png"
                alt="Reader with playback"
                light
                delay={0.3}
                onHoverChange={setHeroDimmed}
                onClick={() => setLightbox("/screen-reader-light.png")}
              />
              <Phone
                src="/screen-library-light.png"
                alt="Book library"
                size="sm"
                light
                className="opacity-70 translate-y-8 hidden sm:block"
                delay={0.5}
                tilt={false}
                onClick={() => setLightbox("/screen-library-light.png")}
              />
            </div>
          </div>
        </section>

        {/* ══════════ READER ══════════ */}
        <section className="dark-section w-full bg-[#1d1d1f] overflow-hidden">
          <div ref={s1.ref} className={`${reveal(s1)} max-w-6xl mx-auto px-6 py-24 md:py-36`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.05]">
                Read along as you listen.
              </h2>
              <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
                Every sentence lights up as it&apos;s spoken. Your eyes and ears stay perfectly in sync.
              </p>
            </div>
            <div className="flex justify-center items-center gap-4 md:gap-6">
              <Phone src="/screen-reader-huckfinn.png" alt="Reading Huck Finn" size="sm" className="hidden md:block opacity-50 -rotate-3" delay={0.1} tilt={false} onClick={() => setLightbox("/screen-reader-huckfinn.png")} />
              <Phone src="/screen-reader-dark.png" alt="Dark mode reader" delay={0} onClick={() => setLightbox("/screen-reader-dark.png")} />
              <Phone src="/screen-reader-quote.png" alt="Reader with quote" size="sm" className="hidden md:block opacity-50 rotate-3" delay={0.1} tilt={false} onClick={() => setLightbox("/screen-reader-quote.png")} />
            </div>
          </div>
        </section>

        {/* ══════════ PRIVACY ══════════ */}
        <section className="w-full bg-white overflow-hidden">
          <div ref={s7.ref} className={`${reveal(s7)} max-w-3xl mx-auto px-6 py-24 md:py-32 text-center`}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-900/5 mb-8">
              <svg className="w-8 h-8 text-gray-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-[1.05]">
              Nothing leaves<br />your phone.
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto mb-4">
              Work memos. Legal documents. Personal letters. Whatever you&apos;re reading, it stays on your device. Every voice, every word of processing happens locally.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed max-w-xl mx-auto font-medium">
              No cloud. No accounts. No servers. Just you and your books.
            </p>
          </div>
        </section>

        {/* ══════════ VOICES ══════════ */}
        <section className="w-full bg-[#f7f5f2] overflow-hidden">
          <div ref={s2.ref} className={`${reveal(s2)} max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col lg:flex-row items-center gap-12 lg:gap-20`}>
            <div className="flex-1 flex justify-center">
              <Phone
                src="/screen-voices-premium.png"
                alt="Voice selection"
                delay={0}
                onClick={() => setLightbox("/screen-voices-premium.png")}
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-5 leading-[1.05]">
                Voices worth<br />listening to.
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed max-w-md mx-auto lg:mx-0 mb-3">
                Eight distinct AI voices. All running entirely on your device.
              </p>
              <p className="text-sm text-gray-500 max-w-md mx-auto lg:mx-0">
                No internet. No data leaves your phone.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════ LIBRARY ══════════ */}
        <section className="dark-section w-full bg-[#1d1d1f] overflow-hidden">
          <div ref={s3.ref} className={`${reveal(s3)} max-w-6xl mx-auto px-6 py-24 md:py-36 flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20`}>
            <div className="flex-1 flex justify-center">
              <Phone
                src="/screen-library-dark.png"
                alt="Dark library"
                delay={0}
                onClick={() => setLightbox("/screen-library-dark.png")}
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.05]">
                Your library,<br />always with you.
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-md mx-auto lg:mx-0">
                Import any EPUB or PDF. Or browse 70,000+ free classics from Project Gutenberg.
              </p>
            </div>
          </div>
        </section>

        {/* ══════════ CUSTOMIZE ══════════ */}
        <section className="w-full bg-[#f7f5f2] overflow-hidden">
          <div ref={s4.ref} className={`${reveal(s4)} max-w-6xl mx-auto px-6 py-24 md:py-36`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-5 leading-[1.05]">
                Make it yours.
              </h2>
              <p className="text-lg text-gray-400 max-w-lg mx-auto leading-relaxed">
                Speed, font, text size, night mode. Every detail tuned to how you read.
              </p>
            </div>
            <div className="flex justify-center items-center gap-4 md:gap-6">
              <Phone src="/screen-settings-premium.png" alt="Premium settings" size="sm" className="hidden md:block opacity-60 -rotate-1" delay={0.1} tilt={false} onClick={() => setLightbox("/screen-settings-premium.png")} />
              <Phone src="/screen-reader-soundscape.png" alt="Reader with soundscape" delay={0} onClick={() => setLightbox("/screen-reader-soundscape.png")} />
              <Phone src="/screen-reading-style.png" alt="Reading style" size="sm" light className="hidden md:block opacity-60 rotate-1" delay={0.1} tilt={false} onClick={() => setLightbox("/screen-reading-style.png")} />
            </div>
          </div>
        </section>

        {/* ══════════ DISCOVER ══════════ */}
        <section className="dark-section w-full bg-[#1d1d1f] overflow-hidden">
          <div ref={s5.ref} className={`${reveal(s5)} max-w-6xl mx-auto px-6 py-24 md:py-36`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5 leading-[1.05]">
                Something new, every day.
              </h2>
              <p className="text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
                Daily news. Wikipedia&apos;s article of the day. Over 100 free curated classics through reading campaigns. Save articles from the web.
              </p>
            </div>
            <div className="flex justify-center items-end gap-3 md:gap-5">
              <Phone src="/screen-home.png" alt="Home tab" size="sm" light className="hidden lg:block opacity-50 -rotate-2 translate-y-4" delay={0.2} tilt={false} onClick={() => setLightbox("/screen-home.png")} />
              <Phone src="/screen-news.png" alt="News briefing" size="sm" light className="opacity-70 -rotate-1" delay={0.1} tilt={false} onClick={() => setLightbox("/screen-news.png")} />
              <Phone src="/screen-campaign.png" alt="Reading campaign" delay={0} onClick={() => setLightbox("/screen-campaign.png")} />
              <Phone src="/screen-saved-articles.png" alt="Saved articles" size="sm" light className="opacity-70 rotate-1" delay={0.1} tilt={false} onClick={() => setLightbox("/screen-saved-articles.png")} />
              <Phone src="/screen-timecapsule.png" alt="Time Capsule" size="sm" light className="hidden lg:block opacity-50 rotate-2 translate-y-4" delay={0.2} tilt={false} onClick={() => setLightbox("/screen-timecapsule.png")} />
            </div>
          </div>
        </section>

        {/* ══════════ FEATURES BENTO ══════════ */}
        <section className="w-full bg-white overflow-hidden">
          <div ref={s6.ref} className={`${reveal(s6)} max-w-5xl mx-auto px-6 py-24 md:py-32`}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center mb-4">
              And all the details.
            </h2>
            <p className="text-lg text-gray-400 text-center mb-14 max-w-md mx-auto">
              The little things that make it feel right.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {featureItems.map((f, i) => (
                <motion.div
                  key={i}
                  className="group relative bg-gray-50 hover:bg-gray-100/80 rounded-2xl p-5 md:p-6 transition-all duration-300 cursor-default"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -2 }}
                >
                  <span className="text-2xl md:text-3xl block mb-3">{f.icon}</span>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{f.label}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ PRICING ══════════ */}
        <section className="w-full bg-[#f7f5f2] overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 py-24 md:py-32">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-center mb-4">
              Start free. Go further.
            </h2>
            <p className="text-lg text-gray-400 text-center mb-16 max-w-md mx-auto">
              Your first book is completely free, cover to cover. No time limits.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Free */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Free</h3>
                <p className="text-2xl font-bold text-gray-900 mt-2 mb-1">$0</p>
                <p className="text-sm text-gray-400 mb-6">No account needed</p>
                <ul className="space-y-3 text-[15px] text-gray-500">
                  <li className="flex items-start gap-3">
                    <span className="text-loudBlue mt-0.5">&#10003;</span>
                    <span>First book fully unlocked</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-loudBlue mt-0.5">&#10003;</span>
                    <span>Up to 5 books in your library</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-loudBlue mt-0.5">&#10003;</span>
                    <span>Two AI voices included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-loudBlue mt-0.5">&#10003;</span>
                    <span>Daily news, Wikipedia, Time Capsule</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-loudBlue mt-0.5">&#10003;</span>
                    <span>100+ curated classics via Campaigns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-loudBlue mt-0.5">&#10003;</span>
                    <span>Night mode, sleep timer, chapters</span>
                  </li>
                </ul>
              </div>

              {/* Premium */}
              <div className="rounded-2xl border border-loudBlue/20 bg-loudBlue/5 p-8 relative">
                <div className="absolute top-4 right-4">
                  <span className="text-[11px] font-medium text-loudBlue bg-loudBlue/10 px-2.5 py-1 rounded-full">Recommended</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Premium</h3>
                <p className="text-2xl font-bold text-gray-900 mt-2 mb-1">$5.99<span className="text-sm font-normal text-gray-400">/month</span></p>
                <p className="text-sm text-gray-400 mb-6">First month free. Cancel anytime.</p>
                <ul className="space-y-3 text-[15px] text-gray-500">
                  <li className="flex items-start gap-3">
                    <span className="text-loudBlue mt-0.5">&#10003;</span>
                    <span>Every book, cover to cover</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-loudBlue mt-0.5">&#10003;</span>
                    <span>Unlimited library</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-loudBlue mt-0.5">&#10003;</span>
                    <span>All 8 premium voices</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-loudBlue mt-0.5">&#10003;</span>
                    <span>Variable speed (0.3x to 3.0x)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-loudBlue mt-0.5">&#10003;</span>
                    <span>Notes, highlights, reading styles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-loudBlue mt-0.5">&#10003;</span>
                    <span>Unlimited articles and imports</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════ CTA ══════════ */}
        <section className="dark-section w-full bg-[#1d1d1f]">
          <div ref={s8.ref} className={`${reveal(s8)} max-w-3xl mx-auto px-6 py-24 md:py-36 text-center`}>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[0.95]">
              Start listening.
            </h2>
            <p className="text-lg text-gray-500 mb-10 max-w-md mx-auto">
              That book you&apos;ve been meaning to finish? Import it, press play, and go.
            </p>
            <div className="flex flex-col items-center gap-4">
              <AppStoreButton dark />
              <p className="text-[13px] text-gray-600 tracking-wide">
                Free to try &middot; Offline &middot; Private
              </p>
            </div>
          </div>
        </section>

        {/* ══════════ FOOTER ══════════ */}
        <footer className="w-full border-t border-gray-200/60 py-10 px-6 bg-[#f7f5f2]">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Image src="/logo2.png" alt="LoudReader" width={28} height={28} className="opacity-60" />
              <span className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} LoudReader</span>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 text-sm text-gray-400">
              {[
                { label: "FAQ", href: "/faq" },
                { label: "Release Notes", href: "/releases" },
                { label: "Support", href: "/support" },
                { label: "Terms", href: "/terms" },
                { label: "Privacy", href: "/privacy" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="hover:text-gray-900 transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>

      {/* ══════════ LIGHTBOX ══════════ */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 cursor-pointer"
            style={{
              background: "radial-gradient(circle at center, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
            onClick={() => setLightbox(null)}
            onKeyDown={(e) => { if (e.key === "Escape") setLightbox(null); }}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="relative max-w-sm w-full"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-2 text-white/60 hover:text-white w-10 h-10 rounded-full flex items-center justify-center text-3xl transition-colors"
                onClick={() => setLightbox(null)}
                aria-label="Close"
              >
                &times;
              </button>
              <Image
                src={lightbox}
                alt="Screenshot"
                width={393}
                height={852}
                className="rounded-[36px] mx-auto shadow-2xl"
                quality={95}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
