import { skillCategories } from "../../data/skills-categories"
import { Card } from "../atoms/card"
import { CardContent } from "../atoms/card-content"


export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un conjunto completo de tecnologías y herramientas que domino para 
            crear soluciones digitales excepcionales
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="glass-card hover-lift animate-fade-in" 
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name}
                      className="animate-slide-in"
                      style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
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
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                La tecnología evoluciona constantemente, y yo evoluciono con ella. 
                Actualmente estoy profundizando en <strong className="text-purple-600 dark:text-purple-400">Web3</strong>, 
                <strong className="text-purple-600 dark:text-purple-400"> AI/ML integrations</strong>, y 
                <strong className="text-purple-600 dark:text-purple-400"> Advanced React Patterns</strong>.
              </p>
              
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tecnologías</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Horas/Mes Aprendiendo</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Certificaciones</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
