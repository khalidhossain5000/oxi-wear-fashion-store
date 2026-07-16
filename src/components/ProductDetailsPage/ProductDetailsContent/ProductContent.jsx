import SecondaryButton from "@/components/shared/Button/SecondaryButton";
import React from "react";
import { Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { TbCoinTaka } from "react-icons/tb";
import Rating from "react-rating";
const ProductContent = ({
  singleProduct,
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  quantity,
  setQuantity,
  handleAddToCart
}) => {
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
      <h1 className="text-center lg:text-left text-2xl sm:text-4xl lg:text-5xl font-semibold lg:font-bold text-text-primary leading-tight font-sora">
        {singleProduct.name}
      </h1>

      {/* Price */}
      <p className="text-center lg:text-left  text-3xl font-bold text-text-primary flex items-center justify-center lg:justify-start gap-1 font-manrope">
        <TbCoinTaka />
        {singleProduct.price}
      </p>

      {/* Description */}
      <p className="text-center lg:text-left text-base lg:text-lg text-text-secondary leading-relaxed font-manrope">
        {singleProduct.description}
      </p>

      {/* Color Selector */}
      {singleProduct.colors?.length > 0 && (
        <div>
          <p className="font-manrope text-sm text-center lg:text-left  font-semibold text-text-primary mb-3">
            Color: <span className="text-text-secondary">{selectedColor}</span>
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start pt-3 lg:pt-0  gap-2">
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
        <div className="flex flex-wrap justify-center lg:justify-start gap-3">
          {/* Size Selector (text buttons) */}
          {singleProduct.sizes?.length > 0 && (
            <div>
              <p className="font-manrope text-sm font-semibold text-text-primary mb-3">
                Size:{" "}
                <span className="text-text-secondary">{selectedSize}</span>
              </p>
              <div className=" font-manrope flex flex-wrap pt-3 lg:pt-0 gap-2">
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
      )}

      {/* Quantity & Add to Cart */}
      <div className="flex items-center flex-col lg:flex-row gap-4 pt-4">
        {/* Quantity Selector */}
        <div className="font-manrope flex items-center border-2 border-border rounded-full overflow-hidden ">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-4 py-3 text-xl font-bold text-text-primary bg-accent-soft hover:bg-muted-surface transition-colors cursor-pointer"
          >
            <Minus />
          </button>
          <span className="font-sora px-4 py-3 text-sm lg:text-lg font-semibold text-text-primary  min-w-6 lg:min-w-12 text-center bg-foreground">
            Quantity : {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-4 py-3 text-xl font-bold text-text-primary bg-accent-soft hover:bg-muted-surface transition-colors cursor-pointer"
          >
            <Plus />
          </button>
        </div>

        {/* Add to Cart Button */}
        <div className="">
          <SecondaryButton onClick={()=>handleAddToCart(singleProduct)} Icon={ShoppingCart} iconClass={"hidden md:block"}>
            {" "}
            {singleProduct.inStock ? "Add to Cart" : "Out of Stock"}
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default ProductContent;
