
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-black/95 to-black border-t border-purple-500/20 py-16 relative overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600/20 rounded-full filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full filter blur-[100px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo y descripción */}
          <div className="md:col-span-2">
            <div className="relative inline-block mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-30 blur-sm"></div>
              <img 
                src="/lovable-uploads/93ab0246-c34d-4dcc-b691-7c8ca6cb9c3f.png" 
                alt="Digitaliza-T Logo" 
                className="h-20 w-auto relative"
              />
            </div>
            <p className="text-gray-400 mb-8 max-w-md">
              Transformando el futuro digital de tu negocio con soluciones tecnológicas innovadoras y estrategias personalizadas para el crecimiento online.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full border-purple-500/40 bg-black/40 hover:bg-primary/20 hover:text-primary hover:border-primary transition-all duration-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-purple-500/40 bg-black/40 hover:bg-primary/20 hover:text-primary hover:border-primary transition-all duration-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-purple-500/40 bg-black/40 hover:bg-primary/20 hover:text-primary hover:border-primary transition-all duration-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-purple-500/40 bg-black/40 hover:bg-primary/20 hover:text-primary hover:border-primary transition-all duration-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          
          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white relative inline-block">
              Enlaces
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="h-[2px] w-4 bg-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="h-[2px] w-4 bg-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="h-[2px] w-4 bg-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="h-[2px] w-4 bg-purple-500 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto y Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
            </h3>
            <p className="text-gray-400 mb-4">Mantente al día con nuestras últimas noticias y actualizaciones</p>
            
            <div className="relative mb-8 group">
              <Input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-black/50 border-purple-500/30 text-gray-300 pr-12 focus:border-purple-500 transition-colors"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 h-8 w-8 p-0 bg-purple-600/80 hover:bg-purple-600 transition-all duration-300"
                aria-label="Suscribirse"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
              <div className="absolute inset-x-0 h-px bottom-0 bg-gradient-to-r from-purple-600/0 via-purple-600/70 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white relative inline-block">
              Contáctanos
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></span>
            </h3>
            <div className="text-gray-400 space-y-2">
              <a href="mailto:info@digitaliza-t.com" className="flex items-start hover:text-purple-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@digitaliza-t.com
              </a>
              <a href="tel:+34900123456" className="flex items-start hover:text-purple-400 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +34 900 123 456
              </a>
            </div>
          </div>
        </div>
        
        <div className="my-10">
          <Separator className="bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0" />
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 group hover:text-gray-400 transition-colors duration-300">
            &copy; {currentYear} <span className="text-purple-400">Digitaliza-T</span>. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="/privacidad" className="text-gray-500 hover:text-purple-400 text-sm transition-colors relative after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-purple-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Política de Privacidad
            </a>
            <a href="/terminos" className="text-gray-500 hover:text-purple-400 text-sm transition-colors relative after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-purple-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Términos y Condiciones
            </a>
            <a href="/cookies" className="text-gray-500 hover:text-purple-400 text-sm transition-colors relative after:absolute after:left-0 after:right-0 after:bottom-0 after:h-px after:bg-purple-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
