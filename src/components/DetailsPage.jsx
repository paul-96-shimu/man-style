import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import pluse from '../assets/img/plus.png';
import remove from '../assets/img/remove.png';
import add from '../assets/img/add.png';
import { useCart } from '../Context/CartContext';
import { useWishlist } from '../Context/WishListContex';

const DetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [quantity, setQuantity] = useState(1);
  
  const { addToCart } = useCart(); 
  const { addToWishList } = useWishlist();

  useEffect(() => {
    // ✅ fetch single product
    fetch(`http://localhost:3000/manproducts/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));

    // ✅ fetch related products
    fetch(`http://localhost:3000/manproducts/${id}/related`)
      .then(res => res.json())
      .then(data => setRelated(data));
  }, [id]);

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  // ✅ Quantity control
  const handleIncrease = () => setQuantity(prev => prev + 1);
  const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  // ✅ Add to cart (context)
  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    alert(`${product.title} added to cart (${quantity} pcs)`);
  };

  const handleAddToWishList = () => {
  addToWishList(product);
};

  return (
    <div className="container mx-auto mt-8">
      {/* Product Details */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <img
            src={product.images[0]}
            alt={product.title}
            className="mx-auto w-full max-w-md rounded-md"
          />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-[#AA8265]">
            {product.category} / {product.collection}
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-2 mt-6">
            <button
              onClick={handleDecrease}
              className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              <img src={remove} alt="decrease" className="w-4 h-4" />
            </button>

            <span className="px-4 font-bold">{quantity}</span>

            <button
              onClick={handleIncrease}
              className="p-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              <img src={add} alt="increase" className="w-4 h-4" />
            </button>
          </div>

          <div className="font-bold text-xl mt-4">
            {product.price} {product.currency}
          </div>
          <p className="mt-4">{product.shortDescription}</p>

          {/* Add to Cart Button */}
          <button
            className="mt-6 text-[16px] text-[#F6F4F0] bg-[#AA8265] inline-flex gap-2 pt-4 pb-4 pr-8 pl-8 rounded hover:bg-[#8b6c50]"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>

             <button
            className=" ml-4 mt-6 text-[16px] text-[#F6F4F0] bg-[#AA8265] inline-flex gap-2 pt-4 pb-4 pr-8 pl-8 rounded hover:bg-[#8b6c50]"
            onClick={handleAddToWishList}
          >
            Add to WishList
          </button>


          
        </div>
      </div>

      {/* Related Products */}
      <h2 className="text-xl font-bold mt-10 mb-4">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {related.map((item) => (
          <Link key={item._id} to={`/product/${item._id}`}>
            <div className="bg-neutral-100 p-2 relative rounded-md hover:shadow-md transition">
              <img
                src={item.images[0]}
                alt={item.title}
                className="mx-auto rounded-md"
              />
              <div className="absolute top-2 left-2 bg-[#E9E2D8] px-2 py-1 text-xs font-bold">
                {item.discount || 'New'}
              </div>
              <img
                src={pluse}
                alt="plus"
                className="absolute top-2 right-2 w-6 border p-1 rounded bg-white"
              />
              <h6 className="font-bold mt-2">{item.title}</h6>
              <small className="text-[#AA8265]">{item.category}</small>
              <div className="font-bold mt-1">
                {item.price} {item.currency}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DetailsPage;
