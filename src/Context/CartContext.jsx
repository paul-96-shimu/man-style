import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext/Authcontex";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext); // logged-in user
  const [cartItems, setCartItems] = useState([]);

  // Helper function → user অনুযায়ী key বানাবে
  const getStorageKey = () => `cartItems_${user?.email || "guest"}`;

  // ✅ Load cart data when user changes or page loads
  useEffect(() => {
    if (!user) {
      setCartItems([]); // logout করলে empty করো
      return;
    }

    const savedCart = localStorage.getItem(getStorageKey());
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
      console.log("🛒 Loaded user cart:", user.email);
    } else {
      setCartItems([]);
      console.log("🆕 No saved cart for user:", user.email);
    }
  }, [user]);

  // ✅ Save cart data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(getStorageKey(), JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  // 🛒 Add item to cart
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item._id === product._id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // ➖ Decrease one quantity
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ❌ Remove item from cart completely
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item._id !== id));
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
