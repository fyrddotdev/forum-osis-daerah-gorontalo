"use client";

import { motion, Variants } from "motion/react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeOut",
    },
  },
};

export default function FadeIn({ children, delay = 0, duration = 0.5 }: Props) {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
}
