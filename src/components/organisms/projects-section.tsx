import { ExternalLink, Github } from "lucide-react";
import { projects } from "../../data/projects";
import { Card } from "../atoms/card";
import { CardContent } from "../atoms/card-content";

const linkClasses =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg px-4 py-2 text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2";

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Proyectos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Productos que he diseñado y desarrollado de principio a fin
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group overflow-hidden glass-card hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div>
                <div className="relative overflow-hidden">
                  {/* Preview images are 1200x630 (Open Graph size). */}
                  <img
                    src={project.image}
                    alt={`Vista de ${project.title}`}
                    width={1200}
                    height={630}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[40/21] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${linkClasses} bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg hover:shadow-xl`}
                      >
                        Ver web
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${linkClasses} border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white`}
                      >
                        Ver código
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
