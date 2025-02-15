
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { HeroParallax } from "@/components/blocks/hero-parallax";
import { Footerdemo } from "@/components/ui/footer-section";

const products = [
  {
    title: "Sistema de Gestión Empresarial",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "E-commerce Boutique de Moda",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "App de Delivery",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Portal Educativo",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Sistema de Gestión de Clínicas",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Dashboard Analítico",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "App de Gestión de Inventarios",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Sistema de Reservas",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Portal Inmobiliario",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "CRM Empresarial",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Sistema de Recursos Humanos",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "App de Gestión de Proyectos",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Portal de Servicios Profesionales",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Sistema de Facturación",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "Plataforma de E-learning",
    link: "#",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundBeams className="opacity-20" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Services />
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Proyectos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                Descubre cómo hemos ayudado a empresas de diversos sectores a transformar sus ideas en soluciones digitales exitosas. Cada proyecto refleja nuestro compromiso con la excelencia y la innovación.
              </p>
            </div>
          </div>
          <HeroParallax products={products} />
        </div>
        <Contact />
        <Footerdemo />
      </div>
    </div>
  );
};

export default Index;
