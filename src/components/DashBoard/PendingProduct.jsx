import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PendingProduct = () => {
  const [orders, setOrders] = useState([]);

  const fetchPendingOrders = async () => {
    try {
      const res = await axios.get("http://localhost:3000/orders/pending");
      console.log("🔹 Pending Orders from API:", res.data);
      setOrders(res.data);
    } catch (error) {
      console.error("❌ Error fetching pending orders:", error);
    }
  };

  useEffect(() => {
    fetchPendingOrders();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:3000/orders/approve/${id}`);
      fetchPendingOrders();
    } catch (error) {
      console.error("❌ Failed to approve order:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.put(`http://localhost:3000/orders/reject/${id}`);
      fetchPendingOrders();
    } catch (error) {
      console.error("❌ Failed to reject order:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Pending Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-center">No pending orders</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th>Product</th>
                <th>Price</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="text-center">
                  <td>{order.title}</td>
                  <td>${order.price}</td>
                  <td>{order.userEmail}</td>
                  <td>{order.status}</td>
                  <td className="flex justify-center gap-2">
                    <button
                      onClick={() => handleApprove(order._id)}
                      className="btn btn-sm btn-success"
                      disabled={order.status === "approved"}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject(order._id)}
                      className="btn btn-sm btn-error"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PendingProduct;
