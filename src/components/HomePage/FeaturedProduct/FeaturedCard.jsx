import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TbCurrencyTaka } from "react-icons/tb";
import StarRating from "@/components/shared/StarRating/StarRating";
import Image from "next/image";

const FeaturedCard = ({ product }) => {
  const { name, category, price, image, rating, colors } = product;

  return (
    <div>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group bg-accent-soft/90 border border-border rounded-2xl overflow-hidden h-full flex flex-col shadow-sm lg:hover:shadow-lg lg:hover:shadow-black/5 transition-shadow duration-300"
      >
        {/* Image */}
        <div className="relative w-full aspect-3/4 overflow-hidden bg-muted-surface">
          <Image
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 lg:group-hover:scale-105"
            width={200}
            height={100}
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
        <div className="p-4 flex flex-col gap-2">
          {/* Category + Rating */}
          <div className="flex items-center justify-between font-manrope">
            <p className="text-[11px] lg:text-xs font-medium capitalize tracking-wide text-text-secondary">
              {category}
            </p>
            <div className="flex items-center gap-1">
              <StarRating rating={rating} size={12} />
              <span className="text-[11px] text-text-secondary ">{rating}</span>
            </div>
          </div>

          {/* Product name */}
          <h3 className="text-sm font-medium text-text-primary leading-snug line-clamp-2 py-2  font-sora">
            {name}
          </h3>

          {/* Price + Colors */}
          <div className="flex items-center justify-between mt-1">
            <span className="text-base font-semibold text-text-primary flex items-center">
              <TbCurrencyTaka size={17} />
              {price.toLocaleString()}
            </span>

            <div className="flex items-center gap-1">
              <h5 className="text-text-primary text-sm font-manrope">Colors</h5>{" "}
              {colors?.length > 0 && (
                <div className="flex items-center gap-1">
                  {colors.slice(0, 4).map((c, i) => (
                    <span
                      key={`c-${i}`}
                      title={c}
                      className="w-3.5 h-3.5 rounded-full border border-border"
                      style={{ backgroundColor: c.toLowerCase() }}
                    />
                  ))}
                  {colors.length > 4 && (
                    <span className="text-[10px] text-text-secondary ml-0.5">
                      +{colors.length - 4}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedCard;
