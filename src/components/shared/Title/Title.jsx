"use client";

import React from "react";
import { motion } from "framer-motion";

const Title = ({ children, className, subTitle }) => {
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
        className={`text-center  text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${className}`}
      >
        <span className="bg-linear-to-r from-accent to-text-primary  bg-clip-text text-transparent">
          {children}
        </span>
      </motion.h2>

     {
        subTitle &&  <motion.p
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
        className="text-lg sm:text-xl text-text-secondary  lg:mx-0 leading-relaxed pt-4 lg:pt-6 text-center "
      >
        {subTitle}
      </motion.p>
     }
    </motion.div>
  );
};

export default Title;
