
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
        
        {/* Sections with fade transition */}
        <Hero />
        
        <div className="section-divider bg-gradient-to-b from-transparent to-black/5 h-24"></div>
        <Services />
        
        <div className="section-divider bg-gradient-to-b from-transparent to-black/5 h-24"></div>
        <Projects />
        
        <div className="section-divider bg-gradient-to-b from-transparent to-black/5 h-24"></div>
        <Contact />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
