# GSOS-APP-003 - دراسة Nokia العميقة وإعادة اختبار المختبر النموذجي

Document-ID: GSOS-APP-003
Revision: 1.0
Date: 2026-09-05
Status: COMMITTEE-READY / RESEARCH ENHANCEMENT


<!-- PAGE 01/50 -->

## الغلاف - GSOS-APP-003

### دراسة Nokia العميقة: إعادة بناء الدليل والتحليل والاختبار التنبؤي

ملحق أكاديمي/تقني جديد يبني على مختبر Nokia الأول ويستهدف سد نواقصه: محدودية العينة، synthetic reveal، غياب المقارنة مع baselines، وغياب التكرار المستقل. هذا الملحق لا يغيّر السجلات السابقة ولا يعيد كتابة أي نتيجة تاريخية.

- Document-ID: GSOS-APP-003
- Revision: 1.0
- تاريخ الوثيقة: 2026-09-05
- حالة الوثيقة: COMMITTEE-READY / RESEARCH ENHANCEMENT
- نطاق البحث: تاريخ Nokia، بياناتها المفصح عنها، ومقترح اختبار GSOS المحكم

*Sources / provenance: M2 + official sources*


<!-- PAGE 02/50 -->

## الصفحة 2 - سؤال الدراسة

### من ماذا نريد أن نعرف عن Nokia؟

السؤال ليس: هل تستطيع GSOS أن تقول إن Nokia ستنجح أو تفشل؟ بل: هل تستطيع GSOS أن تستخرج إشارات مبكرة من سجل موثق، وتفصل بين الخبر والاتجاه والاستنتاج، ثم تنتج فرضية قابلة للتكذيب قبل ظهور النتيجة؟

- القراءة: استخراج الوقائع.
- التحليل: ربط الوقائع بمسارات التحول.
- التنبؤ: اتجاه/احتمال/أفق زمني محدد.
- التقييم: مقارنة التنبؤ بقاعدة معلنة قبل reveal.

*Sources / provenance: M1 p1 + M2 pp1-3*


<!-- PAGE 03/50 -->

## الصفحة 3 - حدود الدراسة

### ما نعلن وما نحجب

الإخفاء المقبول في المختبر هو حجب المعلومات السرية أو الشخصية أو الأمنية غير المصرح بها. أما البيانات التي تلزم لتقييم الفرضية فلا يجوز إخفاؤها بعدياً لأنها تؤثر في صلاحية الاختبار. لذلك يعتمد الملحق على بيانات عامة ومجمعة فقط، ويمنع كشف أي credentials أو بيانات داخلية أو مواقع بنية حرجة غير معلنة.

- معلن: الأرقام المنشورة، التواريخ، المعاملات، مؤشرات الأعمال.
- محجوب: أي بيانات سرية/شخصية/أمنية غير عامة.
- غير مسموح: تعديل الحقيقة المنشورة لإرضاء الفرضية.

*Sources / provenance: M1 p3 + M2 p37-39 + protocol principles*


<!-- PAGE 04/50 -->

## الصفحة 4 - مصدر البحث

### ملف Nokia المرفوع + مصادر التحقق

المادة المرفوعة تتكون من ملحق مختبر GSOS سابق وملحق بحث Nokia من 50 صفحة. تم استعمالهما كنقطة انطلاق، ثم تم التحقق من الوقائع الحساسة بأحدث صفحات Nokia الرسمية وSEC عند الحاجة. عندما تختلف طبقة الوصف عن رقم محاسبي أو معلومة منشورة، يحتفظ البحث بمصدرها ولا يسوي الفرق بصمت.

| الطبقة | المصدر | وظيفته |
|---|---|---|
| M1 | GSOS_Nokia_Lab_Appendix(1).docx | إجراءات المختبر وقيوده السابقة |
| M2 | Nokia_Research_Data_Appendix(4).pdf | التسلسل التاريخي والأرقام المختارة |
| N1-N17 | Nokia/SEC/Microsoft | تدقيق الوقائع وتعزيز provenance |

*Sources / provenance: M1 + M2 + N1-N17*


<!-- PAGE 05/50 -->

## الصفحة 5 - منهج نقد المصدر

### لماذا لا يكفي مصدر واحد؟

كل رقم له ثلاثة أسئلة: من نشره؟ متى؟ وبأي تعريف؟ التقرير السنوي قد يكون المصدر الأساسي، لكن إعادة تصنيف القطاعات أو المقياس comparable/reported قد تغير معنى المقارنة. لذلك يطلب GSOS في النسخة المحسنة سجل مصدر + تاريخ + تعريف المقياس + checksum + مرجع ثانوي عند الحاجة.

