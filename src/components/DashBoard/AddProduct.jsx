import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    stock: "",
    collection: "",
    sizes: "",
    colors: "",
    images: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  // Generate slug from title
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, "-");
  };

  // Submit product
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for backend
    const payload = {
      ...productData,
      slug: generateSlug(productData.title),
      sizes: productData.sizes.split(",").map((s) => s.trim()),
      colors: productData.colors.split(",").map((c) => c.trim()),
      images: productData.images.split(",").map((img) => img.trim()),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    try {
      const res = await axios.post("https://y-three-blond.vercel.app/products", payload);

      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Product Added!",
          text: "Your product has been added successfully 🎉",
          timer: 2000,
          showConfirmButton: false,
        });

        // Clear form
        setProductData({
          title: "",
          price: "",
          description: "",
          category: "",
          stock: "",
          collection: "",
          sizes: "",
          colors: "",
          images: "",
        });
      }
    } catch (error) {
      console.error("❌ Error adding product:", error);
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: error.response?.data?.message || "Failed to add product ❌",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg p-8 rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">🛒 Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="title" placeholder="Product Title" value={productData.title} onChange={handleChange} className="input input-bordered w-full" required />
        <input type="number" name="price" placeholder="Product Price" value={productData.price} onChange={handleChange} className="input input-bordered w-full" required />
        <input type="number" name="stock" placeholder="Stock" value={productData.stock} onChange={handleChange} className="input input-bordered w-full" required />
        <input type="text" name="collection" placeholder="Collection" value={productData.collection} onChange={handleChange} className="input input-bordered w-full" />
        <input type="text" name="sizes" placeholder="Sizes (S,M,L)" value={productData.sizes} onChange={handleChange} className="input input-bordered w-full" />
        <input type="text" name="colors" placeholder="Colors (Red,Blue)" value={productData.colors} onChange={handleChange} className="input input-bordered w-full" />
        <select name="category" value={productData.category} onChange={handleChange} className="select select-bordered w-full" required>
          <option value="">Select Category</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
        </select>
        <input type="text" name="images" placeholder="Image URLs (comma separated)" value={productData.images} onChange={handleChange} className="input input-bordered w-full" required />
        <textarea name="description" placeholder="Description" value={productData.description} onChange={handleChange} className="textarea textarea-bordered w-full" rows={4} required></textarea>

        <button type="submit" className="btn btn-primary w-full">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
