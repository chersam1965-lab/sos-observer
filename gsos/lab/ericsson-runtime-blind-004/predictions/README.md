# Prediction Registration

Stage 1 requirement:

- baseline-predictions.jsonl MUST be empty
- isnad-predictions.jsonl MUST be empty

At the later prediction stage, both tracks must contain exactly 12 cases.

Each runtime-generated record must contain:

case_id
run_id
registered_at
cutoff
predicted_direction
probability_up
evidence_refs
input_sha256
runtime_version

No manually fabricated prediction set is permitted.