- Source identity
- Publication time
- Metric definition
- Cross-check
- Conflict flag

*Sources / provenance: M2 p22 + N2 + N5*


<!-- PAGE 06/50 -->

## الصفحة 6 - قواعد مستلهمة من علم الحديث

### تشابه منهجي لا مساواة بين مجالين

يستفيد المختبر من بعض مبادئ نقد الرواية بوصفها استعارة منهجية للتوثيق: فالإسناد يذكّرنا بسلسلة النقل، وضبط الناقل يذكّرنا بتقييم موثوقية المصدر، ونقد المتن يذكّرنا بفحص الاتساق الداخلي. لكن هذا لا يجعل التقرير المالي حديثاً، ولا يحول منهج النقد التقليدي إلى برهان إحصائي؛ في GSOS تبقى قواعد الإثبات العلمي والتجريبي مستقلة.

- سلسلة النقل -> provenance chain
- الضبط -> source quality
- نقد المتن -> internal consistency
- جمع الطرق -> corroboration
- العلة/الشذوذ -> anomaly & contradiction testing

*Sources / provenance: N2 + N3 + N4 + scholarly hadith methodology*


<!-- PAGE 07/50 -->

## الصفحة 7 - الإسناد الرقمي المقترح

### تحويل الفكرة إلى بروتوكول قابل للبرمجة

يجب أن يتحول كل claim إلى سجل machine-readable يربط المصدر بالنسخة والوقت والناتج. بهذه الطريقة يمكن للجنة أن تتعقب لماذا ظهرت إشارة ما، وما إذا كان المصدر قد أضيف بعد cutoff، وما إذا كان التحليل يعتمد على بيانات لم تكن متاحة وقت التنبؤ.

| الحقل | المعنى |
|---|---|
| source_id | هوية المصدر |
| published_at | زمن النشر |
| retrieved_at | زمن الإدخال |
| metric_definition | تعريف الرقم |
| hash | بصمة الملف |
| corroboration | مصادر مؤيدة/مخالفة |
| status | verified / disputed / synthetic |

*Sources / provenance: M1 + M2 + protocol design*


<!-- PAGE 08/50 -->

## الصفحة 8 - نقد المتن

### الاتساق الداخلي قبل الاستنتاج

في تحليل Nokia يجب ألا تؤخذ عبارة مثل 'النمو قوي' منفصلة عن تعريف المقياس. على سبيل المثال، Q2 2026 يجمع بين نمو 9% للمبيعات على أساس constant currency، ونمو 8% reported، بينما reported operating margin بلغ -1% مقابل comparable operating margin 9%. القراءة الصحيحة لا تختار الرقم الأكثر إيجابية، بل تشرح سبب الاختلاف.

| المؤشر Q2 2026 | Comparable | Reported |
|---|---|---|
| Gross margin | 46.0% | 44.6% |
| Operating margin | 9.0% | -1.0% |
| Diluted EPS | €0.07 | €0.00 |

*Sources / provenance: N4 / M2 pp29-31*


<!-- PAGE 09/50 -->

## الصفحة 9 - الخط الزمني العام

### Nokia كعملية إعادة اختراع متتابعة

السمة الأكثر ثباتاً في تاريخ Nokia ليست الهاتف نفسه بل القدرة - وأحياناً الحاجة - على إعادة تعريف مركز الشركة. من مصنع لبّ الورق سنة 1865 إلى اندماج 1967، ثم الاتصالات المحمولة، ثم قيادة الهواتف، ثم بيع Devices & Services، ثم التركيز على الشبكات وIP والبصريات، ثم AI-native networking.

*Sources / provenance: M2 pp4-12 + N1*


<!-- PAGE 10/50 -->

## الصفحة 10 - 1865 إلى 1967

### مرحلة التنويع الصناعي

بدأت Nokia كمنشأة لبّ ورق سنة 1865، ثم توسعت إلى أعمال المطاط والكابلات، قبل تشكيل Nokia Corporation سنة 1967 عبر دمج Nokia Ab وFinnish Rubber Works وFinnish Cable Works. هذه المرحلة مهمة للمختبر لأنها توضح أن 'هوية الشركة' تاريخياً كانت قابلة لإعادة التركيب.

| السنة | الحدث |
|---|---|
| 1865 | أول مصنع لبّ ورق |
| 1871 | توسع قرب Nokianvirta |
| 1898 | Finnish Rubber Works |
| 1912 | Finnish Cable Works |
| 1967 | تشكيل Nokia Corporation |

*Sources / provenance: M2 p4 + N1*


<!-- PAGE 11/50 -->

## الصفحة 11 - السبعينيات والثمانينيات

### الإلكترونيات والاتصالات المتنقلة

