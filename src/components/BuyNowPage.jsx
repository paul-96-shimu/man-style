import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const BuyNowPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {}; // 👈 DetailsPage থেকে আসা product

  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!product) {
      navigate("/"); // যদি product data না থাকে, home এ পাঠাও
    }
  }, [product, navigate]);

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    setIsProcessing(true);

    // এখানে তুমি চাইলে backend payment gateway integrate করতে পারো
    setTimeout(() => {
      setIsProcessing(false);
      alert(`Payment Successful via ${paymentMethod}! ✅`);
      navigate("/"); // Payment শেষে home এ redirect
    }, 2000);
  };

  if (!product) return null;

  return (
    <div className="container mx-auto mt-10 p-4 max-w-xl bg-white rounded-md shadow">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#AA8265]">
        Buy Now
      </h1>

      <div className="border p-4 rounded mb-4">
        <img
          src={product.images?.[0]}
          alt={product.title}
          className="w-full max-h-60 object-cover rounded"
        />
        <h2 className="font-semibold mt-2">{product.title}</h2>
        <p className="text-gray-600">{product.shortDescription}</p>
        <p className="font-bold mt-2">
          Price: {product.price} {product.currency}
        </p>
      </div>

      <h3 className="font-semibold mb-2">Select Payment Method:</h3>
      <div className="flex flex-col gap-2">
        {["Bkash", "Nagad", "Visa Card"].map((method) => (
          <label key={method} className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value={method}
              checked={paymentMethod === method}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            {method}
          </label>
        ))}
      </div>

      <button
        onClick={handlePayment}
        disabled={isProcessing}
        className="w-full mt-6 bg-[#AA8265] text-white py-3 rounded hover:bg-[#8b6c50]"
      >
        {isProcessing ? "Processing..." : `Pay with ${paymentMethod || "..."}`}
      </button>
    </div>
  );
};

export default BuyNowPage;
