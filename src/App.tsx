import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutSection } from "./components/about-section";
import { ContactSection } from "./components/contact-section";
import { HeroSection } from "./components/hero-section";
import { Navigation } from "./components/navigation";
import { ProjectsSection } from "./components/projects-section";
import { SkillsSection } from "./components/skills-section";
import { ProjectsPage } from "./pages/ProjectsPage";

// Create a HomePage component for the main content
function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
