
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
        
        {/* Section transitions with gradient dividers */}
        <Hero />
        
        <div className="section-divider bg-gradient-to-b from-black/80 via-purple-900/20 to-blue-900/30 h-24"></div>
        <Services />
        
        <div className="section-divider bg-gradient-to-b from-blue-900/30 via-indigo-900/20 to-purple-900/30 h-24"></div>
        <Projects />
        
        <div className="section-divider bg-gradient-to-b from-purple-900/30 via-indigo-900/20 to-black/80 h-24"></div>
        <Contact />
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
