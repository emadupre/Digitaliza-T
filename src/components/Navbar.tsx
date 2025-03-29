
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-black/80 backdrop-blur-md border-b border-white/10' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/93ab0246-c34d-4dcc-b691-7c8ca6cb9c3f.png" 
              alt="Digitaliza-T Logo" 
              className={`transition-all duration-300 ${scrolled ? 'h-8 w-auto' : 'h-12 w-auto'}`}
            />
            <a 
              href="#inicio" 
              className={`ml-3 font-heading text-white hover:text-purple-400 transition-colors ${
                scrolled ? 'text-lg' : 'text-xl'
              }`}
            >
              Digitaliza-T
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="flex space-x-1">
                {[
                  { href: "#inicio", label: "Inicio" },
                  { href: "#servicios", label: "Servicios" },
                  { href: "#nosotros", label: "Nosotros" },
                  { href: "#proyectos", label: "Proyectos" },
                  { href: "#contacto", label: "Contacto" },
                ].map((item) => (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
                        "bg-transparent hover:bg-purple-500/20 hover:text-purple-300",
                        "focus:bg-purple-500/20 focus:text-purple-300 focus:outline-none",
                        scrolled ? "text-sm" : "text-base"
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md hover:bg-purple-500/20 transition-colors ${
                isOpen ? 'bg-purple-500/20' : ''
              }`}
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
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-xl border-t border-b border-white/10">
          {[
            { href: "#inicio", label: "Inicio" },
            { href: "#servicios", label: "Servicios" },
            { href: "#nosotros", label: "Nosotros" },
            { href: "#proyectos", label: "Proyectos" },
            { href: "#contacto", label: "Contacto" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-300 hover:bg-purple-500/20 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
