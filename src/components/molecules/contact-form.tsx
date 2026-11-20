import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../atoms/button";
import { CardContent } from "../atoms/card-content";
import { Card } from "../atoms/card";
import { CardHeader } from "../atoms/card-header";
import { CardTitle } from "../atoms/card-title";
import {
  sendContactForm,
  wakeUpContactApi,
  type ContactFormData,
} from "../../services/contactService";

const EMPTY_FORM: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

type FormStatus = "idle" | "sending" | "error";

export const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);

  useEffect(() => {
    wakeUpContactApi();
  }, []);

  const isSending = status === "sending";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;

    setStatus("sending");
    try {
      await sendContactForm(formData);
      setFormData(EMPTY_FORM);
      setStatus("idle");
      setShowModal(true);
    } catch (error) {
      console.error(error);
      // Keep what the user wrote so they can retry.
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Contact Form */}
      <div
        className="lg:col-span-2 animate-slide-in"
        style={{ animationDelay: "0.4s" }}
      >
        <Card className="glass-card h-fit hover-lift">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">
              Envíame un mensaje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-purple-600 transition-colors"
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:shadow-md focus:shadow-lg"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-purple-600 transition-colors"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:shadow-md focus:shadow-lg"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-purple-600 transition-colors"
                >
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 hover:shadow-md focus:shadow-lg"
                  placeholder="¿De qué quieres hablar?"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 group-focus-within:text-purple-600 transition-colors"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition-all duration-300 hover:shadow-md focus:shadow-lg"
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSending}
                aria-busy={isSending}
                className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white py-3 text-lg font-semibold transform enabled:hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-wait"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Enviar Mensaje"
                )}
              </Button>

              <div aria-live="polite" className="text-sm text-center">
                {isSending && (
                  <p className="text-gray-500 dark:text-gray-400">
                    Puede tardar unos segundos la primera vez.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 dark:text-red-400">
                    No se ha podido enviar el mensaje. Inténtalo de nuevo o
                    escríbeme a{" "}
                    <a
                      href="mailto:angelagm0112@gmail.com"
                      className="underline font-medium"
                    >
                      angelagm0112@gmail.com
                    </a>
                    .
                  </p>
                )}
              </div>

              <p className="text-xs text-center text-gray-500 dark:text-gray-400">
                Al enviar el formulario aceptas que use tus datos para
                responderte, según la{" "}
                <Link
                  to="/privacidad"
                  className="underline hover:text-purple-600 dark:hover:text-purple-400"
                >
                  política de privacidad
                </Link>
                .
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
      {/* </div> */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <h2 className="text-xl font-semibold mb-4">¡Mensaje enviado!</h2>
            <p className="mb-6">
              Gracias por contactarme. Te responderé pronto.
            </p>
            <Button onClick={() => setShowModal(false)} className="w-full">
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
