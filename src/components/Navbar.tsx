
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/02e787e4-edc1-4555-8e33-101cfc7faa03.png" 
              alt="Digitaliza-T Logo" 
              className="h-8 w-auto mb-6 invert"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-800 hover:text-accent transition-colors">Inicio</a>
            <a href="#servicios" className="text-gray-800 hover:text-accent transition-colors">Servicios</a>
            <a href="#nosotros" className="text-gray-800 hover:text-accent transition-colors">Nosotros</a>
            <a href="#contacto" className="text-gray-800 hover:text-accent transition-colors">Contacto</a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-accent"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#inicio" className="block px-3 py-2 text-gray-800 hover:text-accent transition-colors">Inicio</a>
            <a href="#servicios" className="block px-3 py-2 text-gray-800 hover:text-accent transition-colors">Servicios</a>
            <a href="#nosotros" className="block px-3 py-2 text-gray-800 hover:text-accent transition-colors">Nosotros</a>
            <a href="#contacto" className="block px-3 py-2 text-gray-800 hover:text-accent transition-colors">Contacto</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
