import { useEffect } from "react";
import { Link } from "react-router-dom";

const CONTACT_EMAIL = "angelagm0112@gmail.com";
const LAST_UPDATED = "20 de noviembre de 2026";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="space-y-3">
    <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
    <div className="space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed">
      {children}
    </div>
  </section>
);

export const Privacy = () => {
  useEffect(() => {
    document.title = "Política de privacidad · Angela Garcia";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 space-y-10">
        <Link
          to="/"
          className="text-purple-600 dark:text-purple-400 font-medium hover:underline"
        >
          ← Volver al portfolio
        </Link>

        <header className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold gradient-text">
            Política de privacidad
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Última actualización: {LAST_UPDATED}
          </p>
        </header>

        <Section title="Responsable">
          <p>
            Angela Garcia, desarrolladora web con residencia en Tarragona
            (España). Para cualquier cuestión sobre tus datos puedes escribirme a{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-purple-600 dark:text-purple-400 underline"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </Section>

        <Section title="Qué datos recojo">
          <p>
            Solo los que escribes en el formulario de contacto: nombre, email,
            asunto y mensaje. Esta web no usa cookies de análisis ni de
            publicidad. Tu preferencia de modo claro u oscuro se guarda en tu
            navegador y no sale de él.
          </p>
        </Section>

        <Section title="Para qué los uso">
          <p>
            Únicamente para leer tu mensaje y responderte. No los uso para
            enviarte publicidad ni los cedo a nadie para ese fin.
          </p>
          <p>
            La base legal es tu consentimiento, que das al enviar el formulario.
            Puedes retirarlo en cualquier momento escribiéndome.
          </p>
        </Section>

        <Section title="Quién más interviene">
          <p>
            Para que el mensaje me llegue intervienen estos proveedores, que
            tratan los datos solo para prestar su servicio:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong>Vercel</strong>: aloja esta web.
            </li>
            <li>
              <strong>Render</strong>: aloja el servidor que recibe el
              formulario.
            </li>
            <li>
              <strong>Resend</strong>: envía el mensaje por email.
            </li>
            <li>
              <strong>Google (Gmail)</strong>: es donde recibo los mensajes.
            </li>
          </ul>
          <p>
            Algunos de estos proveedores están en Estados Unidos, por lo que
            puede haber transferencias internacionales de datos, amparadas en
            las garantías que prevé el Reglamento General de Protección de Datos
            (RGPD).
          </p>
        </Section>

        <Section title="Cuánto tiempo los guardo">
          <p>
            El tiempo necesario para atender tu consulta. Después, si me lo
            pides, borro la conversación.
          </p>
        </Section>

        <Section title="Tus derechos">
          <p>
            Puedes pedirme acceder a tus datos, rectificarlos, suprimirlos,
            limitar su uso, oponerte a su tratamiento o pedir su portabilidad
            escribiendo a{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-purple-600 dark:text-purple-400 underline"
            >
              {CONTACT_EMAIL}
            </a>
            . Si crees que no he atendido bien tu solicitud, puedes reclamar ante
            la Agencia Española de Protección de Datos (
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 dark:text-purple-400 underline"
            >
              aepd.es
            </a>
            ).
          </p>
        </Section>
      </div>
    </main>
  );
};
