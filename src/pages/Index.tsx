
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { BeamsBackground } from "@/components/ui/beams-background";
import { Footerdemo } from "@/components/ui/footer-section";

const Index = () => {
  return (
    <BeamsBackground intensity="medium" className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Footerdemo />
    </BeamsBackground>
  );
};

export default Index;
