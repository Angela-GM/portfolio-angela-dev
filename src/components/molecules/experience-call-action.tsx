
export const ExperienceCallToAction = () => {
  const downloadCV = () => {
    // Crear un PDF simple con información básica
    const cvContent = `
Sofia Martínez - Desarrolladora Fullstack

INFORMACIÓN DE CONTACTO:
- Email: sofia@example.com
- Teléfono: +34 123 456 789
- Ubicación: Madrid, España

EXPERIENCIA LABORAL:

Desarrolladora Frontend Senior | TechInnovate Solutions (Enero 2022 - Presente)
- Lideré el desarrollo de interfaces de usuario para aplicaciones web complejas usando React y TypeScript
- Implementé arquitecturas escalables que mejoraron el rendimiento en un 40%
- Colaboré con equipos de diseño UX/UI para crear experiencias de usuario excepcionales
- Mentoricé a desarrolladores junior y establecí mejores prácticas de código

Desarrolladora Fullstack | Digital Creative Agency (Marzo 2020 - Diciembre 2021)
- Desarrollé aplicaciones web completas desde el frontend hasta el backend
- Creé APIs RESTful robustas y bases de datos optimizadas
- Integré sistemas de pago y servicios de terceros
- Participé en la planificación y arquitectura de proyectos

Desarrolladora Frontend Junior | StartupLab (Junio 2018 - Febrero 2020)
- Desarrollé componentes reutilizables y interfaces responsivas
- Optimicé el rendimiento web y la experiencia de usuario
- Participé en pruebas A/B y análisis de métricas de usuario
- Colaboré en metodologías ágiles y scrum

TECNOLOGÍAS:
React, TypeScript, Next.js, Tailwind CSS, GraphQL, Vue.js, Node.js, Express, MongoDB, AWS, JavaScript, SASS, Git, Figma
    `;

    // Crear y descargar archivo
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV-Sofia-Martinez.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  return (
    <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        ¿Quieres conocer más detalles sobre mi experiencia?
      </p>
      <button
        onClick={downloadCV}
        className="text-purple-600 dark:text-purple-400 font-semibold hover:underline transition-all duration-300 hover:scale-105 hover:text-purple-700 dark:hover:text-purple-300"
      >
        Descargar mi CV completo →
      </button>
    </div>
  );
}
