import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import InterestsSection from "@/components/portfolio/InterestsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import ExperiencesSection from "@/components/portfolio/ExperiencesSection";


const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <InterestsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
