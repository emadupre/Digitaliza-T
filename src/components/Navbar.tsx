
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md' : 'glass'}`}>
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${scrolled ? 'max-w-3xl' : 'max-w-7xl'}`}>
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/93ab0246-c34d-4dcc-b691-7c8ca6cb9c3f.png" 
              alt="Digitaliza-T Logo" 
              className={`transition-all duration-300 ${scrolled ? 'h-10 w-auto' : 'h-14 w-auto'}`}
            />
            {!scrolled && (
              <a 
                href="#home" 
                className="text-white hover:text-accent transition-colors text-lg font-medium"
              >
                Digitaliza-T
              </a>
            )}
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              className={`text-white hover:text-accent transition-colors ${scrolled ? 'text-sm' : 'text-base'}`}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className={`text-white hover:text-accent transition-colors ${scrolled ? 'text-sm' : 'text-base'}`}
            >
              Servicios
            </a>
            <a 
              href="#nosotros" 
              className={`text-white hover:text-accent transition-colors ${scrolled ? 'text-sm' : 'text-base'}`}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className={`text-white hover:text-accent transition-colors ${scrolled ? 'text-sm' : 'text-base'}`}
            >
              Contacto
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white-800 hover:text-accent"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-white hover:text-accent transition-colors">Inicio</a>
            <a href="#servicios" className="block px-3 py-2 text-white hover:text-accent transition-colors">Servicios</a>
            <a href="#nosotros" className="block px-3 py-2 text-white hover:text-accent transition-colors">Nosotros</a>
            <a href="#contacto" className="block px-3 py-2 text-white hover:text-accent transition-colors">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
