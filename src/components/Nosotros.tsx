import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import DisplayCards from "@/components/ui/display-cards";
import { ArrowRight } from "lucide-react";

const Nosotros = () => {
  return (
    <section id="nosotros" className="min-h-screen flex items-center justify-center section-padding py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-400 mb-4">
            Nosotros
          </h2>
          <Separator className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-purple-500 to-indigo-400" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* About Us Content */}
          <motion.div 
            className="bg-black/30 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Sobre Nosotros</h3>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                En <span className="text-purple-400 font-medium">Digitaliza-T</span>, creemos que la tecnología tiene que trabajar para vos, no al revés. Somos un equipo de programadores apasionados por crear <span className="font-medium">soluciones digitales que realmente aporten valor</span>.
              </p>
              <p>
                Desarrollamos <span className="text-purple-400 font-medium">sistemas a medida, páginas web, automatizaciones y chatbots</span>, ayudando a negocios y emprendedores a optimizar sus procesos y potenciar su presencia digital.
              </p>
              <p>
                Nos enfocamos en hacer las cosas simples, eficientes y bien hechas. Cada proyecto es único, por eso trabajamos de manera personalizada para ofrecerte herramientas que se adapten a lo que necesitás.
              </p>
              <p>
                Si querés dar el siguiente paso en la digitalización de tu negocio, <span className="text-purple-400 font-medium">hablemos y empecemos a crear algo grande juntos</span>.
              </p>
              <p className="text-xl font-medium text-purple-400 mt-6">
                📩 Contactanos y digitalizá tu empresa 🚀
              </p>
            </div>
          </motion.div>

          {/* Display Cards */}
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <DisplayCards 
              cards={[
                {
                  title: "Innovación digital",
                  description: "Soluciones tecnológicas personalizadas",
                  date: "Siempre actualizados",
                  icon: <ArrowRight className="size-4 text-purple-300" />,
                  iconClassName: "bg-purple-900",
                  titleClassName: "text-purple-400",
                  className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[30%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
                },
                {
                  title: "Experiencia probada",
                  description: "Proyectos exitosos completados",
                  date: "Resultados garantizados",
                  icon: <ArrowRight className="size-4 text-indigo-300" />,
                  iconClassName: "bg-indigo-900",
                  titleClassName: "text-indigo-400",
                  className: "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[30%] hover:before:opacity-0 before:transition-opacity before:duration:700 hover:grayscale-0 before:left-0 before:top-0",
                },
                {
                  title: "Enfoque personalizado",
                  description: "Soluciones adaptadas a tu negocio",
                  date: "Atención al detalle",
                  icon: <ArrowRight className="size-4 text-blue-300" />,
                  iconClassName: "bg-blue-900",
                  titleClassName: "text-blue-400",
                  className: "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
                },
              ]}
            />
          </motion.div>

          {/* Team Values */}
          <motion.div 
            className="lg:col-span-2 mt-6 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 backdrop-blur-md p-8 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
