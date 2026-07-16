import { CartContext } from '@/context/CartContext';
import React, { useContext } from 'react';

const useCart = () => {
   const cartInfo=useContext(CartContext)
   return cartInfo
};

export default useCart;