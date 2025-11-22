import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/Authcontex";

const AdminProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-xl mx-auto bg-gray-900 text-white shadow p-6 rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Admin Profile</h2>

      <img
        src={user?.photoURL}
        alt="profile"
        className="w-24 h-24 rounded-full mx-auto border-2 border-white"
      />

      <div className="mt-4 space-y-2">
        <p><strong>Name:</strong> {user?.displayName || "Admin"}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Role:</strong> Admin</p>

        <div className="mt-4">
          <button className="bg-blue-600 px-4 py-2 rounded">
            Manage Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
