import { createContext, useContext, useState } from "react";

// Context তৈরি
const WishlistContext = createContext();

// Provider Component
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Add to wishlist
  const addToWishList = (product) => {
    const exists = wishlistItems.find((item) => item._id === product._id);
    if (!exists) {
      setWishlistItems([...wishlistItems, { ...product }]);
      alert(`${product.title} added to wishlist`);
    } else {
      alert(`${product.title} is already in wishlist`);
    }
  };

  // Remove from wishlist
  const removeFromWishList = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item._id !== id));
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
