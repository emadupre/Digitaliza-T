
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { BeamsBackground } from "@/components/ui/beams-background";

const Index = () => {
  return (
    <div className="relative w-full">
      <BeamsBackground intensity="medium" className="fixed inset-0 z-0" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
