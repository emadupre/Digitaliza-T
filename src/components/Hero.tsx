
import React from "react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative z-10 container mx-auto px-4 py-32 md:py-40 lg:py-52 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Custom Web Systems
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Creando soluciones digitales extraordinarias para impulsar tu negocio
          y transformar tu presencia online.
        </p>
        <div className="flex justify-center">
          <Button variant="hero" className="text-center mx-auto flex justify-center">
            Comencemos
          </Button>
        </div>
      </div>
    </section>
  );
};
