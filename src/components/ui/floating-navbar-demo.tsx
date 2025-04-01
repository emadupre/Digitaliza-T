
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
      icon: <MessageSquare className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Nosotros",
      link: "#nosotros",
      icon: <Users className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contacto",
      link: "#contacto",
      icon: <MessageSquare className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
