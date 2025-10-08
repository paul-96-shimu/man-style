import React from 'react';
import { Link } from 'react-router';

import removeIcon from '../assets/img/remove.png'; 
import { useWishlist } from '../Context/WishListContex';

const WishlistPage = () => {
    const { wishlistItems, removeFromWishlist } = useWishlist();

    if (wishlistItems.length === 0) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-2xl font-bold">Your Wishlist is Empty</h2>
                <Link to="/" className="text-blue-500 underline mt-4 inline-block">
                    Go to Shop
                </Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {wishlistItems.map((item) => (
                    <div key={item._id} className="bg-neutral-100 p-4 rounded-md relative">
                        <img
                            src={item.images[0]}
                            alt={item.title}
                            className="mx-auto rounded-md mb-2"
                        />
                        <h2 className="font-bold text-lg">{item.title}</h2>
                        <p className="text-[#AA8265]">{item.category}</p>
                        <div className="font-bold mt-1">
                            {item.price} {item.currency}
                        </div>

                        {/* Remove from Wishlist */}
                        <button
                            onClick={() => removeFromWishlist(item._id)}
                            className="absolute top-2 right-2 w-6 h-6 p-1 rounded bg-red-500 flex items-center justify-center hover:bg-red-600"
                        >
                            <img src={removeIcon} alt="Remove" className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishlistPage;
