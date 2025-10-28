import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext/Authcontex";


const MyPayments = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      // Fetch payments by user email
      axios
        .get(`http://localhost:3000/orders/${user.email}`)
        .then((res) => {
          // filter only paid orders
          const paidOrders = res.data.filter((order) => order.status === "paid");
          setPayments(paidOrders);
        })
        .catch((err) => console.error("Error fetching payments:", err))
        .finally(() => setLoading(false));
    }
  }, [user?.email]);

  if (!user) return <p>Please login to view your payments.</p>;
  if (loading) return <p>Loading payments...</p>;
  if (payments.length === 0) return <p>No payments found.</p>;

  return (
    <div className="container mx-auto mt-10 p-4 max-w-4xl bg-white rounded-md shadow">
      <h1 className="text-2xl font-bold mb-4 text-center text-[#AA8265]">
        My Payments
      </h1>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Product</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Total Price</th>
            <th className="border p-2">Payment Method</th>
            <th className="border p-2">Paid At</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment) => (
            <tr key={payment._id} className="text-center">
              <td className="border p-2">{payment.title}</td>
              <td className="border p-2">{payment.quantity}</td>
              <td className="border p-2">
                {payment.totalPrice} {payment.currency || "BDT"}
              </td>
              <td className="border p-2">{payment.paymentMethod}</td>
              <td className="border p-2">
                {new Date(payment.paidAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPayments;
