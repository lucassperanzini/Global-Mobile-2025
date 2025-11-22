import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "../utlis/geminiKey"
import { contentGenerationPrompt } from "../utlis/prompt";
import { UserType } from "../utlis/types/userType"

export async function fetchCareerRecommendations(user: UserType) {
  const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

  const prompt = contentGenerationPrompt(user);

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-lite",
    contents: [
      {
        role: "user",
        parts: [{ text: prompt }],
      },
    ],
  });

  const responseText = response.text as string;

  const cleaned = responseText
    .trim()
    .replace(/^```json/, "")
    .replace(/```$/, "")
    .trim();

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch (err) {
    console.error("Falha ao parsear JSON da IA:", cleaned);
    throw new Error("JSON inválido retornado pela IA");
  }

  if (!parsed.recommendations || !Array.isArray(parsed.recommendations)) {
    throw new Error("Resposta não contém campo 'recommendations'.");
  }

  return parsed.recommendations;
}
