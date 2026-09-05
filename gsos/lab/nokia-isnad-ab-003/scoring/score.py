import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
truth_path = ROOT / "reveal" / "truth.json"

if not truth_path.exists():
    print("SCORING_BLOCKED=TRUTH_NOT_REVEALED")
    sys.exit(2)

truth = json.loads(
    truth_path.read_text(encoding="utf-8")
)

if truth.get("status") != "VERIFIED-HISTORICAL-REVEAL":
    print("SCORING_BLOCKED=TRUTH_NOT_VERIFIED")
    sys.exit(3)

baseline_path = ROOT / "predictions" / "baseline-predictions.jsonl"
isnad_path = ROOT / "predictions" / "isnad-predictions.jsonl"

def load(path):
    data = {}
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.strip():
            obj = json.loads(line)
            data[obj["case_id"]] = obj
    return data

baseline = load(baseline_path)
isnad = load(isnad_path)

truth_cases = truth["cases"]
truth_ids = {x["case_id"] for x in truth_cases}

if set(baseline) != truth_ids:
    print("SCORING_BLOCKED=BASELINE_CASE_SET_MISMATCH")
    sys.exit(4)

if set(isnad) != truth_ids:
    print("SCORING_BLOCKED=ISNAD_CASE_SET_MISMATCH")
    sys.exit(5)

print("SCORING_READY=true")
print("TRUTH_CASES=" + str(len(truth_cases)))
print("NO_SYNTHETIC_TRUTH=true")
