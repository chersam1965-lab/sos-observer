# GSOS Nokia Mini Benchmark

Document-ID: GSOS-LAB-NOKIA-001
Revision: 1.0
Status: EXPERIMENTAL

Purpose:
اختبار نموذج GSOS مصغر على بيانات عامة فقط، مع فصل صارم بين:
Observation
Evidence
Derivation
Interpretation
Prediction
Decision
Documentation

Rules:
1. لا تستخدم أي معلومات سرية أو داخلية تخص Nokia.
2. المصدر الأساسي للبيانات هو ملف benchmark العام الذي تم اعتماده للتجربة.
3. كل Prediction يجب أن يكون مسجلاً قبل Reveal.
4. لا يسمح بتعديل Prediction بعد وقت القطع Cutoff.
5. كل Prediction يجب أن يحتوي على:
   - prediction_id
   - cutoff
   - target
   - predicted_direction
   - confidence
   - evidence_refs
   - falsifiable_condition
6. لا يسمح باستعمال معلومات منشورة بعد Cutoff.
7. يتم الفصل بين:
   Blind Input
   Prediction
   Reveal
   Evaluation
8. Mutation testing يتم على نسخة مؤقتة فقط.
9. هذه التجربة لا تدعي التنبؤ بالمستقبل بشكل خارق.
10. الهدف هو اختبار الانضباط الزمني، provenance، reproducibility، والتحليل.

Safety:
لا يتم تشغيل GSOS Runtime أثناء بناء المختبر.
لا يتم تعديل Founding Charter.
لا يتم تنفيذ git add / commit / push تلقائياً.
