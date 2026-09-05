import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

A_PATH = ROOT / "predictions" / "baseline-predictions.jsonl"
B_PATH = ROOT / "predictions" / "isnad-predictions.jsonl"
T_PATH = ROOT / "reveal" / "truth.json"

def load_jsonl(path):
    out = {}
    for line_no, line in enumerate(
        path.read_text(encoding="utf-8").splitlines(), 1
    ):
        if not line.strip():
            continue
        obj = json.loads(line)
        cid = obj["case_id"]
        if cid in out:
            raise SystemExit(
                f"DUPLICATE_CASE_ID:{path.name}:{cid}"
            )
        out[cid] = obj
    return out

truth_data = json.loads(T_PATH.read_text(encoding="utf-8"))

if truth_data["status"] != "VERIFIED-HISTORICAL-REVEAL":
    raise SystemExit("TRUTH_NOT_VERIFIED")

truth_rows = truth_data["cases"]
truth = {x["case_id"]: x["actual_direction"] for x in truth_rows}

A = load_jsonl(A_PATH)
B = load_jsonl(B_PATH)

if set(A) != set(truth):
    raise SystemExit("BASELINE_CASE_SET_MISMATCH")

if set(B) != set(truth):
    raise SystemExit("ISNAD_CASE_SET_MISMATCH")

if len(truth) != 12:
    raise SystemExit("TRUTH_CASE_COUNT_NOT_12")

def probability_up(pred):
    confidence = float(pred["confidence"])
    direction = pred["predicted_direction"]
    if not 0 <= confidence <= 1:
        raise SystemExit(
            f"INVALID_CONFIDENCE:{pred['case_id']}"
        )
    if direction == "UP":
        return confidence
    if direction == "DOWN":
        return 1.0 - confidence
    raise SystemExit(
        f"INVALID_DIRECTION:{pred['case_id']}"
    )

def score_track(name, preds):
    rows = []

    for cid in sorted(truth):
        actual = truth[cid]
        p = preds[cid]

        p_up = probability_up(p)
        y = 1.0 if actual == "UP" else 0.0

        correct = p["predicted_direction"] == actual
        brier = (p_up - y) ** 2

        rows.append({
            "case_id": cid,
            "predicted_direction": p["predicted_direction"],
            "actual_direction": actual,
            "confidence": float(p["confidence"]),
            "p_up": p_up,
            "correct": correct,
            "brier": brier
        })

    n = len(rows)

    tp = sum(
        r["predicted_direction"] == "UP"
        and r["actual_direction"] == "UP"
        for r in rows
    )

    fp = sum(
        r["predicted_direction"] == "UP"
        and r["actual_direction"] == "DOWN"
        for r in rows
    )

    tn = sum(
        r["predicted_direction"] == "DOWN"
        and r["actual_direction"] == "DOWN"
        for r in rows
    )

    fn = sum(
        r["predicted_direction"] == "DOWN"
        and r["actual_direction"] == "UP"
        for r in rows
    )

    actual_down = fp + tn
    actual_up = tp + fn

    accuracy = sum(r["correct"] for r in rows) / n
    brier = sum(r["brier"] for r in rows) / n

    fpr = fp / actual_down if actual_down else None
    fnr = fn / actual_up if actual_up else None
    precision = tp / (tp + fp) if (tp + fp) else None
    recall = tp / (tp + fn) if (tp + fn) else None

    bins = [
        (0.0, 0.5),
        (0.5, 0.7),
        (0.7, 0.9),
        (0.9, 1.0)
    ]

    calibration = []

    for lo, hi in bins:
        selected = [
            r for r in rows
            if lo <= r["p_up"] < hi
            or (hi == 1.0 and lo <= r["p_up"] <= hi)
        ]

        if not selected:
            continue

        mean_predicted = (
            sum(r["p_up"] for r in selected) / len(selected)
        )

        observed_frequency = (
            sum(
                r["actual_direction"] == "UP"
                for r in selected
            ) / len(selected)
        )

        abs_error = abs(
            mean_predicted - observed_frequency
        )

        calibration.append({
            "lower": lo,
            "upper": hi,
            "n": len(selected),
            "mean_predicted": mean_predicted,
            "observed_frequency": observed_frequency,
            "absolute_error": abs_error
        })

    ece = sum(
        x["n"] / n * x["absolute_error"]
        for x in calibration
    ) if calibration else None

    return {
        "track": name,
        "n": n,
        "true_positive": tp,
        "false_positive": fp,
        "true_negative": tn,
        "false_negative": fn,
        "accuracy": accuracy,
        "brier_score": brier,
        "false_positive_rate": fpr,
        "false_negative_rate": fnr,
        "precision": precision,
        "recall": recall,
        "calibration_ece": ece,
        "calibration_bins": calibration,
        "rows": rows
    }