في السبعينيات اتسع حضور الإلكترونيات والاتصالات. مع دخول NMT في 1981 وMobira Cityman في 1987 بدأت البنية التي ستصبح لاحقاً مركزاً عالمياً للأجهزة المحمولة. وفق منهج GSOS، هذه ليست 'قفزة واحدة' بل تراكم capability ثم market fit.

- Capability: electronics
- Network linkage: NMT
- Product proof: Mobira Cityman
- Early signal: mobility becomes strategic

*Sources / provenance: M2 p5 + N1*


<!-- PAGE 12/50 -->

## الصفحة 12 - 1990 إلى 1994

### GSM كإشارة تحول تقني

كان الانتقال إلى GSM نقطة مفصلية لأن Nokia لم تعتمد فقط على بيع جهاز، بل دخلت في دورة معيارية وشبكية قابلة للتوسع. في 1994 توسعت سلسلة الهواتف، وفي 1991 ارتبط اسم Nokia بأول مكالمة GSM على شبكة Nokia في فنلندا وفق المادة البحثية.

- قراءة أكاديمية: standard alignment + manufacturing scale.
- قراءة شعبية: الشركة اختارت موجة تقنية جديدة قبل أن تصبح سوقاً جماهيرياً.

*Sources / provenance: M2 p5 + N1*


<!-- PAGE 13/50 -->

## الصفحة 13 - 1995 إلى 1999

### من الهاتف إلى المنصة الاستهلاكية

تجمع الفترة بين توسع الهواتف، Communicator في 1996، والقيادة العالمية التي يشير إليها المصدر في 1998. المهم للـGSOS ليس شعار 'الأكبر' فقط، بل كيفية توافق العلامة والتوزيع والتصنيع والمعيار مع السوق.

| السنة | المؤشر |
|---|---|
| 1996 | Nokia 9000 Communicator |
| 1998 | قيادة عالمية في الهواتف وفق Nokia history |
| 1999 | WAP-era products |
| 2000 | Nokia 3310 من أشهر الهواتف الجماهيرية |

*Sources / provenance: M2 p6 + N1*


<!-- PAGE 14/50 -->

## الصفحة 14 - 2007: ذروة الحجم وبداية الإنذار

### النجاح قد يخفي تغيير قواعد اللعبة

تقرير Nokia لعام 2007 يذكر صافي مبيعات قدره EUR 51.058bn، مع استمرار قوة Mobile Phones وارتفاع Multimedia وEnterprise Solutions. في الوقت نفسه، كان السوق يتحول من hardware-centric إلى smartphone/platform-centric. لذلك يميز GSOS بين قوة النتيجة الحالية وبين جودة موقع الشركة أمام التحول القادم.

*Sources / provenance: N17 + N5 + M2*


<!-- PAGE 15/50 -->

## الصفحة 15 - تشبع نموذج الهاتف

### عندما لا يعود التفوق في الجهاز كافياً

المصدر السابق يشرح أن نجاح Nokia في الهواتف ارتكز على scale والتوزيع والعلاقات مع المشغلين والعلامة والجودة وفهم GSM. لكن هذه الميزات لا تنتقل تلقائياً إلى حرب المنصات عندما يصبح النظام والتطبيقات والمطورون والخدمات السحابية عوامل مركزية.

- ميزة الأمس: scale
- قاعدة المنافسة الجديدة: ecosystem
- خطر GSOS: استمرار وزن المؤشر القديم بعد تغير البيئة

*Sources / provenance: M2 pp43-44 + N15-N16*


<!-- PAGE 16/50 -->

## الصفحة 16 - 2009-2010

### إشارة كمية إلى بداية تآكل القيادة

وفق مراجعة Nokia لعام 2010، بلغ حجم أجهزة Nokia 452.9 مليون وحدة، بينما قدر نصيبها من سوق الأجهزة المحمولة بنحو 32% مقابل 34% في 2009. وفي converged mobile devices قدر النصيب بـ36% مقابل 39%. هذه أرقام قابلة للاختبار وهي أفضل بكثير من وصف مبهم مثل 'بدأت Nokia في التراجع'.

*Sources / provenance: N14*


<!-- PAGE 17/50 -->

## الصفحة 17 - الهواتف المتقاربة

### الأرقام تبين التغير في نوع الطلب

تراجع حصة Nokia في converged devices من تقدير 39% في 2009 إلى 36% في 2010، رغم بقاء الحجم الكلي للشركة ضخماً. هذا فرق مهم للمختبر: قد تنمو الشركة في وحدة قياس كلية بينما تضعف في المسار الذي يقود القيمة المستقبلية.

*Sources / provenance: N14*


<!-- PAGE 18/50 -->

