export const ExperienceCallToAction = () => {
  return (
    <div
      className="text-center mt-12 animate-fade-in"
      style={{ animationDelay: "0.6s" }}
    >
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        ¿Quieres conocer más detalles sobre mi experiencia?
      </p>
      <a
        href="/cv-angela-garcia-fullstack-developer-2025.pdf"
        target="_blank"
        // onClick={downloadCV}
        className="text-purple-600 dark:text-purple-400 font-semibold hover:underline transition-all duration-300 hover:scale-105 hover:text-purple-700 dark:hover:text-purple-300"
      >
        Descargar mi CV completo →
      </a>
    </div>
  );
};