baseline = score_track("GSOS_BASELINE", A)
isnad = score_track("GSOS_PLUS_ISNAD", B)

direction_agreement = sum(
    A[cid]["predicted_direction"]
    == B[cid]["predicted_direction"]
    for cid in sorted(truth)
)

mean_abs_confidence_delta = sum(
    abs(
        float(B[cid]["confidence"])
        - float(A[cid]["confidence"])
    )
    for cid in sorted(truth)
) / len(truth)

case_deltas = []

for cid in sorted(truth):
    case_deltas.append({
        "case_id": cid,
        "brier_baseline": next(
            x["brier"] for x in baseline["rows"]
            if x["case_id"] == cid
        ),
        "brier_isnad": next(
            x["brier"] for x in isnad["rows"]
            if x["case_id"] == cid
        ),
        "brier_isnad_minus_baseline": (
            next(
                x["brier"] for x in isnad["rows"]
                if x["case_id"] == cid
            )
            -
            next(
                x["brier"] for x in baseline["rows"]
                if x["case_id"] == cid
            )
        ),
        "direction_agreement":
            A[cid]["predicted_direction"]
            == B[cid]["predicted_direction"],
        "confidence_delta_isnad_minus_baseline":
            float(B[cid]["confidence"])
            - float(A[cid]["confidence"])
    })

result = {
    "experiment_id": "GSOS-LAB-NOKIA-003",
    "status": "SCORED",
    "sample_size": len(truth),
    "baseline": baseline,
    "isnad": isnad,
    "paired_delta_isnad_minus_baseline": {
        "accuracy":
            isnad["accuracy"] - baseline["accuracy"],
        "brier_score":
            isnad["brier_score"] - baseline["brier_score"],
        "brier_improvement":
            baseline["brier_score"] - isnad["brier_score"],
        "false_positive_rate":
            isnad["false_positive_rate"]
            - baseline["false_positive_rate"],
        "false_negative_rate":
            isnad["false_negative_rate"]
            - baseline["false_negative_rate"],
        "precision":
            isnad["precision"] - baseline["precision"],
        "recall":
            isnad["recall"] - baseline["recall"],
        "calibration_ece":
            (
                isnad["calibration_ece"]
                - baseline["calibration_ece"]
                if isnad["calibration_ece"] is not None
                and baseline["calibration_ece"] is not None
                else None
            )
    },
    "prediction_stability": {
        "direction_agreement_rate":
            direction_agreement / len(truth),
        "mean_absolute_confidence_delta":
            mean_abs_confidence_delta
    },
    "paired_case_deltas": case_deltas,
    "lead_time": {
        "status": "NOT_SCORED",
        "reason":
            "Binary annual targets do not define a unique event timestamp."
    },
    "statistical_significance": {
        "status": "NOT_CLAIMED",
        "reason":
            "n=12 is too small for a reliable general significance claim "
            "in this experiment without a separately justified inferential design."
    },
    "scientific_claim_level":
        "COMPARATIVE_PROTOCOL_EVIDENCE_ONLY"
}

print(json.dumps(result, ensure_ascii=False, indent=2))