## الصفحة 18 - 2011

### الشركة نفسها تعلن أن المنافسة أصبحت حرب بيئات

في وثائق 2011 تشرح Nokia أن المنافسة في الهواتف أصبحت 'war of ecosystems' وأن Android وiOS يرفعان حواجز الدخول. كما أعلنت Nokia في فبراير 2011 الشراكة مع Microsoft وجعل Windows Phone المنصة الأساسية للهواتف الذكية.

- هذه الصفحة مثال ممتاز لتجربة GSOS: تصريح رسمي + مؤشر سوق + قرار استراتيجي.
- في إعادة الاختبار يجب حفظ ما كان معروفاً في cutoff 2011 ثم منع الاطلاع على 2012-2014 أثناء التنبؤ.

*Sources / provenance: N15 + N16 + M2 p8*


<!-- PAGE 19/50 -->

## الصفحة 19 - 2012

### Lumia كاستجابة، لكن بضغط زمني

إطلاق Lumia لم يكن مجرد منتج جديد، بل محاولة لإعادة بناء ecosystem في فترة كان فيها المنافسون قد حققوا زخماً. التجربة الأولى لـGSOS لم تكن مجهزة لقياس 'سرعة التحول' كمتغير صريح؛ لذلك يجب أن تضيف النسخة القادمة lead-time وtime-to-market إلى سجل الأدلة.

- متغير جديد: strategic response lag
- متغير جديد: ecosystem adoption gap
- اختبار: هل الاستجابة اللحظية تكفي عندما تكون المنصة السابقة في تراجع؟

*Sources / provenance: M2 p8 + N15-N16*


<!-- PAGE 20/50 -->

## الصفحة 20 - 2013

### شراء حصة Siemens في NSN

في يوليو 2013 أعلنت Nokia شراء كامل حصة Siemens البالغة 50% في Nokia Siemens Networks مقابل EUR 1.7bn. أغلقت الصفقة في أغسطس وأصبحت NSN شركة مملوكة بالكامل لـNokia. في قراءة ما بعد الحدث، يبدو القرار مهماً لأنه جهز أصلاً قائماً يمكن أن يصبح مركز الشركة بعد خروج الهاتف.

- دليل القرار: صفقة EUR 1.7bn
- دليل الملاءمة: NSN في mobile broadband وLTE
- استنتاج GSOS: option value لإعادة تمركز الشركة

*Sources / provenance: Nokia 2013 acquisition of Siemens stake + M2 p8*


<!-- PAGE 21/50 -->

## الصفحة 21 - 2014

### بيع Devices & Services كقطع مسار، لا اختفاء

أكملت Nokia في 25 أبريل 2014 بيع معظم Devices & Services إلى Microsoft. أعلنت Nokia أن السعر كان EUR 5.44bn عند الإعلان، مع توقع تعديل نهائي إيجابي طفيف. الحدث يصلح كحالة نموذجية لتدريب GSOS على اكتشاف أن 'بيع النشاط الأشهر' قد يكون بداية إعادة تموضع وليس نهاية الشركة.

- ما يعلن: تاريخ الإغلاق، طبيعة الصفقة، السعر المعلن.
- ما لا يستنتج مباشرة: نجاح الصفقة وحده لا يثبت نجاح الاستراتيجية الطويلة.

*Sources / provenance: N6 + M2 pp8,21,45*


<!-- PAGE 22/50 -->

## الصفحة 22 - 2014 بعد البيع

### Nokia بثلاثة محاور

بعد الصفقة خرجت Nokia بهيكل يتمحور حول Nokia Networks وHERE وNokia Technologies. هذه اللحظة يجب أن تُعامل في المختبر كـregime change: لا يجوز تدريب نموذج المستقبل على أرقام قديمة كما لو أن حدود النشاط لم تتغير.

*Sources / provenance: N6 + Nokia 2014 Annual Report cited in source search*


<!-- PAGE 23/50 -->

## الصفحة 23 - 2015-2016

### Alcatel-Lucent: انتقال من إعادة التموضع إلى إعادة بناء عميقة

أعلنت Nokia في 2015 صفقة All-share لقيمة EUR 15.6bn fully diluted لدمج Alcatel-Lucent. وفي 2016 اكتمل الاستحواذ بعد امتلاك ما يقارب 80% في أوائل السنة ثم الوصول للملكية الكاملة في نوفمبر. هذا ليس مجرد acquisition؛ إنه إعادة تركيب لقدرات fixed/IP/optical/mobile وبحث Bell Labs.

*Sources / provenance: N7 + N2/M2 pp13-17*


<!-- PAGE 24/50 -->

## الصفحة 24 - Bell Labs

### الأصل المعرفي في الشركة الجديدة

