import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const PlaceOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product } = location.state || {}; // 👈 DetailsPage থেকে পাঠানো product data

  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // ✅ যদি product না থাকে তাহলে home এ redirect করো
  useEffect(() => {
    if (!product) {
      navigate("/");
    }
  }, [product, navigate]);

  if (!product) return null; // product না থাকলে কিছুই দেখাবে না

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method!");
      return;
    }

    setIsProcessing(true);

    // simulate payment
    setTimeout(() => {
      setIsProcessing(false);
      alert(`✅ Payment Successful via ${paymentMethod}!`);
      navigate("/"); // payment শেষ হলে home এ redirect
    }, 2000);
  };

  return (
    <div className="container mx-auto mt-10 p-4 max-w-xl bg-white rounded-md shadow">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#AA8265]">
        Place Order
      </h1>

      {/* 🛍 Product Info */}
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

      {/* 💳 Payment Method */}
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

      {/* ✅ Confirm Button */}
      <button
        onClick={handlePayment}
        disabled={isProcessing}
        className={`w-full mt-6 py-3 rounded text-white transition-all ${
          isProcessing
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#AA8265] hover:bg-[#8b6c50]"
        }`}
      >
        {isProcessing
          ? "Processing..."
          : paymentMethod
          ? `Pay with ${paymentMethod}`
          : "Select Payment Method"}
      </button>
    </div>
  );
};

export default PlaceOrder;
