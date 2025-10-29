import { createContext, useContext, useState, useEffect } from "react";
import { AuthContext } from "./AuthContext/Authcontex";


const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user } = useContext(AuthContext); // 🔹 current logged-in user
  const [wishlistItems, setWishlistItems] = useState([]);

  // Helper → user অনুযায়ী unique storage key
  const getStorageKey = () => `wishlistItems_${user?.email || "guest"}`;

  // ✅ Load wishlist when user changes or page loads
  useEffect(() => {
    if (!user) {
      setWishlistItems([]);
      return;
    }

    const savedWishlist = localStorage.getItem(getStorageKey());
    if (savedWishlist && savedWishlist !== "[]") {
      console.log("💖 Loaded wishlist for:", user.email);
      setWishlistItems(JSON.parse(savedWishlist));
    } else {
      console.log("💖 No saved wishlist for user:", user.email);
      setWishlistItems([]);
    }
  }, [user]);

  // ✅ Save wishlist when it changes
  useEffect(() => {
    if (user) {
      if (wishlistItems.length > 0) {
        localStorage.setItem(getStorageKey(), JSON.stringify(wishlistItems));
      } else {
        localStorage.removeItem(getStorageKey());
      }
    }
  }, [wishlistItems, user]);

  // ➕ Add to wishlist
  const addToWishList = (product) => {
    const exists = wishlistItems.find((item) => item._id === product._id);
    if (!exists) {
      const updatedWishlist = [...wishlistItems, { ...product }];
      setWishlistItems(updatedWishlist);
      alert(`${product.title} added to wishlist`);
    } else {
      alert(`${product.title} is already in wishlist`);
    }
  };

  // ❌ Remove from wishlist
  const removeFromWishList = (id) => {
    const updatedWishlist = wishlistItems.filter((item) => item._id !== id);
    setWishlistItems(updatedWishlist);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishList, removeFromWishList }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook
export const useWishlist = () => useContext(WishlistContext);
