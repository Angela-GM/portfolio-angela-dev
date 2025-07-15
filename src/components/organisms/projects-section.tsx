import { projects } from "../../data/projects";
import { Button } from "../atoms/button";
import { Card } from "../atoms/card";
import { CardContent } from "../atoms/card-content";

export const ProjectsSection = () => {
   const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una selección de mis trabajos más recientes que demuestran mi experiencia 
            y pasión por crear soluciones digitales innovadoras
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Proyectos Principales
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group overflow-hidden hover-lift glass-card animate-fade-in" 
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Project links overlay */}
                  <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <Button
                      size="sm"
                      className="bg-white/90 text-gray-900 hover:bg-white"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      Ver Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/90 text-white hover:bg-white/10"
                      onClick={() => window.open(project.codeUrl, '_blank')}
                    >
                      Ver Código
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Más Proyectos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className="group hover-lift glass-card animate-fade-in" 
                style={{ animationDelay: `${(index + featuredProjects.length) * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                
                <CardContent className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 text-xs"
                      onClick={() => window.open(project.codeUrl, '_blank')}
                    >
                      Código
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            ¿Interesado en ver más de mi trabajo?
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white"
            onClick={() => window.open('https://github.com/Angela-GM', '_blank')}
          >
            Ver GitHub Completo
            <span className="ml-2">→</span>
          </Button>
        </div>
      </div>
    </section>
  )
}
