import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="px-8 bg-navbar">
      {" "}
      {/* Increased padding to the container */}
      <div className="navbar  ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <a className="px-4">Buy</a>
          <a className="px-4">Sells </a>
          <a className="px-4">Service</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div class="w-10 rounded-full">
            <img alt="" src="/logo.png" />
          </div>
        </div>
        <div className="navbar-end space-x-8">
          {" "}
          {/* Increased space between end items */}
          <a>Manage Rentals</a>
          <a className="font-bold">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
