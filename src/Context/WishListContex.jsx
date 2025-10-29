import { createContext, useContext, useState, useEffect } from "react";

// Context তৈরি
const WishlistContext = createContext();

// Provider Component
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // ✅ Load wishlist from localStorage when app loads
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlistItems");
    if (savedWishlist && savedWishlist !== "[]") {
      console.log("💖 Loading wishlist from localStorage:", JSON.parse(savedWishlist));
      setWishlistItems(JSON.parse(savedWishlist));
    } else {
      console.log("💖 No saved wishlist found.");
    }
  }, []);

  // ✅ Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (wishlistItems.length > 0) {
      console.log("💾 Saving wishlist:", wishlistItems);
      localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
    } else {
      console.log("🧹 Wishlist empty, removing from localStorage");
      localStorage.removeItem("wishlistItems");
    }
  }, [wishlistItems]);

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
