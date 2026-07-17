/* eslint-disable @next/next/no-img-element */

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TbCurrencyTaka } from "react-icons/tb";

const FeaturedCard = ({ product }) => {
  const { name, category, price, image } = product;

  return (
    <div>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group bg-foreground border border-border rounded-2xl overflow-hidden h-full flex flex-col shadow-sm lg:hover:shadow-lg lg:hover:shadow-black/5 transition-shadow duration-300"
      >
        {/* Image */}
        <div className="relative w-full aspect-3/4 overflow-hidden bg-muted-surface">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-105"
          />

          {/* Details button — always visible on mobile/tablet, hover-reveal on desktop */}
          <div
            className="
            absolute inset-x-0 bottom-0 p-3
            translate-y-0 opacity-100
            lg:translate-y-full lg:opacity-0
            lg:group-hover:translate-y-0 lg:group-hover:opacity-100
            transition-all duration-300 ease-out
          "
          >
            <button className="cursor-pointer w-full flex items-center justify-center gap-1.5 bg-accent text-background text-sm font-medium py-2.5 rounded-full hover:opacity-90 transition-opacity">
              Show Details
              <ArrowUpRight size={15} strokeWidth={2} />
            </button>
          </div>
             {!product.inStock && (
          <span className="absolute top-3 left-3 bg-accent-soft text-text-primary text-xs font-semibold px-3 py-1 rounded-full">
            Out of Stock
          </span>
        )}

        {product.inStock && (
          <span className="absolute top-3 left-3 bg-accent-soft  text-text-primary text-xs font-semibold px-3 py-1 rounded-full">
            In Stock
          </span>
        )}
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col gap-1.5">
          <p className="text-[11px] uppercase tracking-wide text-text-secondary">
            {category}
          </p>
          <h3 className="text-sm font-medium text-text-primary leading-snug line-clamp-2">
            {name}
          </h3>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="font-semibold text-text-primary flex items-center">
              <TbCurrencyTaka />
              {price.toLocaleString()}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedCard;
