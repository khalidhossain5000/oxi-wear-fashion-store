"use client";
import { useState } from "react";
import { CartContext } from "./CartContext";
import { toast } from "sonner";
import CartToast from "@/components/ProductDetailsPage/CartToast/CartToast";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  //add to cart handler
  const addToCart = (cartItem) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find(
        (item) =>
          item.id === cartItem.id &&
          item.selectedColors === cartItem.selectedColors &&
          item.selectedSize === cartItem.selectedSize,
      );

      if (existingItem) {
          //cart quantity updated toast here
         toast.success("Item already exist ,  quantity is increased", {
          position: "bottom-right",
          className: "relative !z-[999999]",
        });
       return prevCart.map((item) =>
          item.id === cartItem.id &&
          item.selectedColors === cartItem.selectedColors &&
          item.selectedSize === cartItem.selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );

      
      } else {
         //success toast
        toast.custom(
          (id) => <CartToast id={id} productName={cartItem.name} />,
          {
            position: "top-center",
            duration: Infinity,
          },
        );
        //no exisiting just add the item
        return [...prevCart, cartItem];
       
      }
    });
  };

  const cartInfo = {
    cartItems,
    addToCart,
  };
  return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CartProvider;