بعد Alcatel-Lucent دخل Bell Labs ضمن Nokia. في 2025 احتفل Bell Labs بمئويته، وتذكر Nokia عشرة جوائز نوبل وخمس جوائز Turing. من منظور GSOS، قيمة Bell Labs ليست 'علامة' فقط؛ إنها طبقة R&D طويلة الأجل يمكن أن تنتج إشارات مستقبلية قبل الإيراد.

- البحث الأساسي: long horizon
- البحث التطبيقي: bridge to product
- إشارة GSOS: لا تساوي البحث بالإيراد، بل تعامل معه كleading indicator محتمل.

*Sources / provenance: N13 + M2 pp15-16*


<!-- PAGE 25/50 -->

## الصفحة 25 - 2016-2020

### محفظة الاستحواذ كشبكة إشارات

تسجل مادة Nokia المرفوعة سلسلة استحواذات في network management/security، wireless connectivity، location analytics، software/network operations، optical semiconductors وغيرها. النموذج الأفضل لا يقرأ كل صفقة منفردة؛ بل يكتشف clusters متكررة في capabilities.

| Cluster | أمثلة من المادة |
|---|---|
| Security/analytics | Nakina, Deepfield, Comptel |
| Wireless/location | Unium, SpaceTime Insights |
| Optics | Elenion |
| Defense | Fenix |
| Optics/webscale | Infinera |

*Sources / provenance: M2 pp18-20 + N2/N9/N8*


<!-- PAGE 26/50 -->

## الصفحة 26 - 2024

### Fenix وارتفاع أهمية الاتصالات الحرجة

أكملت Nokia في 22 مايو 2024 استحواذ Fenix Group، المتخصصة في حلول الاتصالات التكتيكية للدفاع. قيمة الحدث في نموذج GSOS أنه يكشف تنويعاً من telecom operator إلى mission-critical connectivity. يجب أن يتحقق المختبر من هذه الإشارة دون كشف أي بيانات تكتيكية أو أمنية غير عامة.

- معلن: acquisition completion والـcapability العام.
- محجوب: أي تفاصيل تشغيلية حساسة غير منشورة.
- تحليل: diversification into resilient connectivity.

*Sources / provenance: N9 + M2 p38*


<!-- PAGE 27/50 -->

## الصفحة 27 - 2025

### Infinera وتعميق optical/webscale

في 2024 أعلنت Nokia اتفاق Infinera بقيمة enterprise value قدرها US$2.3bn، مع هدف EUR 200m من synergies في comparable operating profit بحلول 2027، ثم أُغلقت الصفقة في 28 فبراير 2025. هذه إحدى أقوى الحالات لاختبار GSOS على merger logic: capability gap + customer diversification + AI-era optical demand.

*Sources / provenance: N8 + M2 pp20,35,46*


<!-- PAGE 28/50 -->

## الصفحة 28 - قاعدة 2025 المالية

### خط أساس يجب ألا يختلط بتنبؤات 2026

بلغت المبيعات في 2025 EUR 19.889bn مقابل EUR 19.220bn في 2024. ارتفع R&D expense إلى EUR 4.855bn من EUR 4.512bn، بينما انخفض reported operating profit من EUR 1.970bn إلى EUR 885m. هذه التباينات تعلمنا أن growth في sales قد يتعايش مع ضغط على reported profit.

*Sources / provenance: N2 + N5*


<!-- PAGE 29/50 -->

## الصفحة 29 - قاعدة الموظفين

### 78 ألف موظف ومتوسط التوزيع الإقليمي

بلغ متوسط عدد موظفي Nokia نحو 78 ألفاً في 2025. أوروبا 33 ألفاً، الهند 18.3 ألفاً، أمريكا الشمالية 10 آلاف، Greater China 7.2 آلاف، والبقية موزعة على مناطق أخرى. هذا مثال على spatial evidence آمن لأنه مجمع ومعلن، وليس بيانات مواقع بنية تحتية حساسة.

*Sources / provenance: N2 + N5 + M2 p24*


<!-- PAGE 30/50 -->

## الصفحة 30 - العملاء

### تحول الطلب من operator-centric إلى AI & Cloud وMission Critical

في 2025 بلغت مبيعات telecom providers حوالي EUR 15.313bn، بينما بلغت AI & Cloud and Mission Critical Enterprise & Defense نحو EUR 3.085bn، وLicensees نحو EUR 1.501bn. هذه الخريطة تساعد GSOS على تحليل تنويع الطلب وليس فقط total sales.

*Sources / provenance: N5 + M2 p23*


<!-- PAGE 31/50 -->

## الصفحة 31 - نموذج 2026 الجديد

