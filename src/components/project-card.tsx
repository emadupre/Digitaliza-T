
import { motion } from "framer-motion";
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
import { ArrowRight, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  client: string;
  year: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
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
