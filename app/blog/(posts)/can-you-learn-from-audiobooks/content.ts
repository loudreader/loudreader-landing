// EDITORIAL REVIEW — 2026-09-28. Sources for the material revision:
// - https://journals.sagepub.com/doi/10.1177/2158244016669550 — Rogowsky et al. (2016), study design and bounded comprehension result; checked 2026-09-28.
// - Shipping app product audit, 2026-09-28: LoudReader_mac release_v1.12 (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0), not the older checkout HEAD. No runtime test was performed for this editorial pass.
// - LoudReader/Subscription/SubscriptionAccess.swift and SubscriptionManager.swift — eight cumulative listening hours, limited English free selection afterwards, unrestricted book imports/listening.
// - LoudReader/Subscription/PaywallReason.swift:125–148 — Premium speed and timer; notes/highlights are not Premium-only. Source inspected 2026-09-28.
// - LoudReader/LoudReaderApp.swift, Analytics.swift and SettingsSheet.swift — local speech plus diagnostics/analytics; no exposed analytics opt-out promised. Source-auditor report reviewed 2026-09-28.
// - App target and App Store record — iPhone/iPad, iPad compatibility on Apple Silicon Macs. Studio voice availability depends on hardware; no native macOS claim.
// Practical routines are suggestions, not measured learning or medical outcomes.
// No unpublished future-verification dates, independent runtime tests or network audit are claimed.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Is listening to a book the same as learning it?",
    "a": "Listening gives you access to the material. To check learning, explain the main idea, answer a question or apply it without the book. A finished chapter does not tell you how much you understood."
  },
  {
    "q": "Can audio replace a textbook?",
    "a": "It can carry the prose, but diagrams, tables, equations and worked examples often need the original page. Keep both available and switch when the information depends on its visual form."
  },
  {
    "q": "Does reading while listening always improve learning?",
    "a": "No. It can help you follow the text or check unfamiliar words, but it is not a guaranteed comprehension or memory advantage. Try it with a short passage and check what you can explain afterwards."
  },
  {
    "q": "What speed should I use for learning?",
    "a": "Use a pace that lets you follow and explain the material. Start near normal speed, pause as needed and adjust for unfamiliar concepts. There is no single evidence-based optimum for every book and listener."
  },
  {
    "q": "Can I use LoudReader for this?",
    "a": "Yes, for supported DRM-free EPUBs and PDFs. Check the imported text before relying on narration, and keep the original for figures and notation. Playback-speed adjustment requires Premium."
  }
];
