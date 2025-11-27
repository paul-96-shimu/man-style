import React, { useEffect, useState } from "react";
import axios from "axios";

const Payment = () => {
    const [summary, setSummary] = useState(null);

    useEffect(() => {
        axios.get("https://y-three-blond.vercel.app/today-summary")
            .then(res => setSummary(res.data))
            .catch(error => console.error(error));
    }, []);

    if (!summary) return <p>Loading...</p>;

    return (
        <div className="p-6 bg-white shadow rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Today's Sale Summary</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="p-6 bg-blue-100 rounded-lg">
                    <h3 className="text-xl font-semibold">Total Orders</h3>
                    <p className="text-3xl font-bold mt-2">{summary.totalOrders}</p>
                </div>

                <div className="p-6 bg-green-100 rounded-lg">
                    <h3 className="text-xl font-semibold">Total Products Sold</h3>
                    <p className="text-3xl font-bold mt-2">{summary.totalSellQuantity}</p>
                </div>

                <div className="p-6 bg-purple-100 rounded-lg">
                    <h3 className="text-xl font-semibold">Total Amount</h3>
                    <p className="text-3xl font-bold mt-2">{summary.totalSellAmount} ৳</p>
                </div>

            </div>
        </div>
    );
};

export default Payment;
