
import { Smartphone, Globe, Code, Sparkles } from "lucide-react";
import { DisplayCards } from "@/components/ui/display-cards";
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { SparkleButton } from "@/components/ui/sparkle-button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const displayCards = [
  {
    icon: <Sparkles className="size-4 text-accent" />,
    title: "Desarrollo Web",
    description: "Sitios web modernos y responsivos",
    date: "Servicio Disponible",
    iconClassName: "text-accent",
    titleClassName: "text-accent",
    className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Code className="size-4 text-secondary" />,
    title: "Sistemas",
    description: "Software a medida para tu negocio",
    date: "Servicio Disponible",
    iconClassName: "text-secondary",
    titleClassName: "text-secondary",
    className: "[grid-area:stack] translate-x-14 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
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

// Mobile-friendly cards that will replace the display cards on smaller screens
const MobileServiceCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <Card className="bg-black/50 backdrop-blur-md border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-300">
    <CardHeader className="pb-2">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-full bg-purple-500/20">{icon}</div>
        <CardTitle className="text-lg text-white">{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-white/80">{description}</CardDescription>
      <p className="text-xs text-white/60 mt-2">Servicio Disponible</p>
    </CardContent>
  </Card>
);

const Services = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="servicios" className="section-padding min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <GradualSpacing 
            text="Creamos soluciones digitales a medida"
            className="text-2xl md:text-4xl font-semibold leading-tight md:leading-relaxed text-white"
          />
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nuestros Servicios</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ofrecemos soluciones tecnológicas integrales para potenciar tu negocio
          </p>
        </div>

        {isMobile ? (
          // Mobile view: Vertically stacked cards
          <div className="space-y-4 px-2 mb-12">
            <MobileServiceCard 
              icon={<Sparkles className="size-4 text-purple-400" />} 
              title="Desarrollo Web" 
              description="Sitios web modernos y responsivos" 
            />
            <MobileServiceCard 
              icon={<Code className="size-4 text-indigo-400" />} 
              title="Sistemas" 
              description="Software a medida para tu negocio" 
            />
            <MobileServiceCard 
              icon={<Smartphone className="size-4 text-violet-400" />} 
              title="Apps Móviles" 
              description="Aplicaciones iOS y Android" 
            />
          </div>
        ) : (
          // Desktop view: 3D stacked cards
          <div className="flex min-h-[400px] w-full items-center justify-center py-16 max-w-full overflow-hidden">
            <div className="w-full max-w-3xl">
              <DisplayCards cards={displayCards} />
            </div>
          </div>
        )}

        <div className="flex justify-center mt-8">
          <SparkleButton text="Comencemos" href="/contacto" />
        </div>
      </div>
    </section>
  );
};

export default Services;
