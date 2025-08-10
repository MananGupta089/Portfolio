import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Achievements Section */}
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <AchievementsSection />
      </div>
      
      {/* About Section */}
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <AboutSection />
      </div>
      
      {/* Projects Section */}
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <ProjectsSection />
      </div>
      
      {/* Contact Section */}
      <div className="container mx-auto px-6 lg:px-8 py-20">
        <EmailSection />
      </div>
      
      <Footer />
    </main>
  );
}
