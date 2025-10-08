import React from 'react';
import { useCart } from '../Context/CartContext';
import removeIcon from '../assets/img/remove.png';
import addIcon from '../assets/img/add.png';

const CartPage = () => {
  const { cartItems, addToCart, decreaseQuantity, removeFromCart } = useCart();

  if (cartItems.length === 0) {
    return <div className="text-center mt-10 text-xl">Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-4">
        {cartItems.map((item) => (
          <div key={item._id} className="flex items-center justify-between bg-neutral-100 p-20 rounded-md">
            <div className="flex items-center gap-4">
              <img src={item.images[0]} alt={item.title} className="w-20 h-20 object-cover rounded-md" />
              <div>
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-[#AA8265]">{item.category}</p>
                <p className="font-bold mt-1">{item.price} {item.currency}</p>
              </div>
            </div>

            {/* Quantity Control */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => decreaseQuantity(item._id)}
                className="p-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                <img src={removeIcon} alt="decrease" className="w-4 h-4" />
              </button>
              <span className="px-4 font-bold">{item.quantity}</span>
              <button
                onClick={() => addToCart(item)}
                className="p-2 bg-gray-200 rounded hover:bg-gray-300"
              >
                <img src={addIcon} alt="increase" className="w-4 h-4" />
              </button>
            </div>

            {/* Remove Item */}
            <button
              onClick={() => removeFromCart(item._id)}
              className="text-red-500 font-bold hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-6 text-right font-bold text-xl">
        Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
      </div>
    </div>
  );
};

export default CartPage;
