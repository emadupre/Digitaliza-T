
"use client";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

interface SparkleButtonProps {
  text?: string;
  href?: string;
}

export const SparkleButton = ({ text = "Comencemos", href = "/contacto" }: SparkleButtonProps) => {
  const particlesRef = useRef<(SVGSVGElement | null)[]>([]);

  useEffect(() => {
    const RANDOM = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min);
    
    particlesRef.current.forEach(particle => {
      if (particle) {
        particle.style.setProperty('--x', `${RANDOM(20, 80)}`);
        particle.style.setProperty('--y', `${RANDOM(20, 80)}`);
        particle.style.setProperty('--duration', `${RANDOM(6, 20)}`);
        particle.style.setProperty('--delay', `${RANDOM(1, 10)}`);
        particle.style.setProperty('--alpha', `${RANDOM(40, 90) / 100}`);
        particle.style.setProperty('--origin-x', `${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%`);
        particle.style.setProperty('--origin-y', `${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%`);
        particle.style.setProperty('--size', `${RANDOM(40, 90) / 100}`);
      }
    });
  }, []);

  return (
    <div className="sparkle-button mt-6 flex justify-center w-full"> {/* Añadido w-full para asegurar que ocupe todo el ancho y center funcione correctamente */}
      <Link to={href} className="mx-auto"> {/* Añadido mx-auto para centrar el enlace */}
        <button className="group text-lg sm:text-xl py-3 px-8 sm:px-10 rounded-full scale-95 hover:scale-105 transition-all duration-300 text-center"> {/* Mantenido text-center */}
          <span className="spark"></span>
          <span className="backdrop"></span>
          <svg className="sparkle size-5 sm:size-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text">{text}</span>
        </button>
      </Link>
      <div className="bodydrop"></div>
      <span aria-hidden="true" className="particle-pen">
        {[...Array(10)].map((_, i) => (
          <svg
            key={i}
            ref={el => particlesRef.current[i] = el}
            className="particle"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ))}
      </span>
    </div>
  );
};
