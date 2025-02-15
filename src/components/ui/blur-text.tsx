
"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface BlurTextProps {
  text: string;
  className?: string;
}

export const BlurText = ({ text, className = "" }: BlurTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5 }}
      className={className}
    >
      <motion.p
        variants={{
          hidden: { filter: "blur(10px)", opacity: 0 },
          visible: {
            filter: "blur(0px)",
            opacity: 1,
            transition: {
              duration: 1,
            },
          },
        }}
        className="text-2xl md:text-4xl font-semibold text-center max-w-4xl mx-auto leading-relaxed"
      >
        {text}
      </motion.p>
    </motion.div>
  );
};
