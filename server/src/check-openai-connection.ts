import dotenv from "dotenv";
// Si usas Node.js < 18, descomenta la siguiente línea:
// import fetch from "node-fetch";

dotenv.config();

console.log("API Key:", process.env.OPENAI_API_KEY ? "✅ encontrada" : "❌ no encontrada");

async function checkOpenAIConnection() {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "Eres un asistente de prueba." },
          { role: "user", content: "Hola, ¿puedes confirmar que la conexión funciona?" },
        ],
      }),
    });

    const result = await response.json();

    if (response.ok) {
      console.log("✅ Conexión exitosa con OpenAI:");
      console.dir(result, { depth: null });
    } else {
      console.error("❌ Error en la conexión con OpenAI:");
      console.error(result);
    }
  } catch (error) {
    console.error("❌ Error de red o fetch al conectar con OpenAI:", error);
  }
}

checkOpenAIConnection();
