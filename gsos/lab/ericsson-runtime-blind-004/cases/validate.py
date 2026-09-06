#!/usr/bin/env python3

import json
import sys
from datetime import date
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
CASES_PATH = ROOT / "cases" / "cases.json"


def fail(message: str) -> None:
    print("VALIDATION_ERROR=" + message)
    sys.exit(1)


try:
    data = json.loads(CASES_PATH.read_text(encoding="utf-8"))
except Exception as exc:
    fail(f"INVALID_CASES_JSON:{exc}")


if data.get("experiment_id") != "GSOS-LAB-ERICSSON-004":
    fail("WRONG_EXPERIMENT_ID")

if data.get("case_count") != 12:
    fail("CASE_COUNT_METADATA_NOT_12")

if data.get("target_type") != "BINARY_DIRECTION":
    fail("TARGET_TYPE_NOT_BINARY_DIRECTION")

if data.get("allowed_prediction") != ["UP", "DOWN"]:
    fail("ALLOWED_PREDICTIONS_INVALID")

cases = data.get("cases")

if not isinstance(cases, list):
    fail("CASES_IS_NOT_LIST")

if len(cases) != 12:
    fail("CASE_COUNT_NOT_12")

case_ids = [case.get("case_id") for case in cases]

if any(cid is None for cid in case_ids):
    fail("CASE_ID_MISSING")

if len(set(case_ids)) != 12:
    fail("CASE_IDS_NOT_UNIQUE")


required_fields = {
    "case_id",
    "historical_cutoff",
    "horizon_end",
    "target",
    "direction_definition",
    "source_family",
    "difficulty",
}


for case in cases:

    cid = case["case_id"]

    missing = sorted(
        required_fields - set(case.keys())
    )

    if missing:
        fail(
            f"MISSING_FIELDS:{cid}:{','.join(missing)}"
        )

    if case["difficulty"] not in {
        "EASY",
        "MEDIUM",
        "HARD",
    }:
        fail(
            f"INVALID_DIFFICULTY:{cid}"
        )

    try:
        cutoff = date.fromisoformat(
            case["historical_cutoff"]
        )

        horizon = date.fromisoformat(
            case["horizon_end"]
        )
    except Exception as exc:
        fail(
            f"INVALID_DATE:{cid}:{exc}"
        )

    if cutoff >= horizon:
        fail(
            f"INVALID_TEMPORAL_WINDOW:{cid}"
        )

    if not str(case["target"]).strip():
        fail(
            f"EMPTY_TARGET:{cid}"
        )

    if not str(case["direction_definition"]).strip():
        fail(
            f"EMPTY_DIRECTION_DEFINITION:{cid}"
        )

    if not str(case["source_family"]).strip():
        fail(
            f"EMPTY_SOURCE_FAMILY:{cid}"
        )


print("VALIDATION_STATUS=PASSED")
print("EXPERIMENT_ID=GSOS-LAB-ERICSSON-004")
print("TARGET_TYPE=BINARY_DIRECTION")
print("CASE_COUNT=12")
print("CASE_IDS_UNIQUE=true")
print("TEMPORAL_WINDOWS=VALID")
print("DIFFICULTY_VALUES=VALID")
