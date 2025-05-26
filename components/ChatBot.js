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
    <div className="w-full">
      <h2 className="text-lg md:text-xl font-semibold mb-2 text-purple-900">
        Ask me anything 🤖
      </h2>

      <textarea
        rows={3}
        className="w-full p-2 border border-purple-300 rounded mb-3 text-sm focus:outline-purple-500"
        placeholder="Type your question..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50 transition-all"
      >
        {loading ? "Thinking..." : "Send"}
      </button>

      {response && (
        <div className="mt-4 p-3 border rounded bg-purple-50 text-gray-800 whitespace-pre-wrap text-sm">
          {response}
        </div>
      )}
    </div>
  );
}
