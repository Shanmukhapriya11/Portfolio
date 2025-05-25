// components/ChatBot.js
import { useState } from "react";

export default function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    const res = await fetch("/api/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await res.json();
    setResponse(data.answer || "Something went wrong.");
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Ask me anything 🤖</h2>
      <textarea
  rows={3}
  className="w-full p-2 border rounded mb-4"
  placeholder="Type your question..."
  value={prompt}
  onChange={(e) => setPrompt(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent newline
      handleSend();
    }
  }}
/>

      <button
        onClick={handleSend}
        className="bg-purple-200 text-purple-900 px-4 py-2 rounded hover:bg-purple-300"
      >
        {loading ? "Thinking..." : "Send"}
      </button>
      {response && (
        <div className="mt-4 p-3 border rounded bg-gray-100 whitespace-pre-wrap">
          {response}
        </div>
      )}
    </div>
  );
}
