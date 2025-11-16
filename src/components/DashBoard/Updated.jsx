import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

const Updated = () => {
  const { id } = useParams();
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch the selected order data
  useEffect(() => {
    axios
      .get(`http://localhost:3000/orders/single/${id}`)
      .then((res) => {
        setOrder(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  // Handle Update Submit
  const handleUpdate = async (e) => {
    e.preventDefault();

    // Remove _id before sending to backend
    const { _id, ...updateData } = order;

    try {
      await axios.put(`http://localhost:3000/orders/update/${id}`, updateData);
      alert("Order updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Update failed! See console for details.");
    }
  };

  if (loading) return <p>Loading Order...</p>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Update Order</h2>

      <form onSubmit={handleUpdate} className="space-y-4">

        {/* Title */}
        <div>
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            name="title"
            value={order.title || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block font-semibold">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={order.quantity || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Total Price */}
        <div>
          <label className="block font-semibold">Total Price</label>
          <input
            type="number"
            name="totalPrice"
            value={order.totalPrice || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Color */}
        <div>
          <label className="block font-semibold">Color</label>
          <input
            type="text"
            name="selectedColor"
            value={order.selectedColor || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Size */}
        <div>
          <label className="block font-semibold">Size</label>
          <input
            type="text"
            name="selectedSize"
            value={order.selectedSize || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block font-semibold">Status</label>
          <select
            name="status"
            value={order.status || ""}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Order
        </button>
      </form>
    </div>
  );
};

export default Updated;
