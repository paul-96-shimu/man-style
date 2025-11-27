import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ApproveProduct = () => {

 const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://y-three-blond.vercel.app/orders/approved")
      .then((res) => setOrders(res.data));
  }, []);



    return (
        <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Approved Orders
      </h2>

      {orders.length === 0 ? (
        <p className="text-center">No approved orders</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th>Product</th>
                <th>Price</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="text-center">
                  <td>{order.product}</td>
                  <td>${order.price}</td>
                  <td>{order.userEmail}</td>
                  <td className="text-green-600 font-semibold">
                    {order.status}
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

export default ApproveProduct;