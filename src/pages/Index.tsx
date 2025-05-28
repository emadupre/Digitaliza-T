
import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import { BeamsBackground } from "@/components/ui/beams-background";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingNavDemo } from "@/components/ui/floating-navbar-demo";

// Lazy load de componentes pesados para mejor rendimiento
const Services = lazy(() => import("@/components/Services"));
const Nosotros = lazy(() => import("@/components/Nosotros"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));
const Footerdemo = lazy(() => import("@/components/ui/footer-section").then(module => ({ default: module.Footerdemo })));

// Componente de loading optimizado
const SectionLoading = () => (
  <div className="flex items-center justify-center py-20">
    <div className="animate-pulse flex space-x-4">
      <div className="rounded-full bg-purple-400/20 h-4 w-4"></div>
      <div className="rounded-full bg-purple-400/20 h-4 w-4"></div>
      <div className="rounded-full bg-purple-400/20 h-4 w-4"></div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="relative w-full bg-mesh-gradient min-h-screen">
      {/* Background effects optimizados - reducida opacidad para mejor rendimiento */}
      <BeamsBackground intensity="low" className="fixed inset-0 z-0 opacity-40" />
      <BackgroundBeams className="fixed inset-0 z-0 opacity-10" />
      
      {/* Navegación flotante */}
      <FloatingNavDemo />
      
      {/* Contenido principal con lazy loading */}
      <div className="relative z-10">
        <Hero />
        
        <Suspense fallback={<SectionLoading />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Nosotros />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Projects />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Contact />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Footerdemo />
        </Suspense>
      </div>
    </div>
  );
};

export default Index;
