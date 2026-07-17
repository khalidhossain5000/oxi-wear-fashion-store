export const getCartFromStorage = () => {

  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedCart = window.localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (error) {
    console.error("Failed to read cart from localStorage:", error);
    return [];
  }
};

export const setCartToStorage = (cartItems) => {
  // Running on the server (SSR/Build)
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem("cart", JSON.stringify(cartItems));
  } catch (error) {
    console.error("Failed to save cart:", error);
  }
};