### Network Infrastructure + Mobile Infrastructure

اعتباراً من 1 يناير 2026 تبنت Nokia نموذجاً مبسطاً بقطاعين أساسيين: Network Infrastructure وMobile Infrastructure، مع أعمال portfolio في نطاق أصغر. هذا التغيير يجب أن يكون 'change point' صريحاً في أي نظام يتعلم من سلسلة زمنية؛ وإلا فقد يحسب النمو أو الهبوط على تصنيف أصبح غير مماثل.

| 2026 segment | المكونات الرئيسية |
|---|---|
| Network Infrastructure | Optical Networks / IP Networks / Fixed Networks |
| Mobile Infrastructure | Core Software / Radio Networks / Technology Standards |
| Portfolio | Selected non-core units |

*Sources / provenance: N2/N3/N4 + M2 p26*


<!-- PAGE 32/50 -->

## الصفحة 32 - Q1 2026

### بداية قوية خصوصاً في Optical وAI & Cloud

في Q1 2026 ارتفعت comparable net sales 4% constant currency and portfolio basis. نما Network Infrastructure بنسبة 6%، وOptical Networks بنسبة 20%، وAI & Cloud customer sales بنسبة 49%. كما سجلت Nokia نحو EUR 1bn من AI & Cloud orders في الربع.

*Sources / provenance: N3 + M2 p27*


<!-- PAGE 33/50 -->

## الصفحة 33 - Q2 2026

### تسارع الإشارة بدلاً من مجرد استمرارها

في Q2 2026 ارتفعت مبيعات المجموعة 9% على أساس constant currency و8% reported. نما Network Infrastructure بنسبة 12%، Optical 20%، IP 16%، وارتفعت مبيعات AI & Cloud customers بنسبة 105%. وسجل AI & Cloud order intake بقيمة EUR 2.8bn.

*Sources / provenance: N4 + M2 pp27-30*


<!-- PAGE 34/50 -->

## الصفحة 34 - Q2 margins

### نقد الرقم قبل استعماله في التنبؤ

المقارنة بين comparable وreported هي مثال ممتاز على نقد المتن: gross margin comparable 46% مقابل 44.6% reported، وoperating margin comparable 9% مقابل -1% reported. الفرق يرتبط جزئياً بوتيرة restructuring والعناصر التي تدخل في reported presentation.

*Sources / provenance: N4*


<!-- PAGE 35/50 -->

## الصفحة 35 - R&D

### الإنفاق على المستقبل لا يعني نجاحاً تلقائياً

ارتفع R&D expense في 2025 إلى EUR 4.855bn. منهج GSOS يجب أن يتجنب مغالطة: 'R&D أعلى = نجاح مضمون'. الصحيح: R&D قد يكون leading indicator، لكن يجب اختبار تحويله إلى patents/standards/product wins/orders/margin.

*Sources / provenance: N5*


<!-- PAGE 36/50 -->

## الصفحة 36 - AI & Cloud

### من signal قوي إلى فرضية قابلة للتكذيب

الـ49% في Q1 ثم 105% في Q2 إشارة قوية داخل المجموعة، لكن التنبؤ الجيد يسأل عن الاستمرارية والتحويل إلى revenue. Nokia قالت إن نحو نصف EUR 2.8bn من Q2 AI & Cloud orders متوقع أن يتحول إلى revenue خلال 12 شهراً. هنا يظهر الفرق بين order signal وrecognized revenue.

*Sources / provenance: N3 + N4*


<!-- PAGE 37/50 -->

## الصفحة 37 - Optical Networks

### لماذا البصريات أصبحت مركزية في عصر AI

تحسن الطلب على البصريات لأن AI workloads تحتاج روابط عالية السعة ومنخفضة الكمون داخل وبين مراكز البيانات. Infinera عمّقت قدرات Nokia في optical، بينما Q1 وQ2 2026 سجلا نمواً 20% في Optical Networks. هذا يخلق hypothesis: 'Optical growth may persist if AI infrastructure capex remains strong' - لكن يجب اختبارها ضد supply constraints والمنافسة.

*Sources / provenance: N3 + N4 + N8*


<!-- PAGE 38/50 -->

## الصفحة 38 - IP Networks

### الإشارة التي قد تكمل optical

في Q2 2026 نما IP Networks بنسبة 16%، وفي Q1 قالت Nokia إن IP pipeline مدفوع بتصميمات جديدة داخل AI & Cloud use cases. النموذج لا يجب أن يكتفي بنمو الإيراد؛ بل يجمع pipeline + order intake + customer mix + product roadmap.

- leading: pipeline
- intermediate: orders
- lagging: revenue
- quality: margin/cash conversion

*Sources / provenance: N3 + N4 + M2 p27*


