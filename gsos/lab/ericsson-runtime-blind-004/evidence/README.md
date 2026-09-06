# Ericsson Evidence Gate

This stage contains only the evidence contract.

A historical source may enter the prediction evidence pool only when:

publication_date <= historical_cutoff

A current web page is NOT sufficient proof that information was historically
available.

Each evidence snapshot must later include:

- source_id
- publication_date
- retrieval_time
- case_scope
- cutoff_eligibility
- snapshot_file
- snapshot_sha256
- provenance
- source_quality
- corroboration
- contradiction_status

Truth-side sources must be stored separately.

No prediction is valid until the evidence gate reports COMPLETE.
