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
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/project-card";
import { projectsData } from "@/lib/project-data";

const Projects = () => {
  const featuredProject = projectsData[0];
  const categories = Array.from(new Set(projectsData.map(project => project.category)));

  return (
    <section id="proyectos" className="section-padding py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 max-w-3xl">
          <GradualSpacing 
            text="Soluciones digitales que transforman empresas"
            className="text-2xl md:text-4xl font-semibold leading-tight md:leading-relaxed text-white"
          />
        </div>

        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nuestros Proyectos</h2>
          <p className="text-gray-300">
            Descubre cómo impulsamos la transformación digital de empresas innovadoras
          </p>
        </div>

        <div className="flex flex-col items-center max-w-4xl mx-auto">
          {/* Featured project card with bigger size */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full mb-10"
          >
            <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
              <div className="relative h-[400px] overflow-hidden">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{featuredProject.title}</h3>
                  <p className="text-lg text-white/80 mb-4 max-w-2xl">{featuredProject.shortDesc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="bg-white/10 text-white border-white/20">{tag}</Badge>
                    ))}
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 transition-colors duration-200">
                        Ver detalles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
                      <DialogHeader>
                        <div className="flex justify-between items-start mb-2">
                          <DialogTitle className="text-2xl">{featuredProject.title}</DialogTitle>
                        </div>
                        <div className="mb-4">
                          <img src={featuredProject.image} alt={featuredProject.title} className="w-full h-64 object-cover rounded-md" />
                        </div>
                        <div className="mb-4">
                          <p className="text-lg">
                            {featuredProject.fullDesc}
                          </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium mb-2">Cliente</h4>
                            <p className="text-gray-600 dark:text-gray-300">{featuredProject.client}</p>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Año</h4>
                            <p className="text-gray-600 dark:text-gray-300">{featuredProject.year}</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h4 className="font-medium mb-2">Tecnologías</h4>
                          <div className="flex flex-wrap gap-2">
                            {featuredProject.tags.map((tag, index) => (
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
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-10">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="text-white border-primary/30 hover:bg-primary/10 hover:border-primary backdrop-blur-sm text-lg px-8 py-6 h-auto group"
                >
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
      </div>
    </section>
  );
};

export default Projects;