<!-- PAGE 39/50 -->

## الصفحة 39 - 2026 guidance

### المدى لا الرقم المفرد

الـ2026 guidance المعدل يضع comparable operating profit بين EUR 2.1bn وEUR 2.6bn، مع نمو Network Infrastructure 12-14% وcombined Optical + IP target growth 18-20%. للـGSOS، المدى أكثر صدقاً من إعطاء نقطة واحدة؛ لأن التوقعات مشروطة بسوق وFX وexecution.

*Sources / provenance: N3 + N4 + M2 p32*


<!-- PAGE 40/50 -->

## الصفحة 40 - AI-native RAN

### من AI على الشبكة إلى AI داخل الشبكة

في 15 يوليو 2026 أعلنت Nokia منصة AI-native RAN تجارية مبنية على anyRAN وNVIDIA Aerial AI-RAN، مع طموح معلن لأكثر من 100% gain في spectral efficiency بحلول 2028. في المختبر يجب تصنيف هذا كـcompany claim / forward-looking technical ambition وليس كحقيقة مستقبلية محققة.

- Evidence class: announced product/platform
- Claim class: forward-looking ambition
- Test class: later independent performance evidence

*Sources / provenance: N10 + M2 p33*


<!-- PAGE 41/50 -->

## الصفحة 41 - Autonomous Networks

### الأتمتة كمؤشر بنيوي

تتحدث Nokia عن Agent Library وAutonomous Networks Suite وMantaRay SMO وagentic AI frameworks. في 1 سبتمبر 2026 أعلنت مركز R&D في الرياض يركز على AI-powered network automation وorchestration، مع أهداف مثل self-configure وself-heal وoptimize. هذه الإشارة أكثر قوة من مجرد marketing slogan لأنها مرتبطة ببنية بحث وتطوير معلنة، لكنها لا تزال لا تثبت أثراً مالياً نهائياً.

*Sources / provenance: N11 + M2 p34*


<!-- PAGE 42/50 -->

## الصفحة 42 - Cybersecurity

### نموذج GSOS يجب أن يفصل الحماية عن الادعاء

المادة المرفوعة تذكر Security by design وDeepfield Genome Shield وASTaR وquantum-resilient security. المطلوب منهجياً هو عدم تحويل وجود منتج أمني إلى ادعاء أن Nokia 'آمنة'. على النموذج قياس capabilities المعلنة، حالات النشر، الاختبارات المستقلة حيث تتوفر، والحوادث أو الثغرات المنشورة.

- معلن: capability
- متحقق: test result
- غير مسموح: general safety claim بدون evidence

*Sources / provenance: M2 p37 + N13/N11*


<!-- PAGE 43/50 -->

## الصفحة 43 - Defense

### التوسع في mission-critical connectivity

توسع Nokia في defense عبر Fenix يوضح انتقالاً إلى مجالات اتصال حرجة. من منظور المختبر، defense يوفر إشارات مهمة لكن يتطلب حداً أعلى من الحجب لأن بعض البيانات التشغيلية قد تكون حساسة. لذلك يستخدم GSOS aggregated public data فقط.

*Sources / provenance: N9 + N11 + M2 p38*


<!-- PAGE 44/50 -->

## الصفحة 44 - Space

### اختبار الابتكار بعيد المدى

أعلنت Nokia في 2025 أن شبكة LTE القمرية ضمن IM-2 وصلت إلى القمر وفعّلت ونقلت بيانات تشغيلية، لكنها لم تنجح في إجراء أول مكالمة خلوية على القمر بسبب قيود القدرة بعد الهبوط. هذه حالة تعليمية ممتازة: النجاح الجزئي لا يتحول إلى 'نجاح كامل' عند التوثيق.

- Success: network activated + operational data
- Failure: first cellular call not achieved
- Academic lesson: preserve both

*Sources / provenance: N12 + M2 p39*


<!-- PAGE 45/50 -->

## الصفحة 45 - Bell Labs و6G

### الحاضر يقود إلى أفق أبعد

تذكر Nokia أن Bell Labs بدأت أبحاث 6G في 2018، وأن العمل الحالي يجمع AI/software، sensing، quantum، network fundamentals وautomation. في النموذج، هذه إشارات long-horizon وليست تنبؤاً مؤكداً بالإيرادات. يجب بناء bridge من research -> standard -> patent -> product -> customer -> revenue.

*Sources / provenance: N13 + M2 pp36,40-41*


<!-- PAGE 46/50 -->

## الصفحة 46 - قراءة أسباب الصعود والهبوط

### منطق سببي متعدد العوامل

