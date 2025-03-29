
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const NewNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { name: "Inicio", path: "/", hasDropdown: false },
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
    { name: "Contacto", path: "#contacto", hasDropdown: false }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-bold text-blue-600">Digitaliza-T</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <button 
                      onClick={() => toggleDropdown(item.name)}
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <a 
                      href={item.path} 
                      className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      {item.name}
                    </a>
                  )}

                  {/* Desktop Dropdown */}
                  {item.hasDropdown && (
                    <div className="hidden group-hover:block absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contacto"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Contáctanos
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map((item) => (
              <div key={item.name} className="w-full">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex justify-between items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    {activeDropdown === item.name && (
                      <div className="pl-4 py-2 space-y-1">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.path}
                            className="block px-3 py-2 text-base text-gray-700 hover:bg-gray-100 rounded-md"
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
                    className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4">
              <a
                href="#contacto"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-base font-medium transition duration-300"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NewNavbar;
