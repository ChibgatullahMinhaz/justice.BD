import React from "react";
import Logo from "../../assets/logo-footer.png";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import toast from "react-hot-toast";

const Footer = () => {
    const handleClick =()=>{
        toast.error('Not Available')
    }
  return (
    <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-4 md:p-7 lg:p-10">
      <aside className="flex justify-center items-center">
        <img src={Logo} alt="our brand" />
        <h1 className="text-2xl font-bold">Justice.BD</h1>
      </aside>
      <nav className="border-b-2 border-dashed border-gray-500 w-5/8">
      <ul className="menu menu-horizontal flex-wrap px-1">
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
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="/" onClick={handleClick}>
            <FaFacebook size={26}></FaFacebook>
          </Link>
          <Link to="/" onClick={handleClick}>
            <FaGithub size={26}></FaGithub>
          </Link>
          <Link to="/" onClick={handleClick}>
            <FaLinkedin size={26}></FaLinkedin>
          </Link>
          <Link to="/" onClick={handleClick}>
            <FaYoutube size={26}></FaYoutube>
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
