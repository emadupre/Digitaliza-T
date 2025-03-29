
import { Separator } from "@/components/ui/separator";

const Nosotros = () => {
  return (
    <section id="nosotros" className="min-h-screen flex items-center justify-center section-padding py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-400 mb-4">
            Nosotros
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Conoce al equipo detrás de Digitaliza-T
          </p>
          <Separator className="w-24 h-1 mx-auto my-8 bg-gradient-to-r from-purple-500 to-indigo-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Our Story */}
          <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Nuestra Historia</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Digitaliza-T nació de la pasión compartida por dos estudiantes de programación 
              que creyeron en el poder de la tecnología para transformar negocios. Lo que 
              comenzó como proyectos universitarios se convirtió rápidamente en soluciones 
              reales para clientes reales.
            </p>
            <p className="text-white/80 leading-relaxed">
              Nuestra trayectoria está marcada por el constante aprendizaje y la búsqueda de 
              la excelencia técnica. Cada proyecto completado con éxito nos ha permitido 
              perfeccionar nuestras habilidades y expandir nuestra visión de lo que es posible 
              lograr con código bien escrito y diseño centrado en el usuario.
            </p>
          </div>

          {/* Our Approach */}
          <div className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Nuestra Filosofía</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Creemos que la tecnología debe ser accesible y efectiva. Nuestro enfoque combina 
              creatividad técnica con comprensión profunda de las necesidades de nuestros clientes, 
              creando soluciones digitales que no solo lucen bien, sino que generan resultados tangibles.
            </p>
            <p className="text-white/80 leading-relaxed">
              Cada línea de código que escribimos está pensada para optimizar el rendimiento, 
              mejorar la experiencia del usuario y generar un impacto positivo. Nuestro objetivo 
              no es solo construir sitios web o aplicaciones, sino crear herramientas digitales 
              que impulsen el crecimiento de tu negocio.
            </p>
          </div>

          {/* Team Values */}
          <div className="lg:col-span-2 mt-6 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-md p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-black/20 p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                <h4 className="text-xl font-bold text-purple-400 mb-2">Innovación</h4>
                <p className="text-white/70">
                  Buscamos constantemente nuevas tecnologías y enfoques para ofrecer soluciones más eficientes y efectivas.
                </p>
              </div>
              <div className="bg-black/20 p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                <h4 className="text-xl font-bold text-purple-400 mb-2">Calidad</h4>
                <p className="text-white/70">
                  Nos comprometemos con la excelencia técnica y la atención meticulosa a cada detalle en nuestros proyectos.
                </p>
              </div>
              <div className="bg-black/20 p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                <h4 className="text-xl font-bold text-purple-400 mb-2">Colaboración</h4>
                <p className="text-white/70">
                  Trabajamos estrechamente con nuestros clientes para entender sus necesidades y crear soluciones personalizadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
