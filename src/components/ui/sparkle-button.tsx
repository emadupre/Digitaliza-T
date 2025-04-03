
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
    <div className="sparkle-button mt-6 flex justify-center w-full">
      <Link to={href} className="mx-auto">
        <button className="group text-xl sm:text-2xl py-4 px-10 sm:px-12 rounded-full scale-95 hover:scale-105 transition-all duration-300 text-center">
          <span className="spark"></span>
          <span className="backdrop"></span>
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
