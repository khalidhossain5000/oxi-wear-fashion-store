"use client";
import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { toast } from "sonner";
import CartToast from "@/components/ProductDetailsPage/CartToast/CartToast";
import { getCartFromStorage, setCartToStorage } from "@/utils/localStorage";

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getCartFromStorage);

  //set cart item from localstorage if exist
  useEffect(() => {
    setCartToStorage(cartItems);
  }, [cartItems]);
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
  const increaseQuantity = (cartItem) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        isSameVariant(item, cartItem)
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
    toast.success("Quantity Increased", {
      position: "top-center",
      style: {
        backgroundColor: "#39d5c0",
      },
    });
  };
  //decrease quantity

  const decreaseQuantity = (cartItem) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) =>
        isSameVariant(item, cartItem),
      );
      console.log("Inide decrease quanity");
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
          : item,
      );
    });
  };

  //remove item from cart

  const removeFromCart = (cartItem) => {
    setCartItems((prevCart) =>
      prevCart.filter((item) => !isSameVariant(item, cartItem)),
    );

    toast.success(`${cartItem.name} removed from cart.`, {
      position: "bottom-right",
      className: "relative !z-[999999]",
    });
  };

  //clear cart
  const clearCart = () => {
    setCartItems([]);

    toast.success("Cart cleared successfully.", {
      position: "bottom-right",
      className: "relative !z-[999999]",
    });
  };

  const cartInfo = {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  };
  return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CartProvider;
