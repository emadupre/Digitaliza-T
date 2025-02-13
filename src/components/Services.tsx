
import { Smartphone, Globe, Code } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <Globe className="w-8 h-8 text-accent" />,
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos y responsivos que cautivan a tus usuarios y potencian tu presencia online."
  },
  {
    icon: <Code className="w-8 h-8 text-secondary" />,
    title: "Sistemas Personalizados",
    description: "Desarrollamos soluciones de software a medida que optimizan y automatizan tus procesos de negocio."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Aplicaciones Móviles",
    description: "Diseñamos aplicaciones móviles intuitivas y potentes para iOS y Android que conectan con tus usuarios."
  }
];

const Services = () => {
  return (
    <section id="servicios" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para potenciar tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="glass p-6 rounded-2xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
