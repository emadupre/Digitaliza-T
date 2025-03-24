
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <img 
              src="/lovable-uploads/02e787e4-edc1-4555-8e33-101cfc7faa03.png" 
              alt="Digitaliza-T Logo" 
              className="h-10 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6">
              Transformando el futuro digital de tu negocio con soluciones tecnológicas innovadoras.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="rounded-full hover:bg-gray-800 hover:text-primary hover:border-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-gray-800 hover:text-primary hover:border-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-gray-800 hover:text-primary hover:border-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full hover:bg-gray-800 hover:text-primary hover:border-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="h-1 w-1 bg-primary rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="h-1 w-1 bg-primary rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="h-1 w-1 bg-primary rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center group">
                  <span className="h-1 w-1 bg-primary rounded-full mr-2 group-hover:w-2 transition-all"></span>
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-primary">Contacto</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start hover:text-primary transition-colors duration-300 group">
                <div className="mr-3 mt-1 text-primary group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="hover:underline">info@digitaliza-t.com</span>
              </li>
              <li className="flex items-start hover:text-primary transition-colors duration-300 group">
                <div className="mr-3 mt-1 text-primary group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="hover:underline">+34 900 123 456</span>
              </li>
              <li className="flex items-start hover:text-primary transition-colors duration-300 group">
                <div className="mr-3 mt-1 text-primary group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>Calle Tecnología 123<br/>28021 Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Digitaliza-T. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="/privacidad" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Política de Privacidad
            </a>
            <a href="/terminos" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Términos y Condiciones
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
