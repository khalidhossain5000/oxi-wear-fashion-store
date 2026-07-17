/* eslint-disable @next/next/no-img-element */

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import useCart from "@/Hooks/useCart";

const CartPage = () => {
  const [shippingZone, setShippingZone] = useState("inside");
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shippingCost = shippingZone === "inside" ? 60 : 120;
  const total = subtotal + shippingCost;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <div className="w-24 h-24 rounded-full bg-[var(--muted-surface)] flex items-center justify-center">
          <ShoppingCart className="w-10 h-10 text-[var(--muted-text)]" />
        </div>
        <p className="text-[var(--muted-text)] text-lg">Your cart is empty</p>
        <button className="mt-4 px-6 py-3 bg-[var(--accent)] text-white rounded-lg hover:bg-teal-700 transition-colors">
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-text-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {/* Clear Cart Button */}
            <div className="flex justify-end">
              <button
                // onClick={clearCart}
                className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 transition-colors px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
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
                          // onClick={() =>
                          //   updateQuantity(item.id, item.quantity - 1)
                          // }
                          className="p-1.5 rounded-md hover:bg-border transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          
                          className="p-1.5 rounded-md hover:bg-border transition-colors"
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
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-600 transition-colors"
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
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Subtotal</span>
                  <span>৳{subtotal.toLocaleString()}</span>
                </div>

                <div>
                  <p className="text-text-secondary mb-2">Shipping</p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted-surface cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="shipping"
                        value="inside"
                        checked={shippingZone === "inside"}
                        onChange={() => setShippingZone("inside")}
                        className="accent-accent"
                      />
                      <div className="flex-1">
                        <p className="font-medium">Inside Dhaka</p>
                        <p className="text-xs text-text-secondary">
                          Delivery within 2‑3 days
                        </p>
                      </div>
                      <span className="font-medium">৳60</span>
                    </label>

                    <label className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted-surface cursor-pointer transition-colors">
                      <input
                        type="radio"
                        name="shipping"
                        value="outside"
                        checked={shippingZone === "outside"}
                        onChange={() => setShippingZone("outside")}
                        className="accent-accent"
                      />
                      <div className="flex-1">
                        <p className="font-medium">Outside Dhaka</p>
                        <p className="text-xs text-text-secondary">
                          Delivery within 4‑7 days
                        </p>
                      </div>
                      <span className="font-medium">৳120</span>
                    </label>
                  </div>
                </div>
              </div>

              <hr className="my-4 border-border" />

              <div className="flex justify-between text-lg font-semibold mb-6">
                <span>Total</span>
                <span>৳{total.toLocaleString()}</span>
              </div>

              <button className="w-full bg-accent hover:bg-teal-700 text-white py-3 rounded-xl font-medium transition-colors">
                Proceed to Checkout
              </button>

              <p className="text-xs text-text-secondary mt-4 text-center">
                Taxes included. Free returns within 7 days.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
