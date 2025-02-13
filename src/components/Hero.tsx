
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center section-padding pt-24">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Transformamos Ideas en Realidad Digital
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Desarrollamos soluciones tecnológicas personalizadas para impulsar tu negocio hacia el futuro
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#servicios"
              className="px-8 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
            >
              Nuestros Servicios
            </a>
            <a
              href="#contacto"
              className="px-8 py-3 border border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-colors"
            >
              Contactar
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
