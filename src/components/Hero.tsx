
import { SplineSceneBasic } from "@/components/ui/code-demo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center pt-24 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 z-0"></div>
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content - Left Side */}
          <motion.div 
            className="z-10 text-center md:text-left order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-400 pb-4 leading-tight mb-2">
              Digitaliza-T
            </h1>
            <motion.p 
              className="text-xl md:text-2xl mt-4 text-white/90 max-w-xl mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transformando el futuro digital de tu negocio con soluciones innovadoras
            </motion.p>
            <motion.div 
              className="mt-8 flex flex-wrap justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                className="px-6 py-6 text-lg h-auto bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 shadow-xl shadow-purple-500/20 border-0"
                asChild
              >
                <motion.a 
                  href="#servicios"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Nuestros servicios <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-6 text-lg h-auto border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
                asChild
              >
                <motion.a 
                  href="#contacto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contáctanos
                </motion.a>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* 3D Model - Right Side */}
          <motion.div 
            className="relative z-5 order-1 md:order-2 h-[500px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SplineSceneBasic />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
