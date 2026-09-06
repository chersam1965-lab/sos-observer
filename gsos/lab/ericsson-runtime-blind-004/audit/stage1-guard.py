import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]

pr = json.loads(
    (root / "PREREGISTRATION.json").read_text(encoding="utf-8")
)

freeze = json.loads(
    (root / "freeze" / "freeze-status.json").read_text(encoding="utf-8")
)

assert pr["status"] == "PREREGISTERED"
assert pr["runtime_generated_prediction_required"] is True
assert pr["future_information_blocked_before_prediction"] is True

assert freeze["baseline"] == "NOT_FROZEN"
assert freeze["isnad"] == "NOT_FROZEN"
assert freeze["reveal"] == "LOCKED"
assert freeze["scoring"] == "NOT_STARTED"

for name in [
    "baseline-predictions.jsonl",
    "isnad-predictions.jsonl"
]:
    text = (root / "predictions" / name).read_text(
        encoding="utf-8"
    )
    assert not [x for x in text.splitlines() if x.strip()]

assert not (root / "reveal" / "truth.json").exists()

print("PREREGISTRATION_GUARD=VALID")
print("PREDICTIONS=EMPTY")
print("TRUTH=ABSENT")
print("FREEZE=NOT_FROZEN")
print("REVEAL=LOCKED")
print("SCORING=NOT_STARTED")
