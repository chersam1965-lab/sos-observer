# Runtime Blind Contract

The runtime must create the prediction artifact.

Manual authoring of the prediction result is not valid evidence of runtime
autonomy.

Required runtime record:

- experiment_id
- run_id
- track
- case_id
- cutoff
- evidence_manifest_sha256
- input_sha256
- runtime_version
- generated_at
- predicted_direction
- probability_up
- evidence_refs

The runtime MUST NOT read:

- reveal/truth.json
- future truth files
- scoring-result.json
- final-audit.json
- closure.json

After generation, the runtime output is frozen by SHA-256.

Any manual edit after generation invalidates the run.
