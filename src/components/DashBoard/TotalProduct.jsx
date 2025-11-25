import React, { useEffect, useState } from "react";
import axios from "axios";

const TotalProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) return <p>Loading...</p>;

  // 👉 Total products count
  const totalProducts = products.length;

  // 👉 Total stock count (sum of all product stock)
  const totalStock = products.reduce((acc, item) => acc + Number(item.stock), 0);

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="p-6 bg-blue-100 rounded-lg">
          <h3 className="text-xl font-semibold">Total Products</h3>
          <p className="text-3xl font-bold mt-2">{totalProducts}</p>
        </div>

        <div className="p-6 bg-green-100 rounded-lg">
          <h3 className="text-xl font-semibold">Total Stock</h3>
          <p className="text-3xl font-bold mt-2">{totalStock}</p>
        </div>

      </div>
    </div>
  );
};

export default TotalProduct;
