
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Footerdemo } from "@/components/ui/footer-section";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Contact />
        <Footerdemo />
      </div>
    </div>
  );
};

export default Index;
