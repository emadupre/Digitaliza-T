
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
      <div className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${scrolled ? 'max-w-4xl' : 'max-w-7xl'}`}>
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <img 
              src="/lovable-uploads/fbb9b1bc-849a-4db5-b147-6fca0deddf14.png" 
              alt="Digitaliza-T Logo" 
              className={`transition-all duration-300 ${scrolled ? 'h-7 w-auto' : 'h-8 w-auto'}`}
            />
            <a 
              href="#home" 
              className={`text-white hover:text-accent transition-colors ${scrolled ? 'text-sm' : ''}`}
            >
              Digitaliza-T
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#inicio" 
              className={`text-white hover:text-accent transition-colors ${scrolled ? 'text-sm' : ''}`}
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className={`text-white hover:text-accent transition-colors ${scrolled ? 'text-sm' : ''}`}
            >
              Servicios
            </a>
            <a 
              href="#nosotros" 
              className={`text-white hover:text-accent transition-colors ${scrolled ? 'text-sm' : ''}`}
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className={`text-white hover:text-accent transition-colors ${scrolled ? 'text-sm' : ''}`}
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
