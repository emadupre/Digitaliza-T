import { Smartphone, Globe, Code, Sparkles } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { SparkleButton } from "@/components/ui/sparkle-button";

const displayCards = [
  {
    icon: <Sparkles className="size-4 text-accent" />,
    title: "Desarrollo Web",
    description: "Sitios web modernos y responsivos",
    date: "Servicio Disponible",
    iconClassName: "text-accent",
    titleClassName: "text-accent",
    className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
  {
    icon: <Code className="size-4 text-secondary" />,
    title: "Sistemas",
    description: "Software a medida para tu negocio",
    date: "Servicio Disponible",
    iconClassName: "text-secondary",
    titleClassName: "text-secondary",
    className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
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
    <section id="servicios" className="section-padding text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <GradualSpacing 
            text="Transformamos tu visión en soluciones digitales innovadoras que impulsan el crecimiento de tu negocio."
            className="text-2xl md:text-4xl font-semibold leading-relaxed text-white"
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nuestros Servicios</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para potenciar tu negocio
          </p>
        </div>

        <div className="flex min-h-[400px] w-full items-center justify-center py-20">
          <div className="w-full max-w-3xl">
            <DisplayCards cards={displayCards} />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <SparkleButton text="Comencemos" href="/contacto" />
        </div>
      </div>
    </section>
  );
};

export default Services;
