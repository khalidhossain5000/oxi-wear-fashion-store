"use client";
import { useState } from "react";
import { CartContext } from "./CartContext";
import { toast } from "sonner";
import CartToast from "@/components/ProductDetailsPage/CartToast/CartToast";
import SuccessToast from "@/components/shared/Toast/SuccessToast";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  //optimized function checking if item and variant already exist
  const isSameVariant = (item, cartItem) =>
    item.id === cartItem.id &&
    item.selectedColor === cartItem.selectedColor &&
    item.selectedSize === cartItem.selectedSize;
  //add to cart handler

  const addToCart = (cartItem) => {
    const existingItem = cartItems.find((item) =>
      isSameVariant(item, cartItem),
    );

    if (existingItem) {
      toast.success("Item already exists, quantity increased.", {
        position: "bottom-right",
        className: "relative !z-[999999]",
      });

      setCartItems((prevCart) =>
        prevCart.map((item) =>
          isSameVariant(item, cartItem)
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );

      return;
    } else {
      toast.custom((id) => <CartToast id={id} productName={cartItem.name} />, {
        position: "top-center",
        duration: Infinity,
      });

      setCartItems((prevCart) => [...prevCart, cartItem]);
    }
  };
  //increase quantity from cart
  const increaseQuantity=(cartItem)=>{
    setCartItems((prevCart)=>prevCart.map((item)=>isSameVariant(item,cartItem) ? {...item,quantity:item.quantity+1} : item))
    SuccessToast("Quantity increased")
  }
  //decrease quantity


const decreaseQuantity=(cartItem)=>{
   setCartItems((prevCart) => {
    const existingItem = prevCart.find((item) =>
      isSameVariant(item, cartItem)
    );

    if (!existingItem) return prevCart;

    if (existingItem.quantity === 1) {
      toast.warning("Minimum quantity is 1.", {
        position: "bottom-right",
        className: "relative !z-[999999]",
      });

      return prevCart;
    }

    return prevCart.map((item) =>
      isSameVariant(item, cartItem)
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  });
}












  const cartInfo = {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity
  };
  return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CartProvider;
