import { Link } from "react-router-dom";
import { Footer } from "../components/organisms/footer";
import { useEffect } from "react";

export const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="min-h-screen">
      <section id="terms" className="bg-gray-50 dark:bg-gray-900/50">
        {/* Navigation */}
        <nav className="top-0 left-0 right-0 z-50 transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link
                  to="/"
                  className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-purple-500 bg-clip-text text-transparent"
                >
                  AG
                  <span className="ml-3 text-xl font-semibold">Angela Garcia</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="py-20 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-500 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Términos de Uso</h1>
            <span className="block text-sm opacity-80">
              Fecha de última actualización: 29/07/2025
            </span>
          </div>
        </header>

        {/* Legal Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed pt-10">
            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                1. Objeto
              </h3>
              <p>
                Estos términos regulan el uso de la página web de Angela Garcia Muñoz,
                accesible en [tu-url.com]. Al acceder o utilizar el sitio, el usuario
                acepta cumplir con estos términos.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                2. Uso permitido
              </h3>
              <p>
                La web tiene como objetivo presentar el trabajo creativo/profesional
                de Angela. El uso está limitado a la navegación, consulta de contenidos
                y envío de mensajes mediante el formulario de contacto.
              </p>
              <p className="mt-2">No está permitido:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usar el sitio con fines ilegales o no autorizados.</li>
                <li>Realizar acciones que puedan dañar, saturar o deteriorar la web.</li>
                <li>Reproducir, copiar o distribuir el contenido sin autorización expresa.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                3. Propiedad intelectual
              </h3>
              <p>
                Todo el contenido (textos, imágenes, diseño) es propiedad de Angela
                Garcia Muñoz, salvo que se indique lo contrario. No está permitido su
                uso sin autorización previa.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                4. Exención de responsabilidad
              </h3>
              <p>La titular no se hace responsable de:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Errores u omisiones en los contenidos.</li>
                <li>Fallos técnicos o interrupciones del servicio.</li>
                <li>Uso que terceros puedan hacer de la información publicada.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                5. Protección de datos
              </h3>
              <p>
                Los datos personales recogidos a través del formulario de contacto se
                gestionan de acuerdo con la Política de Privacidad de esta web.
              </p>
            </div>

            <div className="pb-10">
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                6. Modificaciones
              </h3>
              <p>
                Angela se reserva el derecho a modificar estos términos en cualquier
                momento. Los cambios estarán disponibles en esta misma página y serán
                aplicables desde su publicación.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </section>
    </section>
  );
};
