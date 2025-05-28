
"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Home, Briefcase, Users, FolderOpen, Phone } from "lucide-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Inicio",
      link: "#inicio",
      icon: <Home className="h-4 w-4" />,
    },
    {
      name: "Servicios", 
      link: "#servicios",
      icon: <Briefcase className="h-4 w-4" />,
    },
    {
      name: "Nosotros",
      link: "#nosotros", 
      icon: <Users className="h-4 w-4" />,
    },
    {
      name: "Proyectos",
      link: "#proyectos",
      icon: <FolderOpen className="h-4 w-4" />,
    },
    {
      name: "Contacto",
      link: "#contacto",
      icon: <Phone className="h-4 w-4" />,
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
