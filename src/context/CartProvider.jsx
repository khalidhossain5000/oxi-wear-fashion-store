import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
 
  const cartInfo = {
    
  };
  return <CartContext value={cartInfo}>{children}</CartContext>;
};

export default CartProvider;