import Link from "next/link";
import React from "react";
import { BsCart } from "react-icons/bs";

const CartButton = () => {
  return (
    <div>
      <Link
        href="/cart"
        className={`relative h-11 w-11 items-center justify-center rounded-full transition md:flex 
          text-gray-600 hover:bg-gray-100 dark:text-text-primary dark:hover:bg-slate-800
        `}
        title="cart"
        aria-label="cart"
      >
        <BsCart size={20} />
        {/* Cart Indicator */}
        <span className="absolute -top-1 -right-1 flex lg:h-5 lg:min-w-5 h-3 min-w-3 items-center justify-center rounded-full bg-accent px-1 text-[10px] lg:text-[13px] font-semibold text-white">
          0
        </span>
      </Link>
    </div>
  );
};

export default CartButton;
