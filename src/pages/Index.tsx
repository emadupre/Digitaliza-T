
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Footerdemo } from "@/components/ui/footer-section";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundPaths title="Desarrolla Tu Potencial" className="opacity-80" />
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
