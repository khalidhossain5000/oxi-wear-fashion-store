'use client';

import React from 'react';
import { motion } from 'framer-motion';

import SectionTitle from '@/components/shared/Title/SectionTitle';
import { features } from './ChooseUsData';
import FeatureCard from './FeatureCard';



const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="bg-background text-text-primary px-4 py-14 lg:py-22 xl:py-26 md:px-8 lg:px-16">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-10 pb-6">
          <SectionTitle
            className="text-center "
            subTitleClass="text-center  pt-2 lg:pt-4"
            subTitle="Here's why thousands of customers trust Nnokshi for their everyday shopping."
          >
            Why Choose Us
          </SectionTitle>
        </div>

        {/* Feature grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} itemVariants={itemVariants}/>
          ))}
        </motion.div>
      </div>
    </section>
  );
};



export default WhyChooseUs;