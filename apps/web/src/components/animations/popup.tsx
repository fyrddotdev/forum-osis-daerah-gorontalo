"use client";

import { motion, Variants } from "motion/react";

interface Props {
  children: React.ReactNode;
  once?: boolean;
}

const popupVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: [0, 1, 1],
    scale: [0, 1.1, 1],
    transition: { duration: 1, times: [0, 0.75, 1], ease: "easeInOut" },
  },
};
export default function Popup({ children, once = true }: Props) {
  return (
    <motion.div
      variants={popupVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
