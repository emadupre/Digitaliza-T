
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-black/80 to-black border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <img 
              src="/lovable-uploads/02e787e4-edc1-4555-8e33-101cfc7faa03.png" 
              alt="Digitaliza-T Logo" 
              className="h-12 w-auto mb-6 invert"
            />
            <p className="text-gray-400 mb-8 max-w-md">
              Transformando el futuro digital de tu negocio con soluciones tecnológicas innovadoras y estrategias personalizadas para el crecimiento online.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-gray-700 hover:bg-primary/10 hover:text-primary hover:border-primary transition-all duration-300">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          
          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Enlaces</h3>
            <ul className="space-y-4">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="h-[2px] w-4 bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="h-[2px] w-4 bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="h-[2px] w-4 bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="h-[2px] w-4 bg-primary mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto y Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-400 mb-4">Mantente al día con nuestras últimas noticias y actualizaciones</p>
            
            <div className="relative mb-8">
              <Input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="bg-black/30 border-gray-700 text-gray-300 pr-12 focus:border-primary"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1 h-8 w-8 p-0 bg-primary/80 hover:bg-primary"
                aria-label="Suscribirse"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path d="M3.105 2.288a.75.75 0 0 0-.826.826l1.414 8.955a.75.75 0 0 0 .53.53l8.955 1.414a.75.75 0 0 0 .826-.826l-1.414-8.955a.75.75 0 0 0-.53-.53l-8.955-1.414Z" />
                  <path d="m18.483 12.658-1.664-1.664a.75.75 0 0 0-1.06 0l-6.184 6.184a.75.75 0 0 0 0 1.06l1.664 1.664a.75.75 0 0 0 1.06 0l6.184-6.184a.75.75 0 0 0 0-1.06Z" />
                </svg>
              </Button>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-white">Contáctanos</h3>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@digitaliza-t.com
              </p>
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +34 900 123 456
              </p>
            </div>
          </div>
        </div>
        
        <Separator className="my-10 bg-gray-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Digitaliza-T. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="/privacidad" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="/terminos" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Términos y Condiciones
            </a>
            <a href="/cookies" className="text-gray-500 hover:text-primary text-sm transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
