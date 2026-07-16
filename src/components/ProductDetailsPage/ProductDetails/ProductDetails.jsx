"use client";
import NotFound from "@/components/shared/NotFound/NotFound";
import React, { useState } from "react";
import { motion } from "framer-motion";
import products from "@/data/productsData";
import ProductContent from "../ProductDetailsContent/ProductContent";

import useCart from "@/Hooks/useCart";

const ProductDetails = ({ id }) => {
  const singleProduct = products.find((p) => p.id == id);
  const { addToCart } = useCart();

  const [selectedColor, setSelectedColor] = useState(
    singleProduct?.colors[0] || "",
  );
  const [selectedSize, setSelectedSize] = useState(
    singleProduct?.sizes[0] || "",
  );

  const [quantity, setQuantity] = useState(1);

  if (!singleProduct) return <NotFound />;
  const handleAddToCart = (item) => {
    const {
      colors,
      sizes,
      description,
      isFeatured,
      inStock,
      rating,
      ...productInfo
    } = item;

    const cartData = {
      ...productInfo,
      quantity,
      selectedColor,
      selectedSize,
    };
    //calling add to cart
    addToCart(cartData);

    console.log(cartData, "this is cart data");
  };
  return (
    <section className="min-h-screen bg-background py-26 xl:py-44 relative ">
      <div className="absolute inset-0  bg-linear-to-br from-accent-soft via-background to-background dark:from-accent-soft/60 dark:via-background dark:to-background" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8 xl:gap-12 relative z-100"
      >
        {/* left side image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
          }}
          className="relative flex-1"
        >
          <div className="relative  p-6 overflow-hidden rounded-3xl bg-accent-soft shadow-2xl shadow-accent/60">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src={singleProduct.image}
              alt={singleProduct.name}
              className="w-full h-full lg:h-9/12"
            />
            {/* Badges */}
            {!singleProduct.inStock && (
              <span className="absolute top-4 left-4 bg-accent text-foreground dark:text-text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                Out of Stock
              </span>
            )}
            {singleProduct.inStock && (
              <span className="absolute top-4 left-4 bg-accent/70 text-foreground dark:text-text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                In Stock
              </span>
            )}
            {singleProduct.isFeatured && (
              <span className="absolute top-4 right-4 bg-accent text-foreground dark:text-text-primary text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg shadow-accent/30">
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
          className="flex-2 flex flex-col justify-center mt-12 lg:mt-0"
        >
          <ProductContent
            singleProduct={singleProduct}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize}
            quantity={quantity}
            setQuantity={setQuantity}
            handleAddToCart={handleAddToCart}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductDetails;
