
import { SplineSceneBasic } from "@/components/ui/code-demo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center section-padding pt-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40 z-0"></div>
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-400 animate-fade-in">
              Digitaliza-T
            </h1>
            <p className="text-xl md:text-2xl mt-6 text-white/90 max-w-2xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: "200ms" }}>
              Transformando el futuro digital de tu negocio con soluciones innovadoras
            </p>
            <div className="mt-8 flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              <Button className="px-6 py-6 text-lg h-auto bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 shadow-xl shadow-purple-500/20 border-0">
                Nuestros servicios <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="px-6 py-6 text-lg h-auto border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                Contáctanos
              </Button>
            </div>
          </div>
        </div>
        <div className="relative z-5">
          <SplineSceneBasic />
        </div>
      </div>
    </section>
  );
};

export default Hero;
