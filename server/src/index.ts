import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const RESEND_API_KEY = process.env.RESEND_API_KEY;
// Where the messages arrive. Without a verified domain in Resend, it must be
// the email of the Resend account itself.
const CONTACT_TO = process.env.CONTACT_TO;
// onboarding@resend.dev works without verifying a domain.
const RESEND_FROM = process.env.RESEND_FROM || "Portfolio <onboarding@resend.dev>";

const app = express();

// Comma-separated list, e.g. "https://my-portfolio.com,http://localhost:5173".
// If it's not set, any origin is allowed (previous behaviour).
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors(allowedOrigins?.length ? { origin: allowedOrigins } : undefined));
app.use(express.json());

// Used by the frontend to wake the server up (Render free tier sleeps).
app.get("/api/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

app.post("/api/contact", async (req: Request, res: Response) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  if (!RESEND_API_KEY || !CONTACT_TO) {
    console.error("Faltan RESEND_API_KEY o CONTACT_TO en las variables de entorno");
    return res.status(500).json({ error: "Error enviando el correo" });
  }

  try {
    // Resend's HTTP API instead of SMTP: Render's free tier blocks outgoing
    // SMTP connections, so nodemailer + Gmail hung until it timed out.
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: [CONTACT_TO],
        // Answering the email goes straight to the visitor.
        reply_to: email,
        subject: `🚀 Nuevo mensaje de ${name} - ${subject}`,
        text: `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(15_000),
    });

    if (!response.ok) {
      console.error("Resend respondió", response.status, await response.text());
      return res.status(500).json({ error: "Error enviando el correo" });
    }

    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error enviando el correo" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
