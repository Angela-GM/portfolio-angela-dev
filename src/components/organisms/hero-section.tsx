import { useEffect, useState } from "react";
import { Button } from "../atoms/button";

export const HeroSection: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Desarrolladora Frontend",
    "Creadora de Experiencias",
    "FullStack Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-violet-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl mt-12 sm:text-5xl lg:text-6xl lg:mt-0 font-bold mb-6">
              <span className="block text-gray-900 dark:text-white mb-2">
                Hola, soy
              </span>
              <span className="block bg-gradient-to-r from-purple-600 via-violet-600 to-purple-500 bg-clip-text text-transparent pb-2">
                Angela Garcia
              </span>
            </h1>

            <div className="h-16 mb-6">
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                <span className="inline-block transition-all duration-500 ease-in-out">
                  {roles[currentRole]}
                </span>
              </p>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Implemento interfaces web a partir de diseños, cuidando cada
              detalle del código y la arquitectura. Con experiencia en React,
              Next.js y Nest.js, desarrollo soluciones escalables que integran
              APIs, bases de datos y buenas prácticas de desarrollo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="shadow-lg hover:shadow-xl group"
              >
                Ver Proyectos
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Button>

              <Button onClick={scrollToContact} variant="outline" size="lg">
                Contactar
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a
                href="https://github.com/Angela-GM"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/angela-garcia-mu"
                target="_blank"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:sofia@example.com"
                className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Image/Avatar */}
          <div
            className="flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                {/* Background circles */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full opacity-20 animate-float"></div>
                <div
                  className="absolute inset-4 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full opacity-30 animate-float"
                  style={{ animationDelay: "1s" }}
                ></div>

                {/* Main image */}
                <div className="absolute inset-8 bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/20 dark:to-violet-900/20 rounded-full flex items-center justify-center mix-blend-multiply">
                  <img
                    src="/avatar-angela.jpg"
                    alt="Sofia Martínez"
                    className="w-full h-full object-cover rounded-full "
                  />
                </div>

                {/* Floating elements */}
                <div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-lg flex items-center justify-center text-white font-bold text-xl animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  🚀
                </div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xl animate-float"
                  style={{ animationDelay: "1.5s" }}
                >
                  ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
