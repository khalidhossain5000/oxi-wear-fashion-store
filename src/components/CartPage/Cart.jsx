/* eslint-disable @next/next/no-img-element */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import useCart from "@/Hooks/useCart";
import CartEmpty from "../shared/NotFound/CartEmpty";

import PageBanner from "@/components/shared/PageBanner/PageBanner";
import OrderSummary from "./OrderSummary";
const CartPage = () => {
  const [shippingZone, setShippingZone] = useState("inside");
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shippingCost = shippingZone === "inside" ? 60 : 120;
  const total = subtotal + shippingCost;

  if (cartItems.length === 0) {
    return <CartEmpty />;
  }

  return (
    <div className="min-h-screen bg-background text-text-primary transition-colors duration-300 relative z-0">
      {cartItems.length !== 0 && (
        <PageBanner
          title="Shopping Cart"
          subtitle={"Explore your all cart items"}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Clear Cart Button */}
            <div className="flex justify-end">
              <button
                onClick={clearCart}
                className="cursor-pointer flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition-colors px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <Trash2 className="w-4 h-4" />
                Clear Cart
              </button>
            </div>

            <AnimatePresence>
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-foreground rounded-2xl border border-border p-4 sm:p-6 flex flex-col sm:flex-row gap-4"
                >
                  {/* Image */}
                  <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-muted-surface shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-text-secondary">
                        {item.category}
                      </p>
                      <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-text-secondary">
                        <span>Color: {item.selectedColor}</span>
                        <span>Size: {item.selectedSize}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between flex-wrap gap-3">
                      {/* Quantity controls */}
                      <div className="flex items-center gap-1 bg-muted-surface rounded-lg p-1">
                        <button
                          onClick={() => decreaseQuantity(item)}
                          className="cursor-pointer p-1.5 rounded-md hover:bg-border transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item)}
                          className="cursor-pointer p-1.5 rounded-md hover:bg-border transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4">
                        <p className="font-medium">
                          ৳{(item.price * item.quantity).toLocaleString()}
                        </p>
                        <button
                          onClick={() => removeFromCart(item)}
                          className="text-red-500 hover:text-red-600 transition-colors cursor-pointer "
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-foreground rounded-2xl border border-border p-6 sticky top-24"
            >
              <OrderSummary
                shippingZone={shippingZone}
                setShippingZone={setShippingZone}
                subtotal={subtotal}
                total={total}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
