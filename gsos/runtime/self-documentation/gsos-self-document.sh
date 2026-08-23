#!/usr/bin/env bash

set -e
set +H

ROOT="${GSOS_ROOT:-$HOME/sos-observer}"

ARCH="$ROOT/gsos/archive"
AUTO="$ARCH/self-documentation"

mkdir -p "$AUTO"

TS="$(date '+%Y-%m-%dT%H:%M:%S%z')"
DATE="$(date '+%Y-%m-%d')"
TIME="$(date '+%H:%M:%S')"

CHAIN="$AUTO/GSOS_SELF_DOCUMENTATION_CHAIN.jsonl"
EVENTS="$AUTO/GSOS_SELF_DOCUMENTATION_EVENTS.log"
TABLE="$AUTO/GSOS_SELF_DOCUMENTATION.tsv"

PREV_REF="NONE"
PREV_HASH="GENESIS"

if [ -s "$CHAIN" ]; then
    PREV_LINE="$(tail -n 1 "$CHAIN")"

    PREV_REF="$(
        printf '%s' "$PREV_LINE" |
        sed -n 's/.*"ref":"\([^"]*\)".*/\1/p'
    )"

    [ -n "$PREV_REF" ] || PREV_REF="UNKNOWN"

    PREV_HASH="$(
        printf '%s' "$PREV_LINE" |
        sha256sum |
        awk '{print $1}'
    )"
fi

SEQ="$(
    grep -c '"ref"' "$CHAIN" 2>/dev/null || true
)"

SEQ=$((SEQ + 1))

REF="GSOS-AUTO-$(date '+%Y%m%d-%H%M%S')-$(printf '%06d' "$SEQ")"

HEAD="$(
    git -C "$ROOT" rev-parse HEAD 2>/dev/null ||
    printf 'NO_GIT_HEAD'
)"

STATUS="$(
    git -C "$ROOT" status --short 2>/dev/null |
    tr '\n' ';' ||
    true
)"

PAYLOAD="$(
    printf '%s|%s|%s|%s|%s|%s|%s' \
        "$REF" \
        "$TS" \
        "$DATE" \
        "$TIME" \
        "$HEAD" \
        "$STATUS" \
        "$PREV_HASH"
)"

EVENT_HASH="$(
    printf '%s' "$PAYLOAD" |
    sha256sum |
    awk '{print $1}'
)"

printf '{"ref":"%s","timestamp":"%s","date":"%s","time":"%s","git_head":"%s","previous_ref":"%s","previous_hash":"%s","event_hash":"%s","status":"DOCUMENTED"}\n' \
    "$REF" \
    "$TS" \
    "$DATE" \
    "$TIME" \
    "$HEAD" \
    "$PREV_REF" \
    "$PREV_HASH" \
    "$EVENT_HASH" \
    >> "$CHAIN"

printf '%s\t%s\t%s\t%s\t%s\t%s\t%s\t%s\n' \
    "$REF" \
    "$TS" \
    "$DATE" \
    "$TIME" \
    "$HEAD" \
    "$PREV_REF" \
    "$PREV_HASH" \
    "$EVENT_HASH" \
    >> "$TABLE"

printf '%s\t%s\t%s\t%s\t%s\t%s\n' \
    "$REF" \
    "$TS" \
    "$HEAD" \
    "$PREV_REF" \
    "$PREV_HASH" \
    "$EVENT_HASH" \
    >> "$EVENTS"

printf 'GSOS_SELF_DOCUMENTATION_REF=%s\n' "$REF"
printf 'TIMESTAMP=%s\n' "$TS"
printf 'GIT_HEAD=%s\n' "$HEAD"
printf 'PREVIOUS_REF=%s\n' "$PREV_REF"
printf 'PREVIOUS_HASH=%s\n' "$PREV_HASH"
printf 'EVENT_SHA256=%s\n' "$EVENT_HASH"
printf 'STATUS=DOCUMENTED\n'
