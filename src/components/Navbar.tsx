
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determinar si mostrar u ocultar navbar al hacer scroll
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 70);
      setPrevScrollPos(currentScrollPos);
      
      // Determinar si aplicar estilo de fondo al hacer scroll
      if (currentScrollPos > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  // Links del navbar
  const navLinks = [
    { text: "Inicio", href: "#inicio" },
    { text: "Servicios", href: "#servicios" },
    { text: "Proyectos", href: "#proyectos" },
    { text: "Contacto", href: "#contacto" }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm`}
      initial={{ opacity: 1, y: 0 }}
      animate={{ 
        opacity: visible ? 1 : 0.5,
        y: visible ? 0 : -100,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none'
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img 
              src="/lovable-uploads/93ab0246-c34d-4dcc-b691-7c8ca6cb9c3f.png" 
              alt="Digitaliza-T Logo" 
              className={`transition-all duration-300 ${scrolled ? 'h-10 w-auto' : 'h-14 w-auto'}`}
            />
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.href} 
                className={`transition-colors font-medium text-base ${
                  scrolled 
                    ? 'text-blue-600 hover:text-blue-800' 
                    : 'text-white hover:text-purple-300'
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {link.text}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full ${
                scrolled 
                  ? 'text-blue-600 bg-white/80 hover:bg-white' 
                  : 'text-white bg-purple-500/20 hover:bg-purple-500/30'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden absolute w-full backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`${scrolled ? 'bg-white/95 shadow-lg' : 'bg-black/70'} p-5 flex flex-col space-y-4 rounded-b-xl`}>
              {navLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.href} 
                  className={`px-4 py-3 rounded-lg text-center font-medium transition-all ${
                    scrolled 
                      ? 'text-blue-600 hover:bg-blue-50' 
                      : 'text-white hover:bg-white/10'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
