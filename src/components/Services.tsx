
import { Smartphone, Globe, Code, Sparkles } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
        <div className="mb-16">
          <GradualSpacing 
            text="Transformamos tu visión en soluciones digitales innovadoras que impulsan el crecimiento de tu negocio."
            className="text-2xl md:text-4xl font-semibold leading-relaxed"
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para potenciar tu negocio
          </p>
        </div>

        <div className="flex min-h-[400px] w-full items-center justify-center py-20">
          <div className="w-full max-w-3xl">
            <DisplayCards cards={displayCards} />
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/contacto">
            <Button 
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E5B8D9_0%,#6EE7B7_50%,#9333EA_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Comencemos
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
