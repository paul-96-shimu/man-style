import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext/Authcontex";


const PaymentForm = ({ product }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const navigate = useNavigate();

  // 🔹 ইউজার কনটেক্সট থেকে ইউজারের তথ্য নিচ্ছি
  const { user } = useContext(AuthContext);

  // 🔹 Backend থেকে clientSecret আনবে
  useEffect(() => {
    if (product?.price) {
      axios
        .post("https://y-three-blond.vercel.app//create-payment-intent", { price: product.price })
        .then((res) => {
          if (res.data?.clientSecret) {
            setClientSecret(res.data.clientSecret);
          } else {
            console.error("⚠️ No clientSecret returned from backend");
          }
        })
        .catch((err) => console.error("❌ Error creating payment intent:", err));
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
      // Step 1️⃣: Create payment method
      const { error: pmError } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (pmError) {
        setError(pmError.message);
        setProcessing(false);
        return;
      }

      // Step 2️⃣: Confirm card payment
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card,
            billing_details: {
              name: user?.displayName || "Unknown User",
              email: user?.email || "unknown@example.com",
            },
          },
        }
      );

      if (confirmError) {
        setError(confirmError.message);
      } else if (paymentIntent?.status === "succeeded") {
        setSuccess("✅ Payment Successful!");
        setError("");

        // Step 3️⃣: Save payment info to backend
        const paymentInfo = {
          userEmail: user?.email,
          userName: user?.displayName || "Anonymous",
          productName: product.title,
          price: product.price,
          transactionId: paymentIntent.id,
          status: "paid",
          date: new Date(),
        };

        await axios.post("https://y-three-blond.vercel.app//payments", paymentInfo);

        // Step 4️⃣: Redirect to My Orders page
        setTimeout(() => {
          navigate("/dashboard/orders");
        }, 1500);
      } else {
        setError("Payment not successful.");
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
        Pay for {product?.title || "Product"}
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
