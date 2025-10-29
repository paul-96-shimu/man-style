import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // ✅ Load cart data from localStorage (only once)
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart && savedCart !== "[]") {
      console.log("🧾 Loading saved cart:", JSON.parse(savedCart));
      setCartItems(JSON.parse(savedCart));
    } else {
      console.log("🧾 No saved cart or empty cart found.");
    }
  }, []);

  // ✅ Save cart data to localStorage whenever it changes
  useEffect(() => {
    if (cartItems.length > 0) {
      console.log("💾 Saving cart to localStorage:", cartItems);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    } else {
      // Empty হলে overwrite কোরো না, শুধুমাত্র remove করো
      console.log("🧹 Cart empty, removing from localStorage");
      localStorage.removeItem("cartItems");
    }
  }, [cartItems]);

  // 🛒 Add item to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item._id === product._id);
    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      const newCart = [...cartItems, { ...product, quantity: 1 }];
      setCartItems(newCart);
    }
  };

  // ➖ Decrease one quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item._id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCartItems(updatedCart);
  };

  // ❌ Remove item completely
  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item._id !== id);
    setCartItems(updatedCart);
  };

  // 🧮 Total quantity
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
