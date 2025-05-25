import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// A concise but comprehensive resume summary
const resumeContext = `
You are a personal AI assistant trained with detailed information about P Shanmukhapriya Sravani, an AI/ML Engineer and Creative NLP enthusiast from Hyderabad, India. 
She graduated in Computer Science with strong skills in AI/ML, NLP, and various projects including blockchain-based credit scoring and AI career counseling. 
She is passionate, visionary, and focuses on ethical real-world solutions. She has skills in Python, Java, TensorFlow, scikit-learn, and cloud platforms like Google Cloud.
Answer recruiter or user questions about her experience, skills, projects, education, and certifications based on this information. If a question is outside this scope, answer politely that you don’t have info on that.
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: resumeContext },
        { role: "user", content: prompt },
      ],
      max_tokens: 300,
      temperature: 0.3,  // Controlled for accuracy, less creative wandering
    });

    const answer = completion.choices[0].message.content;

    res.status(200).json({ answer });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: "OpenAI API request failed" });
  }
}
