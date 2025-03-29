
import React from "react";

const Nosotros = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Nosotros
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            <em>Sobre Nosotros</em>
          </h3>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              En <em>Digitaliza-T</em>, creemos que la tecnología tiene que trabajar para vos, no al revés. 
              Somos un equipo de programadores apasionados por crear <strong>soluciones digitales que realmente aporten valor</strong>.
            </p>
            
            <p>
              Desarrollamos <em>sistemas a medida, páginas web, automatizaciones y chatbots</em>, 
              ayudando a negocios y emprendedores a optimizar sus procesos y potenciar su presencia digital.
            </p>
            
            <p>
              Nos enfocamos en hacer las cosas simples, eficientes y bien hechas. 
              Cada proyecto es único, por eso trabajamos de manera personalizada 
              para ofrecerte herramientas que se adapten a lo que necesitás.
            </p>
            
            <p>
              Si querés dar el siguiente paso en la digitalización de tu negocio, 
              <em>hablemos y empecemos a crear algo grande juntos</em>.
            </p>
            
            <div className="text-center pt-4">
              <p className="text-xl font-medium">
                📩 <em>Contactanos y digitalizá tu empresa 🚀</em>
              </p>
              <div className="mt-8">
                <a 
                  href="#contacto" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Contactanos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
