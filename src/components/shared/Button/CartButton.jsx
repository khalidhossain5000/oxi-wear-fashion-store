"use client"
import useCart from "@/Hooks/useCart";
import Link from "next/link";
import React from "react";
import { BsCart } from "react-icons/bs";

const CartButton = () => {
  const {cartItems}=useCart()
  return (
    <div>
      <Link
        href="/cart"
        className={`relative h-11 w-11 items-center justify-center rounded-full transition md:flex 
          
        `}
        title="cart"
        aria-label="cart"
      >
        <BsCart size={20} />
        {/* Cart Indicator */}
        <span className="absolute -top-1 -right-1 flex lg:h-5 lg:min-w-5 h-3 min-w-3 items-center justify-center rounded-full bg-accent px-1 text-[10px] lg:text-[13px] font-semibold text-white">
          {cartItems?.length || 0}
        </span>
      </Link>
    </div>
  );
};

export default CartButton;
