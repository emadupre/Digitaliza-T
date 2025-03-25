
import { SplineSceneBasic } from "@/components/ui/code-demo";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center section-padding pt-24 relative">
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/60 animate-fade-in">
              Digitaliza-T
            </h1>
            <p className="text-xl md:text-2xl mt-4 text-white/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "200ms" }}>
              Transformando el futuro digital de tu negocio
            </p>
          </div>
        </div>
        <SplineSceneBasic />
      </div>
    </section>
  );
};

export default Hero;
