"use client";

import { motion, Variants } from "motion/react";

interface Props {
  children: React.ReactNode;
  once?: boolean;
}

const FadeInScrollVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delayChildren: 0.1,
      staggerChildren: 0.3,
    },
  },
};

export default function FadeInScroll({ children, once = true }: Props) {
  return (
    <motion.div
      variants={FadeInScrollVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
