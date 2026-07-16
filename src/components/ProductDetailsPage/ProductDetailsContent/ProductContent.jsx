import SecondaryButton from "@/components/shared/Button/SecondaryButton";
import React from "react";
import { ShoppingCart, Star } from "lucide-react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { TbCoinTaka } from "react-icons/tb";
import Rating from "react-rating";
const ProductContent = ({ singleProduct }) => {
  return (
    <div className="space-y-6">
      {/* Category & Rating */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent bg-accent-soft dark:bg-accent-soft/40 px-3 py-1 rounded-full">
          {singleProduct.category}
        </span>
        <div className="flex items-center gap-1 mb-3">
          {/* Rating stars */}
          <div className="flex items-center">
            <Rating
              initialRating={singleProduct.rating}
              fractions={1}
              start={0}
              stop={5}
              readonly
              emptySymbol={
                <Star size={22} className="text-gray-300 fill-gray-300" />
              }
              fullSymbol={
                <Star size={22} className="text-yellow-400 fill-yellow-400" />
              }
            />
          </div>
          <span className="text-sm text-text-secondary ml-1">
            ({singleProduct.rating})
          </span>
        </div>
      </div>

      {/* Product Name */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
        {singleProduct.name}
      </h1>

      {/* Price */}
      <p className="text-3xl font-bold text-text-primary flex items-center gap-1">
        <TbCoinTaka />
        {singleProduct.price}
      </p>

      {/* Description */}
      <p className="text-base lg:text-lg text-text-secondary leading-relaxed">
        {singleProduct.description}
      </p>

      {/* Color Selector */}
      {singleProduct.colors?.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-text-primary mb-3">
            Color: <span className="text-text-secondary">{selectedColor}</span>
          </p>
          <div className="flex flex-wrap gap-2">
            {singleProduct.colors.map((color, i) => (
              <button
                key={`c${i}`}
                onClick={() => setSelectedColor(color)}
                className={`cursor-pointer px-4 py-2 rounded-lg border-2 text-sm font-semibold transition-all duration-200 ${
                  selectedColor === color
                    ? "border-accent bg-accent dark:bg-accent-soft text-foreground dark:text-text-primary shadow-lg shadow-accent/20"
                    : "border-border bg-foreground text-text-primary hover:border-accent/50"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* Size Selector */}
      {singleProduct.sizes && singleProduct.sizes.length > 0 && (
        <div>
          <p className="text-sm font-semibold text-text-primary mb-3">
            Size: <span className="text-text-secondary">{selectedSize}</span>
          </p>
          <div className="flex flex-wrap gap-3">
            {/* Size Selector (text buttons) */}
            {singleProduct.sizes?.length > 0 && (
              <div>
                <p className="text-sm font-semibold text-text-primary mb-3">
                  Size:{" "}
                  <span className="text-text-secondary">{selectedSize}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {singleProduct.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`cursor-pointer min-w-12 px-4 py-2 rounded-lg border-2 text-sm font-semibold transition-all duration-200 ${
                        selectedSize === size
                          ? "border-accent bg-accent dark:bg-accent-soft text-foreground dark:text-text-primary shadow-lg shadow-accent/20"
                          : "border-border bg-foreground text-text-primary hover:border-accent/50"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quantity & Add to Cart */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        {/* Quantity Selector */}
        <div className="flex items-center border-2 border-border rounded-full overflow-hidden">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-3 text-xl font-bold text-text-primary bg-accent-soft hover:bg-muted-surface transition-colors"
          >
            −
          </button>
          <span className="px-4 py-3 text-lg font-semibold text-text-primary  min-w-12 text-center bg-foreground">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-3 text-xl font-bold text-text-primary bg-accent-soft hover:bg-muted-surface transition-colors"
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}

        <SecondaryButton Icon={ShoppingCart}>
          {" "}
          {singleProduct.inStock ? "Add to Cart" : "Out of Stock"}
        </SecondaryButton>
      </div>
    </div>
  );
};

export default ProductContent;
