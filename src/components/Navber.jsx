import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Context/AuthContext/Authcontex";
import { useCart } from "../Context/CartContext";
import { useWishlist } from "../Context/WishListContex";

import long from "../assets/img/long.png";
import search from "../assets/img/search.png";
import favorite_border from "../assets/img/favorite_border.png";
import shopping from "../assets/img/shopping_cart.png";
import img from "../assets/img/more button.png";
import userIcon from "../assets/img/download (1).png"; 

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const { totalItems } = useCart();
  const { wishlistItems } = useWishlist();

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("logout user"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-black py-[40px]">
      {/* 🔹 Main Navbar */}
      <div className="container mx-auto instrument-sans">
        <div className="flex justify-between items-center flex-wrap">
          {/* Left Menu */}
          <ul className="flex gap-10">
            <NavLink to="/">
              <li className="text-[#B0B0B0] text-[16px] hover:text-white">
                HOME
              </li>
            </NavLink>
            <NavLink to="/shop">
              <li className="text-[#B0B0B0] text-[16px] hover:text-white">
                SHOP
              </li>
            </NavLink>
            <NavLink to="/contact">
              <li className="text-[#B0B0B0] text-[16px] hover:text-white">
                CONTACT US
              </li>
            </NavLink>
          </ul>

          {/* Center Logo */}
          <h3 className="text-white text-[32px] font-semibold">
            ManStyle Co.
          </h3>

          {/* Right Section */}
          <div className="flex items-center gap-[30px] mt-4 lg:mt-0">
            {/* Greeting */}
            <h4 className="flex gap-1">
              <span className="text-[#B0B0B0]">Hello</span>
              <span className="text-[#F6F6F6]">
                {user?.displayName || "Guest"}
              </span>
            </h4>

            <img src={long} alt="" />

            {/* Search */}
            <Link to="/search">
              <img
                src={search}
                alt="Search"
                className="cursor-pointer hover:opacity-80"
              />
            </Link>

            {/* Wishlist */}
            <Link to="/wishlist" className="relative">
              <img
                src={favorite_border}
                alt="Wishlist"
                className="cursor-pointer hover:opacity-80"
              />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <img
                src={shopping}
                alt="Cart"
                className="w-8 h-8 cursor-pointer hover:opacity-80"
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* 🔽 User Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border border-gray-400">
                  <img
                    alt="User"
                    src={user?.photoURL || userIcon}
                    className="object-cover"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content bg-base-100 rounded-box shadow-lg mt-3 w-48 p-2 z-[9999]"
              >
                {user ? (
                  <>
                    <li>
                      <Link
                        to="/dashboard"
                        className="text-[#5B3E38] font-medium"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="text-red-500 font-medium"
                      >
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/login" className="text-[#5B3E38] font-medium">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/register"
                        className="text-[#5B3E38] font-medium"
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </ul> 
            </div>
          </div>
        </div>
      </div>

      {/* 🔸 Category Bar */}
      <div className="bg-[#1D1D1D] mt-10">
        <div className="container mx-auto flex flex-wrap justify-evenly mt-[40px] mb-[56px] pt-[22px] pb-[22px] instrument-sans">
          {[
            "Shirts",
            "T-Shirts",
            "Blazers",
            "Suits",
            "Polo",
            "KnitWear",
            "Pants",
            "Underwear",
            "Accessories",
          ].map((item, index) => (
            <React.Fragment key={index}>
              <h4 className="text-[#B0B0B0] hover:text-white cursor-pointer">
                {item}
              </h4>
              <img src={img} alt="" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navber;
