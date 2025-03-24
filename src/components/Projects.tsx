
import { useState } from 'react';
import { GradualSpacing } from "@/components/ui/gradual-spacing";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

// Datos de proyectos
const projectsData = [
  {
    id: 1,
    title: "Sistema de Turnos Online",
    image: "https://images.unsplash.com/photo-1633526543814-9718c8922b7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shortDesc: "Plataforma para gestión de turnos con calendario interactivo",
    fullDesc: "Desarrollo de un sistema de turnos para centros de estética y salud. Permite la reserva en línea, recordatorios automáticos y administración de horarios. Integración con Google Calendar y notificaciones por WhatsApp y email.",
    tags: ["Reservas", "React", "Node.js", "Automatización"],
    client: "Estetica Bella",
    year: "2025",
    category: "aplicación"
  },
  {
    id: 2,
    title: "Desarrollo de Página Web Corporativa",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDesc: "Diseño y desarrollo de presencia digital",
    fullDesc: "Creación de una página web moderna y optimizada para SEO. Diseño responsivo, integración con redes sociales y sistema de administración de contenido personalizado.",
    tags: ["Web", "WordPress", "SEO", "UX/UI"],
    client: "Olimpia Capital",
    year: "2025",
    category: "web"
  },
  {
    id: 3,
    title: "Automatización de Bots para WhatsApp",
    image: "https://images.unsplash.com/photo-1611746869696-d09bce200020?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    shortDesc: "Chatbots inteligentes para atención al cliente",
    fullDesc: "Desarrollo de bots automatizados para atención en WhatsApp. Integración con bases de datos y respuestas inteligentes mediante IA. Permite gestionar consultas, reservas y pedidos sin intervención humana.",
    tags: ["Bots", "Python", "IA", "WhatsApp"],
    client: "EduTech Academy",
    year: "2024",
    category: "automatización"
  },
  {
    id: 4,
    title: "Página Web para Artista",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDesc: "Portfolio digital con galería interactiva y tienda online",
    fullDesc: "Diseño y desarrollo de una página web para un artista. Incluye galería de obras, biografía, blog, sistema de reservas para eventos y tienda online para la venta de productos exclusivos. Optimizada para dispositivos móviles y con integración en redes sociales.",
    tags: ["Web", "Portfolio", "E-commerce", "SEO"],
    client: "Jeremy Baxter",
    year: "2023",
    category: "web"
  },
  // Proyectos adicionales para el modal de "Ver Más"
  {
    id: 5,
    title: "Aplicación de Seguimiento de Gastos",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDesc: "App móvil para control de finanzas personales",
    fullDesc: "Desarrollo de una aplicación móvil para el seguimiento de gastos personales y empresariales. Incluye categorización automática, reportes visuales, recordatorios de pagos y sincronización con cuentas bancarias.",
    tags: ["App Móvil", "React Native", "Firebase", "Finanzas"],
    client: "FinTrack Solutions",
    year: "2024",
    category: "aplicación"
  },
  {
    id: 6,
    title: "E-commerce para Tienda de Moda",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDesc: "Plataforma de ventas online con gestión de inventario",
    fullDesc: "Creación de tienda online para marca de moda con sistema de gestión de inventario en tiempo real, integración con pasarelas de pago, seguimiento de envíos y programa de fidelización de clientes.",
    tags: ["E-commerce", "Shopify", "Marketing Digital", "Inventario"],
    client: "Trend Fashion",
    year: "2024",
    category: "web"
  },
  {
    id: 7,
    title: "CRM para Inmobiliaria",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDesc: "Sistema de gestión de clientes y propiedades",
    fullDesc: "Desarrollo de un CRM personalizado para inmobiliaria con gestión de propiedades, seguimiento de clientes potenciales, automatización de comunicaciones y generación de documentos legales.",
    tags: ["CRM", "React", "Node.js", "Inmobiliaria"],
    client: "PropTech Homes",
    year: "2023",
    category: "aplicación"
  },
  {
    id: 8,
    title: "Chatbot para Atención Médica",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDesc: "Asistente virtual para consultas médicas preliminares",
    fullDesc: "Desarrollo de un chatbot basado en IA para triaje médico inicial, programación de citas y seguimiento de tratamientos. Integración con historial clínico electrónico y sistema de notificaciones para profesionales de la salud.",
    tags: ["IA", "NLP", "Salud", "Automatización"],
    client: "MediCare Group",
    year: "2024",
    category: "automatización"
  }
];

interface ProjectCardProps {
  project: typeof projectsData[0];
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/20 ${featured ? 'bg-gradient-to-br from-primary/5 to-secondary/5' : ''}`}>
        <div className="relative h-56 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <CardContent className="flex-grow p-6">
          <div className="flex flex-col h-full">
            <CardTitle className="mb-2 text-xl group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
            <CardDescription className="mb-4">{project.shortDesc}</CardDescription>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.slice(0, 2).map((tag, index) => (
                <Badge key={index} variant="outline" className="bg-primary/10 text-primary">{tag}</Badge>
              ))}
              {project.tags.length > 2 && (
                <Badge variant="outline" className="bg-primary/5">+{project.tags.length - 2}</Badge>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 border-t border-gray-100">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary transition-colors duration-300">
                Ver detalles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
              <DialogHeader>
                <div className="flex justify-between items-start mb-2">
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                </div>
                <div className="mb-4">
                  <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-md" />
                </div>
                <div className="mb-4">
                  <p className="text-lg">
                    {project.fullDesc}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Cliente</h4>
                    <p className="text-gray-600 dark:text-gray-300">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Año</h4>
                    <p className="text-gray-600 dark:text-gray-300">{project.year}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium mb-2">Tecnologías</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-primary/10 text-primary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </DialogHeader>
              <div className="mt-6 flex justify-center">
                <Button className="group">
                  Solicitar un proyecto similar <ExternalLink className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const [isOpenAllProjects, setIsOpenAllProjects] = useState(false);
  const featuredProjects = projectsData.slice(0, 4);
  
  // Categorías únicas para los tabs del modal
  const categories = Array.from(new Set(projectsData.map(project => project.category)));

  return (
    <section id="proyectos" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <GradualSpacing 
            text="Casos de éxito que muestran nuestras soluciones en acción"
            className="text-2xl md:text-4xl font-semibold leading-relaxed text-white"
          />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nuestros Proyectos</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Descubre cómo hemos ayudado a empresas de diversos sectores a transformar digitalmente su negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} featured={project.id === 1} />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="group">
                Ver más proyectos <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
              <DialogHeader className="mb-6">
                <DialogTitle className="text-2xl md:text-3xl">Todos nuestros proyectos</DialogTitle>
              </DialogHeader>
              
              <Tabs defaultValue={categories[0]} className="w-full">
                <TabsList className="mb-6 flex flex-wrap justify-center">
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      className="capitalize"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {categories.map((category) => (
                  <TabsContent key={category} value={category} className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {projectsData
                        .filter(project => project.category === category)
                        .map(project => (
                          <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Projects;
