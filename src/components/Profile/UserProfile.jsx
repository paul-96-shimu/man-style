import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/Authcontex";
import axios from "axios";
import Swal from "sweetalert2";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [editMode, setEditMode] = useState(false); // 🔥 Edit toggle

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/users/${user.email}`)
        .then((res) => {
          const data = res.data.user || res.data;
          setUserData(data);
          setLoading(false);
        })
        .catch(() => {
          setUserData(user);
          setLoading(false);
        });
    }
  }, [user]);

  // -----------------------
  // ✨ UPDATE PROFILE METHOD
  // -----------------------
  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedUser = {
      name: userData.name,
      phone: userData.phone,
      image: userData.image,
    };

    try {
      await axios.put(`http://localhost:3000/users/${user.email}`, updatedUser);

      Swal.fire("Success", "Profile updated successfully!", "success");
      setEditMode(false); // close edit mode
    } catch (error) {
      Swal.fire("Error", "Failed to update profile", "error", error.message);
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;
  if (!userData) return <p className="text-red-500">Failed to load profile</p>;

  return (
    <div className="max-w-xl mx-auto bg-white shadow p-6 rounded">

      <h2 className="text-2xl font-bold mb-4">User Profile</h2>

      <img
        src={userData.image || userData.photoURL || "https://via.placeholder.com/96"}
        alt="profile"
        className="w-24 h-24 rounded-full mx-auto"
      />

      {/* 🔥 EDIT MODE ON/OFF BUTTON */}
      <button
        onClick={() => setEditMode(!editMode)}
        className="bg-[#AA8265] text-white px-4 py-2 mt-4"
      >
        {editMode ? "Cancel Edit" : "Edit Profile"}
      </button>

      {/* -----------------------
          🔥 SHOW PROFILE VIEW
      ------------------------- */}
      {!editMode && (
        <div className="mt-4 space-y-2">
          <p><strong>Name:</strong> {userData.name || "N/A"}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          <p><strong>Phone:</strong> {userData.phone || "N/A"}</p>
          <p><strong>Role:</strong> {userData.role || "user"}</p>
        </div>
      )}

      {/* -----------------------
          ✨ EDIT PROFILE FORM
      ------------------------- */}
      {editMode && (
        <form onSubmit={handleUpdate} className="mt-6 space-y-4">

          <input
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData({ ...userData, name: e.target.value })
            }
            className="border p-3 w-full"
            placeholder="Full Name"
          />

          <input
            type="text"
            value={userData.phone}
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
            className="border p-3 w-full"
            placeholder="Phone Number"
          />

          <input
            type="text"
            value={userData.image}
            onChange={(e) =>
              setUserData({ ...userData, image: e.target.value })
            }
            className="border p-3 w-full"
            placeholder="Profile Image URL"
          />

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
};

export default UserProfile;
