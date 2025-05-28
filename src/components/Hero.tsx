
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="inicio" className={`${isMobile ? 'min-h-[70vh] pt-16 pb-4' : 'min-h-[85vh] pt-24 pb-8'} flex items-center justify-center px-4 md:px-6 relative overflow-hidden`}>
      <div className="max-w-6xl mx-auto w-full relative">
        <div className="flex items-center justify-center">
          {/* Text Content - Más compacto */}
          <div className="z-10 text-center max-w-4xl">
            {/* Title optimizado */}
            <div className="relative mb-3 md:mb-4 overflow-visible">
              <h1 className={`
                ${isMobile ? 'text-3xl leading-tight' : 'text-5xl md:text-6xl lg:text-7xl'} 
                font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400 
                animate-fade-in
              `}>
                Digitaliza-T
              </h1>
            </div>
            
            {/* Descripción más compacta */}
            <p className={`
              ${isMobile ? 'text-sm leading-relaxed mb-4' : 'text-lg md:text-xl leading-relaxed mb-6'} 
              text-white/90 max-w-2xl mx-auto animate-fade-in
            `} style={{ animationDelay: "200ms" }}>
              Transformando el futuro digital de tu negocio con soluciones innovadoras
            </p>
            
            {/* Botones más compactos */}
            <div className={`${isMobile ? 'mt-3' : 'mt-5'} flex flex-col sm:flex-row justify-center gap-3 animate-fade-in`} style={{ animationDelay: "400ms" }}>
              <Button asChild className={`
                ${isMobile ? 'px-5 py-2.5 text-sm' : 'px-6 py-3 text-base md:text-lg'} 
                h-auto bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 
                shadow-xl shadow-purple-500/20 border-0 transition-all duration-300
              `}>
                <a href="#servicios">
                  Nuestros servicios <ArrowRight className={`ml-2 ${isMobile ? 'h-3 w-3' : 'h-4 w-4 md:h-5 md:w-5'}`} />
                </a>
              </Button>
              <Button asChild variant="outline" className={`
                ${isMobile ? 'px-5 py-2.5 text-sm' : 'px-6 py-3 text-base md:text-lg'} 
                h-auto border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300
              `}>
                <a href="#consulta">
                  Consulta
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
