"use client";
import { motion } from "framer-motion";

import React from "react";

const FeatureCard = ({ feature,itemVariants }) => {
  const { icon: Icon, title, description } = feature;
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group bg-foreground border border-border rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-lg hover:shadow-black/5 hover:border-accent/40 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
        <Icon
          size={22}
          strokeWidth={1.75}
          className="text-accent group-hover:text-background transition-colors duration-300"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-base font-semibold text-text-primary">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
