import React from "react";
import Title from "../Title/Title";

const PageBanner = ({title,subtitle}) => {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-accent-soft via-background to-background dark:from-accent-soft/60 dark:via-background dark:to-background" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Title subTitle={subtitle}>
         {title}
        </Title>
      </div>
    </section>
  );
};

export default PageBanner;
