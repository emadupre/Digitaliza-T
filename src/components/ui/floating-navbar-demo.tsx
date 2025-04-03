
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, MessageSquare, Briefcase, Users } from "lucide-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Inicio",
      link: "#inicio",
      icon: <Home className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Servicios",
      link: "#servicios",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Proyectos",
      link: "#proyectos",
      icon: <Briefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Nosotros",
      link: "#nosotros",
      icon: <Users className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // Eliminada la opción de Contacto del menú de navegación
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
