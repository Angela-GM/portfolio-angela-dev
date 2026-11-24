import {
  SKILL_LEVELS,
  skillCategories,
  type SkillLevel,
} from "../../data/skills-categories";
import { Card } from "../atoms/card";
import { CardContent } from "../atoms/card-content";

const chipClasses: Record<SkillLevel, string> = {
  "Uso diario":
    "bg-purple-600 text-white dark:bg-purple-500",
  "Con experiencia":
    "bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-200",
  Aprendiendo:
    "border border-dashed border-purple-400 text-purple-700 dark:text-purple-300",
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-section dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Las tecnologías con las que trabajo, agrupadas por cuánto las uso
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className={`glass-card hover-lift animate-fade-in ${
                // An odd last card takes the full row instead of leaving a gap.
                skillCategories.length % 2 === 1 &&
                categoryIndex === skillCategories.length - 1
                  ? "lg:col-span-2"
                  : ""
              }`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4" aria-hidden="true">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {SKILL_LEVELS.filter((level) => category.skills[level]?.length).map(
                    (level) => (
                      <div key={level}>
                        <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-2">
                          {level}
                        </h4>
                        <ul className="flex flex-wrap gap-2">
                          {category.skills[level]!.map((skill) => (
                            <li
                              key={skill}
                              className={`px-3 py-1 text-sm font-medium rounded-full ${chipClasses[level]}`}
                            >
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <Card className="glass-card max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Siempre Aprendiendo
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Ahora mismo estoy profundizando en{" "}
                <strong className="text-purple-600 dark:text-purple-400">
                  IA aplicada a producto
                </strong>{" "}
                (que el modelo explique decisiones tomadas por el código, con
                salvaguardas y control de coste),{" "}
                <strong className="text-purple-600 dark:text-purple-400">
                  SEO técnico
                </strong>{" "}
                y{" "}
                <strong className="text-purple-600 dark:text-purple-400">
                  AWS
                </strong>
                .
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
