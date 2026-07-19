import { useState, useRef, useEffect } from "react";
import { SendHorizontal, Bot, User, Copy } from "lucide-react";
import api from "../services/api";

export default function ChatWindow() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Welcome! Upload a document and ask me anything about it.",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function askQuestion() {
    if (!question.trim()) return;

    const userMessage = {
      role: "user",
      content: question,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const res = await api.post("/chat", {
        question,
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: res.data.answer,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Unable to generate an answer.",
        },
      ]);
    }

    setQuestion("");
    setLoading(false);
  }

  function copy(text) {
    navigator.clipboard.writeText(text);
  }

  return (
    <section className="chat-card">

      <h2 className="chat-title">
        Conversation
      </h2>

      <div className="chat-body">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.role}`}
          >
            <div className="avatar">
              {msg.role === "assistant" ? (
                <Bot size={18} />
              ) : (
                <User size={18} />
              )}
            </div>

            <div className="bubble">
              {msg.content}

              {msg.role === "assistant" && (
                <button
                  className="copy-btn"
                  onClick={() => copy(msg.content)}
                >
                  <Copy size={15} />
                </button>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="message assistant">
            <div className="avatar">
              <Bot size={18} />
            </div>

            <div className="bubble">
              Thinking...
            </div>
          </div>
        )}

        <div ref={bottomRef}></div>

      </div>

      <div className="chat-input">

        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything about your document..."
          onKeyDown={(e) =>
            e.key === "Enter" && askQuestion()
          }
        />

        <button onClick={askQuestion}>
          <SendHorizontal size={20} />
        </button>

      </div>

    </section>
  );
}