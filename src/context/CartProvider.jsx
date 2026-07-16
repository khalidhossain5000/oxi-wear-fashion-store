import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
 const [cartItems,setCartItems]=useState([])

 //add to cart handler
 const addToCart=()=>{

 }
  const cartInfo = {
    cartItems,
    addToCart
  };
  return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CartProvider;