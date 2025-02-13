
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/02e787e4-edc1-4555-8e33-101cfc7faa03.png" 
              alt="Digitaliza-T Logo" 
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400">
              Transformando el futuro digital de tu negocio con soluciones tecnológicas innovadoras.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@digitaliza-t.com</li>
              <li>Teléfono: +34 900 123 456</li>
              <li>Dirección: Calle Tecnología 123, Madrid</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Digitaliza-T. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
