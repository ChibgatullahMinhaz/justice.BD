import React from "react";
import { Link, NavLink } from "react-router";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="navbar lg:px-10 md:px-7 px-3 mx-auto shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" mx-3.5 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/My-Bookings">My-Bookings</NavLink>
            </li>
            <li>
              <NavLink to="/Blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/Contact-Us">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className=" flex items-center gap-x-2.5">
          <img src={Logo} alt="justice.BD" />
          <a className="font-bold text-2xl">Justice.BD</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/My-Bookings">My-Bookings</NavLink>
          </li>
          <li>
            <NavLink to="/Blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink to="/Contact-Us">Contact Us</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/Contact-Us' className="btn bg-green-600 rounded-2xl text-base-200">Contact Now</Link>
      </div>
    </div>
  );
};

export default Navbar;
