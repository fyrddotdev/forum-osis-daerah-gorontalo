"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollIndicatorProps {
  className?: string;
  label?: string;
}

export default function ScrollIndicator({
  className,
  label = "Scroll Down",
}: ScrollIndicatorProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className={cn(
        "flex flex-col items-center cursor-pointer select-none",
        className,
      )}
      onClick={() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: "smooth",
        });
      }}
    >
      {label && (
        <span className="text-white/60 text-xs tracking-widest uppercase">
          {label}
        </span>
      )}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="text-white w-6 h-6 opacity-80" />
      </motion.div>
    </motion.div>
  );
}
