# GSOS Nokia Mini Benchmark — Prediction Rules

Document-ID: GSOS-LAB-NOKIA-PRED-001
Revision: 1.0
Status: FROZEN-BEFORE-REVEAL

Principle:

Prediction MUST be registered before Reveal.

Temporal dimensions:

T-NEAR:
Short synthetic horizon.

T-FAR:
Longer synthetic horizon.

Spatial dimensions:

S-NEAR:
Local synthetic zone.

S-FAR:
Distant synthetic zone.

Important:

The spatial zones are synthetic.
They are NOT Nokia geographic locations.

No confidential Nokia information is permitted.

Each prediction must contain:

prediction_id
card_id
registered_at
cutoff
horizon
spatial_scope
target
predicted_direction
confidence
evidence_refs
falsifiable_condition

Prediction immutability:

After registration, the prediction file must not be modified.

Evaluation must compare the frozen prediction against the later Reveal.

No hindsight correction is permitted.

A prediction may be wrong.
A wrong prediction is valid experimental evidence.

The experiment measures:

1. temporal discipline
2. spatial reasoning
3. confidence discipline
4. evidence traceability
5. falsifiability
6. reproducibility
7. false alarms
8. calibration
9. hindsight resistance
