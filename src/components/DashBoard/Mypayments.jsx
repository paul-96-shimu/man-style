import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext/Authcontex";


const MyPayments = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      // 🔹 Fetch payments from backend filtered by user email
      axios
        .get(`https://y-three-blond.vercel.app/payments?email=${user.email}`)
        .then((res) => {
          setPayments(res.data);
        })
        .catch((err) => console.error("❌ Error fetching payments:", err))
        .finally(() => setLoading(false));
    }
  }, [user?.email]);

  if (!user) return <p className="text-center mt-10">Please login to view your payments.</p>;
  if (loading) return <p className="text-center mt-10">Loading your payments...</p>;
  if (payments.length === 0)
    return <p className="text-center mt-10 text-gray-600">No payments found.</p>;

  return (
    <div className="container mx-auto mt-10 p-6 max-w-5xl bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#AA8265]">
        My Payments
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="border p-3">Product Name</th>
              <th className="border p-3">Price</th>
              <th className="border p-3">Transaction ID</th>
              <th className="border p-3">Status</th>
              <th className="border p-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment._id} className="text-center hover:bg-gray-50">
                <td className="border p-3 font-medium">{payment.productName}</td>
                <td className="border p-3">
                  {payment.price} {payment.currency || "USD"}
                </td>
                <td className="border p-3 text-sm text-gray-600">
                  {payment.transactionId}
                </td>
                <td
                  className={`border p-3 font-semibold ${
                    payment.status === "paid" ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {payment.status.toUpperCase()}
                </td>
                <td className="border p-3 text-sm text-gray-600">
                  {new Date(payment.date).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPayments;
