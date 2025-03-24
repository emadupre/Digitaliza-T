
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
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { X } from "lucide-react";

// Datos de proyectos
const projectsData = [
  {
    id: 1,
    title: "E-commerce para moda sostenible",
    image: "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDesc: "Plataforma de venta online para productos de moda sostenible",
    fullDesc: "Desarrollo completo de una plataforma e-commerce para una marca de moda sostenible. Incluye catálogo, sistema de pagos, gestión de inventario y panel de administración personalizado. Implementamos un diseño responsivo y optimizado para SEO que resultó en un aumento del 43% en ventas online.",
    tags: ["E-commerce", "React", "Node.js", "SEO"],
    client: "EcoFashion",
    year: "2023"
  },
  {
    id: 2,
    title: "App de delivery para restaurantes",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDesc: "Aplicación móvil para gestionar pedidos a domicilio",
    fullDesc: "Diseño y desarrollo de una aplicación móvil que permite a los restaurantes gestionar sus pedidos a domicilio sin depender de plataformas externas. Incluye sistema de notificaciones, seguimiento en tiempo real y analíticas de ventas. La aplicación ha permitido a los clientes reducir sus comisiones en un 25%.",
    tags: ["App Móvil", "React Native", "Firebase", "Geolocalización"],
    client: "FoodConnect",
    year: "2022"
  },
  {
    id: 3,
    title: "Plataforma educativa online",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDesc: "Sistema LMS para cursos virtuales",
    fullDesc: "Creación de una plataforma educativa online con funcionalidades de LMS (Learning Management System). Incluye gestión de cursos, sistema de videoconferencias integrado, evaluaciones automatizadas y certificaciones digitales. La plataforma ha permitido a la institución expandir su oferta educativa internacionalmente.",
    tags: ["Educación", "LMS", "Angular", "AWS"],
    client: "EduTech Academy",
    year: "2023"
  },
  {
    id: 4,
    title: "Dashboard para IoT industrial",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    shortDesc: "Panel de control para monitoreo de dispositivos IoT",
    fullDesc: "Desarrollo de un dashboard para el monitoreo en tiempo real de dispositivos IoT en entornos industriales. El sistema procesa más de 10,000 puntos de datos por minuto, genera alertas automatizadas y proporciona visualizaciones avanzadas que han ayudado a optimizar la producción en un 17%.",
    tags: ["IoT", "Dashboard", "BigData", "React"],
    client: "IndusTech Solutions",
    year: "2022"
  },
];

interface ProjectCardProps {
  project: typeof projectsData[0];
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/20">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="flex-grow p-6">
        <CardTitle className="mb-2 text-xl">{project.title}</CardTitle>
        <CardDescription className="mb-4">{project.shortDesc}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 2).map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-primary/10 text-primary">{tag}</Badge>
          ))}
          {project.tags.length > 2 && (
            <Badge variant="outline" className="bg-primary/5">+{project.tags.length - 2}</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t border-gray-100">
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="outline" className="w-full">Ver detalles</Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
            <AlertDialogHeader>
              <div className="flex justify-between items-start mb-2">
                <AlertDialogTitle className="text-2xl">{project.title}</AlertDialogTitle>
                <AlertDialogCancel className="h-8 w-8 p-0 rounded-full">
                  <X className="h-4 w-4" />
                </AlertDialogCancel>
              </div>
              <div className="mb-4">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-md" />
              </div>
              <div className="mb-4">
                <AlertDialogDescription className="text-lg">
                  {project.fullDesc}
                </AlertDialogDescription>
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
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Solicitar un proyecto similar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
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
          {projectsData.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
