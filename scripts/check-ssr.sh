#!/usr/bin/env bash
#
# check-ssr.sh — verify that key page copy is present in the server-rendered
# HTML (i.e. visible to search engines and AI crawlers that don't execute JS).
#
# Each route is fetched with a plain non-browser user agent, <script>/<style>
# blocks and all HTML tags are stripped, and the remaining visible text is
# grepped for copy that MUST be there without JavaScript.
#
# Usage:
#   npm run build
#   npx next start -p 3000 &          # or: npm run dev (dev output also SSRs)
#   ./scripts/check-ssr.sh                       # defaults to localhost:3000
#   ./scripts/check-ssr.sh http://localhost:4321 # any base URL
#   ./scripts/check-ssr.sh https://loudreader.io # against production
#
# Exits non-zero if any expected string is missing — safe to wire into CI.

set -u

BASE="${1:-http://localhost:3000}"
UA="Mozilla/5.0 (compatible; LoudReaderSSRCheck/1.0)"
FAIL=0

check() {
  local route="$1"
  shift
  local html text expected
  if ! html=$(curl -fsS -A "$UA" "$BASE$route"); then
    echo "FAIL [$route] could not fetch $BASE$route"
    FAIL=1
    return
  fi
  # Strip scripts/styles, replace tags with spaces (so "is<br/>an" -> "is an"),
  # decode a few common entities, collapse whitespace.
  text=$(printf '%s' "$html" | perl -0777 -pe '
    s/<script\b.*?<\/script>/ /gsi;
    s/<style\b.*?<\/style>/ /gsi;
    s/<[^>]*>/ /g;
    s/&nbsp;/ /g; s/&amp;/&/g; s/&#x27;|&apos;/'"'"'/g; s/&quot;/"/g;
    s/\s+/ /g;
  ')
  for expected in "$@"; do
    if printf '%s' "$text" | grep -qF "$expected"; then
      echo "  ok  [$route] \"$expected\""
    else
      echo "FAIL  [$route] missing visible copy: \"$expected\""
      FAIL=1
    fi
  done
}

echo "SSR visibility check against $BASE"

check "/" \
  "Every text is an audiobook." \
  "Natural AI voices read any book aloud, every word highlighted in sync." \
  "No cloud. No accounts. No servers." \
  "Import any EPUB or PDF."

check "/faq" \
  "Frequently Asked Questions" \
  "How do I add my own books?" \
  "Share any EPUB or PDF to LoudReader from the Files app" \
  "LoudReader includes the entire Project Gutenberg catalog"

check "/support" \
  "Does the app work offline?"

check "/privacy" \
  "Our Commitment to Privacy"

check "/listen" \
  "Free audiobook classics" \
  "fully on-device and private" \
  "Mystery & Detective"

check "/listen/moby-dick" \
  "Call me Ishmael" \
  "estimate, at 1x speed" \
  "Related books to listen to next" \
  "Listen free on Mac and iPhone"

if [ "$FAIL" -ne 0 ]; then
  echo "RESULT: FAIL — some copy is not server-rendered"
  exit 1
fi
echo "RESULT: PASS — all expected copy present in server-rendered HTML"
