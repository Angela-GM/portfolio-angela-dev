import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `🚀 Nuevo mensaje de ${name} - ${subject}`,
      text: message,
    });

    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error enviando el correo" });
  }
});

const systemPrompt =
  "Eres un chatbot dentro del portfolio de Ángela García Muñoz. Tu tono es cercano, profesional y claro. Respondes sobre proyectos, tecnologías (React, Tailwind, Node.js...), entrevistas y el perfil técnico de Ángela en español.";

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;

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
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
      }),
    });
    const result = await response.json();
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al conectar con la API de OpenAI");
  }
});

app.listen(3001, () => {
  console.log("Servidor listo en http://localhost:3001");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
