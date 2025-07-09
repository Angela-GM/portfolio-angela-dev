import { experiences } from "../../data/experiencies";
import { ExperienceCallToAction } from "../molecules/experience-call-action";
import { ExperienceCard } from "../molecules/experience-card";
import { ExperienceHeader } from "../molecules/experience-header";

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50/50 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ExperienceHeader />

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        <ExperienceCallToAction />
      </div>
    </section>
  );
};