ارتفاع Nokia في عصر الهواتف لم ينتج من عامل منفرد: scale، distribution، operator relationships، brand، reliability، GSM timing. وفي الهبوط ظهرت ecosystem competition وapp stores وtouchscreen smartphones وcloud services وexecution speed. لذلك لا ينبغي لـGSOS أن يستبدل قصة أحادية العامل بنظرية أحادية العامل جديدة.

| مرحلة | محرك رئيسي | إشارة تحذير |
|---|---|---|
| Handset rise | Scale + GSM + distribution | قلة ضغط ecosystem |
| Smartphone disruption | iOS/Android ecosystems | Platform gap |
| Pivot | Network/IP/optical capabilities | Integration risk |
| AI era | AI & Cloud + optical/IP | Order conversion + competition |

*Sources / provenance: M2 pp43-48 + N14-N16*


<!-- PAGE 47/50 -->

## الصفحة 47 - إصلاح التجربة الأولى

### ما الذي يجب أن يتغير في GSOS؟

التقييم السابق خلص إلى أن المختبر صالح كـprotocol demonstrator وليس دليلاً عاماً على forecasting. التغيير الحقيقي الآن هو الانتقال من synthetic reveal صغير إلى retrospective blind hindcasting ثم real temporal holdout لاحقاً، مع baselines وcalibration وindependent replication.

- 1. Blind historical cutoffs
- 2. Baseline competition
- 3. Larger sample
- 4. Calibration
- 5. Independent replication
- 6. Real future holdout لاحقاً

*Sources / provenance: M1 + GSOS-APP-002 + present analysis*


<!-- PAGE 48/50 -->

## الصفحة 48 - بروتوكول الاختبار الجديد

### Near/Far + Space/Domain + blind evaluation

يُعرّف المختبر الجديد أربع خلايا: زمن قريب/بعيد × نطاق قريب/بعيد. في Nokia يمكن تفسير 'المكان' بشكل آمن على مستوى region أو customer/technology domain، لا على مستوى مواقع بنية حرجة. كل prediction يسجل cutoff، evidence refs، direction، probability، falsification rule، ثم يختم قبل reveal.

| البعد | Near | Far |
|---|---|---|
| Time | quarter / next release | 12-24 months |
| Space/domain | region أو business domain قريب | region/domain بعيد |
| Output | direction + probability | scenario + probability |
| Evaluation | Brier + directional hit | Brier + calibration + lead time |

*Sources / provenance: GSOS protocol design + M1/M2*


<!-- PAGE 49/50 -->

## الصفحة 49 - فرضيات إعادة الاختبار

### ما يجب أن يتنبأ به GSOS - دون تسريب النتيجة

لإثبات القدرة يجب أن تُنشأ predictions آلياً أو أمام لجنة مستقلة عند كل cutoff تاريخي، ثم يحجب المستقبل المعروف عن المُتنبئ. أمثلة cutoffs المقترحة: 2007، 2010، 2011، 2013، 2014، 2016، 2020، 2024، 2025. لا نسجل هنا نتائجها المستقبلية في خانة prediction قبل فتحها؛ هذه الصفحة تعرّف experiment فقط.

- كل cutoff ينتج prediction packet مستقل.
- الـreveal يحوي الحدث اللاحق فقط.
- لا يجوز تعديل prediction بعد cutoff.
- يجب مقارنة GSOS بثلاث baselines على الأقل: persistence، trend، rule-based.

*Sources / provenance: N14-N17 + protocol principles*


<!-- PAGE 50/50 -->

## الصفحة 50 - الحكم والخاتمة

### إغلاق الدراسة وفتح الطريق للمرحلة التالية

Nokia حالة اختبار ممتازة لأن تاريخها يجمع بين التنويع، الارتفاع الكبير، اضطراب المنصة، إعادة التموضع، الاستحواذات الكبرى، ثم الانتقال إلى optical/IP وAI-native networking. لكن القيمة العلمية للمختبر لا تأتي من قصة Nokia وحدها. القيمة تأتي عندما يحول GSOS القصة إلى سجل قابل لإعادة البناء: مصدر موثق، cutoff ثابت، تحليل منضبط، prediction قابل للتكذيب، reveal مستقل، scoring، mutation testing، ثم replication.

- النتيجة الحالية: Nokia تثبت غنى البيئة الاختبارية، لا تفوق GSOS تلقائياً.
- الهدف التالي: إثبات أن المنهج يعيد قراءة التحول قبل reveal لا بعده.
- شرط الترقية: real temporal holdout + baselines + calibration + independent replication.
- حالة هذا الملحق: CLOSED FOR RESEARCH DOCUMENTATION / OPEN FOR NEXT EXPERIMENT.

*Sources / provenance: M1 + M2 + N1-N16*
