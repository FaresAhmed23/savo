// src/components/common/HeroSection.tsx
import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  ctaText?: string;
  ctaAction?: () => void;
  height?: "full" | "large" | "medium";
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  ctaAction,
  height = "large",
}) => {
  const heightClasses = {
    full: "h-screen",
    large: "h-[70vh]",
    medium: "h-[50vh]",
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white container-custom">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8 font-light"
          >
            {subtitle}
          </motion.p>
        )}

        {ctaText && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onClick={ctaAction}
            className="btn-primary text-lg"
          >
            {ctaText}
          </motion.button>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
