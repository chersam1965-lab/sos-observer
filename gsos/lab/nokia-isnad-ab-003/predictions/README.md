# Prediction Registration

Two files are required:

- baseline-predictions.jsonl
- isnad-predictions.jsonl

Exactly 12 predictions must exist in EACH file.

Each prediction must contain:

case_id
registered_at
cutoff
predicted_direction
confidence
evidence_refs
falsifiable_condition

Confidence must be between 0 and 1.

No reveal information may be present.

The files remain mutable only until FREEZE-A / FREEZE-B.
After freeze, historical prediction content must not be altered.
