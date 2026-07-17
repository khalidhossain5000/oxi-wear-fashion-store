"use client";

import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import PrimaryButton from "@/components/shared/Button/PrimaryButton";

const Banner = () => {
  const { resolvedTheme } = useTheme();

  return (
    <section className="flex items-center relative overflow-hidden min-h-screen py-24 md:py-36 lg:py-40  bg-cover bg-center bg-no-repeat z-100   bg-[url('/light-banner.png')] dark:bg-[url('/dark-banner.png')]">
      {/* mobile gradient bg */}

      <div className="xl:hidden absolute inset-0 -z-10 bg-linear-to-br from-accent-soft via-background to-background dark:from-accent-soft/60 dark:via-background dark:to-background text-center lg:text-left space-y-5" />

      {/* content */}
      <motion.div
        className="container px-4 md:px-8 lg:px-16 3xl:ml-32  relative z-600 "
        initial="hidden"
        key={resolvedTheme}
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
        {/* Subtitle */}
        <motion.h6
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="font-manrope text-center xl:text-left text-[10px] md:text-sm font-semibold tracking-[0.2em] uppercase text-accent mb-4 lg:mb-6"
        >
          CRAFTED - FOR - EVERYDAY - ELEGANCE
        </motion.h6>

        {/* Title with gradient split */}
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="font-sora text-center xl:text-left  text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
        >
          <span className="bg-linear-to-r from-accent to-text-primary  bg-clip-text text-transparent">
            Timeless Fashion,
          </span>
          <br />
          <span className="text-text-primary dark:text-text-primary">
            Designed for Every{" "}
            <span className="bg-linear-to-r from-teal-500 to-teal-900  bg-clip-text text-transparent">
              Moment
            </span>
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="font-manrope text-sm sm:text-xl text-text-secondary xl:max-w-2xl mx-auto lg:mx-0 leading-relaxed pt-4 lg:pt-6 text-center xl:text-left "
        >
          Nokshi is a contemporary fashion brand bringing together premium
          essentials, modern design, and everyday confidence in every
          collection.
        </motion.p>

        {/* btn */}
        <div className="text-center xl:text-left">
          <PrimaryButton className={"mt-6 lg:mt-12 mx-auto rounded-2xl px-10 xl:px-16"}>
            Shop Now
          </PrimaryButton>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
