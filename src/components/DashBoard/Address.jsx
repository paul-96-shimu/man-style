import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext/Authcontex";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const API_BASE = "https://y-three-blond.vercel.app/";

const Address = () => {
  const { user } = useContext(AuthContext);
  const [addresses, setAddresses] = useState([]);

  const [showForm, setShowForm] = useState(false); // 🔥 modal toggle
  const [editingId, setEditingId] = useState(null); // 🔥 UPDATED: track editing
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    country: "",
    default: false,
  });

  // LOAD ADDRESSES
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`${API_BASE}/addresses/${user.email}`)
        .then((res) => setAddresses(res.data))
        .catch((err) => console.log(err));
    }
  }, [user]);

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🔥 UPDATED: HANDLE EDIT BUTTON
  const handleEdit = (address) => {
    setEditingId(address._id);
    setFormData({
      fullName: address.fullName,
      address: address.address,
      city: address.city,
      country: address.country,
      default: address.default,
    });
    setShowForm(true);
  };

  // ADD OR UPDATE ADDRESS
  const handleAddAddress = (e) => {
    e.preventDefault();

    if (editingId) {
      // 🔥 UPDATED: UPDATE EXISTING ADDRESS
      axios
        .put(`${API_BASE}/addresses/${editingId}`, formData)
        .then((res) => {
          setAddresses(
            addresses.map((addr) =>
              addr._id === editingId ? res.data : addr
            )
          );
          Swal.fire("Success!", "Address updated ✔", "success");
          setShowForm(false);
          setEditingId(null);
          setFormData({
            fullName: "",
            address: "",
            city: "",
            country: "",
            default: false,
          });
        })
        .catch((err) => console.log(err));
    } else {
      // ADD NEW
      const newAddress = { ...formData, email: user.email };
      axios
        .post(`${API_BASE}/addresses`, newAddress)
        .then((res) => {
          setAddresses([...addresses, res.data]);
          setShowForm(false);
          Swal.fire("Success!", "New address added ✔", "success");
          setFormData({
            fullName: "",
            address: "",
            city: "",
            country: "",
            default: false,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  // DELETE ADDRESS
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this address?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${API_BASE}/addresses/${id}`).then(() => {
          setAddresses(addresses.filter((a) => a._id !== id));
          Swal.fire("Deleted!", "Address removed.", "success");
        });
      }
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-6">Address Book</h2>

      {/* ADDRESS LIST */}
      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address._id}
            className="border p-4 rounded flex justify-between items-start"
          >
            <div>
              <p className="font-medium">{address.fullName}</p>
              <p className="text-gray-600">{address.address}</p>
              <p className="text-gray-600">
                {address.city}, {address.country}
              </p>

              {address.default && (
                <span className="text-xs bg-green-600 text-white px-2 py-1 rounded">
                  Default
                </span>
              )}
            </div>

            <div className="flex gap-4">
              {/* 🔥 UPDATED: add onClick for edit */}
              <FaEdit
                onClick={() => handleEdit(address)}
                className="cursor-pointer text-blue-600"
                size={18}
              />
              <FaTrash
                onClick={() => handleDelete(address._id)}
                className="cursor-pointer text-red-600"
                size={18}
              />
            </div>
          </div>
        ))}
      </div>

      {/* ADD NEW ADDRESS BUTTON */}
      <button
        onClick={() => {
          setShowForm(true);
          setEditingId(null); // 🔥 UPDATED: reset editingId for new address
          setFormData({
            fullName: "",
            address: "",
            city: "",
            country: "",
            default: false,
          });
        }}
        className="w-full mt-6 py-3 text-[#AA8265] border rounded"
      >
        + New Address
      </button>

      {/* ADD ADDRESS FORM (MODAL STYLE) */}
      {showForm && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <h3 className="font-bold mb-4 text-lg">
            {editingId ? "Edit Address" : "Add New Address"} {/* 🔥 UPDATED: dynamic title */}
          </h3>

          <form onSubmit={handleAddAddress} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border p-3"
              required
            />

            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-3"
              required
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              className="w-full border p-3"
              required
            />

            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              className="w-full border p-3"
              required
            />

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="default"
                checked={formData.default}
                onChange={handleChange}
              />
              Set as default address
            </label>

            <div className="flex gap-4">
              <button
                className="bg-[#AA8265] text-white px-4 py-2"
                type="submit"
              >
                {editingId ? "Update Address" : "Save Address"} {/* 🔥 UPDATED */}
              </button>

              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 border"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Address;
