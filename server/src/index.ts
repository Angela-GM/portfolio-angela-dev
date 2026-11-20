import express, { Request, Response } from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

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

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      // Gmail ignores a "from" outside the authenticated account, so we send
      // from it and use replyTo to answer the visitor directly.
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `🚀 Nuevo mensaje de ${name} - ${subject} - ${email}`,
      text: message,
    });

    res.status(200).json({ message: "Correo enviado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error enviando el correo" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
