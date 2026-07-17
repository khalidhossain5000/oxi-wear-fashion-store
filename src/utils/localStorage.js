export const getCartFromStorage = () => {
  const storedCart = localStorage.getItem("cart");

  if (!storedCart) return [];

  return JSON.parse(storedCart);
};


export const setCartToStorage = (cartItems) => {
  localStorage.setItem("cart", JSON.stringify(cartItems));
};