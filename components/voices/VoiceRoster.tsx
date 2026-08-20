"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { VOICE_LANGUAGES, type Voice, type VoiceLanguage } from "@/data/voices";

/*
 * The whole roster as one client island.
 *
 * It is one component rather than a player per card because a comparison page
 * has to stop the previous voice when the next one starts — two narrators
 * talking over each other tells a visitor nothing about either. A single
 * <audio> element, retargeted on each press, gives that for free and keeps
 * exactly one network request in flight.
 *
 * Grouping: a language with several narrators gets its own section; the eight
 * that ship a single narrator share one. Eight headings with one card under
 * each reads as eight false starts, and the thing a visitor compares in that
 * part of the roster is languages, not voices within a language.
 *
 * No preloading: 23 clips is roughly 2.3 MB, and a visitor who plays two of
 * them should pay for two.
 */

type Group = {
  id: string;
  heading: string;
  endonym?: string;
  note: string;
  /** Language shown on the card itself, when the section holds several. */
  cards: Array<{ voice: Voice; language: VoiceLanguage; showLanguage: boolean }>;
};

function useGroups(): Group[] {
  return useMemo(() => {
    const many = VOICE_LANGUAGES.filter((l) => l.voices.length > 1);
    const single = VOICE_LANGUAGES.filter((l) => l.voices.length === 1);
    const groups: Group[] = many.map((language) => ({
      id: language.code,
      heading: language.name,
      endonym: language.endonym,
      note: `${language.voices.length} narrators`,
      cards: language.voices.map((voice) => ({ voice, language, showLanguage: false })),
    }));
    if (single.length) {
      groups.push({
        id: "more",
        heading: "One narrator each",
        note: `${single.length} more languages`,
        cards: single.map((language) => ({
          voice: language.voices[0],
          language,
          showLanguage: true,
        })),
      });
    }
    return groups;
  }, []);
}

export default function VoiceRoster() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState<string | null>(null);
  const [failed, setFailed] = useState<string | null>(null);
  const groups = useGroups();

  useEffect(() => {
    const el = audioRef.current;
    if (!el) return;
    const clear = () => setPlaying(null);
    el.addEventListener("ended", clear);
    el.addEventListener("pause", clear);
    return () => {
      el.removeEventListener("ended", clear);
      el.removeEventListener("pause", clear);
    };
  }, []);

  const toggle = useCallback(
    (voice: Voice) => {
      const el = audioRef.current;
      if (!el) return;
      if (playing === voice.id) {
        el.pause();
        return;
      }
      setFailed(null);
      el.src = `/voices/${voice.id}.mp3`;
      el.play().then(
        () => setPlaying(voice.id),
        () => {
          setPlaying(null);
          setFailed(voice.id);
        }
      );
    },
    [playing]
  );

  return (
    <div className="flex flex-col gap-12">
      <audio ref={audioRef} preload="none" />
      {groups.map((group) => (
        <section key={group.id} id={group.id} className="scroll-mt-24">
          <h2 className="text-2xl font-semibold text-gray-900">
            {group.heading}
            {group.endonym && group.endonym !== group.heading && (
              <span className="ml-3 text-lg font-normal text-gray-400">
                {group.endonym}
              </span>
            )}
          </h2>
          <p className="mt-1 text-[13px] text-gray-400">{group.note}</p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {group.cards.map(({ voice, language, showLanguage }) => {
              const isPlaying = playing === voice.id;
              return (
                <li key={voice.id} id={showLanguage ? language.code : undefined} className="scroll-mt-24">
                  <button
                    type="button"
                    onClick={() => toggle(voice)}
                    aria-pressed={isPlaying}
                    aria-label={
                      isPlaying
                        ? `Stop ${voice.name}`
                        : `Play a sample of ${voice.name}, ${language.name}`
                    }
                    className={`w-full h-full text-left flex items-start gap-4 rounded-xl border p-4 transition-colors ${
                      isPlaying
                        ? "border-loudBlue bg-loudBlue/5"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        isPlaying ? "bg-loudBlue text-white" : "bg-gray-900 text-white"
                      }`}
                    >
                      <svg
                        className="h-3.5 w-3.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        {isPlaying ? (
                          <path d="M6.75 5.25h3.5v13.5h-3.5zM13.75 5.25h3.5v13.5h-3.5z" />
                        ) : (
                          <path d="M6.3 3.8a.75.75 0 0 1 1.14-.64l12 8.2a.75.75 0 0 1 0 1.28l-12 8.2A.75.75 0 0 1 6.3 20.2z" />
                        )}
                      </svg>
                    </span>
                    <span className="min-w-0">
                      {showLanguage && (
                        <span className="block text-[11px] font-medium uppercase tracking-wide text-gray-400">
                          {language.name}{" "}
                          <span className="normal-case tracking-normal text-gray-300">
                            {language.endonym}
                          </span>
                        </span>
                      )}
                      <span className="block font-medium text-gray-900">
                        {voice.name}
                      </span>
                      <span className="block text-[13px] text-gray-500">
                        {voice.blurb}
                      </span>
                      {failed === voice.id && (
                        <span className="mt-1.5 block text-[13px] text-gray-500" role="status">
                          That wouldn&apos;t play here. Tap again, or try another browser.
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </div>
  );
}
