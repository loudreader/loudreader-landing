// FACT PROVENANCE — checked 2026-09-28 against shipping release_v1.12
// (5dc3c0d24c12a81d08de55177c6b4d26e1afdaa0):
// - AudioCacheManager.swift:306–374: audio plus metadata quota and eviction.
// - AppPreferences.swift:160,270–292: preference applies a quota; do not infer
//   installed footprint from the shared cache constructor's temporary 2 GB value.
// - Engines/ClonedVoiceStore.swift:132,163–166: local saved clone directory and
//   removal. AudioCacheSettingsView.swift is diagnostics, not proof of a public
//   Clear Cache control; no unverified cleanup UI is advertised here.
// - Canonical 2026-09-28 shipping audit: local books; no automatic library sync.
// - https://support.apple.com/en-gb/108429 (read 2026-09-28): storage reporting,
//   cached-data caveat, distinction between offloading and deleting an app.
// Removed unverified all-models-bundled/no-download guarantee, 170 MB enrollment
// packaging assertion and claims that library/audio storage cannot grow.
// No installed App Store archive or device-specific footprint was measured.

import type { Faq } from "@/components/money/FaqSection";

export const FAQS: Faq[] = [
  {
    "q": "Is the App Store download size my final storage usage?",
    "a": "No. Your library, generated audio and saved voice files can add to the installed footprint. Check usage on your device after using the app."
  },
  {
    "q": "Does LoudReader keep every generated sentence forever?",
    "a": "No. Its audio cache has a quota and can remove older entries, including prepared audio when necessary."
  },
  {
    "q": "Does unloading a voice model free disk space?",
    "a": "Not necessarily. Releasing a model from memory and deleting its stored files are different operations."
  },
  {
    "q": "Will offloading LoudReader remove my books?",
    "a": "Apple says offloading keeps an app’s documents and data. Deleting the app also removes associated data, so preserve important files first."
  }
];
