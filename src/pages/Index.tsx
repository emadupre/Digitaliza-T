
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { BeamsBackground } from "@/components/ui/beams-background";
import { Footerdemo } from "@/components/ui/footer-section";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BeamsBackground intensity="medium" className="opacity-70">
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Services />
          <Contact />
          <Footerdemo />
        </div>
      </BeamsBackground>
    </div>
  );
};

export default Index;
