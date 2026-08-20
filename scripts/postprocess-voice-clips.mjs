// Post-processes narrator preview clips into public/voices/<name>.mp3 with the
// same treatment the book samples get (trim, compress, -16 LUFS, 96k mono),
// and writes data/voice-durations.json.
//
// Every narrator on /voices goes through this, INCLUDING the eleven English
// clips that came off a phone: a comparison page is only fair if the voices
// are equally loud, and the device clips were never loudness-normalised.
// The home page keeps playing the untouched /voices/james.m4a.
//
// Usage: node scripts/postprocess-voice-clips.mjs <dir-of-wav-or-m4a> [...]
import { readdirSync, writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const REPO = dirname(dirname(fileURLToPath(import.meta.url)));
const POST = "/Users/pepi/Developer/LoudReader_mac/Scripts/postprocess_marketing_sample.sh";

const dirs = process.argv.slice(2);
if (!dirs.length) {
  console.error("usage: node scripts/postprocess-voice-clips.mjs <dir> [dir...]");
  process.exit(2);
}

const voicesDir = join(REPO, "public", "voices");
const durationsPath = join(REPO, "data", "voice-durations.json");
mkdirSync(voicesDir, { recursive: true });

const durations = existsSync(durationsPath)
  ? JSON.parse(readFileSync(durationsPath, "utf8"))
  : {};
let ok = 0, fail = 0;
for (const dir of dirs) {
  for (const f of readdirSync(dir).sort()) {
    const m = f.match(/^(?:chatterbox_)?(.+)\.(wav|m4a)$/);
    if (!m) continue;
    const name = m[1];
    const out = join(voicesDir, `${name}.mp3`);
    try {
      execFileSync("zsh", [POST, join(dir, f), out], { stdio: ["ignore", "pipe", "pipe"] });
      const d = execFileSync("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", out], { encoding: "utf8" }).trim();
      durations[name] = Number(Number(d).toFixed(1));
      console.log(`OK   ${name}  ${d}s`);
      ok++;
    } catch {
      console.error(`FAIL ${name}`);
      fail++;
    }
  }
}

writeFileSync(durationsPath, JSON.stringify(durations, null, 2) + "\n");
console.log(`\n${ok} ok, ${fail} failed -> data/voice-durations.json`);
