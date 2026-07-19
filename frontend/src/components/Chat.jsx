import { useState } from "react";
import api from "../services/api";

export default function Chat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const ask = async () => {
    const response = await api.post("/chat", {
      question,
    });

    setAnswer(response.data.answer);
  };

  return (
    <div>
      <textarea
        rows="4"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <br />

      <button onClick={ask}>Ask</button>

      <h3>Answer</h3>

      <p>{answer}</p>
    </div>
  );
}