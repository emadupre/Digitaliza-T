
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { name: "Inicio", path: "#inicio", hasDropdown: false },
    { 
      name: "Servicios", 
      path: "#servicios", 
      hasDropdown: true,
      dropdownItems: [
        { name: "Desarrollo Web", path: "#desarrollo-web" },
        { name: "Sistemas a Medida", path: "#sistemas" },
        { name: "Automatizaciones", path: "#automatizaciones" },
        { name: "Chatbots", path: "#chatbots" }
      ]
    },
    { name: "Proyectos", path: "#proyectos", hasDropdown: false },
    { name: "Nosotros", path: "#nosotros", hasDropdown: false },
    // Eliminamos el ítem "Contacto" del menú para evitar redundancia
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled 
          ? 'py-2 bg-black/80 backdrop-blur-md border-b border-white/10' 
          : 'py-4 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/93ab0246-c34d-4dcc-b691-7c8ca6cb9c3f.png" 
              alt="Digitaliza-T Logo" 
              className={cn("transition-all duration-300", scrolled ? 'h-9 w-auto' : 'h-12 w-auto')}
            />
            <a 
              href="#inicio" 
              className={cn(
                "ml-3 font-heading text-white hover:text-purple-400 transition-colors",
                scrolled ? 'text-lg' : 'text-xl'
              )}
            >
              Digitaliza-T
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <button 
                    onClick={() => toggleDropdown(item.name)}
                    className="px-4 py-2 rounded-md text-sm font-medium text-white hover:text-purple-300 hover:bg-purple-500/20 transition-all flex items-center"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                ) : (
                  <a
                    href={item.path}
                    className={cn(
                      "px-4 py-2 rounded-md text-sm font-medium text-white hover:text-purple-300 hover:bg-purple-500/20 transition-all",
                      scrolled ? 'text-sm' : 'text-base'
                    )}
                  >
                    {item.name}
                  </a>
                )}

                {/* Desktop Dropdown */}
                {item.hasDropdown && (
                  <div className="hidden group-hover:block absolute left-0 mt-2 w-48 bg-black/90 backdrop-blur-xl rounded-md shadow-lg border border-white/10 overflow-hidden">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-white hover:text-purple-300 hover:bg-purple-500/20"
                          role="menuitem"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Button - Mantenemos solo este */}
          <div className="hidden md:block">
            <a
              href="#contacto"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300 shadow-lg shadow-purple-500/20"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-purple-500/20 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-xl border-t border-b border-white/10">
          {navItems.map((item) => (
            <div key={item.name} className="w-full">
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex justify-between items-center text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-transform", 
                      activeDropdown === item.name ? 'rotate-180' : ''
                    )} />
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {activeDropdown === item.name && (
                    <div className="pl-4 py-2 space-y-1">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.path}
                          className="block px-3 py-2 text-base text-white hover:text-purple-300 hover:bg-purple-500/20 rounded-md"
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.path}
                  className="block text-white hover:text-purple-300 px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
          <div className="pt-4">
            <a
              href="#contacto"
              className="block w-full text-center bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-4 py-2 rounded-md text-base font-medium transition duration-300 shadow-lg shadow-purple-500/20"
              onClick={() => setIsOpen(false)}
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
