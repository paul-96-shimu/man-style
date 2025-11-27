import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // 🔹 Fetch users (with optional search)
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`https://y-three-blond.vercel.app/users?search=${search}`);
      setUsers(res.data);
    } catch (error) {
      console.error("❌ Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [search]);

  // 🔹 Make Admin function
  const handleMakeAdmin = async (id) => {
    try {
      const res = await axios.put(`https://y-three-blond.vercel.app/users/make-admin/${id}`);
      if (res.data.success) {
        toast.success("User promoted to Admin ✅");
        fetchUsers();
      } else {
        toast.info(res.data.message || "Already an Admin");
      }
    } catch (error) {
      console.error("❌ Error making admin:", error);
      toast.error("Failed to make admin");
    }
  };

  // 🔹 Remove Admin function
  const handleRemoveAdmin = async (id) => {
    try {
      const res = await axios.put(`https://y-three-blond.vercel.app/users/remove-admin/${id}`);
      if (res.data.success) {
        toast.warn("Admin role removed ❌");
        fetchUsers();
      } else {
        toast.info(res.data.message || "Already a normal user");
      }
    } catch (error) {
      console.error("❌ Error removing admin:", error);
      toast.error("Failed to remove admin");
    }
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-center">👑 Make / Remove Admin Panel</h2>

      {/* Search Input */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search user by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-md"
        />
      </div>

      {/* Users Table */}
      {users.length === 0 ? (
        <p className="text-center text-gray-500">No users found</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border">
            <thead>
              <tr className="bg-gray-100 text-center">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id} className="text-center">
                  <td>{idx + 1}</td>
                  <td>{user.name || "N/A"}</td>
                  <td>{user.email}</td>
                  <td>
                    <span
                      className={`badge ${
                        user.role === "admin" ? "badge-success" : "badge-ghost"
                      }`}
                    >
                      {user.role || "user"}
                    </span>
                  </td>
                  <td>
                    {user.role === "admin" ? (
                      <button
                        onClick={() => handleRemoveAdmin(user._id)}
                        className="btn btn-sm btn-error"
                      >
                        Remove Admin
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-sm btn-primary"
                      >
                        Make Admin
                      </button>
                    )}
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

export default MakeAdmin;
