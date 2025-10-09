import React from 'react';
import { useCart } from '../Context/CartContext';
import removeIcon from '../assets/img/remove.png';
import addIcon from '../assets/img/add.png';
import { Link } from 'react-router';

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
      <div className='mt-6'>


        <button

          className="text-white font-bold  bg-[#AA8265] pt-4 pb-4 pr-8 pl-8 rounded  hover:bg-[#8b6c50] instrument-sans"
        >
          CHECK OUT NOW
        </button>

        <Link to="/">


          <button

            className="text-[#AA8265] font-bold  bg-white pt-4 pb-4 pr-8 pl-8 rounded   instrument-sans ml-6 border border-[#AA8265]"
          >
            CONTINUE SHOPPING
          </button>
        </Link>
        <div className=" text-right font-bold text-xl">
          Total Items: {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
        </div>
      </div>


    </div>
  );
};

export default CartPage;
