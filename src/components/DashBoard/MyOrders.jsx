import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext/Authcontex";
import { Link } from "react-router";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://y-three-blond.vercel.app/orders/${user.email}`)
        .then((res) => {
          setOrders(res.data);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
        });
    }
  }, [user]);

  // Delete Order
  // const handleDelete = async (id) => {
  //   const confirmDelete = window.confirm("Are you sure you want to delete this order?");
  //   if (!confirmDelete) return;

  //   try {
  //     await axios.delete(`https://y-three-blond.vercel.app//orders/delete/${id}`);
  //     setOrders(orders.filter((order) => order._id !== id));
  //     alert("Order deleted successfully!");
  //   } catch (error) {
  //     alert("Failed to delete the order.", error);
  //   }
  // };

  if (loading) return <p>Loading...</p>;
  if (!orders.length) return <p>No orders found.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      <ul>
        {orders.map((order) => (
          <li
            key={order._id}
            className="border p-4 mb-3 rounded shadow flex flex-col md:flex-row justify-between items-start"
          >
            {/* Order Info */}
            <div className="mb-4 md:mb-0">


              {/* 🔥 Display Address directly from order */}
              {order.address && (
                <div className="mt-2 p-2 border rounded bg-gray-50">
                  <p><strong>Delivery Address:</strong></p>
                  <p>{order.address.fullName}</p>
                  <p>{order.address.address}</p>
                  <p>{order.address.city}, {order.address.country}</p>
                </div>
              )}



              <p><strong>Order ID:</strong> {order._id}</p>
              <p><strong>Title:</strong> {order.title}</p>
              <p><strong>Quantity:</strong> {order.quantity}</p>
              <p><strong>Total:</strong> {order.totalPrice} {order.currency}</p>
              <p><strong>Status:</strong> {order.status}</p>

            </div>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap">
              <Link
                to={`/dashboard/orderdetails/${order._id}`}
                className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600"
              >
                View
              </Link>

              {/* <Link
                to={`/dashboard/update-order/${order._id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Update
              </Link> */}

              {/* <button
                onClick={() => handleDelete(order._id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button> */}

              <Link
                to={`/dashboard/review/${order._id}`}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Review
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyOrders;
