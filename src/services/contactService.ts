import { API_URL } from "../constants";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// The API runs on Render's free tier, which sleeps when idle and can take
// up to ~60s to wake up on the first request.
const REQUEST_TIMEOUT_MS = 70_000;

/**
 * Fire-and-forget request so the server starts waking up before the user
 * submits the form.
 */
export const wakeUpContactApi = () => {
  fetch(`${API_URL}/health`).catch(() => {
    // Ignored: this is only a warm-up call.
  });
};

export const sendContactForm = async (formData: ContactFormData) => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error("Error al enviar el formulario.");
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutId);
  }
};
