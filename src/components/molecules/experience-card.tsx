import { Calendar, MapPin } from "lucide-react";
import type { Experience } from "../../interfaces/experience";
import { Card } from "../atoms/card";
import { CardContent } from "../atoms/card-content";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}
export const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  return (
    <Card
      className="glass-card hover-lift animate-fade-in"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <CardContent className="p-0">
        <div className="lg:flex">
          {/* Company Logo */}
          <div className="lg:w-32 lg:flex-shrink-0 p-6 lg:p-8 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20">
            <div className="flex lg:flex-col items-center lg:items-start">
              <img
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="w-16 h-16 rounded-lg object-cover mb-0 lg:mb-4"
              />
              <div className="ml-4 lg:ml-0 lg:text-center">
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {experience.company}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span className="hidden sm:inline">
                    {experience.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <div className="flex-1 p-3 md:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {experience.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {experience.period}
                </div>
              </div>
            </div>

            {/* Description */}
            <ul className="space-y-2 mb-6">
              {experience.description.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-gray-700 dark:text-gray-300"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Tecnologías utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
