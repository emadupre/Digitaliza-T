
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { BeamsBackground } from "@/components/ui/beams-background";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Index = () => {
  return (
    <div className="relative w-full bg-mesh-gradient min-h-screen">
      {/* Background effects */}
      <BeamsBackground intensity="strong" className="fixed inset-0 z-0 opacity-80" />
      <BackgroundBeams className="fixed inset-0 z-0 opacity-20" />
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        
        {/* Sections with improved fade transitions */}
        <Hero />
        
        <div className="w-full h-32 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
        <Services />
        
        <div className="w-full h-32 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
        <Projects />
        
        <div className="w-full h-32 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
        <Contact />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
