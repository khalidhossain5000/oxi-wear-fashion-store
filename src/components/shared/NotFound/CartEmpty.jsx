import { ShoppingBag, ShoppingCart } from "lucide-react";
import React from "react";
import Title from "../Title/Title";
import Link from "next/link";
import SecondaryButton from "../Button/SecondaryButton";

const CartEmpty = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-background transition-colors duration-300">
      <div className="w-full max-w-3xl text-center">
        {/* Large icon with soft background */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-teal-600 transition-colors duration-300">
          <ShoppingCart
            className="h-12 w-12 text-accent-soft"
            strokeWidth={1.5}
          />
        </div>

        {/* Title */}
        <Title>Your Cart Is Empty</Title>

        {/* Separator */}
        <div className="mx-auto mt-6 mb-6 h-px w-16 bg-border transition-colors duration-300" />

     

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 "
          >
           
         <SecondaryButton Icon={ShoppingBag}>  Continue Shopping</SecondaryButton>
          
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CartEmpty;
