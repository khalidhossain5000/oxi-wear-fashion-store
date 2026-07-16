import PrimaryButton from "@/components/shared/Button/PrimaryButton";
import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";
import Rating from "react-rating";
/* eslint-disable @next/next/no-img-element */
const ProductCard = ({ product }) => {
   
  return (
    <div className="group bg-foreground rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Product Image */}
      <div className="relative aspect-4/5 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
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
        {product.isFeatured && (
          <span className="absolute top-3 right-3 bg-accent-soft text-text-primary text-xs font-semibold px-3 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col grow">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
          {product.category}
        </span>
        <h3 className="text-lg font-bold text-text-primary mb-2 line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-3">
          {/* Rating stars */}
          <div className="flex items-center">
            <Rating
              initialRating={product.rating}
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
            ({product.rating})
          </span>
        </div>
        <p className="text-sm text-text-secondary mb-4 line-clamp-2 grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-accent">
            ৳{product.price}
          </span>
          
          <Link href={`/products/${product.id}`}><PrimaryButton>Details</PrimaryButton> </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
