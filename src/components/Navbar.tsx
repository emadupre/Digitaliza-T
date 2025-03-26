
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
          ? 'py-2 bg-white shadow-md' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled ? 'max-w-7xl' : 'max-w-7xl'}`}>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/93ab0246-c34d-4dcc-b691-7c8ca6cb9c3f.png" 
              alt="Digitaliza-T Logo" 
              className={`transition-all duration-300 ${scrolled ? 'h-12 w-auto' : 'h-16 w-auto'}`}
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <a 
              href="#inicio" 
              className={`transition-colors ${
                scrolled 
                  ? 'text-blue-600 text-base hover:text-blue-800' 
                  : 'text-white text-base hover:text-accent'
              }`}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className={`transition-colors ${
                scrolled 
                  ? 'text-blue-600 text-base hover:text-blue-800' 
                  : 'text-white text-base hover:text-accent'
              }`}
            >
              Servicios
            </a>
            <a 
              href="#nosotros" 
              className={`transition-colors ${
                scrolled 
                  ? 'text-blue-600 text-base hover:text-blue-800' 
                  : 'text-white text-base hover:text-accent'
              }`}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className={`transition-colors ${
                scrolled 
                  ? 'text-blue-600 text-base hover:text-blue-800' 
                  : 'text-white text-base hover:text-accent'
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
        <div className={`md:hidden ${scrolled ? 'bg-white' : 'glass'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#inicio" 
              className={`block px-3 py-2 ${
                scrolled ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-accent'
              } transition-colors`}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className={`block px-3 py-2 ${
                scrolled ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-accent'
              } transition-colors`}
            >
              Servicios
            </a>
            <a 
              href="#nosotros" 
              className={`block px-3 py-2 ${
                scrolled ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-accent'
              } transition-colors`}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className={`block px-3 py-2 ${
                scrolled ? 'text-blue-600 hover:text-blue-800' : 'text-white hover:text-accent'
              } transition-colors`}
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
