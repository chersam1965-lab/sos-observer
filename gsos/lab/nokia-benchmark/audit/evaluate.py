import json
import sys
from pathlib import Path

lab = Path(sys.argv[1])

registry_path = lab / "predictions" / "prediction-registry.jsonl"
reveal_path = lab / "reveal" / "reveal-targets.json"
result_path = lab / "audit" / "evaluation.json"

predictions = {}

with registry_path.open(encoding="utf-8") as f:
    for line in f:
        obj = json.loads(line)
        predictions[obj["prediction_id"]] = obj

with reveal_path.open(encoding="utf-8") as f:
    reveal = json.load(f)

results = []

for target in reveal["targets"]:
    pid = target["prediction_id"]
    p = predictions[pid]

    baseline = float(target["baseline"])
    revealed = float(target["revealed"])
    direction = target["direction"]
    prediction = p["predicted_direction"]

    if prediction == "STABLE":
        change = abs(revealed - baseline) / abs(baseline)
        success = change <= 0.05

    elif prediction == "STABLE_OR_UP":
        success = revealed >= baseline

    elif prediction == "STABLE_OR_DOWN":
        success = revealed <= baseline

    elif prediction == "UP":
        success = revealed > baseline

    elif prediction == "DOWN":
        success = revealed < baseline

    else:
        success = False

    results.append({
        "prediction_id": pid,
        "card_id": p["card_id"],
        "horizon": p["horizon"],
        "spatial_scope": p["spatial_scope"],
        "predicted_direction": prediction,
        "revealed_direction": direction,
        "confidence": p["confidence"],
        "baseline": baseline,
        "revealed": revealed,
        "success": bool(success),
        "falsified": not bool(success)
    })

success_count = sum(1 for r in results if r["success"])
failure_count = len(results) - success_count

evaluation = {
    "evaluation_id": "GSOS-NOKIA-EVAL-001",
    "status": "EVALUATED",
    "prediction_count": len(results),
    "success_count": success_count,
    "failure_count": failure_count,
    "success_rate": success_count / len(results) if results else 0,
    "results": results
}

with result_path.open("w", encoding="utf-8") as f:
    json.dump(evaluation, f, indent=2, ensure_ascii=False)

print(f"PREDICTIONS_EVALUATED={len(results)}")
print(f"PREDICTIONS_SUCCESS={success_count}")
print(f"PREDICTIONS_FAILURE={failure_count}")
print(f"SUCCESS_RATE={evaluation['success_rate']:.4f}")
