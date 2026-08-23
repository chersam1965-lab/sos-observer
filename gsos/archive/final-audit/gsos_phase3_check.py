import json
import re
import sys

path = sys.argv[1]

with open(path, encoding="utf-8") as f:
    lines = [x.rstrip("\n") for x in f if x.strip()]

print("--- JSONL VALIDITY ---")
print("EVENT_COUNT=" + str(len(lines)))

if not lines:
    print("[FAIL] EMPTY_CHAIN")
    sys.exit(1)

required = [
    "ref",
    "timestamp",
    "date",
    "time",
    "git_head",
    "previous_ref",
    "previous_hash",
    "event_hash",
    "status",
]

events = []

for i, line in enumerate(lines, 1):
    try:
        obj = json.loads(line)
    except Exception as e:
        print("[FAIL] JSON_LINE_" + str(i) + ": " + str(e))
        sys.exit(1)

    missing = [k for k in required if k not in obj]

    if missing:
        print(
            "[FAIL] LINE_" + str(i) +
            "_MISSING=" + ",".join(missing)
        )
        sys.exit(1)

    events.append(obj)
    print("[OK] LINE_" + str(i) + "_STRUCTURE")

print("[OK] JSONL_STRUCTURE_VALID")

print("")
print("--- GENESIS ---")

first = events[0]

if first["previous_ref"] != "NONE":
    print("[FAIL] GENESIS_PREVIOUS_REF")
    sys.exit(1)

print("[OK] GENESIS_PREVIOUS_REF")

if first["previous_hash"] != "GENESIS":
    print("[FAIL] GENESIS_PREVIOUS_HASH")
    sys.exit(1)

print("[OK] GENESIS_PREVIOUS_HASH")
print("GENESIS_REF=" + first["ref"])
print("GENESIS_TIMESTAMP=" + first["timestamp"])
print("GENESIS_EVENT_HASH=" + first["event_hash"])

print("")
print("--- EVENT HASH FORMAT ---")

rx = re.compile(r"^[0-9a-f]{64}$")

for i, event in enumerate(events, 1):
    if not rx.fullmatch(event["event_hash"]):
        print(
            "[FAIL] EVENT_" + str(i) +
            "_INVALID_HASH_FORMAT"
        )
        sys.exit(1)

    print("[OK] EVENT_" + str(i) + "_SHA256_FORMAT")

print("[OK] ALL_EVENT_HASHES_SHA256_FORMAT")

print("")
print("--- LINEAGE ---")

for i in range(1, len(events)):
    previous = events[i - 1]
    current = events[i]

    if current["previous_ref"] != previous["ref"]:
        print(
            "[FAIL] LINEAGE_REF_" + str(i + 1) +
            ": expected=" + previous["ref"] +
            " actual=" + current["previous_ref"]
        )
        sys.exit(1)

    if current["previous_hash"] != previous["event_hash"]:
        print(
            "[FAIL] LINEAGE_HASH_" + str(i + 1) +
            ": expected=" + previous["event_hash"] +
            " actual=" + current["previous_hash"]
        )
        sys.exit(1)

    print(
        "[OK] EVENT_" + str(i + 1) +
        "_POINTS_TO_EVENT_" + str(i)
    )

print("[OK] CHAIN_LINEAGE_VALID")

print("")
print("--- PROVENANCE STATUS ---")

for i, event in enumerate(events, 1):
    if event["status"] == "DOCUMENTED":
        print("[OK] EVENT_" + str(i) + "_DOCUMENTED")
    else:
        print(
            "[WARN] EVENT_" + str(i) +
            "_STATUS=" + event["status"]
        )

print("")
print("--- RESULT ---")
print("[OK] JSONL_STRUCTURE_VALID")
print("[OK] REQUIRED_FIELDS_PRESENT")
print("[OK] GENESIS_VALID")
print("[OK] EVENT_HASH_FORMAT_VALID")
print("[OK] CHAIN_LINEAGE_VALID")
