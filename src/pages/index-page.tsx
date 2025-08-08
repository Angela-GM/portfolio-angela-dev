import { Navigation } from "../components/molecules/navigation";
import { AboutSection } from "../components/organisms/about-section";
import { ContactSection } from "../components/organisms/contact-section";
import { ExperienceSection } from "../components/organisms/experience-section";
import { Footer } from "../components/organisms/footer";
import { HeroSection } from "../components/organisms/hero-section";
// import { ProjectsSection } from "../components/organisms/projects-section";
import { SkillsSection } from "../components/organisms/skills-section";

export const IndexPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      {/* <ProjectsSection /> */}
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
