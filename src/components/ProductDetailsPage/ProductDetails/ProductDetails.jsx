"use client";
import NotFound from "@/components/shared/NotFound/NotFound";
import React, { useState } from "react";
import { motion } from "framer-motion";

import products from "@/data/productsData";
import ProductContent from "../ProductDetailsContent/ProductContent";

const ProductDetails = ({ id }) => {
  const singleProduct = products.find((p) => p.id == id);
  const [selectedColor, setSelectedColor] = useState(
    singleProduct?.colors[0] || "",
  );
  const [selectedSize, setSelectedSize] = useState(
    singleProduct?.sizes[0] || "",
  );

  const [quantity, setQuantity] = useState(1);

  if (!singleProduct) return <NotFound />;
  console.log(singleProduct);
  return (
    <section className="min-h-screen bg-background py-10 lg:py-16 xl:py-22">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-6 lg:gap-8"
      >
        {/* left side image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
          }}
          className="relative"
        >
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-3xl bg-muted-surface shadow-2xl shadow-accent/10">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src={singleProduct.image}
              alt={singleProduct.name}
              className="w-full h-full object-cover"
            />
            {/* Badges */}
            {!singleProduct.inStock && (
              <span className="absolute top-4 left-4 bg-accent/70 text-text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                Out of Stock
              </span>
            )}
            {singleProduct.inStock && (
              <span className="absolute top-4 left-4 bg-accent/70 text-text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                In Stock
              </span>
            )}
            {singleProduct.isFeatured && (
              <span className="absolute top-4 right-4 bg-accent text-text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg shadow-(--accent)/30">
                Featured
              </span>
            )}
          </div>
        </motion.div>
        {/* right side content */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
          }}
          className="flex-1 flex flex-col justify-center"
        >
          <ProductContent
            singleProduct={singleProduct}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductDetails;
