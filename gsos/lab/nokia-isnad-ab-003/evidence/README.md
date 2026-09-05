# GSOS-LAB-NOKIA-003 — Time-Bounded Evidence Pack

This directory contains the prediction-side historical evidence boundary.

Rules:

1. A source is prediction-eligible only when its publication date is on or
   before the case cutoff.
2. Later truth sources must never be used in A/B prediction construction.
3. Current web content is not itself proof of historical availability.
4. Each retained snapshot receives a SHA-256 digest.
5. The source manifest records publication date, case scope, eligibility,
   URL and snapshot hash where retrieval succeeds.
6. Missing snapshots must not be silently replaced.
7. ISNAD may evaluate source quality, corroboration, contradictions and
   provenance, but must not introduce post-cutoff information.

This pack does not contain predictions and does not contain truth.

Scientific state:
PREREGISTERED / WAITING FOR A-B PREDICTIONS
