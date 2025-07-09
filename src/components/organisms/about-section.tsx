import { Card } from "../atoms/card";
import { CardContent } from "../atoms/card-content";

export const AboutSection = () => {
  const stats = [
    { number: "3+", label: "Años de Experiencia" },
    { number: "25+", label: "Proyectos Completados" },
    { number: "100%", label: "Satisfacción Cliente" },
    { number: "24/7", label: "Pasión por el Código" },
  ];
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Sobre Mí
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Conoce mi historia, mi pasión por el desarrollo y lo que me motiva
            cada día
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="animate-slide-in">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Mi Viaje en el Desarrollo
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Mi pasión por la tecnología comenzó en la universidad, donde
                descubrí el poder de transformar ideas en realidades digitales.
                Lo que empezó como curiosidad se convirtió en una vocación.
              </p>

              <p>
                Me especializo en desarrollo{" "}
                <strong className="text-purple-600 dark:text-purple-400">
                  Frontend
                </strong>
                , pero mi experiencia Full Stack me permite crear soluciones
                completas y cohesivas. Mi enfoque siempre está en la experiencia
                del usuario y la calidad del código.
              </p>

              <p>
                Cuando no estoy programando, me encontrarás explorando nuevas
                tecnologías, contribuyendo a proyectos open source, o diseñando
                interfaces que no solo funcionen perfectamente, sino que también
                inspiren.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                <span>Apasionada por el diseño centrado en el usuario</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="w-2 h-2 bg-violet-500 rounded-full mr-3"></span>
                <span>Defensora del código limpio y mantenible</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                <span>Siempre aprendiendo y evolucionando</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div
            className="flex justify-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="w-80 h-96 relative overflow-hidden rounded-2xl mix-blend-luminosity">
                <img
                  src="/dev.jpg"
                  alt="Trabajando en proyectos"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center text-white font-bold">
                    AG
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Angela Garcia
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Frontend Developer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="glass-card hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
