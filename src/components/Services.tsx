
import React from "react";
import { Card } from "./ui/card";
import { Cpu, Code, LineChart, PieChart } from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Innovación",
      description:
        "Continuamente exploramos nuevas tecnologías para ofrecerte soluciones de vanguardia.",
      icon: <Cpu className="h-8 w-8" />,
    },
    {
      title: "Calidad",
      description:
        "Nos comprometemos a entregar productos de la más alta calidad que superen tus expectativas.",
      icon: <Code className="h-8 w-8" />,
    },
    {
      title: "Transparencia",
      description:
        "Mantenemos una comunicación clara y honesta durante todo el proceso de desarrollo.",
      icon: <LineChart className="h-8 w-8" />,
    },
    {
      title: "Resultados",
      description:
        "Nos enfocamos en crear soluciones que generen un impacto positivo y medible en tu negocio.",
      icon: <PieChart className="h-8 w-8" />,
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Nuestros Valores
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-4 text-blue-500">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-zinc-400">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
