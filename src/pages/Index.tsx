
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { BeamsBackground } from "@/components/ui/beams-background";
import { Footerdemo } from "@/components/ui/footer-section";

const Index = () => {
  return (
    <div className="relative w-full">
      <BeamsBackground intensity="medium" className="fixed inset-0 z-0" />
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
