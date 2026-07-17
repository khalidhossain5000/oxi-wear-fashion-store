import PrimaryButton from "@/components/shared/Button/PrimaryButton";
import { Star } from "lucide-react";
import Link from "next/link";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import StarRating from "@/components/shared/StarRating/StarRating";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className=" bg-foreground rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="group transition-all duration-300">
        {/* Product Image */}
        <div className="relative aspect-4/5 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={200}
            height={100}
          />
          {!product.inStock && (
            <span className="font-manrope absolute top-3 left-3 bg-accent-soft text-text-primary text-xs font-semibold px-3 py-1 rounded-full">
              Out of Stock
            </span>
          )}

          {product.inStock && (
            <span className="font-manrope absolute top-3 left-3 bg-accent-soft  text-text-primary text-xs font-semibold px-3 py-1 rounded-full">
              In Stock
            </span>
          )}
          {product.isFeatured && (
            <span className="font-manrope absolute top-3 right-3 bg-accent-soft text-text-primary text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
      </div>
      {/* Product Details */}
      <div className="p-5 flex flex-col grow">
        {/* Category Rating */}
        <div className="flex items-center justify-between font-manrope">
          <p className="font-manrope text-[11px] lg:text-xs font-medium capitalize tracking-wide text-text-secondary">
            {product.category}
          </p>
          <div className="flex items-center gap-1">
            <StarRating rating={product.rating} size={20} />
            <span className="text-[11px] text-text-secondary ">
              {product.rating}
            </span>
          </div>
        </div>
        <h3 className="font-sora text-lg font-bold text-text-primary mb-2 line-clamp-2">
          {product.name}
        </h3>

        <p className="font-manrope text-sm text-text-secondary mb-4 line-clamp-2 grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="flex items-center gap-1 text-xl font-bold text-accent">
            <TbCurrencyTaka />
            {product.price}
          </span>

          <Link href={`/products/${product.id}`}>
            <PrimaryButton className={'px-6 rounded-full font-manrope'}>Details</PrimaryButton>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
