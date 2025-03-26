
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { BeamsBackground } from "@/components/ui/beams-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
        </motion.div>
        
        {/* Suave transición entre secciones */}
        <div className="relative overflow-hidden">
          <div className="w-full h-32 bg-gradient-to-b from-transparent to-purple-950/5"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Services />
          </motion.div>
          
          <div className="w-full h-32 bg-gradient-to-b from-transparent to-purple-950/5"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Projects />
          </motion.div>
          
          <div className="w-full h-32 bg-gradient-to-b from-transparent to-purple-950/5"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Contact />
          </motion.div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Index;
