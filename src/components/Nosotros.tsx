
import React from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Shield, Eye, RefreshCw } from "lucide-react"; // Importamos iconos minimalistas de Lucide

const Nosotros = () => {
  // Definimos nuestros valores empresariales con iconos minimalistas de Lucide
  const valores = [
    {
      titulo: "Innovación",
      descripcion: "Buscamos constantemente nuevas formas de resolver desafíos digitales.",
      icono: <Lightbulb className="h-8 w-8 text-purple-400" strokeWidth={1.5} /> // Icono minimalista con trazo fino
    },
    {
      titulo: "Calidad",
      descripcion: "Nos comprometemos con la excelencia en cada línea de código que escribimos.",
      icono: <Shield className="h-8 w-8 text-purple-400" strokeWidth={1.5} />
    },
    {
      titulo: "Transparencia",
      descripcion: "Mantenemos una comunicación clara y honesta durante todo el proceso.",
      icono: <Eye className="h-8 w-8 text-purple-400" strokeWidth={1.5} />
    },
    {
      titulo: "Adaptabilidad",
      descripcion: "Nos ajustamos rápidamente a nuevas tecnologías y necesidades cambiantes.",
      icono: <RefreshCw className="h-8 w-8 text-purple-400" strokeWidth={1.5} />
    }
  ];

  return (
    <section id="nosotros" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4 font-heading">
            Nosotros
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto"></div>
        </div>

        {/* Sección Sobre Nosotros con diseño mejorado */}
        <div className="max-w-4xl mx-auto mb-24 backdrop-blur-xl bg-black/30 rounded-2xl shadow-xl p-8 md:p-10 border border-purple-500/20">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-6 relative inline-block">
                <span className="relative z-10">Sobre Nosotros</span>
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
              </h3>
              
              <div className="prose prose-lg max-w-none text-white/80 space-y-6">
                <p>
                  En <em className="text-purple-300">Digitaliza-T</em>, creemos que la tecnología tiene que trabajar para vos, no al revés. 
                  Somos un equipo de <strong className="text-white">programadores apasionados</strong> que impulsa tu negocio al siguiente nivel digital.
                </p>
                
                <p>
                  Desarrollamos <em className="text-purple-300">sistemas a medida, páginas web, automatizaciones y chatbots</em>, 
                  transformando ideas en soluciones tecnológicas tangibles que generan resultados.
                </p>
                
                <div className="hidden md:block">
                  <a 
                    href="#contacto" 
                    className="inline-flex items-center mt-4 text-purple-300 hover:text-purple-100 transition-colors group"
                  >
                    <span>Comenzá tu transformación digital</span>
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 opacity-30 blur-xl"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl border border-white/10">
                  <img 
                    src="/lovable-uploads/93ab0246-c34d-4dcc-b691-7c8ca6cb9c3f.png" 
                    alt="Equipo Digitaliza-T" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 md:mt-12 text-center md:hidden">
            <a 
              href="#contacto" 
              className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20"
            >
              Contactanos
            </a>
          </div>
        </div>
        
        {/* Nueva sección: Nuestros Valores con iconos minimalistas */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-12 text-center font-heading">
            <span className="relative">
              Nuestros Valores
              <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
            </span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {valores.map((valor, index) => (
              <Card key={index} className="bg-black/40 backdrop-blur-md border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden group">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    {/* Reemplazamos el emoji por el componente de icono */}
                    <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                      {valor.icono}
                    </div>
                    <h4 className="text-xl font-medium text-white mb-2">{valor.titulo}</h4>
                    <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 mb-4 transform group-hover:scale-x-150 transition-transform duration-300"></div>
                    <p className="text-white/70">{valor.descripcion}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Sección final con CTA */}
        <div className="max-w-3xl mx-auto text-center backdrop-blur-xl bg-black/20 rounded-2xl shadow-lg p-8 border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-white/90 text-lg flex-1 text-left">
              <h3 className="text-2xl font-bold text-white mb-4">¿Listo para transformar tu negocio?</h3>
              <p>Si querés dar el siguiente paso en la digitalización de tu empresa, <em className="text-purple-300">hablemos y empecemos a crear algo grande juntos</em>.</p>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="#contacto" 
                className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/20"
              >
                Contactanos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
