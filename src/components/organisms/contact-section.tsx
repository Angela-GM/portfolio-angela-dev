import { Card } from "../atoms/card";
import { contactInfo } from "../../data/contact-info";
import { ContactForm } from "../molecules/contact-form";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-purple-500 bg-clip-text text-transparent mb-4">
            Contacto
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Siempre interesada en entornos que valoren el desarrollo limpio, escalable y el trabajo en equipo. Busco continuar creciendo profesionalmente, explorando nuevos retos con propósito.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Información de Contacto
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-white/50 dark:hover:bg-gray-800/50 transition-colors duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center text-white">
                    <img src={info.icon} alt={info.title} className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="p-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3">
                ¿Por qué trabajar conmigo?
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Compromiso real con el trabajo en equipo</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-violet-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Adaptabilidad y aprendizaje constante</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Mentalidad orientada a soluciones</span>
                </li>
              </ul>
            </Card>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
