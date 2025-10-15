import React from 'react';
import { Link, Outlet } from 'react-router';

const DashBord = () => {
  return (
    <div className="drawer lg:drawer-open">
      {/* Checkbox for mobile drawer toggle */}
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* Main Content Area */}
      <div className="drawer-content flex flex-col min-h-screen bg-gray-50">

        {/* 🔹 Top Navbar */}
        <div className="navbar bg-[#AA8265] text-white px-4">
          {/* Mobile Menu Button */}
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          {/* Logo / Title */}
          <div className="flex-1 text-lg font-semibold">
            My Dashboard
          </div>

          {/* Desktop Nav Menu (optional) */}
          <div className="hidden lg:flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/shop" className="hover:underline">Shop</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>

        {/* 🔸 Page Content */}
        <div className="p-6 flex-1">
          <Outlet /> {/* Nested routes will render here */}
        </div>
      </div>

      {/* 🔹 Sidebar */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-6 space-y-2 text-[#5B3E38]">
          <h2 className="text-xl font-semibold mb-4">Dashboard Menu</h2>
          <li><Link to="/dashboard/admin">Admin Dashboard</Link></li>
          <li><Link to="/dashboard/seller">Seller Dashboard</Link></li>
          <li><Link to="/dashboard/user">User Dashboard</Link></li>
          <li><Link to="/dashboard/orders">My Orders</Link></li>
          <li><Link to="/dashboard/settings">Settings</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default DashBord;
