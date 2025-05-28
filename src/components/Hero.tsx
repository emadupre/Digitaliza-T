
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="inicio" className={`${isMobile ? 'min-h-[80vh] pt-20 pb-8' : 'min-h-screen pt-28 pb-16'} flex items-center justify-center section-padding relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="flex items-center justify-center">
          {/* Text Content - Centered and optimized for mobile */}
          <div className="z-10 px-4 md:px-6 text-center max-w-4xl">
            {/* Title optimized for mobile readability */}
            <div className="relative mb-4 md:mb-6 overflow-visible">
              <h1 className={`
                ${isMobile ? 'text-3xl leading-tight pb-2' : 'text-5xl md:text-6xl lg:text-7xl pb-4'} 
                font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400 
                animate-fade-in
              `}>
                Digitaliza-T
              </h1>
            </div>
            <p className={`
              ${isMobile ? 'text-base leading-relaxed mb-6' : 'text-lg md:text-2xl leading-relaxed mt-3 md:mt-4'} 
              text-white/90 max-w-2xl mx-auto animate-fade-in
            `} style={{ animationDelay: "200ms" }}>
              Transformando el futuro digital de tu negocio con soluciones innovadoras
            </p>
            <div className={`${isMobile ? 'mt-4' : 'mt-6 md:mt-8'} flex flex-col sm:flex-row justify-center gap-3 md:gap-4 animate-fade-in`} style={{ animationDelay: "400ms" }}>
              <Button asChild className={`
                ${isMobile ? 'px-6 py-3 text-base' : 'px-4 py-2 md:px-6 md:py-6 text-base md:text-lg'} 
                h-auto bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 
                shadow-xl shadow-purple-500/20 border-0 transition-all duration-300
              `}>
                <a href="#servicios">
                  Nuestros servicios <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" className={`
                ${isMobile ? 'px-6 py-3 text-base' : 'px-4 py-2 md:px-6 md:py-6 text-base md:text-lg'} 
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
