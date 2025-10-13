import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

const BuyNowPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { product, selectedColor, selectedSize, quantity: initialQuantity } = location.state || {};

  const [quantity, setQuantity] = useState(initialQuantity || 1); // ✅ initial quantity set

  // ✅ যদি product না থাকে, home এ redirect
  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  if (!product) return null;

  // ✅ Quantity Increase / Decrease
  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increase" && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  // ✅ Price Calculation
  const finalPrice = product.discount
    ? (product.price - (product.price * product.discount) / 100).toFixed(2)
    : product.price;

  return (
    <div className="container mx-auto mt-10 p-4 max-w-xl bg-white rounded-md shadow">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#AA8265]">
        Buy Now
      </h1>

      {/* Product Info */}
      <div className="border p-4 rounded mb-4">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-full max-h-60 object-cover rounded"
        />
        <h2 className="font-semibold mt-2">{product.title}</h2>
        <p className="text-gray-600">{product.shortDescription}</p>

        {/* Selected Color & Size */}
        <div className="mt-2">
          {selectedColor && (
            <p className="text-sm">
              <span className="font-semibold">Color:</span> {selectedColor}
            </p>
          )}
          {selectedSize && (
            <p className="text-sm">
              <span className="font-semibold">Size:</span> {selectedSize}
            </p>
          )}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={() => handleQuantityChange("decrease")}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            onClick={() => handleQuantityChange("increase")}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>

        <p className="font-bold mt-3">
          Total: {(finalPrice * quantity).toFixed(2)} {product.currency}
        </p>
      </div>

      {/* Proceed Button */}
      <Link
        to="/placeorder"
        state={{
          product,
          selectedColor,
          selectedSize,
          quantity, // ✅ updated quantity pass হচ্ছে
        }}
      >
        <button className="w-full mt-6 py-3 rounded text-white bg-[#AA8265] hover:bg-[#8b6c50]">
          Proceed to Place Order
        </button>
      </Link>
    </div>
  );
};

export default BuyNowPage;
