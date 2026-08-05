"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
  id?: string;
};

const EASE_OUT_EXPRESSIVE = [0.16, 1, 0.3, 1] as const;

/**
 * Fade-up on scroll entry. Rare-per-page motion (section entries only),
 * so a slightly longer duration than a UI micro-interaction is appropriate.
 * Honors prefers-reduced-motion by dropping the translate and keeping opacity.
 */
export default function ScrollReveal({
  children,
  className,
  delay = 0,
  as = "div",
  id,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.64,
        delay,
        ease: EASE_OUT_EXPRESSIVE,
      },
    },
  };

  const MotionTag = as === "li" ? motion.li : motion.div;

  return (
    <MotionTag
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
