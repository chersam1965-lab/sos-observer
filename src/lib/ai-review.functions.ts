import { createServerFn } from "@tanstack/react-start";

export type ReviewSection = { id: string; label: string; text: string };
export type ReviewInput = { lang: "en" | "fr" | "ar"; sections: ReviewSection[] };

export type Suggestion = {
  id: string;
  sectionId: string;
  original: string;
  suggested: string;
  type: "spelling" | "grammar" | "style" | "clarity" | "duplication" | "readability";
  explanation: string;
};

export type ReviewResult = {
  suggestions: Suggestion[];
  writingQualityScore: number; // 0-100
  readabilityScore: number; // 0-100
  readabilityLabel: string;
  summary: string;
};

function validate(input: unknown): ReviewInput {
  const v = input as ReviewInput;
  if (!v || !Array.isArray(v.sections) || !["en", "fr", "ar"].includes(v.lang)) {
    throw new Error("Invalid input");
  }
  return v;
}

const SYSTEM = `You are a professional editorial proofreader for analytical/audit reports.
RULES:
- Suggest improvements ONLY. Never modify numerical values, dates, IDs, indicator names, or technical metrics.
- Keep the original technical meaning intact.
- Detect spelling, grammar, conjugation, sentence structure, professional style, readability, duplicated sentences, unclear wording.
- Reply ONLY with JSON. No prose, no markdown fences.
- Preserve the input language (English, French, or Arabic). For Arabic, keep RTL-compatible text.
- Output schema:
{
  "suggestions": [
    {"id":"s1","sectionId":"<input section id>","original":"<exact original snippet>","suggested":"<improved version>","type":"spelling|grammar|style|clarity|duplication|readability","explanation":"<short reason>"}
  ],
  "writingQualityScore": 0-100,
  "readabilityScore": 0-100,
  "readabilityLabel": "<localized: Poor|Fair|Good|Excellent or equivalent>",
  "summary": "<one-sentence localized overall assessment>"
}`;

export const reviewReport = createServerFn({ method: "POST" })
  .inputValidator(validate)
  .handler(async ({ data }): Promise<ReviewResult> => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("Missing LOVABLE_API_KEY");

    const userPayload = {
      language: data.lang,
      sections: data.sections,
      instructions:
        "Review each section. Return suggestions referencing their sectionId. Do not invent text. Do not alter numbers, IDs, or dates.",
    };

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": key,
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: JSON.stringify(userPayload) },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      const txt = await res.text().catch(() => "");
      if (res.status === 429) throw new Error("AI rate limit exceeded. Please retry shortly.");
      if (res.status === 402) throw new Error("AI credits exhausted. Please add credits in workspace settings.");
      throw new Error(`AI gateway error ${res.status}: ${txt.slice(0, 200)}`);
    }

    const json = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    const content = json.choices?.[0]?.message?.content ?? "{}";
    let parsed: ReviewResult;
    try {
      parsed = JSON.parse(content) as ReviewResult;
    } catch {
      throw new Error("AI returned invalid JSON");
    }

    // Normalize + safety
    const suggestions = Array.isArray(parsed.suggestions) ? parsed.suggestions : [];
    return {
      suggestions: suggestions.map((s, i) => ({
        id: s.id || `s${i + 1}`,
        sectionId: String(s.sectionId ?? ""),
        original: String(s.original ?? ""),
        suggested: String(s.suggested ?? ""),
        type: (["spelling", "grammar", "style", "clarity", "duplication", "readability"].includes(s.type)
          ? s.type
          : "style") as Suggestion["type"],
        explanation: String(s.explanation ?? ""),
      })),
      writingQualityScore: clampNum(parsed.writingQualityScore, 0, 100, 75),
      readabilityScore: clampNum(parsed.readabilityScore, 0, 100, 75),
      readabilityLabel: String(parsed.readabilityLabel ?? ""),
      summary: String(parsed.summary ?? ""),
    };
  });

function clampNum(n: unknown, min: number, max: number, fallback: number): number {
  const v = typeof n === "number" ? n : Number(n);
  if (!Number.isFinite(v)) return fallback;
  return Math.max(min, Math.min(max, Math.round(v)));
}
