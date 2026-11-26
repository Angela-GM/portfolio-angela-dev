import { ChevronDown, ExternalLink, Github } from "lucide-react";
import { projects } from "../../data/projects";

const linkClasses =
  "inline-flex items-center justify-center gap-2 font-medium rounded-lg px-4 py-2 text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const hostOf = (url?: string) => (url ? new URL(url).hostname : undefined);

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Proyectos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Productos que he diseñado y desarrollado de principio a fin, en
            producción
          </p>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => {
            const host = hostOf(project.demoUrl);
            const flip = index % 2 === 1;
            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* The screenshot sits in a browser frame with the real address: these are live products. */}
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${project.title} en una pestaña nueva`}
                  className={`group block lg:col-span-7 rounded-xl overflow-hidden border border-gray-200 dark:border-white/10 bg-card shadow-2xl shadow-purple-900/10 dark:shadow-purple-500/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ${flip ? "lg:order-2" : ""}`}
                >
                  <div className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-200 dark:border-white/10 bg-section">
                    <span className="flex gap-1.5" aria-hidden="true">
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-white/20" />
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-white/20" />
                    </span>
                    <span className="flex-1 min-w-0 truncate text-center text-xs text-gray-500 dark:text-gray-400 rounded-md bg-background/70 px-3 py-1 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">
                      {host}
                    </span>
                    <ExternalLink
                      className="w-3.5 h-3.5 text-gray-400 group-hover:text-purple-500 transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  {/* Preview images are 1200x630 (Open Graph size). */}
                  <img
                    src={project.image}
                    alt={`Vista de ${project.title}`}
                    width={1200}
                    height={630}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[40/21] object-cover object-top"
                  />
                </a>

                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {project.keyPoints.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <ul
                    className="flex flex-wrap gap-1.5 mb-6"
                    aria-label="Tecnologías"
                  >
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="px-2.5 py-0.5 text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 rounded-full"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${linkClasses} bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white`}
                      >
                        Ver web
                        <ExternalLink className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${linkClasses} border border-purple-500/60 text-purple-700 dark:text-purple-300 hover:bg-purple-500/10`}
                      >
                        Ver código
                        <Github className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>

                  <details className="group/details mt-6 border-t border-gray-200 dark:border-white/10 pt-4">
                    <summary className="flex items-center gap-2 cursor-pointer list-none text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-300 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 [&::-webkit-details-marker]:hidden">
                      Cómo está hecho
                      <ChevronDown
                        className="w-4 h-4 transition-transform group-open/details:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </details>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
