import React, { useContext } from "react";
import { Link, Outlet } from "react-router";
import { AuthContext } from "../Context/AuthContext/Authcontex";
import useUserRole from "../components/Hooks/useUserRole";
import Navber from "../components/Navber";



const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const { role, roleLoading } = useUserRole();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
    <Navber></Navber>

      {/* Drawer */}
      <div className="drawer lg:drawer-open flex-1">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

        {/* Main content */}
        <div className="drawer-content p-6 mt-0">
          <Outlet />
        </div>

        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-6 space-y-2 text-[#5B3E38]">
            {/* ✅ User Info on top */}
            {user && (
              <div className="p-4 text-center border-b mb-4">
                <img
                  src={user.photoURL || "/default-profile.png"}
                  alt="User"
                  className="w-16 h-16 mx-auto rounded-full"
                />
                <p className="mt-2 font-semibold">{user.displayName || "User"}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            )}

            <h2 className="text-xl font-semibold mb-4">Dashboard Menu</h2>

            {!roleLoading && role === "admin" && (
              <>
                <li><Link to="/dashboard/user">All Users</Link></li>
                <li><Link to="/dashboard/pending">Pending Product</Link></li>
                <li><Link to="/dashboard/approved">Approved Product</Link></li>
                <li><Link to="/dashboard/make-admin">Make Admin</Link></li>
                <li><Link to="/dashboard/profile">Eidit Profile</Link></li>
              </>
            )}

            {!roleLoading && role === "user" && (
              <>
                <li><Link to="/dashboard/orders">My Orders</Link></li>
                <li><Link to="/dashboard/payments">My Payments</Link></li>
                <li><Link to="/dashboard/password">Change Password</Link></li>
                <li><Link to="/dashboard/profile">Eidit Profile</Link></li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
