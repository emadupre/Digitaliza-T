
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id="inicio" 
      className={`
        ${isMobile 
          ? 'min-h-screen pt-20 pb-8' 
          : 'min-h-screen pt-24 pb-12'
        } 
        flex items-center justify-center px-4 relative overflow-hidden
      `}
    >
      <div className="max-w-5xl mx-auto w-full text-center">
        {/* Título principal */}
        <div className="relative mb-6 overflow-visible">
          <h1 className={`
            ${isMobile 
              ? 'text-4xl leading-tight' 
              : 'text-6xl md:text-7xl lg:text-8xl leading-none'
            } 
            font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400 
            animate-fade-in mb-4
          `}>
            Digitaliza-T
          </h1>
        </div>
        
        {/* Descripción */}
        <p className={`
          ${isMobile 
            ? 'text-base leading-relaxed mb-8 px-2' 
            : 'text-xl md:text-2xl leading-relaxed mb-10'
          } 
          text-white/90 max-w-3xl mx-auto animate-fade-in
        `} style={{ animationDelay: "200ms" }}>
          Transformando el futuro digital de tu negocio con soluciones innovadoras
        </p>
        
        {/* Botones de acción */}
        <div className={`
          ${isMobile ? 'mt-6 space-y-4' : 'mt-8 flex justify-center gap-6'}
          animate-fade-in
        `} style={{ animationDelay: "400ms" }}>
          <Button asChild className={`
            ${isMobile 
              ? 'w-full max-w-xs mx-auto px-8 py-4 text-base' 
              : 'px-8 py-4 text-lg'
            } 
            h-auto bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 
            shadow-xl shadow-purple-500/25 border-0 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30
          `}>
            <a href="#servicios" className="flex items-center justify-center">
              Nuestros servicios 
              <ArrowRight className={`ml-2 ${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
            </a>
          </Button>
          
          <Button asChild variant="outline" className={`
            ${isMobile 
              ? 'w-full max-w-xs mx-auto px-8 py-4 text-base' 
              : 'px-8 py-4 text-lg'
            } 
            h-auto border-white/30 text-white hover:bg-white/20 backdrop-blur-sm 
            transition-all duration-300 hover:border-white/50
          `}>
            <a href="#contacto" className="flex items-center justify-center">
              Consulta gratuita
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
