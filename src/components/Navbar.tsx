
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-2 bg-white/95 backdrop-blur-sm shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/93ab0246-c34d-4dcc-b691-7c8ca6cb9c3f.png" 
              alt="Digitaliza-T Logo" 
              className={`transition-all duration-300 ${scrolled ? 'h-12 w-auto' : 'h-16 w-auto'}`}
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              className={`transition-colors font-medium ${
                scrolled 
                  ? 'text-blue-600 hover:text-blue-800' 
                  : 'text-white hover:text-purple-300'
              }`}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className={`transition-colors font-medium ${
                scrolled 
                  ? 'text-blue-600 hover:text-blue-800' 
                  : 'text-white hover:text-purple-300'
              }`}
            >
              Servicios
            </a>
            <a 
              href="#nosotros" 
              className={`transition-colors font-medium ${
                scrolled 
                  ? 'text-blue-600 hover:text-blue-800' 
                  : 'text-white hover:text-purple-300'
              }`}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className={`transition-colors font-medium ${
                scrolled 
                  ? 'text-blue-600 hover:text-blue-800' 
                  : 'text-white hover:text-purple-300'
              }`}
            >
              Contacto
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-blue-600' : 'text-white'} hover:text-accent`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden py-4 px-4 shadow-lg bg-white/95 backdrop-blur-sm">
          <div className="flex flex-col space-y-4">
            <a 
              href="#inicio" 
              className="text-blue-600 hover:text-blue-800 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className="text-blue-600 hover:text-blue-800 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#nosotros" 
              className="text-blue-600 hover:text-blue-800 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className="text-blue-600 hover:text-blue-800 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
