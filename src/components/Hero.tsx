
import { useIsMobile } from "@/hooks/use-mobile";
import { SplineSceneBasic } from "@/components/ui/code-demo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center section-padding pt-28 pb-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content - Left Side */}
          <div className="z-10 px-4 md:px-6 text-center md:text-left order-2 md:order-1">
            {/* Title with proper containment and padding */}
            <div className="relative mb-6 overflow-visible">
              <h1 className={`
                ${isMobile ? 'text-4xl pb-2' : 'text-5xl md:text-6xl lg:text-7xl pb-4'} 
                font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-400 
                animate-fade-in leading-tight
              `}>
                Digitaliza-T
              </h1>
            </div>
            <p className="text-lg md:text-2xl mt-4 text-white/90 max-w-xl mx-auto md:mx-0 animate-fade-in leading-relaxed" style={{ animationDelay: "200ms" }}>
              Transformando el futuro digital de tu negocio con soluciones innovadoras
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button asChild className="px-4 py-2 md:px-6 md:py-6 text-base md:text-lg h-auto bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 shadow-xl shadow-purple-500/20 border-0">
                <a href="#servicios">
                  Nuestros servicios <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="px-4 py-2 md:px-6 md:py-6 text-base md:text-lg h-auto border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                <a href="#consulta">
                  Consulta
                </a>
              </Button>
            </div>
          </div>
          
          {/* 3D Model - Right Side - Only show on desktop */}
          {!isMobile && (
            <div className="relative z-5 order-1 md:order-2">
              <SplineSceneBasic />
            </div>
          )}
          
          {/* Alternative design for mobile */}
          {isMobile && (
            <div className="order-1 flex justify-center">
              <div className="w-36 h-36 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full opacity-70 blur-xl animate-pulse-soft"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
