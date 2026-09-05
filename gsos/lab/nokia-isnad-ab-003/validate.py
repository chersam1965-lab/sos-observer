import json
import sys
from pathlib import Path

root = Path(__file__).resolve().parent
cases = json.loads((root / "cases" / "cases.json").read_text(encoding="utf-8"))
schema = json.loads((root / "predictions" / "schema.json").read_text(encoding="utf-8"))

case_ids = {c["case_id"] for c in cases["cases"]}

errors = 0

for name in [
    "baseline-predictions.jsonl",
    "isnad-predictions.jsonl"
]:
    path = root / "predictions" / name
    seen = set()

    for line_no, line in enumerate(
        path.read_text(encoding="utf-8").splitlines(), 1
    ):
        if not line.strip():
            continue

        try:
            obj = json.loads(line)
        except Exception as e:
            print(f"{name}:INVALID_JSON:line={line_no}:{e}")
            errors += 1
            continue

        missing = [
            x for x in schema["required"]
            if x not in obj
        ]

        if missing:
            print(f"{name}:MISSING={missing}:line={line_no}")
            errors += 1

        case_id = obj.get("case_id")

        if case_id not in case_ids:
            print(f"{name}:UNKNOWN_CASE={case_id}")
            errors += 1

        if case_id in seen:
            print(f"{name}:DUPLICATE_CASE={case_id}")
            errors += 1

        seen.add(case_id)

        direction = obj.get("predicted_direction")

        if direction not in schema["allowed_directions"]:
            print(f"{name}:INVALID_DIRECTION={direction}")
            errors += 1

        try:
            confidence = float(obj.get("confidence"))
            if not (
                schema["confidence_min"]
                <= confidence
                <= schema["confidence_max"]
            ):
                print(
                    f"{name}:INVALID_CONFIDENCE={confidence}"
                )
                errors += 1
        except Exception:
            print(f"{name}:INVALID_CONFIDENCE_FORMAT")
            errors += 1

    if len(seen) != schema["case_count"]:
        print(
            f"{name}:COUNT={len(seen)} "
            f"EXPECTED={schema['case_count']}"
        )
        errors += 1

print(f"VALIDATION_ERRORS={errors}")
sys.exit(1 if errors else 0)
