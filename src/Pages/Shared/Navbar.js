import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

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
            ></ul>
          </div>
          <NavLink to="/home">
            {" "}
            <a className="px-4">Home</a>
          </NavLink>
          <NavLink to="/properties">
            {" "}
            <a className="px-4">Buy</a>
          </NavLink>

          <NavLink to="/search">
            {" "}
            <a className="px-4">Sells</a>
          </NavLink>
          <NavLink to="/ProperyDetails">
            {" "}
            <a className="px-4">Service</a>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLink to="/home">
            <div class="w-10 rounded-full">
              <img alt="" src="/logo.png" />
            </div>
          </NavLink>
        </div>
        <div className="navbar-end space-x-8">
          {" "}
          {/* Increased space between end items */}
          <NavLink to="/about">
            <a>Manage Rentals</a>
          </NavLink>
          <NavLink>
            <a>Sign In</a>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
