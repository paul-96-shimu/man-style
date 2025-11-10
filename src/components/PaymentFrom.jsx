import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PaymentForm = ({ product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);

  // 🔹 Backend থেকে clientSecret আনবে
  useEffect(() => {
    if (product?.price) {
      console.log("🧾 Sending price to backend:", product.price);

      axios
        .post("http://localhost:3000/create-payment-intent", { price: product.price })
        .then((res) => {
          console.log("✅ Backend Response:", res.data);
          if (res.data?.clientSecret) {
            setClientSecret(res.data.clientSecret);
            console.log("🎯 Client Secret set:", res.data.clientSecret);
          } else {
            console.error("⚠️ No clientSecret returned from backend");
          }
        })
        .catch((err) =>
          console.error("❌ Error creating payment intent:", err)
        );
    } else {
      console.warn("⚠️ No product price found!");
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setError("Stripe is not ready yet!");
      return;
    }

    if (!clientSecret) {
      setError("Client secret missing!");
      console.error("❌ Missing clientSecret in frontend!");
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setError("Card element not found!");
      return;
    }

    setProcessing(true);
    setError("");
    setSuccess("");

    try {
      // Step 1: create payment method
      const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (pmError) {
        console.error("❌ PaymentMethod Error:", pmError);
        setError(pmError.message);
        setProcessing(false);
        return;
      }

      console.log("✅ PaymentMethod created:", paymentMethod.id);

      // Step 2: confirm card payment
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card,
            billing_details: {
              name: "Test User", // প্রয়োজনে user.name বসাও
            },
          },
        }
      );

      console.log("📤 Stripe confirmCardPayment response:", { paymentIntent, confirmError });

      if (confirmError) {
        setError(confirmError.message);
        console.error("❌ Payment Confirmation Error:", confirmError);
      } else if (paymentIntent?.status === "succeeded") {
        setSuccess("✅ Payment Successful!");
        setError("");
        console.log("🎉 Payment Success:", paymentIntent);
      } else {
        console.warn("⚠️ Payment not successful. Status:", paymentIntent?.status);
      }
    } catch (err) {
      setError("Unexpected error occurred!");
      console.error("🔥 Unexpected Error:", err);
    }

    setProcessing(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Pay for {product?.name || "Product"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <CardElement
          className="border p-3 rounded text-base"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": { color: "#aab7c4" },
              },
              invalid: { color: "#9e2146" },
            },
          }}
        />

        <button
          type="submit"
          className={`btn w-full bg-[#AA8265] hover:bg-[#8b6c50] text-white font-semibold py-2 rounded ${
            !stripe || !clientSecret || processing ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? "Processing..." : "Pay Now"}
        </button>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-600 font-semibold">{success}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
