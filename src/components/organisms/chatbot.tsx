import { useState } from "react";
import { Button } from "../atoms/button";
import { Card } from "../atoms/card";
import { CardContent } from "../atoms/card-content";
import { CardHeader } from "../atoms/card-header";
import { CardTitle } from "../atoms/card-title";
import { API_URL } from "../../constants";

export const Chatbot = () => {
  const [userMessage, setUserMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<
    { role: "user" | "bot"; content: string }[]
  >([]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userMessage.trim()) return;

    setChatHistory((prev) => [...prev, { role: "user", content: userMessage }]);

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      setChatHistory((prev) => [
        ...prev,
        { role: "user", content: userMessage },
        { role: "bot", content: data.reply },
      ]);

      setUserMessage("");
    } catch (error) {
      console.error(error);
      setChatHistory((prev) => [
        ...prev,
        { role: "bot", content: "❌ Hubo un error al conectar con el servidor." },
      ]);
    }
  };

  return (
    <section id="chatbot" className="max-w-md mx-auto mt-8">
      <Card className="glass-card hover-lift">
        <CardHeader>
          <CardTitle className="text-xl gradient-text">
            Chatbot (IA integrada)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-purple-100 dark:bg-purple-800 text-right"
                    : "bg-gray-100 dark:bg-gray-700 text-left"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="mt-4 flex gap-2">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Escribe tu pregunta..."
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
            <Button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Enviar
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};
