import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

// Initialize GoogleGenAI SDK
// API Key is fetched from process.env.GEMINI_API_KEY
const getAIClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY environment variable is missing.");
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
};

app.use(express.json());

// API health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Chat completion endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { messages, language } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    const ai = getAIClient();

    // Mapping client messages to the @google/genai format
    const contents = messages.map((m: any) => ({
      role: m.role === "user" ? "user" : "model",
      parts: [{ text: m.content }],
    }));

    // System instruction mapping out-of-scope blocking and white Egyptian dialect requirements
    const systemInstruction = `You are the official AI Tutor Chatbot for "Codai Academy", an educational institution specializing in Data Analysis and Artificial Intelligence.
Your primary role is to act as a smart, friendly, and encouraging assistant to help students understand coding, SQL, Power Query, and AI concepts. You can also debug student code, explain technical topics, and help them succeed in their courses at Codai Academy.

CRITICAL SAFETY & SCOPE CONSTRAINT (STRICTLY ENFORCED):
- You are STRICTLY FORBIDDEN from answering any questions outside of Codai Academy, Computer Science, Coding, Data Analysis, and AI.
- If a student asks about cooking, food, recipes, sports, general knowledge, history, geography, politics, pop culture, movies, or ANYTHING unrelated to computer science, coding, data analysis, and AI (for example: "how to make pasta", "how to make macaroni", "who won the football match", "what is the capital of France", "tell me a joke about animals", "recommend a movie"), you MUST BLOCK THE REQUEST.
- Do NOT provide any answer, hint, advice, or information for the blocked request.
- Instead, you must reply EXACTLY with this message in a polite, slightly humorous Egyptian dialect:
"أنا هنا عشان أساعدك تكون أشطر مهندس ذكاء اصطناعي في كوداي! 😉 سيبك من الموضوع ده دلوقتي وقولي واقف معاك إيه في الكورسات؟"
- Do not translate this blocking message to English, even if the student asked the out-of-scope question in English. Always use this exact Arabic response for any out-of-scope question.

BILINGUAL BEHAVIOR:
- When the current language context is Arabic (language: "ar"), reply in a friendly, helpful, and natural White Egyptian Dialect (اللهجة المصرية البيضاء العامية) that is warm and encouraging.
- When the current language context is English (language: "en"), reply in friendly, clear, and professional English.
- Always be supportive, write clean explanations, and use structured formatting (like markdown, code blocks, lists) when explaining tech concepts or debugging.
- Keep the current language mode is: "${language || 'ar'}".
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      },
    });

    const reply = response.text || "No reply generated.";
    res.json({ reply });
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    res.status(500).json({
      error: error.message || "An error occurred during generating content.",
    });
  }
});

// Vite middleware integration
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
