
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMobile } from "@/hooks/use-mobile";

const NewNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">Custom Web Systems</span>
          </Link>

          {isMobile ? (
            <>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white p-2"
              >
                {menuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>

              {menuOpen && (
                <div className="absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md p-4 flex flex-col space-y-4">
                  <a
                    href="#servicios"
                    className="text-white hover:text-blue-300 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Servicios
                  </a>
                  <a
                    href="#proyectos"
                    className="text-white hover:text-blue-300 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Proyectos
                  </a>
                  <a
                    href="#nosotros"
                    className="text-white hover:text-blue-300 transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    Nosotros
                  </a>
                </div>
              )}
            </>
          ) : (
            <div className="flex items-center space-x-8">
              <a
                href="#servicios"
                className="text-white hover:text-blue-300 transition-colors"
              >
                Servicios
              </a>
              <a
                href="#proyectos"
                className="text-white hover:text-blue-300 transition-colors"
              >
                Proyectos
              </a>
              <a
                href="#nosotros"
                className="text-white hover:text-blue-300 transition-colors"
              >
                Nosotros
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NewNavbar;
