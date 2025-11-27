import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext/Authcontex";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BuyNowPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const { product, selectedColor, selectedSize, quantity: initialQuantity } = location.state || {};
  console.log("🟢 Location state:", location.state);

  const [quantity, setQuantity] = useState(initialQuantity || 1);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState(user?.displayName || "");
  const [phone, setPhone] = useState("");

  const [addresses, setAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState("");

  useEffect(() => {
    if (user?.email) {
      // Fetch user's addresses
      axios.get(`https://y-three-blond.vercel.app//addresses/${user.email}`)
        .then(res => {
          setAddresses(res.data);
          if (res.data.length) setSelectedAddressId(res.data[0]._id); // default first address
        })
        .catch(err => console.error(err));
    }
  }, [user]);

  if (!product) {
    toast.error("⚠️ No product found!");
    navigate("/");
    return null;
  }

  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) setQuantity(prev => prev - 1);
    if (type === "increase" && quantity < product.stock) setQuantity(prev => prev + 1);
  };

  const finalPrice = product.discount
    ? (product.price - (product.price * product.discount) / 100).toFixed(2)
    : product.price;

  const handlePlaceOrder = async () => {
    if (!user) {
      toast.error("Please login to place an order.");
      navigate("/login");
      return;
    }

    if (!name || !phone) {
      toast.error("Please enter your name and phone number.");
      return;
    }

    // Get selected address object
    const selectedAddress = addresses.find(addr => addr._id === selectedAddressId);

    if (!selectedAddress) {
      toast.error("Please select an address!");
      return;
    }

    const orderData = {
      userName: name,
      phone: phone,
      userEmail: user.email,
      productId: product._id,
      title: product.title,
      quantity,
      price: parseFloat(finalPrice),
      totalPrice: parseFloat(finalPrice) * quantity,
      selectedColor,
      selectedSize,
      currency: product.currency || "BDT",
      orderDate: new Date(),
      status: "pending",
      paymentStatus: "Paid",
      paidAmount: parseFloat(finalPrice) * quantity,
      address: selectedAddress // 🔥 include the full address object
    };

    try {
      setLoading(true);
      const res = await axios.post("https://y-three-blond.vercel.app/orders", orderData);

      if (res.data?.success) {
        toast.success("✅ Order placed successfully!");
        setTimeout(() => {
          navigate("/placeorder", { state: { product, orderId: res.data.orderId } });
        }, 500);
      } else {
        toast.error("❌ Failed to place order. Try again!");
      }
    } catch (error) {
      console.error("❌ Error placing order:", error);
      toast.error("Error placing order. Check console!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-10 p-4 max-w-xl bg-white rounded-md shadow">
      <ToastContainer position="top-right" autoClose={3000} />

      <h1 className="text-2xl font-bold mb-4 text-center text-[#AA8265]">Buy Now</h1>

      <div className="border p-4 rounded mb-4">
        <img src={product.images?.[0]} alt={product.title} className="w-full max-h-60 object-cover rounded" />
        <h2 className="font-semibold mt-2">{product.title}</h2>
        <p className="text-gray-600">{product.shortDescription}</p>

        {selectedColor && <p className="text-sm"><span className="font-semibold">Color:</span> {selectedColor}</p>}
        {selectedSize && <p className="text-sm"><span className="font-semibold">Size:</span> {selectedSize}</p>}

        <div className="flex items-center gap-3 mt-3">
          <button onClick={() => handleQuantityChange("decrease")} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button onClick={() => handleQuantityChange("increase")} className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
        </div>

        <p className="font-bold mt-3">Total: {(parseFloat(finalPrice) * quantity).toFixed(2)} {product.currency || "BDT"}</p>
      </div>

      {/* Address Selection */}
      {addresses.length > 0 ? (
        <div className="border p-4 rounded mb-4">
          <label className="font-semibold mb-2 block">Select Address:</label>
          <select
            value={selectedAddressId}
            onChange={(e) => setSelectedAddressId(e.target.value)}
            className="w-full border p-2 rounded"
          >
            {addresses.map(addr => (
              <option key={addr._id} value={addr._id}>
                {addr.fullName} - {addr.address}, {addr.city}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <p className="text-red-500 mb-4">No saved addresses found. Please add an address first.</p>
      )}

      {/* Name & Phone Input */}
      {!user?.displayName && (
        <div className="border p-4 rounded mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full mb-3 rounded"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>
      )}

      <button
        onClick={handlePlaceOrder}
        disabled={loading}
        className="w-full mt-6 py-3 rounded text-white bg-[#AA8265] hover:bg-[#8b6c50]"
      >
        {loading ? "Placing Order..." : "Proceed to Place Order"}
      </button>
    </div>
  );
};

export default BuyNowPage;
