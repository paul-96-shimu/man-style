import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";

const OrderDetails = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/orders/details/${id}`)
            .then((res) => setOrder(res.data.order))
            .catch((err) => console.log(err));
    }, [id]);

    if (!order) return <p className="p-6">Loading order details...</p>;

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            {/* Breadcrumb */}
            <div className="text-sm mb-4 text-gray-600">
                <span className="hover:text-blue-500 cursor-pointer">Account</span> /
            <Link to="/dashboard/orders" className="hover:text-blue-500 cursor-pointer ml-1">Order History</Link>
                <span className="text-blue-600 font-medium ml-1">Order Information</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LEFT SECTION */}
                <div className="lg:col-span-2">
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-2xl font-semibold text-center">
                            Order Information #{order._id}
                        </h2>

                        <div className="flex justify-center mt-3">
                            <button className="bg-green-600 text-white px-4 py-1 rounded">
                                Send To Courier
                            </button>
                        </div>

                        {/* Shipping + Summary */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {/* Shipping Address */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold mb-2">Shipping Address</h3>
                                <p>{order.userName}</p>
                                <p>{order.userEmail}</p>
                                <p>{order.address || "Dhaka, Bangladesh"}</p>
                                <p className="mt-2 font-medium">
                                    Mobile: {order.phone}
                                </p>
                            </div>

                            {/* Order Summary */}
                            <div className="bg-gray-50 p-4 rounded">
                                <h3 className="font-semibold mb-2">Order Summary</h3>
                                <div className="flex justify-between">
                                    <span>Sub-Total</span>
                                    <span>{order.totalPrice}৳</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Home Delivery</span>
                                    <span>60৳</span>
                                </div>
                                <div className="flex justify-between font-bold mt-2">
                                    <span>Total</span>
                                    <span>{order.totalPrice + 60}৳</span>
                                </div>
                                <div className="flex justify-between text-green-600 font-semibold">
                                    <span>Paid</span>
                                    <span>{order.paidAmount || 0}৳</span>
                                </div>
                                <div className="flex justify-between text-red-600 font-semibold">
                                    <span>Due</span>
                                    <span>{order.totalPrice + 60 - (order.paidAmount || 0)}৳</span>
                                </div>
                            </div>
                        </div>

                        {/* Products Table */}
                        <h3 className="font-semibold mt-6 mb-2">Products</h3>
                        <table className="w-full border">
                            <thead className="bg-gray-200">
                                <tr>
                                    <th className="p-2 border">Image</th>
                                    <th className="p-2 border">Product Name</th>
                                    <th className="p-2 border">Quantity</th>
                                    <th className="p-2 border">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2">
                                        <img
                                            src={order.image}
                                            className="w-14 rounded"
                                            alt="product"
                                        />
                                    </td>
                                    <td className="border p-2">{order.title}</td>
                                    <td className="border p-2 text-center">{order.quantity}</td>
                                    <td className="border p-2 text-right">{order.totalPrice}৳</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Continue Button */}
                        <div className="flex justify-end mt-6">
                            <Link to="/">
                                <button className="bg-blue-600 text-white px-5 py-2 rounded">
                                    Continue
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION - ORDER HISTORY */}
                <div className="bg-white rounded shadow p-6">
                    <h3 className="font-semibold text-lg mb-3">Order History</h3>

                    <div className="space-y-6">
                        <div>
                            <div className="text-red-600 font-bold">● Pending</div>
                            <p className="text-gray-600">Order has been placed.</p>
                            <p className="text-gray-500 text-sm">{order.orderDate}</p>
                        </div>

                        <div>
                            <div className="text-orange-600 font-bold">● Confirmed</div>
                            <p className="text-gray-600">Your order is confirmed.</p>
                        </div>

                        <div>
                            <div className="text-blue-600 font-bold">● Billing</div>
                            <p className="text-gray-600">Invoice generated.</p>
                        </div>

                        <div>
                            <div className="text-green-600 font-bold">● Send to Courier</div>
                            <p className="text-gray-600">Order sent to delivery courier.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
