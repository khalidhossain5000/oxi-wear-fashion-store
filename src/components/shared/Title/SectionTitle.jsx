"use client";

import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ children, className, subTitle ,subTitleClass }) => {
  return (
    <motion.div
      className="container mx-auto px-4 relative z-600"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2, delayChildren: 0.1 },
        },
      }}
    >
      <motion.h2
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className={`font-manrope  text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-tight ${className}`}
      >
        <span className="bg-linear-to-r from-accent via-teal-900 to-teal-400 dark:to-text-primary  bg-clip-text text-transparent">
          {children}
        </span>
      </motion.h2>

     {
        subTitle &&  <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className={`text-sm sm:text-xl text-text-secondary  lg:mx-0 leading-relaxed  ${subTitleClass}`}
      >
        {subTitle}
      </motion.p>
     }
    </motion.div>
  );
};

export default SectionTitle;
