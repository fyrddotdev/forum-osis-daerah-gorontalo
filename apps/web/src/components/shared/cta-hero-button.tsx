"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CtaHeroButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "outline";
  className?: string;
  delay?: number;
}

export default function CtaHeroButton({
  label,
  href,
  variant = "primary",
  className,
  delay = 0,
}: CtaHeroButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
    >
      <Link href={href} passHref>
        <Button
          size="lg"
          className={cn(
            "font-bold px-6 py-6 rounded-xl transition-all duration-300",
            isPrimary
              ? "bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
              : "bg-secondary/10 border-secondary/20 text-secondary hover:bg-secondary/20",
            "active:scale-95 hover:scale-105",
            className,
          )}
        >
          {label}
        </Button>
      </Link>
    </motion.div>
  );
}
