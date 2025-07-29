import { Link } from "react-router-dom";
import { Footer } from "../components/organisms/footer";
import { useEffect } from "react";

export const Privacity = () => {
      useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="min-h-screen">
      <section id="privacidad" className=" bg-gray-50 dark:bg-gray-900/50">
        <nav
          className={`top-0 left-0 right-0 z-50 transition-all duration-300 `}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link
                  to={"/"}
                  className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-purple-500 bg-clip-text text-transparent"
                >
                  AG
                  <span className="ml-3 text-xl font-semibold">
                    Angela Garcia
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <header className="py-20 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-500 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-4xl font-bold mb-2">Política de privacidad</h1>
            <span className="block text-sm opacity-80">
              Fecha de última actualización: 29/07/2025
            </span>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
          Política de Privacidad
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400 block">
          Última actualización: 29/07/2025
          </span>
          </div> */}

          <div className="space-y-12 text-gray-700 dark:text-gray-300 leading-relaxed pt-10">
            {/* Bloque 1 */}
            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                1. Responsable del Tratamiento
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Nombre:</strong> Angela Garcia Muñoz
                </li>
                <li>
                  <strong>Correo:</strong> angelagm0112@gmail.com
                </li>
                <li>
                  <strong>Ubicación:</strong> Tarragona, España
                </li>
              </ul>
            </div>

            {/* Bloque 2 */}
            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                2. Información que se recoge
              </h3>
              <p>Datos recopilados a través del formulario de contacto:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nombre</li>
                <li>Correo electrónico</li>
                <li>Asunto</li>
                <li>Mensaje</li>
              </ul>
            </div>

            {/* Bloque 3 */}
            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                3. Finalidad del tratamiento
              </h3>
              <p>Uso exclusivo para:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Responder a consultas enviadas mediante el formulario.</li>
              </ul>
              <p className="mt-2">
                No se utilizarán los datos para fines comerciales ni se
                compartirán con terceros.
              </p>
            </div>

            {/* Bloques 4 a 7 */}
            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                4. Legitimación
              </h3>
              <p>
                El tratamiento se basa en el consentimiento otorgado al enviar
                el formulario.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                5. Conservación de los datos
              </h3>
              <p>
                Conservación limitada al tiempo necesario para responder. No se
                almacenan en bases de datos externas ni se crean perfiles.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                6. Derechos del Usuario
              </h3>
              <p>
                Puedes escribir a{" "}
                <a
                  href="mailto:angelagm0112@gmail.com"
                  className="text-purple-600 dark:text-purple-400 underline"
                >
                  angelagm0112@gmail.com
                </a>{" "}
                para ejercer tus derechos de acceso, rectificación o supresión.
                También puedes reclamar ante la{" "}
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-purple-600 dark:text-purple-400"
                >
                  Agencia Española de Protección de Datos
                </a>
                .
              </p>
            </div>

            <div className="pb-10">
              <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-2">
                7. Seguridad
              </h3>
              <p>
                Se adoptan medidas como el uso de conexiones seguras (HTTPS)
                para proteger los datos enviados.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </section>
  );
};
