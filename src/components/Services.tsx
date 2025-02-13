
import { Smartphone, Globe, Code, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import DisplayCards from "@/components/ui/display-cards";

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

const displayCards = [
  {
    icon: <Sparkles className="size-4 text-accent" />,
    title: "Desarrollo Web",
    description: "Sitios web modernos y responsivos",
    date: "Servicio Disponible",
    iconClassName: "text-accent",
    titleClassName: "text-accent",
    className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Code className="size-4 text-secondary" />,
    title: "Sistemas",
    description: "Software a medida para tu negocio",
    date: "Servicio Disponible",
    iconClassName: "text-secondary",
    titleClassName: "text-secondary",
    className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Smartphone className="size-4 text-primary" />,
    title: "Apps Móviles",
    description: "Aplicaciones iOS y Android",
    date: "Servicio Disponible",
    iconClassName: "text-primary",
    titleClassName: "text-primary",
    className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

        <div className="flex min-h-[400px] w-full items-center justify-center py-20">
          <div className="w-full max-w-3xl">
            <DisplayCards cards={displayCards} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
