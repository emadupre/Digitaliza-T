
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Nosotros from "@/components/Nosotros";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { BeamsBackground } from "@/components/ui/beams-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import NewNavbar from "@/components/NewNavbar";
import { Footerdemo } from "@/components/ui/footer-section";

const Index = () => {
  return (
    <div className="relative w-full bg-mesh-gradient min-h-screen">
      {/* Navigation */}
      <NewNavbar />
      
      {/* Background effects - added consistent background across all sections */}
      <BeamsBackground intensity="medium" className="fixed inset-0 z-0 opacity-60" />
      <BackgroundBeams className="fixed inset-0 z-0 opacity-20" />
      
      {/* Main content */}
      <div className="relative z-10">
        <Hero />
        <Services />
        <Nosotros />
        <Projects />
        <Contact />
        <Footerdemo />
      </div>
    </div>
  );
};

export default Index;
