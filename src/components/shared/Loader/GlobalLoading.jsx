"use client";
import React from 'react';
import { motion } from 'framer-motion';

const GlobalLoading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-9999999 flex items-center justify-center bg-background/80 dark:bg-background/90 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated spinning accent ring */}
        <div className="relative w-20 h-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-accent border-r--accent/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
            className="absolute inset-1 rounded-full border-4 border-transparent border-b-accent/50 border-l-accent/20"
          />
        </div>

        {/* Brand wordmark with subtle pulse */}
        <motion.h2
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="text-2xl font-bold tracking-tight"
        >
          <span className="text-accent">Nok</span>
          <span className="text-text-primary ">shi</span>
        </motion.h2>

        {/* Loading dots */}
        <div className="flex gap-2 mt-2">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                repeat: Infinity,
                duration: 1.2,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
              className="w-2.5 h-2.5 rounded-full bg-accent"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GlobalLoading;