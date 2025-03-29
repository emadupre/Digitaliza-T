
import { useIsMobile } from "@/hooks/use-mobile";
import { SplineSceneBasic } from "@/components/ui/code-demo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center section-padding pt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content - Left Side */}
          <div className="z-10 px-4 md:px-6 text-center md:text-left order-2 md:order-1">
            {/* Title with proper line height and padding to fully display text */}
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-400 animate-fade-in pb-2">
                Digitaliza-T
              </h1>
            </div>
            <p className="text-xl md:text-2xl mt-4 text-white/90 max-w-xl mx-auto md:mx-0 animate-fade-in leading-relaxed" style={{ animationDelay: "200ms" }}>
              Transformando el futuro digital de tu negocio con soluciones innovadoras
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button className="px-6 py-6 text-lg h-auto bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 shadow-xl shadow-purple-500/20 border-0">
                Nuestros servicios <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-6 py-6 text-lg h-auto border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                Contáctanos
              </Button>
            </div>
          </div>
          
          {/* 3D Model - Right Side - Only show on desktop */}
          {!isMobile && (
            <div className="relative z-5 order-1 md:order-2">
              <SplineSceneBasic />
            </div>
          )}
          
          {/* Alternative image for mobile */}
          {isMobile && (
            <div className="order-1 flex justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full opacity-70 blur-xl"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
