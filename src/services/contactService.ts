import { API_URL } from "../constants";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactForm = async (formData: ContactFormData) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Error al enviar el formulario.");
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
