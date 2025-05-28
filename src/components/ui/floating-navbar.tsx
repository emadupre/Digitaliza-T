
"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { useIsMobile } from "@/hooks/use-mobile";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const isMobile = useIsMobile();

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Only hide/show on scroll for better performance
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  // Smooth scroll function
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-4 md:top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black/80 backdrop-blur-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] items-center justify-center",
          isMobile ? "px-2 py-1 space-x-1" : "pr-2 pl-4 py-2 space-x-4",
          className
        )}
      >
        {/* Logo - hidden on mobile for space */}
        {!isMobile && (
          <div className="mr-2">
            <img 
              src="/lovable-uploads/93ab0246-c34d-4dcc-b691-7c8ca6cb9c3f.png" 
              alt="Logo" 
              className="h-10 md:h-14 w-auto"
              loading="eager"
            />
          </div>
        )}
        
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            onClick={(e) => handleNavClick(e, navItem.link)}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-300 transition-colors duration-200",
              isMobile ? "p-2" : "px-2 py-1"
            )}
          >
            <span className={isMobile ? "block" : "block sm:hidden"}>{navItem.icon}</span>
            <span className={isMobile ? "hidden" : "hidden sm:block text-sm"}>{navItem.name}</span>
          </a>
        ))}
        <a href="#contacto" onClick={(e) => handleNavClick(e, "#contacto")}>
          <Button className={cn(
            "border text-sm font-medium relative border-white/[0.2] text-white bg-transparent hover:bg-white/10 rounded-full transition-all duration-200",
            isMobile ? "px-3 py-1 text-xs" : "px-4 py-2"
          )}>
            <span>{isMobile ? "Contacto" : "Contáctanos"}</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
          </Button>
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
